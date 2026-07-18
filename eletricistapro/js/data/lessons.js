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
          theory: '<h2>Eletricidade: A Força que Move o Mundo</h2><p>Eletricidade é o fluxo de <strong>elétrons</strong> através de um condutor. Três grandezas fundamentais regem todo comportamento elétrico:</p><ul><li><strong>Tensão (V)</strong> — "Empurra" os elétrons. Medida em Volts.</li><li><strong>Corrente (I)</strong> — Quantidade de elétrons fluindo. Medida em Amperes.</li><li><strong>Resistência (R)</strong> — Oposto ao fluxo. Medida em Ohms.</li></ul><div class="formula-box"><strong>Analogia hidráulica:</strong><br>Tensão = Pressão da água<br>Corrente = Vazão<br>Resistência = Diâmetro do cano</div><p>A relação entre essas grandezas é a <strong>Lei de Ohm</strong>:</p><pre>V = R × I</pre>',
          exercises: [
            { type: "multiple-choice", question: "Qual grandeza 'empurra' os elétrons?", choices: ["Corrente", "Resistência", "Tensão", "Potência"], correct: 2, explanation: "Tensão (Volts) é a força eletromotriz." },
            { type: "fill-blank", code: "A unidade da corrente é o ____", blanks: [{ answer: "Ampere", placeholder: "unidade" }], explanation: "Corrente é medida em Amperes (A)." },
            { type: "multiple-choice", question: "A Lei de Ohm estabelece que:", choices: ["V = I / R", "V = R × I", "V = R + I", "V = R - I"], correct: 1, explanation: "V = R × I é a Lei de Ohm." },
            { type: "calculation", question: "Se R=10Ω e I=3A, qual a tensão? (V=R×I)", answer: 30, unit: "V", validate: function(val) { return Math.abs(val - 30) < 0.1; }, explanation: "V = 10 × 3 = 30V" },
            { type: "drag-drop", question: "Organize as grandezas elétricas:", pieces: ["1 Ampere", "1 Ohm", "1 Volt"], correctOrder: ["1 Ohm", "1 Volt", "1 Ampere"], explanation: "Ohm é resistência, Volt é tensão, Ampere é corrente." }
          ]
        },
        {
          id: "m1-l2",
          title: "Lei de Ohm na Prática",
          theory: '<h2>Calculando com a Lei de Ohm</h2><p>A Lei de Ohm pode ser reorganizada:</p><pre>V = R × I\nR = V / I\nI = V / R</pre><h3>Exemplo</h3><p>Lâmpada de 127V com 63,5Ω. Qual a corrente?</p><pre>I = V / R = 127 / 63,5 = 2A</pre><div class="formula-box"><strong>Dica:</strong> Desenhe um triângulo com V no topo, R e I na base.</div>',
          exercises: [
            { type: "calculation", question: "R=47Ω, V=10V. Qual a corrente? (I=V/R)", answer: 0.21, unit: "A", validate: function(val) { return Math.abs(val - 0.21) < 0.05; }, explanation: "I = 10/47 ≈ 0,21A" },
            { type: "multiple-choice", question: "Se V=220V e I=5A, qual R?", choices: ["44Ω", "1100Ω", "225Ω", "50Ω"], correct: 0, explanation: "R = V/I = 220/5 = 44Ω" },
            { type: "fill-blank", code: "Se I = V / ____, então R = V / I", blanks: [{ answer: "R", placeholder: "grandeza" }], explanation: "Para resistência, dividimos tensão por corrente." },
            { type: "calculation", question: "Qual tensão para 3A em 25Ω?", answer: 75, unit: "V", validate: function(val) { return Math.abs(val - 75) < 0.1; }, explanation: "V = 25 × 3 = 75V" }
          ]
        },
        {
          id: "m1-l3",
          title: "Potência Elétrica",
          theory: '<h2>Potência: Energia por Segundo</h2><p>Potência é a taxa de consumo de energia. Medida em <strong>Watts (W)</strong>.</p><pre>P = V × I\nP = R × I²\nP = V² / R</pre><h3>Exemplo</h3><p>Chuveiro de 220V consome 8A:</p><pre>P = 220 × 8 = 1760W = 1,76kW</pre><div class="formula-box"><strong>Conversões:</strong><br>1 kW = 1000 W<br>1 CV = 735,5 W<br>1 HP = 746 W</div>',
          exercises: [
            { type: "calculation", question: "Lâmpada 127V, 0,5A. Qual potência? (P=V×I)", answer: 63.5, unit: "W", validate: function(val) { return Math.abs(val - 63.5) < 0.1; }, explanation: "P = 127 × 0,5 = 63,5W" },
            { type: "multiple-choice", question: "A potência é medida em:", choices: ["Amperes", "Volts", "Ohms", "Watts"], correct: 3, explanation: "Potência é medida em Watts (W)." },
            { type: "calculation", question: "Motor 220V, 10A. Qual potência?", answer: 2200, unit: "W", validate: function(val) { return Math.abs(val - 2200) < 1; }, explanation: "P = 220 × 10 = 2200W" },
            { type: "fill-blank", code: "P = V × ____ calcula potência", blanks: [{ answer: "I", placeholder: "grandeza" }], explanation: "P = V × I." }
          ]
        },
        {
          id: "m1-l4",
          title: "Circuitos Série e Paralelo",
          theory: '<h2>Dois Tipos de Circuitos</h2><h3>Série</h3><pre>R_total = R1 + R2 + R3\nI_total = I1 = I2 = I3\nV_total = V1 + V2 + V3</pre><h3>Paralelo</h3><pre>1/R_total = 1/R1 + 1/R2 + 1/R3\nV_total = V1 = V2 = V3\nI_total = I1 + I2 + I3</pre><div class="formula-box"><strong>Resumo:</strong><br>Série: R soma, I igual, V divide<br>Paralelo: R diminui, V igual, I divide</div>',
          exercises: [
            { type: "calculation", question: "2 resistências de 10Ω em série. R total?", answer: 20, unit: "Ω", validate: function(val) { return Math.abs(val - 20) < 0.1; }, explanation: "R = 10 + 10 = 20Ω" },
            { type: "multiple-choice", question: "Em série, qual grandeza é igual?", choices: ["Tensão", "Corrente", "Resistência", "Potência"], correct: 1, explanation: "Em série, a corrente é a mesma." },
            { type: "calculation", question: "2 resistências de 10Ω em paralelo. R total?", answer: 5, unit: "Ω", validate: function(val) { return Math.abs(val - 5) < 0.1; }, explanation: "1/R = 1/10 + 1/10 = 2/10, R = 5Ω" },
            { type: "drag-drop", question: "Conceitos para circuito SÉRIE:", pieces: ["Resistências somam", "Corrente igual", "Tensão se divide"], correctOrder: ["Corrente igual", "Resistências somam", "Tensão se divide"], explanation: "Em série: corrente igual, R somam, V divide." }
          ]
        }
      ]
    },
    {
      id: "m2",
      title: "Instalações Residenciais",
      description: "Norma NBR 5410, componentes, quadro e dimensionamento",
      icon: "🏠",
      color: "#6C5CE7",
      lessons: [
        {
          id: "m2-l1",
          title: "Norma NBR 5410",
          theory: '<h2>A Norma que Regula Instalações</h2><p>A <strong>NBR 5410</strong> regula instalações elétricas de baixa tensão (até 1000V CA).</p><h3>Regras principais:</h3><ul><li>Separar iluminação de tomadas</li><li>Circuito exclusivo para equipamentos >10A</li><li>Limite de 10A por circuito de tomadas</li><li>Fio terra obrigatório</li><li>Disjuntor geral na entrada</li></ul><div class="norma-badge">NBR 5410:2004</div>',
          exercises: [
            { type: "multiple-choice", question: "Qual norma regula instalações de baixa tensão?", choices: ["NR-10", "NBR 5410", "NBR 5444", "NBR 14100"], correct: 1, explanation: "A NBR 5410 é a norma para instalações de baixa tensão." },
            { type: "multiple-choice", question: "Limite de corrente para tomadas gerais:", choices: ["5A", "10A", "15A", "20A"], correct: 1, explanation: "A NBR 5410 recomenda 10A máximo." },
            { type: "multiple-choice", question: "Chuveiro elétrico deve ter:", choices: ["Circuito compartilhado", "Circuito exclusivo", "Ligação direta", "Apenas disjuntor"], correct: 1, explanation: "Equipamentos >10A precisam de circuito exclusivo." },
            { type: "drag-drop", question: "Regras da NBR 5410:", pieces: ["Fio terra obrigatório", "Circuito exclusivo chuveiro", "Limite 10A"], correctOrder: ["Fio terra obrigatório", "Limite 10A", "Circuito exclusivo chuveiro"], explanation: "Terra primeiro, depois dimensionamento." }
          ]
        },
        {
          id: "m2-l2",
          title: "Componentes de Proteção",
          theory: '<h2>Disjuntores, DR e DPS</h2><h3>Disjuntor</h3><p>Protege contra <strong>sobrecarga</strong> e <strong>curto-circuito</strong>. Efeito térmico + magnético.</p><h3>DR (Diferencial)</h3><p>Protege contra <strong>choque elétrico</strong> e <strong>fuga de corrente</strong>. Detecta diferença fase-neutro.</p><h3>DPS</h3><p>Protege contra <strong>surtos de tensão</strong> (raios, manobras).</p><div class="formula-box"><strong>Capacidades:</strong><br>Geral: 40A ou 63A<br>Circuitos: 10A a 25A<br>DR: 25A, 40A (30mA)</div>',
          exercises: [
            { type: "multiple-choice", question: "Disjuntor protege contra:", choices: ["Choque", "Sobrecarga e curto-circuito", "Surtos", "Fuga"], correct: 1, explanation: "Disjuntor = sobrecarga + curto-circuito." },
            { type: "multiple-choice", question: "DR protege contra:", choices: ["Sobrecarga", "Curto-circuito", "Choque e fuga", "Surtos"], correct: 2, explanation: "DR detecta fuga de corrente." },
            { type: "fill-blank", code: "O ____ protege contra surtos (raios)", blanks: [{ answer: "DPS", placeholder: "dispositivo" }], explanation: "DPS = Dispositivo de Proteção contra Surtos." },
            { type: "drag-drop", question: "Associe dispositivo à função:", pieces: ["Disjuntor → Sobrecarga", "DR → Choque", "DPS → Surtos"], correctOrder: ["Disjuntor → Sobrecarga", "DR → Choque", "DPS → Surtos"], explanation: "Cada dispositivo tem função específica." }
          ]
        },
        {
          id: "m2-l3",
          title: "Quadro de Distribuição",
          theory: '<h2>O Coração da Instalação</h2><p>O <strong>quadro de distribuição</strong> é o centro de onde partem todos os circuitos.</p><h3>Componentes:</h3><ul><li>Disjuntor Geral</li><li>DR Geral</li><li>Disjuntores Setoriais</li><li>Barramento de neutro</li><li>Barramento de terra</li></ul><h3>Identificação:</h3><pre>C1 → Iluminação Térrea\nC2 → Tomadas Térreas\nC3 → Iluminação Superior\nC4 → Tomadas Superiores\nC5 → Chuveiro\nC6 → Ar-Condicionado</pre>',
          exercises: [
            { type: "multiple-choice", question: "O quadro de distribuição é:", choices: ["Interruptor", "Centro de distribuição", "Tomada", "Medidor"], correct: 1, explanation: "É o centro de onde partem todos os circuitos." },
            { type: "multiple-choice", question: "Disjuntor geral deve ser:", choices: ["Menor que setorial", "Igual ao menor", "Maior que todos", "Não importa"], correct: 2, explanation: "Deve suportar a soma de todos os circuitos." },
            { type: "drag-drop", question: "Ordem no quadro:", pieces: ["Disjuntor Geral", "DR Geral", "Setoriais"], correctOrder: ["Disjuntor Geral", "DR Geral", "Setoriais"], explanation: "Geral → DR → Setoriais." }
          ]
        },
        {
          id: "m2-l4",
          title: "Dimensionamento de Condutores",
          theory: '<h2>Escolhendo o Fio Correto</h2><p>Um fio subdimensionado aquece e pode causar incêndio.</p><h3>Fatores:</h3><ul><li>Corrente do circuito</li><li>Comprimento do circuito</li><li>Método de instalação</li><li>Temperatura ambiente</li></ul><h3>Tabela de bitolas:</h3><pre>1,5 mm² → até 16A (iluminação)\n2,5 mm² → até 25A (tomadas)\n4,0 mm² → até 34A (chuveiro)\n6,0 mm² → até 42A (cargas grandes)\n10 mm² → até 60A (geral)</pre><div class="norma-badge">NBR NM 280</div>',
          exercises: [
            { type: "multiple-choice", question: "Bitola para iluminação:", choices: ["1,0 mm²", "1,5 mm²", "2,5 mm²", "4,0 mm²"], correct: 1, explanation: "Iluminação usa 1,5mm² (até 16A)." },
            { type: "multiple-choice", question: "Chuveiro 220V/8A precisa de:", choices: ["1,5 mm²", "2,5 mm²", "4,0 mm²", "6,0 mm²"], correct: 2, explanation: "Para chuveiros, usa-se 4,0mm²." },
            { type: "calculation", question: "Bitola para 20A? (1,5=16A, 2,5=25A)", answer: 2.5, unit: "mm²", validate: function(val) { return Math.abs(val - 2.5) < 0.1; }, explanation: "2,5mm² suporta até 25A." },
            { type: "drag-drop", question: "Ordem de bitolas:", pieces: ["1,5 → 16A", "2,5 → 25A", "4,0 → 34A"], correctOrder: ["1,5 → 16A", "2,5 → 25A", "4,0 → 34A"], explanation: "Maior bitola = maior capacidade." }
          ]
        }
      ]
    },
    {
      id: "m3",
      title: "Simbologia e Diagramas",
      description: "Símbolos elétricos, diagramas unifilar e multifilar",
      icon: "📐",
      color: "#00B894",
      lessons: [
        {
          id: "m3-l1",
          title: "Símbolos Elétricos",
          theory: '<h2>A Linguagem dos Diagramas</h2><p>Símbolos padronizados pela <strong>NBR 5444</strong>:</p><ul><li><strong>Lâmpada:</strong> Círculo com X</li><li><strong>Interruptor:</strong> Contato aberto</li><li><strong>Tomada:</strong> Semicírculo</li><li><strong>Disjuntor:</strong> Retângulo com X</li><li><strong>Resistor:</strong> Zig-zag</li><li><strong>Motor:</strong> Círculo com M</li><li><strong>Contator:</strong> Contato + bobina</li><li><strong>Fusível:</strong> Retângulo com linha</li></ul><div class="norma-badge">NBR 5444:1989</div>',
          exercises: [
            { type: "multiple-choice", question: "Símbolo de lâmpada:", choices: ["Círculo vazio", "Círculo com X", "Triângulo", "Seta"], correct: 1, explanation: "Círculo com X dentro." },
            { type: "multiple-choice", question: "Símbolo de motor:", choices: ["Círculo com M", "Retângulo com R", "Zig-zag", "Linha tracejada"], correct: 0, explanation: "Círculo com M dentro." },
            { type: "drag-drop", question: "Associe símbolo ao componente:", pieces: ["Círculo+X → Lâmpada", "Zig-zag → Resistor", "Círculo+M → Motor"], correctOrder: ["Círculo+X → Lâmpada", "Zig-zag → Resistor", "Círculo+M → Motor"], explanation: "Cada componente tem símbolo padrão." }
          ]
        },
        {
          id: "m3-l2",
          title: "Diagrama Unifilar",
          theory: '<h2>Vista Simples da Instalação</h2><p>O <strong>diagrama unifilar</strong> mostra toda instalação com uma linha por circuito multipolar.</p><h3>O que mostra:</h3><ul><li>Entrada da energia</li><li>Quadro de distribuição</li><li>Número de circuitos</li><li>Bitola dos condutores</li><li>Dispositivos de proteção</li></ul>',
          exercises: [
            { type: "multiple-choice", question: "Diagrama unifilar mostra:", choices: ["Cada fio", "Uma linha por circuito", "Apenas iluminação", "Apenas tomadas"], correct: 1, explanation: "Uma linha por circuito multipolar." },
            { type: "multiple-choice", question: "Unifilar é usado para:", choices: ["Detalhar ligações", "Visão geral", "Cores dos fios", "Medir corrente"], correct: 1, explanation: "Mostra a visão geral da instalação." }
          ]
        },
        {
          id: "m3-l3",
          title: "Diagrama Multifilar",
          theory: '<h2>Detalhando Cada Conexão</h2><p>O <strong>multifilar</strong> mostra cada condutor individualmente.</p><h3>Diferença do unifilar:</h3><ul><li>Mostra cada fio</li><li>Indica cores</li><li>Mostra conexões exatas</li><li>Usado para instalação</li></ul><h3>Cores (NBR):</h3><pre>Fase: Vermelho, marrom ou preto\nNeutro: Azul claro\nTerra: Verde/amarelo ou verde</pre>',
          exercises: [
            { type: "multiple-choice", question: "Cor do terra:", choices: ["Vermelho", "Azul", "Verde/amarelo", "Preto"], correct: 2, explanation: "Terra = verde/amarelo." },
            { type: "multiple-choice", question: "Multifilar é mais detalhado porque:", choices: ["Mostra menos", "Mostra cada fio", "É mais rápido", "Usa menos símbolos"], correct: 1, explanation: "Mostra cada condutor separadamente." },
            { type: "fill-blank", code: "Cor do neutro é ____ claro", blanks: [{ answer: "azul", placeholder: "cor" }], explanation: "Neutro = azul claro." }
          ]
        }
      ]
    },
    {
      id: "m4",
      title: "Motores Elétricos",
      description: "Motores monofásicos, trifásicos e partidas",
      icon: "🔧",
      color: "#E17055",
      lessons: [
        {
          id: "m4-l1",
          title: "Motores Monofásicos",
          theory: '<h2>Motores para Uso Residencial</h2><p>Funcionam com <strong>fase e neutro</strong> (127V/220V).</p><h3>Tipos:</h3><ul><li><strong>Universal:</strong> CC e CA. Furadeiras, aspiradores.</li><li><strong>Fase Auxiliar:</strong> Capacitor. Geladeiras, bombas.</li><li><strong>Fase Partida:</strong> Relé. Ar-condicionado.</li></ul><h3>Terminais:</h3><pre>2 terminais: Ligação direta\n4 terminais: Com capacitor\n6 terminais: Com capacitor e derivação</pre>',
          exercises: [
            { type: "multiple-choice", question: "Motor monofásico de 2 terminais liga com:", choices: ["Três fases", "Fase e neutro", "Apenas terra", "Dois neutros"], correct: 1, explanation: "Fase e neutro." },
            { type: "multiple-choice", question: "Capacitor serve para:", choices: ["Aumentar tensão", "Criar segundo campo", "Diminuir corrente", "Proteger"], correct: 1, explanation: "Cria segundo campo magnético defasado." },
            { type: "drag-drop", question: "Associe motor ao uso:", pieces: ["Universal → Furadeira", "Fase auxiliar → Bomba", "Fase partida → Ar"], correctOrder: ["Universal → Furadeira", "Fase auxiliar → Bomba", "Fase partida → Ar"], explanation: "Cada tipo tem aplicação típica." }
          ]
        },
        {
          id: "m4-l2",
          title: "Motores Trifásicos",
          theory: '<h2>Motores Industriais</h2><p>Funcionam com <strong>três fases</strong> (380V/440V).</p><h3>Terminais:</h3><pre>6 terminais: Estrela (Y) ou Triângulo (Δ)\n12 terminais: Múltiplas configurações</pre><h3>Estrela (Y):</h3><p>U2, V2, W2 conectados. Menor corrente.</p><h3>Triângulo (Δ):</h3><p>Conectados em sequência. Maior corrente.</p><div class="formula-box"><strong>P = √3 × V × I × cos(φ) × η</strong></div>',
          exercises: [
            { type: "multiple-choice", question: "Estrela é usada para:", choices: ["Maior corrente", "Menor corrente", "Apenas 1 fase", "Três neutros"], correct: 1, explanation: "Menor corrente e torque." },
            { type: "multiple-choice", question: "Motor de 6 terminais liga em:", choices: ["Apenas estrela", "Apenas triângulo", "Estrela ou triângulo", "Não tem"], correct: 2, explanation: "Permite ambas as ligações." },
            { type: "fill-blank", code: "Ligação ____ conecta U2, V2, W2", blanks: [{ answer: "estrela", placeholder: "ligação" }], explanation: "Estrela curto-circuita esses terminais." }
          ]
        },
        {
          id: "m4-l3",
          title: "Partidas e Reversão",
          theory: '<h2>Acionando Motores</h2><h3>Partida Direta</h3><p>Tensão nominal direta. Pico de 5-7x a corrente nominal.</p><h3>Estrela-Triângulo</h3><p>Inicia em estrela, comuta para triângulo. Reduz pico.</p><h3>Reversão</h3><p>Inverte duas fases. Usa dois contatores com intertravamento.</p><pre>Direta: L1→U1, L2→V1, L3→W1\nReversa: L1→U1, L2→W1, L3→V1</pre>',
          exercises: [
            { type: "multiple-choice", question: "Inverter rotação:", choices: ["Inverter fase/neutro", "Inverter duas fases", "Inverter todas", "Adicionar resistor"], correct: 1, explanation: "Inverter duas fases inverte rotação." },
            { type: "multiple-choice", question: "Estrela-triângulo reduz pico porque:", choices: ["Usa resistor", "Começa com menor tensão", "Inverte fases", "Usa capacitor"], correct: 1, explanation: "Tensão dividida por √3 na estrela." },
            { type: "multiple-choice", question: "Intertravamento impede:", choices: ["Partida", "Curto-circuito entre fases", "Quedas", "Sobrecarga"], correct: 1, explanation: "Impede contatores fecharem juntos." }
          ]
        }
      ]
    },
    {
      id: "m5",
      title: "Comandos Elétricos",
      description: "Botoeiras, contatores, relés e circuitos de comando",
      icon: "🎛️",
      color: "#0984E3",
      lessons: [
        {
          id: "m5-l1",
          title: "Botoeiras e Sinais",
          theory: '<h2>Dispositivos de Acionamento</h2><h3>Botoeiras</h3><ul><li><strong>NA (Normalmente Aberto):</strong> Verde. Fecha ao pressionar. LIGAR.</li><li><strong>NF (Normalmente Fechado):</strong> Vermelho. Abre ao pressionar. DESLIGAR.</li><li><strong>NA/NF:</strong> Combina os dois.</li></ul><h3>Sinalizadores</h3><ul><li>Verde: Ligado</li><li>Vermelho: Desligado/Falha</li><li>Amarelo: Atenção</li></ul><div class="formula-box"><strong>Regra:</strong> Verde = Liga, Vermelho = Desliga</div>',
          exercises: [
            { type: "multiple-choice", question: "Botoeira verde (NA) serve para:", choices: ["Desligar", "Ligar", "Emergência", "Reversão"], correct: 1, explanation: "Verde = ligar." },
            { type: "multiple-choice", question: "Botoeira vermelha (NF) serve para:", choices: ["Ligar", "Desligar/Parada", "Acelerar", "Reversão"], correct: 1, explanation: "Vermelho = desligar/parada." },
            { type: "fill-blank", code: "Botoeira ____ abre ao pressionar", blanks: [{ answer: "NF", placeholder: "tipo" }], explanation: "NF abre o circuito." }
          ]
        },
        {
          id: "m5-l2",
          title: "Contatores e Relés",
          theory: '<h2>Chaves de Potência</h2><h3>Contator</h3><p>Interruptor eletromagnético para cargas pesadas:</p><ul><li><strong>Bobina:</strong> Energizada, atrai armadura</li><li><strong>Contatos de potência:</strong> Liga/desliga fases</li><li><strong>Contatos auxiliares:</strong> NA e NF para comando</li></ul><h3>Relé Térmico</h3><p>Protege contra sobrecarga prolongada.</p><h3>Temporizador</h3><ul><li><strong>TON:</strong> Atraso para ligar</li><li><strong>TOF:</strong> Atraso para desligar</li></ul>',
          exercises: [
            { type: "multiple-choice", question: "Contator serve para:", choices: ["Medir corrente", "Ligar cargas de potência", "Gerar tensão", "Armazenar"], correct: 1, explanation: "Chave eletromagnética para motores." },
            { type: "multiple-choice", question: "Relé térmico protege contra:", choices: ["Curto-circuito", "Sobrecarga", "Surtos", "Falta de fase"], correct: 1, explanation: "Detecta sobrecarga (aquecimento)." },
            { type: "drag-drop", question: "Associe função:", pieces: ["Contator → Acionar", "Relé → Proteção", "Timer → Atraso"], correctOrder: ["Contator → Acionar", "Relé → Proteção", "Timer → Atraso"], explanation: "Cada componente tem função específica." }
          ]
        },
        {
          id: "m5-l3",
          title: "Partida Direta",
          theory: '<h2>O Circuito Base</h2><h3>Diagrama de Força:</h3><pre>L1 → Disjuntor → Relé → Contator → Motor\nL2 → Disjuntor → Relé → Contator → Motor\nL3 → Disjuntor → Relé → Contator → Motor</pre><h3>Diagrama de Comando:</h3><pre>Fase → NF(Parada) → NA(Liga) → Bobina → Neutro\n                   ↑\n         NA Contator (selo)</pre><p>O <strong>contato de selo</strong> mantém o contator energizado.</p>',
          exercises: [
            { type: "multiple-choice", question: "Contato de selo serve para:", choices: ["Proteger", "Manter contator energizado", "Aumentar corrente", "Inverter"], correct: 1, explanation: "Mantém circuito fechado." },
            { type: "multiple-choice", question: "Relé térmico liga em:", choices: ["Uma fase", "Duas fases", "Três fases", "Neutro"], correct: 2, explanation: "Em todas as três fases." },
            { type: "drag-drop", question: "Ordem do comando:", pieces: ["Fase → Parada", "→ Liga", "→ Bobina", "→ Neutro"], correctOrder: ["Fase → Parada", "→ Liga", "→ Bobina", "→ Neutro"], explanation: "Fase → botões → bobina → neutro." }
          ]
        },
        {
          id: "m5-l4",
          title: "Estrela-Triângulo",
          theory: '<h2>Reduzindo o Pico</h2><h3>Componentes:</h3><ul><li>3 contatores: KM1 (principal), KM2 (estrela), KM3 (triângulo)</li><li>1 relé de sobrecarga</li><li>1 temporizador</li></ul><h3>Sequência:</h3><pre>1. Liga KM1 e KM2 (estrela)\n2. Temporizador conta\n3. Desliga KM2, Liga KM3 (triângulo)\n4. Motor em triângulo</pre><div class="norma-badge">Intertravamento KM2-KM3</div>',
          exercises: [
            { type: "multiple-choice", question: "Partida ocorre em:", choices: ["Triângulo", "Estrela", "Série", "Paralelo"], correct: 1, explanation: "Inicia em estrela." },
            { type: "multiple-choice", question: "Quantos contatores?", choices: ["1", "2", "3", "4"], correct: 2, explanation: "3 contatores." },
            { type: "multiple-choice", question: "Intertravamento KM2-KM3 impede:", choices: ["Partida", "Curto-circuito entre fases", "Quedas", "Sobrecarga"], correct: 1, explanation: "Impede estrela+triângulo juntos." }
          ]
        }
      ]
    },
    {
      id: "m6",
      title: "Automação com CLP",
      description: "Controlador Lógico Programável e Linguagem Ladder",
      icon: "💻",
      color: "#A29BFE",
      lessons: [
        {
          id: "m6-l1",
          title: "O que é um CLP",
          theory: '<h2>O Computador da Indústria</h2><p>O <strong>CLP</strong> é um computador industrial para controle de máquinas.</p><h3>Vantagens:</h3><ul><li>Reprogramação fácil</li><li>Menor espaço</li><li>Comunicação</li><li>Diagnóstico</li></ul><h3>Arquitetura:</h3><pre>Entradas → CPU → Saídas\nSensores    Motores/Válvulas</pre><h3>Tipos:</h3><ul><li><strong>Digitais:</strong> 0 ou 1</li><li><strong>Analógicas:</strong> 4-20mA, 0-10V</li></ul>',
          exercises: [
            { type: "multiple-choice", question: "Vantagem do CLP:", choices: ["Mais barato", "Reprogramação fácil", "Não precisa energia", "Mais rápido"], correct: 1, explanation: "Altera lógica sem modificar fiação." },
            { type: "multiple-choice", question: "Entrada digital recebe:", choices: ["0-10V", "4-20mA", "0 ou 1", "Áudio"], correct: 2, explanation: "Dois estados: ligado/desligado." },
            { type: "fill-blank", code: "Entradas → ____ → Saídas", blanks: [{ answer: "CPU", placeholder: "componente" }], explanation: "CPU processa entradas e controla saídas." }
          ]
        },
        {
          id: "m6-l2",
          title: "Linguagem Ladder",
          theory: '<h2>A Linguagem Mais Popular</h2><h3>Elementos:</h3><ul><li><strong>Contato NA:</strong> -| |-  Passa quando ativo (1)</li><li><strong>Contato NF:</strong> -|/|-  Passa quando inativo (0)</li><li><strong>Bobina:</strong> -( )-  Saída energizável</li></ul><h3>Lógica:</h3><pre>Trilho esq → Contatos → Bobina → Trilho dir</pre><h3>Partida Direta:</h3><pre>--|S1(NF)--| |--|S2(NA)--| (KM1)\n              |           |\n              |--|KM1|--|</pre>',
          exercises: [
            { type: "multiple-choice", question: "Contato NA passa quando:", choices: ["Inativo (0)", "Ativo (1)", "Sempre", "Nunca"], correct: 1, explanation: "NA = Normalmente Aberto, passa em 1." },
            { type: "multiple-choice", question: "Bobina representa:", choices: ["Entrada", "Saída", "Resistor", "Capacitor"], correct: 1, explanation: "Saída do CLP." },
            { type: "fill-blank", code: "Contato ____ passa quando variável = 0", blanks: [{ answer: "NF", placeholder: "tipo" }], explanation: "NF = Normalmente Fechado." }
          ]
        },
        {
          id: "m6-l3",
          title: "Temporizadores e Contadores",
          theory: '<h2>Blocos Funcionais</h2><h3>Temporizadores:</h3><ul><li><strong>TON:</strong> Atraso para ligar</li><li><strong>TOF:</strong> Atraso para desligar</li><li><strong>TP:</strong> Pulso de tempo definido</li></ul><h3>Contadores:</h3><ul><li><strong>CTU:</strong> Contagem crescente</li><li><strong>CTD:</strong> Contagem decrescente</li><li><strong>CTUD:</strong> Contagem dupla</li></ul><p>Contadores incrementam a cada borda de subida da entrada.</p>',
          exercises: [
            { type: "multiple-choice", question: "TON serve para:", choices: ["Desligar com atraso", "Ligar com atraso", "Contar", "Comparar"], correct: 1, explanation: "Timer On-Delay: atraso para ligar." },
            { type: "multiple-choice", question: "CTU é:", choices: ["Contador crescente", "Contador decrescente", "Temporizador", "Comparador"], correct: 0, explanation: "Count Up: conta de baixo para cima." },
            { type: "fill-blank", code: "Timer ____ atrasa o desligamento", blanks: [{ answer: "TOF", placeholder: "timer" }], explanation: "TOF = Timer Off-Delay." }
          ]
        },
        {
          id: "m6-l4",
          title: "Projeto Prático no CLP",
          theory: '<h2>Aplicando o Conhecimento</h2><h3>Exemplo: Controle de Bomba</h3><p>Lógica:</p><ul><li>Bomba liga quando botão IA1 é pressionado</li><li>Bomba permanece ligada por 10 segundos</li><li>Desliga automaticamente</li><li>Lâmpada indica bomba ligada</li></ul><h3>Programa Ladder:</h3><pre>--|IA1|--| |----+-----(Q1)\n               |          |\n               |--|T1|--| |\n\n--|Q1|--(T1, PT=10s)\n\n--|Q1|--(Q2, lâmpada)</pre>',
          exercises: [
            { type: "multiple-choice", question: "Na lógica da bomba, T1 é:", choices: ["Entrada", "Saída", "Temporizador", "Contador"], correct: 2, explanation: "T1 é um temporizador TON de 10s." },
            { type: "multiple-choice", question: "Q2 representa:", choices: ["Botão", "Bomba", "Lâmpada", "Timer"], correct: 2, explanation: "Q2 é a lâmpada indicadora." },
            { type: "drag-drop", question: "Ordem da lógica:", pieces: ["Pressiona IA1", "Liga Q1 (bomba)", "T1 conta 10s", "Desliga Q1"], correctOrder: ["Pressiona IA1", "Liga Q1 (bomba)", "T1 conta 10s", "Desliga Q1"], explanation: "Sequência do controle." }
          ]
        }
      ]
    },
    {
      id: "m7",
      title: "Instrumentação Industrial",
      description: "Sensores, medidas elétricas e malhas de controle",
      icon: "📊",
      color: "#00CEC9",
      lessons: [
        {
          id: "m7-l1",
          title: "Sensores Industriais",
          theory: '<h2>Os Olhos da Automação</h2><h3>Tipos de Sensores:</h3><ul><li><strong>Indutivo:</strong> Detecta metais (distância curta)</li><li><strong>Capacitivo:</strong> Detecta qualquer material (líquidos, plásticos)</li><li><strong>Óptico/ Fotoelétrico:</strong> Detecta presença por luz</li><li><strong>Fim de curso:</strong> Detecção mecânica</li></ul><h3>Saídas:</h3><ul><li><strong>NPN (sink):</strong> Conecta ao terra</li><li><strong>PNP (source):</strong> Conecta à tensão</li></ul><div class="formula-box"><strong>Dica:</strong> Indutivo = metais, Capacitivo = qualquer material</div>',
          exercises: [
            { type: "multiple-choice", question: "Sensor indutivo detecta:", choices: ["Líquidos", "Metais", "Plásticos", "Madeira"], correct: 1, explanation: "Detecta apenas metais." },
            { type: "multiple-choice", question: "Sensor capacitivo detecta:", choices: ["Apenas metais", "Qualquer material", "Apenas líquidos", "Apenas luz"], correct: 1, explanation: "Detecta qualquer material." },
            { type: "fill-blank", code: "Sensor ____ usa luz para detecção", blanks: [{ answer: "óptico", placeholder: "tipo" }], explanation: "Fotoelétrico/óptico usa feixe de luz." }
          ]
        },
        {
          id: "m7-l2",
          title: "Medidas Elétricas",
          theory: '<h2>Medindo Grandezas</h2><h3>Instrumentos:</h3><ul><li><strong>Amperímetro:</strong> Mede corrente (em série)</li><li><strong>Voltímetro:</strong> Mede tensão (em paralelo)</li><li><strong>Wattímetro:</strong> Mede potência</li><li><strong>Megôhmetro:</strong> Mede resistência de isolamento</li></ul><h3>Sinais Analógicos:</h3><pre>4-20mA: Padrão industrial\n0-10V: Comum em instrumentação\nPT100: Sensor de temperatura</pre><div class="formula-box"><strong>4mA = valor mínimo, 20mA = valor máximo</strong></div>',
          exercises: [
            { type: "multiple-choice", question: "Amperímetro é ligado em:", choices: ["Paralelo", "Série", "Série/Paralelo", "Não liga"], correct: 1, explanation: "Em série para medir corrente." },
            { type: "multiple-choice", question: "Sinal 4-20mA significa:", choices: ["4=ligado, 20=desligado", "4=mínimo, 20=máximo", "4=máximo, 20=mínimo", "Não significa nada"], correct: 1, explanation: "4mA é o mínimo, 20mA é o máximo." },
            { type: "fill-blank", code: "Voltímetro mede ____ em paralelo", blanks: [{ answer: "tensão", placeholder: "grandeza" }], explanation: "Voltímetro mede tensão (Volts)." }
          ]
        },
        {
          id: "m7-l3",
          title: "Malha Aberta e Fechada",
          theory: '<h2>Controle de Processos</h2><h3>Malha Aberta:</h3><p>O controlador envia comando sem verificar resultado. Ex: ligar bomba por tempo definido.</p><h3>Malha Fechada (com retroalimentação):</h3><p>O controlador verifica o resultado e ajusta. Ex: manter temperatura constante.</p><h3>Componentes da malha:</h3><ul><li><strong>Sensor:</strong> Mede a variável</li><li><strong>Controlador:</strong> Compara com referência</li><li><strong>Atuador:</strong> Age sobre o processo</li></ul><div class="formula-box"><strong>Malha fechada = controle PID</strong></div>',
          exercises: [
            { type: "multiple-choice", question: "Malha aberta:", choices: ["Tem retroalimentação", "Não verifica resultado", "Usa PID", "É mais precisa"], correct: 1, explanation: "Não verifica o resultado da ação." },
            { type: "multiple-choice", question: "Retroalimentação serve para:", choices: ["Aumentar velocidade", "Verificar resultado", "Diminuir custo", "Simplificar"], correct: 1, explanation: "Permite ajustar com base no resultado real." },
            { type: "drag-drop", question: "Componentes da malha:", pieces: ["Sensor → Mede", "Controlador → Compara", "Atuador → Age"], correctOrder: ["Sensor → Mede", "Controlador → Compara", "Atuador → Age"], explanation: "Sensor mede, controlador compara, atuador age." }
          ]
        }
      ]
    },
    {
      id: "m8",
      title: "Segurança e Proteção",
      description: "NR-10, aterramento e proteção contra descargas atmosféricas",
      icon: "🛡️",
      color: "#636E72",
      lessons: [
        {
          id: "m8-l1",
          title: "NR-10 - Segurança em Eletricidade",
          theory: '<h2>Norma de Segurança</h2><p>A <strong>NR-10</strong> estabelece medidas de segurança para trabalhos em instalações elétricas.</p><h3>Principais itens:</h3><ul><li>Uso de EPI (Equipamento de Proteção Individual)</li><li>Separação de circuitos</li><li>Bloqueio e sinalização (LOTO)</li><li>Trabalho desenerizado</li><li>Acesso restrito a qualificados</li></ul><h3>EPIs obrigatórios:</h3><ul><li>Luvas isolantes</li><li>Óculos de proteção</li><li>Capacete com isolamento</li><li>Calçado de segurança</li></ul><div class="norma-badge">NR-10: Segurança em Instalações e Serviços em Eletricidade</div>',
          exercises: [
            { type: "multiple-choice", question: "NR-10 exige:", choices: ["Trabalho com energia", "EPIs obrigatórios", "Acesso livre", "Sem treinamento"], correct: 1, explanation: "EPIs são obrigatórios." },
            { type: "multiple-choice", question: "LOTO significa:", choices: ["Ligar o sistema", "Bloqueio e sinalização", "Desligar tudo", "Manter ligado"], correct: 1, explanation: "Lockout/Tagout: bloquear e sinalizar." },
            { type: "multiple-choice", question: "Trabalho em eletricidade deve ser feito por:", choices: ["Qualquer pessoa", "Profissional habilitado", "Aprendiz", "Estagiário"], correct: 1, explanation: "Apenas profissionais qualificados." }
          ]
        },
        {
          id: "m8-l2",
          title: "Aterramento",
          theory: '<h2>Proteção contra Choque</h2><p>O <strong>aterramento</strong> conecta partes metálicas ao solo para evitar choque elétrico.</p><h3>Tipos:</h3><ul><li><strong>Neutro de aterramento:</strong> Neutro ligado à terra na entrada</li><li><strong>Condutor de proteção (PE):</strong> Fio verde/amarelo</li><li><strong>Eletrodo de aterramento:</strong> Haste ou malha no solo</li></ul><h3>Resistência máxima:</h3><pre>Aterramento eficaz: ≤ 25Ω\nAterramento de proteção: ≤ 10Ω (recomendado)</pre><div class="formula-box"><strong>O fio terra NUNCA deve ser substituído!</strong></div>',
          exercises: [
            { type: "multiple-choice", question: "Aterramento protege contra:", choices: ["Curto-circuito", "Choque elétrico", "Surtos", "Sobrecarga"], correct: 1, explanation: "Conduz corrente de fuga para o solo." },
            { type: "multiple-choice", question: "Resistência máxima recomendada:", choices: ["50Ω", "25Ω", "10Ω", "1Ω"], correct: 2, explanation: "≤ 10Ω é o recomendado." },
            { type: "fill-blank", code: "Fio terra é ____/amarelo", blanks: [{ answer: "verde", placeholder: "cor" }], explanation: "Verde/amarelo ou apenas verde." }
          ]
        },
        {
          id: "m8-l3",
          title: "Proteção contra Descargas Atmosféricas",
          theory: '<h2>Para-Raios</h2><p>O <strong>PDA</strong> (Proteção contra Descargas Atmosféricas) protege edificações contra raios.</p><h3>Componentes:</h3><ul><li><strong>Captores:</strong> Bastões ou cabos no telhado</li><li><strong>Descidas:</strong> Conduzem a corrente para o solo</li><li><strong>Aterramento:</strong> Dispersa a corrente no solo</li></ul><h3>Método da Esfera Rotativa:</h3><p>Desenha-se uma esfera imaginária rolando sobre o telhado. Onde tocar, precisa de captor.</p><div class="norma-badge">NBR 5419:2015</div>',
          exercises: [
            { type: "multiple-choice", question: "PDA protege contra:", choices: ["Incêndio", "Descargas atmosféricas", "Inundação", "Terremoto"], correct: 1, explanation: "Protege contra raios." },
            { type: "multiple-choice", question: "Captores ficam no:", choices: ["Solo", "Telhado", "Quadro", "Entrada"], correct: 1, explanation: "No telhado para interceptar raios." },
            { type: "drag-drop", question: "Componentes do PDA:", pieces: ["Captores → Telhado", "Descidas → Parede", "Aterramento → Solo"], correctOrder: ["Captores → Telhado", "Descidas → Parede", "Aterramento → Solo"], explanation: "Captores no topo, descidas na lateral, terra no solo." }
          ]
        }
      ]
    }
  ]
};