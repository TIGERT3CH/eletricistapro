const Exercises = {
  render(exercise, index, onAnswer) {
    const container = document.createElement('div');
    container.className = 'exercise-container';
    container.style.marginBottom = '24px';
    container.style.padding = '20px';
    container.style.background = 'var(--bg-card)';
    container.style.borderRadius = 'var(--radius)';
    container.style.border = '2px solid var(--border)';

    const label = document.createElement('div');
    label.className = `exercise-label ${exercise.type}`;
    const labels = {
      'multiple-choice': 'Múltipla Escolha',
      'fill-blank': 'Preencher Lacuna',
      'drag-drop': 'Arrastar e Soltar',
      'calculation': 'Cálculo'
    };
    label.textContent = labels[exercise.type] || exercise.type;
    container.appendChild(label);

    const question = document.createElement('div');
    question.className = 'exercise-question';
    question.textContent = exercise.question;
    container.appendChild(question);

    switch (exercise.type) {
      case 'multiple-choice':
        this.renderMultipleChoice(container, exercise, onAnswer);
        break;
      case 'fill-blank':
        this.renderFillBlank(container, exercise, onAnswer);
        break;
      case 'drag-drop':
        this.renderDragDrop(container, exercise, onAnswer);
        break;
      case 'calculation':
        this.renderCalculation(container, exercise, onAnswer);
        break;
    }

    return container;
  },

  renderMultipleChoice(container, exercise, onAnswer) {
    const choicesDiv = document.createElement('div');
    choicesDiv.className = 'choices';

    exercise.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `<span class="choice-number">${i + 1}</span><span>${choice}</span>`;
      btn.onclick = () => {
        if (choicesDiv.dataset.answered) return;
        choicesDiv.dataset.answered = 'true';

        const isCorrect = i === exercise.correct;
        btn.classList.add(isCorrect ? 'correct' : 'wrong');

        // Show correct answer
        if (!isCorrect) {
          choicesDiv.children[exercise.correct].classList.add('correct');
        }

        // Disable all buttons
        Array.from(choicesDiv.children).forEach(b => b.style.pointerEvents = 'none');

        // Show feedback
        this.showFeedback(container, isCorrect, exercise.explanation);
        onAnswer(isCorrect);
      };
      choicesDiv.appendChild(btn);
    });

    container.appendChild(choicesDiv);
  },

  renderFillBlank(container, exercise, onAnswer) {
    const codeDiv = document.createElement('div');
    codeDiv.className = 'fill-code';

    let html = exercise.code;
    exercise.blanks.forEach((blank, i) => {
      html = html.replace('____', `<input type="text" class="fill-blank" data-index="${i}" placeholder="${blank.placeholder || ''}" style="width: 120px;">`);
    });
    codeDiv.innerHTML = html;
    container.appendChild(codeDiv);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn primary';
    checkBtn.textContent = 'Verificar';
    checkBtn.onclick = () => {
      if (checkBtn.dataset.answered) return;
      checkBtn.dataset.answered = 'true';

      let allCorrect = true;
      const inputs = codeDiv.querySelectorAll('.fill-blank');
      inputs.forEach((input, i) => {
        const answer = exercise.blanks[i].answer;
        const userAnswer = input.value.trim();
        const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase() || userAnswer === answer;
        input.classList.add(isCorrect ? 'correct' : 'wrong');
        input.disabled = true;
        if (!isCorrect) allCorrect = false;
      });

      this.showFeedback(container, allCorrect, exercise.explanation);
      onAnswer(allCorrect);
    };
    container.appendChild(checkBtn);
  },

  renderDragDrop(container, exercise, onAnswer) {
    const dragContainer = document.createElement('div');
    dragContainer.className = 'drag-container';

    const source = document.createElement('div');
    source.className = 'drag-source';

    const target = document.createElement('div');
    target.className = 'drag-target';
    target.innerHTML = '<span class="drag-placeholder">Arraste os itens aqui na ordem correta</span>';

    const shuffled = [...exercise.pieces].sort(() => Math.random() - 0.5);
    const placed = [];

    shuffled.forEach((piece, i) => {
      const item = document.createElement('div');
      item.className = 'drag-item';
      item.textContent = piece;
      item.draggable = true;
      item.dataset.index = i;

      item.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', i);
        item.style.opacity = '0.5';
      };

      item.ondragend = () => {
        item.style.opacity = '1';
      };

      source.appendChild(item);
    });

    target.ondragover = (e) => {
      e.preventDefault();
      target.classList.add('over');
    };

    target.ondragleave = () => {
      target.classList.remove('over');
    };

    target.ondrop = (e) => {
      e.preventDefault();
      target.classList.remove('over');
      const idx = e.dataTransfer.getData('text/plain');
      const item = source.children[idx];

      if (item && !item.classList.contains('placed')) {
        item.classList.add('placed');
        const clone = document.createElement('div');
        clone.className = 'drag-item';
        clone.textContent = item.textContent;
        clone.style.cursor = 'pointer';
        clone.onclick = () => {
          clone.remove();
          item.classList.remove('placed');
          const placeholder = target.querySelector('.drag-placeholder');
          if (placeholder) placeholder.style.display = placed.length === 0 ? 'block' : 'none';
          placed.splice(placed.indexOf(item.textContent), 1);
        };

        const placeholder = target.querySelector('.drag-placeholder');
        if (placeholder) placeholder.style.display = 'none';

        target.appendChild(clone);
        placed.push(item.textContent);
      }
    };

    dragContainer.appendChild(source);
    dragContainer.appendChild(target);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn primary';
    checkBtn.textContent = 'Verificar Ordem';
    checkBtn.onclick = () => {
      if (checkBtn.dataset.answered) return;
      checkBtn.dataset.answered = 'true';

      const userOrder = Array.from(target.querySelectorAll('.drag-item')).map(el => el.textContent);
      const isCorrect = JSON.stringify(userOrder) === JSON.stringify(exercise.correctOrder);

      this.showFeedback(container, isCorrect, exercise.explanation);
      onAnswer(isCorrect);
    };
    dragContainer.appendChild(checkBtn);

    container.appendChild(dragContainer);
  },

  renderCalculation(container, exercise, onAnswer) {
    const inputDiv = document.createElement('div');
    inputDiv.style.display = 'flex';
    inputDiv.style.gap = '12px';
    inputDiv.style.alignItems = 'center';
    inputDiv.style.marginTop = '12px';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite o resultado';
    input.style.cssText = 'flex:1;padding:12px;border:2px solid var(--border);border-radius:var(--radius-sm);font-family:Nunito,sans-serif;font-size:16px;font-weight:700;outline:none;';
    inputDiv.appendChild(input);

    const unit = document.createElement('span');
    unit.textContent = exercise.unit || '';
    unit.style.cssText = 'font-weight:700;color:var(--text-light);';
    inputDiv.appendChild(unit);

    container.appendChild(inputDiv);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn primary';
    checkBtn.textContent = 'Calcular';
    checkBtn.onclick = () => {
      if (checkBtn.dataset.answered) return;
      checkBtn.dataset.answered = 'true';

      const userAnswer = parseFloat(input.value.replace(',', '.'));
      const isCorrect = exercise.validate(userAnswer);

      input.style.borderColor = isCorrect ? 'var(--secondary)' : 'var(--danger)';
      input.style.background = isCorrect ? 'rgba(0,184,148,0.1)' : 'rgba(255,107,107,0.1)';
      input.disabled = true;

      this.showFeedback(container, isCorrect, exercise.explanation);
      onAnswer(isCorrect);
    };
    container.appendChild(checkBtn);
  },

  showFeedback(container, isCorrect, explanation) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
      <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
      <div>
        <div class="feedback-text">${isCorrect ? 'Correto!' : 'Incorreto!'}</div>
        <div class="feedback-explanation">${explanation}</div>
      </div>
    `;
    container.appendChild(feedback);
  }
};

if (typeof window !== 'undefined') {
  window.Exercises = Exercises;
}
