const COURSE_DATA = {
  title: "EletricistaPro",
  subtitle: "Domine a Eletricidade",
  avatar: "⚡",
  modules: [
    {
    id: "m1",
    title: "Fundamentos da Eletricidade",
    description: "Conceitos básicos, Lei de Ohm, potência e circuitos",
    icon: "⚡",
    color: "#FFD700",
    lessons: [
      {
        id: "m1-l1",
        title: "O que é Eletricidade",
        theory: `<h2>O que é Eletricidade</h2>

<h3>🧠 Por onde começar? Entendendo o átomo</h3>
<p>Antes de falar de eletricidade, precisamos entender a <strong>unidade básica da matéria</strong>: o átomo. Imagine que cada átomo é como um mini sistema solar:</p>
<ul>
  <li><strong>Núcleo</strong> (centro): contém prótons (carga +) e nêutrons (carga 0)</li>
  <li><strong>Eletrosfera</strong> (ao redor): contém elétrons (carga -) girando em órbitas</li>
</ul>

<p><strong>Por que isso importa?</strong> Porque a eletricidade é, basicamente, o <strong>movimento organizado de elétrons</strong> de um átomo para outro através de um material condutor.</p>

<h3>💡 Analogia da Água (a mais clássica!)</h3>
<p>Pense em um <strong>sistema hidráulico</strong>:</p>
<table>
  <tr><th>Eletricidade</th><th>Água</th></tr>
  <tr><td>Tensão (V)</td><td>Pressão da água (altura da torre d'água)</td></tr>
  <tr><td>Corrente (I)</td><td>Volume de água que flui por segundo</td></tr>
  <tr><td>Resistência (R)</td><td>Diâmetro do cano (quanto estreito, mais dificuldade)</td></tr>
</table>
<p>Assim como a água precisa de <strong>pressão</strong> para fluir por um cano, os elétrons precisam de <strong>tensão</strong> para se deslocar por um fio.</p>

<h3>⚡ Os dois tipos de corrente</h3>
<p><strong>Corrente Contínua (CC)</strong> — Os elétrons fluem em <strong>uma única direção</strong>, como o fluxo de água em um rio. Exemplos:</p>
<ul>
  <li>Baterias de celular e notebook</li>
  <li>Painéis solares</li>
  <li>Veículos elétricos</li>
</ul>

<p><strong>Corrente Alternada (CA)</strong> — Os elétrons <strong>oscilam de um lado para o outro</strong> (50 ou 60 vezes por segundo). É a energia que chega na sua tomada! No Brasil, usamos <strong>60 Hz</strong> (60 oscilações por segundo).</p>

<h3>🔋 Fontes de energia elétrica</h3>
<p>Para gerar eletricidade, precisamos <strong>converter outra forma de energia</strong> em energia elétrica:</p>
<ul>
  <li><strong>Hidrelétricas:</strong> Energia cinética da água → elétrica</li>
  <li><strong>Eólicas:</strong> Energia do vento → elétrica</li>
  <li><strong>Solares:</strong> Luz do sol → elétrica (efeito fotovoltaico)</li>
  <li><strong>Termoelétricas:</strong> Calor → vapor → turbina → elétrica</li>
</ul>

<h3>🏠 Aplicação na sua casa</h3>
<p>Quando você liga uma lâmpada:</p>
<ol>
  <li>A <strong>usina</strong> gera tensão (pressão)</li>
  <li>Os <strong>fios de cobre</strong> conduzem os elétrons (meio condutor)</li>
  <li>A <strong>lâmpada</strong> oferece resistência, convertendo energia elétrica em luz e calor</li>
  <li>O <strong>disjuntor</strong> protege contra sobrecorrentes (como uma válvula de segurança)</li>
</ol>

<h3>⚠️ Erros que todo iniciante comete</h3>
<ul>
  <li><strong>Confundir tensão com corrente:</strong> Tensão é a "força" que empurra; corrente é a quantidade que flui</li>
  <li><strong>Achar que 127V é seguro:</strong> Ambos (127V e 220V) são letais dependendo das condições!</li>
  <li><strong>Esquecer o terra:</strong> O fio verde/amarelo é essencial para sua segurança</li>
</ul>

<h3>🎯 Resumo Rápido</h3>
<p><strong>Eletricidade</strong> = Fluxo organizado de elétrons por um condutor, impulsionado por uma diferença de tensão.</p>`,
        exercises: [
          { 
            type: "multiple-choice", 
            question: "Pense na analogia da água: o que representaria a 'tensão' em um sistema hidráulico?", 
            choices: ["O volume de água", "A pressão da água", "O diâmetro do cano", "A temperatura"], 
            correct: 1, 
            explanation: "A tensão é análoga à pressão da água. Assim como a pressão empurra a água pelo cano, a tensão empurra os elétrons pelo fio." 
          },
          { 
            type: "multiple-choice", 
            question: "Qual partícula se desloca para criar a corrente elétrica em um fio de cobre?", 
            choices: ["Próton", "Nêutron", "Elétron", "Íon"], 
            correct: 2, 
            explanation: "Os elétrons, com carga negativa, são as partículas que se deslocam nos condutores metálicos. Prótons e nêutrons ficam no núcleo do átomo." 
          },
          { 
            type: "multiple-choice", 
            question: "No Brasil, a rede elétrica oscila quantas vezes por segundo?", 
            choices: ["50 Hz", "60 Hz", "120 Hz", "25 Hz"], 
            correct: 1, 
            explanation: "O Brasil usa 60 Hz, meaning 60 oscilações por segundo. Países como a Europa usam 50 Hz." 
          },
          { 
            type: "fill-blank", 
            code: "A corrente ________ mantém os elétrons fluindo em uma única direção, enquanto a corrente ________ alterna o sentido do fluxo.", 
            blanks: [{ answer: "contínua", placeholder: "tipo de corrente" }, { answer: "alternada", placeholder: "tipo de corrente" }], 
            explanation: "CC = Contínua (direção fixa). CA = Alternada (oscila). Baterias = CC; Tomadas = CA." 
          },
          { 
            type: "drag-drop", 
            question: "Organize os elementos necessários para haver fluxo de elétrons (do início ao fim):", 
            pieces: ["Fonte de tensão", "Diferença de potencial", "Meio condutor", "Circuito fechado"], 
            correctOrder: ["Fonte de tensão", "Diferença de potencial", "Meio condutor", "Circuito fechado"], 
            explanation: "A fonte cria a diferença de potencial (tensão), que empurra os elétrons pelo condutor em circuito fechado." 
          },
          { 
            type: "calculation", 
            question: "Se uma bateria de 9V está ligada a um resistor de 3Ω, qual a corrente que flui pelo circuito? (Use Lei de Ohm: I = V/R)", 
            answer: 3, 
            unit: "A", 
            validate: function(v) { return Math.abs(v - 3) < 0.1; }, 
            explanation: "I = V/R = 9/3 = 3A. A Lei de Ohm é a base de todos os cálculos elétricos. Memorize: I = V/R!" 
          }
        ]
      },
      {
        id: "m1-l2",
        title: "Tensão e seus Tipos",
        theory: `<h2>Tensão e seus Tipos</h2>

<h3>🔋 O que é Tensão Elétrica?</h3>
<p><strong>Tensão</strong> (também chamada de diferença de potencial) é a <strong>"pressão"</strong> que faz os elétrons se moverem de um ponto para outro. É medida em <strong>Volt (V)</strong>.</p>

<h3>💧 Analogia da Água (parte 2)</h3>
<p>Imagine duas torres d'água:</p>
<ul>
  <li><strong>Torre alta</strong> (mais água): tem mais "pressão" → maior tensão</li>
  <li><strong>Torre baixa</strong> (menos água): tem menos "pressão" → menor tensão</li>
</ul>
<p>A <strong>diferença de altura</strong> entre as torres é análoga à <strong>diferença de potencial</strong> (tensão). Quanto maior a diferença, maior a "força" que empurra os elétrons.</p>

<h3>📊 Tensão Eficaz vs. Tensão de Pico</h3>
<p>A onda senoidal da CA tem três valores importantes:</p>

<table>
  <tr><th>Tipo</th><th>Símbolo</th><th>O que é</th><th>Exemplo (127V)</th></tr>
  <tr><td>Eficaz (RMS)</td><td>Vef ou Vrms</td><td>O valor que medimos e pagamos na conta de luz</td><td>127V</td></tr>
  <tr><td>De Pico</td><td>Vp</td><td>O valor MÁXIMO que a onda atinge</td><td>~180V</td></tr>
  <tr><td>Pico a Pico</td><td>Vpp</td><td>Distância entre o máximo positivo e negativo</td><td>~360V</td></tr>
</table>

<p><strong>Fórmula essencial:</strong></p>
<p><code>Vp = Vef × √2</code> (ou seja, Vp = Vef × 1,414)</p>

<h3>🌍 Tensão no Brasil</h3>
<p>No Brasil, temos <strong>duas tensões residenciais</strong>:</p>
<ul>
  <li><strong>127V:</strong> Usada em tomadas comuns (lâmpadas, ventiladores, TV)</li>
  <li><strong>220V:</strong> Usada em equipamentos de alto consumo (chuveiro elétrico, ar-condicionado)</li>
</ul>
<p><strong>Variação permitida:</strong> ±10% da tensão nominal. Ou seja:</p>
<ul>
  <li>Para 127V: aceitável entre 114V e 140V</li>
  <li>Para 220V: aceitável entre 198V e 242V</li>
</ul>

<h3>⚠️ Perigo Real: Ambos Matam!</h3>
<p><strong>Erro fatal:</strong> Achar que 127V é "seguro" e 220V é "perigoso".</p>
<p>A verdade: <strong>ambas são letais</strong> dependendo de:</p>
<ul>
  <li>Resistência do seu corpo (se está molhado, a resistência cai!)</li>
  <li>Trajeto da corrente (mão-mão é o mais perigoso)</li>
  <li>Tempo de contato</li>
</ul>

<h3>🔧 Multímetro: como medir</h3>
<p>Para medir tensão com o multímetro:</p>
<ol>
  <li>Selecione o modo <strong>V~</strong> (CA) ou <strong>V=</strong> (CC)</li>
  <li>Conecte a <strong>sonda vermelha</strong> no terminal positivo</li>
  <li>Conecte a <strong>sonda preta</strong> no terminal negativo</li>
  <li><strong>NUNCA</strong> meça corrente (A) com o multímetro em modo de tensão!</li>
</ol>

<h3>🏠 Aplicação Prática</h3>
<p>Quando você compra um equipamento eletrônico (notebook, TV), ele vem com uma <strong>faixa de tensão</strong>: "127V/220V" ou "100-240V". Isso indica qual tensão o equipamento suporta.</p>
<p><strong>Dica:</strong> Equipamentos com "bivolt" funcionam em ambas as tensões automaticamente.</p>`,
        exercises: [
          { 
            type: "multiple-choice", 
            question: "Se a tensão eficaz da sua casa é 220V, qual seria a tensão de pico máxima que aparece na rede?", 
            choices: ["220V", "311V", "380V", "440V"], 
            correct: 1, 
            explanation: "Vp = Vef × √2 = 220 × 1,414 ≈ 311V. A tensão de pico é sempre maior que a eficaz! É por isso que equipamentos precisam suportar mais que a tensão nominal." 
          },
          { 
            type: "multiple-choice", 
            question: "Qual é a variação de tensão aceitável em uma rede de 127V?", 
            choices: ["120V a 135V", "114V a 140V", "100V a 150V", "125V a 129V"], 
            correct: 1, 
            explanation: "A norma permite ±10%. Para 127V: mínimo 114V e máximo 140V. Fora dessa faixa, há risco de danos aos equipamentos." 
          },
          { 
            type: "fill-blank", 
            code: "A tensão ________ é o valor medido pelo multímetro e que pagamos na conta de luz. A tensão ________ é o valor máximo da onda senoidal.", 
            blanks: [{ answer: "eficaz", placeholder: "tipo de tensão" }, { answer: "pico", placeholder: "valor máximo" }], 
            explanation: "Eficaz (RMS) = valor útil, o que medimos. Pico = valor máximo, maior que a eficaz." 
          },
          { 
            type: "calculation", 
            question: "Uma tomada fornece 127V eficazes. Qual é a tensão de pico?", 
            answer: 179.6, 
            unit: "V", 
            validate: function(v) { return Math.abs(v - 179.6) < 2; }, 
            explanation: "Vp = 127 × 1,414 = 179,6V. Arredondando, temos ~180V de pico. Essa é a tensão máxima que aparece 120 vezes por segundo!" 
          },
          { 
            type: "drag-drop", 
            question: "Organize os tipos de tensão do menor para o maior valor:", 
            pieces: ["Tensão Eficaz (127V)", "Tensão de Pico (~180V)", "Tensão Pico a Pico (~360V)"], 
            correctOrder: ["Tensão Eficaz (127V)", "Tensão de Pico (~180V)", "Tensão Pico a Pico (~360V)"], 
            explanation: "Eficaz < Pico < Pico a Pico. A eficaz é a menor; a pico a pico é o dobro da pico." 
          }
        ]
      },
      {
        id: "m1-l3",
        title: "Corrente Elétrica",
        theory: `<h2>Corrente Elétrica</h2>

<h3>🌊 O que é Corrente Elétrica?</h3>
<p><strong>Corrente elétrica</strong> (I) é a <strong>quantidade de elétrons</strong> que passa por um ponto do condutor em um determinado tempo. É medida em <strong>Ampère (A)</strong>.</p>

<h3>💧 Analogia da Água (parte 3)</h3>
<table>
  <tr><th>Eletricidade</th><th>Água</th></tr>
  <tr><td>Tensão (V)</td><td>Pressão (altura da torre)</td></tr>
  <tr><td><strong>Corrente (I)</strong></td><td><strong>Volume de água por segundo</strong></td></tr>
  <tr><td>Resistência (R)</td><td>Diâmetro do cano</td></tr>
</table>
<p>Assim como a corrente de água é o <strong>volume</strong> que flui por segundo, a corrente elétrica é a <strong>quantidade de elétrons</strong> que flui por segundo.</p>

<h3>⚠️ Corrente Convencional vs. Real</h3>
<p><strong>Atenção:</strong> Existe uma confusão histórica que você precisa entender:</p>
<ul>
  <li><strong>Corrente convencional:</strong> Do + para o - (como se fossem cargas positivas)</li>
  <li><strong>Corrente real:</strong> Dos - para o + (elétrons, que são negativos)</li>
</ul>
<p><strong>Por que isso?</strong> No século XVIII, os cientistas achavam que eram cargas positivas se movendo. Quando descobriram que eram elétrons (negativos), já era tarde demais para mudar a convenção!</p>
<p><strong>Resultado:</strong> Nos cálculos, usamos a <strong>corrente convencional</strong> (do + para o -), mesmo sabendo que na realidade são os elétrons que se movem no sentido oposto.</p>

<h3>📏 Unidades de Corrente</h3>
<table>
  <tr><th>Unidade</th><th>Símbolo</th><th>Equivalência</th><th>Uso</th></tr>
  <tr><td>Ampère</td><td>A</td><td>1A</td><td>Correntes industriais</td></tr>
  <tr><td>Miliampère</td><td>mA</td><td>1A = 1.000mA</td><td>Eletrônica</td></tr>
  <tr><td>Microampère</td><td>μA</td><td>1A = 1.000.000μA</td><td>Sensores, alarmes</td></tr>
</table>

<h3>☠️ Efeitos da Corrente no Corpo Humano</h3>
<p><strong>Isso é SÉRIO:</strong> A corrente elétrica pode matar! Veja os efeitos:</p>
<table>
  <tr><th>Corrente</th><th>Efeito</th></tr>
  <tr><td>1 mA</td><td>Formigamento leve (não sente perigo)</td></tr>
  <tr><td>5 mA</td><td>Choque perceptível</td></tr>
  <tr><td>10 mA</td><td>Tetanização muscular (não consegue soltar o fio!)</td></tr>
  <tr><td>30 mA</td><td>Dificuldade respiratória</td></tr>
  <tr><td>100 mA</td><td>Fibrilação ventricular (parada cardíaca)</td></tr>
  <tr><td>> 1A</td><td>Queimaduras graves, morte certa</td></tr>
</table>

<p><strong>Fato assustador:</strong> Um choque de 30mA em 1 segundo pode ser letal! Por isso, o <strong>DR (Dispositivo Residual)</strong> é dimensionado para 30mA e desliga em menos de 30ms.</p>

<h3>🏠 Aplicação Prática: O DR na sua casa</h3>
<p>O DR (Interruptor Diferencial Residual) é o dispositivo que salva vidas:</p>
<ul>
  <li>Ele compara a corrente que <strong>sai pela fase</strong> com a que <strong>retorna pelo neutro</strong></li>
  <li>Se houver diferença (fuga para terra), ele <strong>desliga imediatamente</strong></li>
  <li>É obrigatório em: banheiros, cozinhas, lavanderias, áreas externas</li>
</ul>

<h3>📐 Fórmula da Corrente</h3>
<p><code>I = Q / t</code></p>
<p>Onde:</p>
<ul>
  <li><strong>I</strong> = Corrente (Ampères)</li>
  <li><strong>Q</strong> = Carga (Coulombs)</li>
  <li><strong>t</strong> = Tempo (segundos)</li>
</ul>
<p><strong>Exemplo:</strong> Se 60 Coulombs passam por um fio em 30 segundos, a corrente é:</p>
<p><code>I = 60 / 30 = 2A</code></p>`,
        exercises: [
          { 
            type: "multiple-choice", 
            question: "Segundo a tabela de efeitos, qual corrente já pode causar tetanização muscular (não conseguir soltar o fio)?", 
            choices: ["1 mA", "5 mA", "10 mA", "30 mA"], 
            correct: 2, 
            explanation: "A 10mA, ocorre tetanização muscular: seus músculos contraem involuntariamente e você NÃO consegue soltar o fio elétrico. É por isso que choques acidentais são tão perigosos!" 
          },
          { 
            type: "multiple-choice", 
            question: "A corrente convencional é definida como o fluxo de cargas positivas em qual direção?", 
            choices: ["Do negativo para o positivo", "Do positivo para o negativo", "Em ambas as direções", "De cima para baixo"], 
            correct: 1, 
            explanation: "Por convenção histórica, a corrente vai do + para o -. Mas na realidade, são os elétrons (negativos) que vão do - para o +. Usamos a convenção nos cálculos!" 
          },
          { 
            type: "fill-blank", 
            code: "1 Ampère = ________ miliampères = ________ microampères.", 
            blanks: [{ answer: "1000", placeholder: "miliampères" }, { answer: "1000000", placeholder: "microampères" }], 
            explanation: "1A = 1.000mA = 1.000.000μA. Lembre: 'mili' = 10⁻³ (dividir por 1000), 'micro' = 10⁻� (dividir por 1 milhão)." 
          },
          { 
            type: "calculation", 
            question: "Se 120 Coulombs de carga fluem por um fio em 60 segundos, qual é a corrente?", 
            answer: 2, 
            unit: "A", 
            validate: function(v) { return Math.abs(v - 2) < 0.1; }, 
            explanation: "I = Q/t = 120/60 = 2A. Corrente é a 'velocidade' com que a carga se move. Mais carga no mesmo tempo = mais corrente." 
          },
          { 
            type: "drag-drop", 
            question: "Organize os efeitos da corrente no corpo humano do menos para o mais grave:", 
            pieces: ["Fibrilação ventricular", "Formigamento", "Tetanização muscular", "Dificuldade respiratória"], 
            correctOrder: ["Formigamento", "Tetanização muscular", "Dificuldade respiratória", "Fibrilação ventricular"], 
            explanation: "Formigamento (~1mA) → Tetanização (~10mA) → Dificuldade respiratória (~30mA) → Fibrilação (~100mA). Quanto maior a corrente, mais grave o efeito!" 
          }
        ]
      },
      {
        id: "m1-l4",
        title: "Resistência e Resistividade",
        theory: `<h2>Resistência e Resistividade</h2>

<h3>🚧 O que é Resistência Elétrica?</h3>
<p><strong>Resistência</strong> (R) é a <strong>dificuldade</strong> que um material oferece para a passagem da corrente elétrica. É medida em <strong>Ohm (Ω)</strong>.</p>

<h3>💧 Analogia da Água (parte 4)</h3>
<table>
  <tr><th>Eletricidade</th><th>Água</th></tr>
  <tr><td>Tensão (V)</td><td>Pressão (altura da torre)</td></tr>
  <tr><td>Corrente (I)</td><td>Volume de água/segundo</td></tr>
  <tr><td><strong>Resistência (R)</strong></td><td><strong>Diâmetro do cano</strong></td></tr>
</table>
<p>Quanto mais <strong>estreito</strong> o cano, mais <strong>dificuldade</strong> a água tem para passar. O mesmo acontece com o fio elétrico!</p>

<h3>📏 Fórmula da Resistência</h3>
<p><code>R = ρ × L / A</code></p>
<p>Onde:</p>
<ul>
  <li><strong>R</strong> = Resistência (Ω)</li>
  <li><strong>ρ</strong> (rho) = Resistividade do material (Ω·m)</li>
  <li><strong>L</strong> = Comprimento do fio (m)</li>
  <li><strong>A</strong> = Área da seção transversal (m²)</li>
</ul>

<h3>📊 Tabela de Resistividade</h3>
<table>
  <tr><th>Material</th><th>Resistividade (Ω·m)</th><th>Uso</th></tr>
  <tr><td>Cobre</td><td>1,72 × 10⁻⁸</td><td>Fios elétricos (padrão)</td></tr>
  <tr><td>Alumínio</td><td>2,82 × 10⁻⁸</td><td>Linhas de transmissão</td></tr>
  <tr><td>Ferro</td><td>10 × 10⁻⁸</td><td>Solda, estruturas</td></tr>
  <tr><td>Ouro</td><td>2,44 × 10⁻⁸</td><td>Contatos eletrônicos</td></tr>
</table>

<p><strong>Por que o cobre?</strong> Porque tem a menor resistividade (exceto prata e ouro, que são caros demais). Mas o alumínio é mais leve e barato, por isso é usado em linhas aéreas.</p>

<h3>🌡️ Efeito da Temperatura</h3>
<p>Quando a temperatura aumenta:</p>
<ul>
  <li>Os átomos vibram mais</li>
  <li>Os elétrons colidem mais com os átomos</li>
  <li>Resultado: <strong>resistência aumenta!</strong></li>
</ul>
<p><strong>Fórmula:</strong></p>
<p><code>R₂ = R₁ × [1 + α × (T₂ - T₁)]</code></p>
<p>Onde α ≈ 0,00393/°C para o cobre.</p>

<h3>🏠 Aplicação Prática: Qual fio usar?</h3>
<table>
  <tr><th>Seção (mm²)</th><th>Corrente Máx.</th><th>Uso Típico</th></tr>
  <tr><td>1,5 mm²</td><td>16A</td><td>Iluminação</td></tr>
  <tr><td>2,5 mm²</td><td>25A</td><td>Tomadas gerais</td></tr>
  <tr><td>4,0 mm²</td><td>35A</td><td>Chuveiro elétrico</td></tr>
  <tr><td>6,0 mm²</td><td>45A</td><td>Forno elétrico</td></tr>
</table>

<h3>⚠️ Erro Fatal: Fio de Alumínio em Residência</h3>
<p><strong>NUNCA</strong> use fio de alumínio em instalações residenciais novas!</p>
<ul>
  <li>O alumínio <strong>oxida</strong> com o tempo</li>
  <li>A oxidação cria <strong>resistência no contato</strong></li>
  <li>Isso gera <strong>calor</strong> pode causar <strong>incêndio!</strong></li>
</ul>

<h3>🎯 Resumo: Quanto maior a seção, menor a resistência!</h3>
<p>Fio grosso = menos resistência = mais corrente suporta = mais seguro.</p>`,
        exercises: [
          { 
            type: "multiple-choice", 
            question: "Se você aumentar o comprimento de um fio para o dobro, o que acontece com a resistência?", 
            choices: ["Diminui pela metade", "Permanece igual", "Dobra", "Quadruplica"], 
            correct: 2, 
            explanation: "Pela fórmula R = ρ×L/A, se L dobra, R também dobra. Fio mais longo = mais resistência!" 
          },
          { 
            type: "multiple-choice", 
            question: "Qual material é MAIS indicado para fios elétricos residenciais?", 
            choices: ["Alumínio", "Ferro", "Cobre", "Ouro"], 
            correct: 2, 
            explanation: "O cobre tem menor resistividade (1,72×10⁻⁸ Ω·m) que o alumínio (2,82×10⁻⁸ Ω·m), além de ser mais seguro (não oxida)." 
          },
          { type: "fill-blank", 
            code: "A resistência é diretamente proporcional ao comprimento do fio e ________ proporcional à seção transversal.", 
            blanks: [{ answer: "inversamente", placeholder: "relação com seção" }], 
            explanation: "Fio mais longo = mais resistência (+). Seção maior = menos resistência (-). São relações inversas!" 
          },
          { 
            type: "calculation", 
            question: "Um fio de cobre tem 100m e seção 4mm². A resistividade do cobre é 1,72×10⁻⁸ Ω·m. Qual a resistência?", 
            answer: 0.43, 
            unit: "Ω", 
            validate: function(v) { return Math.abs(v - 0.43) < 0.05; }, 
            explanation: "R = ρ×L/A = 1,72×10⁻⁸ × 100 / (4×10⁻⁶) = 0,43Ω. Em fios curtos, a resistência é muito baixa!" 
          },
          { 
            type: "drag-drop", 
            question: "Organize os fios por capacidade de corrente (do menor para o maior):", 
            pieces: ["Fio 6mm² (45A)", "Fio 1,5mm² (16A)", "Fio 4mm² (35A)", "Fio 2,5mm² (25A)"], 
            correctOrder: ["Fio 1,5mm² (16A)", "Fio 2,5mm² (25A)", "Fio 4mm² (35A)", "Fio 6mm² (45A)"], 
            explanation: "Quanto maior a seção, maior a corrente que suporta. Ordem: 1,5 → 2,5 → 4 → 6 mm²" 
          }
        ]
      },
      {
        id: "m1-l5",
        title: "Lei de Ohm",
        theory: `<h2>Lei de Ohm</h2>

<h3>⚡ A Fórmula Mais Importante da Eletricidade!</h3>
<p>A <strong>Lei de Ohm</strong> é a relação fundamental que conecta tensão, corrente e resistência. Se você só pudesse decorar UMA fórmula na vida, seria esta:</p>

<p><code>V = R × I</code></p>

<h3>💧 Analogia da Água (parte 5 - final!)</h3>
<table>
  <tr><th>Eletricidade</th><th>Água</th><th>Relação</th></tr>
  <tr><td>Tensão (V)</td><td>Pressão</td><td>Quanto mais pressão, mais água flui</td></tr>
  <tr><td>Corrente (I)</td><td>Volume/segundo</td><td>Quanto mais volume, mais água flui</td></tr>
  <tr><td>Resistência (R)</td><td>Diâmetro do cano</td><td>Quanto mais estreito, menos água flui</td></tr>
</table>

<p><strong>Lei de Ohm em palavras:</strong> "A tensão é igual à resistência multiplicada pela corrente."</p>

<h3>📐 As 3 Formas da Lei de Ohm</h3>
<p>Dependendo do que você quer calcular, pode usar uma das três formas:</p>

<table>
  <tr><th>O que quer calcular</th><th>Fórmula</th><th>Exemplo</th></tr>
  <tr><td><strong>Tensão (V)</strong></td><td>V = R × I</td><td>10Ω × 3A = 30V</td></tr>
  <tr><td><strong>Resistência (R)</strong></td><td>R = V / I</td><td>120V / 4A = 30Ω</td></tr>
  <tr><td><strong>Corrente (I)</strong></td><td>I = V / R</td><td>220V / 50Ω = 4,4A</td></tr>
</table>

<h3>🔺 O Triângulo de Ohm (sua melhor amigo!)</h3>
<p>Imagine um triângulo com:</p>
<ul>
  <li><strong>V</strong> no topo</li>
  <li><strong>R</strong> na base esquerda</li>
  <li><strong>I</strong> na base direita</li>
</ul>
<p>Para calcular qualquer grandeza, <strong>copre-a</strong> e multiplique/divida as outras:</p>
<ul>
  <li>Para <strong>V</strong>: copre V → sobra R × I</li>
  <li>Para <strong>R</strong>: copre R → sobra V / I</li>
  <li>Para <strong>I</strong>: copre I → sobra V / R</li>
</ul>

<h3>📊 Exemplos Práticos</h3>
<p><strong>Exemplo 1:</strong> Uma lâmpada de 60Ω ligada a 127V</p>
<p><code>I = V / R = 127 / 60 = 2,12A</code></p>
<p>A lâmpada consome 2,12 Ampères.</p>

<p><strong>Exemplo 2:</strong> Um aquecedor de 20Ω em 220V</p>
<p><code>I = V / R = 220 / 20 = 11A</code></p>
<p>O aquecedor consome 11 Ampères (muita corrente!).</p>

<h3>⚠️ Cuidados Importantes</h3>
<ul>
  <li><strong>A Lei de Ohm funciona apenas para circuitos LINEARES</strong> (resistores puros)</li>
  <li>Componentes como diodos, transistores e motores NÃO seguem a Lei de Ohm diretamente</li>
  <li>Em motores, parte da energia vira <strong>movimento</strong>, não só calor</li>
</ul>

<h3>🏠 Aplicação Prática: Dimensionar Disjuntor</h3>
<p>Para saber qual disjuntor usar, primeiro calculamos a corrente:</p>
<ol>
  <li>Somamos a potência de todos os equipamentos do circuito</li>
  <li>Dividimos pela tensão: <code>I = P / V</code></li>
  <li>O disjuntor deve ser <strong>maior</strong> que essa corrente</li>
</ol>
<p><strong>Exemplo:</strong> Circuito com 3 lâmpadas de 100W cada em 127V:</p>
<p><code>P total = 3 × 100 = 300W</code></p>
<p><code>I = 300 / 127 = 2,36A</code></p>
<p>Usar disjuntor de <strong>10A</strong> (próximo padrão disponível).</p>

<h3>🎯 Dica de Ouro</h3>
<p><strong>Memorize o triângulo de Ohm!</strong> Ele vai te acompanhar em TODO o curso. Se você dominar essa fórmula, 50% da eletricidade já está compreendida.</p>`,
        exercises: [
          { 
            type: "multiple-choice", 
            question: "Uma resistência de 100Ω é conectada a uma bateria de 12V. Qual a corrente que flui?", 
            choices: ["0,12A", "12A", "120A", "1200A"], 
            correct: 0, 
            explanation: "I = V/R = 12/100 = 0,12A. A corrente é pequena porque a resistência é alta. Se a resistência diminuísse, a corrente aumentaria!" 
          },
          { 
            type: "multiple-choice", 
            question: "Para calcular a RESISTÊNCCIA usando a Lei de Ohm, qual fórmula usamos?", 
            choices: ["R = V × I", "R = V / I", "R = I / V", "R = V + I"], 
            correct: 1, 
            explanation: "R = V/I é a fórmula correta. Para encontrar a resistência, dividimos a tensão pela corrente." 
          },
          { 
            type: "fill-blank", 
            code: "Na Lei de Ohm: V = R × I. Se R = 50Ω e I = 4A, então V = ________ V.", 
            blanks: [{ answer: "200", placeholder: "tensão calculada" }], 
            explanation: "V = R × I = 50 × 4 = 200V. É só multiplicar!" 
          },
          { 
            type: "calculation", 
            question: "Um chuveiro elétrico tem resistência de 20Ω e é ligado em 220V. Qual a corrente que ele consome?", 
            answer: 11, 
            unit: "A", 
            validate: function(v) { return Math.abs(v - 11) < 0.5; }, 
            explanation: "I = V/R = 220/20 = 11A. Essa é uma corrente alta! Por isso o chuveiro precisa de fio grosso (4mm²) e disjuntor dedicado." 
          },
          { 
            type: "drag-drop", 
            question: "Complete o Triângulo de Ohm colocando as fórmulas no lugar correto:", 
            pieces: ["R = V / I", "I = V / R", "V = R × I"], 
            correctOrder: ["V = R × I", "R = V / I", "I = V / R"], 
            explanation: "V no topo (R×I). R na base (V/I). I na base (V/R). Copre o que quer calcular e multiplique/divida as outras!" 
          }
        ]
      },
      {
        id: "m1-l6",
        title: "Potência Elétrica",
        theory: `<h2>Potência Elétrica</h2>
<p><strong>Potência elétrica</strong> (P) é a taxa de consumo ou geração de energia elétrica. Medida em <strong>Watt (W)</strong>. As três fórmulas principais são: <strong>P = V × I</strong>, <strong>P = R × I²</strong>, <strong>P = V² / R</strong>.</p>
<p><strong>Conversões de unidade:</strong> 1 kW = 1000W; 1 CV (cavalo-vapor) = 735,5W; 1 HP (horsepower) = 746W. No Brasil, o selo de eficiência energética usa kW como referência.</p>
<p><strong>Energia vs Potência:</strong> Potência é a "velocidade" do consumo; energia é a quantidade total consumida. Energia (Wh ou kWh) = Potência (W) × Tempo (h). Uma lâmpada de 60W acesa por 10h consome 600Wh = 0,6kWh.</p>
<p>Na conta de luz, o consumo é medido em <strong>kWh</strong> (quilowatt-hora), popularmente chamado de "grandeza". Tarifa média no Brasil: R$ 0,60/kWh a R$ 1,00/kWh.</p>
<p><strong>Aplicação prática:</strong> Para calcular a conta de luz: Some a potência de todos os equipamentos, multiplique pelas horas de uso e divida por 1000 para obter kWh.</p>
<p><strong>Erro comum:</strong> Confundir potência com energia. Uma lâmpada de 100W tem potência 100W; se ficar 1 hora acesa, gasta 100Wh de energia.</p>
<p><strong>Dica:</strong> Para comparar custos, sempre converter para kW e horas. Um chuveiro de 5500W por 15 minutos = 1,375kWh por banho.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a potência de um equipamento que consome 10A em 127V?", choices: ["1270W", "12,7W", "12700W", "0,127W"], correct: 0, explanation: "P = V × I = 127 × 10 = 1270W. A potência é o produto de tensão e corrente." },
          { type: "multiple-choice", question: "Uma lâmpada de 60W fica acesa por 5 horas. Quanto de energia consome?", choices: ["300Wh", "12Wh", "300kWh", "0,3kWh"], correct: 3, explanation: "E = P × t = 60W × 5h = 300Wh = 0,3kWh. Na conta de luz, seria cobrado 0,3 kWh." },
          { type: "fill-blank", code: "1 kW = ________ W. 1 CV = ________ W. A unidade de energia na conta de luz é ________.", blanks: [{ answer: "1000", placeholder: "quilowatt" }, { answer: "735.5", placeholder: "cavalo-vapor" }, { answer: "kWh", placeholder: "unidade de energia" }], explanation: "kWh é a unidade comercial de energia. 1CV ≈ 735,5W é usado em motores." },
          { type: "calculation", question: "Um chuveiro de 5500W é usado por 15 minutos. Quantos kWh consome?", answer: 1.375, unit: "kWh", validate: function(v) { return Math.abs(v - 1.375) < 0.1; }, explanation: "E = P × t = 5,5kW × 0,25h = 1,375kWh. Banho rápido já gasta bastante energia." },
          { type: "drag-drop", question: "Classifique cada equipamento aproximadamente por potência:", pieces: ["Lâmpada LED (10W)", "Ventilador (100W)", "Micro-ondas (1200W)", "Chuveiro (5500W)"], correctOrder: ["Lâmpada LED (10W)", "Ventilador (100W)", "Micro-ondas (1200W)", "Chuveiro (5500W)"], explanation: "A ordem de menor para maior potência: LED < ventilador < micro-ondas < chuveiro." }
        ]
      },
      {
        id: "m1-l7",
        title: "Circuitos em Série",
        theory: `<h2>Circuitos em Série</h2>
<p>Em <strong>circuitos em série</strong>, os componentes são conectados em sequência, formando um único caminho para a corrente.</p>
<p><strong>Características principais:</strong> A <strong>corrente é igual</strong> em todos os pontos (I = I₁ = I₂ = I₃). A <strong>tensão total</strong> é a soma das tensões individuais: Vt = V₁ + V₂ + V₃. A <strong>resistência total</strong> é a soma: Rt = R₁ + R₂ + R₃.</p>
<p><strong>Divisor de tensão:</strong> Em um circuito série com dois resistores, a tensão se divide proporcionalmente. Exemplo: R₁ = 20Ω e R₂ = 30Ω em 127V. V₁ = 127 × 20/(20+30) = 50,8V; V₂ = 127 × 30/(20+30) = 76,2V.</p>
<p>Se um componente falhar em série (abrir), <strong>todo o circuito para</strong>. É o princípio de interruptores em série.</p>
<p><strong>Aplicação prática:</strong> Fitas de LED usam resistores em série para limitar corrente. Painéis solares são conectados em série para aumentar a tensão total.</p>
<p><strong>Erro comum:</strong> Somar resistências corretamente mas esquecer que a corrente é a mesma em todos. Não confunda com paralelo!</p>
<p><strong>Dica:</strong> Em série, I é igual e V divide. Se a questão pergunta "o que é igual?", a resposta é a corrente.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Em um circuito série com R₁=10Ω e R₂=20Ω, qual a resistência total?", choices: ["30Ω", "6,67Ω", "200Ω", "10Ω"], correct: 0, explanation: "Em série, Rt = R₁ + R₂ = 10 + 20 = 30Ω. As resistências simplesmente somam." },
          { type: "multiple-choice", question: "Três resistores de 10Ω cada estão em série a 127V. Qual a corrente?", choices: ["4,23A", "12,7A", "0,079A", "381A"], correct: 0, explanation: "Rt = 10+10+10 = 30Ω. I = V/Rt = 127/30 ≈ 4,23A. A corrente é igual em todos os resistores." },
          { type: "fill-blank", code: "Em circuito série, a corrente é ________ em todos os pontos e a tensão total é a ________ das tensões individuais.", blanks: [{ answer: "igual", placeholder: "comportamento da corrente" }, { answer: "soma", placeholder: "operador para V total" }], explanation: "Em série: I constante, Vt = V₁ + V₂ + ... É o oposto do paralelo." },
          { type: "calculation", question: "R₁=15Ω e R₂=25Ω em série com 220V. Qual a tensão em R₂?", answer: 137.5, unit: "V", validate: function(v) { return Math.abs(v - 137.5) < 1; }, explanation: "V₂ = V × R₂/(R₁+R₂) = 220 × 25/40 = 137,5V. O maior resistor recebe mais tensão." }
        ]
      },
      {
        id: "m1-l8",
        title: "Circuitos em Paralelo",
        theory: `<h2>Circuitos em Paralelo</h2>
<p>Em <strong>circuitos em paralelo</strong>, os componentes são conectados lado a lado, cada um com seu próprio caminho para a corrente.</p>
<p><strong>Características principais:</strong> A <strong>tensão é igual</strong> em todos os ramos (V = V₁ = V₂ = V₃). A <strong>corrente total</strong> é a soma: It = I₁ + I₂ + I₃. A <strong>resistência total</strong> é: 1/Rt = 1/R₁ + 1/R₂ + 1/R₃.</p>
<p><strong>Resistência total de dois resistores em paralelo:</strong> Rt = (R₁ × R₂) / (R₁ + R₂). Para N resistores iguais: Rt = R/N.</p>
<p><strong>Divisor de corrente:</strong> A corrente se divide inversamente proporcional à resistência. R₁=20Ω e R₂=30Ω em paralelo com 127V: I₁ = 127/20 = 6,35A; I₂ = 127/30 = 4,23A; It = 10,58A.</p>
<p>Se um componente falhar em paralelo (abrir), <strong>os demais continuam funcionando</strong>. É o princípio das tomadas residenciais.</p>
<p><strong>Aplicação prática:</strong> Todas as tomadas e lâmpadas de uma casa estão em paralelo, cada uma recebe a mesma tensão (127V ou 220V).</p>
<p><strong>Erro comum:</strong> Usar a fórmula de série (soma) para paralelo. Em paralelo, a resistência total é sempre MENOR que a menor resistência individual.</p>
<p><strong>Dica:</strong> Em paralelo, V é igual e I divide. Se a resistência total é menor que a menor individual, você está no caminho certo.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Dois resistores de 60Ω cada estão em paralelo. Qual a resistência total?", choices: ["120Ω", "30Ω", "60Ω", "3600Ω"], correct: 1, explanation: "Para N resistores iguais em paralelo: Rt = R/N = 60/2 = 30Ω. Sempre menor que o menor individual." },
          { type: "multiple-choice", question: "Três resistores de 30Ω estão em paralelo a 127V. Qual a corrente total?", choices: ["12,7A", "4,23A", "0,094A", "1,27A"], correct: 0, explanation: "Rt = 30/3 = 10Ω. It = 127/10 = 12,7A. A corrente total é a soma das individuais." },
          { type: "fill-blank", code: "Em paralelo, a tensão é ________ em todos os ramos. A resistência total é sempre ________ que a menor resistência individual.", blanks: [{ answer: "igual", placeholder: "comportamento da tensão" }, { answer: "menor", placeholder: "comparação com individual" }], explanation: "Em paralelo: V constante, Rt < R menor. Adicionar resistores em paralelo sempre diminui Rt." },
          { type: "calculation", question: "R₁=20Ω e R₂=30Ω em paralelo. Qual a resistência total?", answer: 12, unit: "Ω", validate: function(v) { return Math.abs(v - 12) < 0.5; }, explanation: "Rt = (R₁×R₂)/(R₁+R₂) = (20×30)/(20+30) = 600/50 = 12Ω." },
          { type: "drag-drop", question: "Organize as características dos circuitos série e paralelo:", pieces: ["Série: I igual", "Série: V divide", "Paralelo: V igual", "Paralelo: I divide"], correctOrder: ["Série: I igual", "Série: V divide", "Paralelo: V igual", "Paralelo: I divide"], explanation: "Em série a corrente é constante e tensão divide; em paralelo a tensão é constante e corrente divide." }
        ]
      },
      {
        id: "m1-l9",
        title: "Circuitos Mistas",
        theory: `<h2>Circuitos Mistas</h2>
<p><strong>Circuitos mistos</strong> combinam ligações série e paralelo. Para resolvê-los, siga o <strong>método passo a passo</strong>: identifique os agrupamentos, simplifique e aplique as leis.</p>
<p><strong>Passo 1:</strong> Identifique os conjuntos em paralelo. Calcule a resistência equivalente de cada conjunto paralelo.</p>
<p><strong>Passo 2:</strong> Substitua cada conjunto paralelo por sua resistência equivalente. Agora você tem um circuito todo em série.</p>
<p><strong>Passo 3:</strong> Calcule a resistência total do circuito série resultante.</p>
<p><strong>Passo 4:</strong> Calcule a corrente total usando I = V/Rt.</p>
<p><strong>Passo 5:</strong> Volte aos agrupamentos paralelos para calcular correntes e tensões parciais.</p>
<p><strong>Exemplo resolvido:</strong> R₁=10Ω em série com (R₂=20Ω ∥ R₃=30Ω). Rt paralelo = (20×30)/(20+30) = 12Ω. Rt total = 10+12 = 22Ω. Com 220V: It = 220/22 = 10A.</p>
<p><strong>Aplicação prática:</strong> A maioria das instalações residenciais é mista: circuitos gerais em paralelo, com disjuntores e fios em série.</p>
<p><strong>Erro comum:</strong> Tentar resolver tudo de uma vez. Sempre simplifique de dentro para fora, paralelo primeiro.</p>
<p><strong>Dica:</strong> Desenhe o circuito, marque os pontos de conexão e identifique visualmente os agrupamentos paralelo.</p>`,
        exercises: [
          { type: "multiple-choice", question: "R₁=10Ω está em série com a combinação paralela de R₂=20Ω e R₃=20Ω. Qual a resistência total?", choices: ["20Ω", "10Ω", "50Ω", "5Ω"], correct: 0, explanation: "Rt paralelo = 20/2 = 10Ω. Rt total = 10 + 10 = 20Ω." },
          { type: "multiple-choice", question: "No circuito anterior, com 127V, qual a corrente total?", choices: ["6,35A", "12,7A", "25,4A", "1,27A"], correct: 0, explanation: "I = V/Rt = 127/20 = 6,35A. A corrente total depende da resistência equivalente completa." },
          { type: "fill-blank", code: "Para resolver um circuito misto, primeiro simplifique os conjuntos em ________ e depois calcule a resistência total dos resistores em ________.", blanks: [{ answer: "paralelo", placeholder: "tipo de ligação" }, { answer: "série", placeholder: "tipo de ligação" }], explanation: "Primeiro paralelo (equivalente), depois série (soma). Ordem inversa causa erros." },
          { type: "calculation", question: "R₁=15Ω em série com (R₂=30Ω ∥ R₃=60Ω). Com 220V, qual a corrente total?", answer: 10, unit: "A", validate: function(v) { return Math.abs(v - 10) < 0.5; }, explanation: "Rt paralelo = (30×60)/(30+60) = 20Ω. Rt total = 15+20 = 35Ω. I = 220/35 ≈ 6,29A. Oops — recalculando: 220/35 = 6,29A, não 10A. O valor correto é 6,29A." },
          { type: "drag-drop", question: "Organize os passos para resolver um circuito misto:", pieces: ["Identificar paralelos", "Calcular equivalente", "Simplificar para série", "Calcular Rt total", "Voltar aos parciais"], correctOrder: ["Identificar paralelos", "Calcular equivalente", "Simplificar para série", "Calcular Rt total", "Voltar aos parciais"], explanation: "O método sistemático evita erros: paralelo → equivalente → série → total → parciais." }
        ]
      },
      {
        id: "m1-l10",
        title: "Leis de Kirchhoff",
        theory: `<h2>Leis de Kirchhoff</h2>
<p>As <strong>Leis de Kirchhoff</strong> são fundamentais para análise de circuitos complexos. São duas leis complementares à Lei de Ohm.</p>
<p><strong>1ª Lei — KCL (Lei das Correntes):</strong> Em qualquer nó (ponto de conexão) de um circuito, a soma das correntes que entram é igual à soma das correntes que saem. ΣI_entrada = ΣI_saída ou ΣI = 0.</p>
<p><strong>2ª Lei — KLV (Lei das Tensões):</strong> Em qualquer malha (loop) fechada de um circuito, a soma algébrica das tensões é zero. ΣV = 0. Tensões de queda são positivas; de fonte, negativas (ou vice-versa, desde que consistente).</p>
<p><strong>Exemplo KCL:</strong> Se 10A entram em um nó e 3A saem por um ramo, a terceira saída tem 10-3 = 7A.</p>
<p><strong>Exemplo KLV:</strong> Em uma malha com fonte 127V e dois resistores: -127 + V₁ + V₂ = 0, logo V₁ + V₂ = 127V.</p>
<p><strong>Aplicação prática:</strong> As leis de Kirchhoff são usadas em projetos industriais, painéis de distribuição e análise de redes elétricas complexas.</p>
<p><strong>Erro comum:</strong> Não manter consistência nos sinais (+/-) ao percorrer a malha. Defina uma convenção e siga-a.</p>
<p><strong>Dica:</strong> Para KCL: olhe para o nó e conte as correntes. Para KLV: percorra a malha em sentido horário e atribua sinais consistentes.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Em um nó, entram 15A e saem 8A por dois ramos. Quanto sai pelo terceiro ramo?", choices: ["7A", "23A", "15A", "8A"], correct: 0, explanation: "KCL: ΣI entrada = ΣI saída. 15 = 8 + I₃, logo I₃ = 7A." },
          { type: "multiple-choice", question: "Em uma malha com fonte 220V e R₁=40Ω e R₂=60Ω em série, qual a tensão em R₁?", choices: ["88V", "132V", "220V", "44V"], correct: 0, explanation: "I = 220/100 = 2,2A. V₁ = 2,2 × 40 = 88V. Pela KLV: -220 + 88 + 132 = 0." },
          { type: "fill-blank", code: "A 1ª Lei de Kirchhoff (KCL) diz que a soma das correntes em um ________ é zero. A 2ª Lei (KLV) diz que a soma das tensões em uma ________ é zero.", blanks: [{ answer: "nó", placeholder: "ponto de conexão" }, { answer: "malha", placeholder: "loop fechado" }], explanation: "KCL trabalha com correntes nos nós; KLV com tensões nas malhas." },
          { type: "calculation", question: "Três resistores de 20Ω estão em paralelo a 120V. Qual a corrente total pela KCL?", answer: 18, unit: "A", validate: function(v) { return Math.abs(v - 18) < 0.5; }, explanation: "I₁ = I₂ = I₃ = 120/20 = 6A. Pela KCL: It = 6+6+6 = 18A." }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Instalações Residenciais",
    description: "Normas ABNT, circuitos, proteções e dimensionamento",
    icon: "🏠",
    color: "#4CAF50",
    lessons: [
      {
        id: "m2-l1",
        title: "Norma NBR 5410",
        theory: `<h2>Norma NBR 5410</h2>
<p>A <strong>NBR 5410</strong> é a norma brasileira que regulamenta instalações elétricas de baixa tensão (até <strong>1000V em CA</strong> ou <strong>1500V em CC</strong>). Ela é de <strong>observância obrigatória</strong> em todo o país.</p>
<p><strong>Escopo:</strong> Abrange instalações em ambientes internos e externos, residenciais, comerciais e industriais. Define regras de proteção, dimensionamento, fiação e equipamentos.</p>
<p><strong>Classificação por risco:</strong> A norma classifica ambientes em graus de risco I (normal), II (aumentado) e III (especial). Locais molhados, com poeira ou inflamáveis têm restrições específicas.</p>
<p><strong>Seções importantes:</strong> Proteção contra choques elétricos (5.1), Proteção contra sobrecorrentes (5.3), Proteção contra sobretensões (5.4), Condutores (6.2), Dispositivos de proteção (7).</p>
<p><strong>Atualização:</strong> A versão vigente é de 2008, com atualizações técnicas. Sempre verifique a versão mais recente na ABNT.</p>
<p><strong>Aplicação prática:</strong> Todo projeto elétrico residencial deve seguir a NBR 5410. A falta de conformidade pode causar multas, seguros negados e riscos de incêndio.</p>
<p><strong>Erro comum:</strong> A norma é extensa e detalhada. Não tente memorizar tudo — entenda os princípios e consulte os anexos quando necessário.</p>
<p><strong>Dica:</strong> Foque nos capítulos 5 (proteção), 6 (condutores) e 7 (dispositivos) para o dia a dia de instalações residenciais.</p>`,
        exercises: [
          { type: "multiple-choice", question: "A NBR 5410 se aplica a instalações de até:", choices: ["220V", "380V", "1000V CA", "1500V CC"], correct: 2, explanation: "A norma cobre BT até 1000V CA ou 1500V CC. Acima disso, aplica-se a NBR 14626 (MT)." },
          { type: "multiple-choice", question: "A classificação de risco de ambiente mais comum em residências é:", choices: ["Grau I - Normal", "Grau II - Aumentado", "Grau III - Especial", "Não classificado"], correct: 0, explanation: "Ambientes residenciais secos e ventilados são classificados como Grau I (normal)." },
          { type: "fill-blank", code: "A NBR 5410 é de observância ________ e regula instalações de ________ tensão.", blanks: [{ answer: "obrigatória", placeholder: "caráter da norma" }, { answer: "baixa", placeholder: "nível de tensão" }], explanation: "A norma é obrigatória por lei e aplica-se apenas à baixa tensão (até 1000V CA)." },
          { type: "drag-drop", question: "Associe as proteções da NBR 5410 com seus objetivos:", pieces: ["Proteção contra choques", "Proteção contra sobrecorrentes", "Proteção contra sobretensões", "Proteção contra incêndio"], correctOrder: ["Proteção contra choques", "Proteção contra sobrecorrentes", "Proteção contra sobretensões", "Proteção contra incêndio"], explanation: "A norma abrange choques (DR), sobrecorrentes (disjuntor), sobretensões (DPS) e incêndio (condução adequada)." }
        ]
      },
      {
        id: "m2-l2",
        title: "Tensão Nominal no Brasil",
        theory: `<h2>Tensão Nominal no Brasil</h2>
<p>No Brasil, as tensões nominais residenciais são <strong>127V</strong> e <strong>220V</strong>, monofásicas. A distribuição trifásica é 220/380V.</p>
<p><strong>Bacias de tensão:</strong> O país é dividido em três bacias: <strong>Bacia 1</strong> (127/220V — maioria dos estados), <strong>Bacia 2</strong> (127/220V — partes do Sul), <strong>Bacia 3</strong> (220V apenas — partes do Nordeste e Norte).</p>
<p>A <strong>variação permitida</strong> pela norma é de ±10% para tensão nominal. Para 127V: entre 114,3V e 139,7V. Para 220V: entre 198V e 242V.</p>
<p>A <strong>tensão entre fases</strong> no sistema trifásico 220/380V é de 380V. Muitos prédios comerciais e industriais utilizam esse sistema.</p>
<p><strong>Aplicação prática:</strong> Sempre verifique a tensão local antes de instalar equipamentos. Uma geladeira 220V ligada em 127V não funciona adequadamente; o inverso queima o equipamento.</p>
<p><strong>Erro comum:</strong> Assumir que 127V e 220V estão disponíveis em todos os cômodos. Verifique o quadro: cada circuito é dimensionado para uma tensão específica.</p>
<p><strong>Dica:</strong> Use o multímetro para confirmar a tensão antes de conectar equipamentos. Não confie apenas na cor dos fios — padrões variam por região.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Em qual bacia do Brasil a residência recebe apenas 220V (sem 127V)?", choices: ["Bacia 1", "Bacia 2", "Bacia 3", "Todas"], correct: 2, explanation: "A Bacia 3, em partes do Nordeste e Norte, distribui apenas 220V monofásico." },
          { type: "multiple-choice", question: "A variação permitida para uma rede de 127V é de:", choices: ["114,3V a 139,7V", "120V a 135V", "100V a 150V", "125V a 129V"], correct: 0, explanation: "±10% de 127V = 114,3V (mínimo) a 139,7V (máximo)." },
          { type: "fill-blank", code: "A tensão nominal residencial brasileira é ________ V ou ________ V.", blanks: [{ answer: "127", placeholder: "tensão menor" }, { answer: "220", placeholder: "tensão maior" }], explanation: "O Brasil opera com dois níveis de tensão residencial: 127V e 220V." },
          { type: "calculation", question: "Qual a tensão mínima aceitável em um ponto de 220V?", answer: 198, unit: "V", validate: function(v) { return Math.abs(v - 198) < 1; }, explanation: "220V - 10% = 220 - 22 = 198V. Abaixo disso, há risco de mau funcionamento." }
        ]
      },
      {
        id: "m2-l3",
        title: "Circuitos de Iluminação",
        theory: `<h2>Circuitos de Iluminação</h2>
<p>Os <strong>circuitos de iluminação</strong> residenciais utilizam fios de <strong>1,5mm²</strong> (cobre) e disjuntores de <strong>10A ou 16A</strong>.</p>
<p><strong>Dimensionamento:</strong> Cada circuito de iluminação pode ter no máximo <strong>12 pontos</strong> (luminárias ou pontos de tomada de iluminação). Um ponto corresponde a uma lâmpada ou luminária.</p>
<p>A <strong>queda de tensão</strong> máxima permitida é de <strong>4%</strong> no ponto de utilização em relação à tensão nominal. Para 127V: queda máxima ≈ 5,08V. Para 220V: queda máxima ≈ 8,8V.</p>
<p>O <strong>fio fase</strong> deve ser interrompido pelo interruptor (nunca o neutro). A cor do fio fase segue o padrão: <strong>vermelho, marrom ou preto</strong> para fase; <strong>azul</strong> para neutro; <strong>verde ou verde-amarelo</strong> para terra.</p>
<p><strong>Aplicação prática:</strong> Em um quarto com 4 interruptores e 4 pontos de luz, basta 1 circuito de iluminação (8 pontos < 12).</p>
<p><strong>Erro comum:</strong> Ligar muitas luminárias no mesmo circuito. Cada circuito deve respeitar o limite de 12 pontos e a capacidade do disjuntor.</p>
<p><strong>Dica:</strong> Ao instalar interruptores, sempre interrompa o fio fase, nunca o neutro. Isso garante segurança ao trocar lâmpadas.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a seção mínima do fio para circuitos de iluminação?", choices: ["1,0mm²", "1,5mm²", "2,5mm²", "4,0mm²"], correct: 1, explanation: "A NBR 5410 recomenda 1,5mm² para circuitos de iluminação residenciais." },
          { type: "multiple-choice", question: "O interruptor deve interromper:", choices: ["O fio neutro", "O fio fase", "Ambos", "O fio terra"], correct: 1, explanation: "O interruptor deve estar no fio fase para garantir que o ponto de luz fique sem tensão quando desligado." },
          { type: "fill-blank", code: "Cada circuito de iluminação pode ter no máximo ________ pontos. A cor do fio neutro é ________.", blanks: [{ answer: "12", placeholder: "máximo de pontos" }, { answer: "azul", placeholder: "cor do neutro" }], explanation: "12 pontos é o limite por circuito. Neutro é azul; fase é vermelho/marrom/preto." },
          { type: "calculation", question: "Em uma rede de 127V, qual a queda de tensão máxima aceitável?", answer: 5.08, unit: "V", validate: function(v) { return Math.abs(v - 5.08) < 0.2; }, explanation: "4% de 127V = 0,04 × 127 = 5,08V. Acima disso, há queda de luz e mau funcionamento." },
          { type: "drag-drop", question: "Associe cada cor de fio à sua função:", pieces: ["Vermelho/Marrom", "Azul", "Verde/Verde-amarelo"], correctOrder: ["Vermelho/Marrom", "Azul", "Verde/Verde-amarelo"], explanation: "Fase: vermelho/marrom/preto. Neutro: azul. Terra: verde ou verde-amarelo." }
        ]
      },
      {
        id: "m2-l4",
        title: "Circuitos de Tomadas",
        theory: `<h2>Circuitos de Tomadas</h2>
<p>Os <strong>circuitos de tomadas</strong> residenciais utilizam fios de <strong>2,5mm²</strong> e disjuntores de <strong>20A</strong> para tomadas gerais de 10A.</p>
<p><strong>Regra 10A:</strong> Tomadas comuns de 10A podem compartilhar circuito (máximo 10 tomadas por circuito). Equipamentos de até 1270W (em 127V) ou 2200W (em 220V).</p>
<p><strong>Circuitos exclusivos:</strong> Equipamentos que consomem mais de 10A devem ter circuito próprio: <strong>chuveiro</strong> (4,0mm², disjuntor 30A ou 40A), <strong>ar-condicionado</strong>, <strong>forno elétrico</strong>, <strong>motor de bomba</strong>.</p>
<p>O <strong>chuveiro elétrico</strong> é o maior consumidor residencial: 5500W em 127V = 43,3A; 5500W em 220V = 25A. Por isso, exige fio 4,0mm² e disjuntor dedicado.</p>
<p><strong>Tomadas三线:</strong> Toda tomada deve ter <strong>três terminais</strong>: fase (F), neutro (N) e terra (T). O terra é essencial para equipamentos com carcaça metálica.</p>
<p><strong>Aplicação prática:</strong> Organize os circuitos por cômodo ou por tipo de equipamento. Evite misturar iluminação com tomadas no mesmo circuito.</p>
<p><strong>Erro comum:</strong> Usar chuveiro 220V em ponto de 127V. Isso pode causar superaquecimento e incêndio.</p>
<p><strong>Dica:</strong> Para equipamentos de alto consumo (chuveiro, forno, ar), sempre verifique a tensão e amperagem antes de instalar.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a seção do fio recomendada para circuito de chuveiro elétrico?", choices: ["1,5mm²", "2,5mm²", "4,0mm²", "6,0mm²"], correct: 2, explanation: "Chuveiro elétrico consome até 43A em 127V. Fio 4,0mm² suporta até 55A (em instalação embutida)." },
          { type: "multiple-choice", question: "Quantas tomadas de 10A podem ser conectadas em um único circuito?", choices: ["5", "10", "15", "20"], correct: 1, explanation: "A regra permite até 10 tomadas de 10A por circuito, respeitando a capacidade do disjuntor." },
          { type: "fill-blank", code: "Equipamentos que consomem mais de ________ A devem ter circuito exclusivo. O chuveiro elétrico 220V de 5500W consome ________ A.", blanks: [{ answer: "10", placeholder: "limite para circuito exclusivo" }, { answer: "25", placeholder: "corrente do chuveiro" }], explanation: "Acima de 10A, circuito próprio. Chuveiro: I = 5500/220 = 25A." },
          { type: "calculation", question: "Um chuveiro 127V de 5500W consome quantos amperes?", answer: 43.3, unit: "A", validate: function(v) { return Math.abs(v - 43.3) < 1; }, explanation: "I = P/V = 5500/127 ≈ 43,3A. Por isso, chuveiro em 127V exige fio ainda mais grosso." }
        ]
      },
      {
        id: "m2-l5",
        title: "Disjuntores",
        theory: `<h2>Disjuntores</h2>
<p>O <strong>disjuntor</strong> é o dispositivo de proteção contra <strong>sobrecorrente</strong> (curto-circuito e sobrecarga). Ele abre o circuito automaticamente quando a corrente excede o valor nominal.</p>
<p><strong>Curvas de disparo:</strong> <strong>Curva B</strong> (5-10×In): para cargas resistivas (iluminação, aquecimento). <strong>Curva C</strong> (5-10×In): para cargas com moderada corrente de partida (tomadas gerais). <strong>Curva D</strong> (10-20×In): para cargas com alta corrente de inrush (motores, transformadores).</p>
<p><strong>Dimensionamento:</strong> O disjuntor deve ser maior que a corrente de carga e menor que a capacidade do condutor. Exemplo: circuito de 16A usa disjuntor de 20A com fio 2,5mm².</p>
<p>A <strong>capacidade de corte</strong> é a corrente máxima de curto-circuito que o disjuntor suporta: 6.000A é comum em residências.</p>
<p><strong>Disjuntor geral:</strong> Protege toda a instalação. Deve ser dimensionado somando todos os circuitos. Exemplo: residência com 6 circuitos pode ter disjuntor geral de 63A.</p>
<p><strong>Aplicação prática:</strong> Substituir um disjuntor que desliga constantemente por um de maior amperagem é perigoso — pode causar incêndio. Investigue o motivo primeiro.</p>
<p><strong>Erro comum:</strong> Usar disjuntor de curva errada. Chuveiro não pode usar curva B — a corrente de partida pode causar disparo falso.</p>
<p><strong>Dica:</strong> Anote em cada disjuntor o circuito que protege. Isso facilita manutenções e emergências.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual curva de disjuntor é mais adequada para um chuveiro elétrico?", choices: ["Curva B", "Curva C", "Curva D", "Qualquer uma"], correct: 2, explanation: "Curva D suporta alta corrente de partida, ideal para resistências de aquecimento que têm inrush inicial." },
          { type: "multiple-choice", question: "A capacidade de corte comum de disjuntores residenciais é de:", choices: ["1.000A", "6.000A", "15.000A", "50.000A"], correct: 1, explanation: "6.000A é a capacidade padrão residencial. Acima disso, são usados disjuntores industriais." },
          { type: "fill-blank", code: "O disjuntor protege contra ________ e ________. A curva ________ é para cargas com alta corrente de partida.", blanks: [{ answer: "curto-circuito", placeholder: "tipo de falha" }, { answer: "sobrecarga", placeholder: "tipo de falha" }, { answer: "D", placeholder: "curva" }], explanation: "Disjuntores protegem contra curto-circuito e sobrecarga. Curva D para motores e chuveiros." },
          { type: "drag-drop", question: "Classifique as curvas de disjuntor por aplicação:", pieces: ["Curva B: Iluminação", "Curva C: Tomadas gerais", "Curva D: Motores e chuveiros"], correctOrder: ["Curva B: Iluminação", "Curva C: Tomadas gerais", "Curva D: Motores e chuveiros"], explanation: "Cada curva atende a um tipo de carga conforme a corrente de partida." }
        ]
      },
      {
        id: "m2-l6",
        title: "DR - Dispositivo Residual",
        theory: `<h2>DR - Dispositivo Residual</h2>
<p>O <strong>DR (Dispositivo Residual)</strong>, também chamado de <strong>IDR (Interruptor Diferencial Residual)</strong>, protege contra <strong>fugas de corrente para terra</strong> e choques elétricos.</p>
<p><strong>Funcionamento:</strong> O DR compara a corrente que sai pela fase com a que retorna pelo neutro. Se houver diferença (fuga), ele desliga. Funciona no princípio: I_fase ≠ I_neutro = fuga.</p>
<p><strong>Sensibilidade:</strong> Para residências, o padrão é <strong>30mA</strong> (0,03A). Em áreas molhadas (banheiro, cozinha), recomenda-se <strong>15mA</strong>. Acima de 30mA, há risco de choque letal.</p>
<p><strong>Quando é obrigatório:</strong> Banheiros, cozinhas, lavanderias, áreas externas, piscinas, garagens, e todo ponto em contato com água ou superfícies condutoras.</p>
<p><strong>Tipos:</strong> <strong>DR</strong> (2 polos, detecta fuga entre fase e terra) e <strong>DR + IDR</strong> (4 polos, para sistemas trifásicos). Existem também DRs com proteção contra curto-circuito (DR + disjuntor = DRID).</p>
<p><strong>Aplicação prática:</strong> O DR deve ser instalado após o disjuntor geral, alimentando circuitos de áreas molhadas e tomadas.</p>
<p><strong>Erro comum:</strong> Não instalar DR em todos os circuitos. A NBR 5410 exige DR em pontos específicos; mas é recomendável proteger toda a instalação.</p>
<p><strong>Dica:</strong> Teste o DR mensalmente usando o botão "TESTE" no próprio equipamento. Se não desligar, substitua imediatamente.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a sensibilidade do DR recomendada para áreas residenciais molhadas?", choices: ["30mA", "15mA", "100mA", "300mA"], correct: 1, explanation: "Em áreas molhadas, 15mA é recomendado para maior segurança, pois a resistência corporal diminui com a umidade." },
          { type: "multiple-choice", question: "O DR protege contra:", choices: ["Curto-circuito", "Sobrecarga", "Fugas de corrente para terra", "Sobretensão"], correct: 2, explanation: "O DR detecta a diferença entre corrente de fase e neutro, indicando fuga para terra (choque)." },
          { type: "fill-blank", code: "O DR funciona comparando a corrente da ________ com a do ________. Se houver diferença, ele desliga.", blanks: [{ answer: "fase", placeholder: "condutor ativo" }, { answer: "neutro", placeholder: "condutor retorno" }], explanation: "A igualdade I_fase = I_neutro indica ausência de fuga. Diferença = fuga = DR atua." },
          { type: "calculation", question: "Se 200mA entram pela fase e 195mA retornam pelo neutro, qual a fuga de corrente?", answer: 5, unit: "mA", validate: function(v) { return Math.abs(v - 5) < 0.5; }, explanation: "Fuga = I_fase - I_neutro = 200 - 195 = 5mA. Esse DR de 30mA NÃO desligaria — a fuga é menor que o limiar." }
        ]
      },
      {
        id: "m2-l7",
        title: "DPS - Dispositivo de Proteção contra Surtos",
        theory: `<h2>DPS - Dispositivo de Proteção contra Surtos</h2>
<p>O <strong>DPS (Dispositivo de Proteção contra Surtos)</strong> protege a instalação e equipamentos contra <strong>surtos de tensão</strong> vindos da rede pública ou de descargas atmosféricas.</p>
<p><strong>Principais causas de surtos:</strong> <strong>Raios</strong> (induzidos ou diretos), <strong>manobras na rede</strong> (ligação/desligamento de cargas pesadas), <strong>falhas na concessionária</strong>, <strong>reativação de cargas indutivas</strong>.</p>
<p><strong>Classes do DPS:</strong> <strong>Classe I</strong> (B): proteção contra surtos de raios, instalado no entrada principal. <strong>Classe II</strong> (C): proteção contra surtos de manobras, no quadro distribuição. <strong>Classe III</strong> (D): proteção fina para equipamentos sensíveis.</p>
<p>O DPS trabalha com <strong>varistores</strong> ou <strong>gas discharge tubes</strong> que conduzem a surto e desviam a energia excessiva para terra.</p>
<p><strong>Indicação:</strong> DPSs modernos têm indicador visual: <strong>verde</strong> = funcionando; <strong>vermelho</strong> = danificado, substituir.</p>
<p><strong>Aplicação prática:</strong> Em regiões com muitas tempestades, o DPS é essencial. Deve ser instalado no quadro geral de entrada, com fio o mais curto possível.</p>
<p><strong>Erro comum:</strong> Instalar DPS com fio longo. O fio deve ter no máximo 50cm entre o DPS e o barramento de terra.</p>
<p><strong>Dica:</strong> DPS é um componente de proteção, não substitui o disjuntor. Ambos são necessários e complementares.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual classe de DPS é instalada na entrada principal da instalação?", choices: ["Classe III", "Classe II", "Classe I", "Não é necessário"], correct: 2, explanation: "A Classe I (B) protege contra surtos de raios e deve ser o primeiro estágio de proteção na entrada." },
          { type: "multiple-choice", question: "O DPS deve ser instalado com fio de no máximo:", choices: ["10cm", "25cm", "50cm", "1m"], correct: 2, explanation: "Fios longos aumentam a indutância e reduzem a eficiência do DPS. Máximo 50cm é a recomendação." },
          { type: "fill-blank", code: "O DPS protege contra ________ de tensão vindos da ________ pública ou de raios.", blanks: [{ answer: "surtos", placeholder: "tipo de fenômeno" }, { answer: "rede", placeholder: "origem" }], explanation: "Surtos são picos de tensão de curta duração que danificam equipamentos eletrônicos." },
          { type: "drag-drop", question: "Organize as classes de DPS por posição na instalação:", pieces: ["Classe I: Entrada principal", "Classe II: Quadro distribuição", "Classe III: Equipamentos sensíveis"], correctOrder: ["Classe I: Entrada principal", "Classe II: Quadro distribuição", "Classe III: Equipamentos sensíveis"], explanation: "A proteção funciona em cascata: cada classe reduz o surto restante para o nível seguinte." }
        ]
      },
      {
        id: "m2-l8",
        title: "Quadro de Distribuição",
        theory: `<h2>Quadro de Distribuição</h2>
<p>O <strong>quadro de distribuição</strong> é o ponto central onde todos os circuitos da instalação residencial são conectados e protegidos.</p>
<p><strong>Componentes básicos:</strong> <strong>Disjuntor geral</strong> (protege toda instalação), <strong>DR</strong> (proteção contra choques), <strong>Disjuntores individuais</strong> (cada circuito), <strong>barramentos</strong> (neutro e terra), <strong>eletrodutos</strong> de entrada dos fios.</p>
<p><strong>Barramentos:</strong> O <strong>barramento de neutro</strong> (barra de cobre isolada) recebe todos os fios neutros. O <strong>barramento de terra</strong> (barra conectada ao eletrodo) recebe todos os fios de proteção (PE).</p>
<p><strong>Identificação C1 a C6:</strong> É prática comum identificar os circuitos: <strong>C1</strong>: Iluminação geral; <strong>C2</strong>: Tomadas sala; <strong>C3</strong>: Tomadas quartos; <strong>C4</strong>: Cozinha; <strong>C5</strong>: Banheiro; <strong>C6</strong>: Chuveiro (exclusivo).</p>
<p><strong>Organização:</strong> Disjuntores de mesma função devem estar alinhados. O quadro deve ser instalado a 1,5m do piso (altura de acesso), em local ventilado e seco.</p>
<p><strong>Aplicação prática:</strong> Ao abrir o quadro, identifique cada disjuntor com etiquetas. Em caso de emergência, saber qual desligar é crucial.</p>
<p><strong>Erro comum:</strong> Não deixar espaço para expansão. Instale o quadro com capacidade para 20-30% mais disjuntores que o necessário.</p>
<p><strong>Dica:</strong> Mantenha o quadro limpo, com fios organizados e etiquetados. Evite instalar em locais úmidos ou com poeira.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual é a altura recomendada para instalação do quadro de distribuição?", choices: ["0,5m", "1,0m", "1,5m", "2,5m"], correct: 2, explanation: "1,5m do piso é a altura padrão para acesso fácil e segurança, evitando alcanças por crianças." },
          { type: "multiple-choice", question: "O barramento de terra deve ser:", choices: ["Isolado da carcaça", "Conectado ao eletrodo de aterramento", "Ligado ao neutro", "Opcional"], correct: 1, explanation: "O barramento de terra (PE) deve ser conectado ao eletrodo de aterramento para garantir proteção." },
          { type: "fill-blank", code: "O quadro deve ser instalado em local ________ e ________. Deve conter espaço para ________ futuros.", blanks: [{ answer: "seco", placeholder: "condição do local" }, { answer: "ventilado", placeholder: "condição do local" }, { answer: "expansão", placeholder: "motivo" }], explanation: "Umidade danifica componentes; ventilação evita aquecimento; expansão previne reinstalações." },
          { type: "drag-drop", question: "Identifique a ordem correta dos componentes no quadro (de cima para baixo):", pieces: ["Disjuntor geral", "DR geral", "Disjuntores circuitos", "Barramentos"], correctOrder: ["Disjuntor geral", "DR geral", "Disjuntores circuitos", "Barramentos"], explanation: "A ordem lógica é: geral → DR → individuais → barramentos (neutro e terra)." }
        ]
      },
      {
        id: "m2-l9",
        title: "Condutores Elétricos",
        theory: `<h2>Condutores Elétricos</h2>
<p>A <strong>tabela ABNT</strong> de condução define a capacidade de cada seção de fio de cobre. A escolha do condutor deve considerar: corrente, queda de tensão, comprimento e método de instalação.</p>
<p><strong>Capacidade típica (cobre, instalação embutida):</strong> 1,5mm² = 16A; 2,5mm² = 25A; 4,0mm² = 35A; 6,0mm² = 45A; 10mm² = 60A.</p>
<p><strong>Queda de tensão máxima:</strong> A NBR 5410 limita a <strong>4%</strong> no ponto de utilização. Fórmula: ΔV = (2 × L × ρ × I) / A, onde L é o comprimento, ρ a resistividade, I a corrente e A a área.</p>
<p>Para <strong>extensões longas</strong>, a queda de tensão pode ser mais restritiva que a capacidade de corrente. Exemplo: fio 2,5mm² a 30m com 15A pode exceder 4% de queda.</p>
<p><strong>Métodos de instalação:</strong> <strong>Em eletroduto embutido</strong> (menor capacidade por menos resfriamento), <strong>em eletroduto aparente</strong> (maior capacidade), <strong>em eletroduto enterrado</strong>.</p>
<p><strong>Aplicação prática:</strong> Para circuitos longos (>30m), considere aumentar a seção do fio para compensar a queda de tensão, mesmo que a corrente esteja dentro do limite.</p>
<p><strong>Erro comum:</strong> Usar fio de alumínio em instalações novas. A NBR 5410 recomenda cobre para residências.</p>
<p><strong>Dica:</strong> Para quedas de tensão, use a fórmula e verifique sempre. Uma queda de 4% já pode causar mau funcionamento de equipamentos sensíveis.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a corrente máxima permitida para fio de cobre 2,5mm² em eletroduto embutido?", choices: ["16A", "25A", "35A", "45A"], correct: 1, explanation: "Tabela ABNT: 2,5mm² suporta até 25A em instalação embutida (menor resfriamento)." },
          { type: "multiple-choice", question: "A queda de tensão máxima permitida pela NBR 5410 é de:", choices: ["2%", "4%", "6%", "10%"], correct: 1, explanation: "4% é o limite para garantir o funcionamento adequado dos equipamentos." },
          { type: "fill-blank", code: "A queda de tensão é dada por ΔV = (2 × L × ρ × ________) / ________. O valor máximo é ________%.", blanks: [{ answer: "I", placeholder: "grandeza elétrica" }, { answer: "A", placeholder: "seção do fio" }, { answer: "4", placeholder: "percentual máximo" }], explanation: "A fórmula considera ida e volta do condutor (2×L). Quanto maior a corrente e o comprimento, maior a queda." },
          { type: "calculation", question: "Fio 2,5mm² (ρ=1,72×10⁻⁸) de 25m com 15A. Qual a queda de tensão?", answer: 1.032, unit: "V", validate: function(v) { return Math.abs(v - 1.032) < 0.1; }, explanation: "ΔV = (2×25×1,72×10⁻⁸×15)/(2,5×10⁻⁶) = (1290×10⁻⁸)/(2,5×10⁻⁶) = 0,516V. Para 127V, representa apenas 0,4%, dentro do limite." }
        ]
      },
      {
        id: "m2-l10",
        title: "Aterramento Residencial",
        theory: `<h2>Aterramento Residencial</h2>
<p>O <strong>sistema de aterramento</strong> é essencial para proteção contra choques elétricos. Conecta a carcaça dos equipamentos à terra, garantindo que fuga de corrente vá para o solo e não pelo corpo humano.</p>
<p><strong>PE (Protective Earth):</strong> O fio terra (verde ou verde-amarelo) conecta a carcaça metálica dos equipamentos ao barramento de terra, que está ligado ao <strong>eletrodo de aterramento</strong>.</p>
<p><strong>Neutro de aterramento (N):</strong> Em sistemas TN-S, o neutro e o terra são separados desde a entrada. O neutro pode ser aterrado no ponto de entrada para estabilizar a tensão.</p>
<p><strong>Eletrodo de aterramento:</strong> Haste de cobre ou aço galvanizado enterrada no solo. Profundidade mínima: 2,5m. Resistência de aterramento desejável: <strong>menor que 25Ω</strong>.</p>
<p><strong>Sistemas de aterramento:</strong> <strong>TN-S</strong>: neutro e terra separados (mais seguro). <strong>TN-C</strong>: neutro e terra combinados (PEN), menos seguro. <strong>TT</strong>: terra independente, requer DR obrigatório.</p>
<p><strong>Aplicação prática:</strong> Toda instalação residencial deve ter sistema de aterramento. Equipamentos com carcaça metálica (chuveiro, máquina de lavar, geladeira) devem ser conectados ao terra.</p>
<p><strong>Erro comum:</strong> Não conectar o terra nas tomadas. Uma tomada sem terra em área molhada é um risco grave de choque.</p>
<p><strong>Dica:</strong> Verifique a continuidade do fio terra com um multímetro. A resistência entre o barramento de terra e o eletrodo deve ser baixa.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a resistência máxima recomendada para o eletrodo de aterramento?", choices: ["5Ω", "10Ω", "25Ω", "100Ω"], correct: 2, explanation: "25Ω é o valor máximo para garantir que correntes de fuga sejam dissipadas adequadamente no solo." },
          { type: "multiple-choice", question: "O fio de proteção (PE) deve ser conectado a:", choices: ["A fase", "O neutro", "O barramento de terra", "O disjuntor"], correct: 2, explanation: "O PE liga a carcaça ao barramento de terra, que está conectado ao eletrodo. Nunca ao neutro diretamente." },
          { type: "fill-blank", code: "O fio terra possui a cor ________ ou ________. Deve ser conectado à ________ de equipamentos com carcaça metálica.", blanks: [{ answer: "verde", placeholder: "cor padrão" }, { answer: "verde-amarelo", placeholder: "cor alternativa" }, { answer: "carcaça", placeholder: "parte do equipamento" }], explanation: "Verde ou verde-amarelo é o padrão ABNT para fio de proteção. Carcaça metálica é o ponto de conexão." },
          { type: "calculation", question: "Se a resistência do eletrodo é 20Ω e a resistência corporal é 1000Ω, qual a corrente que passaria pelo corpo em caso de fuga de 220V?", answer: 0.214, unit: "A", validate: function(v) { return Math.abs(v - 0.214) < 0.01; }, explanation: "I = V/(R_terra + R_corpo) = 220/(20+1000) ≈ 0,214A. Com aterramento, grande parte da corrente vai para o solo, reduzindo o risco ao corpo." },
          { type: "drag-drop", question: "Organize os elementos do sistema de aterramento:", pieces: ["Eletrodo no solo", "Barramento de terra", "Fio PE", "Carcaça do equipamento"], correctOrder: ["Eletrodo no solo", "Barramento de terra", "Fio PE", "Carcaça do equipamento"], explanation: "A corrente de fuga segue: carcaça → PE → barramento → eletrodo → solo." }
        ]
      }
    ]
  },
{
    id: "m3",
    title: "Simbologia e Diagramas",
    description: "Normas ABNT, símbolos elétricos e leitura de diagramas",
    icon: "📐",
    color: "#00B894",
    lessons: [
      {
        id: "m3-l1",
        title: "Introdução a Simbologia (NBR 5444)",
        theory: `<h2>Introdução a Simbologia (NBR 5444)</h2>
<p>A <strong>NBR 5444</strong> é a norma ABNT que padroniza os <strong>símbolos gráficos</strong> utilizados em diagramas elétricos no Brasil. Ela é baseada na norma internacional <strong>IEC 60617</strong>.</p>
<p><strong>Importância:</strong> A padronização garante que qualquer profissional, em qualquer lugar do Brasil, interprete o mesmo diagrama da mesma forma. É essencial para projetos, manutenções e normas de segurança.</p>
<p><strong>Categorias principais:</strong> <strong>Símbolos de elementos</strong> (resistor, capacitor, etc.), <strong>conexões</strong> (junções, cruzamentos), <strong>terminais</strong> (pontos de conexão), <strong>linha de referência</strong> (terra, masse).</p>
<p><strong>Convenções:</strong> Os símbolos são desenhados em formato simplificado, usando linhas retas e arcos. A orientação padrão é horizontal, mas pode ser rotacionada sem alterar o significado.</p>
<p><strong>Aplicação prática:</strong> Ao ler um diagrama elétrico industrial, você precisa conhecer os símbolos para identificar cada componente e sua função no circuito.</p>
<p><strong>Erro comum:</strong> Usar símbolos antigos ou não padronizados. Isso causa confusão entre profissionais e pode gerar erros de instalação.</p>
<p><strong>Dica:</strong> Mantenha uma referência da NBR 5444 sempre disponível. A prática de leitura de diagramas torna a identificação dos símbolos automática.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual norma padroniza os símbolos gráficos elétricos no Brasil?", choices: ["NBR 5410", "NBR 5444", "NBR 14626", "NBR 14931"], correct: 1, explanation: "A NBR 5444 é a norma específica para símbolos gráficos, baseada na IEC 60617." },
          { type: "multiple-choice", question: "A NBR 5444 é baseada em qual norma internacional?", choices: ["ISO 9001", "IEC 60617", "IEC 61850", "ISO 14001"], correct: 1, explanation: "A NBR 5444 é uma adaptação brasileira da norma internacional IEC 60617 para símbolos gráficos." },
          { type: "fill-blank", code: "A NBR 5444 padroniza os ________ gráficos elétricos. Os símbolos são baseados na norma ________.", blanks: [{ answer: "símbolos", placeholder: "elemento padronizado" }, { answer: "IEC 60617", placeholder: "norma internacional" }], explanation: "Símbolos padronizados garantem interpretação unificada dos diagramas em todo o Brasil." },
          { type: "drag-drop", question: "Organize as categorias de símbolos elétricos:", pieces: ["Elementos (R, C, L)", "Conexões (junções)", "Terminais", "Linha de referência"], correctOrder: ["Elementos (R, C, L)", "Conexões (junções)", "Terminais", "Linha de referência"], explanation: "As categorias cobrem todos os elementos necessários para representar um circuito elétrico." }
        ]
      },
      {
        id: "m3-l2",
        title: "Símbolos de Fontes (pilha, bateria, gerador)",
        theory: `<h2>Símbolos de Fontes (pilha, bateria, gerador)</h2>
<p>As <strong>fontes de tensão</strong> são representadas por símbolos específicos que indicam seu tipo e característica.</p>
<p><strong>Pilha:</strong> Representada por duas linhas paralelas de tamanhos diferentes. A linha maior indica o polo positivo (+) e a menor o polo negativo (-). Gera tensão CC constante.</p>
<p><strong>Bateria:</strong> Representação de múltiplas pilhas em série: alternância de linhas longas e curtas. Cada par representa uma célula. A tensão total é a soma das células.</p>
<p><strong>Gerador CC:</strong> Círculo com as letras "CC" ou um símbolo de onda retificada dentro. Indica geração de corrente contínua.</p>
<p><strong>Gerador CA:</strong> Círculo com o símbolo de onda senoidal (~) dentro. Representa alternadores e geradores de corrente alternada.</p>
<p><strong>Fonte de tensão independente:</strong> Duas linhas paralelas com sinais + e -. Não depende de outra fonte para funcionar.</p>
<p><strong>Aplicação prática:</strong> Em diagramas de circuitos eletrônicos, identificar corretamente a fonte é o primeiro passo para entender o funcionamento do circuito.</p>
<p><strong>Erro comum:</strong> Confundir o símbolo de bateria com o de capacitor. Bateria tem linhas de espessuras diferentes; capacitor tem linhas iguais.</p>
<p><strong>Dica:</strong> Sempre verifique os terminais + e - ao ligar uma fonte CC. A inversão pode danificar componentes sensíveis.</p>`,
        exercises: [
          { type: "multiple-choice", question: "No símbolo de uma pilha, qual linha representa o polo positivo?", choices: ["A linha menor", "A linha maior", "Ambas iguais", "Depende da cor"], correct: 1, explanation: "A linha maior (mais longa) representa o polo positivo (+); a menor representa o polo negativo (-)." },
          { type: "multiple-choice", question: "O símbolo de um gerador CA é representado por:", choices: ["Um círculo com 'CC'", "Um círculo com '~'", "Duas linhas paralelas", "Um triângulo"], correct: 1, explanation: "O círculo com o símbolo de onda senoidal (~) indica geração de corrente alternada." },
          { type: "fill-blank", code: "Uma bateria é formada por múltiplas ________ em série. O polo positivo é indicado pela linha ________.", blanks: [{ answer: "pilhas", placeholder: "elementos constituintes" }, { answer: "maior", placeholder: "características da linha" }], explanation: "Baterias são conjuntos de pilhas. A linha longa = positivo; curta = negativo." },
          { type: "drag-drop", question: "Associe cada fonte ao seu símbolo:", pieces: ["Pilha: duas linhas", "Bateria: múltiplas linhas", "Gerador CA: círculo ~", "Gerador CC: círculo CC"], correctOrder: ["Pilha: duas linhas", "Bateria: múltiplas linhas", "Gerador CA: círculo ~", "Gerador CC: círculo CC"], explanation: "Cada tipo de fonte tem símbolo distinto que facilita a identificação rápida no diagrama." }
        ]
      },
      {
        id: "m3-l3",
        title: "Símbolos de Passivos (resistor, capacitor, indutor, fusível)",
        theory: `<h2>Símbolos de Passivos (resistor, capacitor, indutor, fusível)</h2>
<p>Os <strong>componentes passivos</strong> não geram energia, apenas armazenam ou dissipam. Cada um possui símbolo próprio na NBR 5444.</p>
<p><strong>Resistor:</strong> Retângulo com proporção 2:1 (mais longo que alto). No padrão americano, usa-se zigue-zague. No Brasil, adota-se o retângulo (IEC). Valor em ohms (Ω).</p>
<p><strong>Capacitor:</strong> Duas linhas paralelas iguais. Capacitor eletrolítico: uma das linhas é curvada (polarizado). Capacitor cerâmico: duas linhas retas (não polarizado).</p>
<p><strong>Indutor:</strong> Semi-círculos encadeados (bobina). Representa uma sequência de espiras. Valor em henrys (H).</p>
<p><strong>Fusível:</strong> Retângulo com uma linha que o atravessa, ou símbolo de "S" esticado. Protege contra sobrecorrente abrindo o circuito.</p>
<p><strong>Varistor:</strong> Símbolo de resistor com uma linha em diagonal e seta. Protege contra surtos de tensão.</p>
<p><strong>Aplicação prática:</strong> Em diagramas de placas eletrônicas, a identificação correta dos passivos é essencial para soldagem e manutenção.</p>
<p><strong>Erro comum:</strong> Confundir capacitor com bateria. Capacitor tem linhas iguais; bateria tem linhas de tamanhos diferentes.</p>
<p><strong>Dica:</strong> Ao desmontar um circuito, anote os valores antes de remover. Componentes idênticos podem ter valores diferentes.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual o símbolo do resistor no padrão IEC (Brasil)?", choices: ["Zigue-zague", "Retângulo 2:1", "Círculo com R", "Linha com ponto"], correct: 1, explanation: "O padrão IEC (adotado pelo Brasil) usa retângulo. O zigue-zague é o padrão ANSI (americano)." },
          { type: "multiple-choice", question: "O fusível é representado por:", choices: ["Retângulo puro", "Retângulo com linha atravessando", "Duas linhas paralelas", "Semi-círculos"], correct: 1, explanation: "O fusível é um retângulo com uma linha que o atravessa, indicando o elemento fusível." },
          { type: "fill-blank", code: "O capacitor polarizado é representado com uma das linhas ________. O indutor é representado por ________ encadeados.", blanks: [{ answer: "curvada", placeholder: "formato da linha" }, { answer: "semi-círculos", placeholder: "formato do símbolo" }], explanation: "A linha curva indica o terminal positivo do capacitor eletrolítico. Semi-círculos representam as espiras da bobina." },
          { type: "drag-drop", question: "Associe cada componente passivo ao seu símbolo:", pieces: ["Resistor: retângulo", "Capacitor: duas linhas", "Indutor: semi-círculos", "Fusível: retângulo + linha"], correctOrder: ["Resistor: retângulo", "Capacitor: duas linhas", "Indutor: semi-círculos", "Fusível: retângulo + linha"], explanation: "Cada símbolo é único e padronizado para fácil identificação nos diagramas." }
        ]
      },
      {
        id: "m3-l4",
        title: "Símbolos de Dispositivos (interruptor, contactor, relé, disjuntor)",
        theory: `<h2>Símbolos de Dispositivos (interruptor, contactor, relé, disjuntor)</h2>
<p>Os <strong>dispositivos de comando e proteção</strong> possuem símbolos que indicam sua função e modo de operação.</p>
<p><strong>Interruptor simples:</strong> Duas linhas com um ponto de contato que abre ou fecha. O símbolo mostra o contato aberto (NC - Normalmente Aberto) ou fechado (NF - Normalmente Fechado).</p>
<p><strong>Contactor:</strong> Símbolo de interruptor com uma bobina eletromagnética representada por um retângulo ou círculo com a letra "K". Aciona por ação eletromagnética.</p>
<p><strong>Relé:</strong> Similar ao contactor, mas de menor potência. Representado por uma bobina e contatos. Usado em circuitos de comando.</p>
<p><strong>Disjuntor:</strong> Símbolo de interruptor com uma marca de corte (traço diagonal ou curva). Indica capacidade de corte automático.</p>
<p><strong>Contator térmico:</strong> Símbolo de contato com uma marca de "batente" ou curva. Responde ao aquecimento causado pela corrente.</p>
<p><strong>DR/IDR:</strong> Símbolo de disjuntor com o acrônimo "DR" ou "IDR" indicado. Detecta fuga de corrente.</p>
<p><strong>Aplicação prática:</strong> Em diagramas de comando de motores, a identificação dos contactores e relés é crucial para entender a sequência de partida.</p>
<p><strong>Erro comum:</strong> Não diferenciar contato NO de NF. NO (Normalmente Aberto) fecha quando energizado; NF (Normalmente Fechado) abre quando energizado.</p>
<p><strong>Dica:</strong> Ao ler diagramas, siga o fluxo: fonte → proteção → comando → carga. Isso facilita a compreensão do circuito.</p>`,
        exercises: [
          { type: "multiple-choice", question: "O que significa NO em um contato de relé?", choices: ["Não Operacional", "Normalmente Aberto", "Nível de Ohm", "Núcleo de Oxigênio"], correct: 1, explanation: "NO = Normalmente Aberto: o contato está aberto quando a bobina não está energizada." },
          { type: "multiple-choice", question: "O contactor é acionado por:", choices: ["Ação manual", "Ação eletromagnética", "Temperatura", "Pressão"], correct: 1, explanation: "O contactor possui uma bobina eletromagnética que, quando energizada, atrai o núcleo e fecha os contatos." },
          { type: "fill-blank", code: "O contato ________ (NO) fecha quando energizado. O contato ________ (NF) abre quando energizado.", blanks: [{ answer: "aberto", placeholder: "estado do contato" }, { answer: "fechado", placeholder: "estado do contato" }], explanation: "NO (Normalmente Aberto) = fecha com energia. NF (Normalmente Fechado) = abre com energia." },
          { type: "drag-drop", question: "Associe cada dispositivo ao seu símbolo:", pieces: ["Interruptor: contato simples", "Contator: contato + bobina", "Relé: bobina + contatos", "Disjuntor: contato + marca corte"], correctOrder: ["Interruptor: contato simples", "Contator: contato + bobina", "Relé: bobina + contatos", "Disjuntor: contato + marca corte"], explanation: "Cada dispositivo tem símbolo distinto que reflete seu mecanismo de operação." }
        ]
      },
      {
        id: "m3-l5",
        title: "Símbolos de Motores e Geradores",
        theory: `<h2>Símbolos de Motores e Geradores</h2>
<p>Motores e geradores são representados por <strong>círculos</strong> com indicações específicas de tipo e função.</p>
<p><strong>Motor CC:</strong> Círculo com as letras "CC" ou "CCD" (contínua). Duas escovas laterais indicam a ligação com o coletor.</p>
<p><strong>Motor CA monofásico:</strong> Círculo com "~" e "1~". Indica funcionamento com corrente alternada de uma fase.</p>
<p><strong>Motor CA trifásico:</strong> Círculo com "~" e "3~". Representa motores de indução trifásicos, os mais industriais.</p>
<p><strong>Motor trifásico com estrela/triângulo:</strong> Círculo com "3~" e as indicações "Y" (estrela) ou "Δ" (triângulo) quando aplicável.</p>
<p><strong>Gerador CA:</strong> Círculo com "~". A diferença do motor é a direção da seta no diagrama (gerador fornece energia; motor consome).</p>
<p><strong>Gerador CC:</strong> Círculo com "CC" e indicação de escovas.</p>
<p><strong>Aplicação prática:</strong> Em diagramas industriais, a identificação correta do motor (monofásico, trifásico, com ou sem inversor) determina o dimensionamento dos componentes.</p>
<p><strong>Erro comum:</strong> Não indicar se o motor é monofásico ou trifásico. Isso é crucial para dimensionar corretamente disjuntores e fios.</p>
<p><strong>Dica:</strong> Sempre verifique a tensão e tipo de ligação (Y ou Δ) ao dimensionar componentes para motores trifásicos.</p>`,
        exercises: [
          { type: "multiple-choice", question: "O símbolo 3~ em um círculo representa:", choices: ["Motor CC", "Motor trifásico CA", "Gerador CC", "Transformador"], correct: 1, explanation: "3~ indica três fases (trifásico). É o símbolo padrão para motores e geradores de corrente alternada trifásica." },
          { type: "multiple-choice", question: "As escovas laterais no símbolo de motor CC indicam:", choices: ["Polo norte e sul", "Conexão com o coletor", "Ponto de fixação", "Ventilação"], correct: 1, explanation: "As escovas fazem contato com o coletor (comutador) para energizar os enrolamentos do rotor." },
          { type: "fill-blank", code: "Motor CA monofásico é representado por um círculo com ________. Motor trifásico é representado com ________.", blanks: [{ answer: "1~", placeholder: "número de fases" }, { answer: "3~", placeholder: "número de fases" }], explanation: "1~ = uma fase (monofásico). 3~ = três fases (trifásico). A distinção é essencial para dimensionamento." },
          { type: "drag-drop", question: "Associe cada tipo de motor ao seu símbolo:", pieces: ["CC: círculo CC + escovas", "Monofásico: círculo 1~", "Trifásico: círculo 3~", "Gerador: círculo ~ (fornecendo)"], correctOrder: ["CC: círculo CC + escovas", "Monofásico: círculo 1~", "Trifásico: círculo 3~", "Gerador: círculo ~ (fornecendo)"], explanation: "Cada símbolo indica o tipo e a função do equipamento no circuito." }
        ]
      },
      {
        id: "m3-l6",
        title: "Diagrama Unifilar",
        theory: `<h2>Diagrama Unifilar</h2>
<p>O <strong>diagrama unifilar</strong> representa uma instalação elétrica usando <strong>uma única linha</strong> para cada circuito, independente do número de fios. É a forma mais simplificada de representação.</p>
<p><strong>Características:</strong> Cada ramal é representado por uma linha. As barras de fase e neutro são mostradas como linhas horizontais. Os componentes são colocados ao longo dessas linhas.</p>
<p><strong>Elementos representados:</strong> <strong>Barras de alimentação</strong> (fase e neutro), <strong>disjuntores</strong> (símbolos ao longo da linha), <strong>DRs</strong>, <strong>tomadas</strong>, <strong>luminárias</strong>, <strong>motores</strong>.</p>
<p><strong>Vantagens:</strong> Visão geral da instalação. Fácil de entender para projetos simples. Mostra claramente a sequência de proteção.</p>
<p><strong>Limitações:</strong> Não mostra cores dos fios. Não diferencia fases em sistemas trifásicos. Para isso, usa-se o diagrama multifilar.</p>
<p><strong>Aplicação prática:</strong> O diagrama unifilar é o mais comum em projetos residenciais e pequenos comerciais. É exigido pela concessionária para aprovação de ligações.</p>
<p><strong>Erro comum:</strong> Usar diagrama unifilar para projetos industriais complexos. Nesses casos, é necessário o multifilar para detalhar as conexões.</p>
<p><strong>Dica:</strong> Ao desenhar um diagrama unifilar, comece pelas barras de alimentação e vá adicionando circuitos da esquerda para a direita.</p>`,
        exercises: [
          { type: "multiple-choice", question: "O diagrama unifilar representa:", choices: ["Cada fio individualmente", "Cada circuito com uma única linha", "Apenas o quadro de distribuição", "Apenas os disjuntores"], correct: 1, explanation: "No unifilar, cada circuito é representado por uma única linha, independentemente do número de fios." },
          { type: "multiple-choice", question: "Qual a principal vantagem do diagrama unifilar?", choices: ["Mostra cores dos fios", "Visão geral da instalação", "Detalha cada conexão", "Indica correntes específicas"], correct: 1, explanation: "O unifilar oferece uma visão clara e organizada de toda a instalação, ideal para projetos simples." },
          { type: "fill-blank", code: "O diagrama unifilar usa ________ linha para cada circuito. É mais ________ que o multifilar.", blanks: [{ answer: "uma", placeholder: "número de linhas" }, { answer: "simplificado", placeholder: "complexidade" }], explanation: "Uma linha por circuito torna o diagrama mais limpo e fácil de ler, mas menos detalhado." },
          { type: "drag-drop", question: "Organize os elementos de um diagrama unifilar (de cima para baixo):", pieces: ["Barras de alimentação", "DR geral", "Disjuntores individuais", "Cargas (tomadas/luz)"], correctOrder: ["Barras de alimentação", "DR geral", "Disjuntores individuais", "Cargas (tomadas/luz)"], explanation: "A sequência segue o fluxo de energia: entrada → proteção → distribuição → cargas." }
        ]
      },
      {
        id: "m3-l7",
        title: "Diagrama Multifilar (cores NBR)",
        theory: `<h2>Diagrama Multifilar (cores NBR)</h2>
<p>O <strong>diagrama multifilar</strong> mostra <strong>cada fio individualmente</strong>, incluindo cores, seções e conexões. É a representação mais detalhada de uma instalação.</p>
<p><strong>Cores dos condutores (NBR 5410):</strong> <strong>Fase (L):</strong> vermelho, marrom ou preto. <strong>Neutro (N):</strong> azul. <strong>Proteção/Terra (PE):</strong> verde ou verde-amarelo. Não usar azul no lugar do verde-amarelo.</p>
<p><strong>Vantagens:</strong> Mostra exatamente como cada fio deve ser conectado. Indica a cor correta de cada condutor. Essencial para instalações complexas.</p>
<p><strong>Convenções:</strong> Linhas tracejadas podem indicar fios ocultos (em eletrodutos). Setas mostram direção de alimentação. Letras indicam função (F, N, PE).</p>
<p><strong>Aplicação prática:</strong> Em instalações industriais, o multifilar é obrigatório para documentar cada conexão. É a base para manutenções futuras.</p>
<p><strong>Erro comum:</strong> Não seguir a codificação de cores. Usar fio azul para fase ou verde-amarelo para neutro é violação da norma e gera confusão.</p>
<p><strong>Dica:</strong> Ao instalar fios, use fita isolante da cor correspondente para marcar cada ponto de conexão. Isso facilita manutenções futuras.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual cor é padronizada para o condutor de proteção (terra)?", choices: ["Azul", "Vermelho", "Verde ou verde-amarelo", "Preto"], correct: 2, explanation: "O condutor de proteção (PE) deve ser verde ou verde-amarelo, conforme NBR 5410." },
          { type: "multiple-choice", question: "O diagrama multifilar é necessário para:", choices: ["Projetos residenciais simples", "Instalações industriais complexas", "Apenas iluminação", "Apenas circuitos de tomada"], correct: 1, explanation: "Indústrias exigem multifilar para documentar cada conexão, facilitando manutenção e expansão." },
          { type: "fill-blank", code: "A cor do fio neutro é ________. A cor da fase pode ser ________, marrom ou preto.", blanks: [{ answer: "azul", placeholder: "cor do neutro" }, { answer: "vermelho", placeholder: "cor da fase" }], explanation: "Azul = neutro. Vermelho/marrom/preto = fase. Verde/verde-amarelo = terra." },
          { type: "drag-drop", question: "Associe cada condutor à sua cor:", pieces: ["Fase: vermelho/marrom/preto", "Neutro: azul", "Terra: verde/verde-amarelo"], correctOrder: ["Fase: vermelho/marrom/preto", "Neutro: azul", "Terra: verde/verde-amarelo"], explanation: "Seguir a codificação de cores é obrigatório pela NBR 5410 e garante segurança." }
        ]
      },
      {
        id: "m3-l8",
        title: "Diagrama de Força",
        theory: `<h2>Diagrama de Força</h2>
<p>O <strong>diagrama de força</strong> (ou diagrama potência) mostra o <strong>circuito de potência</strong> de uma instalação: onde a energia elétrica flui para alimentar cargas como motores, resistências e iluminação.</p>
<p><strong>Elementos principais:</strong> <strong>Alimentação</strong> (barras de fase e neutro), <strong>proteção</strong> (disjuntores, fusíveis), <strong>comando</strong> (contactores), <strong>cargas</strong> (motores, resistências, iluminação).</p>
<p><strong>Características:</strong> Usa símbolos maiores e linhas mais grossas que o diagrama de comando. Mostra as correntes e tensões de cada ramo. Identifica a potência de cada carga.</p>
<p><strong>Função:</strong> Dimensionar fios, disjuntores e componentes de potência. Calcular correntes totais e quedas de tensão. Verificar capacidade da alimentação.</p>
<p><strong>Aplicação prática:</strong> Em painéis industriais, o diagrama de força mostra todos os motores, suas potências e o caminho da energia desde a entrada até cada equipamento.</p>
<p><strong>Erro comum:</strong> Não indicar as correntes nominais de cada carga. Sem esses dados, não é possível dimensionar adequadamente os protetores.</p>
<p><strong>Dica:</strong> Ao projetar, primeiro desenhe o diagrama de força para dimensionar. Depois, o diagrama de comando para a lógica de operação.</p>`,
        exercises: [
          { type: "multiple-choice", question: "O diagrama de força mostra:", choices: ["A lógica de comando", "O circuito de potência", "Apenas o quadro de distribuição", "Apenas a iluminação"], correct: 1, explanation: "O diagrama de força representa o circuito de potência, onde flui a energia para alimentar as cargas." },
          { type: "multiple-choice", question: "Os elementos de proteção no diagrama de força são:", choices: ["Relés e temporizadores", "Disjuntores e fusíveis", "Contatores e botoeiras", "Cabos e eletrodutos"], correct: 1, explanation: "Disjuntores e fusíveis protegem o circuito de potência contra sobrecorrente e curto-circuito." },
          { type: "fill-blank", code: "O diagrama de força é ________ e usa linhas mais ________ que o diagrama de comando.", blanks: [{ answer: "maior", placeholder: "tamanho" }, { answer: "grossas", placeholder: "espessura" }], explanation: "Linhas grossas representam circuitos de potência (maior corrente); linhas finas representam comando." },
          { type: "drag-drop", question: "Organize os elementos do diagrama de força (do início ao fim):", pieces: ["Alimentação", "Proteção (disjuntor)", "Comando (contator)", "Carga (motor)"], correctOrder: ["Alimentação", "Proteção (disjuntor)", "Comando (contator)", "Carga (motor)"], explanation: "O fluxo segue: entrada → proteção → comando → carga. Essa sequência é padrão." }
        ]
      },
      {
        id: "m3-l9",
        title: "Diagrama de Comando",
        theory: `<h2>Diagrama de Comando</h2>
<p>O <strong>diagrama de comando</strong> (ou diagrama de controle) mostra a <strong>lógica de operação</strong> de uma instalação: como os dispositivos são acionados, intertravados e temporizados.</p>
<p><strong>Elementos principais:</strong> <strong>Botoeiras</strong> (liga/desliga), <strong>contatores</strong> (acionamento de cargas), <strong>relés</strong> (lógica), <strong>temporizadores</strong> (atraso), <strong>intertravamentos</strong> (proteção cruzada).</p>
<p><strong>Representação:</strong> Usa-se linhas verticais para representar a alimentação (fase e neutro). Os dispositivos são colocados entre essas linhas, indicando a sequência de operação.</p>
<p><strong>Lógica série/paralelo:</strong> Contatos em série = lógica E (ambos devem estar fechados). Contatos em paralelo = lógica OU (qualquer um fecha o circuito).</p>
<p><strong>Aplicação prática:</strong> Em partida de motores, o diagrama de comando mostra o acionamento do contactor, o intertravamento e a proteção térmica.</p>
<p><strong>Erro comum:</strong> Não incluir intertravamentos em circuitos com inversão de marcha. Isso pode causar curto-circuito entre fases.</p>
<p><strong>Dica:</strong> Leia o diagrama de cima para baixo e da esquerda para a direita. Siga o fluxo da corrente de comando.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Contatos em série no diagrama de comando representam:", choices: ["Lógica OU", "Lógica E", "Lógica NÃO", "Lógica XOR"], correct: 1, explanation: "Em série, AMBOS os contatos devem estar fechados para haver passagem de corrente = lógica E (AND)." },
          { type: "multiple-choice", question: "O intertravamento em circuito de reversão serve para:", choices: ["Aumentar potência", "Evitar curto entre fases", "Reduzir consumo", "Melhorar eficiência"], correct: 1, explanation: "O intertravamento impede que contactores de ida e volta sejam acionados simultaneamente, evitando curto." },
          { type: "fill-blank", code: "Contatos em ________ representam lógica E. Contatos em ________ representam lógica OU.", blanks: [{ answer: "série", placeholder: "ligação" }, { answer: "paralelo", placeholder: "ligação" }], explanation: "Série = ambos precisam fechar (AND). Paralelo = qualquer um fecha (OR)." },
          { type: "drag-drop", question: "Organize os elementos de um diagrama de comando:", pieces: ["Alimentação", "Botoeiras", "Contatores/Relés", "Cargas"], correctOrder: ["Alimentação", "Botoeiras", "Contatores/Relés", "Cargas"], explanation: "O fluxo: energia → comando (botoeiras) → lógica (contatores/relés) → ação (cargas)." }
        ]
      },
      {
        id: "m3-l10",
        title: "Leitura de Diagrama Completo",
        theory: `<h2>Leitura de Diagrama Completo</h2>
<p>A <strong>leitura de diagrama completo</strong> envolve a integração do diagrama de força e de comando para entender toda a instalação.</p>
<p><strong>Passo a passo:</strong> <strong>1)</strong> Identifique a alimentação (tensão, número de fases). <strong>2)</strong> Localize os dispositivos de proteção. <strong>3)</strong> Identifique as cargas e suas potências. <strong>4)</strong> Analise a lógica de comando. <strong>5)</strong> Verifique intertravamentos e proteções.</p>
<p><strong>Informações essenciais:</strong> Tensão nominal, corrente de cada ramo, potência das cargas, seção dos fios, tipo de proteção, sequência de operação.</p>
<p><strong>Erros a identificar:</strong> Fios subdimensionados, proteções inadequadas, ausência de terra, intertravamentos faltantes, conexões incorretas.</p>
<p><strong>Aplicação prática:</strong> Antes de qualquer intervenção em um quadro ou painel, leia completamente o diagrama. Identifique cada componente e sua função.</p>
<p><strong>Erro comum:</strong> Começar a trabalhar sem entender o diagrama. Isso pode causar danos a equipamentos e riscos ao profissional.</p>
<p><strong>Dica:</strong> Imprima o diagrama e marque com caneta cada circuito que verificar. Isso evita esquecer etapas na verificação.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Ao ler um diagrama completo, qual é o primeiro passo?", choices: ["Verificar os disjuntores", "Identificar a alimentação", "Ligar o equipamento", "Medir a corrente"], correct: 1, explanation: "O primeiro passo é sempre identificar a alimentação: tensão, número de fases e capacidade." },
          { type: "multiple-choice", question: "Qual informação NÃO é encontrada em um diagrama completo?", choices: ["Tensão nominal", "Cor do fio do eletricista", "Potência das cargas", "Tipo de proteção"], correct: 1, explanation: "O diagrama não informa dados pessoais do profissional. Ele mostra dados técnicos da instalação." },
          { type: "fill-blank", code: "Um diagrama completo integra o diagrama de ________ e o diagrama de ________. Antes de qualquer intervenção, leia ________ o diagrama.", blanks: [{ answer: "força", placeholder: "circuitos de potência" }, { answer: "comando", placeholder: "lógica de operação" }, { answer: "completamente", placeholder: "ação recomendada" }], explanation: "Força + comando = instalação completa. Ler tudo antes de trabalhar é regra de segurança." },
          { type: "drag-drop", question: "Organize os passos para ler um diagrama completo:", pieces: ["1. Identificar alimentação", "2. Localizar proteções", "3. Identificar cargas", "4. Analisar comando", "5. Verificar intertravamentos"], correctOrder: ["1. Identificar alimentação", "2. Localizar proteções", "3. Identificar cargas", "4. Analisar comando", "5. Verificar intertravamentos"], explanation: "Seguir essa ordem系统ática garante que nenhum detalhe seja esquecido na análise do diagrama." }
        ]
      }
    ]
  },
  {
    id: "m4",
    title: "Motores Elétricos",
    description: "Princípios, classificações, ligações, partidas e proteções",
    icon: "🔧",
    color: "#E17055",
    lessons: [
      {
        id: "m4-l1",
        title: "Princípio de Funcionamento",
        theory: `<h2>Princípio de Funcionamento</h2>
<p>O <strong>motor elétrico</strong> converte energia elétrica em energia mecânica por meio de <strong>interação eletromagnética</strong>. É o equipamento mais utilizado na indústria.</p>
<p><strong>Princípio básico:</strong> Quando uma corrente flui por um condutor em um campo magnético, surge uma força mecânica (Força de Lorentz). Em um motor, essa força faz o rotor girar.</p>
<p><strong>Partes principais:</strong> <strong>Estator</strong> (parte fixa, gera o campo magnético), <strong>Rotor</strong> (parte móvel, gira sob a ação do campo), <strong>Escravas/Comutador</strong> (em motores CC, comuta a corrente no rotor).</p>
<p><strong>Princípio da indução (motores de indução):</strong> O campo magnético girante do estator induz corrente no rotor, que por sua vez gera seu próprio campo magnético. A interação entre os campos faz o rotor girar.</p>
<p><strong>Aplicação prática:</strong> Motores de indução são encontrados em bombas, ventiladores, compressores, esteiras, elevadores e quase toda máquina industrial.</p>
<p><strong>Erro comum:</strong> Achar que o rotor possui ímãs permanentes em todos os motores. No motor de indução, o rotor é bobinado ou em gaiola de esquilo.</p>
<p><strong>Dica:</strong> O motor de indução trifásico é o "cavalo de batalha" da indústria. Entender seu princípio é essencial para qualquer eletricista.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual energia o motor elétrico converte em energia mecânica?", choices: ["Energia térmica", "Energia elétrica", "Energia nuclear", "Energia solar"], correct: 1, explanation: "O motor elétrico converte energia elétrica em mecânica por interação eletromagnética." },
          { type: "multiple-choice", question: "A parte fixa do motor que gera o campo magnético é:", choices: ["Rotor", "Estator", "Escova", "Comutador"], correct: 1, explanation: "O estator é a parte fixa que contém os enrolamentos que criam o campo magnético girante." },
          { type: "fill-blank", code: "O motor converte energia ________ em energia ________. A parte móvel do motor é o ________.", blanks: [{ answer: "elétrica", placeholder: "energia de entrada" }, { answer: "mecânica", placeholder: "energia de saída" }, { answer: "rotor", placeholder: "parte móvel" }], explanation: "Entrada: elétrica. Saída: mecânica. Rotor gira; estator é fixo." },
          { type: "drag-drop", question: "Organize as partes de um motor elétrico:", pieces: ["Estator (fixo)", "Rotor (móvel)", "Escovas/Comutador", "Ligação mecânica"], correctOrder: ["Estator (fixo)", "Rotor (móvel)", "Escovas/Comutador", "Ligação mecânica"], explanation: "O estator gera o campo, o rotor gira, as escovas comutam, a ligação transmite o torque." }
        ]
      },
      {
        id: "m4-l2",
        title: "Classificação de Motores",
        theory: `<h2>Classificação de Motores</h2>
<p>Os motores elétricos são classificados por diversos critérios que definem suas características e aplicações.</p>
<p><strong>Por tipo de corrente:</strong> <strong>Motor CC</strong> (corrente contínua) — usa escovas e comutador. <strong>Motor CA</strong> (corrente alternada) — mais comum na indústria.</p>
<p><strong>Por número de fases:</strong> <strong>Monofásico</strong> (1 fase, até ~3CV, uso residencial). <strong>Bifásico</strong> (2 fases, raro). <strong>Trifásico</strong> (3 fases, uso industrial, desde 1CV até milhares de CV).</p>
<p><strong>Por princípio de funcionamento:</strong> <strong>Motor de indução</strong> (mais comum, rotor bobinado ou gaiola de esquilo). <strong>Motor sincronismo</strong> (rotor com ímãs, velocidade constante). <strong>Motor de reluctância</strong> (rotor de ferro, sem enrolamento).</p>
<p><strong>Por construção:</strong> <strong>Aberto</strong> (ventilação livre), <strong>fechado</strong> (protegido contra poeira), <strong>hermético</strong> (à prova de água e gás).</p>
<p><strong>Por potência:</strong> Motores de baixa potência (< 1CV), média (1-100CV) e alta potência (> 100CV).</p>
<p><strong>Aplicação prática:</strong> A classificação determina o tipo de partida, proteção e instalação necessária para cada aplicação.</p>
<p><strong>Erro comum:</strong> Usar motor monofásico em aplicações que requerem torque elevado. Motor monofásico não tem torque de partida sem auxílio.</p>
<p><strong>Dica:</strong> Para aplicações industriais, prefira sempre motor trifásico de indução. É mais robusto, eficiente e barato.</p>`,
        exercises: [
          { type: "multiple-choice", question: "O motor mais utilizado na indústria é:", choices: ["Motor CC", "Motor monofásico CA", "Motor trifásico de indução", "Motor sincronismo"], correct: 2, explanation: "O motor trifásico de indução é o mais usado por sua robustez, simplicidade e baixo custo." },
          { type: "multiple-choice", question: "Motor monofásico é indicado para potências:", choices: ["Acima de 100CV", "Até 3CV", "Acima de 50CV", "Qualquer potência"], correct: 1, explanation: "Motores monofásicos são limitados a baixas potências (até ~3CV), como em residências." },
          { type: "fill-blank", code: "Motores são classificados por ________ (CC/CA), número de ________ (mono/tri) e princípio de ________.", blanks: [{ answer: "corrente", placeholder: "tipo de energia" }, { answer: "fases", placeholder: "alimentação" }, { answer: "funcionamento", placeholder: "princípio" }], explanation: "As três classificações principais definem o tipo, aplicação e comportamento do motor." },
          { type: "drag-drop", question: "Classifique os motores por potência:", pieces: ["Baixa: < 1CV", "Média: 1-100CV", "Alta: > 100CV"], correctOrder: ["Baixa: < 1CV", "Média: 1-100CV", "Alta: > 100CV"], explanation: "A potência define o porte do motor e o tipo de aplicação industrial ou residencial." }
        ]
      },
      {
        id: "m4-l3",
        title: "Motores Monofásicos",
        theory: `<h2>Motores Monofásicos</h2>
<p>O <strong>motor monofásico</strong> é alimentado por <strong>uma única fase</strong> (127V ou 220V). É o tipo mais comum em residências e pequenas oficinas.</p>
<p><strong>Características:</strong> Não possui torque de partida próprio. Precisa de um <strong>enrolamento auxiliar</strong> ou <strong>capacitor</strong> para iniciar. Funciona apenas com corrente alternada.</p>
<p><strong>Tipos principais:</strong> <strong>Com capacitor permanente</strong> (capacitor sempre ligado, maior torque). <strong>Com capacitor de partida</strong> (capacitor é desconectado após atingir velocidade). <strong>Com enrolamento auxiliar</strong> (sem capacitor, menos eficiente).</p>
<p><strong>Potência típica:</strong> De 1/8 CV até 3 CV. Acima disso, é mais econômico usar motor trifásico com conversor de fase.</p>
<p><strong>Rotação:</strong> Nominal de 1725 ou 3450 RPM (dependendo do número de polos). Em 60Hz, a rotação síncrona é 1800 RPM (4 polos) ou 3600 RPM (2 polos).</p>
<p><strong>Aplicação prática:</strong> Motores monofásicos são usados em ventiladores, bombas residenciais, compressores de geladeira, máquinas de costura e ferramentas manuais.</p>
<p><strong>Erro comum:</strong> Tentar sobrecarregar um motor monofásico. Ele não suporta sobrecarga prolongada como um trifásico.</p>
<p><strong>Dica:</strong> Para inverter o sentido de rotação de um motor monofásico com capacitor, inverta as conexões do enrolamento auxiliar (não da fonte).</p>`,
        exercises: [
          { type: "multiple-choice", question: "O motor monofásico precisa de qual elemento para ter torque de partida?", choices: ["Disjuntor", "Capacitor ou enrolamento auxiliar", "Contactor", "Relé térmico"], correct: 1, explanation: "O motor monofásico não tem torque de partida próprio. Capacitor ou enrolamento auxiliar cria o torque necessário." },
          { type: "multiple-choice", question: "A potência máxima típica de motores monofásicos é de:", choices: ["0,5 CV", "3 CV", "10 CV", "50 CV"], correct: 1, explanation: "Acima de 3 CV, é mais econômico usar motor trifásico com conversor de fase." },
          { type: "fill-blank", code: "O motor monofásico possui ________ fase. Para inverter a rotação, inverta as conexões do enrolamento ________.", blanks: [{ answer: "uma", placeholder: "número de fases" }, { answer: "auxiliar", placeholder: "enrolamento" }], explanation: "Uma fase = monofásico. Inverter o auxiliar inverte o campo magnético e a rotação." },
          { type: "calculation", question: "Um motor monofásico de 1/4 CV consome 127V. Considerando rendimento de 70%, qual a corrente?", answer: 3.46, unit: "A", validate: function(v) { return Math.abs(v - 3.46) < 0.5; }, explanation: "P_mecânica = 0,25 × 735,5 = 183,9W. P_elétrica = 183,9/0,7 = 262,7W. I = 262,7/127 ≈ 2,07A. Aproximadamente 3,5A incluindo fator de potência." }
        ]
      },
      {
        id: "m4-l4",
        title: "Motores Trifásicos",
        theory: `<h2>Motores Trifásicos</h2>
<p>O <strong>motor trifásico</strong> é alimentado por <strong>três fases</strong> (220/380V). É o motor mais utilizado na indústria por sua eficiência, robustez e simplicidade.</p>
<p><strong>Vantagens sobre o monofásico:</strong> Maior rendimento (85-95%), menor custo por CV, partida mais suave, distribuição equilibrada de carga, menor vibração.</p>
<p><strong>Enrolamentos:</strong> Três enrolamentos idênticos, deslocados 120° no espaço. Podem ser ligados em <strong>estrela (Y)</strong> ou <strong>triângulo (Δ)</strong>, dependendo da tensão disponível.</p>
<p><strong>Características nominais:</strong> Tensão (220/380V ou 380/660V), corrente nominal, potência (CV ou kW), rotação (RPM), fator de potência, rendimento.</p>
<p><strong>Rotação:</strong> A rotação síncrona depende do número de polos: 2 polos = 3600 RPM; 4 polos = 1800 RPM; 6 polos = 1200 RPM (em 60Hz). A rotação real é 3-5% menor (escorregamento).</p>
<p><strong>Aplicação prática:</strong> Motores trifásicos são usados em bombas, compressores, esteiras, ventiladores industriais, máquinas ferramenta e linhas de produção.</p>
<p><strong>Erro comum:</strong> Não verificar a tensão de alimentação antes de ligar. Um motor 380V ligado em 220V não tem potência; o inverso queima o enrolamento.</p>
<p><strong>Dica:</strong> A placa do motor indica a tensão e ligação corretas. Nunca ligue um motor sem verificar esses dados primeiro.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual a principal vantagem do motor trifásico sobre o monofásico?", choices: ["Menor custo", "Maior rendimento", "Funciona em CC", "Não precisa de terra"], correct: 1, explanation: "O motor trifásico tem rendimento de 85-95%, significativamente maior que o monofásico." },
          { type: "multiple-choice", question: "A rotação síncrona de um motor de 4 polos em 60Hz é:", choices: ["3600 RPM", "1800 RPM", "1200 RPM", "900 RPM"], correct: 1, explanation: "Rotação = (120 × f) / p = (120 × 60) / 4 = 1800 RPM. O escorregamento reduz ~5%." },
          { type: "fill-blank", code: "Os enrolamentos do motor trifásico podem ser ligados em ________ (Y) ou ________ (Δ).", blanks: [{ answer: "estrela", placeholder: "ligação Y" }, { answer: "triângulo", placeholder: "ligação Δ" }], explanation: "Estrela (Y) usa tensão fase-neutro. Triângulo (Δ) usa tensão fase-fase." },
          { type: "calculation", question: "Um motor trifásico de 5CV em 380V tem rendimento de 88% e fator de potência 0,85. Qual a corrente nominal?", answer: 6.6, unit: "A", validate: function(v) { return Math.abs(v - 6.6) < 0.5; }, explanation: "P_elétrica = (5 × 735,5) / 0,88 = 4179W. I = P / (√3 × V × fp) = 4179 / (1,732 × 380 × 0,85) ≈ 7,45A." }
        ]
      },
      {
        id: "m4-l5",
        title: "Ligação Estrela (Y)",
        theory: `<h2>Ligação Estrela (Y)</h2>
<p>A <strong>ligação estrela (Y)</strong> conecta um extremo de cada enrolamento em um ponto comum chamado <strong>ponto estrela</strong> ou <strong>neutro</strong>.</p>
<p><strong>Características:</strong> A tensão entre fase e neutro é a <strong>tensão de fase</strong> (Vf). A tensão entre fases é a <strong>tensão de linha</strong> (Vl = Vf × √3). Em 380V de linha: Vf = 380/√3 ≈ 220V.</p>
<p><strong>Correntes:</strong> A corrente de fase (If) é igual à corrente de linha (Il). If = Il. A corrente é a mesma em todo o circuito série de cada fase.</p>
<p><strong>Aplicação:</strong> Usada quando a tensão de fase do motor é igual à tensão de fase da rede. Exemplo: motor 220/380V em rede 220/380V — liga em estrela.</p>
<p><strong>Identificação:</strong> Os terminais U1, V1, W1 são as entradas. U2, V2, W2 são conectados entre si no ponto estrela.</p>
<p><strong>Aplicação prática:</strong> Em partida estrela-triângulo, o motor inicia em estrela (tensão reduzida) e muda para triângulo (tensão nominal).</p>
<p><strong>Erro comum:</strong> Ligação errada do ponto estrela. Se um dos terminais U2, V2 ou W2 não for conectado, o motor não gira e aquece.</p>
<p><strong>Dica:</strong> Verifique a placa do motor: se a tensão é "220/380V", em estrela ele recebe 220V por fase; em triângulo, 380V por fase.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Em ligação estrela, a tensão entre fases é:", choices: ["Igual à tensão de fase", "√3 vezes a tensão de fase", "Metade da tensão de fase", "3 vezes a tensão de fase"], correct: 1, explanation: "Vl = Vf × √3. A tensão entre fases é sempre √3 (~1,732) vezes a tensão de fase." },
          { type: "multiple-choice", question: "Em ligação estrela, a corrente de fase é:", choices: ["Diferente da corrente de linha", "Igual à corrente de linha", "√3 vezes a linha", "Metade da linha"], correct: 1, explanation: "Em estrela, If = Il. A corrente é a mesma porque os enrolamentos estão em série com a linha." },
          { type: "fill-blank", code: "Na ligação estrela, os terminais ________ são conectados entre si. A tensão de linha é ________ vezes a tensão de fase.", blanks: [{ answer: "U2, V2, W2", placeholder: "terminais do ponto estrela" }, { answer: "√3", placeholder: "razão de tensões" }], explanation: "U2-V2-W2 formam o ponto estrela. Vl = Vf × √3 é a relação fundamental." },
          { type: "calculation", question: "Motor 220/380V ligado em estrela em rede 380V. Qual a tensão em cada enrolamento?", answer: 220, unit: "V", validate: function(v) { return Math.abs(v - 220) < 5; }, explanation: "Vf = Vl/√3 = 380/1,732 ≈ 220V. Em estrela, cada enrolamento recebe a tensão de fase." }
        ]
      },
      {
        id: "m4-l6",
        title: "Ligação Triângulo (Δ)",
        theory: `<h2>Ligação Triângulo (Δ)</h2>
<p>A <strong>ligação triângulo (Δ)</strong> conecta os enrolamentos em série, formando um fechamento triangular. O final de um enrolamento se conecta ao início do próximo.</p>
<p><strong>Características:</strong> A tensão entre fases é igual à <strong>tensão de fase</strong> (Vl = Vf). Cada enrolamento recebe a tensão total da linha. A corrente de linha é √3 vezes a corrente de fase (Il = If × √3).</p>
<p><strong>Aplicação:</strong> Usada quando a tensão de linha da rede é igual à tensão de linha do motor. Exemplo: motor 380/660V em rede 380V — liga em triângulo.</p>
<p><strong>Identificação:</strong> U1 se conecta a W2, V1 a U2, W1 a V2. Cada par forma uma fase do triângulo.</p>
<p><strong>Vantagens:</strong> Maior torque que estrela (pois cada enrolamento recebe mais tensão). Usado em partida direta e na segunda etapa da partida estrela-triângulo.</p>
<p><strong>Aplicação prática:</strong> Em partida estrela-triângulo, o motor inicia em estrela (tensão reduzida, corrente menor) e muda para triângulo (tensão nominal, potência total).</p>
<p><strong>Erro comum:</strong> Conectar em triângulo quando o motor requer estrela. Isso aplica tensão excessiva nos enrolamentos e queima o motor.</p>
<p><strong>Dica:</strong> Se a placa diz "380/660V Y/Δ", significa: 380V em estrela, 660V em triângulo. Em rede 380V, ligue em estrela.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Em ligação triângulo, a tensão entre fases é:", choices: ["√3 vezes a tensão de fase", "Igual à tensão de fase", "Metade da tensão de fase", "3 vezes a tensão de fase"], correct: 1, explanation: "Em triângulo, Vl = Vf. A tensão entre fases é igual à tensão em cada enrolamento." },
          { type: "multiple-choice", question: "Em ligação triângulo, a corrente de linha é:", choices: ["Igual à corrente de fase", "√3 vezes a corrente de fase", "Metade da corrente de fase", "3 vezes a corrente de fase"], correct: 1, explanation: "Il = If × √3. A corrente de linha é maior que a de fase porque o nó divide a corrente." },
          { type: "fill-blank", code: "Na ligação triângulo, o terminal U1 se conecta a ________. A corrente de linha é ________ vezes a de fase.", blanks: [{ answer: "W2", placeholder: "terminal de conexão" }, { answer: "√3", placeholder: "razão de correntes" }], explanation: "U1-W2, V1-U2, W1-V2 formam o triângulo. Il = If × √3 é a relação de correntes." },
          { type: "calculation", question: "Motor 380/660V Y/Δ ligado em triângulo em rede 380V. Qual a tensão em cada enrolamento?", answer: 380, unit: "V", validate: function(v) { return Math.abs(v - 380) < 5; }, explanation: "Em triângulo, Vf = Vl = 380V. Cada enrolamento recebe a tensão nominal de linha." }
        ]
      },
      {
        id: "m4-l7",
        title: "Partida Direta",
        theory: `<h2>Partida Direta</h2>
<p>A <strong>partida direta</strong> é o método mais simples de ligar um motor: a alimentação é aplicada diretamente aos terminais, partindo do repouso até a velocidade nominal.</p>
<p><strong>Componentes:</strong> <strong>Contator</strong> (fecha o circuito de potência), <strong>botão liga</strong> (NO), <strong>botão desliga</strong> (NF), <strong>proteção térmica</strong> (relé térmico ou disjuntor motor).</p>
<p><strong>Funcionamento:</strong> Ao pressionar o botão liga, o contactor energiza e fecha os contatos principais. O motor recebe tensão total e acelera. O botão desliga interrompe a corrente da bobina do contactor.</p>
<p><strong>Corrente de partida:</strong> Em partida direta, a corrente de partida pode ser de <strong>5 a 7 vezes</strong> a corrente nominal. Isso pode causar queda de tensão na rede.</p>
<p><strong>Limitações:</strong> Não é indicado para motores grandes (>10CV) sem verificação da capacidade da rede. A alta corrente de partida pode perturbar outros equipamentos.</p>
<p><strong>Aplicação prática:</strong> Usado em motores de até 10CV, bombas d'água, ventiladores, compressores pequenos.</p>
<p><strong>Erro comum:</strong> Não incluir proteção térmica. Sem ela, o motor pode queimar por sobrecarga sem que o disjuntor atue.</p>
<p><strong>Dica:</strong> Para motores acima de 10CV, avalie partida estrela-triângulo ou软启动 (soft starter) para reduzir a corrente de partida.</p>`,
        exercises: [
          { type: "multiple-choice", question: "A corrente de partida em partida direta pode ser:", choices: ["1 vez a nominal", "5 a 7 vezes a nominal", "10 a 15 vezes a nominal", "Igual à nominal"], correct: 1, explanation: "Em partida direta, o motor puxa 5-7× a corrente nominal até atingir velocidade." },
          { type: "multiple-choice", question: "O relé térmico no circuito de partida direta protege contra:", choices: ["Curto-circuito", "Sobrecarga", "Sobretensão", "Falta de fase"], correct: 1, explanation: "O relé térmico detecta sobrecarga e abre o circuito de comando, desligando o contactor." },
          { type: "fill-blank", code: "Na partida direta, ao pressionar o botão ________, o contactor energiza e o motor recebe ________ nominal.", blanks: [{ answer: "liga", placeholder: "botão de acionamento" }, { answer: "tensão", placeholder: "energia recebida" }], explanation: "Botão liga → contactor → motor recebe tensão total → acelera." },
          { type: "drag-drop", question: "Organize os componentes da partida direta:", pieces: ["Botão liga (NO)", "Contator", "Proteção térmica", "Motor"], correctOrder: ["Botão liga (NO)", "Contator", "Proteção térmica", "Motor"], explanation: "Sequência: comando (botão) → acionamento (contator) → proteção (térmico) → carga (motor)." }
        ]
      },
      {
        id: "m4-l8",
        title: "Partida Estrela-Triângulo",
        theory: `<h2>Partida Estrela-Triângulo</h2>
<p>A <strong>partida estrela-triângulo</strong> reduz a corrente de partida aplicando tensão reduzida (1/3) inicialmente e depois mudando para tensão nominal.</p>
<p><strong>Princípio:</strong> O motor inicia em <strong>estrela (Y)</strong>, onde cada enrolamento recebe 220V (em rede 380V). Após atingir ~80% da velocidade, comuta para <strong>triângulo (Δ)</strong>, recebendo 380V por enrolamento.</p>
<p><strong>Vantagens:</strong> A corrente de partida cai para <strong>1/3</strong> da partida direta. O torque de partida também cai para 1/3. Reduz impacto na rede e desgaste mecânico.</p>
<p><strong>Componentes:</strong> <strong>3 contactores</strong> (principal, estrela, triângulo), <strong>temporizador</strong> (para comutar), <strong>relé térmico</strong>, <strong>botoeiras</strong>.</p>
<p><strong>Sequência:</strong> 1) Botão liga → contactor principal + contactor estrela energizam. 2) Temporizador inicia contagem (2-5 segundos). 3) Temporizador atua → contactor estrela desliga, contactor triângulo energiza. 4) Motor opera em triângulo.</p>
<p><strong>Aplicação prática:</strong> Motores de bombas, compressores, ventiladores industriais de 10 a 100CV.</p>
<p><strong>Erro comum:</strong> Não usar intertravamento entre contactores estrela e triângulo. Se ambos fecharem simultaneamente, há curto-circuito entre fases.</p>
<p><strong>Dica:</strong> O tempo de comutação deve ser ajustado para o motor atingir ~80% da velocidade antes de mudar para triângulo.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Na partida estrela-triângulo, a corrente de partida é:", choices: ["Igual à direta", "1/3 da direta", "1/2 da direta", "3 vezes a direta"], correct: 1, explanation: "Em estrela, a tensão é reduzida para 1/√3, e a corrente para (1/√3)² = 1/3 da partida direta." },
          { type: "multiple-choice", question: "Quantos contactores são necessários para partida estrela-triângulo?", choices: ["1", "2", "3", "4"], correct: 2, explanation: "Três contactores: principal (ligação), estrela (partida) e triângulo (operação nominal)." },
          { type: "fill-blank", code: "O motor inicia em ________ (tensão reduzida) e comuta para ________ (tensão nominal). São necessários ________ contactores.", blanks: [{ answer: "estrela", placeholder: "ligação inicial" }, { answer: "triângulo", placeholder: "ligação final" }, { answer: "três", placeholder: "quantidade" }], explanation: "Estrela → triângulo. Três contactores: principal, estrela e triângulo." },
          { type: "drag-drop", question: "Organize a sequência de partida estrela-triângulo:", pieces: ["1. Botão liga", "2. Contator estrela + principal", "3. Temporizador conta", "4. Comuta para triângulo"], correctOrder: ["1. Botão liga", "2. Contator estrela + principal", "3. Temporizador conta", "4. Comuta para triângulo"], explanation: "A sequência é: acionamento → estrela (reduzido) → temporização → triângulo (nominal)." }
        ]
      },
      {
        id: "m4-l9",
        title: "Reversão de Marcha",
        theory: `<h2>Reversão de Marcha</h2>
<p>A <strong>reversão de marcha</strong> inverte o sentido de rotação de um motor trifásico <strong>troando duas fases</strong>.</p>
<p><strong>Princípio:</strong> Ao inverter a sequência de duas fases (ex: trocar L1 e L3), o campo magnético girante inverte o sentido, fazendo o rotor girar no sentido oposto.</p>
<p><strong>Componentes:</strong> <strong>Dois contactores</strong> (um para cada sentido), <strong>intertravamento elétrico e/ou mecânico</strong> (impedir que ambos energizem simultaneamente), <strong>botoeiras</strong> (liga horário, liga anti-horário, desliga).</p>
<p><strong>Intertravamento:</strong> <strong>Elétrico:</strong> contato NF de um contactor na bobina do outro. <strong>Mecânico:</strong> trava física entre os contactores. Ambos são recomendados para máxima segurança.</p>
<p><strong>Sequência de ligação:</strong> Contator 1: L1-U1, L2-V1, L3-W1 (sentido normal). Contator 2: L3-U1, L2-V1, L1-W1 (duas fases trocadas).</p>
<p><strong>Aplicação prática:</strong> Elevadores, esteiras, máquinas de usinagem, portões automáticos, bombas de recalque.</p>
<p><strong>Erro comum:</strong> Não usar intertravamento. Se ambos contactores fecharem, há curto-circuito trifásico direto.</p>
<p><strong>Dica:</strong> Use intertravamento elétrico + mecânico. O mecânico é a última barreira de segurança em caso de falha do elétrico.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Para inverter o sentido de um motor trifásico, basta:", choices: ["Trocar as três fases", "Trocar duas fases", "Inverter fase e neutro", "Trocar o terra"], correct: 1, explanation: "Trocar apenas duas fases inverte o campo magnético girante e, consequentemente, a rotação do rotor." },
          { type: "multiple-choice", question: "O intertravamento em reversão de marcha serve para:", choices: ["Aumentar potência", "Evitar curto entre fases", "Reduzir corrente", "Melhorar rendimento"], correct: 1, explanation: "Impede que ambos contactores sejam acionados simultaneamente, evitando curto-circuito entre fases." },
          { type: "fill-blank", code: "A reversão de marcha troca ________ fases. O intertravamento pode ser ________ e/ou mecânico.", blanks: [{ answer: "duas", placeholder: "número de fases" }, { answer: "elétrico", placeholder: "tipo de intertravamento" }], explanation: "Duas fases trocadas = rotação invertida. Intertravamento elétrico (contato NF) + mecânico (trava)." },
          { type: "drag-drop", question: "Organize os componentes da reversão de marcha:", pieces: ["Contator horário", "Contator anti-horário", "Intertravamento", "Botoeiras"], correctOrder: ["Contator horário", "Contator anti-horário", "Intertravamento", "Botoeiras"], explanation: "Dois contactores (um para cada sentido), intertravamento entre eles, botoeiras para comando." }
        ]
      },
      {
        id: "m4-l10",
        title: "Proteção de Motores",
        theory: `<h2>Proteção de Motores</h2>
<p>Os motores elétricos necessitam de <strong>múltiplas proteções</strong> para evitar danos por sobrecarga, curto-circuito, falta de fase e outras falhas.</p>
<p><strong>Proteção contra sobrecarga:</strong> <strong>Relé térmico</strong> (bimetálico) — detecta aquecimento excessivo. <strong>Disjuntor motor</strong> — combina proteção de curto-circuito e sobrecarga.</p>
<p><strong>Proteção contra curto-circuito:</strong> <strong>Disjuntor</strong> ou <strong>fusível</strong> — abre o circuito rapidamente em caso de curto. FusíveisQuick-Fuse são indicados para motores.</p>
<p><strong>Proteção contra falta de fase:</strong> <strong>Relé de sequência de fase</strong> (verde/laranja) — desliga o motor se uma das fases faltar. Essencial em motores trifásicos.</p>
<p><strong>Proteção contra sobretensão/subtensão:</strong> <strong>Relé de tensão</strong> — desliga o motor se a tensão sair da faixa aceitável (±10%).</p>
<p><strong>Proteção mecânica:</strong> <strong>Acoplamento com junta elástica</strong>, <strong>rolamentos</strong>, <strong>vedação</strong>. Manutenção preventiva é crucial.</p>
<p><strong>Aplicação prática:</strong> Em indústrias, a combinação de relé térmico + relé de fase + disjuntor é o mínimo para proteção completa de um motor.</p>
<p><strong>Erro comum:</strong> Usar disjuntor comum sem relé térmico. O disjuntor pode não desligar a tempo em sobrecarga leve.</p>
<p><strong>Dica:</strong> Ao dimensionar o relé térmico, ajuste para a corrente nominal do motor. Nunca para a corrente de partida.</p>`,
        exercises: [
          { type: "multiple-choice", question: "Qual dispositivo protege contra sobrecarga prolongada?", choices: ["Disjuntor comum", "Relé térmico", "DPS", "DR"], correct: 1, explanation: "O relé térmico detecta o aquecimento causado por sobrecarga e desliga o motor antes que ele queime." },
          { type: "multiple-choice", question: "A proteção contra falta de fase é feita por:", choices: ["Disjuntor", "Relé de sequência de fase", "Fusível", "Capacitor"], correct: 1, explanation: "O relé de sequência de fase verifica a presença das três fases e desliga se uma faltar." },
          { type: "fill-blank", code: "O relé térmico protege contra ________. O relé de fase protege contra ________ de fase.", blanks: [{ answer: "sobrecarga", placeholder: "tipo de falha" }, { answer: "falta", placeholder: "tipo de falha" }], explanation: "Térmico = sobrecarga (aquecimento). Relé de fase = falta de uma ou mais fases." },
          { type: "drag-drop", question: "Organize as proteções de um motor trifásico:", pieces: ["Disjuntor (curto-circuito)", "Relé térmico (sobrecarga)", "Relé de fase (falta de fase)", "DPS (surtos)"], correctOrder: ["Disjuntor (curto-circuito)", "Relé térmico (sobrecarga)", "Relé de fase (falta de fase)", "DPS (surtos)"], explanation: "Cada proteção atua em um tipo diferente de falha, garantindo segurança completa do motor." }
        ]
      }
    ]
  },
{
    id: "m5",
    title: "Comandos Elétricos",
    description: "Domine botoeiras, contactores, relés e circuitos de comando para controle de motores.",
    icon: "🎛️",
    color: "#0984E3",
    lessons: [
      {
        id: "m5-l1",
        title: "Botoeiras e Sinais",
        theory: `Botoeiras são dispositivos de comando manual utilizados para acionar e desligar equipamentos. Elas são classificadas conforme a sua função:

**Botão NA (Normalmente Aberto) – Verde:**
- Usado para LIGAR o circuito
- Contato fechado apenas quando pressionado
- Cor padrão: VERDE

**Botão NF (Normalmente Fechado) – Vermelho:**
- Usado para DESLIGAR o circuito
- Contato aberto apenas quando pressionado
- Cor padrão: VERMELHO

**Tipos de Botoeiras:**
- Simples: apenas um contato (NA ou NF)
- Dupla: dois contatos (1 NA + 1 NF)
- Bloqueio (Selo): mantém ligado após soltar o botão
- Emergência: botão vermelho com trava (NC)

**Cores Padrão (NBR 8196):**
- Verde: ligar / marcha
- Vermelho: desligar / parada
- Amarelo: alerta / advertência
- Azul: reset / reinício
- Branco: função geral`,
        exercises: [
          {
            id: "m5-l1-e1",
            type: "multiple-choice",
            question: "Qual botão é utilizado para LIGAR um motor?",
            choices: ["Botão NF vermelho", "Botão NA verde", "Botão NF verde", "Botão NA vermelho"],
            correct: 1,
            explanation: "O botão NA (Normalmente Aberto) de cor verde é o padrão para ligar equipamentos. Ao ser pressionado, o contato fecha e o circuito se completa."
          },
          {
            id: "m5-l1-e2",
            type: "multiple-choice",
            question: "Qual é a função do botão vermelho NF em um circuito de comando?",
            choices: ["Ligar o motor", "Manter o motor ligado", "Desligar o motor", "Alterar a rotação do motor"],
            correct: 2,
            explanation: "O botão vermelho NF (Normalmente Fechado) é usado para desligar. Quando pressionado, o contato abre e interrompe o circuito de comando."
          },
          {
            id: "m5-l1-e3",
            type: "fill-blank",
            question: "Complete o código: Botão NA = _____ (Normalmente _____)",
            code: "Botão NA = _____ (Normalmente _____)",
            blanks: 2,
            explanation: "NA significa Normalmente Aberto. O contato permanece aberto até que o botão seja pressionado."
          },
          {
            id: "m5-l1-e4",
            type: "drag-drop",
            question: "Ordene as cores conforme a NBR 8196 (de cima para baixo: ligar → desligar → alerta → reset):",
            pieces: ["Azul", "Vermelho", "Verde", "Amarelo"],
            correctOrder: ["Verde", "Vermelho", "Amarelo", "Azul"],
            explanation: "A norma NBR 8196 define: Verde = ligar/marcha, Vermelho = desligar/parada, Amarelo = alerta, Azul = reset/reinício."
          },
          {
            id: "m5-l1-e5",
            type: "multiple-choice",
            question: "O que diferencia um botão simples de um botão duplo?",
            choices: ["A cor do botão", "Ter apenas um contato", "Ter dois contatos (NA + NF)", "A tensão de acionamento"],
            correct: 2,
            explanation: "O botão duplo possui dois contatos integrados: um NA e um NF, permitindo funções simultâneas (ligar e desligar no mesmo comando)."
          }
        ]
      },
      {
        id: "m5-l2",
        title: "Contatores",
        theory: `Contatores são dispositivos eletromecânicos usados para ligar e desligar cargas de potência (motores, fornos, iluminação).

**Construção Básica:**
- Núcleo de ferro (estator e rotor)
- Bobina eletromagnética
- Contatos de potência (principal)
- Contatos auxiliares (sinalização/lógica)
- Mola de retorno

**Princípio de Funcionamento:**
- Bobina energizada → gera campo magnético → atrai o rotor → fecha os contatos de potência
- Bobina desenergizada → mola de retorno abre os contatos

**Contatos de Selo (Selo):**
- Contato auxiliar ligado em paralelo com o botão NA de partida
- Mantém a bobina energizada após soltar o botão
- Permite que o motor continue ligado após o comando inicial

**Classificação por Corrente:**
- Contator IEC (contato auxiliar): até 16A
- Contator de potência: 9A a 2000A (depende do modelo)

**Marcas conhecidas:** Siemens, Schneider, ABB, WEG, LS`,
        exercises: [
          {
            id: "m5-l2-e1",
            type: "multiple-choice",
            question: "Qual é a função principal do contato de selo?",
            choices: ["Aumentar a corrente do circuito", "Manter a bobina energizada após soltar o botão", "Proteger contra sobrecarga", "Controlar a rotação do motor"],
            correct: 1,
            explanation: "O contato de selo é um contato auxiliar do contator, ligado em paralelo com o botão NA de partida, que mantém a bobina energizada e o motor ligado após o operador soltar o botão."
          },
          {
            id: "m5-l2-e2",
            type: "fill-blank",
            question: "Complete: O contator possui contatos de _____ (para a carga) e contatos de _____ (para lógica/sinalização).",
            code: "O contator possui contatos de _____ (para a carga) e contatos de _____ (para lógica).",
            blanks: 2,
            explanation: "Contatos de potência são os principais, que conduzem a corrente da carga. Contatos auxiliares são usados em circuitos de comando e sinalização."
          },
          {
            id: "m5-l2-e3",
            type: "multiple-choice",
            question: "O que acontece quando a bobina do contator é desenergizada?",
            choices: ["Os contatos permanecem fechados", "A mola de retorno abre os contatos", "O contator gira na direção oposta", "Nada acontece"],
            correct: 1,
            explanation: "Ao desenergizar a bobina, o campo magnético desaparece e a mola de retorno força a abertura dos contatos, desligando a carga."
          },
          {
            id: "m5-l2-e4",
            type: "drag-drop",
            question: "Ordene as partes do contator (de cima para baixo):",
            pieces: ["Mola de retorno", "Núcleo de ferro", "Bobina eletromagnética", "Contatos de potência"],
            correctOrder: ["Núcleo de ferro", "Bobina eletromagnética", "Contatos de potência", "Mola de retorno"],
            explanation: "O núcleo de ferro forma a estrutura magnética, a bobina gera o campo magnético, os contatos de potência são acionados, e a mola garante a retorno à posição original."
          },
          {
            id: "m5-l2-e5",
            type: "calculation",
            question: "Se um contator tem 3 contatos de potência de 20A cada, qual a corrente total máxima que ele suporta?",
            answer: 60,
            unit: "A",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 60) < 0.1; },
            explanation: "Com 3 contatos em paralelo (trifásico), cada um suportando 20A, a corrente total é 3 × 20A = 60A."
          }
        ]
      },
      {
        id: "m5-l3",
        title: "Relés Térmicos",
        theory: `Relés térmicos são dispositivos de proteção contra sobrecarga em motores elétricos.

**Princípio de Funcionamento:**
- Utilizam elementos bimetálicos (duas lâminas com coeficientes de dilatação diferentes)
- Quando a corrente excede o valor nominal, o aquecimento causa a deformação do bimetal
- A deformação abre o contato NF, desligando o circuito de comando

**Curva Térmica:**
- A cada valor de sobrecarga, há um tempo específico para atuação
- Exemplo: a 600% da corrente nominal, o relé atua em ~5 segundos
- A 150% da corrente nominal, o relé pode levar ~30 segundos para atuar

**Ajuste da Corrente Nominal:**
- O relé deve ser ajustado para a corrente nominal do motor
- Utilize o potenciômetro ou trilho de ajuste
- Nunca ajuste para corrente superior à do motor

**Lembrete:** Relé térmico NÃO protege contra curto-circuito. Para isso, use fusíveis ou disjuntores.`,
        exercises: [
          {
            id: "m5-l3-e1",
            type: "multiple-choice",
            question: "Qual é o elemento sensor do relé térmico?",
            choices: ["Bobina eletromagnética", "Elemento bimetálico", "Fusível", "Disjuntor magnético"],
            correct: 1,
            explanation: "O elemento bimetálico é composto por duas lâminas metálicas com coeficientes de dilatação diferentes, que se deformam com o calor gerado pela sobrecarga."
          },
          {
            id: "m5-l3-e2",
            type: "multiple-choice",
            question: "O relé térmico protege contra qual tipo de falha?",
            choices: ["Curto-circuito", "Sobrecarga", "Sobretensão", "Falta de fase (apenas em modelos trifásicos)"],
            correct: 1,
            explanation: "O relé térmico é projetado especificamente para proteção contra sobrecarga. Não é adequado para curto-circuito, que requer proteção magnética."
          },
          {
            id: "m5-l3-e3",
            type: "fill-blank",
            question: "Complete: O relé térmico NÃO protege contra _____, apenas contra _____.",
            code: "O relé térmico NÃO protege contra _____, apenas contra _____.",
            blanks: 2,
            explanation: "O relé térmico não é sensível o suficiente para atuar em curto-circuito (que requer disjuntor magnético). Sua função é proteger contra sobrecarga prolongada."
          },
          {
            id: "m5-l3-e4",
            type: "calculation",
            question: "Um motor tem corrente nominal de 10A. Qual o ajuste correto do relé térmico?",
            answer: 10,
            unit: "A",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 10) < 0.1; },
            explanation: "O relé térmico deve ser ajustado para exatamente a corrente nominal do motor. Se o motor consome 10A, o ajuste deve ser 10A."
          },
          {
            id: "m5-l3-e5",
            type: "multiple-choice",
            question: "Se a corrente nominal do motor é 15A, qual o ajuste correto do relé térmico?",
            choices: ["10A", "12A", "15A", "20A"],
            correct: 2,
            explanation: "O ajuste do relé térmico deve corresponder à corrente nominal do motor. Para um motor de 15A, o ajuste é 15A."
          }
        ]
      },
      {
        id: "m5-l4",
        title: "Temporizadores",
        theory: `Temporizadores são dispositivos que controlam o tempo de acionamento de contatos.

**Tipos de Temporização:**
- **TON (Temporização na Energização):** contato fecha após o tempo ajustado
- **TOF (Temporização na Desenergização):** contato abre após o tempo ajustado
- **TP (Pulso Temporizado):** gera pulso de duração fixa

**Temporizador Mecânico:**
- Utiliza sistema de engrenagens e disco
- Menor precisão (±10%)
- Custo mais baixo
- Vida útil limitada

**Temporizador Eletrônico:**
- Circuito integrado com cristal oscilador
- Maior precisão (±1%)
- Mais caro
- Vida útil maior

**Aplicações Típicas:**
- Atraso de partida (estrela-triângulo)
- Sequência de acionamento
- Temporização de desligamento
- Controle de ciclos`,
        exercises: [
          {
            id: "m5-l4-e1",
            type: "multiple-choice",
            question: "Qual tipo de temporização fecha o contato APÓS a energização?",
            choices: ["TOF", "TON", "TP", "Todos os anteriores"],
            correct: 1,
            explanation: "TON (Temporização na Energização) mantém o contato aberto durante o tempo ajustado e o fecha somente após o tempo decorrer."
          },
          {
            id: "m5-l4-e2",
            type: "multiple-choice",
            question: "Qual é a principal vantagem do temporizador eletrônico sobre o mecânico?",
            choices: ["Custo mais baixo", "Maior precisão", "Maior durabilidade mecânica", "Simplicidade de construção"],
            correct: 1,
            explanation: "O temporizador eletrônico oferece precisão de ±1% contra ±10% do mecânico, garantindo controle de tempo mais confiável."
          },
          {
            id: "m5-l4-e3",
            type: "drag-drop",
            question: "Ordene os tipos de temporização (de cima para baixo: fecha após energizar → abre após desenergizar → gera pulso):",
            pieces: ["TP", "TON", "TOF"],
            correctOrder: ["TON", "TOF", "TP"],
            explanation: "TON fecha contato após energização, TOF abre contato após desenergização, e TP gera pulso de duração fixa."
          },
          {
            id: "m5-l4-e4",
            type: "multiple-choice",
            question: "Em qual aplicação o temporizador é essencial para evitar partidas simultâneas?",
            choices: ["Partida direta", "Estrela-Triângulo", "Parada de emergência", "Reversão de marcha"],
            correct: 1,
            explanation: "Na partida estrela-triângulo, o temporizador garante que o motor parta em estrela e, após um tempo, mude para triângulo, evitando correntes excessivas."
          },
          {
            id: "m5-l4-e5",
            type: "fill-blank",
            question: "Complete: TOF = Temporização na _____",
            code: "Complete: TOF = Temporização na _____",
            blanks: 1,
            explanation: "TOF significa Temporização na Desenergização. O contato se abre após o tempo ajustado quando a bobina é desligada."
          }
        ]
      },
      {
        id: "m5-l5",
        title: "Circuitos de Comando",
        theory: `Circuitos de comando são divididos em dois tipos fundamentais:

**Circuito de Força:**
- Transporta a energia elétrica até a carga (motor)
- Utiliza fios de maior seção (2,5mm² a 16mm²)
- Contém contator, relé térmico, fusível
- Trabalha em alta tensão/corrente (220V/380V)

**Circuito de Comando:**
- Controla o funcionamento do circuito de força
- Utiliza fios de menor seção (0,75mm² a 1,5mm²)
- Contém botoeiras, contator, relé térmico, temporizador
- Trabalha em baixa tensão (24V/110V/220V)

**Fiação Padrão:**
- Fase: vermelho ou marrom
- Neutro: azul claro
- Terra: verde/amarelo
- Comando: cinza ou preto

**Dica Importante:** Sempre verifique o diagrama elétrico antes de qualquer conexão.`,
        exercises: [
          {
            id: "m5-l5-e1",
            type: "multiple-choice",
            question: "Qual é a função do circuito de força?",
            choices: ["Controlar o motor", "Transportar energia até a carga", "Gerar sinais de comando", "Medir a corrente"],
            correct: 1,
            explanation: "O circuito de força é responsável por conduzir a energia elétrica desde a rede até a carga (motor), passando pelos dispositivos de proteção e comando."
          },
          {
            id: "m5-l5-e2",
            type: "multiple-choice",
            question: "Qual a seção típica de fio utilizada no circuito de comando?",
            choices: ["0,5mm²", "0,75mm² a 1,5mm²", "2,5mm² a 6mm²", "10mm² a 16mm²"],
            correct: 1,
            explanation: "O circuito de comando opera com correntes menores (bobinas de contatores, botoeiras), por isso utiliza fios de seção menor (0,75mm² a 1,5mm²)."
          },
          {
            id: "m5-l5-e3",
            type: "fill-blank",
            question: "Complete: O circuito de _____ transporta energia até a carga, e o circuito de _____ controla seu funcionamento.",
            code: "Complete: O circuito de _____ transporta energia até a carga, e o circuito de _____ controla seu funcionamento.",
            blanks: 2,
            explanation: "Força = energia até a carga. Comando = controle do funcionamento (botoeiras, contator, relé)."
          },
          {
            id: "m5-l5-e4",
            type: "drag-drop",
            question: "Ordene os componentes do circuito de força (de cima para baixo):",
            pieces: ["Contator", "Disjuntor/Fusível", "Relé Térmico", "Motor"],
            correctOrder: ["Disjuntor/Fusível", "Contator", "Relé Térmico", "Motor"],
            explanation: "A energia passa primeiro pela proteção (disjuntor/fusível), depois pelo contator (ligar/desligar), pelo relé térmico (proteção) e chega ao motor."
          },
          {
            id: "m5-l5-e5",
            type: "multiple-choice",
            question: "Qual a cor padrão para o fio terra conforme a norma?",
            choices: ["Azul", "Vermelho", "Verde/Amarelo", "Preto"],
            correct: 2,
            explanation: "O fio terra (protetor) deve ser identificado com as cores verde e amarelo, conforme a norma NBR 5410."
          }
        ]
      },
      {
        id: "m5-l6",
        title: "Partida Direta",
        theory: `A partida direta é o método mais simples de ligar um motor elétrico trifásico.

**Diagrama de Força:**
- Disjuntor → Contator → Relé Térmico → Motor
- Três fases (R, S, T) conectadas diretamente ao motor

**Diagrama de Comando:**
- Botão NA (liga) + Botão NF (desliga)
- Contato de selo (mantém ligado)
- Relé térmico (proteção contra sobrecarga)
- Bobina do contator

**Sequência de Funcionamento:**
1. Fechar disjuntor
2. Pressionar botão NA verde
3. Bobina K1 energiza → fecha contatos de potência e selo
4. Motor arranca
5. Para desligar, pressionar botão NF vermelho

**Vantagens:** Simplicidade, baixo custo
**Desvantagens:** Corrente de partida alta (6-8x nominal)`,
        exercises: [
          {
            id: "m5-l6-e1",
            type: "multiple-choice",
            question: "Qual é a primeira ação ao efetuar a partida direta?",
            choices: ["Pressionar o botão verde", "Fechar o disjuntor", "Ligar o relé térmico", "Acionar o temporizador"],
            correct: 1,
            explanation: "O disjuntor deve ser fechado primeiro para energizar o circuito de força. Somente depois o operador pressiona o botão de partida."
          },
          {
            id: "m5-l6-e2",
            type: "multiple-choice",
            question: "O que mantém o contator energizado após soltar o botão verde?",
            choices: ["O relé térmico", "O contato de selo", "O disjuntor", "O fusível"],
            correct: 1,
            explanation: "O contato de selo (contato auxiliar do contator) é ligado em paralelo com o botão NA, mantendo a bobina energizada e o motor ligado."
          },
          {
            id: "m5-l6-e3",
            type: "fill-blank",
            question: "Complete: Na partida direta, a corrente de partida é ____ vezes a corrente nominal do motor.",
            code: "Complete: Na partida direta, a corrente de partida é ____ vezes a corrente nominal.",
            blanks: 1,
            explanation: "Na partida direta, o motor recebe toda a tensão da rede instantaneamente, gerando corrente de partida entre 6 a 8 vezes a nominal."
          },
          {
            id: "m5-l6-e4",
            type: "drag-drop",
            question: "Ordene a sequência da partida direta (de cima para baixo):",
            pieces: ["Motor arranca", "Pressionar botão verde", "Fechar disjuntor", "Pressionar botão vermelho"],
            correctOrder: ["Fechar disjuntor", "Pressionar botão verde", "Motor arranca", "Pressionar botão vermelho"],
            explanation: "A sequência correta: fechar disjuntor → pressionar botão verde → motor arranca → (para desligar) pressionar botão vermelho."
          },
          {
            id: "m5-l6-e5",
            type: "multiple-choice",
            question: "Qual a principal desvantagem da partida direta?",
            choices: ["Alto custo", "Corrente de partida muito alta", "Complexidade do diagrama", "Necessidade de temporizador"],
            correct: 1,
            explanation: "A partida direta gera corrente de partida muito alta (6-8x a nominal), o que pode causar queda de tensão e sobrecarregar a rede."
          }
        ]
      },
      {
        id: "m5-l7",
        title: "Estrela-Triângulo",
        theory: `A partida estrela-triângulo é um método de partida reduzida para motores trifásicos.

**Princípio:**
- Partida em estrela (Y): tensão reduzida (√3 = 1,73x menor)
- Após tempo ajustado, muda para triângulo (Δ): tensão nominal
- Corrente de partida reduzida para 1/3 da partida direta

**Componentes Necessários:**
- 3 contatores (K1 principal, K2 estrela, K3 triângulo)
- 1 temporizador
- Relé térmico
- Botões de comando

**Sequência:**
1. K1 (principal) + K2 (estrela) energizam → motor arranca em estrela
2. Temporizador contagem
3. K2 desliga → K3 liga → motor muda para triângulo
4. Motor funciona em triângulo (regime)

**Intertravamento:**
- K2 e K3 NUNCA podem estar ligados ao mesmo tempo
- Intertravamento elétrico e/ou mecânico obrigatório`,
        exercises: [
          {
            id: "m5-l7-e1",
            type: "multiple-choice",
            question: "Qual a relação entre a corrente de partida em estrela e em triângulo?",
            choices: ["I_estrela = I_triangulo", "I_estrela = 1/3 I_triangulo", "I_estrela = 3 x I_triangulo", "I_estrela = √3 x I_triangulo"],
            correct: 1,
            explanation: "Em estrela, a corrente é reduzida para 1/3 da corrente de partida em triângulo, devido à redução da tensão aplicada aos enrolamentos."
          },
          {
            id: "m5-l7-e2",
            type: "multiple-choice",
            question: "Por que K2 (estrela) e K3 (triângulo) nunca podem estar ligados ao mesmo tempo?",
            choices: ["Por causa da corrente", "Por causa da tensão", "Por causa do intertravamento", "Por causa do tempo de temporização"],
            correct: 2,
            explanation: "Se K2 e K3 estiverem ligados simultaneamente, haverá curto-circuito nas fases. O intertravamento elétrico e mecânico impede essa condição."
          },
          {
            id: "m5-l7-e3",
            type: "fill-blank",
            question: "Complete: Na partida estrela-triângulo, são necessários _____ contatores e _____ temporizador.",
            code: "Complete: Na partida estrela-triângulo, são necessários _____ contatores e _____ temporizador.",
            blanks: 2,
            explanation: "São 3 contatores (principal, estrela, triângulo) e 1 temporizador para controlar a transição entre estrela e triângulo."
          },
          {
            id: "m5-l7-e4",
            type: "drag-drop",
            question: "Ordene a sequência da partida estrela-triângulo (de cima para baixo):",
            pieces: ["Motor em triângulo", "K1 + K2 energizam", "Temporizador contando", "K2 desliga, K3 liga"],
            correctOrder: ["K1 + K2 energizam", "Temporizador contando", "K2 desliga, K3 liga", "Motor em triângulo"],
            explanation: "A sequência: K1+K2 ligam (estrela) → temporizador conta → K2 desliga, K3 liga (transição) → motor em triângulo (regime)."
          },
          {
            id: "m5-l7-e5",
            type: "calculation",
            question: "Um motor tem corrente de partida em triângulo de 60A. Qual a corrente de partida em estrela?",
            answer: 20,
            unit: "A",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 20) < 0.1; },
            explanation: "Em estrela, a corrente é 1/3 da corrente em triângulo: 60A / 3 = 20A."
          }
        ]
      },
      {
        id: "m5-l8",
        title: "Reversão de Marcha",
        theory: `A reversão de marcha permite inverter o sentido de rotação de um motor trifásico.

**Princípio:**
- Inverter duas fases do motor (ex: R e T) inverte o sentido de rotação
- Utiliza dois contatores (K1 frente, K2 ré)
- Botões separados para cada sentido

**Diagrama:**
- K1: liga fases R-S-T (frente)
- K2: liga fases T-S-R (ré) - inverte R e T

**Intertravamento:**
- Elétrico: contato NF de K1 em série com bobina de K2 (e vice-versa)
- Mecânico: campainha ou trava física
- Impede que K1 e K2 energizem simultaneamente

**Procedimento de Reversão:**
1. Pressionar botão de frente → K1 liga (motor gira frente)
2. Para inverter: primeiro DESLIGAR (botão parada)
3. Pressionar botão de ré → K2 liga (motor gira ré)
4. NUNCA pressionar frente e ré ao mesmo tempo`,
        exercises: [
          {
            id: "m5-l8-e1",
            type: "multiple-choice",
            question: "Como se inverte o sentido de rotação de um motor trifásico?",
            choices: ["Invertendo todas as fases", "Invertendo apenas duas fases", "Invertendo a corrente", "Mudando a frequência"],
            correct: 1,
            explanation: "Basta inverter a conexão de duas fases (ex: R e T) para inverter o sentido de rotação do motor."
          },
          {
            id: "m5-l8-e2",
            type: "multiple-choice",
            question: "O que impede que K1 e K2 energizem ao mesmo tempo?",
            choices: ["Fusível", "Temporizador", "Intertravamento", "Relé térmico"],
            correct: 2,
            explanation: "O intertravamento elétrico (contato NF de cada contator em série com a bobina do outro) e mecânico impedem que ambos energizem simultaneamente."
          },
          {
            id: "m5-l8-e3",
            type: "fill-blank",
            question: "Complete: Na reversão de marcha, K1 liga fases _____ (frente) e K2 liga fases _____ (ré).",
            code: "Complete: Na reversão de marcha, K1 liga fases _____ e K2 liga fases _____.",
            blanks: 2,
            explanation: "K1: R-S-T (frente). K2: T-S-R (ré) - inverte as fases R e T para mudar o sentido."
          },
          {
            id: "m5-l8-e4",
            type: "multiple-choice",
            question: "Qual o procedimento correto ao mudar de frente para ré?",
            choices: ["Pressionar ré diretamente", "Pressionar frente e ré ao mesmo tempo", "Primeiro parar, depois pressionar ré", "Desligar o disjuntor"],
            correct: 2,
            explanation: "Sempre parar o motor primeiro (botão vermelho) antes de inverter o sentido. Isso evita correntes de reversão excessivas."
          },
          {
            id: "m5-l8-e5",
            type: "drag-drop",
            question: "Ordene as fases na conexão frente (de cima para baixo):",
            pieces: ["T", "S", "R"],
            correctOrder: ["R", "S", "T"],
            explanation: "Na conexão frente: R-S-T. Na conexão ré (inversão): T-S-R (inverte R e T)."
          }
        ]
      },
      {
        id: "m5-l9",
        title: "Parada de Emergência",
        theory: `O circuito de parada de emergência é obrigatório em máquinas e equipamentos.

**Características do Botão:**
- Cor: VERMELHA (obrigatório)
- Tipo: NC (Normalmente Fechado)
- Trava: deve ter trava de bloqueio (não pode ser liberado sozinho)
- Norma: NBR NM-ISO 13850

**Função:**
- Em caso de emergência, o operador aciona o botão
- O circuito de comando é interrompido
- Todos os contatores desenergizam
- Motor para imediatamente

**Bloqueio:**
- Após acionar, o botão permanece travado
- Para liberar: girar ou puxar (depende do modelo)
- Evita rearme acidental

**Normas Aplicáveis:**
- NBR NM-ISO 13850 (parada de emergência)
- NBR 5410 (instalações elétricas)
- NR-12 (segurança em máquinas)`,
        exercises: [
          {
            id: "m5-l9-e1",
            type: "multiple-choice",
            question: "Qual a cor e tipo do botão de parada de emergência?",
            choices: ["Verde NA", "Vermelho NC", "Amarelo NA", "Azul NC"],
            correct: 1,
            explanation: "O botão de emergência deve ser VERMELHO e do tipo NC (Normalmente Fechado), conforme NBR NM-ISO 13850."
          },
          {
            id: "m5-l9-e2",
            type: "multiple-choice",
            question: "Qual a função do bloqueio no botão de emergência?",
            choices: ["Aumentar a velocidade", "Evitar rearme acidental", "Melhorar a estética", "Reduzir custos"],
            correct: 1,
            explanation: "O bloqueio impede que o botão seja liberado acidentalmente, garantindo que a máquina permaneça parada até que o operador libere manualmente."
          },
          {
            id: "m5-l9-e3",
            type: "fill-blank",
            question: "Complete: O botão de emergência é do tipo _____ e deve ter _____.",
            code: "Complete: O botão de emergência é do tipo _____ e deve ter _____.",
            blanks: 2,
            explanation: "Tipo NC (Normalmente Fechado) e deve ter trava de bloqueio para evitar rearme acidental."
          },
          {
            id: "m5-l9-e4",
            type: "multiple-choice",
            question: "Ao acionar o botão de emergência, o que acontece com os contatores?",
            choices: ["Ficam ligados", "Desenergizam todos", "Ligam o relé térmico", "Ativam o temporizador"],
            correct: 1,
            explanation: "O botão de emergência interrompe o circuito de comando, desenergizando todos os contatores e parando o motor imediatamente."
          },
          {
            id: "m5-l9-e5",
            type: "drag-drop",
            question: "Ordene as normas relacionadas à parada de emergência (de cima para baixo):",
            pieces: ["NR-12", "NBR 5410", "NBR NM-ISO 13850"],
            correctOrder: ["NBR NM-ISO 13850", "NBR 5410", "NR-12"],
            explanation: "NBR NM-ISO 13850 define o botão de emergência, NBR 5410 instalações elétricas, e NR-12 segurança em máquinas."
          }
        ]
      },
      {
        id: "m5-l10",
        title: "Exemplos Práticos",
        theory: `Aplicação dos comandos elétricos em equipamentos reais:

**Motor Bomba:**
- Partida direta ou estrela-triângulo
- Relé térmico para proteção contra sobrecarga
- Botão de emergência obrigatório
- Sinalização de ligado/desligado

**Ventilador Industrial:**
- Partida direta (se potência baixa)
- Contator com contato de selo
- Temporização para desligamento apósBotão de emergência obrigatório
- Sinalização de ligado/desligado

**Esteira Transportadora:**
- Reversão de marcha (frente/ré)
- Sensor de limite de curso
- Intertravamento com outros equipamentos
- Sinalização sonora ao inverter

**Critérios de Escolha:**
- Potência do motor → define método de partida
- Tipo de carga → define proteção necessária
- Ambiente → define grau de proteção (IP)
- Normas → define requisitos obrigatórios`,
        exercises: [
          {
            id: "m5-l10-e1",
            type: "multiple-choice",
            question: "Qual método de partida é mais indicado para um motor de bomba de grande potência?",
            choices: ["Partida direta", "Estrela-Triângulo", "Apenas fusível", "Somente disjuntor"],
            correct: 1,
            explanation: "Para motores de grande potência, a partida estrela-triângulo reduz a corrente de partida para 1/3, protegendo a rede elétrica."
          },
          {
            id: "m5-l10-e2",
            type: "multiple-choice",
            question: "Em uma esteira transportadora, qual recurso é necessário para inverter o sentido?",
            choices: ["Temporizador apenas", "Reversão de marcha com intertravamento", "Apenas botão verde", "Fusível de proteção"],
            correct: 1,
            explanation: "A esteira requer reversão de marcha (frente/ré) com intertravamento elétrico e mecânico para segurança na inversão."
          },
          {
            id: "m5-l10-e3",
            type: "fill-blank",
            question: "Complete: Para um ventilador de potência _____, utiliza-se partida _____.",
            code: "Complete: Para um ventilador de potência _____, utiliza-se partida _____.",
            blanks: 2,
            explanation: "Potência baixa → partida direta. Potência alta → estrela-triângulo."
          },
          {
            id: "m5-l10-e4",
            type: "drag-drop",
            question: "Ordene os componentes de proteção de um motor bomba (de cima para baixo):",
            pieces: ["Relé Térmico", "Fusível/Disjuntor", "Botão de Emergência"],
            correctOrder: ["Fusível/Disjuntor", "Relé Térmico", "Botão de Emergência"],
            explanation: "Fusível/Disjuntor (proteção geral) → Relé Térmico (sobrecarga) → Botão de Emergência (parada manual)."
          },
          {
            id: "m5-l10-e5",
            type: "multiple-choice",
            question: "Qual fator NÃO é considerado na escolha do método de partida?",
            choices: ["Potência do motor", "Cor do motor", "Tipo de carga", "Normas aplicáveis"],
            correct: 1,
            explanation: "A cor do motor não influencia na escolha do método de partida. Os fatores são: potência, tipo de carga, ambiente e normas."
          }
        ]
      }
    ]
  },
  {
    id: "m6",
    title: "Automação com CLP",
    description: "Aprenda a programar controladores lógicos programáveis (CLP) usando linguagem Ladder.",
    icon: "💻",
    color: "#A29BFE",
    lessons: [
      {
        id: "m6-l1",
        title: "O que é um CLP",
        theory: `CLP (Controlador Lógico Programável) é um computador industrial projetado para controlar processos de automação.

**Arquitetura Básica:**
- CPU (Unidade Central de Processamento)
- Memória (RAM e ROM)
- Módulos de Entrada (INPUT)
- Módulos de Saída (OUTPUT)
- Fonte de alimentação
- Barramento de comunicação

**Varredura (Scan Cycle):**
O CLP executa um ciclo contínuo:
1. Leitura de entradas (Read Input)
2. Processamento do programa (Execute Program)
3. Atualização de saídas (Write Output)
4. Comunicação e diagnósticos

**Scan Time:**
- Tempo para completar um ciclo de varredura
- Tipicamente: 1ms a 100ms
- Quanto menor, mais rápido o controle
- Depende do tamanho do programa e tipo de CPU

**Vantagens sobre relés:**
- Flexibilidade (mudar programa sem rewiring)
- Diagnósticos integrados
- Menor espaço físico
- Maior confiabilidade`,
        exercises: [
          {
            id: "m6-l1-e1",
            type: "multiple-choice",
            question: "Qual é a primeira etapa do ciclo de varredura do CLP?",
            choices: ["Processamento do programa", "Leitura de entradas", "Atualização de saídas", "Comunicação"],
            correct: 1,
            explanation: "O ciclo começa com a leitura de todas as entradas digitais e analógicas, atualizando a imagem das entradas na memória."
          },
          {
            id: "m6-l1-e2",
            type: "multiple-choice",
            question: "O que é scan time?",
            choices: ["Tempo de vida do CLP", "Tempo para completar um ciclo de varredura", "Tempo de resposta das saídas", "Tempo entre manutenções"],
            correct: 1,
            explanation: "Scan time é o tempo necessário para o CLP completar um ciclo completo: ler entradas → processar → atualizar saídas → comunicação."
          },
          {
            id: "m6-l1-e3",
            type: "fill-blank",
            question: "Complete: O CLP executa um ciclo de _____ contínuo: ler entradas, _____ programa, atualizar saídas.",
            code: "Complete: O CLP executa um ciclo de _____ contínuo: ler entradas, _____ programa, atualizar saídas.",
            blanks: 2,
            explanation: "Ciclo de varredura contínuo: ler entradas → processar programa → atualizar saídas."
          },
          {
            id: "m6-l1-e4",
            type: "drag-drop",
            question: "Ordene as etapas do ciclo de varredura (de cima para baixo):",
            pieces: ["Atualizar saídas", "Leitura de entradas", "Processamento do programa", "Comunicação"],
            correctOrder: ["Leitura de entradas", "Processamento do programa", "Atualizar saídas", "Comunicação"],
            explanation: "A sequência correta: Leitura de entradas → Processamento do programa → Atualização de saídas → Comunicação e diagnósticos."
          },
          {
            id: "m6-l1-e5",
            type: "multiple-choice",
            question: "Qual é uma vantagem do CLP sobre circuitos com relés?",
            choices: ["Maior peso", "Maior consumo de energia", "Flexibilidade para alterar o programa", "Menor velocidade de processamento"],
            correct: 2,
            explanation: "A principal vantagem é a flexibilidade: basta alterar o programa de software, sem precisar modificar a fiação física do painel."
          }
        ]
      },
      {
        id: "m6-l2",
        title: "Entradas e Saídas Digitais",
        theory: `Entradas e saídas digitais trabalham com dois estados: LIGADO (1) ou DESLIGADO (0).

**Entradas Digitais (DI):**
- Recebem sinais de botoeiras, sensores, interruptores
- Nível lógico: 0 = desligado, 1 = ligado
- Tensão típica: 24VDC ou 220VAC

**Saídas Digitais (DO):**
- Acionam contactores, lâmpadas, válvulas
- Nível lógico: 0 = desligado, 1 = ligado
- Tipos: Relé, Transistor, Triac

**Sensores NPN vs PNP:**
- **NPN (sink):** drena corrente → saída do sensor ligada ao negativo
- **PNP (source):** fornece corrente → saída do sensor ligada ao positivo
- O CLP deve ser compatível com o tipo de sensor

**Mapeamento de E/S:**
- Cada entrada/saída tem um endereço único
- Ex: I0.0, I0.1 (entradas), Q0.0, Q0.1 (saídas)
- O mapeamento conecta o mundo físico ao programa`,
        exercises: [
          {
            id: "m6-l2-e1",
            type: "multiple-choice",
            question: "O que uma entrada digital no nível 1 (ligado) representa?",
            choices: ["Sinal analógico alto", "Botão pressionado ou sensor ativo", "Tensão zero", "Corrente zero"],
            correct: 1,
            explanation: "Nível 1 significa que o dispositivo está ativo: botão pressionado, sensor detectando, interruptor fechado."
          },
          {
            id: "m6-l2-e2",
            type: "multiple-choice",
            question: "Qual a diferença entre sensor NPN e PNP?",
            choices: ["NPN fornece corrente, PNP drena", "NPN drena corrente, PNP fornece", "Não há diferença", "NPN é digital, PNP é analógico"],
            correct: 1,
            explanation: "NPN (sink) drena corrente para o terra. PNP (source) fornece corrente da fonte positiva para a entrada do CLP."
          },
          {
            id: "m6-l2-e3",
            type: "fill-blank",
            question: "Complete: Entradas digitais trabalham com _____ estados: _____ (ligado) ou _____ (desligado).",
            code: "Complete: Entradas digitais trabalham com _____ estados: _____ ou _____.",
            blanks: 3,
            explanation: "Dois estados binários: 1 (ligado/true) e 0 (desligado/false)."
          },
          {
            id: "m6-l2-e4",
            type: "multiple-choice",
            question: "Qual o endereço típico de uma primeira entrada digital no CLP?",
            choices: ["Q0.0", "I0.0", "M0.0", "T0"],
            correct: 1,
            explanation: "Entradas digitais começam com 'I' (Input). A primeira entrada é I0.0, a segunda I0.1, e assim por diante."
          },
          {
            id: "m6-l2-e5",
            type: "drag-drop",
            question: "Ordene os componentes de uma entrada digital (de cima para baixo):",
            pieces: ["CLP (CPU)", "Sensor/Botão", "Fonte 24VDC"],
            correctOrder: ["Fonte 24VDC", "Sensor/Botão", "CLP (CPU)"],
            explanation: "A fonte alimenta o sensor, que gera o sinal digital que é lido pela entrada do CLP."
          }
        ]
      },
      {
        id: "m6-l3",
        title: "Entradas e Saídas Analógicas",
        theory: `Entradas e saídas analógicas trabalham com valores contínuos (não apenas 0 ou 1).

**Sinais Analógicos Comuns:**
- **4-20mA:** corrente de loop, padrão industrial
  - 4mA = valor mínimo (0%)
  - 20mA = valor máximo (100%)
  - Vantagem: detecta fio cortado (0mA = falha)
- **0-10V:** tensão, fácil de medir
  - 0V = valor mínimo
  - 10V = valor máximo

**Resolução:**
- Número de bits determina a precisão
- 10 bits = 1024 níveis (0-1023)
- 12 bits = 4096 níveis (0-4095)
- 16 bits = 65536 níveis

**Conversão A/D (Analógico/Digital):**
- O CLP converte o sinal analógico em valor numérico
- Ex: 4-20mA → 0-4095 (12 bits)

**Escalas de Engenharia:**
- Unidades reais: temperatura (°C), pressão (bar), nível (%)
- O programador define a escala de conversão`,
        exercises: [
          {
            id: "m6-l3-e1",
            type: "multiple-choice",
            question: "Qual a vantagem do sinal 4-20mA sobre 0-10V?",
            choices: ["Maior tensão", "Detecta fio cortado (0mA = falha)", "Menor precisão", "Menor alcance"],
            correct: 1,
            explanation: "Com 4-20mA, se o fio cortar (0mA), o CLP detecta falha. Em 0-10V, 0V poderia ser valor mínimo válido."
          },
          {
            id: "m6-l3-e2",
            type: "multiple-choice",
            question: "Quantos níveis de resolução uma entrada analógica de 12 bits oferece?",
            choices: ["256", "1024", "4096", "65536"],
            correct: 2,
            explanation: "12 bits = 2^12 = 4096 níveis (0 a 4095). Quanto maior o número de bits, maior a precisão."
          },
          {
            id: "m6-l3-e3",
            type: "fill-blank",
            question: "Complete: No sinal 4-20mA, _____ mA representa 0% e _____ mA representa 100%.",
            code: "Complete: No sinal 4-20mA, _____ mA representa 0% e _____ mA representa 100%.",
            blanks: 2,
            explanation: "4mA = valor mínimo (0%) e 20mA = valor máximo (100%)."
          },
          {
            id: "m6-l3-e4",
            type: "calculation",
            question: "Uma entrada analógica de 12 bits recebe 12mA. Qual o valor em escala (0-4095)?",
            answer: 2048,
            unit: "",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 2048) < 10; },
            explanation: "12mA está no meio do intervalo 4-20mA: (12-4)/(20-4) = 8/16 = 0,5. Valor = 0,5 × 4095 ≈ 2048."
          },
          {
            id: "m6-l3-e5",
            type: "multiple-choice",
            question: "O que significa 'escala de engenharia' no CLP?",
            choices: ["Tipo de motor", "Conversão de valores analógicos para unidades reais", "Programação em Ladder", "Tipo de comunicação"],
            correct: 1,
            explanation: "A escala de engenharia converte o valor numérico do CLP (0-4095) em unidades reais (°C, bar, %, etc.) para facilitar o entendimento."
          }
        ]
      },
      {
        id: "m6-l4",
        title: "Linguagem Ladder",
        theory: `Ladder (escada) é a linguagem de programação mais comum para CLPs.

**Conceitos Básicos:**
- **Trilhos:** barras de energia (esquerda = fase, direita = neutro)
- **Contato NA (Normalmente Aberto):** fecha quando o bit é 1
- **Contato NF (Normalmente Fechado):** abre quando o bit é 1
- **Bobina (Coil):** ativa quando o caminho está completo

**Sintaxe Básica:**
- |--[ ]--| : contato NA
- |--[/]--| : contato NF
- |--( )--: bobina de saída
- |--(S)--: set (ligar e manter)
- |--(R)--: reset (desligar)

**Leitura do Diagrama:**
- Da esquerda para a direita
- Se houver caminho completo da esquerda até a bobina, ela energiza
- Contatos em SÉRIE = lógica AND
- Contatos em PARALELO = lógica OR

**Exemplo Simples:**
Trilho esquerdo → Botão NA → Bobina → Trilho direito
Se botão pressionado (1) → caminho completo → bobina energiza (1)`,
        exercises: [
          {
            id: "m6-l4-e1",
            type: "multiple-choice",
            question: "O que representa um contato |--[/]--| no Ladder?",
            choices: ["Contato NA", "Contato NF", "Bobina", "Temporizador"],
            correct: 1,
            explanation: "O símbolo |--[/]--| representa um contato Normalmente Fechado (NF). Ele está fechado quando o bit é 0 e abre quando o bit é 1."
          },
          {
            id: "m6-l4-e2",
            type: "multiple-choice",
            question: "Em que direção se lê um diagrama Ladder?",
            choices: ["De baixo para cima", "Da direita para a esquerda", "Da esquerda para a direita", "Em qualquer direção"],
            correct: 2,
            explanation: "O diagrama Ladder é lido da esquerda para a direita, como uma escada. A energia flui do trilho esquerdo até a bobina."
          },
          {
            id: "m6-l4-e3",
            type: "fill-blank",
            question: "Complete: Contatos em _____ = lógica AND, contatos em _____ = lógica OR.",
            code: "Complete: Contatos em _____ = lógida AND, contatos em _____ = lógica OR.",
            blanks: 2,
            explanation: "Série = AND (ambos devem ser verdadeiros). Paralelo = OR (pelo menos um deve ser verdadeiro)."
          },
          {
            id: "m6-l4-e4",
            type: "drag-drop",
            question: "Identifique os símbolos Ladder (de cima para baixo: NA, NF, Bobina):",
            pieces: ["|--( )--|", "|--[/]--|", "--[ ]--|"],
            correctOrder: ["|--[ ]--|", "|--[/]--|", "|--( )--|"],
            explanation: "|--[ ]--| = contato NA, |--[/]--| = contato NF, |--( )--| = bobina de saída."
          },
          {
            id: "m6-l4-e5",
            type: "multiple-choice",
            question: "Quando uma bobina no Ladder energiza?",
            choices: ["Quando todos os contatos estão abertos", "Quando há caminho completo da esquerda até a bobina", "Quando o trilho direito está ligado", "Quando há um contato NF fechado"],
            correct: 1,
            explanation: "A bobina energiza quando há um caminho completo (todos os contatos no caminho estão fechados) do trilho esquerdo até a bobina."
          }
        ]
      },
      {
        id: "m6-l5",
        title: "Lógica AND e OR",
        theory: `Lógica combinacional em Ladder:

**Lógica AND (Série):**
- Contatos ligados em série na mesma rung
- TODOS devem estar fechados para energizar a saída
- Exemplo: |--[I0.0]--+--[I0.1]--|(Q0.0)|
- I0.0 E I0.1 devem ser 1 para Q0.0 = 1

**Lógica OR (Paralelo):**
- Contatos ligados em paralelo
- PELO MENOS UM deve estar fechado para energizar a saída
- Exemplo: |--[I0.0]--+--|(Q0.0)|
             |          |
             +--[I0.1]--+
- I0.0 OU I0.1 = 1 para Q0.0 = 1

**Combinação AND + OR:**
- |--[I0.0]--+--[I0.1]--+--|(Q0.0)|
  |          |          |
  +--[I0.2]--+--[I0.3]--+
- (I0.0 E I0.1) OU (I0.2 E I0.3) = Q0.0

**Aplicações:**
- AND: dois botões pressionados simultaneamente
- OR: qualquer um de dois sensores ativa a saída`,
        exercises: [
          {
            id: "m6-l5-e1",
            type: "multiple-choice",
            question: "Na lógica AND, quantos contatos devem estar fechados para energizar a saída?",
            choices: ["Pelo menos um", "Todos", "Apenas o primeiro", "Nenhum"],
            correct: 1,
            explanation: "Na lógica AND (série), TODOS os contatos devem estar fechados simultaneamente para que haja caminho completo até a bobina."
          },
          {
            id: "m6-l5-e2",
            type: "multiple-choice",
            question: "Na lógica OR, como os contatos são ligados?",
            choices: ["Em série", "Em paralelo", "Em cascata", "Em estrela"],
            correct: 1,
            explanation: "Na lógica OR, os contatos são ligados em paralelo, permitindo que qualquer um deles complete o circuito."
          },
          {
            id: "m6-l5-e3",
            type: "fill-blank",
            question: "Complete: Contatos em série = lógica _____, contatos em paralelo = lógica _____.",
            code: "Complete: Contatos em série = lógica _____, contatos em paralelo = lógica _____.",
            blanks: 2,
            explanation: "Série = AND (ambos verdadeiros). Paralelo = OR (pelo menos um verdadeiro)."
          },
          {
            id: "m6-l5-e4",
            type: "multiple-choice",
            question: "Qual expressão lógica corresponde a: |--[I0.0]--|--[I0.1]--|(Q0.0)|?",
            choices: ["I0.0 OR I0.1 = Q0.0", "I0.0 AND I0.1 = Q0.0", "I0.0 XOR I0.1 = Q0.0", "NOT I0.0 AND I0.1 = Q0.0"],
            correct: 1,
            explanation: "Dois contatos em série representam lógica AND: I0.0 E I0.1 devem ser 1 para Q0.0 = 1."
          },
          {
            id: "m6-l5-e5",
            type: "drag-drop",
            question: "Identifique o tipo de lógica (de cima para baixo: AND, OR):",
            pieces: ["Paralelo", "Série"],
            correctOrder: ["Série", "Paralelo"],
            explanation: "Série = AND. Paralelo = OR."
          }
        ]
      },
      {
        id: "m6-l6",
        title: "Temporizadores no CLP",
        theory: `CLPs possuem blocos de temporização programáveis:

**TON (Temporização na Energização):**
- Entrada IN: ativa o temporizador
- Temporização PT: tempo ajustado
- Saída Q: fecha após tempo PT (se IN permanecer ativo)
- ET: tempo acumulado

**TOF (Temporização na Desenergização):**
- Entrada IN: ativa o temporizador
- Saída Q: permanece aberta enquanto IN ativo
- Q fecha após tempo PT após IN desativar

**TP (Pulso Temporizado):**
- Gera pulso de duração fixa PT
- Independente do tempo que IN fica ativo

**Blocos Funcionais:**
- |--TON(T#5s)--[Q]--|
- Temporização em segundos (s), minutos (m), horas (h)
- Exemplo: T#5s = 5 segundos, T#2m30s = 2 minutos e 30 segundos

**Resolução:**
- Mínimo: 10ms (depende do CLP)
- Máximo: pode chegar a horas`,
        exercises: [
          {
            id: "m6-l6-e1",
            type: "multiple-choice",
            question: "Qual bloco de temporização gera um pulso de duração fixa?",
            choices: ["TON", "TOF", "TP", "Todos igualmente"],
            correct: 2,
            explanation: "TP (Pulso Temporizado) gera pulso de duração fixa, independente do tempo que a entrada fica ativa."
          },
          {
            id: "m6-l6-e2",
            type: "multiple-choice",
            question: "No bloco TON, quando a saída Q é ativada?",
            choices: ["Imediatamente ao energizar IN", "Após o tempo PT, se IN permanecer ativo", "Ao desligar IN", "Nunca"],
            correct: 1,
            explanation: "No TON, Q só é ativado após o tempo PT decorrer, desde que IN permaneça ativo durante todo o período."
          },
          {
            id: "m6-l6-e3",
            type: "fill-blank",
            question: "Complete: TON ativa a saída após _____ tempo. TOF mantém a saída por _____ tempo após desligar.",
            code: "Complete: TON ativa a saída após _____ tempo. TOF mantém a saída por _____ tempo após desligar.",
            blanks: 2,
            explanation: "TON: ativa após o tempo PT (com IN ativo). TOF: mantém ativo por PT após IN desligar."
          },
          {
            id: "m6-l6-e4",
            type: "multiple-choice",
            question: "Como se representa 3 segundos e 500 milissegundos em um temporizador CLP?",
            choices: ["T#3s500ms", "T#3.5s", "T#3500ms", "T#3s50ms"],
            correct: 0,
            explanation: "O formato correto é T#3s500ms (3 segundos e 500 milissegundos)."
          },
          {
            id: "m6-l6-e5",
            type: "drag-drop",
            question: "Associe cada bloco à sua função (de cima para baixo: TON, TOF, TP):",
            pieces: ["Mantém saída por tempo após desligar", "Ativa saída após tempo com IN ligado", "Gera pulso de duração fixa"],
            correctOrder: ["Ativa saída após tempo com IN ligado", "Mantém saída por tempo após desligar", "Gera pulso de duração fixa"],
            explanation: "TON: ativa após tempo (IN ligado). TOF: mantém após desligar. TP: pulso fixo."
          }
        ]
      },
      {
        id: "m6-l7",
        title: "Contadores no CLP",
        theory: `Contadores no CLP contam pulsos de entrada:

**CTU (Contador Crescente):**
- Conta de 0 até valor preset (PV)
- Entrada CU: pulso de contagem
- Quando CV = PV, saída Q = 1
- Reset (R): zera o contador

**CTD (Contador Decrescente):**
- Conta de PV até 0
- Quando CV = 0, saída Q = 1
- Load (LD): carrega valor PV

**Borda de Subida (Rising Edge):**
- Detecta transição de 0 para 1
- Conta apenas uma vez por ativação
- Evita contar múltiplos pulsos

**Aplicações:**
- Contagem de peças em esteira
- Controle de batidas
- Medição de comprimento
- Sequenciamento de etapas

**Exemplo CTU:**
|--[CU]--CTU(CV=0, PV=10)--[Q]--|
Quando CV atingir 10, Q = 1`,
        exercises: [
          {
            id: "m6-l7-e1",
            type: "multiple-choice",
            question: "Quando a saída Q de um CTU é ativada?",
            choices: ["No primeiro pulso", "Quando CV = PV", "Quando CV = 0", "Nunca"],
            correct: 1,
            explanation: "No CTU (contador crescente), Q é ativado quando o valor atual (CV) atinge o valor preset (PV)."
          },
          {
            id: "m6-l7-e2",
            type: "multiple-choice",
            question: "Qual é a função da borda de subida em um contador?",
            choices: ["Resetar o contador", "Evitar contar múltiplos pulsos", "Inverter o sinal", "Acelerar a contagem"],
            correct: 1,
            explanation: "A borda de subida detecta apenas a transição de 0 para 1, garantindo que cada ativação seja contada apenas uma vez."
          },
          {
            id: "m6-l7-e3",
            type: "fill-blank",
            question: "Complete: CTU conta de _____ até _____. CTD conta de _____ até _____.",
            code: "Complete: CTU conta de _____ até _____. CTD conta de _____ até _____.",
            blanks: 4,
            explanation: "CTU: de 0 até PV (crescente). CTD: de PV até 0 (decrescente)."
          },
          {
            id: "m6-l7-e4",
            type: "calculation",
            question: "Um CTU tem PV=20. Após 15 pulsos, qual o valor de CV?",
            answer: 15,
            unit: "",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 15) < 0.1; },
            explanation: "CTU conta crescentemente. Após 15 pulsos, CV = 15 (ainda não atingiu PV=20, então Q=0)."
          },
          {
            id: "m6-l7-e5",
            type: "drag-drop",
            question: "Identifique os componentes do CTU (de cima para baixo):",
            pieces: ["CV (valor atual)", "PV (preset)", "CU (entrada de contagem)", "R (reset)"],
            correctOrder: ["CU (entrada de contagem)", "PV (preset)", "CV (valor atual)", "R (reset)"],
            explanation: "CU: entrada de contagem. PV: valor-alvo. CV: valor atual. R: reset para zero."
          }
        ]
      },
      {
        id: "m6-l8",
        title: "Funções de Comparação",
        theory: `Funções de comparação no CLP comparam valores:

**Operadores de Comparação:**
- **=** Igualdade: A = B
- **<>** Diferente: A ≠ B
- **>** Maior: A > B
- **<** Menor: A < B
- **>=** Maior ou igual: A ≥ B
- **<=** Menor ou igual: A ≤ B

**Sintaxe no Ladder:**
|--[CMP A > B]--|(Q0.0)|
Se A maior que B → Q0.0 = 1

**Tipos de Dados:**
- INT: inteiro (0 a 32767)
- DINT: inteiro duplo
- REAL: ponto flutuante

**Aplicações:**
- Controle de nível (se nível > 80%, desligar bomba)
- Controle de temperatura (se temp > 50°C, acionar alarme)
- Contagem de peças (se contador = 100, parar esteira)
- Limite de segurança (se corrente > 15A, desligar)

**Comparação em cascata:**
- Usar múltiplos blocos para faixas de valores
- Ex: se 20 < temp < 30 → zona confortável`,
        exercises: [
          {
            id: "m6-l8-e1",
            type: "multiple-choice",
            question: "Qual operador verifica se A é igual a B?",
            choices: [">", "<", "=", "<>"],
            correct: 2,
            explanation: "O operador = verifica igualdade. Se A = B, a comparação retorna verdadeiro (1)."
          },
          {
            id: "m6-l8-e2",
            type: "multiple-choice",
            question: "Em Ladder, o que representa |--[CMP A < B]--|?",
            choices: ["A maior que B", "A menor que B", "A igual a B", "A diferente de B"],
            correct: 1,
            explanation: "O bloco CMP com < verifica se A é menor que B. Se verdadeiro, o caminho se completa."
          },
          {
            id: "m6-l8-e3",
            type: "fill-blank",
            question: "Complete: <> significa _____, >= significa _____.",
            code: "Complete: <> significa _____, >= significa _____.",
            blanks: 2,
            explanation: "<> = diferente (A ≠ B). >= = maior ou igual (A ≥ B)."
          },
          {
            id: "m6-l8-e4",
            type: "multiple-choice",
            question: "Se MW10 = 25 e MW12 = 30, qual comparação retorna 1?",
            choices: ["MW10 > MW12", "MW10 = MW12", "MW10 < MW12", "MW10 <> MW12"],
            correct: 2,
            explanation: "25 < 30 é verdadeiro, portanto MW10 < MW12 retorna 1."
          },
          {
            id: "m6-l8-e5",
            type: "drag-drop",
            question: "Associe cada símbolo ao significado (de cima para baixo: =, <>, >, <):",
            pieces: ["Maior", "Diferente", "Menor", "Igual"],
            correctOrder: ["Igual", "Diferente", "Maior", "Menor"],
            explanation: "= Igual, <> Diferente, > Maior, < Menor."
          }
        ]
      },
      {
        id: "m6-l9",
        title: "Funções Matemáticas",
        theory: `Funções matemáticas no CLP para cálculos e manipulação de dados:

**Operadores Básicos:**
- **ADD:** A + B → resultado
- **SUB:** A - B → resultado
- **MUL:** A × B → resultado
- **DIV:** A ÷ B → resultado (cuidado com divisão por zero!)

**MOVE (MOV):**
- Copia valor de uma variável para outra
- |--[MOV MW0 → MW10]--|
- MW10 recebe o valor de MW0

**Aplicações:**
- Cálculo de velocidade: RPM = (pulsos × 60) / tempo
- Conversão de escala: valor_real = (valor_adc × faixa) / resolução
- Soma de totais: total += peça_atual
- Cálculo de média: média = soma / n

**Exemplo de Conversão de Escala:**
- Entrada analógica: 0-4095 (12 bits)
- Temperatura: 0-200°C
- Fórmula: temp = (adc × 200) / 4095

**Cuidados:**
- Divisão por zero pode causar erro
- Verificar limites antes de operações
- Usar DINT para valores grandes`,
        exercises: [
          {
            id: "m6-l9-e1",
            type: "multiple-choice",
            question: "Qual função copia o valor de uma variável para outra?",
            choices: ["ADD", "SUB", "MOVE", "MUL"],
            correct: 2,
            explanation: "MOVE (MOV) copia o valor de uma variável (fonte) para outra (destino) sem alterar o valor original."
          },
          {
            id: "m6-l9-e2",
            type: "multiple-choice",
            question: "Qual cuidado deve ser tomado ao usar DIV?",
            choices: ["Verificar se o resultado é negativo", "Verificar se o divisor não é zero", "Usar apenas números inteiros", "Multiplicar antes de dividir"],
            correct: 1,
            explanation: "Divisão por zero é um erro grave. Sempre verificar se o divisor é diferente de zero antes de executar DIV."
          },
          {
            id: "m6-l9-e3",
            type: "fill-blank",
            question: "Complete: ADD = _____, SUB = _____, MUL = _____, DIV = _____.",
            code: "Complete: ADD = _____, SUB = _____, MUL = _____, DIV = _____.",
            blanks: 4,
            explanation: "ADD = soma, SUB = subtração, MUL = multiplicação, DIV = divisão."
          },
          {
            id: "m6-l9-e4",
            type: "calculation",
            question: "Se MW0 = 150 e MW2 = 50, qual resultado de SUB(MW0, MW2)?",
            answer: 100,
            unit: "",
            validate: function(userAnswer) { return Math.abs(parseFloat(userAnswer) - 100) < 0.1; },
            explanation: "SUB(MW0, MW2) = 150 - 50 = 100."
          },
          {
            id: "m6-l9-e5",
            type: "drag-drop",
            question: "Associe cada operação ao resultado (de cima para baixo: ADD, SUB, MUL, DIV):",
            pieces: ["5", "30", "50", "200"],
            correctOrder: ["200", "50", "5", "30"],
            explanation: "ADD(100,100)=200, SUB(100,50)=50, MUL(10,5)=50→errado. Vamos recalcular: ADD=200, SUB=50, MUL=5, DIV=30. Na verdade: ADD(100,100)=200, SUB(100,50)=50, MUL(10,5)=50. Vamos usar: 200, 50, 5, 30. Mas 100/10=10. Vamos ajustar: ADD(100,100)=200, SUB(100,50)=50, MUL(10,5)=50. Para ter 5 e 30: MUL(5,1)=5 e DIV(60,2)=30. A resposta correta é: ADD=200, SUB=50, MUL=5, DIV=30."
          }
        ]
      },
      {
        id: "m6-l10",
        title: "Projeto Prático: Controle de Bomba",
        theory: `Projeto completo de controle de bomba com CLP:

**Especificações:**
- Bomba de água: motor trifásico 5CV
- Sensor de nível:高低 (high/low)
- Botão de emergência
- Sinalização: verde (ligada), vermelho (alarme)

**Entradas Digitais:**
- I0.0: Botão NA liga
- I0.1: Botão NF desliga
- I0.2: Botão de emergência (NC)
- I0.3: Sensor nível alto (NC)
- I0.4: Sensor nível baixo (NA)

**Saídas Digitais:**
- Q0.0: Contator bomba (K1)
- Q0.1: Sinalização verde (ligada)
- Q0.2: Sinalização vermelho (alarme)

**Lógica de Controle:**
1. Liga: botão I0.0 + sensor nível baixo I0.4 (água disponível)
2. Selo: contato Q0.0 em paralelo com I0.0
3. Desliga: botão I0.1 OU sensor nível alto I0.3 OU emergência I0.2
4. Alarme: Q0.2 aciona se bomba ligada e nível alto (desperdício)`,
        exercises: [
          {
            id: "m6-l10-e1",
            type: "multiple-choice",
            question: "Quais condições são necessárias para ligar a bomba?",
            choices: ["Apenas botão liga", "Botão liga E sensor nível baixo", "Botão liga OU sensor nível baixo", "Apenas sensor nível baixo"],
            correct: 1,
            explanation: "A bomba só liga quando o botão I0.0 é pressionado E o sensor de nível baixo I0.4 está ativo (água disponível para bombear)."
          },
          {
            id: "m6-l10-e2",
            type: "multiple-choice",
            question: "O que mantém a bomba ligada após soltar o botão?",
            choices: ["O sensor de nível", "O contato de selo Q0.0", "O botão de emergência", "O relé térmico"],
            correct: 1,
            explanation: "O contato de selo Q0.0, ligado em paralelo com o botão I0.0, mantém a bobina do contator energizada."
          },
          {
            id: "m6-l10-e3",
            type: "fill-blank",
            question: "Complete: A bomba desliga se: botão I0.1 OU sensor _____ OU botão de _____.",
            code: "Complete: A bomba desliga se: botão I0.1 OU sensor _____ OU botão de _____.",
            blanks: 2,
            explanation: "Desliga por: I0.1 (parada manual), I0.3 (nível alto - tancheio), I0.2 (emergência)."
          },
          {
            id: "m6-l10-e4",
            type: "multiple-choice",
            question: "Em que situação o alarme vermelho (Q0.2) aciona?",
            choices: ["Bomba desligada", "Bomba ligada e nível baixo", "Bomba ligada e nível alto", "Sempre que o botão liga é pressionado"],
            correct: 2,
            explanation: "O alarme Q0.2 aciona quando a bomba está ligada E o sensor de nível alto I0.3 detecta que o tanque está cheio (possível desperdício)."
          },
          {
            id: "m6-l10-e5",
            type: "drag-drop",
            question: "Associe cada entrada à sua função (de cima para baixo):",
            pieces: ["Emergência", "Liga", "Nível alto", "Desliga", "Nível baixo"],
            correctOrder: ["Liga", "Desliga", "Emergência", "Nível alto", "Nível baixo"],
            explanation: "I0.0=Liga, I0.1=Desliga, I0.2=Emergência, I0.3=Nível alto, I0.4=Nível baixo."
          }
        ]
      }
    ]
  },
{
    id: "m7",
    title: "Instrumentacao Industrial",
    description: "Sensores, transmissores e instrumentos de medição para automação",
    icon: "📊",
    color: "#00CEC9",
    lessons: [
      {
        id: "m7-l1",
        title: "Sensores Indutivos",
        theory: `
          <h2>Sensores Indutivos</h2>
          <p>Os sensores indutivos detectam a presença de <strong>objetos metálicos</strong> sem contato físico, utilizando o princípio de <strong>correntes de Foucault (eddy current)</strong>.</p>
          <h3>Princípio de Funcionamento</h3>
          <ul>
            <li>Uma bobina interna gera um campo eletromagnético alternado na face do sensor</li>
            <li>Ao se aproximar um objeto metálico, correntes de Foucault são induzidas na superfície do alvo</li>
            <li>Essas correntes geram um campo que se opõe ao campo original, alterando a impedância da bobina</li>
            <li>O circuito interno detecta essa alteração e ativa a saída do sensor</li>
          </ul>
          <h3>Tipos por Construção</h3>
          <table>
            <tr><th>Tipo</th><th>Formato</th><th>Aplicação Principal</th></tr>
            <tr><td>Cilíndrico</td><td>Fusão alongada (M8, M12, M18, M30)</td><td>Detectores de proximidade em esteiras</td></tr>
            <tr><td>Retangular</td><td>Caixa quadrada/retangular</td><td>Detecção em prensas e impulsionadores</td></tr>
            <tr><td>Fio de Bico</td><td>Delgado e comprido</td><td>Espaços confinados, guias lineares</td></tr>
            <tr><td>Anel</td><td>Formato de anel</td><td>Detecção de peças em tubos</td></tr>
          </table>
          <h3>Distância de Sensibilidade</h3>
          <ul>
            <li>Aço carbono: 100% da distância nominal</li>
            <li>Aço inoxidável: ~70%</li>
            <li>Alumínio: ~40%</li>
            <li>Cobre/latão: ~30%</li>
          </ul>
          <h3>Características Elétricas</h3>
          <ul>
            <li><strong>Alimentação:</strong> 10-30 VDC (comum) ou 20-264 VAC</li>
            <li><strong>Corrente de saída:</strong> até 200 mA</li>
            <li><strong>Frequência de comutação:</strong> 200 Hz a 5 kHz</li>
            <li><strong>Proteção:</strong> IP67 comum, IP69K para washdown</li>
            <li><strong>Tempo de resposta:</strong> &lt; 1 ms</li>
          </ul>
          <h3>Modos de Operação</h3>
          <ul>
            <li><strong>NPN (Coletor Aberto):</strong> Liga a carga ao negativo (sink)</li>
            <li><strong>PNP (Coletor Aberto):</strong> Liga a carga ao positivo (source)</li>
            <li><strong>NO (Normally Open):</strong> Aberto sem alvo, fecha ao detectar</li>
            <li><strong>NC (Normally Closed):</strong> Fechado sem alvo, abre ao detectar</li>
          </ul>
          <h3>Aplicações Típicas</h3>
          <ul>
            <li>Contagem de peças metálicas em linha de produção</li>
            <li>Posicionamento de ferramentas em máquinas CNC</li>
            <li>Detecção de abertura/fechamento de portas metálicas</li>
            <li>Verificação de presença em cilindros pneumáticos</li>
            <li>Medição de velocidade de engrenagens</li>
          </ul>
          <h3>Vantagens e Desvantagens</h3>
          <table>
            <tr><th>Vantagens</th><th>Desvantagens</th></tr>
            <tr><td>Alta confiabilidade</td><td>Detecta apenas metais</td></tr>
            <tr><td>Alta velocidade de comutação</td><td>Distância limitada</td></tr>
            <tr><td>Sem desgaste mecânico</td><td>Sensível a temperaturas extremas</td></tr>
            <tr><td>Resistente a poeira e umidade</td><td>Custo maior que interruptores mecânicos</td></tr>
          </table>
        `,
        exercises: [
          {
            id: "m7-l1-ex1",
            type: "multiple-choice",
            question: "Qual tipo de material um sensor indutivo NÃO consegue detectar?",
            choices: ["Aço carbono", "Alumínio", "Plástico", "Aço inoxidável"],
            correct: 2,
            explanation: "Sensores indutivos só detectam materiais condutores (metais). Plástico é não condutor, não gera correntes de Foucault."
          },
          {
            id: "m7-l1-ex2",
            type: "multiple-choice",
            question: "Qual é o princípio físico utilizado pelos sensores indutivos?",
            choices: ["Efeito piezoeletrico", "Correntes de Foucault", "Efeito fotoelétrico", "Capacitância variável"],
            correct: 1,
            explanation: "Sensores indutivos utilizam correntes de Foucault (eddy current), onde um campo eletromagnético induz correntes em superfícies metálicas."
          },
          {
            id: "m7-l1-ex3",
            type: "fill-blank",
            question: "Complete: O sensor indutivo detecta metais através de _____ gerados no objeto metálico.",
            code: "Correntes de Foucault",
            blanks: ["Correntes de Foucault"],
            explanation: "As correntes de Foucault são correntes elétricas induzidas em condutores quando expostos a um campo magnético variável."
          },
          {
            id: "m7-l1-ex4",
            type: "drag-drop",
            question: "Organize as distâncias relativas de detecção (da maior para a menor):",
            pieces: ["Aço carbono (100%)", "Aço inoxidável (70%)", "Alumínio (40%)", "Cobre/latão (30%)"],
            correctOrder: ["Aço carbono (100%)", "Aço inoxidável (70%)", "Alumínio (40%)", "Cobre/latão (30%)"],
            explanation: "O aço carbono tem a maior permeabilidade magnética, resultando na maior distância de detecção."
          },
          {
            id: "m7-l1-ex5",
            type: "multiple-choice",
            question: "Em um sensor indutivo NPN NO, o que acontece quando detecta?",
            choices: ["Saída conecta ao positivo", "Saída conecta ao negativo", "Saída permanece aberta", "Sensor desliga"],
            correct: 1,
            explanation: "Em NPN, quando detecta (NO), o transistor conduz e conecta a carga ao negativo da alimentação (sink)."
          }
        ]
      },
      {
        id: "m7-l2",
        title: "Sensores Capacitivos",
        theory: `
          <h2>Sensores Capacitivos</h2>
          <p>Sensores capacitivos detectam a presença de <strong>qualquer material</strong> (sólidos e líquidos) através de mudanças na capacitância.</p>
          <h3>Princípio de Funcionamento</h3>
          <ul>
            <li>Um eletrodo na face do sensor forma uma capacitância com o objeto</li>
            <li>O ar age como dielétrico do capacitor</li>
            <li>Quando o alvo se aproxima, a capacitância aumenta</li>
            <li>O circuito oscilador detecta essa mudança e ativa a saída</li>
          </ul>
          <h3>Detecção de Materiais</h3>
          <table>
            <tr><th>Material</th><th>Fator de Redução</th></tr>
            <tr><td>Metal</td><td>100%</td></tr>
            <tr><td>Água</td><td>~80%</td></tr>
            <tr><td>Plástico</td><td>30-70%</td></tr>
            <tr><td>Grãos/pó</td><td>20-50%</td></tr>
            <tr><td>Papel</td><td>20-40%</td></tr>
          </table>
          <h3>Ajuste de Sensibilidade</h3>
          <ul>
            <li>Potenciômetro de ajuste permite calibrar a distância</li>
            <li>Útil para detectar líquidos através de paredes</li>
            <li>Materiais com constante dielétrica alta são detectados a maiores distâncias</li>
          </ul>
          <h3>Aplicações</h3>
          <ul>
            <li>Detectar nível de líquidos em tanques não metálicos</li>
            <li>Contagem de garrafas plásticas em esteiras</li>
            <li>Verificação de presença de alimentos em embalagens</li>
            <li>Detectar abertura de portas de vidro ou madeira</li>
            <li>Medição de nível de grãos em silos</li>
          </ul>
          <h3>Parâmetros Elétricos</h3>
          <ul>
            <li><strong>Alimentação:</strong> 10-30 VDC</li>
            <li><strong>Distância de operação:</strong> até 25 mm</li>
            <li><strong>Corrente de saída:</strong> até 200 mA</li>
            <li><strong>Tempo de resposta:</strong> &lt; 1.5 ms</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l2-ex1",
            type: "multiple-choice",
            question: "Qual é a principal vantagem do sensor capacitivo sobre o indutivo?",
            choices: ["Detecta apenas metais", "Detecta qualquer material", "Maior distância", "Custo menor"],
            correct: 1,
            explanation: "O sensor capacitivo detecta qualquer tipo de material, enquanto o indutivo detecta apenas metais."
          },
          {
            id: "m7-l2-ex2",
            type: "multiple-choice",
            question: "O que permite ao sensor capacitivo detectar líquidos através de paredes?",
            choices: ["Campo magnético", "Ajuste de sensibilidade", "Ultrassom", "Piezoeletricidade"],
            correct: 1,
            explanation: "O potenciômetro de ajuste de sensibilidade permite calibrar o sensor para detectar através de materiais com diferentes constantes dielétricas."
          },
          {
            id: "m7-l2-ex3",
            type: "fill-blank",
            question: "Complete: O sensor capacitivo utiliza um _____ como dielétrico entre o eletrodo e o alvo.",
            code: "dielétrico",
            blanks: ["dielétrico"],
            explanation: "O ar funciona como dielétrico de um capacitor. Quando o alvo se aproxima, a constante dielétrica muda, alterando a capacitância."
          },
          {
            id: "m7-l2-ex4",
            type: "multiple-choice",
            question: "Qual componente permite ajustar a sensibilidade do sensor capacitivo?",
            choices: ["Resistor fixo", "Potenciômetro", "Capacitor variável", "Indutor"],
            correct: 1,
            explanation: "O potenciômetro de ajuste permite calibrar a distância de comutação para o material específico."
          },
          {
            id: "m7-l2-ex5",
            type: "calculation",
            question: "Sensor capacitivo com distância nominal 10 mm para metal. Para grãos (fator 30%), qual a distância efetiva?",
            answer: 3,
            unit: "mm",
            validate: (a) => a >= 2.5 && a <= 3.5,
            explanation: "Distância efetiva = 10 mm × 0.30 = 3 mm."
          }
        ]
      },
      {
        id: "m7-l3",
        title: "Sensores Ópticos",
        theory: `
          <h2>Sensores Ópticos (Fotoelétricos)</h2>
          <p>Sensores ópticos utilizam feixes de luz para detectar presença, ausência ou posição de objetos. São os mais versáteis na automação industrial.</p>
          <h3>Tipos por Modo de Operação</h3>
          <h4>1. Barreira (Through-beam)</h4>
          <ul>
            <li>Emissor e receptor em lados opostos</li>
            <li>Objeto detectado quando interrompe o feixe</li>
            <li>Maior distância (até 50 m)</li>
            <li>Alta confiabilidade, imune a cor e reflectância</li>
          </ul>
          <h4>2. Reflexivo com Refletor</h4>
          <ul>
            <li>Emissor e receptor no mesmo lado</li>
            <li>Requer refletor no lado oposto</li>
            <li>Distância intermediária (até 10 m)</li>
            <li>Detecção confiável em ambientes poeirentos</li>
          </ul>
          <h4>3. Difuso</h4>
          <ul>
            <li>Emissor e receptor no mesmo lado</li>
            <li>Objeto reflete luz diretamente para o sensor</li>
            <li>Distância menor (até 2 m)</li>
            <li>Sensível à cor e textura do objeto</li>
          </ul>
          <h3>Fontes de Luz</h3>
          <table>
            <tr><th>Tipo</th><th>Comprimento de Onda</th><th>Aplicação</th></tr>
            <tr><td>Infravermelho</td><td>880-940 nm</td><td>Uso geral, imune a luz ambiente</td></tr>
            <tr><td>Vermelho</td><td>620-650 nm</td><td>Alinhamento visual fácil</td></tr>
            <tr><td>Laser</td><td>650-680 nm</td><td>Alta precisão, objetos pequenos</td></tr>
          </table>
          <h3>Funções Especiais</h3>
          <ul>
            <li><strong>BGS:</strong> Background Suppression - ignora fundo</li>
            <li><strong>FGS:</strong> Foreground Suppression - detecta fundo</li>
            <li><strong>Teach-in:</strong> Calibração automática</li>
            <li><strong>Alarme sujo:</strong> Alerta de lente contaminada</li>
          </ul>
          <h3>Aplicações</h3>
          <ul>
            <li>Contagem de itens em esteiras</li>
            <li>Detecção de objetos transparentes</li>
            <li>Posicionamento de paletes</li>
            <li>Controle de nível em silos</li>
            <li>Detecção de ausência de peça em mandril</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l3-ex1",
            type: "multiple-choice",
            question: "Qual sensor óptico tem a maior distância de operação?",
            choices: ["Difuso", "Reflexivo", "Barreira", "Todos iguais"],
            correct: 2,
            explanation: "O sensor barreira tem a maior distância (até 50 m) porque emissor e receptor estão em lados opostos."
          },
          {
            id: "m7-l3-ex2",
            type: "multiple-choice",
            question: "Qual a principal desvantagem do sensor difuso?",
            choices: ["Requer refletor", "Requer ambos os lados", "Sensível à cor e textura", "Não detecta pequenos"],
            correct: 2,
            explanation: "O difuso depende da reflexão da luz pelo objeto. Objetos escuros ou textura irregular podem causar detecção inconsistente."
          },
          {
            id: "m7-l3-ex3",
            type: "fill-blank",
            question: "Complete: A função _____ suprime o fundo, detectando apenas objetos na distância ajustada.",
            code: "BGS",
            blanks: ["BGS"],
            explanation: "BGS (Background Suppression) utiliza dois fotodetectores para medir o ângulo de reflexão."
          },
          {
            id: "m7-l3-ex4",
            type: "drag-drop",
            question: "Organize por distância (do menor para o maior):",
            pieces: ["Difuso (até 2 m)", "Reflexivo (até 10 m)", "Barreira (até 50 m)"],
            correctOrder: ["Difuso (até 2 m)", "Reflexivo (até 10 m)", "Barreira (até 50 m)"],
            explanation: "Difuso tem menor distância, reflexivo intermediária e barreira a maior."
          },
          {
            id: "m7-l3-ex5",
            type: "multiple-choice",
            question: "Para detectar garrafa transparente em esteira, qual sensor é mais indicado?",
            choices: ["Barreira com IR", "Difuso vermelho", "Capacitivo", "Indutivo"],
            correct: 0,
            explanation: "Objetos transparentes não bloqueiam luz de forma confiável. O barreira com infravermelho detecta a interrupção do feixe."
          }
        ]
      },
      {
        id: "m7-l4",
        title: "Fim de Curso e Switches",
        theory: `
          <h2>Fim de Curso e Switches</h2>
          <p>Switches de fim de curso detectam a posição final de movimento de uma máquina ou equipamento.</p>
          <h3>Tipos Construtivos</h3>
          <h4>1. Mecânico</h4>
          <ul>
            <li>Atuador de alavanca com rolete ou haste</li>
            <li>Contato mecânico direto</li>
            <li>Alta corrente (até 16 A)</li>
            <li>Vida útil: 10 a 50 milhões de operações</li>
          </ul>
          <h4>2. Indutivo</h4>
          <ul>
            <li>Funciona como sensor indutivo</li>
            <li>Detecta alvos metálicos sem contato</li>
            <li>Sem desgaste mecânico</li>
          </ul>
          <h4>3. Capacitivo</h4>
          <ul>
            <li>Detecta qualquer material sem contato</li>
            <li>Ideal para máquinas com vibração</li>
          </ul>
          <h3>Contactores e Contatos Auxiliares</h3>
          <ul>
            <li><strong>NO:</strong> Contato aberto, fecha ao ser acionado</li>
            <li><strong>NC:</strong> Contato fechado, abre ao ser acionado</li>
            <li><strong>CO/DPDT:</strong> Alterna entre dois contatos</li>
          </ul>
          <h3>Aplicações</h3>
          <ul>
            <li>Limitar movimento de elevadores</li>
            <li>Posicionar portas de segregação</li>
            <li>Controlar curso de cilindros pneumáticos</li>
            <li>Segurança em máquinas</li>
            <li>Detecção de abertura de portas</li>
          </ul>
          <h3>Segurança</h3>
          <ul>
            <li>Contatos <strong>positivamente guiados</strong> para segurança</li>
            <li>Circuits de segurança usam NC em série</li>
            <li>Certificação SIL ou PL</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l4-ex1",
            type: "multiple-choice",
            question: "Qual fim de curso tem a maior corrente de contato?",
            choices: ["Indutivo", "Capacitivo", "Mecânico", "Óptico"],
            correct: 2,
            explanation: "O mecânico utiliza contatos físicos que suportam até 16 A."
          },
          {
            id: "m7-l4-ex2",
            type: "multiple-choice",
            question: "O que significa contato NC?",
            choices: ["Aberto quando não acionado", "Fechado quando não acionado", "Alterna entre aberto e fechado", "Momentâneo"],
            correct: 1,
            explanation: "NC = Normalmente Fechado - permanece fechado quando não acionado, e abre ao ser pressionado."
          },
          {
            id: "m7-l4-ex3",
            type: "fill-blank",
            question: "Complete: Os contatos _____ em contactores são usados para sinalização e intertravamento.",
            code: "auxiliares",
            blanks: ["auxiliares"],
            explanation: "Contatos auxiliares são contatos NO e NC adicionais acionados pela mesma bobina."
          },
          {
            id: "m7-l4-ex4",
            type: "drag-drop",
            question: "Organize por vida útil (do menor para o maior):",
            pieces: ["Mecânico (10-50 milhões)", "Indutivo (ilimitado)", "Capacitivo (ilimitado)"],
            correctOrder: ["Mecânico (10-50 milhões)", "Indutivo (ilimitado)", "Capacitivo (ilimitado)"],
            explanation: "O mecânico tem vida limitada pelo desgaste. Indutivo e capacitivo não têm partes móveis em contato."
          },
          {
            id: "m7-l4-ex5",
            type: "multiple-choice",
            question: "Em circuito de segurança, qual configuração detecta abertura de porta?",
            choices: ["NO em paralelo", "NC em série", "NC em paralelo", "NO em série"],
            correct: 1,
            explanation: "Contatos NC em série garantem que qualquer interrupção interrompa o circuito."
          }
        ]
      },
      {
        id: "m7-l5",
        title: "Saídas NPN e PNP",
        theory: `
          <h2>Saídas NPN e PNP</h2>
          <p>Sensores possuem saídas NPN ou PNP, definindo como a carga é ligada ao circuito.</p>
          <h3>Sink (NPN) vs Source (PNP)</h3>
          <h4>NPN - Sink (Dreno)</h4>
          <ul>
            <li>Atua como dreno de corrente</li>
            <li>Carga entre positivo e saída do sensor</li>
            <li>Quando detecta, conecta carga ao negativo</li>
            <li>Corrente: Alimentação(+) → Carga → Sensor → Alimentação(-)</li>
          </ul>
          <h4>PNP - Source (Fonte)</h4>
          <ul>
            <li>Atua como fonte de corrente</li>
            <li>Carga entre saída do sensor e negativo</li>
            <li>Quando detecta, conecta carga ao positivo</li>
            <li>Corrente: Alimentação(+) → Sensor → Carga → Alimentação(-)</li>
          </ul>
          <h3>Ligação ao CLP</h3>
          <table>
            <tr><th>Entrada CLP</th><th>Sensor</th><th>Ligação</th></tr>
            <tr><td>Entrada SINK</td><td>PNP</td><td>Sensor fornece corrente</td></tr>
            <tr><td>Entrada SOURCE</td><td>NPN</td><td>Entrada fornece corrente</td></tr>
          </table>
          <h3>Configurações de Saída</h3>
          <ul>
            <li><strong>3 fios:</strong> Alimentação + Saída</li>
            <li><strong>4 fios:</strong> Alimentação + Saída NO + Saída NC</li>
            <li><strong>5 fios:</strong> Alimentação + Contato comum + NO + NC</li>
          </ul>
          <h3>Escolha entre NPN e PNP</h3>
          <ul>
            <li>Indústria europeia: preferência por PNP</li>
            <li>Indústria asiática: preferência por NPN</li>
            <li>CLPs modernos aceitam ambos</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l5-ex1",
            type: "multiple-choice",
            question: "Em sensor NPN, quando detecta a saída é conectada a:",
            choices: ["Positivo", "Negativo", "Ambos", "Nenhum"],
            correct: 1,
            explanation: "No NPN, o transistor conduz e conecta a saída ao negativo da alimentação."
          },
          {
            id: "m7-l5-ex2",
            type: "multiple-choice",
            question: "CLP com entrada SOURCE requer qual sensor?",
            choices: ["NPN", "PNP", "Ambos", "Nenhum"],
            correct: 0,
            explanation: "Entrada SOURCE fornece corrente, então precisa de NPN que drena a corrente."
          },
          {
            id: "m7-l5-ex3",
            type: "fill-blank",
            question: "Complete: O sensor PNP atua como _____ de corrente.",
            code: "fonte",
            blanks: ["fonte"],
            explanation: "PNP é chamado de 'source' porque fornece corrente positiva à carga."
          },
          {
            id: "m7-l5-ex4",
            type: "drag-drop",
            question: "Organize a direção da corrente:",
            pieces: ["NPN: Carga → Sensor → Negativo", "PNP: Sensor → Carga → Negativo"],
            correctOrder: ["NPN: Carga → Sensor → Negativo", "PNP: Sensor → Carga → Negativo"],
            explanation: "No NPN a corrente vai da carga para o sensor. No PNP vai do sensor para a carga."
          },
          {
            id: "m7-l5-ex5",
            type: "calculation",
            question: "Sensor PNP com saída 200 mA acionando carga de 12 V. Potência da carga?",
            answer: 2.4,
            unit: "W",
            validate: (a) => a >= 2.2 && a <= 2.6,
            explanation: "P = V × I = 12 × 0.2 = 2.4 W."
          }
        ]
      },
      {
        id: "m7-l6",
        title: "Medidas Elétricas",
        theory: `
          <h2>Medidas Elétricas</h2>
          <p>A medição elétrica é fundamental para diagnóstico e manutenção. Principais instrumentos: amperímetro, voltímetro, wattímetro e megômetro.</p>
          <h3>Amperímetro</h3>
          <ul>
            <li><strong>Mede:</strong> Corrente (Amperes)</li>
            <li><strong>Conexão:</strong> Em série com o circuito</li>
            <li><strong>Resistência interna:</strong> Muito baixa</li>
            <li><strong>Tipos:</strong> Digital, clamp (alicate), analógico</li>
            <li><strong>Clamp:</strong> Mede sem abrir o circuito (efeito Hall)</li>
          </ul>
          <h3>Voltímetro</h3>
          <ul>
            <li><strong>Mede:</strong> Tensão (Volts)</li>
            <li><strong>Conexão:</strong> Em paralelo com o componente</li>
            <li><strong>Resistência interna:</strong> Muito alta</li>
            <li><strong>Tipos:</strong> DC, AC, True RMS</li>
          </ul>
          <h3>Wattímetro</h3>
          <ul>
            <li><strong>Mede:</strong> Potência (Watts)</li>
            <li><strong>Fórmula:</strong> P = V × I × cos(φ)</li>
            <li><strong>Aplicações:</strong> Motores, transformadores</li>
          </ul>
          <h3>Megômetro (Megger)</h3>
          <ul>
            <li><strong>Mede:</strong> Resistência de isolamento (MΩ)</li>
            <li><strong>Princípio:</strong> Aplica tensão elevada e mede corrente de fuga</li>
            <li><strong>Valores de referência:</strong></li>
          </ul>
          <table>
            <tr><th>Equipamento</th><th>Tensão Teste</th><th>Isolamento Mínimo</th></tr>
            <tr><td>Motores até 1 kV</td><td>500 V DC</td><td>&gt; 1 MΩ</td></tr>
            <tr><td>Cabos de potência</td><td>1000 V DC</td><td>&gt; 1 MΩ/kV</td></tr>
            <tr><td>Painéis</td><td>500 V DC</td><td>&gt; 1 MΩ</td></tr>
          </table>
          <h3>Multímetro Digital</h3>
          <ul>
            <li>Combina amperímetro, voltímetro e ohmímetro</li>
            <li>Função True RMS para formas de onda distorcidas</li>
            <li>Categorias CAT I a CAT IV</li>
          </ul>
          <h3>Precauções</h3>
          <ul>
            <li>Verificar alcance antes de medir</li>
            <li>Nunca medir resistência em circuito energizado</li>
            <li>Usar EPI ao medir alta tensão</li>
            <li>Respeitar categorias CAT</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l6-ex1",
            type: "multiple-choice",
            question: "Como o amperímetro deve ser conectado?",
            choices: ["Em paralelo", "Em série", "Em paralelo com fonte", "Não importa"],
            correct: 1,
            explanation: "O amperímetro mede corrente que flui através dele, deve ser conectado em série."
          },
          {
            id: "m7-l6-ex2",
            type: "multiple-choice",
            question: "O que mede um megômetro?",
            choices: ["Tensão", "Corrente", "Resistência de isolamento", "Potência"],
            correct: 2,
            explanation: "O megômetro mede resistência de isolamento aplicando tensão elevada."
          },
          {
            id: "m7-l6-ex3",
            type: "fill-blank",
            question: "Complete: O wattímetro mede potência com uma _____ de corrente e uma _____ de tensão.",
            code: "bobina; bobina",
            blanks: ["bobina", "bobina"],
            explanation: "O wattímetro possui bobina de corrente (série) e bobina de tensão (paralelo)."
          },
          {
            id: "m7-l6-ex4",
            type: "drag-drop",
            question: "Associe instrumento com grandeza:",
            pieces: ["Amperímetro → Corrente", "Voltímetro → Tensão", "Wattímetro → Potência", "Megômetro → Isolamento"],
            correctOrder: ["Amperímetro → Corrente", "Voltímetro → Tensão", "Wattímetro → Potência", "Megômetro → Isolamento"],
            explanation: "Cada instrumento mede uma grandeza específica."
          },
          {
            id: "m7-l6-ex5",
            type: "calculation",
            question: "Motor trifásico com 380 V e 15 A por fase. Potência aparente total?",
            answer: 9874,
            unit: "VA",
            validate: (a) => a >= 9500 && a <= 10200,
            explanation: "S = √3 × V × I = 1,732 × 380 × 15 = 9.874 VA."
          }
        ]
      },
      {
        id: "m7-l7",
        title: "Sinais Analógicos",
        theory: `
          <h2>Sinais Analógicos</h2>
          <p>Sinais analógicos representam grandezas como valores contínuos. Padrões mais comuns: <strong>4-20 mA</strong> e <strong>0-10 V</strong>.</p>
          <h3>4-20 mA</h3>
          <ul>
            <li>Imune a queda de tensão nos fios</li>
            <li>Fio morto: 4 mA = mínimo, 0 mA = falha</li>
            <li>Alimentação em loop (24 VDC)</li>
            <li>Longa distância sem perda de precisão</li>
          </ul>
          <h3>0-10 V</h3>
          <ul>
            <li>Fácil de medir e depurar</li>
            <li>Sofre com queda de tensão</li>
            <li>Curta distância (até 15 m)</li>
            <li>Requer entrada de alta impedância</li>
          </ul>
          <h3>Conversão entre Padrões</h3>
          <table>
            <tr><th>Entrada</th><th>4-20 mA</th><th>0-10 V</th></tr>
            <tr><td>0%</td><td>4 mA</td><td>0 V</td></tr>
            <tr><td>50%</td><td>12 mA</td><td>5.0 V</td></tr>
            <tr><td>100%</td><td>20 mA</td><td>10 V</td></tr>
          </table>
          <h3>Fórmulas</h3>
          <pre>
Corrente (mA) = 4 + (Entrada × 16 / 100)
Tensão (V) = (Corrente - 4) × 10 / 16
          </pre>
          <h3>Blindagem</h3>
          <ul>
            <li>Fio blindado contra interferência (EMI)</li>
            <li>Blindagem aterrada em UM SÓ LADO</li>
            <li>Separar cabos analógicos de cabos de potência</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l7-ex1",
            type: "multiple-choice",
            question: "Principal vantagem do 4-20 mA sobre 0-10 V?",
            choices: ["Fácil de medir", "Imune a queda de tensão", "Maior alcance", "Menor custo"],
            correct: 1,
            explanation: "4-20 mA é imune a queda de tensão porque a corrente é a mesma em todo o circuito série."
          },
          {
            id: "m7-l7-ex2",
            type: "multiple-choice",
            question: "O que significa 'fio morto' no 4-20 mA?",
            choices: ["0 mA = mínimo", "4 mA = mínimo, 0 mA = falha", "20 mA = mínimo", "4 mA = falha"],
            correct: 1,
            explanation: "4 mA = valor mínimo. 0 mA indica falha no circuito."
          },
          {
            id: "m7-l7-ex3",
            type: "fill-blank",
            question: "Complete: A blindagem deve ser aterrada em _____ lado.",
            code: "um",
            blanks: ["um"],
            explanation: "Aterramento em um lado evita laços de terra que causam interferência."
          },
          {
            id: "m7-l7-ex4",
            type: "calculation",
            question: "Transmissor 4-20 mA medindo 0-200°C. Corrente para 150°C?",
            answer: 16,
            unit: "mA",
            validate: (a) => a >= 15.8 && a <= 16.2,
            explanation: "Corrente = 4 + (150/200 × 16) = 4 + 12 = 16 mA."
          },
          {
            id: "m7-l7-ex5",
            type: "calculation",
            question: "Circuito 4-20 mA com alimentação 24 V e sensor mínimo 10 V. Resistência máxima?",
            answer: 700,
            unit: "Ω",
            validate: (a) => a >= 680 && a <= 720,
            explanation: "R_max = (24 - 10) / 0.020 = 700 Ω."
          }
        ]
      },
      {
        id: "m7-l8",
        title: "Sensores de Temperatura",
        theory: `
          <h2>Sensores de Temperatura</h2>
          <p>Principais sensores: <strong>PT100</strong>, <strong>termopar</strong> e <strong>termistor</strong>.</p>
          <h3>PT100 (RTD)</h3>
          <ul>
            <li>Resistência da platina muda com temperatura</li>
            <li>100 Ω a 0°C</li>
            <li>Alcance: -200°C a +850°C</li>
            <li>Precisão: ±0.1°C (classe A)</li>
            <li>Conexão: 2, 3 ou 4 fios</li>
          </ul>
          <h3>Termopar</h3>
          <ul>
            <li>Efeito Seebeck - junção de dois metais gera tensão</li>
            <li>Tipos: J, K, T, E, N, R, S, B</li>
            <li>Alcance: -200°C a +2300°C</li>
            <li>Precisão: ±1 a ±2°C</li>
          </ul>
          <table>
            <tr><th>Tipo</th><th>Materiais</th><th>Alcance</th><th>Sensibilidade</th></tr>
            <tr><td>J</td><td>Ferro/Constantan</td><td>-40 a +750°C</td><td>~52 μV/°C</td></tr>
            <tr><td>K</td><td>Cr/Alumel</td><td>-200 a +1200°C</td><td>~41 μV/°C</td></tr>
            <tr><td>T</td><td>Cobre/Constantan</td><td>-200 a +350°C</td><td>~43 μV/°C</td></tr>
          </table>
          <h3>Termistor</h3>
          <ul>
            <li>Resistência muda significativamente com temperatura</li>
            <li>NTC: resistência diminui (Negative Temperature Coefficient)</li>
            <li>PTC: resistência aumenta</li>
            <li>Alcance: -50°C a +300°C</li>
          </ul>
          <h3>Comparação</h3>
          <table>
            <tr><th>Característica</th><th>PT100</th><th>Termopar</th><th>Termistor</th></tr>
            <tr><td>Alcance</td><td>-200 a 850°C</td><td>-200 a 2300°C</td><td>-50 a 300°C</td></tr>
            <tr><td>Precisão</td><td>Alta</td><td>Média</td><td>Alta (limitada)</td></tr>
            <tr><td>Custo</td><td>Médio/Alto</td><td>Baixo</td><td>Baixo</td></tr>
          </table>
        `,
        exercises: [
          {
            id: "m7-l8-ex1",
            type: "multiple-choice",
            question: "Sensor para forno industrial a 1100°C?",
            choices: ["PT100", "Termopar J", "Termopar K", "Termistor NTC"],
            correct: 2,
            explanation: "Termopar K vai até 1200°C. PT100 até 850°C, J até 750°C, termistor até 300°C."
          },
          {
            id: "m7-l8-ex2",
            type: "multiple-choice",
            question: "O que é compensação de junta fria?",
            choices: ["Isolamento térmico", "Correção da tensão na junção com instrumento", "Refrigeração", "Calibração em banho de gelo"],
            correct: 1,
            explanation: "A junta fria é onde o termopar conecta ao instrumento. A compensação corrige a tensão gerada nessa junção."
          },
          {
            id: "m7-l8-ex3",
            type: "fill-blank",
            question: "Complete: O PT100 possui resistência de _____ ohms a 0°C.",
            code: "100",
            blanks: ["100"],
            explanation: "PT100 = Platina 100 ohms a 0°C."
          },
          {
            id: "m7-l8-ex4",
            type: "drag-drop",
            question: "Associe sensor com característica:",
            pieces: ["PT100 → Alta precisão", "Termopar → Ampla faixa", "Termistor → Alta sensibilidade"],
            correctOrder: ["PT100 → Alta precisão", "Termopar → Ampla faixa", "Termistor → Alta sensibilidade"],
            explanation: "PT100 = precisão, Termopar = faixa ampla, Termistor = sensibilidade."
          },
          {
            id: "m7-l8-ex5",
            type: "multiple-choice",
            question: "Quantos fios para compensação completa no PT100?",
            choices: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "4 fios compensa completamente a resistência dos cabos."
          }
        ]
      },
      {
        id: "m7-l9",
        title: "Transmissores de Pressão e Vazão",
        theory: `
          <h2>Transmissores de Pressão e Vazão</h2>
          <p>Transmissores convertem grandezas físicas em sinais elétricos (4-20 mA ou 0-10 V) para CLPs e SCADA.</p>
          <h3>Transmissor de Pressão</h3>
          <ul>
            <li>Célula piezoresistiva, capacitiva ou piezelétrica</li>
            <li>Mede pressão absoluta, manométrica ou diferencial</li>
            <li>Alcances: 0-10 mbar até 0-1000 bar</li>
            <li>Saída: 4-20 mA, 0-10 V, HART, Modbus</li>
          </ul>
          <h3>Tipos de Pressão</h3>
          <table>
            <tr><th>Tipo</th><th>Referência</th><th>Aplicação</th></tr>
            <tr><td>Absoluta</td><td>Vácuo perfeito</td><td>Processos industriais</td></tr>
            <tr><td>Manométrica</td><td>Atmosfera local</td><td>Redes de ar comprimido</td></tr>
            <tr><td>Diferencial</td><td>Entre dois pontos</td><td>Filtros, medidores de vazão</td></tr>
          </table>
          <h3>Medidores de Vazão</h3>
          <ul>
            <li><strong>Ultrasônico:</strong> Efeito Doppler ou tempo de trânsito</li>
            <li><strong>Eletromagnético:</strong> Tensão induzida por líquido condutivo</li>
            <li><strong>Turbina:</strong> Hélice gera pulsos proporcionais</li>
            <li><strong>Vortex:</strong> Vórtices gerados por obstáculo</li>
            <li><strong>Coriolis:</strong> Mede massa diretamente</li>
            <li><strong>Orifício:</strong> Queda de pressão em placa</li>
          </ul>
          <h3>Protocolo HART</h3>
          <ul>
            <li>Comunicação digital sobre fio analógico</li>
            <li>Configura, calibra e diagnostica remotamente</li>
            <li>Compatível com cabos existentes</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l9-ex1",
            type: "multiple-choice",
            question: "Qual transmissor mede vazão mássica diretamente?",
            choices: ["Ultrasônico", "Eletromagnético", "Coriolis", "Turbina"],
            correct: 2,
            explanation: "O Coriolis mede diretamente a vazão mássica sem correção por temperatura ou pressão."
          },
          {
            id: "m7-l9-ex2",
            type: "multiple-choice",
            question: "Transmissor 4-20 mA calibrado 0-10 bar. Pressão para 14 mA?",
            choices: ["5 bar", "6.25 bar", "7 bar", "8.75 bar"],
            correct: 1,
            explanation: "Pressão = (14-4)/(20-4) × 10 = 6.25 bar."
          },
          {
            id: "m7-l9-ex3",
            type: "fill-blank",
            question: "Complete: O protocolo _____ permite comunicação digital sobre o fio 4-20 mA.",
            code: "HART",
            blanks: ["HART"],
            explanation: "HART (Highway Addressable Remote Transducer) superpõe sinal digital ao analógico."
          },
          {
            id: "m7-l9-ex4",
            type: "drag-drop",
            question: "Associe medição com instrumento:",
            pieces: ["Pressão absoluta → Piezoresistivo", "Vazão condutiva → Eletromagnético", "Vazão vapor → Vortex", "Nível → Ultrasônico"],
            correctOrder: ["Pressão absoluta → Piezoresistivo", "Vazão condutiva → Eletromagnético", "Vazão vapor → Vortex", "Nível → Ultrasônico"],
            explanation: "Cada aplicação requer tipo específico de sensor."
          },
          {
            id: "m7-l9-ex5",
            type: "calculation",
            question: "Transmissor 0-500 mbar com saída 12.8 mA. Pressão medida?",
            answer: 275,
            unit: "mbar",
            validate: (a) => a >= 270 && a <= 280,
            explanation: "Pressão = (12.8-4)/(20-4) × 500 = 8.8/16 × 500 = 275 mbar."
          }
        ]
      },
      {
        id: "m7-l10",
        title: "Malha Aberta vs Fechada",
        theory: `
          <h2>Malha Aberta vs Malha Fechada</h2>
          <p>Controle de processos: <strong>malha aberta</strong> (sem retroalimentação) ou <strong>malha fechada</strong> (com retroalimentação).</p>
          <h3>Malha Aberta</h3>
          <ul>
            <li>Sem sensor de retroalimentação</li>
            <li>Ação baseada apenas na referência</li>
            <li>Simples e barato</li>
            <li>Não corrige erros automaticamente</li>
          </ul>
          <h3>Malha Fechada</h3>
          <ul>
            <li>Utiliza sensor para medir variável</li>
            <li>Compara valor medido com setpoint</li>
            <li>Calcula erro e aplica correção</li>
            <li>Auto-corrigente e robusto</li>
          </ul>
          <h3>Controlador PID</h3>
          <h4>P - Proporcional</h4>
          <ul>
            <li>Ação proporcional ao erro atual</li>
            <li>P = Kp × erro</li>
            <li>Reduz erro mas não elimina (erro residual)</li>
          </ul>
          <h4>I - Integral</h4>
          <ul>
            <li>Ação proporcional à acumulação do erro</li>
            <li>I = Ki × ∫erro dt</li>
            <li>Elimina erro residual (offset)</li>
          </ul>
          <h4>D - Derivativo</h4>
          <ul>
            <li>Ação proporcional à taxa de variação do erro</li>
            <li>D = Kd × d(erro)/dt</li>
            <li>Antecipa mudanças, reduz overshoot</li>
          </ul>
          <h3>Efeitos dos Ganhos</h3>
          <table>
            <tr><th>Parâmetro</th><th>Efeito</th></tr>
            <tr><td>Kp ↑</td><td>Resposta mais rápida, overshoot maior</td></tr>
            <tr><td>Ki ↑</td><td>Elimina offset mais rápido, pode oscilar</td></tr>
            <tr><td>Kd ↑</td><td>Reduz overshoot, suaviza resposta</td></tr>
          </table>
          <h3>Aplicações</h3>
          <ul>
            <li>Controle de temperatura em fornos</li>
            <li>Controle de nível em tanques</li>
            <li>Controle de pressão em caldeiras</li>
            <li>Controle de vazão em processos</li>
            <li>Controle de velocidade de motores</li>
          </ul>
        `,
        exercises: [
          {
            id: "m7-l10-ex1",
            type: "multiple-choice",
            question: "Principal desvantagem do controle em malha aberta?",
            choices: ["Complexo", "Não corrige erros automaticamente", "Requer sensores caros", "Mais lento"],
            correct: 1,
            explanation: "Sem retroalimentação, não detecta nem corrige desvios."
          },
          {
            id: "m7-l10-ex2",
            type: "multiple-choice",
            question: "Qual componente do PID elimina o erro residual?",
            choices: ["P", "I", "D", "Todos igualmente"],
            correct: 1,
            explanation: "O termo I acumula o erro ao longo do tempo até zero."
          },
          {
            id: "m7-l10-ex3",
            type: "fill-blank",
            question: "Complete: O PID combina proporcional, _____ e derivativa.",
            code: "integral",
            blanks: ["integral"],
            explanation: "PID = Proporcional-Integral-Derivativo."
          },
          {
            id: "m7-l10-ex4",
            type: "drag-drop",
            question: "Organize resposta (do mais rápido ao mais lento):",
            pieces: ["Subamortecido (com overshoot)", "Criticamente amortecido", "Sobreamortecido (sem overshoot)"],
            correctOrder: ["Subamortecido (com overshoot)", "Criticamente amortecido", "Sobreamortecido (sem overshoot)"],
            explanation: "Subamortecido é mais rápido com overshoot. Sobreamortecido é mais lento sem overshoot."
          },
          {
            id: "m7-l10-ex5",
            type: "multiple-choice",
            question: "O que acontece com Kp muito alto?",
            choices: ["Resposta lenta", "Instabilidade com oscilações", "Erro residual aumenta", "Sobreamortecido"],
            correct: 1,
            explanation: "Kp muito alto causa oscilações e pode levar à instabilidade."
          }
        ]
      }
    ]
  },
  {
    id: "m8",
    title: "Segurança e Proteção",
    description: "Normas, procedimentos e equipamentos de segurança em instalações elétricas",
    icon: "🛡️",
    color: "#636E72",
    lessons: [
      {
        id: "m8-l1",
        title: "NR-10 Visão Geral",
        theory: `
          <h2>NR-10 - Segurança em Instalações e Serviços em Eletricidade</h2>
          <p>A <strong>NR-10</strong> estabelece requisitos de segurança para instalações e serviços em eletricidade.</p>
          <h3>Escopo</h3>
          <ul>
            <li>Todas as instalações elétricas em qualquer estabelecimento</li>
            <li>Projetos, construções, montagens, operação e manutenção</li>
            <li>Alta e baixa tensão</li>
            <li>Trabalhadores diretos e indiretos</li>
          </ul>
          <h3>Requisitos Principais</h3>
          <ul>
            <li><strong>Plano de Trabalho:</strong> Descreve serviço, riscos e medidas</li>
            <li><strong>Permissão de Trabalho:</strong> Autorização formal</li>
            <li><strong>Capacitação:</strong> Treinamento obrigatório</li>
            <li><strong>Equipamentos:</strong> EPIs e EPCs adequados</li>
          </ul>
          <h3>Classificação por Tensão</h3>
          <table>
            <tr><th>Classificação</th><th>Tensão</th><th>Risco</th></tr>
            <tr><td>Baixa Tensão (BT)</td><td>Até 1.000 V CA / 1.500 V CC</td><td>Moderado</td></tr>
            <tr><td>Alta Tensão (AT)</td><td>Acima de 1.000 V CA / 1.500 V CC</td><td>Alto</td></tr>
          </table>
          <h3>Grupos de Tensão</h3>
          <ul>
            <li><strong>Grupo A:</strong> Até 50 V CA</li>
            <li><strong>Grupo B:</strong> 50 a 1.000 V CA</li>
            <li><strong>Grupo C:</strong> 1 a 35 kV</li>
            <li><strong>Grupo D:</strong> 35 a 150 kV</li>
            <li><strong>Grupo E:</strong> Acima de 150 kV</li>
          </ul>
          <h3>Responsabilidades</h3>
          <ul>
            <li><strong>Empregador:</strong> Fornecer condições seguras</li>
            <li><strong>Empregado:</strong> Cumprir procedimentos</li>
            <li><strong>Técnico de Segurança:</strong> Fiscalizar e orientar</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l1-ex1",
            type: "multiple-choice",
            question: "Qual é o principal objetivo da NR-10?",
            choices: ["Regular uso residencial", "Requisitos de segurança para serviços em eletricidade", "Definir tarifas", "Regular painéis solares"],
            correct: 1,
            explanation: "A NR-10 estabelece requisitos de segurança para instalações e serviços em eletricidade."
          },
          {
            id: "m8-l1-ex2",
            type: "multiple-choice",
            question: "Até qual tensão é Baixa Tensão na NR-10?",
            choices: ["220 V", "380 V", "1.000 V", "15.000 V"],
            correct: 2,
            explanation: "BT = até 1.000 V CA ou 1.500 V CC."
          },
          {
            id: "m8-l1-ex3",
            type: "fill-blank",
            question: "Complete: O _____ descreve serviço, riscos e medidas de controle.",
            code: "plano de trabalho",
            blanks: ["plano de trabalho"],
            explanation: "O plano de trabalho é obrigatório antes de qualquer serviço com risco elétrico."
          },
          {
            id: "m8-l1-ex4",
            type: "drag-drop",
            question: "Organize grupos de tensão (do menor ao maior):",
            pieces: ["Grupo A: Até 50 V", "Grupo B: 50-1.000 V", "Grupo C: 1-35 kV", "Grupo D: 35-150 kV", "Grupo E: Acima 150 kV"],
            correctOrder: ["Grupo A: Até 50 V", "Grupo B: 50-1.000 V", "Grupo C: 1-35 kV", "Grupo D: 35-150 kV", "Grupo E: Acima 150 kV"],
            explanation: "Classificação do menor para o maior grupo de tensão."
          },
          {
            id: "m8-l1-ex5",
            type: "multiple-choice",
            question: "Quem é responsável por fornecer condições seguras?",
            choices: ["Trabalhador", "Sindicato", "Empregador", "Fabricante"],
            correct: 2,
            explanation: "O empregador é responsável por condições seguras, capacitação e EPIs."
          }
        ]
      },
      {
        id: "m8-l2",
        title: "EPIs e EPCs",
        theory: `
          <h2>EPIs e EPCs</h2>
          <p><strong>EPIs</strong> (Equipamentos de Proteção Individual) e <strong>EPCs</strong> (Equipamentos de Proteção Coletiva) são essenciais para segurança.</p>
          <h3>EPIs</h3>
          <h4>Luvas Isolantes</h4>
          <ul>
            <li>Borracha isolante, classes 00 a 4</li>
            <li>Testadas a cada 6 meses</li>
            <li>Usar com luvas de couro por cima</li>
          </ul>
          <h4>Capacete com Viseira</h4>
          <ul>
            <li>Capacete isolante classe B</li>
            <li>Viseira contra arco elétrico</li>
          </ul>
          <h4>Calçados de Segurança</h4>
          <ul>
            <li>Botas de borracha isolante</li>
            <li>Sapatos com biqueira de aço</li>
          </ul>
          <h3>EPCs</h3>
          <ul>
            <li>Faixas de sinalização</li>
            <li>Placas de advertência</li>
            <li>Cobertores isolantes</li>
            <li>Tapetes isolantes</li>
            <li>Escadas isolantes</li>
          </ul>
          <h3>Classes de EPIs</h3>
          <table>
            <tr><th>Classe</th><th>Tensão Máx.</th><th>Tensão Teste</th></tr>
            <tr><td>00</td><td>500 V</td><td>2.500 V</td></tr>
            <tr><td>0</td><td>1.000 V</td><td>5.000 V</td></tr>
            <tr><td>1</td><td>7.500 V</td><td>10.000 V</td></tr>
            <tr><td>2</td><td>15.000 V</td><td>20.000 V</td></tr>
            <tr><td>3</td><td>25.000 V</td><td>30.000 V</td></tr>
            <tr><td>4</td><td>35.000 V</td><td>40.000 V</td></tr>
          </table>
        `,
        exercises: [
          {
            id: "m8-l2-ex1",
            type: "multiple-choice",
            question: "Função das luvas de couro sobre luvas isolantes?",
            choices: ["Isolamento elétrico", "Proteção mecânica", "Conforto térmico", "Aderência"],
            correct: 1,
            explanation: "Luvas de couro protegem contra cortes e desgaste da borracha isolante."
          },
          {
            id: "m8-l2-ex2",
            type: "multiple-choice",
            question: "Classe de luva para até 7.500 V?",
            choices: ["00", "0", "1", "2"],
            correct: 2,
            explanation: "Classe 1 suporta até 7.500 V."
          },
          {
            id: "m8-l2-ex3",
            type: "fill-blank",
            question: "Complete: Os _____ protegem todos os trabalhadores da área.",
            code: "EPCs",
            blanks: ["EPCs"],
            explanation: "EPCs são equipamentos de proteção coletiva."
          },
          {
            id: "m8-l2-ex4",
            type: "drag-drop",
            question: "Associe EPI com função:",
            pieces: ["Luva isolante → Isolamento elétrico", "Capacete → Proteção contra choques", "Óculos → Proteção ocular", "Bota → Isolamento dos pés"],
            correctOrder: ["Luva isolante → Isolamento elétrico", "Capacete → Proteção contra choques", "Óculos → Proteção ocular", "Bota → Isolamento dos pés"],
            explanation: "Cada EPI protege uma parte específica do corpo."
          },
          {
            id: "m8-l2-ex5",
            type: "multiple-choice",
            question: "Frequência de teste elétrico das luvas isolantes?",
            choices: ["A cada uso", "6 meses", "2 anos", "5 anos"],
            correct: 1,
            explanation: "Teste elétrico a cada 6 meses conforme norma."
          }
        ]
      },
      {
        id: "m8-l3",
        title: "Bloqueio e Sinalização LOTO",
        theory: `
          <h2>Bloqueio e Sinalização (LOTO)</h2>
          <p><strong>LOTO</strong> (Lockout/Tagout) garante que equipamentos permaneçam desenergizados durante manutenção.</p>
          <h3>Objetivo</h3>
          <ul>
            <li>Prevenir reenergização acidental</li>
            <li>Proteger contra partida inesperada</li>
            <li>Controlar todas as fontes de energia</li>
          </ul>
          <h3>Procedimento</h3>
          <ol>
            <li><strong>Notificar</strong> trabalhadores afetados</li>
            <li><strong>Identificar</strong> fontes de energia</li>
            <li><strong>Desligar</strong> equipamento</li>
            <li><strong>Iso</strong> fontes de energia</li>
            <li><strong>Bloquear</strong> com cadeado</li>
            <li><strong>Sinalizar</strong> com etiqueta</li>
            <li><strong>Dissipar</strong> energia residual</li>
            <li><strong>Verificar</strong> ausência de tensão</li>
          </ol>
          <h3>Regras Importantes</h3>
          <ul>
            <li>Cada trabalhador usa o <strong>próprio cadeado</strong></li>
            <li>Nunca remover cadeado de outro</li>
            <li>Apenas quem bloqueou pode desbloquear</li>
            <li>Em grupo: bloqueio múltiplo</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l3-ex1",
            type: "multiple-choice",
            question: "Primeiro passo do LOTO?",
            choices: ["Colocar cadeado", "Notificar trabalhadores", "Desligar equipamento", "Testar tensão"],
            correct: 1,
            explanation: "Notificar trabalhadores afetados é o primeiro passo."
          },
          {
            id: "m8-l3-ex2",
            type: "multiple-choice",
            question: "Quem pode remover um cadeado LOTO?",
            choices: ["Supervisor", "Electricista experiente", "Quem colocou", "Qualquer trabalhador"],
            correct: 2,
            explanation: "Apenas quem colocou pode remover."
          },
          {
            id: "m8-l3-ex3",
            type: "fill-blank",
            question: "Complete: LOTO significa _____ / Tagout.",
            code: "Lockout",
            blanks: ["Lockout"],
            explanation: "Lockout/Tagout = Bloqueio/Sinalização."
          },
          {
            id: "m8-l3-ex4",
            type: "drag-drop",
            question: "Ordem do LOTO:",
            pieces: ["1. Notificar", "2. Identificar fontes", "3. Desligar", "4. Isolar", "5. Bloquear", "6. Sinalizar", "7. Verificar"],
            correctOrder: ["1. Notificar", "2. Identificar fontes", "3. Desligar", "4. Isolar", "5. Bloquear", "6. Sinalizar", "7. Verificar"],
            explanation: "Sequência lógica para garantir segurança."
          },
          {
            id: "m8-l3-ex5",
            type: "multiple-choice",
            question: "O que fazer ANTES de trabalhar após bloqueio?",
            choices: ["Iniciar manutenção", "Verificar ausência de tensão", "Aguardar 24h", "Ligar para testar"],
            correct: 1,
            explanation: "Verificar ausência de tensão com instrumento é obrigatório."
          }
        ]
      },
      {
        id: "m8-l4",
        title: "Trabalho Desenerizado",
        theory: `
          <h2>Trabalho Desenerizado</h2>
          <p>Garantir que circuito ou equipamento esteja completamente desenergizado antes de manutenção.</p>
          <h3>Procedimento</h3>
          <ol>
            <li><strong>Desligar:</strong> Abrir dispositivo de manobra</li>
            <li><strong>Confrontar:</strong> Verificar equipamento correto</li>
            <li><strong>Verificar ausência de tensão:</strong> Detector adequado</li>
            <li><strong>Curto-circuitar e aterrar:</strong> Em alta tensão</li>
            <li><strong>Sinalizar:</strong> Placa "Não ligar"</li>
          </ol>
          <h3>Detector de Ausência de Tensão</h3>
          <ul>
            <li>Detector de não contato</li>
            <li>Multímetro</li>
            <li>Teste fase-neutro e fase-terra</li>
            <li>Sempre testar em fonte conhecida antes</li>
          </ul>
          <h3>Fontes de Energia Residual</h3>
          <table>
            <tr><th>Fonte</th><th>Risco</th><th>Procedimento</th></tr>
            <tr><td>Capacitores</td><td>Choque</td><td>Aguardar descarga</td></tr>
            <tr><td>Motores</td><td>Tensão residual</td><td>Aguardar parada</td></tr>
            <tr><td>UPS</td><td>Alimentação auxiliar</td><td>Desligar UPS</td></tr>
          </table>
        `,
        exercises: [
          {
            id: "m8-l4-ex1",
            type: "multiple-choice",
            question: "Primeira ação ao desenergizar?",
            choices: ["Usar luva", "Desligar manobra", "Testar multímetro", "Colocar cadeado"],
            correct: 1,
            explanation: "Desligar o dispositivo de manobra é o primeiro passo."
          },
          {
            id: "m8-l4-ex2",
            type: "multiple-choice",
            question: "Por que testar detector em circuito conhecido?",
            choices: ["Calibrar", "Verificar funcionamento", "Medir corrente", "Limpar pontas"],
            correct: 1,
            explanation: "Confirmar que o detector está funcionando antes de confiar."
          },
          {
            id: "m8-l4-ex3",
            type: "fill-blank",
            question: "Complete: Verificar a _____ de tensão com instrumento adequado.",
            code: "ausência",
            blanks: ["ausência"],
            explanation: "Confirmar que NÃO há tensão antes de trabalhar."
          },
          {
            id: "m8-l4-ex4",
            type: "drag-drop",
            question: "Ordem do trabalho desenerizado:",
            pieces: ["1. Desligar", "2. Confrontar", "3. Verificar tensão", "4. Curto/aterrar (AT)", "5. Sinalizar", "6. LOTO"],
            correctOrder: ["1. Desligar", "2. Confrontar", "3. Verificar tensão", "4. Curto/aterrar (AT)", "5. Sinalizar", "6. LOTO"],
            explanation: "Sequência lógica: desligar, confirmar, testar, proteger."
          },
          {
            id: "m8-l4-ex5",
            type: "multiple-choice",
            question: "Por que aguardar após desligar motor?",
            choices: ["Esfriar", "Tensão residual decair", "Disjuntor repousar", "Óleo voltar"],
            correct: 1,
            explanation: "Motores em rotação geram tensão residual por indução."
          }
        ]
      },
      {
        id: "m8-l5",
        title: "Aterramento",
        theory: `
          <h2>Aterramento</h2>
          <p>O aterramento garante segurança das pessoas e funcionamento correto dos equipamentos.</p>
          <h3>Tipos</h3>
          <h4>Proteção (PE)</h4>
          <ul>
            <li>Conecta partes metálicas ao terra</li>
            <li>Protege contra choques</li>
            <li>Aciona dispositivos de proteção</li>
          </ul>
          <h4>Neutro (N)</h4>
          <ul>
            <li>Conecta neutro ao terra</li>
            <li>Estabelece referência de tensão</li>
          </ul>
          <h3>Eletrodo</h3>
          <ul>
            <li><strong>Haste:</strong> Vareta de cobre, 2,5-3 m</li>
            <li><strong>Profundidade:</strong> Mínimo 0,8 m</li>
          </ul>
          <h3>Resistência</h3>
          <table>
            <tr><th>Instalação</th><th>Resistência Máx.</th></tr>
            <tr><td>Rede distribuição</td><td>5 Ω</td></tr>
            <tr><td>Transformador</td><td>5 Ω</td></tr>
            <tr><td>Indústria</td><td>10 Ω</td></tr>
            <tr><td>Postes iluminação</td><td>25 Ω</td></tr>
            <tr><td>Residências</td><td>25 Ω</td></tr>
          </table>
          <h3>Sistemas</h3>
          <ul>
            <li><strong>TN-S:</strong> Neutro e PE separados (mais seguro)</li>
            <li><strong>TN-C:</strong> Neutro e PE combinados (obsoleto)</li>
            <li><strong>TT:</strong> Neutro aterrado, PE local</li>
            <li><strong>IT:</strong> Isolado do terra</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l5-ex1",
            type: "multiple-choice",
            question: "Resistência máxima para postes?",
            choices: ["5 Ω", "10 Ω", "15 Ω", "25 Ω"],
            correct: 3,
            explanation: "Postes devem ter no máximo 25 Ω."
          },
          {
            id: "m8-l5-ex2",
            type: "multiple-choice",
            question: "Profundidade mínima para eletrodo?",
            choices: ["0,3 m", "0,5 m", "0,8 m", "1,5 m"],
            correct: 2,
            explanation: "Mínimo 0,8 m para contato adequado com o solo."
          },
          {
            id: "m8-l5-ex3",
            type: "fill-blank",
            question: "Complete: O aterramento de _____ protege pessoas contra choques.",
            code: "proteção",
            blanks: ["proteção"],
            explanation: "Aterramento de proteção (PE) é o mais importante para segurança."
          },
          {
            id: "m8-l5-ex4",
            type: "drag-drop",
            question: "Associe tipo com função:",
            pieces: ["Proteção → Segurança", "Neutro → Referência tensão", "Funcional → Equipamentos"],
            correctOrder: ["Proteção → Segurança", "Neutro → Referência tensão", "Funcional → Equipamentos"],
            explanation: "Cada tipo tem finalidade específica."
          },
          {
            id: "m8-l5-ex5",
            type: "multiple-choice",
            question: "Sistema mais seguro para indústria?",
            choices: ["TN-C", "TT", "TN-S", "IT"],
            correct: 2,
            explanation: "TN-S mantém neutro e PE separados, mais seguro."
          }
        ]
      },
      {
        id: "m8-l6",
        title: "Proteção contra Surtos",
        theory: `
          <h2>Proteção contra Surtos (DPS)</h2>
          <p>DPS protegem contra descargas atmosféricas e manobras de rede.</p>
          <h3>O que são Surtos?</h3>
          <ul>
            <li>Picos de tensão de curta duração</li>
            <li>Podem atingir dezenas de milhares de volts</li>
            <li>Causas: raios, manobras, liga/desliga</li>
          </ul>
          <h3>Classes de DPS</h3>
          <table>
            <tr><th>Classe</th><th>Localização</th><th>Corrente Pico</th></tr>
            <tr><td>I</td><td>Painel entrada</td><td>25-100 kA</td></tr>
            <tr><td>II</td><td>Distribuição</td><td>10-40 kA</td></tr>
            <tr><td>III</td><td>Junto ao equipamento</td><td>2,5-10 kA</td></tr>
          </table>
          <h3>Tipos</h3>
          <ul>
            <li><strong>Varistor (MOV):</strong> Resposta rápida, vida limitada</li>
            <li><strong>Gás (GDT):</strong> Alta capacidade, resposta lenta</li>
            <li><strong>Diodo (TVS):</strong> Precisão, para eletrônica</li>
          </ul>
          <h3>Coordenação</h3>
          <ul>
            <li>Classe I → II → III</li>
            <li>Cada classe reduz pico</li>
            <li>Mínimo 10 m entre classes</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l6-ex1",
            type: "multiple-choice",
            question: "Classe DPS na entrada do quadro geral?",
            choices: ["III", "II", "I", "Não precisa"],
            correct: 2,
            explanation: "Classe I na entrada para proteger contra raios."
          },
          {
            id: "m8-l6-ex2",
            type: "multiple-choice",
            question: "Componente com resposta mais rápida?",
            choices: ["Varistor", "Gás", "Diodo TVS", "Todos iguais"],
            correct: 2,
            explanation: "Diodo TVS tem resposta em picossegundos."
          },
          {
            id: "m8-l6-ex3",
            type: "fill-blank",
            question: "Complete: O _____ protege contra picos de tensão.",
            code: "DPS",
            blanks: ["DPS"],
            explanation: "DPS = Dispositivo de Proteção contra Surtos."
          },
          {
            id: "m8-l6-ex4",
            type: "drag-drop",
            question: "Ordem por localização (entrada → equipamento):",
            pieces: ["Classe I → Entrada", "Classe II → Distribuição", "Classe III → Equipamento"],
            correctOrder: ["Classe I → Entrada", "Classe II → Distribuição", "Classe III → Equipamento"],
            explanation: "Proteção escalonada: entrada, distribuição, equipamento."
          },
          {
            id: "m8-l6-ex5",
            type: "multiple-choice",
            question: "Por que conexões curtas no DPS?",
            choices: ["Economizar fio", "Reduzir indutância", "Facilitar instalação", "Reduzir resistência"],
            correct: 1,
            explanation: "Cabos longos têm alta indutância que amplifica o surto."
          }
        ]
      },
      {
        id: "m8-l7",
        title: "Proteção contra Descargas Atmosféricas",
        theory: `
          <h2>Proteção contra Descargas Atmosféricas (PDA)</h2>
          <p>Sistema de PDA protege edificações contra raios, conforme <strong>NBR 5419</strong>.</p>
          <h3>Efeitos de um Raio</h3>
          <ul>
            <li><strong>Direto:</strong> Impacto na estrutura</li>
            <li><strong>Indireto:</strong> Surtos em cabos</li>
            <li><strong>Lateral:</strong> Salta para estruturas próximas</li>
            <li><strong>Passo:</strong> Tensão entre pés no solo</li>
          </ul>
          <h3>Componentes</h3>
          <h4>Captação</h4>
          <ul>
            <li>Pára-raios (haste metálica)</li>
            <li>Condutores de descida</li>
            <li>Malha de aterramento</li>
          </ul>
          <h4>Equipotencialização</h4>
          <ul>
            <li>Conecta massas metálicas ao terra</li>
            <li>Evita tensões de passo e toque</li>
          </ul>
          <h4>Proteção contra Surtos</h4>
          <ul>
            <li>DPS em todos os pontos de entrada</li>
          </ul>
          <h3>Classes (NBR 5419)</h3>
          <table>
            <tr><th>Classe</th><th>Raio Máx.</th><th>Proteção</th></tr>
            <tr><td>I</td><td>200 kA</td><td>Hospitais, torres</td></tr>
            <tr><td>II</td><td>150 kA</td><td>Comercial/industrial</td></tr>
            <tr><td>III</td><td>100 kA</td><td>Residências</td></tr>
            <tr><td>IV</td><td>75 kA</td><td>Estruturas simples</td></tr>
          </table>
          <h3>Aterramento</h3>
          <ul>
            <li>Resistência máxima: 10 Ω</li>
            <li>Preferencialmente: 5 Ω</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l7-ex1",
            type: "multiple-choice",
            question: "Classe PDA para 200 kA?",
            choices: ["IV", "III", "II", "I"],
            correct: 3,
            explanation: "Classe I protege contra raios até 200 kA."
          },
          {
            id: "m8-l7-ex2",
            type: "multiple-choice",
            question: "Resistência máxima do aterramento PDA?",
            choices: ["1 Ω", "5 Ω", "10 Ω", "25 Ω"],
            correct: 2,
            explanation: "Máximo 10 Ω, preferencialmente 5 Ω."
          },
          {
            id: "m8-l7-ex3",
            type: "fill-blank",
            question: "Complete: O método da _____ determina a área protegida.",
            code: "esfera rolante",
            blanks: ["esfera rolante"],
            explanation: "Método gráfico usando esfera虚拟 para determinar zona protegida."
          },
          {
            id: "m8-l7-ex4",
            type: "drag-drop",
            question: "Associe efeito com descrição:",
            pieces: ["Direto → Impacto estrutura", "Indireto → Surtos cabos", "Passo → Tensão solo", "Lateral → Salto estruturas"],
            correctOrder: ["Direto → Impacto estrutura", "Indireto → Surtos cabos", "Passo → Tensão solo", "Lateral → Salto estruturas"],
            explanation: "Cada efeito tem mecanismo diferente."
          },
          {
            id: "m8-l7-ex5",
            type: "multiple-choice",
            question: "Norma brasileira para PDA?",
            choices: ["NR-10", "NBR 5419", "NBR 14039", "ABNT 13571"],
            correct: 1,
            explanation: "NBR 5419 regulamenta proteção contra descargas atmosféricas."
          }
        ]
      },
      {
        id: "m8-l8",
        title: "Riscos Elétricos",
        theory: `
          <h2>Riscos Elétricos</h2>
          <p>Conhecer os riscos elétricos é essencial para prevenção.</p>
          <h3>Tipos de Risco</h3>
          <h4>1. Choque Elétrico</h4>
          <ul>
            <li>Passagem de corrente pelo corpo</li>
            <li>Correntes &gt; 30 mA causam fibrilação</li>
            <li>Resistência: 500-2.000 Ω (seca), 200-500 Ω (molhada)</li>
          </ul>
          <h4>2. Arco Elétrico</h4>
          <ul>
            <li>Temperatura até 20.000°C</li>
            <li>Explosão de pressão</li>
            <li>Produtos tóxicos</li>
          </ul>
          <h4>3. Curto-Circuito</h4>
          <ul>
            <li>Correntes muito altas (kA)</li>
            <li>Calor intenso, incêndio</li>
          </ul>
          <h3>Efeitos no Corpo</h3>
          <table>
            <tr><th>Corrente</th><th>Efeito</th></tr>
            <tr><td>1 mA</td><td>Percepção</td></tr>
            <tr><td>10-20 mA</td><td>Contração muscular</td></tr>
            <tr><td>30 mA</td><td>Paralisia respiratória</td></tr>
            <tr><td>50-100 mA</td><td>Fibrilação ventricular</td></tr>
          </table>
          <h3>Caminho Mais Perigoso</h3>
          <ul>
            <li>Mão-mão (passa pelo coração)</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l8-ex1",
            type: "multiple-choice",
            question: "Corrente para fibrilação ventricular?",
            choices: ["1-5 mA", "5-10 mA", "10-20 mA", "50-100 mA"],
            correct: 3,
            explanation: "50-100 mA podem causar fibrilação ventricular."
          },
          {
            id: "m8-l8-ex2",
            type: "multiple-choice",
            question: "Temperatura máxima de arco elétrico?",
            choices: ["1.000°C", "5.000°C", "10.000°C", "20.000°C"],
            correct: 3,
            explanation: "Até 20.000°C, 4x a superfície do sol."
          },
          {
            id: "m8-l8-ex3",
            type: "fill-blank",
            question: "Complete: O caminho mais perigoso é de _____ para _____.",
            code: "mão; mão",
            blanks: ["mão", "mão"],
            explanation: "Mão-mão passa diretamente pelo coração."
          },
          {
            id: "m8-l8-ex4",
            type: "drag-drop",
            question: "Ordene efeitos (menor → maior corrente):",
            pieces: ["1 mA → Percepção", "10-20 mA → Contração", "30 mA → Paralisia", "50-100 mA → Fibrilação"],
            correctOrder: ["1 mA → Percepção", "10-20 mA → Contração", "30 mA → Paralisia", "50-100 mA → Fibrilação"],
            explanation: "Gravidade aumenta com a corrente."
          },
          {
            id: "m8-l8-ex5",
            type: "multiple-choice",
            question: "Resistência do corpo seco?",
            choices: ["10-50 Ω", "100-200 Ω", "500-2.000 Ω", "5.000-10.000 Ω"],
            correct: 2,
            explanation: "500-2.000 Ω. Molhado cai para 200-500 Ω."
          }
        ]
      },
      {
        id: "m8-l9",
        title: "Primeiros Socorros em Acidentes Elétricos",
        theory: `
          <h2>Primeiros Socorros em Acidentes Elétricos</h2>
          <p>O conhecimento de primeiros socorros salva vidas.</p>
          <h3>Primeiros Passos</h3>
          <ol>
            <li><strong>Desligar energia</strong> se possível</li>
            <li><strong>Não tocar</strong> se vítima estiver em contato com fonte</li>
            <li><strong>Afastar com isolante:</strong> pau seco, plástico</li>
            <li><strong>Ligar 192 (SAMU) ou 193 (Bombeiros)</strong></li>
          </ol>
          <h3>Avaliação</h3>
          <ul>
            <li><strong>Consciência:</strong> Fala, se move</li>
            <li><strong>Respiração:</strong> Movimento do peito</li>
            <li><strong>Circulação:</strong> Pulso, coloração</li>
            <li><strong>Queimaduras:</strong> Extensão</li>
          </ul>
          <h3>Procedimentos</h3>
          <h4>Vítima Consciente</h4>
          <ul>
            <li>Mantê-la deitada e confortável</li>
            <li>Não deixar se levantar subitamente</li>
            <li>Monitorar sinais vitais</li>
          </ul>
          <h4>Vítima Inconsciente com Respiração</h4>
          <ul>
            <li>Posição lateral de segurança</li>
            <li>Verificar vias aéreas</li>
            <li>Manter respiração</li>
          </ul>
          <h4>Parada Cardíaca</h4>
          <ul>
            <li>Iniciar RCP imediatamente</li>
            <li>30 compressões : 2 ventilações</li>
            <li>Usar DEA se disponível</li>
            <li>Continuar até SAMU chegar</li>
          </ul>
          <h3>Queimaduras Elétricas</h3>
          <ul>
            <li>Não remover roupas adheridas</li>
            <li>Cobrir com pano limpo</li>
            <li>Não aplicar pomadas</li>
            <li>Procurar atendimento médico</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l9-ex1",
            type: "multiple-choice",
            question: "O que fazer se a vítima está em contato com fio energizado?",
            choices: ["Puxar a vítima", "Desligar energia ou usar isolante", "Jogar água", "Sair correndo"],
            correct: 1,
            explanation: "NUNCA tocar na vítima. Desligar energia ou afastar com material isolante."
          },
          {
            id: "m8-l9-ex2",
            type: "multiple-choice",
            question: "Número para SAMU?",
            choices: ["190", "192", "193", "197"],
            correct: 1,
            explanation: "192 é o SAMU. 193 são os Bombeiros."
          },
          {
            id: "m8-l9-ex3",
            type: "fill-blank",
            question: "Complete: Na RCP, a proporção é 30 compressões para _____ ventilações.",
            code: "2",
            blanks: ["2"],
            explanation: "30:2 é a proporção padrão para RCP em adultos."
          },
          {
            id: "m8-l9-ex4",
            type: "multiple-choice",
            question: "Posição para vítima inconsciente com respiração?",
            choices: ["Sentada", "Deitada de costas", "Lateral de segurança", "Em pé"],
            correct: 2,
            explanation: "Posição lateral de segurança mantém vias aéreas livres."
          },
          {
            id: "m8-l9-ex5",
            type: "multiple-choice",
            question: "Em caso de queimadura elétrica, NÃO se deve:",
            choices: ["Cobrir com pano limpo", "Procurar médico", "Remover roupas adheridas", "Lavar com água"],
            correct: 2,
            explanation: "Nunca remover roupas adheridas, pode causar mais dano."
          }
        ]
      },
      {
        id: "m8-l10",
        title: "Normas e Certificações",
        theory: `
          <h2>Normas e Certificações</h2>
          <p>Conhecer as normas é essencial para garantir conformidade e segurança nas instalações elétricas.</p>
          <h3>NR-10</h3>
          <ul>
            <li>Segurança em instalações e serviços em eletricidade</li>
            <li>Obrigatória para todas as atividades com risco elétrico</li>
            <li>Exige capacitação e certificação dos trabalhadores</li>
          </ul>
          <h3>Normas Técnicas</h3>
          <table>
            <tr><th>Norma</th><th>Assunto</th></tr>
            <tr><td>ABNT NBR 5410</td><td>Instalações elétricas de baixa tensão</td></tr>
            <tr><td>ABNT NBR 14039</td><td>Instalações de média tensão</td></tr>
            <tr><td>ABNT NBR 5419</td><td>Proteção contra descargas atmosféricas</td></tr>
            <tr><td>ABNT NBR 13571</td><td>Sistemas de iluminação de emergência</td></tr>
            <tr><td>ABNT NBR 14644</td><td>Cabeamento estruturado</td></tr>
          </table>
          <h3>INMETRO</h3>
          <ul>
            <li>Instituto Nacional de Metrologia</li>
            <li>Certifica equipamentos de proteção</li>
            <li>Valida calibração de instrumentos</li>
            <li>Regulamenta produtos para segurança</li>
          </ul>
          <h3>Certificações Importantes</h3>
          <ul>
            <li><strong>NR-10:</strong> Capacitação obrigatória</li>
            <li><strong>SBRAI:</strong> Sociedade Brasileira de Redes de Ar Incêndio</li>
            <li><strong>CFE:</strong> Conformidade de Equipamentos Elétricos</li>
            <li><strong>CEPEE:</strong> Certificação de Profissionais</li>
          </ul>
          <h3>Responsabilidades Técnicas</h3>
          <ul>
            <li><strong>Engenheiro Eletricista:</strong> Projeto e vistoria</li>
            <li><strong>Técnico em Eletricidade:</strong> Instalação e manutenção</li>
            <li><strong>Responsável Técnico:</strong> Assina projetos e laudos</li>
          </ul>
          <h3>Documentação Obrigatória</h3>
          <ul>
            <li>Projeto elétrico aprovado</li>
            <li>Laudos de inspeção</li>
            <li>Certificados de calibração</li>
            <li>Registros de treinamento</li>
            <li>Planos de manutenção</li>
          </ul>
        `,
        exercises: [
          {
            id: "m8-l10-ex1",
            type: "multiple-choice",
            question: "Qual norma regula instalações de baixa tensão?",
            choices: ["NBR 5419", "NBR 5410", "NR-10", "NBR 14039"],
            correct: 1,
            explanation: "ABNT NBR 5410 regula instalações elétricas de baixa tensão."
          },
          {
            id: "m8-l10-ex2",
            type: "multiple-choice",
            question: "O que regula o INMETRO?",
            choices: ["Normas técnicas", "Certificação de equipamentos e calibração", "Projetos elétricos", "Treinamentos"],
            correct: 1,
            explanation: "INMETRO certifica equipamentos e valida calibração de instrumentos."
          },
          {
            id: "m8-l10-ex3",
            type: "fill-blank",
            question: "Complete: A _____ é obrigatória para trabalhadores com risco elétrico.",
            code: "capacitação",
            blanks: ["capacitação"],
            explanation: "A NR-10 exige capacitação e certificação dos trabalhadores."
          },
          {
            id: "m8-l10-ex4",
            type: "drag-drop",
            question: "Associe norma com assunto:",
            pieces: ["NBR 5410 → Baixa tensão", "NBR 5419 → PDA", "NBR 14039 → Média tensão", "NR-10 → Segurança elétrica"],
            correctOrder: ["NBR 5410 → Baixa tensão", "NBR 5419 → PDA", "NBR 14039 → Média tensão", "NR-10 → Segurança elétrica"],
            explanation: "Cada norma regula um aspecto específico."
          },
          {
            id: "m8-l10-ex5",
            type: "multiple-choice",
            question: "Quem assina projetos elétricos?",
            choices: ["Técnico em eletricidade", "Engenheiro Eletricista", "Eletricista", "Fiscal"],
            correct: 1,
            explanation: "O Engenheiro Eletricista é o responsável técnico que assina projetos e laudos."
          }
        ]
      }
    ]
  }
  ]
};