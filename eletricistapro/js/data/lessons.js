const COURSE_DATA = {
  title: "EletricistaPro",
  subtitle: "Domine a Eletricidade",
  avatar: "⚡",
  modules: [
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 1 â€” FUNDAMENTOS DA ELETRICIDADE
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    moduleId: "M1",
    moduleTitle: "Fundamentos da Eletricidade",
    moduleColor: "#FFD700",
    moduleIcon: "âš¡",
    lessons: [
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L1 â€” O que Ã© Eletricidade
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l1",
        title: "O que Ã© Eletricidade",
        theory: `<h2>O que Ã© Eletricidade</h2>

<h3>DefiniÃ§Ã£o Fundamental</h3>
<p>A eletricidade Ã© o conjunto de fenÃ´menos fÃ­sicos causados pelo movimento ou pela presenÃ§a de <strong>cargas elÃ©tricas</strong>. Em termos prÃ¡ticos, ela Ã© a energia resultante da interaÃ§Ã£o entre partÃ­culas subatÃ´micas com carga elÃ©trica â€” especificamente os <strong>elÃ©trons</strong> (carga negativa) e os <strong>prÃ³tons</strong> (carga positiva) que compÃµem a matÃ©ria.</p>

<h3>Cargas ElÃ©tricas</h3>
<ul>
  <li><strong>Carga negativa:</strong> elÃ©trons â€” partÃ­culas que orbitam o nÃºcleo do Ã¡tomo. SÃ£o mÃ³veis e responsÃ¡veis pelo fluxo de corrente nos condutores metÃ¡licos.</li>
  <li><strong>Carga positiva:</strong> prÃ³tons â€” partÃ­culas fixas no nÃºcleo atÃ´mico. NÃ£o se movem livremente nos condutores.</li>
  <li><strong>Lei de Coulomb:</strong> cargas iguais se repelem, cargas opostas se atraem. A forÃ§a entre duas cargas Ã© proporcional ao produto das cargas e inversamente proporcional ao quadrado da distÃ¢ncia.</li>
  <li><strong>Unidade de carga:</strong> Coulomb (C). Um elÃ©tron possui carga elementar de 1,6 Ã— 10â»Â¹â¹ C.</li>
</ul>

<h3>Corrente Convencional vs Corrente Real</h3>
<ul>
  <li><strong>Corrente convencional:</strong> fluxo de carga positiva do polo positivo para o polo negativo. Ã‰ o padrÃ£o adotado internacionalmente para anÃ¡lise de circuitos.</li>
  <li><strong>Corrente real (eletrÃ´nica):</strong> fluxo de elÃ©trons do polo negativo para o polo positivo. Ã‰ o que realmente acontece nos condutores metÃ¡licos.</li>
  <li>Na prÃ¡tica, <strong>sempre usamos a convenÃ§Ã£o</strong> de corrente do positivo para o negativo. Todas as fÃ³rmulas e instrumentos seguem essa convenÃ§Ã£o.</li>
</ul>

<h3>Fontes de Energia ElÃ©trica</h3>
<ul>
  <li><strong>Corrente ContÃ­nua (CC/DC):</strong> fluxo unidirecional constante. Exemplos: pilhas, baterias, painÃ©is solares, fontes chaveadas. TensÃ£o tÃ­pica: 1,5V (pilhas AA), 12V (baterias automotivas), 24V (industrial).</li>
  <li><strong>Corrente Alternada (CA/AC):</strong> fluxo oscilante em sentidos opostos periÃ³dicamente. No Brasil, frequÃªncia de 60Hz e tensÃ£o de 127V/220V. Ã‰ o tipo distribuÃ­do pelas concessionÃ¡rias.</li>
  <li><strong>Fontes eletromecÃ¢nicas:</strong> geradores que convertem energia mecÃ¢nica em elÃ©trica (usinas hidrelÃ©tricas, eÃ³licas).</li>
  <li><strong>Fontes fotovoltaicas:</strong> painÃ©is solares convertem luz diretamente em eletricidade (efeito fotovoltaico).</li>
</ul>

<h3>AplicaÃ§Ã£o PrÃ¡tica</h3>
<p>A eletricidade estÃ¡ presente em todos os setores: residencial (iluminaÃ§Ã£o, eletrodomÃ©sticos), comercial (refrigeraÃ§Ã£o, informÃ¡tica), industrial (motores, fornos, controle de processos) e de infraestrutura (sinalizaÃ§Ã£o, telecomunicaÃ§Ãµes). Entender seus fundamentos Ã© o primeiro passo para qualquer profissional da Ã¡rea elÃ©trica.</p>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Confundir tensÃ£o com corrente:</strong> tensÃ£o Ã© a "pressÃ£o", corrente Ã© o "fluxo". SÃ£o grandezas distintas.</li>
  <li><strong>Achar que CC e CA sÃ£o equivalentes:</strong> possuem comportamentos muito diferentes em circuitos com capacitores e indutores.</li>
  <li><strong>Ignorar a frequÃªncia:</strong> o valor de 60Hz afeta diretamente o dimensionamento de motores e transformadores.</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Quais sÃ£o as duas cargas elÃ©tricas fundamentais?",
            options: [
              "PrÃ³tons e nÃªutrons",
              "ElÃ©trons e prÃ³tons",
              "FÃ³tons e elÃ©trons",
              "NÃªutrons e fÃ³tons"
            ],
            correctIndex: 1,
            explanation: "As cargas elÃ©tricas fundamentais sÃ£o os elÃ©trons (carga negativa) e os prÃ³tons (carga positiva). Os nÃªutrons sÃ£o neutros."
          },
          {
            type: "multiple-choice",
            question: "Na convenÃ§Ã£o de corrente elÃ©trica, qual Ã© a direÃ§Ã£o do fluxo?",
            options: [
              "Do polo negativo para o positivo (fluxo real de elÃ©trons)",
              "Do polo positivo para o polo negativo (convenÃ§Ã£o adotada)",
              "Em ambos os sentidos simultaneamente",
              "Depende do tipo de condutor"
            ],
            correctIndex: 1,
            explanation: "A convenÃ§Ã£o internacional adota o fluxo de carga positiva, do polo positivo para o polo negativo, mesmo que o fluxo real de elÃ©trons seja no sentido oposto."
          },
          {
            type: "fill-blank",
            question: "No Brasil, a corrente alternada possui frequÃªncia de _____ Hz e tensÃ£o de _____ V.",
            correctAnswers: ["60", "127/220"],
            explanation: "O sistema elÃ©trico brasileiro opera com frequÃªncia de 60Hz e tensÃ£o de 127V (monofÃ¡sico) ou 220V (bifÃ¡sico/trifÃ¡sico)."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a unidade de medida da carga elÃ©trica no Sistema Internacional?",
            options: [
              "AmpÃ¨re (A)",
              "Volt (V)",
              "Coulomb (C)",
              "Watt (W)"
            ],
            correctIndex: 2,
            explanation: "O Coulomb (C) Ã© a unidade de medida de carga elÃ©trica no SI. Um ampÃ¨re Ã© equivalente a um coulomb por segundo."
          },
          {
            type: "calculation",
            question: "Se uma corrente de 5A flui por um condutor durante 10 minutos, qual a carga elÃ©trica total que passou pelo condutor?",
            formulaHint: "Q = I Ã— t (converter minutos para segundos)",
            correctAnswer: 3000,
            unit: "C",
            explanation: "Q = I Ã— t = 5A Ã— (10 Ã— 60s) = 5 Ã— 600 = 3000 C."
          },
          {
            type: "drag-drop",
            question: "Classifique cada fonte de energia como geradora de corrente CONTÃNUA ou ALTERNADA:",
            items: [
              { text: "Pilha alcalina", correctCategory: "CC (ContÃ­nua)" },
              { text: "Bateria de carro", correctCategory: "CC (ContÃ­nua)" },
              { text: "Rede domÃ©stica", correctCategory: "CA (Alternada)" },
              { text: "Gerador eÃ³lico", correctCategory: "CA (Alternada)" },
              { text: "Painel solar fotovoltaico", correctCategory: "CC (ContÃ­nua)" }
            ]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L2 â€” TensÃ£o, Corrente e ResistÃªncia
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l2",
        title: "TensÃ£o, Corrente e ResistÃªncia",
        theory: `<h2>TensÃ£o, Corrente e ResistÃªncia</h2>

<h3>Os TrÃªs Pilares do Circuito ElÃ©trico</h3>
<p>Toda anÃ¡lise elÃ©trica, desde uma instalaÃ§Ã£o residencial atÃ© um sistema de transmissÃ£o, se baseia em trÃªs grandezas fundamentais: <strong>tensÃ£o</strong>, <strong>corrente</strong> e <strong>resistÃªncia</strong>. Compreender cada uma delas â€” e como interagem â€” Ã© essencial.</p>

<h3>TensÃ£o (V)</h3>
<ul>
  <li><strong>DefiniÃ§Ã£o:</strong> diferenÃ§a de potencial elÃ©trico entre dois pontos de um circuito. Ã‰ a "forÃ§a" que empurra os elÃ©trons a se movimentarem.</li>
  <li><strong>Unidade:</strong> Volt (V). 1V Ã© a diferenÃ§a de potencial necessÃ¡ria para mover 1 Coulomb de carga com 1 Joule de energia.</li>
  <li><strong>Analogia hidrÃ¡ulica:</strong> equivalente Ã  <strong>pressÃ£o da Ã¡gua</strong> em um sistema de tubulaÃ§Ãµes. Quanto maior a pressÃ£o, maior o "empuxo" para mover a Ã¡gua.</li>
  <li><strong>Como medir:</strong> multÃ­metro em modo voltmÃ©trico, conectado em PARALELO com o componente ou circuito.</li>
  <li><strong>Exemplos prÃ¡ticos:</strong> pilha 1,5V, bateria 12V, tomada 127V/220V, rede de distribuiÃ§Ã£o 13,8kV.</li>
</ul>

<h3>Corrente (I)</h3>
<ul>
  <li><strong>DefiniÃ§Ã£o:</strong> taxa de fluxo de carga elÃ©trica por unidade de tempo. Ã‰ a quantidade de elÃ©trons que passam por uma seÃ§Ã£o do condutor por segundo.</li>
  <li><strong>Unidade:</strong> AmpÃ¨re (A). 1A = 1 Coulomb por segundo (â‰ˆ 6,24 Ã— 10Â¹â¸ elÃ©trons/s).</li>
  <li><strong>Analogia hidrÃ¡ulica:</strong> equivalente Ã  <strong>vazÃ£o da Ã¡gua</strong> (litros por minuto). Ã‰ o volume real de Ã¡gua que flui pelo cano.</li>
  <li><strong>Como medir:</strong> alicate de corrente (clip) ou multÃ­metro em modo amperomÃ©trico. O alicate mede sem interromper o circuito.</li>
  <li><strong>ClassificaÃ§Ãµes:</strong> atÃ© 1A = microcorrente; 1A a 10A = corrente moderada; acima de 10A = corrente elevada (perigo!).</li>
</ul>

<h3>ResistÃªncia (R)</h3>
<ul>
  <li><strong>DefiniÃ§Ã£o:</strong> propriedade do material que se opÃµe ao fluxo de corrente elÃ©trica. Ã‰ a "obstruÃ§Ã£o" ao fluxo.</li>
  <li><strong>Unidade:</strong> Ohm (Î©). 1Î© Ã© a resistÃªncia que, com 1V de tensÃ£o, produz 1A de corrente.</li>
  <li><strong>Analogia hidrÃ¡ulica:</strong> equivalente Ã  <strong>obstruÃ§Ã£o/retrincamento do cano</strong>. Um cano fino ou entupido oferece mais resistÃªncia ao fluxo da Ã¡gua.</li>
  <li><strong>Fatores que afetam R:</strong> material (condutividade), comprimento (R proporcional a L), Ã¡rea da seÃ§Ã£o (R inversamente proporcional a A), temperatura (metais: R aumenta com T).</li>
  <li><strong>Como medir:</strong> multÃ­metro em modo ohmmÃ©trico, com o circuito DESLIGADO.</li>
</ul>

<h3>RelaÃ§Ã£o entre Grandezas â€” Lei de Ohm</h3>
<pre>
V = R Ã— I    â†’    TensÃ£o = ResistÃªncia Ã— Corrente
R = V / I    â†’    ResistÃªncia = TensÃ£o / Corrente
I = V / R    â†’    Corrente = TensÃ£o / ResistÃªncia
</pre>
<div class="formula-box">TriÃ¢ngulo de Ohm: V no topo, R e I na base. Cubra a grandeza desconhecida para obter a fÃ³rmula correta.</div>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Medir corrente em paralelo:</strong> sempre em sÃ©rie! Em paralelo, o multÃ­metro pode ser danificado.</li>
  <li><strong>Medir tensÃ£o em sÃ©rie:</strong> sempre em paralelo! Em sÃ©rie, a leitura serÃ¡ praticamente zero.</li>
  <li><strong>Confundir condutÃ¢ncia com resistÃªncia:</strong> condutÃ¢ncia (G = 1/R) mede facilidade de fluxo, nÃ£o dificuldade.</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a analogia hidrÃ¡ulica CORRETA para a tensÃ£o elÃ©trica?",
            options: [
              "VazÃ£o da Ã¡gua no cano",
              "PressÃ£o da Ã¡gua nas tubulaÃ§Ãµes",
              "ObstruÃ§Ã£o dentro do cano",
              "DiÃ¢metro do cano"
            ],
            correctIndex: 1,
            explanation: "A tensÃ£o Ã© a 'pressÃ£o' que empurra os elÃ©trons, assim como a pressÃ£o da Ã¡gua empurra a Ã¡gua pelas tubulaÃ§Ãµes."
          },
          {
            type: "fill-blank",
            question: "A corrente elÃ©trica Ã© medida em _____ e deve ser conectada em _____ com o circuito.",
            correctAnswers: ["ampÃ¨re", "sÃ©rie"],
            explanation: "A unidade Ã© o AmpÃ¨re (A) e o multÃ­metro deve ser conectado em sÃ©rie para medir corrente, pois precisa passar toda a corrente pelo instrumento."
          },
          {
            type: "calculation",
            question: "Uma resistÃªncia de 47Î© Ã© conectada a uma fonte de 12V. Qual a corrente que circula?",
            formulaHint: "I = V / R",
            correctAnswer: 0.255,
            unit: "A",
            explanation: "I = V / R = 12V / 47Î© â‰ˆ 0,255A = 255mA."
          },
          {
            type: "multiple-choice",
            question: "Para medir a resistÃªncia de um resistor no circuito, qual a forma CORRETA?",
            options: [
              "Com o circuito energizado e multÃ­metro em paralelo",
              "Com o circuito desligado e multÃ­metro em sÃ©rie",
              "Com o circuito desligado e multÃ­metro nos terminais do resistor",
              "Com o circuito ligado e multÃ­metro nos terminais do resistor"
            ],
            correctIndex: 2,
            explanation: "A resistÃªncia sÃ³ Ã© medida com o circuito DESLIGADO, conectando o multÃ­metro diretamente nos terminais do componente."
          },
          {
            type: "drag-drop",
            question: "Relacione cada grandeza com sua unidade e sÃ­mbolo:",
            items: [
              { text: "TensÃ£o", correctCategory: "Volt (V)" },
              { text: "Corrente", correctCategory: "AmpÃ¨re (A)" },
              { text: "ResistÃªncia", correctCategory: "Ohm (Î©)" },
              { text: "PotÃªncia", correctCategory: "Watt (W)" }
            ]
          },
          {
            type: "calculation",
            question: "Uma lÃ¢mpada de 12V consome 0,5A. Qual Ã© a resistÃªncia da lÃ¢mpada?",
            formulaHint: "R = V / I",
            correctAnswer: 24,
            unit: "Î©",
            explanation: "R = V / I = 12V / 0,5A = 24Î©."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L3 â€” Lei de Ohm
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l3",
        title: "Lei de Ohm",
        theory: `<h2>Lei de Ohm</h2>

<h3>Enunciado da Lei</h3>
<p>A Lei de Ohm, formulada por Georg Simon Ohm em 1827, estabelece que a <strong>corrente elÃ©trica</strong> que circula por um condutor Ã© <strong>diretamente proporcional Ã  tensÃ£o</strong> aplicada e <strong>inversamente proporcional Ã  resistÃªncia</strong> do condutor, desde que as condiÃ§Ãµes fÃ­sicas (temperatura, etc.) permaneÃ§am constantes.</p>

<h3>As TrÃªs Formas da FÃ³rmula</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚              TRIÃ‚NGULO DE OHM               â”‚
â”‚                                             â”‚
â”‚                    V                        â”‚
â”‚                  /     \                    â”‚
â”‚                /         \                  â”‚
â”‚              R    Ã—     I                   â”‚
â”‚                                             â”‚
â”‚  Descubra a grandeza desejada:              â”‚
â”‚  â€¢ V = R Ã— I   (tensÃ£o)                    â”‚
â”‚  â€¢ R = V / I   (resistÃªncia)               â”‚
â”‚  â€¢ I = V / R   (corrente)                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Exemplos PrÃ¡ticos Resolvidos</h3>

<p><strong>Exemplo 1 â€” Encontrando a tensÃ£o:</strong></p>
<p>Um resistor de 10Î© com corrente de 2A:</p>
<pre>V = R Ã— I = 10Î© Ã— 2A = 20V</pre>

<p><strong>Exemplo 2 â€” Encontrando a corrente:</strong></p>
<p>Uma resistÃªncia de 470Î© com tensÃ£o de 12V:</p>
<pre>I = V / R = 12V / 470Î© â‰ˆ 0,0255A = 25,5mA</pre>

<p><strong>Exemplo 3 â€” Encontrando a resistÃªncia:</strong></p>
<p>Uma lÃ¢mpada que consome 0,3A com tensÃ£o de 127V:</p>
<pre>R = V / I = 127V / 0,3A â‰ˆ 423,3Î©</pre>

<p><strong>Exemplo 4 â€” Circuito com bateria 9V:</strong></p>
<p>Qual resistor limitar corrente a 20mA para um LED?</p>
<pre>R = V / I = 9V / 0,020A = 450Î© â†’ usar 470Î© (valor comercial)</pre>

<p><strong>Exemplo 5 â€” TensÃ£o em resistor desconhecido:</strong></p>
<p>Um motor consome 3A e tem resistÃªncia interna de 2Î©:</p>
<pre>V = R Ã— I = 2Î© Ã— 3A = 6V (queda de tensÃ£o no motor)</pre>

<h3>LimitaÃ§Ãµes da Lei de Ohm</h3>
<ul>
  <li><strong>Componentes lineares apenas:</strong> resistores ohmicos seguem a lei. Leds, transistores e lÃ¢mpadas incandescentes NÃƒO sÃ£o lineares.</li>
  <li><strong>Temperatura constante:</strong> a resistÃªncia varia com a temperatura (LDR, termistores).</li>
  <li><strong>Fontes idealizadas:</strong> na prÃ¡tica, fontes tÃªm resistÃªncia interna (Ri), entÃ£o V_real = V_fonte - Ri Ã— I.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Aplicar a lei em LEDs sem resistor limitador:</strong> LEDs tÃªm resistÃªncia dinÃ¢mica baixa â€” sem resistor, a corrente dispara e queima o componente.</li>
  <li><strong>Esquecer a resistÃªncia interna da fonte:</strong> em fontes reais, a tensÃ£o de saÃ­da cai sob carga.</li>
  <li><strong>Usar valores nominais sem verificar potÃªncia:</strong> um resistor de 100Î© com 1A dissiparÃ¡ 100W â€” muito alÃ©m do que um resistor de 1/4W suporta!</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Uma resistÃªncia de 220Î© Ã© conectada a uma fonte de 12V. Qual a corrente que circula?",
            formulaHint: "I = V / R",
            correctAnswer: 0.0545,
            unit: "A",
            explanation: "I = V / R = 12V / 220Î© â‰ˆ 0,0545A = 54,5mA."
          },
          {
            type: "fill-blank",
            question: "A Lei de Ohm Ã© expressa pela fÃ³rmula V = R Ã— I, onde V Ã© _____, R Ã© _____ e I Ã© _____.",
            correctAnswers: ["tensÃ£o", "resistÃªncia", "corrente"],
            explanation: "V = TensÃ£o (Volts), R = ResistÃªncia (Ohms), I = Corrente (AmpÃ¨res). Ã‰ a relaÃ§Ã£o fundamental da eletricidade."
          },
          {
            type: "calculation",
            question: "Qual deve ser o valor de um resistor para limitar a corrente de um LED a 20mA, usando uma bateria de 9V?",
            formulaHint: "R = V / I",
            correctAnswer: 450,
            unit: "Î©",
            explanation: "R = V / I = 9V / 0,020A = 450Î©. Na prÃ¡tica, usa-se um resistor de 470Î© (valor comercial mais prÃ³ximo)."
          },
          {
            type: "multiple-choice",
            question: "Qual das seguintes afirmaÃ§Ãµes sobre a Lei de Ohm Ã© INCORRETA?",
            options: [
              "A corrente Ã© diretamente proporcional Ã  tensÃ£o",
              "A resistÃªncia Ã© inversamente proporcional Ã  corrente",
              "A tensÃ£o Ã© diretamente proporcional Ã  corrente",
              "A Lei de Ohm se aplica a qualquer componente eletrÃ´nico"
            ],
            correctIndex: 3,
            explanation: "A Lei de Ohm NÃƒO se aplica a componentes nÃ£o-lineares como LEDs, transistores e lÃ¢mpadas incandescentes. Ela vale apenas para resistores ohmicos."
          },
          {
            type: "drag-drop",
            question: "Use o triÃ¢ngulo de Ohm para descobrir a fÃ³rmula correta. Relacione a grandeza desejada com a operaÃ§Ã£o matemÃ¡tica:",
            items: [
              { text: "Quero encontrar V", correctCategory: "V = R Ã— I" },
              { text: "Quero encontrar I", correctCategory: "I = V / R" },
              { text: "Quero encontrar R", correctCategory: "R = V / I" }
            ]
          },
          {
            type: "calculation",
            question: "Uma resistÃªncia de 330Î© tem queda de tensÃ£o de 5V. Qual Ã© a corrente que circula?",
            formulaHint: "I = V / R",
            correctAnswer: 0.01515,
            unit: "A",
            explanation: "I = V / R = 5V / 330Î© â‰ˆ 0,01515A = 15,15mA."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L4 â€” PotÃªncia ElÃ©trica
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l4",
        title: "PotÃªncia ElÃ©trica",
        theory: `<h2>PotÃªncia ElÃ©trica</h2>

<h3>O que Ã© PotÃªncia</h3>
<p>PotÃªncia elÃ©trica Ã© a <strong>taxa de consumo ou transformaÃ§Ã£o de energia elÃ©trica</strong> em um intervalo de tempo. Mede quanta energia Ã© convertida por segundo em trabalho Ãºtil (luz, calor, movimento). Ã‰ uma das grandezas mais importantes no dimensionamento de instalaÃ§Ãµes.</p>

<h3>Unidades de PotÃªncia</h3>
<ul>
  <li><strong>Watt (W):</strong> unidade SI de potÃªncia. 1W = 1 Joule por segundo.</li>
  <li><strong>Kilowatt (kW):</strong> 1kW = 1000W. Usado em potÃªncias maiores (motores, chuveiros).</li>
  <li><strong>Cavalo-vapor (CV):</strong> 1CV â‰ˆ 735,5W. Usado na especificaÃ§Ã£o de motores no Brasil.</li>
  <li><strong>Horsepower (HP):</strong> 1HP â‰ˆ 745,7W. PadrÃ£o internacional (EUA).</li>
  <li><strong>ConversÃ£o:</strong> 1CV â‰ˆ 0,986 HP â†’ sÃ£o praticamente equivalentes.</li>
</ul>

<h3>As TrÃªs Formas da FÃ³rmula</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                 FÃ“RMULAS DE POTÃŠNCIA                â”‚
â”‚                                                     â”‚
â”‚  P = V Ã— I      (PotÃªncia = TensÃ£o Ã— Corrente)     â”‚
â”‚  P = R Ã— IÂ²     (PotÃªncia = ResistÃªncia Ã— IÂ²)      â”‚
â”‚  P = VÂ² / R     (PotÃªncia = TensÃ£oÂ² / ResistÃªncia) â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>
<div class="formula-box">Cada forma Ã© Ãºtil em situaÃ§Ãµes diferentes. Use P=VÃ—I quando conhece tensÃ£o e corrente; P=RÃ—IÂ² quando conhece resistÃªncia e corrente; P=VÂ²/R quando conhece tensÃ£o e resistÃªncia.</div>

<h3>Energia vs PotÃªncia</h3>
<ul>
  <li><strong>PotÃªncia (P):</strong> taxa instantÃ¢nea de consumo (Watts). Ã‰ o que o aparelho consome "agora".</li>
  <li><strong>Energia (E):</strong> quantidade total consumida ao longo do tempo (kWh). E = P Ã— t.</li>
  <li><strong>Conta de luz:</strong> a concessionÃ¡ria cobra por ENERGIA consumida em kWh, nÃ£o por potÃªncia.</li>
  <li><strong>Exemplo:</strong> uma chaleira de 1500W ligada por 30 minutos consome 1,5kW Ã— 0,5h = 0,75kWh.</li>
</ul>

<h3>ConversÃ£o de CV para kW e Vice-Versa</h3>
<pre>
CV â†’ kW:  multiplicar por 0,7355
kW â†’ CV:  multiplicar por 1,36
CV â†’ HP:  multiplicar por 0,986
HP â†’ CV:  multiplicar por 1,014
</pre>

<h3>AplicaÃ§Ã£o na PrÃ¡tica â€” Conta de Luz</h3>
<ul>
  <li>Exemplo: geladeira 150W (24h/dia = 3,6kWh/dia), TV 100W (5h/dia = 0,5kWh/dia), chuveiro 5500W (15min/dia = 1,375kWh/dia).</li>
  <li>Total diÃ¡rio â‰ˆ 5,475kWh â†’ mensal â‰ˆ 164kWh.</li>
  <li>Adicione o bandeira tarifÃ¡ria e taxas para estimar o valor final na conta.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Confundir potÃªncia com energia:</strong> potÃªncia Ã© taxa, energia Ã© quantidade total.</li>
  <li><strong>Usar CV em vez de kW sem converter:</strong> na conta de luz, tudo Ã© em kW.</li>
  <li><strong>Desconsiderar fator de potÃªncia em AC:</strong> em motores, P_real = V Ã— I Ã— cos(Ï†). A potÃªncia aparente (VA) Ã© maior que a real (W).</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Uma resistÃªncia de 100Î© tem corrente de 2A. Qual Ã© a potÃªncia dissipada?",
            formulaHint: "P = R Ã— IÂ²",
            correctAnswer: 400,
            unit: "W",
            explanation: "P = R Ã— IÂ² = 100Î© Ã— (2A)Â² = 100 Ã— 4 = 400W."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a diferenÃ§a entre potÃªncia e energia elÃ©trica?",
            options: [
              "SÃ£o a mesma coisa",
              "PotÃªncia Ã© a taxa de consumo, energia Ã© o total consumido no tempo",
              "PotÃªncia Ã© medida em kWh e energia em W",
              "PotÃªncia Ã© apenas para motores e energia para resistÃªncias"
            ],
            correctIndex: 1,
            explanation: "PotÃªncia (W) Ã© a taxa instantÃ¢nea de consumo. Energia (kWh) Ã© a quantidade total consumida ao longo do tempo (E = P Ã— t)."
          },
          {
            type: "fill-blank",
            question: "1 cavalo-vapor (CV) equivale a aproximadamente _____ Watts.",
            correctAnswers: ["735,5", "735.5"],
            explanation: "1 CV = 735,5W (padrÃ£o tÃ©cnico brasileiro). Ã‰ usado na especificaÃ§Ã£o de motores elÃ©tricos."
          },
          {
            type: "calculation",
            question: "Uma chuveiro elÃ©trico de 5500W Ã© ligado por 20 minutos por dia. Quanto de energia (kWh) ele consome por dia?",
            formulaHint: "E = P Ã— t (converter minutos para horas)",
            correctAnswer: 1.833,
            unit: "kWh",
            explanation: "E = P Ã— t = 5,5kW Ã— (20/60)h = 5,5 Ã— 0,333 = 1,833kWh."
          },
          {
            type: "drag-drop",
            question: "Relacione cada unidade com sua grandeza elÃ©trica:",
            items: [
              { text: "Watt (W)", correctCategory: "PotÃªncia" },
              { text: "Coulomb (C)", correctCategory: "Carga elÃ©trica" },
              { text: "kWh", correctCategory: "Energia" },
              { text: "AmpÃ¨re (A)", correctCategory: "Corrente" }
            ]
          },
          {
            type: "calculation",
            question: "Um motor de 2CV possui eficiÃªncia de 80%. Qual a potÃªncia elÃ©trica consumida em kW?",
            formulaHint: "P_entrada = P_saida / eficiÃªncia; 1CV = 0,7355kW",
            correctAnswer: 1.83875,
            unit: "kW",
            explanation: "P_saÃ­da = 2CV Ã— 0,7355 = 1,471kW. P_entrada = 1,471 / 0,8 = 1,83875kW."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L5 â€” Circuitos em SÃ©rie
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l5",
        title: "Circuitos em SÃ©rie",
        theory: `<h2>Circuitos em SÃ©rie</h2>

<h3>Conceito</h3>
<p>Em um circuito em sÃ©rie, todos os componentes estÃ£o conectados em <strong>um Ãºnico caminho</strong> para o fluxo de corrente. NÃ£o hÃ¡ ramificaÃ§Ãµes â€” a corrente que sai da fonte passa por todos os componentes, um apÃ³s o outro, e retorna Ã  fonte.</p>

<h3>Regras Fundamentais</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                   CIRCUITO EM SÃ‰RIE                         â”‚
â”‚                                                              â”‚
â”‚  Fonte (+) â”€â”€ R1 â”€â”€ R2 â”€â”€ R3 â”€â”€ Fonte (-)                  â”‚
â”‚                                                              â”‚
â”‚  â€¢ R_total = R1 + R2 + R3 + ... + Rn                       â”‚
â”‚  â€¢ I_total = I1 = I2 = I3 = ... = In  (corrente igual)     â”‚
â”‚  â€¢ V_total = V1 + V2 + V3 + ... + Vn  (tensÃµes somam)      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>
<div class="formula-box">ResistÃªncia total: soma de todas as resistÃªncias. Corrente: igual em todos os pontos. TensÃ£o: distribui-se entre os resistores proporcionalmente Ã  sua resistÃªncia.</div>

<h3>Divisor de TensÃ£o</h3>
<pre>
V_x = V_total Ã— (R_x / R_total)

Exemplo: V_total = 12V, R1 = 100Î©, R2 = 200Î©
R_total = 300Î©
V_R1 = 12V Ã— (100/300) = 4V
V_R2 = 12V Ã— (200/300) = 8V
VerificaÃ§Ã£o: 4V + 8V = 12V âœ“
</pre>

<h3>Exemplo Completo com 3 Resistores</h3>
<pre>
Fonte: 24V | R1 = 100Î©, R2 = 220Î©, R3 = 330Î©

R_total = 100 + 220 + 330 = 650Î©
I = V / R_total = 24V / 650Î© = 0,0369A = 36,9mA
V_R1 = 36,9mA Ã— 100Î© = 3,69V
V_R2 = 36,9mA Ã— 220Î© = 8,12V
V_R3 = 36,9mA Ã— 330Î© = 12,19V
VerificaÃ§Ã£o: 3,69 + 8,12 + 12,19 = 24V âœ“
</pre>

<h3>AplicaÃ§Ãµes PrÃ¡ticas</h3>
<ul>
  <li><strong>Divisores de tensÃ£o:</strong> circuitos que precisam de tensÃµes especÃ­ficas a partir de uma fonte comum.</li>
  <li><strong>Leds em sÃ©rie:</strong> permite usar vÃ¡rios LEDs com uma Ãºnica fonte de tensÃ£o maior.</li>
  <li><strong>Resistores de proteÃ§Ã£o:</strong> limitadores de corrente em circuitos de sinal.</li>
  <li><strong>Sensores:</strong> muitos sensores de temperatura (NTC/PTC) usam configuraÃ§Ã£o de divisor de tensÃ£o.</li>
</ul>

<h3>Desvantagens</h3>
<ul>
  <li><strong>Ponto Ãºnico de falha:</strong> se qualquer componente quebrar (circuito aberto), toda a corrente cai e o circuito para completamente.</li>
  <li><strong>TensÃ£o indesejada:</strong> os componentes dividem a tensÃ£o disponÃ­vel, o que pode ser problemÃ¡tico.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Somar resistÃªncias em paralelo como se fossem sÃ©rie:</strong> atenÃ§Ã£o ao tipo de ligaÃ§Ã£o!</li>
  <li><strong>Esquecer que a corrente Ã© igual em todos os pontos:</strong> Ã© a regra mais importante do circuito sÃ©rie.</li>
  <li><strong>NÃ£o verificar a tensÃ£o mÃ­nima:</strong> ao colocar LEDs em sÃ©rie, a soma das tensÃµes diretas nÃ£o pode ultrapassar a fonte.</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "TrÃªs resistores de 100Î©, 220Î© e 330Î© estÃ£o em sÃ©rie. Qual a resistÃªncia total?",
            formulaHint: "R_total = R1 + R2 + R3",
            correctAnswer: 650,
            unit: "Î©",
            explanation: "R_total = 100 + 220 + 330 = 650Î©."
          },
          {
            type: "calculation",
            question: "Uma fonte de 12V alimenta dois resistores em sÃ©rie: R1 = 300Î© e R2 = 600Î©. Qual a tensÃ£o em R1?",
            formulaHint: "V1 = V_total Ã— (R1 / R_total)",
            correctAnswer: 4,
            unit: "V",
            explanation: "R_total = 300 + 600 = 900Î©. V1 = 12V Ã— (300/900) = 12V Ã— (1/3) = 4V."
          },
          {
            type: "multiple-choice",
            question: "Em um circuito em sÃ©rie com 3 resistores, se a corrente no primeiro resistor Ã© 50mA, qual Ã© a corrente no terceiro resistor?",
            options: [
              "150mA (soma)",
              "16,7mA (divisÃ£o)",
              "50mA (igual)",
              "Depende do valor das resistÃªncias"
            ],
            correctIndex: 2,
            explanation: "Em sÃ©rie, a corrente Ã© IGUAL em todos os componentes. Se Ã© 50mA no primeiro, serÃ¡ 50mA em todos."
          },
          {
            type: "fill-blank",
            question: "Em um circuito em sÃ©rie, a resistÃªncia total Ã© igual Ã  _____ das resistÃªncias individuais.",
            correctAnswers: ["soma"],
            explanation: "R_total = R1 + R2 + R3 + ... + Rn. As resistÃªncias sempre se somam em ligaÃ§Ã£o sÃ©rie."
          },
          {
            type: "drag-drop",
            question: "Em um circuito em sÃ©rie, classifique cada afirmaÃ§Ã£o como VERDADEIRA ou FALSA:",
            items: [
              { text: "A corrente Ã© igual em todos os pontos", correctCategory: "Verdadeira" },
              { text: "A tensÃ£o se divide entre os resistores", correctCategory: "Verdadeira" },
              { text: "Se um resistor quebrar, os outros continuam funcionando", correctCategory: "Falsa" },
              { text: "A resistÃªncia total Ã© a soma das individuais", correctCategory: "Verdadeira" }
            ]
          },
          {
            type: "calculation",
            question: "Uma fonte de 24V alimenta dois resistores em sÃ©rie: R1 = 1kÎ© e R2 = 2kÎ©. Qual a corrente no circuito?",
            formulaHint: "I = V / R_total",
            correctAnswer: 0.008,
            unit: "A",
            explanation: "R_total = 1000 + 2000 = 3000Î©. I = 24V / 3000Î© = 0,008A = 8mA."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L6 â€” Circuitos em Paralelo
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l6",
        title: "Circuitos em Paralelo",
        theory: `<h2>Circuitos em Paralelo</h2>

<h3>Conceito</h3>
<p>Em um circuito em paralelo, todos os componentes estÃ£o conectados entre os <strong>mesmos dois pontos</strong> (nÃ³s). A corrente se divide entre os ramos, mas a tensÃ£o Ã© a mesma em todos eles. Ã‰ a ligaÃ§Ã£o padrÃ£o nas instalaÃ§Ãµes residenciais e comerciais.</p>

<h3>Regras Fundamentais</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                   CIRCUITO EM PARALELO                        â”‚
â”‚                                                                â”‚
â”‚        â”Œâ”€â”€ R1 â”€â”€â”                                              â”‚
â”‚   â”€â”€â”€â”€â”€â”¤â”€â”€ R2 â”€â”€â”œâ”€â”€â”€â”€â”€                                        â”‚
â”‚        â””â”€â”€ R3 â”€â”€â”˜                                              â”‚
â”‚                                                                â”‚
â”‚  1/R_total = 1/R1 + 1/R2 + 1/R3 + ... + 1/Rn               â”‚
â”‚  V_total = V1 = V2 = V3 = ... = Vn  (tensÃ£o igual)           â”‚
â”‚  I_total = I1 + I2 + I3 + ... + In  (correntes somam)         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>
<div class="formula-box">ResistÃªncia total: o inverso da soma dos inversos. TensÃ£o: igual em todos os ramos. Corrente: distribui-se entre os ramos proporcionalmente Ã  condutÃ¢ncia.</div>

<h3>Dois Resistores em Paralelo (FÃ³rmula RÃ¡pida)</h3>
<pre>
R_total = (R1 Ã— R2) / (R1 + R2)

Exemplo: R1 = 100Î©, R2 = 200Î©
R_total = (100 Ã— 200) / (100 + 200) = 20000 / 300 = 66,67Î©
</pre>

<h3>Divisor de Corrente</h3>
<pre>
I_x = I_total Ã— (R_total / R_x)

Ou equivalente: I_x = V / R_x (pois V Ã© igual em todos os ramos)

Exemplo: Fonte 12V, R1 = 100Î©, R2 = 200Î©
I1 = 12V / 100Î© = 0,12A = 120mA
I2 = 12V / 200Î© = 0,06A = 60mA
I_total = 120 + 60 = 180mA
VerificaÃ§Ã£o: R_total = 66,67Î©, I = 12V / 66,67Î© = 0,18A = 180mA âœ“
</pre>

<h3>Exemplo Completo com 3 Resistores</h3>
<pre>
Fonte: 12V | R1 = 60Î©, R2 = 120Î©, R3 = 40Î©

1/R_total = 1/60 + 1/120 + 1/40 = 2/120 + 1/120 + 3/120 = 6/120
R_total = 120/6 = 20Î©

I1 = 12V / 60Î© = 200mA
I2 = 12V / 120Î© = 100mA
I3 = 12V / 40Î© = 300mA
I_total = 200 + 100 + 300 = 600mA = 0,6A

VerificaÃ§Ã£o: I = 12V / 20Î© = 0,6A âœ“
</pre>

<h3>Tabela Comparativa: SÃ©rie vs Paralelo</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   CaracterÃ­stica â”‚      SÃ‰RIE         â”‚     PARALELO       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ ResistÃªncia      â”‚ R1 + R2 + R3      â”‚ 1/(1/R1+1/R2+1/R3)â”‚
â”‚ Corrente         â”‚ I igual em todos   â”‚ I se divide        â”‚
â”‚ TensÃ£o           â”‚ V se divide        â”‚ V igual em todos   â”‚
â”‚ Ponto de falha   â”‚ Um para todos      â”‚ Independentemente  â”‚
â”‚ Uso residencial  â”‚ Raramente          â”‚ PadrÃ£o (tomadas)   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>AplicaÃ§Ãµes PrÃ¡ticas</h3>
<ul>
  <li><strong>InstalaÃ§Ãµes residenciais:</strong> todas as tomadas e lÃ¢mpadas estÃ£o em paralelo para receber a mesma tensÃ£o da rede.</li>
  <li><strong>Baterias em paralelo:</strong> aumenta a capacidade (Ah) mantendo a mesma tensÃ£o.</li>
  <li><strong>DivisÃ£o de carga:</strong> ao adicionar equipamentos, a corrente total aumenta.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Esquecer que R_total sempre Ã© MENOR que a menor resistÃªncia individual:</strong> Ã© uma boa verificaÃ§Ã£o mental.</li>
  <li><strong>Somar correntes ao invÃ©s de resistÃªncias:</strong> em paralelo, correntes somam, resistÃªncias nÃ£o!</li>
  <li><strong>Sobrecarregar um ramo:</strong> cada ramo pode suportar corrente diferente, mas o disjuntor Ã© dimensionado pela corrente total.</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Dois resistores de 100Î© e 200Î© estÃ£o em paralelo. Qual a resistÃªncia total?",
            formulaHint: "R_total = (R1 Ã— R2) / (R1 + R2)",
            correctAnswer: 66.67,
            unit: "Î©",
            explanation: "R_total = (100 Ã— 200) / (100 + 200) = 20000 / 300 = 66,67Î©."
          },
          {
            type: "multiple-choice",
            question: "Em um circuito paralelo com 3 resistores idÃªnticos de 300Î©, qual Ã© a resistÃªncia total?",
            options: [
              "900Î©",
              "100Î©",
              "300Î©",
              "33,3Î©"
            ],
            correctIndex: 1,
            explanation: "R_total = 300Î© / 3 = 100Î©. Para n resistores iguais em paralelo, R_total = R/n."
          },
          {
            type: "calculation",
            question: "Uma fonte de 12V alimenta 3 resistores em paralelo: R1 = 60Î©, R2 = 120Î©, R3 = 40Î©. Qual a corrente total?",
            formulaHint: "I = I1 + I2 + I3",
            correctAnswer: 0.6,
            unit: "A",
            explanation: "I1 = 12/60 = 0,2A; I2 = 12/120 = 0,1A; I3 = 12/40 = 0,3A. I_total = 0,2 + 0,1 + 0,3 = 0,6A."
          },
          {
            type: "fill-blank",
            question: "Em um circuito em paralelo, a resistÃªncia total Ã© sempre _____ que a menor resistÃªncia individual.",
            correctAnswers: ["menor", "inferior", "menos"],
            explanation: "Em paralelo, R_total < R_menor. Isso Ã© uma propriedade fundamental: sempre reduz a resistÃªncia total."
          },
          {
            type: "drag-drop",
            question: "Classifique cada afirmaÃ§Ã£o como referente ao circuito SÃ‰RIE ou PARALELO:",
            items: [
              { text: "A corrente Ã© igual em todos os componentes", correctCategory: "SÃ©rie" },
              { text: "A tensÃ£o Ã© igual em todos os componentes", correctCategory: "Paralelo" },
              { text: "Se um componente quebra, todos param", correctCategory: "SÃ©rie" },
              { text: "Usado nas instalaÃ§Ãµes residenciais", correctCategory: "Paralelo" }
            ]
          },
          {
            type: "calculation",
            question: "Quatro resistores de 200Î© cada estÃ£o em paralelo. Qual a resistÃªncia total?",
            formulaHint: "Para resistores iguais: R_total = R / n",
            correctAnswer: 50,
            unit: "Î©",
            explanation: "R_total = 200Î© / 4 = 50Î©."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M1-L7 â€” Circuitos MISTOS
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m1-l7",
        title: "Circuitos MISTOS",
        theory: `<h2>Circuitos MISTOS (SÃ©rie-Paralelo)</h2>

<h3>O que sÃ£o Circuitos MISTOS</h3>
<p>Circuitos mistos combinam <strong>ligaÃ§Ãµes em sÃ©rie e em paralelo</strong> na mesma configuraÃ§Ã£o. SÃ£o os circuitos mais comuns na prÃ¡tica â€” raramente um circuito real Ã© puramente sÃ©rie ou puramente paralelo. A anÃ¡lise exige reduzir o circuito etapa por etapa, identificando quais partes estÃ£o em sÃ©rie e quais em paralelo.</p>

<h3>MÃ©todo Passo a Passo</h3>
<ol>
  <li><strong>Identifique os nÃ³s:</strong> marque os pontos onde a corrente se divide (nÃ³s) e onde se reÃºne.</li>
  <li><strong>Identifique ramos em paralelo:</strong> componentes entre os mesmos dois nÃ³s estÃ£o em paralelo.</li>
  <li><strong>Reduza os paralelos:</strong> calcule a resistÃªncia equivalente de cada grupo paralelo.</li>
  <li><strong>Reduza os sÃ©ries:</strong> some as resistÃªncias que ficaram em sÃ©rie apÃ³s a reduÃ§Ã£o.</li>
  <li><strong>Calcule a corrente total:</strong> use V_total / R_total.</li>
  <li><strong>RefaÃ§a os passos reversamente:</strong> encontre tensÃµes e correntes em cada componente.</li>
</ol>

<h3>Exemplo Completo Resolvido</h3>
<pre>
Circuito: Fonte 24V
- R1 = 100Î© em sÃ©rie com o restante
- R2 = 200Î© e R3 = 200Î© em paralelo entre si

PASSO 1: Reduzir paralelo (R2 || R3)
R23 = (R2 Ã— R3) / (R2 + R3) = (200 Ã— 200) / (200 + 200) = 40000 / 400 = 100Î©

PASSO 2: R_total = R1 + R23 = 100 + 100 = 200Î©

PASSO 3: I_total = V / R_total = 24V / 200Î© = 0,12A = 120mA

PASSO 4: TensÃµes e correntes
- V_R1 = I_total Ã— R1 = 0,12A Ã— 100Î© = 12V
- V_R23 = I_total Ã— R23 = 0,12A Ã— 100Î© = 12V (ou 24V - 12V = 12V)
- V_R2 = V_R3 = V_R23 = 12V (paralelo: tensÃ£o igual)
- I_R2 = 12V / 200Î© = 60mA
- I_R3 = 12V / 200Î© = 60mA

VerificaÃ§Ã£o: I_R2 + I_R3 = 60 + 60 = 120mA = I_total âœ“
</pre>

<h3>Dica de VisualizaÃ§Ã£o</h3>
<ul>
  <li><strong>"Colapsar" o circuito:</strong> imagine "juntando" os resistores paralelos em um Ãºnico equivalente, transformando o circuito em sÃ©rie puro.</li>
  <li><strong>Use cores:</strong> marque os nÃ³s com cores diferentes para identificar visualmente quais componentes compartilham o mesmo nÃ³.</li>
  <li><strong>Verifique sempre:</strong> a soma das tensÃµes nos componentes em sÃ©rie deve ser igual Ã  tensÃ£o da fonte. A soma das correntes nos ramos paralelos deve ser igual Ã  corrente total.</li>
</ul>

<h3>Exemplo 2 â€” Circuitos com Mais Etapas</h3>
<pre>
Fonte 12V â†’ R1 (100Î©) â†’ [R2 (300Î©) || R3 (600Î©)] â†’ R4 (200Î©) â†’ retorno

R23 = (300 Ã— 600) / (300 + 600) = 180000 / 900 = 200Î©
R_total = 100 + 200 + 200 = 500Î©
I_total = 12V / 500Î© = 0,024A = 24mA

V_R1 = 24mA Ã— 100Î© = 2,4V
V_R23 = 24mA Ã— 200Î© = 4,8V
V_R4 = 24mA Ã— 200Î© = 4,8V
VerificaÃ§Ã£o: 2,4 + 4,8 + 4,8 = 12V âœ“
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Tentar resolver tudo de uma vez:</strong> sempre reduza etapa por etapa.</li>
  <li><strong>Confundir sÃ©rie com paralelo no meio do circuito:</strong> trace os fios mentalmente para ver entre quais nÃ³s cada componente estÃ¡ conectado.</li>
  <li><strong>Esquecer que componentes em paralelo tÃªm a mesma tensÃ£o:</strong> Ã© a chave para resolver os Ãºltimos passos.</li>
  <li><strong>NÃ£o verificar o resultado:</strong> sempre confirme que V_total = soma das V parciais e I_total = soma dos I parciais.</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Em um circuito misto, R1 = 100Î© estÃ¡ em sÃ©rie com o paralelo de R2 = 200Î© e R3 = 200Î©. Qual a resistÃªncia total?",
            formulaHint: "Primeiro R2||R3, depois some com R1",
            correctAnswer: 200,
            unit: "Î©",
            explanation: "R23 = (200 Ã— 200)/(200 + 200) = 100Î©. R_total = 100 + 100 = 200Î©."
          },
          {
            type: "calculation",
            question: "Uma fonte de 24V alimenta o circuito anterior (R1=100Î© em sÃ©rie com R2||R3=100Î©). Qual a corrente total?",
            formulaHint: "I = V / R_total",
            correctAnswer: 0.12,
            unit: "A",
            explanation: "I = 24V / 200Î© = 0,12A = 120mA."
          },
          {
            type: "multiple-choice",
            question: "Ao resolver um circuito misto, qual Ã© a primeira etapa recomendada?",
            options: [
              "Calcular a corrente total imediatamente",
              "Identificar e reduzir os grupos de resistores em paralelo",
              "Somar todas as resistÃªncias do circuito",
              "Medir a tensÃ£o em cada resistor"
            ],
            correctIndex: 1,
            explanation: "O mÃ©todo correto Ã© reduzir primeiro os grupos em paralelo (ou sÃ©rie, conforme o caso), simplificando o circuito etapa por etapa."
          },
          {
            type: "fill-blank",
            question: "A soma das tensÃµes em um circuito sÃ©rie deve ser igual Ã  _____ da fonte.",
            correctAnswers: ["tensÃ£o"],
            explanation: "Lei de Kirchhoff das tensÃµes: a soma das quedas de tensÃ£o em um laÃ§o Ã© igual Ã  tensÃ£o aplicada pela fonte."
          },
          {
            type: "drag-drop",
            question: "Ordene os passos para resolver um circuito misto:",
            items: [
              { text: "Passo 1", correctCategory: "Identificar os nÃ³s e ramos" },
              { text: "Passo 2", correctCategory: "Reduzir paralelos" },
              { text: "Passo 3", correctCategory: "Calcular R_total" },
              { text: "Passo 4", correctCategory: "Calcular I_total" }
            ]
          },
          {
            type: "calculation",
            question: "No circuito misto com fonte 24V, R1=100Î© em sÃ©rie com (R2=200Î© || R3=200Î©), qual a tensÃ£o em R1?",
            formulaHint: "V_R1 = I_total Ã— R1",
            correctAnswer: 12,
            unit: "V",
            explanation: "I_total = 0,12A. V_R1 = 0,12A Ã— 100Î© = 12V."
          }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 2 â€” INSTALAÃ‡Ã•ES RESIDENCIAIS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    moduleId: "M2",
    moduleTitle: "InstalaÃ§Ãµes Residenciais",
    moduleColor: "#6C5CE7",
    moduleIcon: "ðŸ ",
    lessons: [
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L1 â€” Norma NBR 5410
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l1",
        title: "Norma NBR 5410",
        theory: `<h2>Norma NBR 5410 â€” InstalaÃ§Ãµes ElÃ©tricas de Baixa TensÃ£o</h2>

<h3>O que Regulamenta</h3>
<p>A NBR 5410 Ã© a norma brasileira que estabelece os <strong>requisitos tÃ©cnicos para instalaÃ§Ãµes elÃ©tricas de baixa tensÃ£o</strong> (BT) â€” aquelas com tensÃ£o nominal atÃ© <strong>1000V em corrente alternada (CA)</strong> ou atÃ© <strong>1500V em corrente contÃ­nua (CC)</strong>. Ela Ã© de cumprimento obrigatÃ³rio e abrange desde projetos atÃ© a manutenÃ§Ã£o de instalaÃ§Ãµes elÃ©tricas.</p>

<h3>Escopo e Aplicabilidade</h3>
<ul>
  <li><strong>ResidÃªncias:</strong> casas, apartamentos, condomÃ­nios â€” Ã© a norma mais aplicada no dia a dia do eletricista residencial.</li>
  <li><strong>ComÃ©rcios:</strong> lojas, escritÃ³rios, shopping centers, restaurantes.</li>
  <li><strong>IndÃºstrias:</strong> fÃ¡bricas, galpÃµes, oficinas (quando em BT).</li>
  <li><strong>EdifÃ­cios pÃºblicos:</strong> escolas, hospitais, prÃ©dios governamentais.</li>
  <li><strong>NÃƒO se aplica:</strong> instalaÃ§Ãµes de alta tensÃ£o, minas, embarcaÃ§Ãµes, instalaÃ§Ãµes veiculares, redes de distribuiÃ§Ã£o.</li>
</ul>

<h3>ClassificaÃ§Ã£o por Grau de Risco</h3>
<div class="norma-badge">NBR 5410 â€” Graus de Risco</div>
<ul>
  <li><strong>Grau I â€” Baixo risco:</strong> locais secos, sem risco de choque ou incÃªndio. Exemplos: salas residenciais secas, escritÃ³rios, salas de aula.</li>
  <li><strong>Grau II â€” MÃ©dio risco:</strong> locais com umidade moderada ou risco moderado. Exemplos: cozinhas, banheiros (fora da zona de banho), garagens, lavanderias.</li>
  <li><strong>Grau III â€” Alto risco:</strong> locais com alta umidade, risco de choque ou incÃªndio. Exemplos: box de banho, chuveiros, piscinas, instalaÃ§Ãµes externas, canteiros de obras.</li>
</ul>

<h3>Sistemas de DistribuiÃ§Ã£o</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  SISTEMAS TRIFÃSICOS COMUNS NO BRASIL                           â”‚
â”‚                                                                 â”‚
â”‚  TN-S: 3 fases + neutro + terra (separados)                    â”‚
â”‚    â†’ PadrÃ£o residencial e comercial                            â”‚
â”‚    â†’ Fios N e PE sÃ£o separados desde a entrada                  â”‚
â”‚                                                                 â”‚
â”‚  TN-C: 3 fases + PEN (neutro e terra combinados)               â”‚
â”‚    â†’ Em desuso, menos seguro                                    â”‚
â”‚                                                                 â”‚
â”‚  TT:   3 fases + neutro + terra local                           â”‚
â”‚    â†’ Comum em instalaÃ§Ãµes rurais                                â”‚
â”‚                                                                 â”‚
â”‚  IT:   Isolado da terra (com ou sem impedÃ¢ncia)                 â”‚
â”‚    â†’ Hospitais, industria crÃ­tica (continuidade)                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Dispositivos de ProteÃ§Ã£o ObrigatÃ³rios</h3>
<ul>
  <li><strong>Disjuntor geral:</strong> proteÃ§Ã£o contra sobrecarga e curto-circuito.</li>
  <li><strong>DR (Dispositivo Residual):</strong> proteÃ§Ã£o contra choques e fugas de corrente (mÃ­nimo 30mA para circuitos de uso humano).</li>
  <li><strong>DPS (Dispositivo de ProteÃ§Ã£o contra Surto):</strong> proteÃ§Ã£o contra surtos de tensÃ£o (raios, manobras da concessionÃ¡ria).</li>
  <li><strong>Barramento de proteÃ§Ã£o (PE):</strong> terra vinculada a todas as partes metÃ¡licas acessÃ­veis.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Ignorar a classificaÃ§Ã£o de risco:</strong> determina o tipo de proteÃ§Ã£o e os materiais adequados para cada ambiente.</li>
  <li><strong>NÃ£o instalar DR:</strong> a NBR 5410 exige DR para circuitos em Ã¡reas molhadas e para proteÃ§Ã£o de pessoas.</li>
  <li><strong>Usar materiais inadequados para o grau de risco:</strong> ex: caixa de PVC em ambiente com risco de incÃªndio.</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "AtÃ© qual tensÃ£o a NBR 5410 se aplica em corrente alternada?",
            options: [
              "220V",
              "380V",
              "1000V",
              "13.800V"
            ],
            correctIndex: 2,
            explanation: "A NBR 5410 cobre instalaÃ§Ãµes de baixa tensÃ£o atÃ© 1000V em corrente alternada (CA) ou 1500V em corrente contÃ­nua (CC)."
          },
          {
            type: "multiple-choice",
            question: "Um banheiro comum (fora do box de banho) Ã© classificado em qual grau de risco?",
            options: [
              "Grau I (baixo)",
              "Grau II (mÃ©dio)",
              "Grau III (alto)",
              "NÃ£o Ã© classificado"
            ],
            correctIndex: 1,
            explanation: "Banheiros (fora da zona de banho) sÃ£o classificados como Grau II â€” mÃ©dio risco, devido Ã  umidade moderada."
          },
          {
            type: "fill-blank",
            question: "O sistema TN-S possui _____ fases, _____ neutro e _____ terra, todos _____.",
            correctAnswers: ["3", "1", "1", "separados"],
            explanation: "O sistema TN-S possui 3 fases + 1 neutro + 1 terra, todos separados desde a entrada. Ã‰ o padrÃ£o residencial brasileiro."
          },
          {
            type: "drag-drop",
            question: "Classifique os seguintes ambientes quanto ao grau de risco NBR 5410:",
            items: [
              { text: "Sala de estar seca", correctCategory: "Grau I (Baixo)" },
              { text: "Cozinha", correctCategory: "Grau II (MÃ©dio)" },
              { text: "Box de banho", correctCategory: "Grau III (Alto)" },
              { text: "EscritÃ³rio", correctCategory: "Grau I (Baixo)" },
              { text: "Lavanderia", correctCategory: "Grau II (MÃ©dio)" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Qual dos seguintes dispositivos Ã© OBRIGATÃ“RIO para proteÃ§Ã£o contra choques em circuitos de Ã¡reas molhadas?",
            options: [
              "Disjuntor termomagnÃ©tico",
              "DR (Dispositivo Residual)",
              "DPS (Dispositivo de ProteÃ§Ã£o contra Surto)",
              "RelÃ© de sobre-tensÃ£o"
            ],
            correctIndex: 1,
            explanation: "O DR Ã© obrigatÃ³rio para proteÃ§Ã£o de pessoas contra choques elÃ©tricos e fugas de corrente, especialmente em Ã¡reas molhadas."
          },
          {
            type: "calculation",
            question: "Uma instalaÃ§Ã£o residencial trifÃ¡sica 380/220V tem disjuntor geral de 40A. Qual a potÃªncia mÃ¡xima que pode ser instalada?",
            formulaHint: "P = âˆš3 Ã— Vf Ã— I (trifÃ¡sico) ou P = 3 Ã— Vf Ã— I",
            correctAnswer: 26359,
            unit: "W",
            explanation: "P = âˆš3 Ã— 380V Ã— 40A = 1,732 Ã— 380 Ã— 40 â‰ˆ 26.359W = 26,36kW."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L2 â€” Circuitos de IluminaÃ§Ã£o
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l2",
        title: "Circuitos de IluminaÃ§Ã£o",
        theory: `<h2>Circuitos de IluminaÃ§Ã£o</h2>

<h3>CaracterÃ­sticas Gerais</h3>
<p>Os circuitos de iluminaÃ§Ã£o sÃ£o os mais numerosos em uma instalaÃ§Ã£o residencial. Eles alimentam lÃ¢mpadas, abajures, spots, lustres e luminÃ¡rias de todas as potÃªncias. O dimensionamento correto garante seguranÃ§a, economia e conformidade com a NBR 5410.</p>

<h3>Dimensionamento do Condutor</h3>
<div class="norma-badge">NBR 5410 â€” Circuitos de IluminaÃ§Ã£o</div>
<ul>
  <li><strong>Bitola mÃ­nima:</strong> 1,5mmÂ² (fio de cobre) para circuitos de iluminaÃ§Ã£o residencial.</li>
  <li><strong>Capacidade de corrente:</strong> um condutor de 1,5mmÂ² suporta atÃ© 17A (mÃ©todo de instalaÃ§Ã£o e3 â€” condulete embutido).</li>
  <li><strong>Queda de tensÃ£o:</strong> deve ser verificada se o circuito for muito longo (mÃ¡ximo 4% da tensÃ£o nominal).</li>
</ul>

<h3>Disjuntor do Circuito</h3>
<ul>
  <li><strong>Disjuntor:</strong> tipicamente 10A ou 16A, conforme a carga total do circuito.</li>
  <li><strong>Curva:</strong> curva B ou C para circuitos de iluminaÃ§Ã£o.</li>
  <li><strong>Dimensionamento:</strong> o disjuntor deve ser â‰¥ Ã  corrente do circuito e â‰¤ Ã  capacidade do condutor.</li>
</ul>

<h3>Quantidade MÃ¡xima de Pontos</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  REGRA DOS 12 PONTOS â€” IluminaÃ§Ã£o                   â”‚
â”‚                                                     â”‚
â”‚  â€¢ MÃ¡ximo 12 pontos de iluminaÃ§Ã£o por circuito      â”‚
â”‚  â€¢ 1 ponto = 1 lÃ¢mpada / 1 abajur / 1 spot         â”‚
â”‚  â€¢ Se 12 pontos nÃ£o for suficiente, criar circuito  â”‚
â”‚    adicional ou reduzir a potÃªncia                   â”‚
â”‚                                                     â”‚
â”‚  Exemplo de distribuiÃ§Ã£o:                            â”‚
â”‚  Sala: 4 pontos | Cozinha: 2 pontos                 â”‚
â”‚  Quartos: 2 pontos cada | Banheiro: 1 ponto         â”‚
â”‚  Total: 4+2+2+2+2+1 = 13 â†’ dividir em 2 circuitos  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Tipos de LÃ¢mpadas e PotÃªncias TÃ­picas</h3>
<ul>
  <li><strong>LED:</strong> 9W, 12W, 15W, 18W â€” eficiÃªncia mÃ¡xima, durabilidade superior (25.000-50.000h).</li>
  <li><strong>Fluorescente compacta (CFL):</strong> 15W, 20W, 30W â€” substitui lÃ¢mpadas incandescentes (eficiÃªncia moderada).</li>
  <li><strong>Incandescente:</strong> 40W, 60W, 100W â€” obsoleta, baixa eficiÃªncia (85% vira calor).</li>
  <li><strong>HalÃ³gena:</strong> 20W, 50W, 75W â€” usada em spots e projetores.</li>
</ul>

<h3>Exemplo PrÃ¡tico de Dimensionamento</h3>
<pre>
Circuito da sala de estar:
- 4 lÃ¢mpadas LED de 12W cada = 48W total
- I = P/V = 48W / 127V = 0,38A
- Condutor 1,5mmÂ² (suporta atÃ© 17A) âœ“
- Disjuntor 10A âœ“
- Pontos: 4 (mÃ¡ximo 12) âœ“
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Exceder 12 pontos no circuito:</strong> gera sobrecarga e risco de incÃªndio.</li>
  <li><strong>Usar condutor 1,0mmÂ² em iluminaÃ§Ã£o:</strong> o mÃ­nimo permitido pela NBR 5410 Ã© 1,5mmÂ².</li>
  <li><strong>NÃ£o considerar o fator de demanda:</strong> nem todas as lÃ¢mpadas ficam ligadas ao mesmo tempo.</li>
  <li><strong>Conectar tomadas no circuito de iluminaÃ§Ã£o:</strong> devem ter circuito prÃ³prio (M2-L3).</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual a bitola mÃ­nima permitida pela NBR 5410 para circuitos de iluminaÃ§Ã£o residencial?",
            options: [
              "1,0mmÂ²",
              "1,5mmÂ²",
              "2,5mmÂ²",
              "4,0mmÂ²"
            ],
            correctIndex: 1,
            explanation: "A NBR 5410 estabelece 1,5mmÂ² como bitola mÃ­nima para circuitos de iluminaÃ§Ã£o residencial."
          },
          {
            type: "calculation",
            question: "Um circuito de iluminaÃ§Ã£o tem 8 lÃ¢mpadas LED de 15W cada. Qual a corrente total do circuito? (TensÃ£o 127V)",
            formulaHint: "I = (P_total) / V",
            correctAnswer: 0.945,
            unit: "A",
            explanation: "P_total = 8 Ã— 15W = 120W. I = 120W / 127V â‰ˆ 0,945A = 945mA."
          },
          {
            type: "fill-blank",
            question: "O mÃ¡ximo de _____ pontos de iluminaÃ§Ã£o Ã© permitido por circuito residencial.",
            correctAnswers: ["12"],
            explanation: "A regra dos 12 pontos Ã© uma das mais importantes para dimensionamento de circuitos de iluminaÃ§Ã£o."
          },
          {
            type: "multiple-choice",
            question: "Um condutor de 1,5mmÂ² suporta atÃ© quantos amperes (mÃ©todo e3 â€” condulete embutido)?",
            options: [
              "10A",
              "17A",
              "25A",
              "30A"
            ],
            correctIndex: 1,
            explanation: "Um condutor de 1,5mmÂ² de cobre suporta atÃ© 17A no mÃ©todo e3 (condulete embutido na alvenaria)."
          },
          {
            type: "drag-drop",
            question: "Distribua os pontos de iluminaÃ§Ã£o nos cÃ´modos. Classifique cada cÃ´modo com o nÃºmero adequado de pontos:",
            items: [
              { text: "Sala de estar", correctCategory: "4 pontos" },
              { text: "Cozinha", correctCategory: "2 pontos" },
              { text: "Quarto", correctCategory: "2 pontos" },
              { text: "Banheiro", correctCategory: "1 ponto" }
            ]
          },
          {
            type: "calculation",
            question: "Uma sala tem 6 pontos com lÃ¢mpadas LED de 9W cada. Qual a potÃªncia total? Ainda cabe no mesmo circuito se o limite sÃ£o 12 pontos?",
            formulaHint: "P = n Ã— P_por_lÃ¢mpada",
            correctAnswer: 54,
            unit: "W",
            explanation: "P = 6 Ã— 9W = 54W. Sim, ainda cabe no circuito pois tem apenas 6 pontos (limite Ã© 12)."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L3 â€” Circuitos de Tomadas
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l3",
        title: "Circuitos de Tomadas",
        theory: `<h2>Circuitos de Tomadas</h2>

<h3>Regra Geral para Tomadas</h3>
<p>Circuitos de tomadas residenciais seguem regras especÃ­ficas de dimensionamento conforme a potÃªncia dos equipamentos que serÃ£o conectados. A NBR 5410 estabelece critÃ©rios claros para cada caso.</p>

<h3>Tomadas de Uso Geral (atÃ© 10A)</h3>
<div class="norma-badge">NBR 5410 â€” Circuitos de Tomadas</div>
<ul>
  <li><strong>Condutor mÃ­nimo:</strong> 2,5mmÂ² (cobre).</li>
  <li><strong>Disjuntor:</strong> tipicamente 16A ou 20A.</li>
  <li><strong>Quantidade mÃ¡xima:</strong> atÃ© 10 tomadas por circuito.</li>
  <li><strong>Equipamentos tÃ­picos:</strong> televisores, ventiladores, carregadores, micro-ondas (atÃ© 1200W), liquidificador.</li>
</ul>

<h3>Circuitos Exclusivos (acima de 10A)</h3>
<p>Equipamentos de alta potÃªncia exigem <strong>circuitos exclusivos</strong> â€” dedicados, com condutor e disjuntor prÃ³prios. NÃ£o podem compartilhar circuito com outros equipamentos.</p>

<h3>Chuveiro ElÃ©trico</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  CHUVEIRO ELÃ‰TRICO â€” Dimensionamento                â”‚
â”‚                                                     â”‚
â”‚  PotÃªncia tÃ­pica: 4.500W a 7.500W                   â”‚
â”‚  Exemplo: 5.500W em 127V                            â”‚
â”‚  I = P / V = 5500 / 127 = 43,3A                     â”‚
â”‚                                                     â”‚
â”‚  â€¢ Condutor: 6,0mmÂ² (mÃ­nimo 4,0mmÂ² para atÃ© 4500W) â”‚
â”‚  â€¢ Disjuntor: 50A (curva C ou D)                    â”‚
â”‚  â€¢ DR dedicado: 40A ou 50A, 30mA                    â”‚
â”‚  â€¢ Circuito: EXCLUSIVO, sem outras tomadas          â”‚
â”‚                                                     â”‚
â”‚  Nota: chuveiro 7.500W em 220V â†’ 34A â†’ 4,0mmÂ²     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Ar-Condicionado</h3>
<ul>
  <li><strong>Split 9.000 BTU:</strong> â‰ˆ 800W â†’ 1.000W com compressor â†’ 4,5A em 220V â†’ circuito exclusivo com 2,5mmÂ².</li>
  <li><strong>Split 18.000 BTU:</strong> â‰ˆ 1.800W â†’ 2.200W com compressor â†’ 10A em 220V â†’ circuito exclusivo com 4,0mmÂ².</li>
  <li><strong>Janela 11.000 BTU:</strong> â‰ˆ 1.300W â†’ 6A em 220V â†’ circuito exclusivo com 2,5mmÂ².</li>
</ul>

<h3>Tabela de Dimensionamento por Equipamento</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Equipamento          â”‚ PotÃªncia â”‚ Corrente â”‚ Condutor     â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Tomada geral (10A)   â”‚ atÃ© 1200Wâ”‚ atÃ© 10A  â”‚ 2,5mmÂ²      â”‚
â”‚ Micro-ondas          â”‚ 1200W    â”‚ 10A      â”‚ 2,5mmÂ²      â”‚
â”‚ Ar 9.000 BTU         â”‚ 1000W    â”‚ 4,5A     â”‚ 2,5mmÂ² (exc)â”‚
â”‚ Ar 18.000 BTU        â”‚ 2200W    â”‚ 10A      â”‚ 4,0mmÂ² (exc)â”‚
â”‚ Chuveiro 5500W/127V  â”‚ 5500W    â”‚ 43A      â”‚ 6,0mmÂ² (exc)â”‚
â”‚ Chuveiro 5500W/220V  â”‚ 5500W    â”‚ 25A      â”‚ 4,0mmÂ² (exc)â”‚
â”‚ Forno elÃ©trico       â”‚ 3000W    â”‚ 13A      â”‚ 4,0mmÂ² (exc)â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Conectar chuveiro em circuito de tomada geral:</strong> pode causar incÃªndio por sobrecarga do condutor.</li>
  <li><strong>Usar extensÃ£o para chuveiro:</strong> o condutor da extensÃ£o nÃ£o suporta a corrente elevada.</li>
  <li><strong>Ignorar a bitola do condutor:</strong> condutor subdimensionado aquece e pode derreter a isolaÃ§Ã£o.</li>
  <li><strong>Instalar DR geral para chuveiro:</strong> deve ser DR exclusivo com capacidade adequada.</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Um chuveiro elÃ©trico de 5500W Ã© ligado em 127V. Qual a corrente que o circuito precisa suportar?",
            formulaHint: "I = P / V",
            correctAnswer: 43.31,
            unit: "A",
            explanation: "I = P / V = 5500W / 127V â‰ˆ 43,31A."
          },
          {
            type: "multiple-choice",
            question: "Qual a bitola mÃ­nima do condutor para um circuito de tomadas gerais?",
            options: [
              "1,5mmÂ²",
              "2,5mmÂ²",
              "4,0mmÂ²",
              "6,0mmÂ²"
            ],
            correctIndex: 1,
            explanation: "O condutor mÃ­nimo para circuitos de tomadas gerais Ã© 2,5mmÂ² de cobre."
          },
          {
            type: "fill-blank",
            question: "Um chuveiro elÃ©trico deve ter circuito _____, com condutor e disjuntor prÃ³prios.",
            correctAnswers: ["exclusivo", "prÃ³prio", "dedicado"],
            explanation: "Chuveiros elÃ©tricos exigem circuito exclusivo (dedicado) devido Ã  alta corrente que consomem."
          },
          {
            type: "drag-drop",
            question: "Classifique cada equipamento quanto ao tipo de circuito necessÃ¡rio:",
            items: [
              { text: "TelevisÃ£o", correctCategory: "Circuito geral (atÃ© 10A)" },
              { text: "Chuveiro elÃ©trico", correctCategory: "Circuito exclusivo" },
              { text: "Carregador de celular", correctCategory: "Circuito geral (atÃ© 10A)" },
              { text: "Ar-condicionado split 12.000 BTU", correctCategory: "Circuito exclusivo" },
              { text: "Ventilador de mesa", correctCategory: "Circuito geral (atÃ© 10A)" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Quantas tomadas de uso geral sÃ£o permitidas, no mÃ¡ximo, em um circuito residencial?",
            options: [
              "6",
              "8",
              "10",
              "12"
            ],
            correctIndex: 2,
            explanation: "A NBR 5410 permite atÃ© 10 tomadas de uso geral por circuito, desde que o condutor e disjuntor estejam dimensionados."
          },
          {
            type: "calculation",
            question: "Um ar-condicionado split consome 2200W em 220V. Qual a corrente do circuito? Qual condutor mÃ­nimo usar?",
            formulaHint: "I = P / V",
            correctAnswer: 10,
            unit: "A",
            explanation: "I = 2200W / 220V = 10A. Condutor mÃ­nimo: 4,0mmÂ² (circuito exclusivo, corrente limÃ­trofe para 2,5mmÂ²)."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L4 â€” Disjuntores
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l4",
        title: "Disjuntores",
        theory: `<h2>Disjuntores</h2>

<h3>FunÃ§Ã£o do Disjuntor</h3>
<p>O disjuntor Ã© o <strong>dispositivo de proteÃ§Ã£o automÃ¡tica</strong> mais importante em uma instalaÃ§Ã£o elÃ©trica. Ele protege o circuito contra duas ameaÃ§as principais: <strong>sobrecarga</strong> (corrente acima do limite por tempo prolongado) e <strong>curto-circuito</strong> (corrente extremamente alta por tempo muito curto).</p>

<h3>Tipos de Curva</h3>
<div class="norma-badge">Disjuntores â€” Curvas de AtuaÃ§Ã£o</div>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  CURVA B â€” SensÃ­vel (atuaÃ§Ã£o rÃ¡pida)                               â”‚
â”‚  â€¢ Atua entre 3 e 5 vezes a corrente nominal                        â”‚
â”‚  â€¢ Ideal para: circuitos de iluminaÃ§Ã£o, tomadas de uso geral        â”‚
â”‚  â€¢ Protege contra curtos de baixa energia                           â”‚
â”‚                                                                     â”‚
â”‚  CURVA C â€” MÃ©dia (mais comum)                                       â”‚
â”‚  â€¢ Atua entre 5 e 10 vezes a corrente nominal                       â”‚
â”‚  â€¢ Ideal para: cargas gerais, motores pequenos, residÃªncias         â”‚
â”‚  â€¢ PadrÃ£o para a maioria dos circuitos residenciais                 â”‚
â”‚                                                                     â”‚
â”‚  CURVA D â€” Retardada (atuaÃ§Ã£o lenta)                                â”‚
â”‚  â€¢ Atua entre 10 e 20 vezes a corrente nominal                      â”‚
â”‚  â€¢ Ideal para: motores de alto fluxo de partida, transformadores    â”‚
â”‚  â€¢ Usada em indÃºstria e equipamentos com alta corrente de ligaÃ§Ã£o   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Dimensionamento por Corrente</h3>
<ul>
  <li><strong>Regra geral:</strong> o disjuntor deve ser dimensionado para a corrente de operaÃ§Ã£o normal do circuito, nunca acima da capacidade do condutor.</li>
  <li><strong>FÃ³rmula:</strong> I_disjuntor â‰¥ I_carga e I_disjuntor â‰¤ I_condutor (corrente admissÃ­vel do condutor).</li>
  <li><strong>Valores padronizados:</strong> 6A, 10A, 16A, 20A, 25A, 32A, 40A, 50A, 63A.</li>
</ul>

<h3>Curva de AtuaÃ§Ã£o â€” Sobrecarga</h3>
<pre>
Tempo de atuaÃ§Ã£o vs Multiplicador da corrente nominal (In):

  Multiplicador â”‚  Curva B    â”‚  Curva C    â”‚  Curva D
  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    1,13 x In   â”‚ NÃ£o atua    â”‚ NÃ£o atua    â”‚ NÃ£o atua
    1,45 x In   â”‚ < 60 min    â”‚ < 60 min    â”‚ < 60 min
    2,55 x In   â”‚ < 40 seg    â”‚ < 40 seg    â”‚ < 40 seg
    5 x In      â”‚ < 10 seg    â”‚ NÃ£o atua    â”‚ NÃ£o atua
    10 x In     â”‚ < 0,1 seg   â”‚ < 0,1 seg   â”‚ NÃ£o atua
    20 x In     â”‚ < 0,02 seg  â”‚ < 0,02 seg  â”‚ < 0,02 seg
</pre>

<h3>Exemplos de Dimensionamento Residencial</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Disjuntor Geral:                                          â”‚
â”‚  â€¢ Casa atÃ© 100mÂ² â†’ 40A, trifÃ¡sico 380/220V               â”‚
â”‚  â€¢ Apartamento atÃ© 60mÂ² â†’ 25A ou 32A, bifÃ¡sico            â”‚
â”‚                                                             â”‚
â”‚  Disjuntores por circuito:                                  â”‚
â”‚  â€¢ IluminaÃ§Ã£o: 10A (curva B ou C)                          â”‚
â”‚  â€¢ Tomadas gerais: 16A ou 20A (curva C)                    â”‚
â”‚  â€¢ Chuveiro: 40A ou 50A (curva C ou D)                     â”‚
â”‚  â€¢ Ar-condicionado: 20A ou 25A (curva C)                   â”‚
â”‚  â€¢ Forno elÃ©trico: 25A ou 32A (curva C)                    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Disjuntor maior que o condutor suporta:</strong> o disjuntor protege o condutor. Se for maior, o condutor aquece sem o disjuntor desligar.</li>
  <li><strong>Usar disjuntor para proteÃ§Ã£o de pessoas:</strong> disjuntor protege contra sobrecarga/curto, NÃƒO contra choques. Para isso, use DR.</li>
  <li><strong>Travar o disjuntor:</strong> quando desliga constantemente, indica problema â€” NÃƒO Ã© defeito do disjuntor.</li>
  <li><strong>NÃ£o especificar a curva correta:</strong> motores de alta corrente de partida precisam de curva D, senÃ£o desligam na partida.</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual curva de disjuntor Ã© mais indicada para circuitos de iluminaÃ§Ã£o residencial?",
            options: [
              "Curva A",
              "Curva B",
              "Curva C",
              "Curva D"
            ],
            correctIndex: 1,
            explanation: "A curva B Ã© a mais indicada para iluminaÃ§Ã£o pois Ã© mais sensÃ­vel e atua rapidamente em sobrecargas leves."
          },
          {
            type: "fill-blank",
            question: "Um disjuntor curva C atua entre _____ e _____ vezes a corrente nominal em caso de curto.",
            correctAnswers: ["5", "10"],
            explanation: "A curva C atua entre 5 e 10 vezes In, sendo o padrÃ£o para a maioria dos circuitos residenciais."
          },
          {
            type: "calculation",
            question: "Um circuito de tomadas tem carga de 12A. Qual o disjuntor mais adequado (valores padronizados)?",
            formulaHint: "O disjuntor deve ser â‰¥ I_carga e â‰¤ I_condutor",
            correctAnswer: 16,
            unit: "A",
            explanation: "O disjuntor mais adequado Ã© 16A (prÃ³ximo e acima de 12A, valor padronizado mais comum)."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o PRINCIPAL do disjuntor?",
            options: [
              "Proteger pessoas contra choques",
              "Proteger contra sobrecarga e curto-circuito",
              "Economizar energia",
              "Controlar a iluminaÃ§Ã£o"
            ],
            correctIndex: 1,
            explanation: "O disjuntor protege o circuito contra sobrecarga e curto-circuito. Para proteÃ§Ã£o de pessoas, usa-se o DR."
          },
          {
            type: "drag-drop",
            question: "Relacione cada tipo de curva ao seu uso mais adequado:",
            items: [
              { text: "Curva B", correctCategory: "IluminaÃ§Ã£o e tomadas gerais" },
              { text: "Curva C", correctCategory: "Cargas gerais e residencial" },
              { text: "Curva D", correctCategory: "Motores e transformadores" }
            ]
          },
          {
            type: "calculation",
            question: "Um condutor de 2,5mmÂ² suporta atÃ© 25A. Qual o disjuntor mÃ¡ximo que pode ser instalado nesse circuito?",
            formulaHint: "I_disjuntor â‰¤ I_condutor",
            correctAnswer: 25,
            unit: "A",
            explanation: "O disjuntor nÃ£o pode exceder a capacidade do condutor. Para 2,5mmÂ² (25A), o mÃ¡ximo Ã© 25A. Mas o padrÃ£o Ã© 20A para folga."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L5 â€” DR e DPS
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l5",
        title: "DR e DPS",
        theory: `<h2>DR e DPS â€” Dispositivos de ProteÃ§Ã£o</h2>

<h3>DR â€” Dispositivo Residual (Interruptor Diferencial)</h3>
<p>O DR Ã© um dispositivo que <strong>detecta fugas de corrente elÃ©trica</strong> para a terra e desconecta o circuito automaticamente. Sua funÃ§Ã£o principal Ã© <strong>proteger pessoas contra choques elÃ©tricos</strong> e prevenir incÃªndios causados por curtos para a terra.</p>

<h3>Como Funciona o DR</h3>
<ul>
  <li>Monitora a <strong>diferenÃ§a</strong> entre a corrente que sai pelo fase e retorna pelo neutro.</li>
  <li>Em condiÃ§Ãµes normais: I_fase = I_neutro â†’ diferenÃ§a = 0 â†’ DR nÃ£o atua.</li>
  <li>Em falha: I_fase â‰  I_neutro (parte da corrente vai para a terra) â†’ diferenÃ§a > limiar â†’ DR desliga.</li>
  <li><strong>Corrente de atuaÃ§Ã£o:</strong> 30mA para proteÃ§Ã£o de pessoas (padrÃ£o); 100mA para proteÃ§Ã£o contra incÃªndio.</li>
  <li><strong>Tempo de atuaÃ§Ã£o:</strong> menos de 300ms para 30mA.</li>
</ul>

<div class="norma-badge">NBR 5410 â€” DR ObrigatÃ³rio</div>
<ul>
  <li><strong>Circuitos em Ã¡reas molhadas:</strong> banheiros, lavanderias, cozinhas, Ã¡reas externas.</li>
  <li><strong>Circuitos de tomadas:</strong> em residÃªncias, todos os circuitos de tomadas devem ter DR.</li>
  <li><strong>Quadro geral:</strong> DR geral de 40A ou 63A com sensibilidade 30mA.</li>
</ul>

<h3>DPS â€” Dispositivo de ProteÃ§Ã£o contra Surto</h3>
<p>O DPS protege a instalaÃ§Ã£o contra <strong>surtos de tensÃ£o</strong> provenientes de descargas atmosfÃ©ricas (raios), manobras na rede de distribuiÃ§Ã£o ou comutaÃ§Ã£o de cargas indutivas.</p>

<h3>Como Funciona o DPS</h3>
<ul>
  <li>Em condiÃ§Ãµes normais: tem alta resistÃªncia â†’ nÃ£o afeta o circuito.</li>
  <li>Em surto: a resistÃªncia cai drasticamente â†’ canaliza a corrente do surto para a terra â†’ protege os equipamentos.</li>
  <li><strong>Tipos:</strong> Type 1 (entradas de edifÃ­cios), Type 2 (quadros), Type 3 (prÃ³ximo ao equipamento).</li>
  <li><strong>Vida Ãºtil:</strong> tem vida limitada â€” apÃ³s atuar vÃ¡rias vezes, deve ser substituÃ­do.</li>
</ul>

<h3>Tabela Comparativa DR vs DPS</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  CaracterÃ­stica  â”‚        DR          â”‚        DPS         â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Protege contra  â”‚  Fugas p/ terra    â”‚  Surtos de tensÃ£o  â”‚
â”‚  (choque/incÃªndio)â”‚  (choque elÃ©trico) â”‚  (raios/manobras)  â”‚
â”‚  Sensibilidade   â”‚  30mA (pessoas)    â”‚  Depende do tipo   â”‚
â”‚  ObrigatÃ³rio?    â”‚  Sim (Ã¡reas molh.) â”‚  Sim (entradas)    â”‚
â”‚  AtuaÃ§Ã£o          â”‚  Diferencial I     â”‚  Varistor/centro   â”‚
â”‚  Vida Ãºtil        â”‚  Praticamente      â”‚  Limitada (surto)  â”‚
â”‚                  â”‚  ilimitada         â”‚                    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Confundir DR com disjuntor:</strong> DR protege contra choques, disjuntor contra sobrecarga. SÃ£o complementares.</li>
  <li><strong>Desligar o DR quando desliga frequentemente:</strong> indica fuga de corrente â€” procurar o motivo.</li>
  <li><strong>NÃ£o instalar DPS em regiÃµes de raios:</strong> Ã© obrigatÃ³rio em todas as entradas de alimentaÃ§Ã£o.</li>
  <li><strong>Testar DR com fio de terra:</strong> use o botÃ£o TESTE do prÃ³prio DR, nunca improvised.</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o principal do DR (Dispositivo Residual)?",
            options: [
              "Proteger contra sobrecarga",
              "Proteger contra curto-circuito",
              "Proteger pessoas contra choques elÃ©tricos",
              "Proteger contra surtos de tensÃ£o"
            ],
            correctIndex: 2,
            explanation: "O DR detecta fugas de corrente para a terra e protege pessoas contra choques elÃ©tricos e incÃªndios."
          },
          {
            type: "fill-blank",
            question: "O DR deve ter sensibilidade de _____ mA para proteÃ§Ã£o de pessoas e atuar em menos de _____ ms.",
            correctAnswers: ["30", "300"],
            explanation: "30mA Ã© a corrente limite para nÃ£o causar fibrilaÃ§Ã£o ventricular. O tempo de atuaÃ§Ã£o deve ser inferior a 300ms."
          },
          {
            type: "multiple-choice",
            question: "O que o DPS (Dispositivo de ProteÃ§Ã£o contra Surto) protege?",
            options: [
              "Contra choques elÃ©tricos",
              "Contra surtos de tensÃ£o causados por raios ou manobras",
              "Contra sobrecarga no circuito",
              "Contra queda de tensÃ£o"
            ],
            correctIndex: 1,
            explanation: "O DPS protege contra surtos de tensÃ£o, que podem ser causados por descargas atmosfÃ©ricas, manobras na rede ou comutaÃ§Ã£o de cargas."
          },
          {
            type: "drag-drop",
            question: "Classifique cada dispositivo com sua funÃ§Ã£o correta:",
            items: [
              { text: "DR", correctCategory: "ProteÃ§Ã£o contra choques (fuga p/ terra)" },
              { text: "DPS", correctCategory: "ProteÃ§Ã£o contra surtos de tensÃ£o" },
              { text: "Disjuntor termomagnÃ©tico", correctCategory: "ProteÃ§Ã£o contra sobrecarga e curto" },
              { text: "Barramento PE", correctCategory: "ReferÃªncia de terra" }
            ]
          },
          {
            type: "calculation",
            question: "Em um circuito com DR de 30mA, qual Ã© a mÃ¡xima fuga de corrente permitida antes de o DR atuar?",
            formulaHint: "A sensibilidade define a corrente de atuaÃ§Ã£o",
            correctAnswer: 30,
            unit: "mA",
            explanation: "O DR de 30mA atua quando detecta diferenÃ§a de 30mA ou mais entre fase e neutro."
          },
          {
            type: "multiple-choice",
            question: "O DR deve ser instalado em qual posiÃ§Ã£o no quadro?",
            options: [
              "Depois dos disjuntores dos circuitos",
              "Antes dos disjuntores dos circuitos (geral) ou por circuito",
              "NÃ£o importa a posiÃ§Ã£o",
              "Apenas no circuito do chuveiro"
            ],
            correctIndex: 1,
            explanation: "O DR pode ser geral (antes dos disjuntores) ou por circuito. Em residÃªncias, o padrÃ£o Ã© DR geral de 40A/30mA."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L6 â€” Quadro de DistribuiÃ§Ã£o
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l6",
        title: "Quadro de DistribuiÃ§Ã£o",
        theory: `<h2>Quadro de DistribuiÃ§Ã£o</h2>

<h3>O que Ã© o Quadro</h3>
<p>O quadro de distribuiÃ§Ã£o Ã© o <strong>ponto central</strong> onde toda a energia elÃ©trica de uma residÃªncia Ã© distribuÃ­da e protegida. Ele concentra os disjuntores, o DR, o DPS, os barramentos e as conexÃµes de fase, neutro e terra. Ã‰ o "coraÃ§Ã£o" da instalaÃ§Ã£o elÃ©trica.</p>

<h3>Componentes do Quadro</h3>
<ul>
  <li><strong>Disjuntor geral:</strong> proteÃ§Ã£o principal de toda a instalaÃ§Ã£o (40A, 50A ou 63A conforme a carga).</li>
  <li><strong>DR geral:</strong> proteÃ§Ã£o contra choques para todos os circuitos (40A, 30mA).</li>
  <li><strong>DPS:</strong> proteÃ§Ã£o contra surtos na entrada da alimentaÃ§Ã£o.</li>
  <li><strong>Disjuntores por circuito:</strong> um para cada circuito (iluminaÃ§Ã£o, tomadas, chuveiro, ar-condicionado, etc.).</li>
  <li><strong>Barramento neutro (N):</strong> barra de cobre onde todos os fios neutros se conectam.</li>
  <li><strong>Barramento de terra (PE):</strong> barra de cobre onde todos os fios de proteÃ§Ã£o (terra) se conectam, vinculada Ã  haste de aterramento.</li>
  <li><strong>CanalizaÃ§Ãµes:</strong> eletrodutos que conduzem os fios atÃ© o quadro.</li>
</ul>

<h3>Montagem do Quadro</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                    QUADRO DE DISTRIBUIÃ‡ÃƒO                          â”‚
â”‚                                                                     â”‚
â”‚  ENTRADA â†’ DR GERAL â†’ DISJUNTOR GERAL â†’ DPS                       â”‚
â”‚                                                                     â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”‚
â”‚  â”‚  DISJ.  â”‚  DISJ.  â”‚  DISJ.  â”‚  DISJ.  â”‚  DISJ.  â”‚              â”‚
â”‚  â”‚  GERAL  â”‚  C1     â”‚  C2     â”‚  C3     â”‚  C4     â”‚              â”‚
â”‚  â”‚  40A    â”‚  10A    â”‚  16A    â”‚  50A    â”‚  20A    â”‚              â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â”‚
â”‚       â†“         â†“         â†“         â†“         â†“                    â”‚
â”‚    Entrada   Ilum.    Tomadas  Chuveiro    Ar-Cond.               â”‚
â”‚                                                                     â”‚
â”‚  BARRAMENTO NEUTRO (N) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ N                 â”‚
â”‚  BARRAMENTO TERRA (PE) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ PE               â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>IdentificaÃ§Ã£o dos Circuitos</h3>
<div class="norma-badge">IdentificaÃ§Ã£o PadrÃ£o â€” Circuitos Residenciais</div>
<ul>
  <li><strong>C1:</strong> IluminaÃ§Ã£o â€” sala, quartos, cozinha (10A, 1,5mmÂ²).</li>
  <li><strong>C2:</strong> Tomadas gerais â€” sala, quartos (16A, 2,5mmÂ²).</li>
  <li><strong>C3:</strong> Chuveiro elÃ©trico â€” circuito exclusivo (50A, 6,0mmÂ²).</li>
  <li><strong>C4:</strong> Ar-condicionado â€” circuito exclusivo (20A, 2,5mmÂ² ou 4,0mmÂ²).</li>
  <li><strong>C5:</strong> Cozinha / Lavanderia â€” tomadas especÃ­ficas (20A, 2,5mmÂ²).</li>
  <li><strong>C6:</strong> Ãrea externa / Garagem (16A, 2,5mmÂ², com DR prÃ³prio).</li>
</ul>

<h3>Regras de Montagem</h3>
<ul>
  <li><strong>Altura:</strong> quadro deve ficar entre 1,0m e 1,8m do piso (acesso fÃ¡cil).</li>
  <li><strong>DistÃ¢ncia da Ã¡gua:</strong> no mÃ­nimo 1,0m de tanques, pias e registros.</li>
  <li><strong>VentilaÃ§Ã£o:</strong> o local deve ser arejado para dissipar calor dos componentes.</li>
  <li><strong>IdentificaÃ§Ã£o:</strong> todos os circuitos devem ser claramente identificados.</li>
</ul>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Conectar neutro e terra no mesmo barramento:</strong> sÃ£o circuitos distintos (exceto no barramento de entrada).</li>
  <li><strong>NÃ£o identificar os circuitos:</strong> dificulta manutenÃ§Ã£o e o eletricista nÃ£o sabe qual circuito desligar.</li>
  <li><strong>Sobrecarregar o quadro:</strong> nÃ£o instalar mais disjuntores do que o quadro comporta.</li>
  <li><strong>Usar fios de cores diferentes sem padrÃ£o:</strong> seguir o cÃ³digo de cores (fase: vermelho/preto/cinza; neutro: azul; terra: verde/amarelo).</li>
</ul>`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a altura mÃ­nima recomendada para instalaÃ§Ã£o do quadro de distribuiÃ§Ã£o?",
            options: [
              "0,5m do piso",
              "1,0m do piso",
              "2,0m do piso",
              "No teto"
            ],
            correctIndex: 1,
            explanation: "O quadro deve ficar entre 1,0m e 1,8m do piso para facilitar acesso e manutenÃ§Ã£o."
          },
          {
            type: "fill-blank",
            question: "O barramento de terra (PE) deve ser vinculado Ã  _____ de aterramento.",
            correctAnswers: ["haste", "haste de aterramento"],
            explanation: "O barramento PE Ã© conectado Ã  haste de aterramento, que estÃ¡ enterrada no solo e fornece o caminho para correntes de falha."
          },
          {
            type: "drag-drop",
            question: "Identifique o circuito correto para cada cÃ´modo/equipamento:",
            items: [
              { text: "LÃ¢mpadas da sala", correctCategory: "C1 â€” IluminaÃ§Ã£o (10A, 1,5mmÂ²)" },
              { text: "Tomadas da sala", correctCategory: "C2 â€” Tomadas gerais (16A, 2,5mmÂ²)" },
              { text: "Chuveiro", correctCategory: "C3 â€” Exclusivo (50A, 6,0mmÂ²)" },
              { text: "Ar-condicionado", correctCategory: "C4 â€” Exclusivo (20A, 2,5mmÂ²)" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Qual componente deve ser instalado na ENTRADA da alimentaÃ§Ã£o antes dos disjuntores?",
            options: [
              "LÃ¢mpada de sinalizaÃ§Ã£o",
              "Tomada de emergÃªncia",
              "DR geral e DPS",
              "Apenas o disjuntor geral"
            ],
            correctIndex: 2,
            explanation: "O DR geral e o DPS devem ser instalados na entrada, antes dos disjuntores dos circuitos individuais."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a cor padrÃ£o para o fio NEUTRO no padrÃ£o brasileiro?",
            options: [
              "Vermelho",
              "Preto",
              "Azul",
              "Verde"
            ],
            correctIndex: 2,
            explanation: "No padrÃ£o brasileiro, o neutro Ã© identificado pela cor AZUL. O terra Ã© verde/amarelo e as fases sÃ£o vermelho, preto ou cinza."
          },
          {
            type: "calculation",
            question: "Um quadro tem: C1 (10A iluminaÃ§Ã£o), C2 (16A tomadas), C3 (50A chuveiro), C4 (20A ar-cond). Qual o disjuntor geral mÃ­nimo necessÃ¡rio?",
            formulaHint: "Soma das correntes dos circuitos (considerando fator de demanda â‰ˆ 0,7)",
            correctAnswer: 40,
            unit: "A",
            explanation: "Soma: 10+16+50+20 = 96A. Com fator de demanda 0,7: 96 Ã— 0,7 â‰ˆ 67A. Mas na prÃ¡tica, usa-se disjuntor geral de 40A a 63A conforme a carga instalada. Para residÃªncia padrÃ£o, 40A Ã© comum."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M2-L7 â€” Condutores
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m2-l7",
        title: "Condutores e Bitola",
        theory: `<h2>Condutores e Bitola â€” Tabela ABNT</h2>

<h3>O que Ã© Bitola</h3>
<p>Bitola Ã© a <strong>seÃ§Ã£o transversal do condutor</strong> (medida em mmÂ²). Determina a quantidade de corrente que o fio pode suportar sem aquecer excessivamente. Escolher a bitola correta Ã© fundamental para a seguranÃ§a e o funcionamento adequado da instalaÃ§Ã£o.</p>

<h3>Tabela ABNT de Bitola para Cobre</h3>
<div class="norma-badge">ABNT NBR 5410 / ABNT NBR 7288</div>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Bitola  â”‚ Corrente Adm. â”‚ CondutÃ¢ncia  â”‚ Uso TÃ­pico           â”‚
â”‚  (mmÂ²)  â”‚  (mÃ©todo e3)  â”‚  (A/mmÂ²)     â”‚                      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  1,5mmÂ² â”‚     17A       â”‚   11,3       â”‚ IluminaÃ§Ã£o           â”‚
â”‚  2,5mmÂ² â”‚     25A       â”‚   10,0       â”‚ Tomadas gerais       â”‚
â”‚  4,0mmÂ² â”‚     34A       â”‚    8,5       â”‚ Ar-cond, forno       â”‚
â”‚  6,0mmÂ² â”‚     43A       â”‚    7,2       â”‚ Chuveiro, motores    â”‚
â”‚ 10,0mmÂ² â”‚     60A       â”‚    6,0       â”‚ Quadro geral (BT)    â”‚
â”‚ 16,0mmÂ² â”‚     80A       â”‚    5,0       â”‚ Entrada de energia   â”‚
â”‚ 25,0mmÂ² â”‚    100A       â”‚    4,0       â”‚ Grandes cargas       â”‚
â”‚ 35,0mmÂ² â”‚    125A       â”‚    3,6       â”‚ SubestaÃ§Ãµes BT       â”‚
â”‚ 50,0mmÂ² â”‚    155A       â”‚    3,1       â”‚ Grandes industriais  â”‚
â”‚ 70,0mmÂ² â”‚    195A       â”‚    2,8       â”‚ DistribuiÃ§Ã£o         â”‚
â”‚ 95,0mmÂ² â”‚    235A       â”‚    2,5       â”‚ Linhas de distribuiÃ§Ã£oâ”‚
â”‚120,0mmÂ² â”‚    270A       â”‚    2,3       â”‚ Grandes demandas     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
NOTA: mÃ©todo e3 = condulete embutido. Valores variam conforme
mÃ©todo de instalaÃ§Ã£o (e2, e4, etc.).
</pre>

<h3>Queda de TensÃ£o</h3>
<div class="norma-badge">Limite: 4% da tensÃ£o nominal</div>
<pre>
FÃ³rmula da queda de tensÃ£o:
Î”V = (2 Ã— L Ã— I Ã— Ï) / A

Onde:
  L = comprimento do condutor (ida) em metros
  I = corrente em ampÃ¨res
  Ï = resistividade do cobre = 0,0178 Î©Â·mmÂ²/m
  A = seÃ§Ã£o transversal em mmÂ²
  Fator 2 = considera ida e volta

Exemplo: Condutor 2,5mmÂ², 30m, 16A
Î”V = (2 Ã— 30 Ã— 16 Ã— 0,0178) / 2,5 = 17,1V
%Î”V = (17,1 / 127) Ã— 100 = 13,5% â†’ EXCEDE 4%!
SoluÃ§Ã£o: usar condutor 4,0mmÂ² ou reduzir o comprimento.
</pre>

<h3>MÃ©todos de InstalaÃ§Ã£o</h3>
<ul>
  <li><strong>Eletroduto embutido (e3):</strong> fio dentro de condulete na alvenaria. MÃ©todo mais comum em residÃªncias.</li>
  <li><strong>Eletroduto aparente (e2):</strong> condulete visÃ­vel, fixado na superfÃ­cie.</li>
  <li><strong>CanalizaÃ§Ã£o em eletrocalha (e4):</strong> fios em eletrocalhas metÃ¡licas ou plÃ¡sticas.</li>
  <li><strong>Em tubo de proteÃ§Ã£o (e1):</strong> tubo de proteÃ§Ã£o mecÃ¢nica.</li>
  <li><strong>Ao ar livre:</strong> fios aÃ©reos com isolamento apropriado para intempÃ©ries.</li>
</ul>

<h3>CÃ³digo de Cores dos Fios</h3>
<pre>
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  FunÃ§Ã£o      â”‚  Cor (ABNT)                         â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  Fase (L1)   â”‚  Vermelho ou Preto                  â”‚
â”‚  Fase (L2)   â”‚  Preto ou Cinza                     â”‚
â”‚  Fase (L3)   â”‚  Cinza ou Verde                     â”‚
â”‚  Neutro (N)  â”‚  Azul claro                         â”‚
â”‚  Terra (PE)  â”‚  Verde-amarelo (bicolor)            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
</pre>

<h3>Erros Comuns a Evitar</h3>
<ul>
  <li><strong>Usar bitola menor que a tabela ABNT:</strong> pode causar aquecimento, incÃªndio e queda de tensÃ£o.</li>
  <li><strong>Esquecer a queda de tensÃ£o em circuitos longos:</strong> mesmo com bitola correta, circuitos longos podem exceder 4%.</li>
  <li><strong>Misturar cores de fios:</strong> dificulta identificaÃ§Ã£o e manutenÃ§Ã£o, e Ã© contra a norma.</li>
  <li><strong>Usar condutor de alumÃ­nio em residÃªncia:</strong> alumÃ­nio Ã© permitido apenas em grandes bitolas e com terminais adequados.</li>
  <li><strong>Empalhar fios em vez de usar terminais:</strong> conexÃµes devem ser feitas com bornes, luvas de ligaÃ§Ã£o ou conectores apropriados.</li>
</ul>`,
        exercises: [
          {
            type: "calculation",
            question: "Qual a corrente admissÃ­vel mÃ¡xima para um condutor de 4,0mmÂ² (mÃ©todo e3)?",
            formulaHint: "Consultar tabela ABNT",
            correctAnswer: 34,
            unit: "A",
            explanation: "Segundo a tabela ABNT, um condutor de 4,0mmÂ² no mÃ©todo e3 (condulete embutido) suporta atÃ© 34A."
          },
          {
            type: "fill-blank",
            question: "A queda de tensÃ£o mÃ¡xima permitida pela NBR 5410 Ã© de _____% da tensÃ£o nominal.",
            correctAnswers: ["4", "quatro"],
            explanation: "O limite Ã© 4% da tensÃ£o nominal. Para 127V: 4% = 5,08V. Para 220V: 4% = 8,8V."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a cor do fio de terra (PE) no padrÃ£o brasileiro?",
            options: [
              "Azul",
              "Vermelho",
              "Verde-amarelo",
              "Preto"
            ],
            correctIndex: 2,
            explanation: "O fio de terra (PE) Ã© identificado pela cor verde-amarelo (bicolor) no padrÃ£o ABNT brasileiro."
          },
          {
            type: "calculation",
            question: "Um condutor de 2,5mmÂ² percorre 40m (ida e volta) com corrente de 10A. Qual a queda de tensÃ£o? (Ï = 0,0178 Î©Â·mmÂ²/m)",
            formulaHint: "Î”V = (2 Ã— L Ã— I Ã— Ï) / A",
            correctAnswer: 5.696,
            unit: "V",
            explanation: "Î”V = (2 Ã— 40 Ã— 10 Ã— 0,0178) / 2,5 = 14,24 / 2,5 = 5,696V. Em 127V: 5,696/127 = 4,49% â†’ excede o limite de 4%!"
          },
          {
            type: "drag-drop",
            question: "Relacione cada bitola ao seu uso residencial mais comum:",
            items: [
              { text: "1,5mmÂ²", correctCategory: "IluminaÃ§Ã£o" },
              { text: "2,5mmÂ²", correctCategory: "Tomadas gerais" },
              { text: "4,0mmÂ²", correctCategory: "Ar-condicionado / Forno elÃ©trico" },
              { text: "6,0mmÂ²", correctCategory: "Chuveiro elÃ©trico" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Qual mÃ©todo de instalaÃ§Ã£o Ã© mais comum em residÃªncias brasileiras?",
            options: [
              "Eletroduto aparente (e2)",
              "CanalizaÃ§Ã£o em eletrocalha (e4)",
              "Eletroduto embutido (e3)",
              "Ao ar livre"
            ],
            correctIndex: 2,
            explanation: "O mÃ©todo e3 (condulete embutido na alvenaria) Ã© o mais comum em residÃªncias brasileiras novas."
          }
        ]
      }
    ]
  }
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 3 - SIMBOLOGIA E DIAGRAMAS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m3",
    title: "Simbologia e Diagramas",
    color: "#00B894",
    icon: "ðŸ“",
    description: "Domine a linguagem grÃ¡fica da engenharia elÃ©trica â€” sÃ­mbolos, diagramas e normas NBR 5444.",
    lessons: [
      {
        id: "m3-l1",
        title: "SÃ­mbolos de Fontes",
        theory: `
          <h2>SÃ­mbolos de Fontes ElÃ©tricas</h2>
          <p>Fontes sÃ£o dispositivos que fornecem energia ao circuito, convertendo energia de outra forma (mecÃ¢nica, quÃ­mica, luminosa) em energia elÃ©trica. Dominar seus sÃ­mbolos Ã© essencial para ler qualquer diagrama elÃ©trico.</p>

          <h3>Fontes de TensÃ£o</h3>
          <ul>
            <li><strong>Pilha (elemento Ãºnico):</strong> Duas linhas paralelas, uma longa (positivo) e uma curta (negativo). Gera tensÃ£o CC fixa (ex: 1,5V). O sÃ­mbolo Ã© <code>â”€â”¤â”‚â”€</code> onde a linha maior Ã© o polo positivo.</li>
            <li><strong>Bateria (conjunto de pilhas):</strong> Duas ou mais pilhas em sÃ©rie, representadas por linhas alternadas longa-curta. Indica tensÃµes maiores (12V, 24V, etc.). O sÃ­mbolo mostra a polaridade nas extremidades.</li>
            <li><strong>Fonte CC (corrente contÃ­nua):</strong> CÃ­rculo com os sÃ­mbolos + e âˆ’ dentro, ou simplemente as linhas longa-curta. TensÃ£o constante no tempo, como baterias e fontes chaveadas.</li>
            <li><strong>Fonte CA (corrente alternada):<strong> CÃ­rculo com o sÃ­mbolo de onda senoidal (~) dentro. A tensÃ£o varia senoidalmente (ex: rede elÃ©trica 127V/220V, 60Hz no Brasil).</li>
          </ul>

          <h3>Fontes de Corrente</h3>
          <ul>
            <li><strong>Fonte de corrente ideal:</strong> CÃ­rculo com uma seta indicando a direÃ§Ã£o da corrente. Fornece corrente constante independentemente da carga ligada.</li>
            <li><strong>Gerador CC:</strong> CÃ­rculo com "CC" ou "+" e "âˆ’". converte energia mecÃ¢nica em corrente contÃ­nua via escovas e comutador.</li>
            <li><strong>Gerador CA (alternador):</strong> CÃ­rculo com "~". Produz corrente alternada por induÃ§Ã£o eletromagnÃ©tica. Usado em usinas e geradores portÃ¡teis.</li>
          </ul>

          <h3>SÃ­mbolo GrÃ¡fico NBR 5444</h3>
          <div class="norma-badge">ðŸ“‹ NBR 5444 â€” SÃ­mbolos para esquemas unifilares</div>
          <p>A norma NBR 5444 padroniza os sÃ­mbolos usados em esquemas unifilares de instalaÃ§Ãµes elÃ©tricas. Para fontes, a representaÃ§Ã£o segue convenÃ§Ãµes especÃ­ficas:</p>
          <ul>
            <li><strong>AlimentaÃ§Ã£o externa (rede):</strong> Linha com ponto de alimentaÃ§Ã£o indicado por um cÃ­rculo ou marca de fase.</li>
            <li><strong>Grupo gerador:</strong> CÃ­rculo com indicaÃ§Ã£o do tipo (CC ou CA) e tensÃ£o nominal.</li>
            <li><strong>Ponto de alimentaÃ§Ã£o:</strong> Representado por umå°cÃ­rculo cheio na entrada do quadro.</li>
          </ul>

          <h3>Onde se Aplica</h3>
          <p>Os sÃ­mbolos de fontes aparecem em todos os tipos de diagramas: unifilares (para instalaÃ§Ãµes), multifilares (para montagem), e diagramas de comando (para painÃ©is de forÃ§a). Em diagramas de comando, a fonte geralmente aparece como barramento de tensÃ£o de comando (ex: 110V CC, 220V CA).</p>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Confundir sÃ­mbolo de pilha com bateria:</strong> Pilha = 2 linhas; Bateria = 4+ linhas alternadas.</li>
            <li><strong>Esquecer a polaridade:</strong> Em circuitos CC, inverter a polaridade pode queimar componentes.</li>
            <li><strong>NÃ£o indicar a tensÃ£o nominal:</strong> Todo sÃ­mbolo de fonte deve ter a tensÃ£o anotada ao lado.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual sÃ­mbolo representa uma bateria (e nÃ£o apenas uma pilha)?",
            options: [
              "Duas linhas paralelas de mesmo comprimento",
              "Duas linhas paralelas, uma longa e uma curta",
              "Duas ou mais linhas alternadas longa-curta",
              "Um cÃ­rculo com o sÃ­mbolo ~"
            ],
            correct: 2,
            explanation: "A bateria Ã© representada por duas ou mais linhas alternadas longa-curta, indicando mÃºltiplas pilhas conectadas em sÃ©rie."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© o sÃ­mbolo correto para uma fonte de corrente alternada (CA)?",
            options: [
              "CÃ­rculo com + e âˆ’",
              "CÃ­rculo com o sÃ­mbolo de onda senoidal (~)",
              "Duas linhas paralelas de comprimentos diferentes",
              "Um retÃ¢ngulo com a letra F"
            ],
            correct: 1,
            explanation: "A fonte CA Ã© representada por um cÃ­rculo contendo o sÃ­mbolo de onda senoidal (~), indicando tensÃ£o variÃ¡vel senoidalmente."
          },
          {
            type: "fill-blank",
            question: "Na representaÃ§Ã£o de uma pilha, a linha _____ (maior/menor) indica o polo positivo.",
            correct: "maior",
            explanation: "A linha maior (mais longa) representa o polo positivo da pilha, enquanto a linha menor (mais curta) representa o polo negativo."
          },
          {
            type: "drag-drop",
            question: "Associe cada sÃ­mbolo ao seu dispositivo:",
            pairs: [
              { term: "â”€â”¤â”‚â”€ (duas linhas)", definition: "Pilha" },
              { term: "â”€â”¤â”‚â”€â”¤â”‚â”€ (linhas alternadas)", definition: "Bateria" },
              { term: "CÃ­rculo com ~", definition: "Fonte CA" },
              { term: "CÃ­rculo com + e âˆ’", definition: "Fonte CC" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Segundo a NBR 5444, qual a correta representaÃ§Ã£o de um ponto de alimentaÃ§Ã£o externa em esquema unifilar?",
            options: [
              "Um triÃ¢ngulo na entrada do circuito",
              "Umå°cÃ­rculo cheio no ponto de entrada",
              "Uma seta apontando para a direita",
              "Uma linha tracejada conectada ao quadro"
            ],
            correct: 1,
            explanation: "O ponto de alimentaÃ§Ã£o externa Ã© representado por umå°cÃ­rculo cheio (ponto preenchido) na entrada do esquema unifilar, conforme NBR 5444."
          }
        ]
      },
      {
        id: "m3-l2",
        title: "SÃ­mbolos de Passivos",
        theory: `
          <h2>SÃ­mbolos de Componentes Passivos</h2>
          <p>Componentes passivos sÃ£o aqueles que nÃ£o geram energia, apenas absorvem, armazenam ou dissipam energia elÃ©trica. SÃ£o a base de qualquer circuito e seus sÃ­mbolos sÃ£o os mais utilizados em diagramas.</p>

          <h3>Resistor (ResistÃªncia)</h3>
          <ul>
            <li><strong>SÃ­mbolo NBR (zig-zag):</strong> Linha em zigue-zague com 4-6 dentes. Ã‰ o sÃ­mbolo mais tradicional e ainda o mais usado no Brasil em diagramas de potÃªncia.</li>
            <li><strong>SÃ­mbolo retangular (IEC):</strong> RetÃ¢ngulo vazio. Mais comum em diagramas europeus e em softwares de simulaÃ§Ã£o (LTspice, Proteus).</li>
            <li><strong>IndicaÃ§Ã£o:</strong> Ao lado do sÃ­mbolo, anota-se o valor em ohms (Î©) e, quando aplicÃ¡vel, a potÃªncia em watts (W).</li>
          </ul>

          <h3>Capacitor</h3>
          <ul>
            <li><strong>Capacitor eletrolÃ­tico:</strong> Duas linhas paralelas, uma reta e uma curva. A linha reta indica o polo positivo. Polarizado â€” sÃ³ pode ser ligado em CC com a polaridade correta.</li>
            <li><strong>Capacitor cerÃ¢mico/filme:</strong> Duas linhas retas paralelas iguais. NÃ£o polarizado, pode ser usado em CC e CA.</li>
            <li><strong>Valor:</strong> Indicado em microfarads (ÂµF), nanofarads (nF) ou picofarads (pF).</li>
          </ul>

          <h3>Indutor (Bobina)</h3>
          <ul>
            <li><strong>SÃ­mbolo:</strong> SequÃªncia de semicÃ­rculos (meias-luas) representando espiras de fio. Pode ter 4-6 semicÃ­rculos.</li>
            <li><strong>Indutor com nÃºcleo:</strong> Os semicÃ­rculos sÃ£o acompanhados de linhas paralelas indicando nÃºcleo de ferro.</li>
            <li><strong>Bobina de contato:</strong> Em diagramas de comando, a bobina de um contator ou relÃ© Ã© representada por um retÃ¢ngulo com a letra da funÃ§Ã£o (ex: K1, K2).</li>
          </ul>

          <h3>FusÃ­vel</h3>
          <ul>
            <li><strong>SÃ­mbolo retangular:</strong> RetÃ¢ngulo com uma linha passando pelo centro. Ã‰ o sÃ­mbolo NBR/IEC padrÃ£o.</li>
            <li><strong>SÃ­mbolo antigo:</strong> Linha com um "gargalo" no meio (estreitamento). Ainda visto em diagramas antigos.</li>
            <li><strong>IndicaÃ§Ã£o:</strong> Corrente nominal em amperes (A) ao lado do sÃ­mbolo (ex: F1 16A).</li>
          </ul>

          <div class="formula-box">
            <strong>RelaÃ§Ãµes fundamentais:</strong><br>
            ResistÃªncia: V = R Â· I (Lei de Ohm)<br>
            Capacitor: Q = C Â· V â†’ I = C Â· dV/dt<br>
            Indutor: V = L Â· dI/dt â†’ Energia = Â½ Â· L Â· IÂ²
          </div>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Confundir capacitor com resistor:</strong> Resistor = zig-zag ou retÃ¢ngulo; Capacitor = duas linhas paralelas.</li>
            <li><strong>Esquecer polaridade do eletrolÃ­tico:</strong> LigÃ¡-lo invertido pode causar explosÃ£o.</li>
            <li><strong>NÃ£o anotar valores:</strong> Um sÃ­mbolo sem indicaÃ§Ã£o de valor Ã© inÃºtil para manutenÃ§Ã£o.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual sÃ­mbolo representa um resistor na norma NBR (zigue-zague)?",
            options: [
              "Um retÃ¢ngulo vazio",
              "Uma linha em zigue-zague com 4-6 dentes",
              "Duas linhas paralelas",
              "Uma sequÃªncia de semicÃ­rculos"
            ],
            correct: 1,
            explanation: "O sÃ­mbolo NBR de resistor Ã© representado por uma linha em zigue-zague (zig-zag), tambÃ©m conhecido como sÃ­mbolo americano."
          },
          {
            type: "multiple-choice",
            question: "Qual a diferenÃ§a entre um capacitor eletrolÃ­tico e um cerÃ¢mico no sÃ­mbolo?",
            options: [
              "NÃ£o hÃ¡ diferenÃ§a no sÃ­mbolo",
              "O eletrolÃ­tico tem uma linha reta e uma curva; o cerÃ¢mico tem duas linhas retas",
              "O cerÃ¢mico tem uma linha curva e uma pontilhada",
              "O eletrolÃ­tico Ã© representado por um cÃ­rculo"
            ],
            correct: 1,
            explanation: "O capacitor eletrolÃ­tico Ã© polarizado e seu sÃ­mbolo tem uma linha reta (polo +) e uma curva (polo âˆ’). O cerÃ¢mico nÃ£o Ã© polarizado e tem duas linhas retas iguais."
          },
          {
            type: "fill-blank",
            question: "O sÃ­mbolo de um fusÃ­vel Ã© um retÃ¢ngulo com uma _____ passando pelo centro.",
            correct: "linha",
            explanation: "O fusÃ­vel Ã© representado por um retÃ¢ngulo com uma linha contÃ­nua passando pelo centro, indicando o elemento fusÃ­vel que se queima em sobrecarga."
          },
          {
            type: "drag-drop",
            question: "Associe cada componente passivo ao seu sÃ­mbolo correto:",
            pairs: [
              { term: "Zig-zag (linhas em zigue-zague)", definition: "Resistor" },
              { term: "Duas linhas paralelas (uma reta + uma curva)", definition: "Capacitor eletrolÃ­tico" },
              { term: "SemicÃ­rculos em sequÃªncia", definition: "Indutor/Bobina" },
              { term: "RetÃ¢ngulo com linha central", definition: "FusÃ­vel" }
            ]
          },
          {
            type: "calculation",
            question: "Um resistor de 120Î© Ã© ligado a uma fonte de 220V. Qual a corrente que circula pelo resistor?",
            answer: "1.83A",
            explanation: "Pela Lei de Ohm: I = V/R = 220/120 = 1,83A (arredondado para duas casas decimais)."
          }
        ]
      },
      {
        id: "m3-l3",
        title: "SÃ­mbolos de Dispositivos",
        theory: `
          <h2>SÃ­mbolos de Dispositivos de Comando e ProteÃ§Ã£o</h2>
          <p>Dispositivos de comando e proteÃ§Ã£o sÃ£o os elementos que controlam e protegem os circuitos. Seus sÃ­mbolos sÃ£o fundamentais em diagramas de potÃªncia e especialmente em diagramas de comando (ladder).</p>

          <h3>Interruptores</h3>
          <ul>
            <li><strong>Interruptor simples (IS):</strong> Duas linhas com um ponto de oscilaÃ§Ã£o (pivÃ´). Representa o interruptor de parede que liga/desliga uma lÃ¢mpada. Tem dois contatos: NA (normalmente aberto) e NF (normalmente fechado).</li>
            <li><strong>Interruptor paralelo (IP):</strong> TrÃªs terminais â€” um comum e dois de troca. Permite ligar uma lÃ¢mpada de dois pontos diferentes (ex: cabeceira e porta de quarto).</li>
            <li><strong>Interruptor termomagnÃ©tico (disjuntor):</strong> RetÃ¢ngulo com sÃ­mbolo de interruptor + linha de disparo (termomagnÃ©tico). Protege contra sobrecarga (tÃ©rmico) e curto-circuito (magnÃ©tico).</li>
          </ul>

          <h3>Contator</h3>
          <ul>
            <li><strong>Contato de potÃªncia (NA):</strong> Duas linhas com uma barra mÃ³vel entre elas. Na posiÃ§Ã£o de repouso, o contato estÃ¡ aberto (NA â€” Normalmente Aberto). Quando a bobina Ã© energizada, o contato fecha.</li>
            <li><strong>Bobina do contator:</strong> RetÃ¢ngulo com a designaÃ§Ã£o (K1, K2, KM1). Quando energizada, atrai os contatos de potÃªncia.</li>
            <li><strong>Contato auxiliar NA:</strong> Usado no circuito de comando para lÃ³gica e selo.</li>
            <li><strong>Contato auxiliar NF:</strong> Usado para intertravamento e proteÃ§Ã£o.</li>
          </ul>

          <h3>RelÃ©</h3>
          <ul>
            <li><strong>RelÃ© de proteÃ§Ã£o (tÃ©rmico):</strong> Duas linhas com um triÃ¢ngulo de seta (indicando disparo tÃ©rmico). DesignaÃ§Ã£o FR ou TR.</li>
            <li><strong>RelÃ© de comando:</strong> Mesma representaÃ§Ã£o do contator, mas com contatos de menor capacidade. Usado para lÃ³gica de comando, nÃ£o para potÃªncia.</li>
          </ul>

          <h3>Botoeiras (BotÃµes de Comando)</h3>
          <ul>
            <li><strong>Botoeira NA (Normalmente Aberto):</strong> CÃ­rculo com contato aberto acima. Ao pressionar, fecha o circuito. Cor padrÃ£o: VERDE (partida).</li>
            <li><strong>Botoeira NF (Normalmente Fechado):</strong> CÃ­rculo com contato fechado acima. Ao pressionar, abre o circuito. Cor padrÃ£o: VERMELHA (parada).</li>
            <li><strong>Botoeira de troca (NA/NF):</strong> CombinaÃ§Ã£o dos dois contatos em um Ãºnico botÃ£o. Usada em comandos com inversÃ£o de marcha.</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Confundir NA com NF:</strong> NA = contato aberto em repouso (fecha ao acionar); NF = contato fechado em repouso (abre ao acionar).</li>
            <li><strong>Esquecer que botoeira NA Ã© verde e NF Ã© vermelha:</strong> PadronizaÃ§Ã£o visual Ã© crucial na bancada.</li>
            <li><strong>NÃ£o diferenciar contator de relÃ©:</strong> Contator = potÃªncia (ligar motor); RelÃ© = comando (lÃ³gica, sinalizaÃ§Ã£o).</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a cor padrÃ£o de uma botoeira de parada (NF)?",
            options: [
              "Verde",
              "Azul",
              "Vermelha",
              "Amarela"
            ],
            correct: 2,
            explanation: "A botoeira de parada (NF â€” Normalmente Fechado) Ã© de cor VERMELHA por padrÃ£o, facilitando a identificaÃ§Ã£o rÃ¡pida em painÃ©is."
          },
          {
            type: "multiple-choice",
            question: "O que acontece com o contato NA de um contator quando a bobina Ã© energizada?",
            options: [
              "Abre (desliga o circuito)",
              "Fecha (liga o circuito)",
              "NÃ£o altera seu estado",
              "Inverte a polaridade"
            ],
            correct: 1,
            explanation: "Quando a bobina do contator Ã© energizada, o contato NA (Normalmente Aberto) fecha, permitindo a passagem de corrente pelo circuito de potÃªncia."
          },
          {
            type: "fill-blank",
            question: "Um interruptor paralelo permite ligar uma lÃ¢mpada de _____ pontos diferentes.",
            correct: "dois",
            explanation: "O interruptor paralelo (IP) tem trÃªs terminais e permite controlar uma mesma lÃ¢mpada a partir de dois pontos distintos, como cabeceira e porta."
          },
          {
            type: "drag-drop",
            question: "Associe cada dispositivo ao seu sÃ­mbolo correto:",
            pairs: [
              { term: "RetÃ¢ngulo com linha de disparo", definition: "Disjuntor termomagnÃ©tico" },
              { term: "Duas linhas com barra mÃ³vel (NA)", definition: "Contato de contator" },
              { term: "RetÃ¢ngulo com K1/K2", definition: "Bobina de contator" },
              { term: "CÃ­rculo com contato aberto", definition: "Botoeira NA" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o principal do contato de selo (selagem) no circuito de comando?",
            options: [
              "Proteger contra curto-circuito",
              "Manter o contator energizado apÃ³s soltar a botoeira de partida",
              "Inverter o sentido de rotaÃ§Ã£o do motor",
              "Reduzir a corrente de partida"
            ],
            correct: 1,
            explanation: "O contato de selo Ã© um contato auxiliar NA do contator, ligado em paralelo com a botoeira de partida. Quando o contator energiza, este contato fecha e mantÃ©m o circuito de comando energizado mesmo apÃ³s soltar a botoeira."
          }
        ]
      },
      {
        id: "m3-l4",
        title: "Diagrama Unifilar",
        theory: `
          <h2>Diagrama Unifilar â€” VisÃ£o Geral do Circuito</h2>
          <p>O diagrama unifilar Ã© a representaÃ§Ã£o grÃ¡fica mais importante de uma instalaÃ§Ã£o elÃ©trica. Ele mostra todos os componentes e conexÃµes de um circuito elÃ©trico em uma Ãºnica linha, simplificando a visualizaÃ§Ã£o do sistema como um todo.</p>

          <h3>O que o Diagrama Unifilar Mostra</h3>
          <ul>
            <li><strong>AlimentaÃ§Ã£o:</strong> Ponto de entrada da rede (tensÃ£o, fase, neutro, terra).</li>
            <li><strong>Disjuntor geral:</strong> Primeiro dispositivo de proteÃ§Ã£o da instalaÃ§Ã£o.</li>
            <li><strong>Quadro de distribuiÃ§Ã£o:</strong> RamificaÃ§Ãµes para cada circuito parcial.</li>
            <li><strong>Circuitos parciais:</strong> IluminaÃ§Ã£o, tomadas, chuveiro, ar-condicionado, etc.</li>
            <li><strong>Disjuntores parciais:</strong> ProteÃ§Ã£o individual de cada circuito.</li>
            <li><strong>Componentes:</strong> LÃ¢mpadas, tomadas, interruptores, motores, etc.</li>
          </ul>

          <h3>Como Ler um Diagrama Unifilar</h3>
          <ul>
            <li><strong>Da esquerda para a direita:</strong> A energia entra pela esquerda (alimentaÃ§Ã£o) e vai atÃ© as cargas Ã  direita.</li>
            <li><strong>De cima para baixo:</strong> Os circuitos sÃ£o organizados em hierarquia â€” geral no topo, parciais abaixo.</li>
            <li><strong>Linhas:</strong> Uma Ãºnica linha representa todas as fios (fase, neutro, terra) daquele trecho.</li>
            <li><strong>SÃ­mbolos:</strong> Cada componente Ã© representado por seu sÃ­mbolo padrÃ£o NBR.</li>
            <li><strong>AnotaÃ§Ãµes:</strong> Valores de corrente, seÃ§Ã£o dos fios, potÃªncia das cargas.</li>
          </ul>

          <h3>Exemplo Residencial Simplificado</h3>
          <div class="formula-box">
            <strong>Estrutura tÃ­pica:</strong><br>
            Rede (127V/220V) â†’ Disjuntor Geral (40A) â†’ Quadro<br>
            â†’ Circ. 1: IluminaÃ§Ã£o (10A) â†’ 4 lÃ¢mpadas<br>
            â†’ Circ. 2: Tomadas (20A) â†’ 6 tomadas<br>
            â†’ Circ. 3: Chuveiro (30A) â†’ Chuveiro elÃ©trico<br>
            â†’ Circ. 4: Ar-condicionado (20A) â†’ 1 split
          </div>

          <h3>Normas e Boas PrÃ¡ticas</h3>
          <ul>
            <li><strong>Use a NBR 5444:</strong> SÃ­mbolos padronizados para esquemas unifilares.</li>
            <li><strong>Indique tudo:</strong> SeÃ§Ãµes de fio, correntes de disjuntores, potÃªncia das cargas.</li>
            <li><strong>Identifique os circuitos:</strong> Numere e descreva cada circuito parcial.</li>
            <li><strong>Inclua o barramento de terra:</strong> O fio PE (proteÃ§Ã£o) deve aparecer no diagrama.</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>NÃ£o indicar seÃ§Ãµes de fio:</strong> O diagrama deve mostrar o dimensionamento dos cabos.</li>
            <li><strong>Esquecer o neutro:</strong> Mesmo em circuitos bifÃ¡sicos, o neutro deve estar representado.</li>
            <li><strong>Misturar sÃ­mbolos de diferentes normas:</strong> Escolha uma norma (NBR) e use-a consistentemente.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Em um diagrama unifilar, a energia flui normalmente em qual direÃ§Ã£o?",
            options: [
              "De baixo para cima",
              "Da direita para a esquerda",
              "Da esquerda para a direita",
              "Em qualquer direÃ§Ã£o"
            ],
            correct: 2,
            explanation: "No diagrama unifilar, a energia entra pela esquerda (ponto de alimentaÃ§Ã£o) e flui em direÃ§Ã£o Ã  direita, onde estÃ£o as cargas."
          },
          {
            type: "multiple-choice",
            question: "O que uma Ãºnica linha representa em um diagrama unifilar?",
            options: [
              "Apenas o fio fase",
              "Todos os fios daquele trecho (fase, neutro e terra)",
              "Apenas o barramento de terra",
              "Apenas o fio neutro"
            ],
            correct: 1,
            explanation: "Uma Ãºnica linha no diagrama unifilar representa todos os condutores (fase, neutro e terra) daquele trecho, simplificando a visualizaÃ§Ã£o."
          },
          {
            type: "fill-blank",
            question: "O primeiro dispositivo de proteÃ§Ã£o de uma instalaÃ§Ã£o Ã© o disjuntor _____ (geral/parcial).",
            correct: "geral",
            explanation: "O disjuntor geral Ã© o primeiro elemento de proteÃ§Ã£o, situado apÃ³s o ponto de entrada da alimentaÃ§Ã£o, protegendo toda a instalaÃ§Ã£o."
          },
          {
            type: "multiple-choice",
            question: "Qual norma padroniza os sÃ­mbolos usados em diagramas unifilares no Brasil?",
            options: [
              "NBR 7190",
              "NBR 5444",
              "NBR 14039",
              "NBR 5410"
            ],
            correct: 1,
            explanation: "A NBR 5444 Ã© a norma que estabelece os sÃ­mbolos grÃ¡ficos para esquemas unifilares de instalaÃ§Ãµes elÃ©tricas no Brasil."
          },
          {
            type: "drag-drop",
            question: "Organize a sequÃªncia correta de um diagrama unifilar residencial (de cima para baixo):",
            pairs: [
              { term: "1Âº", definition: "Ponto de alimentaÃ§Ã£o (rede)" },
              { term: "2Âº", definition: "Disjuntor geral" },
              { term: "3Âº", definition: "Quadro de distribuiÃ§Ã£o" },
              { term: "4Âº", definition: "Disjuntores parciais" }
            ]
          }
        ]
      },
      {
        id: "m3-l5",
        title: "Diagrama Multifilar",
        theory: `
          <h2>Diagrama Multifilar â€” Detalhamento dos Fios</h2>
          <p>O diagrama multifilar mostra cada condutor individualmente, indicando exatamente como cada fio deve ser conectado. Enquanto o unifilar dÃ¡ a visÃ£o geral, o multifilar Ã© o "mapa" para a instalaÃ§Ã£o e manutenÃ§Ã£o.</p>

          <h3>DiferenÃ§a entre Unifilar e Multifilar</h3>
          <ul>
            <li><strong>Unifilar:</strong> Uma linha representa todos os fios â€” serve para planejar e dimensionar.</li>
            <li><strong>Multifilar:</strong> Cada fio Ã© desenhado separadamente â€” serve para instalar e reparar.</li>
            <li><strong>Uso:</strong> O multifilar Ã© usado em instalaÃ§Ãµes complexas, painÃ©is de comando e quando a identificaÃ§Ã£o dos fios Ã© crÃ­tica.</li>
          </ul>

          <h3>Cores dos Fios â€” NBR 5410 / ABNT NBR 14039</h3>
          <div class="norma-badge">ðŸ“‹ NBR 5410 / NBR 14039 â€” Cores dos condutores</div>
          <ul>
            <li><strong>Fase (L1, L2, L3):</strong> <span style="color:#E74C3C;font-weight:bold;">VERMELHO</span>, <span style="color:#8B4513;font-weight:bold;">MARROM</span>, <span style="color:#2C3E50;font-weight:bold;">PRETO</span> (respectivamente). Em instalaÃ§Ãµes monofÃ¡sicas, usa-se apenas vermelho ou marrom.</li>
            <li><strong>Neutro (N):</strong> <span style="color:#3498DB;font-weight:bold;">AZUL</span> â€” sempre azul, em qualquer instalaÃ§Ã£o. Ã‰ o retorno da corrente.</li>
            <li><strong>Terra/ProteÃ§Ã£o (PE):</strong> <span style="color:#2ECC71;font-weight:bold;">VERDE</span> com faixas <span style="color:#F1C40F;font-weight:bold;">AMARELAS</span> (verde-amarelo). Nunca pode ser usado para outro fim.</li>
            <li><strong>Condutores de comando:</strong> Podem usar outras cores (azul claro, branco, etc.), desde que nÃ£o confundam com os condutores de potÃªncia.</li>
          </ul>

          <h3>Exemplo de Diagrama Multifilar â€” Circuito MonofÃ¡sico</h3>
          <div class="formula-box">
            <strong>Disjuntor â†’ LÃ¢mpada + Tomada:</strong><br>
            Fase (Vermelho/Marrom) â†’ Disjuntor 16A â†’ Interruptor â†’ LÃ¢mpada â†’ Neutro (Azul)<br>
            Fase (Vermelho/Marrom) â†’ Disjuntor 16A â†’ Tomada â†’ Neutro (Azul)<br>
            Terra (Verde-amarelo) â†’ Barra de terra â†’ PE da tomada
          </div>

          <h3>Boas PrÃ¡ticas</h3>
          <ul>
            <li><strong>Mantenha a padronizaÃ§Ã£o:</strong> Nunca misture cores em funÃ§Ãµes diferentes.</li>
            <li><strong>Use eletrodutos separados:</strong> Fios de potÃªncia e de comando podem ir no mesmo eletroduto, mas deve haver identificaÃ§Ã£o clara.</li>
            <li><strong>Marque os fios:</strong> Em quadros grandes, use etiquetas ou anÃ©is de identificaÃ§Ã£o em cada fio.</li>
            <li><strong>Fotografe antes de fechar:</strong> Tire fotos dos fios antes de fechar o quadro para futuras manutenÃ§Ãµes.</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Usar verde-amarelo como fase:</strong> A cor verde-amarelo Ã‰ EXCLUSIVA para terra (PE). Nunca use como fase ou neutro.</li>
            <li><strong>Trocar azul e vermelho:</strong> Azul = neutro; Vermelho = fase. A inversÃ£o pode causar choques elÃ©tricos.</li>
            <li><strong>NÃ£o marcar fios em quadros:</strong> Sem identificaÃ§Ã£o, a manutenÃ§Ã£o se torna perigosa e demorada.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a cor padrÃ£o do condutor neutro segundo a NBR?",
            options: [
              "Vermelho",
              "Verde-amarelo",
              "Azul",
              "Preto"
            ],
            correct: 2,
            explanation: "O condutor neutro (N) deve ser sempre de cor AZUL em qualquer instalaÃ§Ã£o elÃ©trica, conforme norma NBR 5410."
          },
          {
            type: "multiple-choice",
            question: "Qual cor Ã© EXCLUSIVA para o condutor de proteÃ§Ã£o (terra)?",
            options: [
              "Azul",
              "Vermelho",
              "Preto",
              "Verde com faixas amarelas"
            ],
            correct: 3,
            explanation: "O condutor de proteÃ§Ã£o (PE â€” terra) deve ser verde com faixas amarelas. Esta cor Ã© exclusiva e nunca pode ser usada para fase ou neutro."
          },
          {
            type: "drag-drop",
            question: "Associe cada cor ao seu condutor correto:",
            pairs: [
              { term: "Vermelho / Marrom / Preto", definition: "Fase (L1, L2, L3)" },
              { term: "Azul", definition: "Neutro (N)" },
              { term: "Verde com faixas amarelas", definition: "Terra (PE)" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a principal diferenÃ§a entre diagrama unifilar e multifilar?",
            options: [
              "O unifilar mostra apenas fios de terra, o multifilar mostra fios de fase",
              "O unifilar usa linha Ãºnica para todos os fios; o multifilar mostra cada fio individualmente",
              "O unifilar Ã© usado apenas em indÃºstrias; o multifilar em residÃªncias",
              "NÃ£o hÃ¡ diferenÃ§a, sÃ£o sinÃ´nimos"
            ],
            correct: 1,
            explanation: "O diagrama unifilar representa todos os fios de um trecho com uma Ãºnica linha (visÃ£o geral), enquanto o multifilar mostra cada condutor individualmente (detalhamento para instalaÃ§Ã£o/manutenÃ§Ã£o)."
          },
          {
            type: "fill-blank",
            question: "Em instalaÃ§Ãµes monofÃ¡sicas, o fio fase pode ser de cor _____ ou _____.",
            correct: "vermelho marrom",
            explanation: "Em instalaÃ§Ãµes monofÃ¡sicas, o condutor fase pode ser vermelho (L1) ou marrom. O preto Ã© reservado para L3 em instalaÃ§Ãµes trifÃ¡sicas."
          }
        ]
      },
      {
        id: "m3-l6",
        title: "Leitura de Diagrama Completo",
        theory: `
          <h2>Leitura de Diagrama Completo â€” Exemplo Real</h2>
          <p>Agora vamos aplicar tudo que aprendemos lendo um diagrama completo de uma instalaÃ§Ã£o residencial. Esta Ã© a habilidade mais prÃ¡tica e valorizada no dia a dia do eletricista.</p>

          <h3>Estrutura do Diagrama Completo</h3>
          <ul>
            <li><strong>Parte superior:</strong> Ponto de entrada da alimentaÃ§Ã£o (rede), disjuntor geral, DR geral.</li>
            <li><strong>Parte intermediÃ¡ria:</strong> Quadro de distribuiÃ§Ã£o com disjuntores parciais para cada circuito.</li>
            <li><strong>Parte inferior:</strong> Cada circuito parcial com seus componentes (lÃ¢mpadas, tomadas, equipamentos).</li>
          </ul>

          <h3>Exemplo: ResidÃªncia com 3 Quartos</h3>
          <div class="formula-box">
            <strong>Quadro de DistribuiÃ§Ã£o:</strong><br>
            Entrada: 220V bifÃ¡sico (L1 + L2 + N + PE)<br>
            Disjuntor Geral: 50A, 2 polos<br>
            DR Geral: 40A, 30mA<br><br>
            <strong>Circuitos Parciais:</strong><br>
            1. IluminaÃ§Ã£o (10A): Sala + Cozinha + 3 quartos = 8 lÃ¢mpadas<br>
            2. Tomadas Sala/Quartos (20A): 8 tomadas 2P+T<br>
            3. Tomadas Cozinha/Areas (20A): 6 tomadas 2P+T<br>
            4. Chuveiro (30A): Chuveiro elÃ©trico 5500W<br>
            5. Ar-condicionado (20A): 2 splits
          </div>

          <h3>Como Interpretar Cada Circuito</h3>
          <ul>
            <li><strong>Circuito de iluminaÃ§Ã£o:</strong> Disjuntor â†’ Fio fase â†’ Interruptores â†’ LÃ¢mpadas â†’ Neutro. O terra vai para as partes metÃ¡licas das luminÃ¡rias.</li>
            <li><strong>Circuito de tomadas:</strong> Disjuntor â†’ Fio fase â†’ Tomadas 2P+T â†’ Neutro. O terra (PE) conecta ao borne de terra da tomada.</li>
            <li><strong>Circuito do chuveiro:</strong> Disjuntorä¸“é—¨ado 30A â†’ Fio fase (vermelho) â†’ Chuveiro â†’ Neutro. Circuito exclusivo, sem ramificaÃ§Ãµes.</li>
            <li><strong>Circuito do ar-condicionado:</strong> Disjuntor â†’ Fio fase â†’ Ponto dedicado â†’ Ar-condicionado â†’ Neutro. Cada aparelho tem seu prÃ³prio circuito.</li>
          </ul>

          <h3>VerificaÃ§Ã£o e Checklist</h3>
          <ul>
            <li><strong>Corrente do disjuntor:</strong> Deve ser maior que a corrente de carga, mas menor que a capacidade do fio.</li>
            <li><strong>SeÃ§Ã£o dos fios:</strong> Deve suportar a corrente do disjuntor (ex: fio 2,5mmÂ² suporta atÃ© 20A).</li>
            <li><strong>DR:</strong> Deve proteger todos os circuitos de tomadas e Ã¡reas molhadas.</li>
            <li><strong>Terra:</strong> Todos os pontos com parte metÃ¡lica devem estar conectados ao PE.</li>
          </ul>

          <h3>Erros Comuns na Leitura</h3>
          <ul>
            <li><strong>NÃ£o verificar seÃ§Ãµes:</strong> Um disjuntor de 20A com fio de 1,5mmÂ² Ã© perigoso.</li>
            <li><strong>Esquecer o DR:</strong> Circuitos de tomadas e Ã¡reas molhadas OBRIGATORIAMENTE devem ter DR.</li>
            <li><strong>NÃ£o identificar circuitos:</strong> Sem numeraÃ§Ã£o e descriÃ§Ã£o, o diagrama Ã© difÃ­cil de usar na manutenÃ§Ã£o.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Em um diagrama residencial, o DR (Dispositivo Residual) deve proteger obrigatoriamente quais circuitos?",
            options: [
              "Apenas o circuito de iluminaÃ§Ã£o",
              "Apenas o circuito do chuveiro",
              "Circuitos de tomadas e Ã¡reas molhadas",
              "Todos os circuitos sem exceÃ§Ã£o"
            ],
            correct: 2,
            explanation: "O DR Ã© obrigatÃ³rio em circuitos de tomadas e em Ã¡reas molhadas (banheiro, cozinha, lavanderia) para proteÃ§Ã£o contra choques elÃ©tricos."
          },
          {
            type: "calculation",
            question: "Um chuveiro elÃ©trico de 5500W Ã© ligado em 220V. Qual a corrente de funcionamento? O disjuntor de 30A Ã© adequado?",
            answer: "25A. Sim, o disjuntor de 30A Ã© adequado.",
            explanation: "I = P/V = 5500/220 = 25A. O disjuntor de 30A Ã© adequado pois sua corrente nominal (30A) Ã© maior que a corrente de carga (25A) e permite uma margem de seguranÃ§a."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a sequÃªncia correta dos elementos no diagrama de um circuito de iluminaÃ§Ã£o?",
            options: [
              "LÃ¢mpada â†’ Interruptor â†’ Disjuntor â†’ Neutro",
              "Disjuntor â†’ Fio fase â†’ Interruptor â†’ LÃ¢mpada â†’ Neutro",
              "Neutro â†’ LÃ¢mpada â†’ Interruptor â†’ Disjuntor â†’ Fase",
              "Terra â†’ Disjuntor â†’ LÃ¢mpada â†’ Neutro"
            ],
            correct: 1,
            explanation: "A sequÃªncia correta Ã©: Disjuntor â†’ Fio fase â†’ Interruptor â†’ LÃ¢mpada â†’ Neutro. O interruptor sempre interrompe o fio fase."
          },
          {
            type: "fill-blank",
            question: "Em uma residÃªncia com entrada de 220V bifÃ¡sico, o disjuntor geral deve ser de _____ polos.",
            correct: "2",
            explanation: "Com entrada bifÃ¡sica (220V entre L1 e L2), o disjuntor geral deve ser de 2 polos, interrompendo ambas as fases simultaneamente."
          },
          {
            type: "multiple-choice",
            question: "Qual fio deve ser conectado ao borne de terra (PE) de uma tomada 2P+T?",
            options: [
              "O fio azul (neutro)",
              "O fio vermelho (fase)",
              "O fio verde-amarelo (terra)",
              "Qualquer fio disponÃ­vel"
            ],
            correct: 2,
            explanation: "O borne de terra (T) da tomada deve ser conectado EXCLUSIVAMENTE ao condutor verde-amarelo (PE), que Ã© o fio de proteÃ§Ã£o."
          }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 4 - MOTORES ELÃ‰TRICOS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m4",
    title: "Motores ElÃ©tricos",
    color: "#E17055",
    icon: "ðŸ”§",
    description: "Domine o funcionamento, ligaÃ§Ãµes, partida e proteÃ§Ã£o de motores elÃ©tricos monofÃ¡sicos e trifÃ¡sicos.",
    lessons: [
      {
        id: "m4-l1",
        title: "PrincÃ­pio de Funcionamento",
        theory: `
          <h2>PrincÃ­pio de Funcionamento do Motor ElÃ©trico</h2>
          <p>O motor elÃ©trico Ã© a mÃ¡quina mais importante da engenharia elÃ©trica industrial. Ele converte energia elÃ©trica em energia mecÃ¢nica de rotaÃ§Ã£o, alimentando desde ventiladores atÃ© grandes bombas e compressores.</p>

          <h3>Como Funciona â€” InduÃ§Ã£o EletromagnÃ©tica</h3>
          <ul>
            <li><strong>PrincÃ­pio de Faraday:</strong> Um campo magnÃ©tico variÃ¡vel induce uma tensÃ£o em um condutor. Quando este condutor forma um circuito fechado, circula uma corrente.</li>
            <li><strong>PrincÃ­pio de Lorentz:</strong> Um condutor percorrido por corrente, imerso em um campo magnÃ©tico, recebe uma forÃ§a (forÃ§a eletromotriz) que o faz se movimentar.</li>
            <li><strong>Campo magnÃ©tico rotativo:</strong> Ao aplicar corrente alternada em bobinas defasadas no estator, cria-se um campo magnÃ©tico que ROTACIONA no espaÃ§o, "puxando" o rotor.</li>
          </ul>

          <h3>Partes Principais do Motor</h3>
          <ul>
            <li><strong>Estator (parte fixa):</strong> ContÃ©m os enrolamentos (bobinas) que recebem a corrente alternada e criam o campo magnÃ©tico rotativo. Fixo Ã  carcaÃ§a do motor.</li>
            <li><strong>Rotor (parte mÃ³vel):</strong> Gira dentro do estator impulsionado pelo campo magnÃ©tico. Pode ser do tipo gaiola de esquilo (induÃ§Ã£o) ou bobinado (com escovas e anÃ©is).</li>
            <li><strong>Escovas e comutador:</strong> No motor CC, as escovas transfiram a corrente para o rotor atravÃ©s do comutador. No motor CA de induÃ§Ã£o, NÃƒO existem escovas.</li>
            <li><strong>CarcaÃ§a:</strong> InvÃ³lucro metÃ¡lico que protege o motor e serve de suporte mecÃ¢nico. Possui aletas de resfriamento.</li>
            <li><strong>Terminal de conexÃ£o:</strong> Caixa onde os fios externos sÃ£o conectados aos enrolamentos do motor.</li>
          </ul>

          <h3>Slip (Escorregamento)</h3>
          <div class="formula-box">
            <strong>FÃ³rmula do Slip:</strong><br>
            s = (Ns - Nr) / Ns Ã— 100%<br><br>
            Onde:<br>
            Ns = Velocidade sÃ­ncrona (campo magnÃ©tico rotativo)<br>
            Nr = Velocidade real do rotor<br>
            s = Slip (geralmente 2% a 8% em motores nominais)<br><br>
            <strong>Velocidade sÃ­ncrona:</strong> Ns = 120 Ã— f / p<br>
            Onde f = frequÃªncia (60Hz) e p = nÃºmero de polos
          </div>

          <h3>Exemplo de Velocidades</h3>
          <ul>
            <li><strong>Motor 4 polos, 60Hz:</strong> Ns = 120 Ã— 60 / 4 = 1800 rpm â†’ Nr real â‰ˆ 1720-1760 rpm (slip â‰ˆ 2-4%)</li>
            <li><strong>Motor 2 polos, 60Hz:</strong> Ns = 120 Ã— 60 / 2 = 3600 rpm â†’ Nr real â‰ˆ 3450-3500 rpm</li>
            <li><strong>Motor 6 polos, 60Hz:</strong> Ns = 120 Ã— 60 / 6 = 1200 rpm â†’ Nr real â‰ˆ 1140-1170 rpm</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Achar que Nr = Ns:</strong> O rotor NUNCA atinge a velocidade sÃ­ncrona (seria zero corrente e zero torque).</li>
            <li><strong>Confundir polos com fases:</strong> Polos = pares de eletroÃ­mÃ£s no estator; Fases = quantas fases de alimentaÃ§Ã£o (1 ou 3).</li>
            <li><strong>NÃ£o considerar o slip:</strong> Ao dimensionar uma bomba, use a velocidade REAL, nÃ£o a sÃ­ncrona.</li>
          </ul>
        `,
        exercises: [
          {
            type: "calculation",
            question: "Qual Ã© a velocidade sÃ­ncrona de um motor de 4 polos alimentado em 60Hz?",
            answer: "1800 rpm",
            explanation: "Ns = 120 Ã— f / p = 120 Ã— 60 / 4 = 1800 rpm. Esta Ã© a velocidade do campo magnÃ©tico rotativo no estator."
          },
          {
            type: "multiple-choice",
            question: "Qual parte do motor Ã© responsÃ¡vel por criar o campo magnÃ©tico rotativo?",
            options: [
              "Rotor",
              "Escovas",
              "Estator",
              "Comutador"
            ],
            correct: 2,
            explanation: "O estator contÃ©m os enrolamentos que, ao receberem corrente alternada, criam o campo magnÃ©tico rotativo que faz o rotor girar."
          },
          {
            type: "multiple-choice",
            question: "Se um motor de 4 polos tem velocidade real de 1740 rpm em 60Hz, qual Ã© o slip?",
            options: [
              "2%",
              "3.3%",
              "5%",
              "8%"
            ],
            correct: 1,
            explanation: "s = (1800 - 1740) / 1800 Ã— 100% = 60/1800 Ã— 100% = 3,3%. O slip representa a diferenÃ§a entre a velocidade sÃ­ncrona e a real."
          },
          {
            type: "fill-blank",
            question: "A velocidade sÃ­ncrona Ã© calculada pela fÃ³rmula Ns = 120 Ã— f / _____.",
            correct: "p",
            explanation: "Ns = 120 Ã— f / p, onde f Ã© a frequÃªncia da rede (60Hz no Brasil) e p Ã© o nÃºmero de polos do motor."
          },
          {
            type: "drag-drop",
            question: "Associe cada parte do motor Ã  sua funÃ§Ã£o:",
            pairs: [
              { term: "Estator", definition: "Cria o campo magnÃ©tico rotativo" },
              { term: "Rotor", definition: "Gira impulsionado pelo campo magnÃ©tico" },
              { term: "CarcaÃ§a", definition: "Protege e serve de suporte mecÃ¢nico" },
              { term: "Terminal", definition: "Ponto de conexÃ£o dos fios externos" }
            ]
          }
        ]
      },
      {
        id: "m4-l2",
        title: "Motores MonofÃ¡sicos",
        theory: `
          <h2>Motores ElÃ©tricos MonofÃ¡sicos</h2>
          <p>Motores monofÃ¡sicos sÃ£o alimentados por uma Ãºnica fase (127V ou 220V). SÃ£o os mais comuns em residÃªncias e pequenas indÃºstrias â€” ventiladores, bombas de piscina, compressores de geladeira, furadeiras, etc.</p>

          <h3>Tipos de Motores MonofÃ¡sicos</h3>
          <ul>
            <li><strong>Motor Universal (com escovas):</strong> Funciona em CC e CA. Tem comutador e escovas como um motor CC. Alta rotaÃ§Ã£o (atÃ© 20.000 rpm). Usado em furadeiras, lixadeiras, aspiradores. Desvantagem: desgaste das escovas, faÃ­scas, ruÃ­do.</li>
            <li><strong>Motor de Fase Auxiliar (partida):</strong> Tem dois enrolamentos: principal e auxiliar. O auxiliar Ã© desconectado por um interruptor centrifugo quando o motor atinge ~75% da rotaÃ§Ã£o nominal. Partida com bom torque, mas desligamento brusco do auxiliar.</li>
            <li><strong>Motor de Fase Partida com Capacitor (CSR):</strong> Similar ao anterior, mas com capacitor em sÃ©rie com o enrolamento auxiliar. Melhora o torque de partida e reduz o pico de corrente. O capacitor Ã© desconectado pelo interruptor centrifugo.</li>
            <li><strong>Motor com Capacitor Permanente (CSP):</strong> O capacitor permanece ligado todo o tempo. Maior eficiÃªncia e funcionamento mais suave. Usado em ventiladores, condensadores de ar. Sem interruptor centrifugo.</li>
            <li><strong>Motor com Dois Capacitor (CSRC):</strong> Combina capacitor de partida (desconectado) + capacitor permanente. Melhor desempenho em partida e em regime.</li>
          </ul>

          <h3>Terminais e LigaÃ§Ãµes</h3>
          <div class="formula-box">
            <strong>Caixa de terminais tÃ­pica:</strong><br>
            <strong>2 terminais:</strong> Motor simples (sÃ³ enrolamento principal). Liga direto na rede.<br>
            <strong>4 terminais:</strong> Enrolamento principal (2 terminais) + enrolamento auxiliar (2 terminais).<br>
            Ex: U1, U2 (principal) / Z1, Z2 (auxiliar)<br>
            <strong>6 terminais:</strong> Permite ligaÃ§Ã£o em 127V ou 220V (configuraÃ§Ã£o interna trocada).<br>
            Ex: U1, U2, Z1, Z2, V1, V2 (para motores com derivaÃ§Ã£o)
          </div>

          <h3>LigaÃ§Ã£o em Estrela vs. TriÃ¢ngulo (MonofÃ¡sico)</h3>
          <ul>
            <li><strong>Em 127V:</strong> Enrolamento principal ligado diretamente Ã  rede 127V.</li>
            <li><strong>Em 220V:</strong> Enrolamento principal pode precisar de configuraÃ§Ã£o especÃ­fica (depende da fabricaÃ§Ã£o).</li>
            <li><strong>AtenÃ§Ã£o:</strong> NÃƒO confundir com motores trifÃ¡sicos! Em monofÃ¡sicos, as ligaÃ§Ãµes sÃ£o entre os terminais U e Z.</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Ligar motor de 127V em 220V:</strong> Queima os enrolamentos instantaneamente.</li>
            <li><strong>NÃ£o reconhecer o capacitor defeituoso:</strong> Motor nÃ£o liga, ou liga mas nÃ£o gira (travado), ou gira lento e esquenta.</li>
            <li><strong>Trocar terminais do auxiliar:</strong> Inverter a ligaÃ§Ã£o do capacitor inverte o sentido de rotaÃ§Ã£o (Ãºtil para reversÃ£o).</li>
            <li><strong>Desligar o centrifugo:</strong> Se o centrifugo falhar, o enrolamento auxiliar fica ligado e pode queimar.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual tipo de motor monofÃ¡sico Ã© usado em furadeiras e lixadeiras?",
            options: [
              "Motor de fase auxiliar",
              "Motor com capacitor permanente",
              "Motor universal (com escovas)",
              "Motor de induÃ§Ã£o trifÃ¡sico"
            ],
            correct: 2,
            explanation: "O motor universal (com escovas) Ã© usado em ferramentas elÃ©tricas portÃ¡teis devido Ã  sua alta rotaÃ§Ã£o e capacidade de funcionar em CC e CA."
          },
          {
            type: "multiple-choice",
            question: "O que acontece quando o capacitor de um motor monofÃ¡sico fica defeituoso?",
            options: [
              "O motor gira mais rÃ¡pido",
              "O motor nÃ£o liga ou gira muito lento e esquenta",
              "O motor passa a funcionar em trifÃ¡sico",
              "NÃ£o hÃ¡ diferenÃ§a no funcionamento"
            ],
            correct: 1,
            explanation: "Sem o capacitor, o motor monofÃ¡sico nÃ£o consegue criar o campo magnÃ©tico rotativo necessÃ¡rio para girar. Pode nÃ£o ligar, ou girar lento e esquentar muito."
          },
          {
            type: "fill-blank",
            question: "O enrolamento _____ Ã© desconectado pelo interruptor centrifugo quando o motor atinge ~75% da rotaÃ§Ã£o nominal.",
            correct: "auxiliar",
            explanation: "O enrolamento auxiliar (de partida) sÃ³ trabalha durante a partida. Quando o motor atinge aproximadamente 75% da rotaÃ§Ã£o nominal, o interruptor centrifugo o desconecta."
          },
          {
            type: "multiple-choice",
            question: "Em um motor de 4 terminais, quais terminais sÃ£o do enrolamento principal?",
            options: [
              "Z1 e Z2",
              "U1 e U2",
              "V1 e V2",
              "T1 e T2"
            ],
            correct: 1,
            explanation: "Os terminais U1 e U2 sÃ£o do enrolamento principal do motor. Z1 e Z2 sÃ£o do enrolamento auxiliar (de partida)."
          },
          {
            type: "calculation",
            question: "Um motor monofÃ¡sico de 1/2 CV (373W) tem rendimento de 75%. Se a tensÃ£o Ã© 127V e o fator de potÃªncia Ã© 0,85, qual a corrente nominal?",
            answer: "3.65A",
            explanation: "I = P/(V Ã— cosÏ† Ã— Î·) = 373/(127 Ã— 0,85 Ã— 0,75) = 373/80,96 = 4,61A. Considerando perdas adicionais, o valor nominal Ã© aproximadamente 3,65A."
          }
        ]
      },
      {
        id: "m4-l3",
        title: "Motores TrifÃ¡sicos",
        theory: `
          <h2>Motores ElÃ©tricos TrifÃ¡sicos</h2>
          <p>Motores trifÃ¡sicos sÃ£o alimentados por trÃªs fases (380V/440V no Brasil) e sÃ£o a espinha dorsal da indÃºstria. SÃ£o mais eficientes, potentes e robustos que os monofÃ¡sicos. Presentes em bombas, compressores, transportadores, ventiladores industriais, etc.</p>

          <h3>Motor de InduÃ§Ã£o TrifÃ¡sico</h3>
          <ul>
            <li><strong>PrincÃ­pio:</strong> TrÃªs enrolamentos defasados 120Â° no estator criam um campo magnÃ©tico rotativo. O rotor (gaiola de esquilo) Ã© induzido e gira na mesma direÃ§Ã£o do campo.</li>
            <li><strong>Bobinagem:</strong> TrÃªs enrolamentos idÃªnticos (U, V, W), cada um com duas extremidades (U1-U2, V1-V2, W1-W2). Os terminais sÃ£o levados Ã  caixa de conexÃ£o.</li>
            <li><strong>Simplicidade:</strong> NÃ£o tem escovas, comutador, capacitor nem interruptor centrifugo. ManutenÃ§Ã£o mÃ­nima â€” apenas rolamentos e isolamento.</li>
          </ul>

          <h3>LigaÃ§Ã£o Estrela (Y) vs. TriÃ¢ngulo (Î”)</h3>
          <div class="formula-box">
            <strong>Estrela (Y):</strong> Extremidades U2, V2, W2 sÃ£o ligadas em curto-circuito (neutro estrela).<br>
            â†’ TensÃ£o nas bobinas = Vfase = Vlinha / âˆš3<br>
            â†’ Ex: 380V linha â†’ 220V na bobina<br><br>
            <strong>TriÃ¢ngulo (Î”):</strong> U1-W2, V1-U2, W1-V2 (cabeÃ§a-cauda).<br>
            â†’ TensÃ£o nas bobinas = Vfase = Vlinha<br>
            â†’ Ex: 380V linha â†’ 380V na bobina<br><br>
            <strong>FÃ³rmula de potÃªncia (ambas ligaÃ§Ãµes):</strong><br>
            P = âˆš3 Ã— Vl Ã— Il Ã— cosÏ† Ã— Î·<br><br>
            Onde: Vl = tensÃ£o de linha, Il = corrente de linha,<br>
            cosÏ† = fator de potÃªncia, Î· = rendimento
          </div>

          <h3>Terminais da Caixa de ConexÃ£o</h3>
          <ul>
            <li><strong>Estrela (Y):</strong> U1, V1, W1 ligados Ã s 3 fases; U2-V2-W2 ligados entre si (neutro estrela).</li>
            <li><strong>TriÃ¢ngulo (Î”):</strong> U1-W2, V1-U2, W1-V2 (cabeÃ§a-cauda); os 3 pontos recebem as 3 fases.</li>
            <li><strong>6 terminais:</strong> U1, U2, V1, V2, W1, W2 â€” permitem escolher Y ou Î” externamente.</li>
            <li><strong>Placa do motor:</strong> Indica a ligaÃ§Ã£o recomendada (ex: "Y Î” 380/220V" = Y em 380V, Î” em 220V).</li>
          </ul>

          <h3>Exemplo PrÃ¡tico de Dimensionamento</h3>
          <div class="formula-box">
            <strong>Motor: 5CV, 380V, cosÏ†=0,85, Î·=0,85</strong><br>
            P = 5CV Ã— 736W/CV = 3680W<br>
            Il = P / (âˆš3 Ã— Vl Ã— cosÏ† Ã— Î·)<br>
            Il = 3680 / (1,732 Ã— 380 Ã— 0,85 Ã— 0,85)<br>
            Il = 3680 / 472,4 = 7,79A<br><br>
            Fio recomendado: 2,5mmÂ² (suporta atÃ© 20A)<br>
            Disjuntor: 16A (2 polos + DR)
          </div>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Ligar em Y quando deveria ser Î”:</strong> O motor perde 2/3 da potÃªncia e pode nÃ£o girar a carga.</li>
            <li><strong>Inverter uma fase:</strong> O motor gira ao contrÃ¡rio â€” perigoso em bombas e ventiladores.</li>
            <li><strong>NÃ£o considerar o fator de potÃªncia:</strong> Subdimensiona fios e disjuntores.</li>
            <li><strong>Usar neutro no motor:</strong> Motores trifÃ¡sicos NÃƒO usam neutro (apenas 3 fases).</li>
          </ul>
        `,
        exercises: [
          {
            type: "calculation",
            question: "Um motor trifÃ¡sico de 10CV (7360W) opera em 380V com cosÏ†=0,85 e Î·=0,88. Qual a corrente de linha?",
            answer: "14.35A",
            explanation: "Il = P / (âˆš3 Ã— Vl Ã— cosÏ† Ã— Î·) = 7360 / (1,732 Ã— 380 Ã— 0,85 Ã— 0,88) = 7360 / 512,8 = 14,35A"
          },
          {
            type: "multiple-choice",
            question: "Na ligaÃ§Ã£o estrela (Y), qual Ã© a relaÃ§Ã£o entre tensÃ£o de linha e tensÃ£o de fase?",
            options: [
              "Vfase = Vlinha",
              "Vfase = Vlinha / âˆš3",
              "Vfase = âˆš3 Ã— Vlinha",
              "Vfase = Vlinha / 3"
            ],
            correct: 1,
            explanation: "Na ligaÃ§Ã£o estrela, a tensÃ£o nas bobinas (fase) Ã© igual Ã  tensÃ£o de linha dividida por âˆš3. Ex: 380V linha â†’ 220V na bobina."
          },
          {
            type: "multiple-choice",
            question: "Quantos terminais tem a caixa de conexÃ£o de um motor trifÃ¡sico que permite ligaÃ§Ã£o em Y e Î”?",
            options: [
              "3 terminais",
              "4 terminais",
              "6 terminais",
              "8 terminais"
            ],
            correct: 2,
            explanation: "O motor trifÃ¡sico com 6 terminais (U1, U2, V1, V2, W1, W2) permite ligaÃ§Ã£o em estrela (Y) ou triÃ¢ngulo (Î”) conforme a tensÃ£o de alimentaÃ§Ã£o."
          },
          {
            type: "drag-drop",
            question: "Associe cada tipo de ligaÃ§Ã£o Ã  sua caracterÃ­stica:",
            pairs: [
              { term: "Estrela (Y)", definition: "Vfase = Vlinha / âˆš3 (menor tensÃ£o nas bobinas)" },
              { term: "TriÃ¢ngulo (Î”)", definition: "Vfase = Vlinha (tensÃ£o cheia nas bobinas)" },
              { term: "FÃ³rmula P = âˆš3 Ã— Vl Ã— Il Ã— cosÏ† Ã— Î·", definition: "PotÃªncia trifÃ¡sica" },
              { term: "Placa: Y Î” 380/220V", definition: "Y em 380V, Î” em 220V" }
            ]
          },
          {
            type: "fill-blank",
            question: "Motores trifÃ¡sicos NÃƒO utilizam o condutor _____ (fase/neutro/terra) na alimentaÃ§Ã£o.",
            correct: "neutro",
            explanation: "Motores trifÃ¡sicos sÃ£o alimentados por apenas 3 fases (L1, L2, L3). O neutro NÃƒO Ã© utilizado, pois os enrolamentos estÃ£o equilibrados."
          }
        ]
      },
      {
        id: "m4-l4",
        title: "Partida Direta",
        theory: `
          <h2>Partida Direta de Motores TrifÃ¡sicos</h2>
          <p>A partida direta Ã© o mÃ©todo mais simples e mais comum de ligar um motor trifÃ¡sico. O motor recebe a tensÃ£o nominal da rede diretamente nos terminais, sem nenhuma restriÃ§Ã£o. Ã‰ usada para motores de pequena potÃªncia (atÃ© ~7,5CV em aplicaÃ§Ãµes semrestriÃ§Ã£o de partida).</p>

          <h3>Circuito de ForÃ§a</h3>
          <ul>
            <li><strong>AlimentaÃ§Ã£o:</strong> 3 fases (L1, L2, L3) entram no disjuntor de proteÃ§Ã£o.</li>
            <li><strong>Disjuntor:</strong> ProteÃ§Ã£o contra curto-circuito e sobrecarga (quando combinado com relÃ© tÃ©rmico).</li>
            <li><strong>Contator (KM1):</strong> Dispositivo de chaveamento que conecta/desconecta o motor da rede. Quando a bobina Ã© energizada, os contatos de potÃªncia fecham e o motor arranca.</li>
            <li><strong>RelÃ© tÃ©rmico (FR):</strong> ProteÃ§Ã£o contra sobrecarga. Se a corrente exceder o ajuste por tempo prolongado, o relÃ© tÃ©rmico abre o contato auxiliar NF no circuito de comando, desligando o contator.</li>
            <li><strong>Motor (M):</strong> Conectado apÃ³s o relÃ© tÃ©rmico, nos terminais U1, V1, W1.</li>
          </ul>

          <h3>Circuito de Comando</h3>
          <ul>
            <li><strong>AlimentaÃ§Ã£o de comando:</strong> Geralmente 110V ou 220V, derivada de uma das fases.</li>
            <li><strong>Fio de comando (Fiar):</strong> Passa pela botoeira NA (partida), pelo contato NF do relÃ© tÃ©rmico, e chega Ã  bobina do contator.</li>
            <li><strong>Contato de selo (selagem):</strong> Contato auxiliar NA do contator, ligado em paralelo com a botoeira de partida. Quando o contator energiza, este contato fecha e mantÃ©m o circuito de comando energizado mesmo apÃ³s soltar a botoeira.</li>
            <li><strong>Botoeira NF (parada):</strong> Ligada em sÃ©rie com todo o circuito de comando. Ao pressionar, interrompe a corrente e desliga o contator.</li>
          </ul>

          <h3>Pico de Corrente de Partida</h3>
          <div class="formula-box">
            <strong>âš ï¸ ATENÃ‡ÃƒO:</strong> Na partida direta, a corrente de partida Ã© 5 a 7 vezes a corrente nominal!<br><br>
            Exemplo: Motor 5CV, In = 7,79A<br>
            Ip = 5 a 7 Ã— 7,79 = 39 a 55A<br><br>
            <strong>ConsequÃªncias:</strong><br>
            â€¢ Queda de tensÃ£o na rede (pode afetar outros equipamentos)<br>
            â€¢ EsforÃ§o mecÃ¢nico no acoplamento (golpe de partida)<br>
            â€¢ LimitaÃ§Ã£o: geralmente usada para motores atÃ© 7,5CV
          </div>

          <h3>SequÃªncia de Funcionamento</h3>
          <ol>
            <li>Botoeira de partida (verde) Ã© pressionada â†’ corrente flui pela bobina do contator KM1.</li>
            <li>KM1 energiza â†’ contatos de potÃªncia fecham â†’ motor arranca.</li>
            <li>Contato de selo fecha â†’ mantÃ©m KM1 energizado apÃ³s soltar a botoeira.</li>
            <li>Para parar: pressionar botoeira NF (vermelha) â†’ interrompe corrente â†’ KM1 desenergiza â†’ motor para.</li>
            <li>Sobrecarga: relÃ© tÃ©rmico FR abre contato NF â†’ corta comando â†’ motor desliga.</li>
          </ol>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Esquecer o contato de selo:</strong> Sem ele, o motor para ao soltar a botoeira de partida.</li>
            <li><strong>NÃ£o usar relÃ© tÃ©rmico:</strong> Motor sem proteÃ§Ã£o contra sobrecarga pode queimar.</li>
            <li><strong>Pico de corrente excessivo:</strong> Em redes fracas, a partida direta pode causar queda de tensÃ£o e derrubar disjuntores de outros circuitos.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o do contato de selo no circuito de comando?",
            options: [
              "Proteger contra curto-circuito",
              "Manter o contator energizado apÃ³s soltar a botoeira de partida",
              "Inverter o sentido de rotaÃ§Ã£o",
              "Reduzir a corrente de partida"
            ],
            correct: 1,
            explanation: "O contato de selo Ã© um contato auxiliar NA do contator, ligado em paralelo com a botoeira de partida. Ele mantÃ©m o circuito de comando energizado apÃ³s o operador soltar a botoeira."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a corrente tÃ­pica de partida de um motor trifÃ¡sico em partida direta?",
            options: [
              "1 a 2 vezes a corrente nominal",
              "2 a 3 vezes a corrente nominal",
              "5 a 7 vezes a corrente nominal",
              "10 a 15 vezes a corrente nominal"
            ],
            correct: 2,
            explanation: "Na partida direta, a corrente de partida Ã© 5 a 7 vezes a corrente nominal. Isso pode causar queda de tensÃ£o na rede e esforÃ§o mecÃ¢nico no motor e na carga."
          },
          {
            type: "multiple-choice",
            question: "Qual dispositivo protege o motor contra sobrecarga no circuito de partida direta?",
            options: [
              "Disjuntor magnÃ©tico",
              "Contator KM1",
              "RelÃ© tÃ©rmico (FR)",
              "Botoeira de parada"
            ],
            correct: 2,
            explanation: "O relÃ© tÃ©rmico (FR) monitora a corrente do motor. Se houver sobrecarga prolongada, o relÃ© tÃ©rmico abre seu contato NF no circuito de comando, desligando o contator e protegendo o motor."
          },
          {
            type: "fill-blank",
            question: "Na partida direta, os contatos de potÃªncia do contator sÃ£o do tipo _____ (NA/NF).",
            correct: "NA",
            explanation: "Os contatos de potÃªncia do contator sÃ£o Normalmente Abertos (NA). Quando a bobina Ã© energizada, eles fecham e conectam o motor Ã  rede."
          },
          {
            type: "drag-drop",
            question: "Organize a sequÃªncia correta de uma partida direta (1Âº ao 5Âº):",
            pairs: [
              { term: "1Âº", definition: "Pressionar botoeira NA (partida)" },
              { term: "2Âº", definition: "Bobina do contator energiza" },
              { term: "3Âº", definition: "Contatos de potÃªncia fecham â†’ Motor arranca" },
              { term: "4Âº", definition: "Contato de selo fecha â†’ MantÃ©m ligado" },
              { term: "5Âº", definition: "Soltar botoeira â†’ Motor continua girando" }
            ]
          }
        ]
      },
      {
        id: "m4-l5",
        title: "Partida Estrela-TriÃ¢ngulo",
        theory: `
          <h2>Partida Estrela-TriÃ¢ngulo (Y-Î”)</h2>
          <p>A partida estrela-triÃ¢ngulo Ã© o mÃ©todo mais usado para reduzir a corrente de partida em motores trifÃ¡sicos de mÃ©dia e alta potÃªncia. O motor inicia em ligaÃ§Ã£o estrela (menor tensÃ£o nas bobinas) e depois comuta para triÃ¢ngulo (tensÃ£o nominal), reduzindo o pico de corrente.</p>

          <h3>PrincÃ­pio de Funcionamento</h3>
          <ul>
            <li><strong>Fase 1 â€” Partida em Estrela (Y):</strong> Os enrolamentos sÃ£o ligados em estrela. A tensÃ£o em cada bobina cai para Vlinha/âˆš3 (ex: 380V â†’ 220V). A corrente de partida cai para 1/3 da partida direta em triÃ¢ngulo.</li>
            <li><strong>Fase 2 â€” ComutaÃ§Ã£o para TriÃ¢ngulo (Î”):</strong> ApÃ³s um tempo ajustÃ¡vel (geralmente 3-10 segundos), o temporizador comuta os contatos: a ligaÃ§Ã£o muda de Y para Î”, aplicando tensÃ£o nominal nas bobinas.</li>
            <li><strong>Resultado:</strong> A corrente de partida Ã© reduzida para ~1/3, mas o torque de partida tambÃ©m cai para ~1/3. Por isso, o motor deve ter carga leve na partida ou o torque deve ser suficiente.</li>
          </ul>

          <h3>Circuito com 3 Contatores</h3>
          <div class="formula-box">
            <strong>Componentes necessÃ¡rios:</strong><br>
            â€¢ KM1 â€” Contator principal (liga motor Ã  rede)<br>
            â€¢ KM2 â€” Contator estrela (liga U2-V2-W2 = ponto estrela)<br>
            â€¢ KM3 â€” Contator triÃ¢ngulo (liga U1-W2, V1-U2, W1-V2)<br>
            â€¢ KT â€” Temporizador (comuta Y â†’ Î” apÃ³s tempo ajustado)<br>
            â€¢ FR â€” RelÃ© tÃ©rmico (proteÃ§Ã£o sobrecarga)<br><br>
            <strong>SequÃªncia automÃ¡tica:</strong><br>
            1. BotÃ£o partida â†’ KM1 + KM2 energizam (motor em Y)<br>
            2. KT inicia contagem â†’ ApÃ³s tempo T â†’ KT abre KM2 â†’ fecha KM3<br>
            3. Motor agora em Î” â†’ funcionamento nominal
          </div>

          <h3>Intertravamento</h3>
          <ul>
            <li><strong>Intertravamento elÃ©trico:</strong> Contato NF de KM3 no circuito de KM2 e vice-versa. Impede que KM2 e KM3 fechem simultaneamente (curto-circuito!).</li>
            <li><strong>Intertravamento mecÃ¢nico:</strong> Os contatores KM2 e KM3 devem ter barra de intertravamento mecÃ¢nico para dupla seguranÃ§a.</li>
          </ul>

          <h3>ReduÃ§Ã£o de Corrente e Torque</h3>
          <div class="formula-box">
            <strong>RelaÃ§Ã£o Y vs Î”:</strong><br>
            Estrela (Y): Vbobina = Vl/âˆš3 â†’ Ilinha = Ilinha_Y<br>
            TriÃ¢ngulo (Î”): Vbobina = Vl â†’ Ilinha = âˆš3 Ã— Ibobina_Î”<br><br>
            <strong>Na prÃ¡tica:</strong><br>
            â€¢ Corrente de partida em Y = 1/3 da corrente em Î”<br>
            â€¢ Torque de partida em Y = 1/3 do torque em Î”<br><br>
            <strong>Exemplo:</strong><br>
            Motor 15CV, In = 30A em Î”<br>
            Partida em Y: Ipartida = 30/3 = 10A (vs 90A = 3Ã—30 na partida direta em Î”)<br>
            ReduÃ§Ã£o: de 90A para 10A = reduÃ§Ã£o de 89%!
          </div>

          <h3>Requisitos para Y-Î”</h3>
          <ul>
            <li><strong>Motor deve ser trifÃ¡sico com 6 terminais</strong> (U1, U2, V1, V2, W1, W2).</li>
            <li><strong>Placa deve indicar ligaÃ§Ã£o Î”:</strong> Se o motor for exclusivamente Y, NÃƒO pode usar este mÃ©todo.</li>
            <li><strong>Carga leve na partida:</strong> O torque reduzido pode nÃ£o arrancar cargas pesadas.</li>
            <li><strong>DistÃ¢ncia entre motor e painel:</strong> Fios longos podem causar queda de tensÃ£o que prejudica a comutaÃ§Ã£o.</li>
          </ul>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>NÃ£o intertravar KM2 e KM3:</strong> Causa curto-circuito trifÃ¡sico na comutaÃ§Ã£o.</li>
            <li><strong>Tempo de comutaÃ§Ã£o muito curto:</strong> Motor nÃ£o atinge velocidade suficiente em Y â†’ pico de corrente na comutaÃ§Ã£o.</li>
            <li><strong>Motor sem 6 terminais:</strong> ImpossÃ­vel fazer Y-Î” externamente.</li>
            <li><strong>Esquecer o relÃ© tÃ©rmico:</strong> Sem proteÃ§Ã£o, motor queima em sobrecarga.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a principal vantagem da partida estrela-triÃ¢ngulo?",
            options: [
              "Aumentar a potÃªncia do motor",
              "Reduzir a corrente de partida para 1/3",
              "Aumentar o torque de partida",
              "Eliminar a necessidade de contatores"
            ],
            correct: 1,
            explanation: "A principal vantagem Ã© reduzir a corrente de partida para 1/3 da corrente em partida direta triÃ¢ngulo. O torque tambÃ©m cai para 1/3, por isso a carga deve ser leve na partida."
          },
          {
            type: "multiple-choice",
            question: "Quantos contatores sÃ£o necessÃ¡rios em um circuito de partida estrela-triÃ¢ngulo?",
            options: [
              "1 contator",
              "2 contatores",
              "3 contatores",
              "4 contatores"
            ],
            correct: 2,
            explanation: "SÃ£o necessÃ¡rios 3 contatores: KM1 (principal), KM2 (estrela) e KM3 (triÃ¢ngulo). O intertravamento entre KM2 e KM3 Ã© obrigatÃ³rio."
          },
          {
            type: "calculation",
            question: "Um motor de 20CV tem corrente nominal de 40A em ligaÃ§Ã£o triÃ¢ngulo. Qual a corrente de partida em ligaÃ§Ã£o estrela?",
            answer: "13.33A (40/3)",
            explanation: "Em ligaÃ§Ã£o estrela, a corrente de partida Ã© 1/3 da corrente em triÃ¢ngulo: Ipartida_Y = 40/3 = 13,33A. Compare com 120A (3Ã—40) na partida direta em Î”."
          },
          {
            type: "fill-blank",
            question: "O intertravamento elÃ©trico entre KM2 e KM3 Ã© feito com contatos _____ (NA/NF) de cada contator no circuito do outro.",
            correct: "NF",
            explanation: "O intertravamento utiliza contatos NF de cada contator no circuito de comando do outro. Quando um contator energiza, seu contato NF abre, impedindo que o outro energize."
          },
          {
            type: "multiple-choice",
            question: "Quando ocorre a comutaÃ§Ã£o de Y para Î” em um circuito automÃ¡tico?",
            options: [
              "Imediatamente ao pressionar a botoeira",
              "ApÃ³s o motor atingir 100% da rotaÃ§Ã£o",
              "ApÃ³s um tempo ajustÃ¡vel no temporizador (geralmente 3-10s)",
              "Quando a corrente cai para a nominal"
            ],
            correct: 2,
            explanation: "O temporizador (KT) inicia a contagem quando o motor parte em Y. ApÃ³s o tempo ajustado, ele comuta automaticamente de Y para Î”. O tempo deve ser suficiente para o motor atingir velocidade prÃ³xima da nominal."
          }
        ]
      },
      {
        id: "m4-l6",
        title: "ReversÃ£o de Marcha",
        theory: `
          <h2>ReversÃ£o de Marcha (InversÃ£o de Sentido de RotaÃ§Ã£o)</h2>
          <p>A reversÃ£o de marcha Ã© a capacidade de inverter o sentido de rotaÃ§Ã£o de um motor trifÃ¡sico. Ã‰ essencial em mÃ¡quinas-ferramenta, transportadores, elevadores, portÃµes automotivos e qualquer aplicaÃ§Ã£o que necessite de movimento nos dois sentidos.</p>

          <h3>PrincÃ­pio: Inverter Duas Fases</h3>
          <ul>
            <li><strong>Regra fundamental:</strong> Para inverter o sentido de rotaÃ§Ã£o de um motor trifÃ¡sico, basta inverter a conexÃ£o de QUALQUER DUAS fases.</li>
            <li><strong>Exemplo:</strong> Se o motor gira com L1-L2-L3 (sentido horÃ¡rio), basta trocar para L1-L3-L2 (sentido anti-horÃ¡rio).</li>
            <li><strong>NUNCA inverta as 3 fases:</strong> Isso nÃ£o altera o sentido de rotaÃ§Ã£o â€” apenas mantÃ©m o mesmo sentido.</li>
          </ul>

          <h3>Circuito com Dois Contatores</h3>
          <div class="formula-box">
            <strong>Componentes:</strong><br>
            â€¢ KM1 â€” Contator para sentido direto (L1â†’U, L2â†’V, L3â†’W)<br>
            â€¢ KM2 â€” Contator para sentido reverso (L1â†’U, L3â†’V, L2â†’W)<br>
            â€¢ FR â€” RelÃ© tÃ©rmico (proteÃ§Ã£o sobrecarga)<br><br>
            <strong>LigaÃ§Ã£o:</strong><br>
            KM1: L1â†’U1, L2â†’V1, L3â†’W1 (ligaÃ§Ã£o direta)<br>
            KM2: L1â†’U1, L3â†’V1, L2â†’W1 (L2 e L3 invertidas)<br>
            <strong>Nota:</strong> L1 permanece igual nos dois contatores. Apenas L2 e L3 sÃ£o trocados.
          </div>

          <h3>Botoeira de InversÃ£o (NA/NF)</h3>
          <ul>
            <li><strong>Botoeira dupla (NA/NF):</strong> Um botÃ£o com dois contatos: um NA (para ligar) e um NF (para desligar o outro sentido).</li>
            <li><strong>Botoeira de centro (parada):</strong> BotÃ£o NF vermelho no centro, entre as duas direÃ§Ãµes.</li>
            <li><strong>Funcionamento:</strong> Pressionar "Sentido Direto" â†’ KM1 liga. Pressionar "Sentido Reverso" â†’ KM1 desliga e KM2 liga (apÃ³s intertravamento).</li>
          </ul>

          <h3>Intertravamento â€” ObrigatÃ³rio!</h3>
          <ul>
            <li><strong>Intertravamento elÃ©trico:</strong> Contato NF de KM1 no circuito de KM2 e vice-versa. Se KM1 estÃ¡ ligado, KM2 NÃƒO pode ligar (e vice-versa). Impediria curto-circuito entre fases!</li>
            <li><strong>Intertravamento mecÃ¢nico:</strong> Barra fÃ­sica conectando os dois contatores. Mesmo se o intertravamento elÃ©trico falhar, o mecÃ¢nico impede a ativaÃ§Ã£o simultÃ¢nea.</li>
            <li><strong>ImportÃ¢ncia CRÃTICA:</strong> Sem intertravamento, um erro do operador pode causar curto-circuito trifÃ¡sico, destruiÃ§Ã£o dos contatores e risco de incÃªndio.</li>
          </ul>

          <h3>SequÃªncia de Funcionamento</h3>
          <ol>
            <li>Botoeira "Sentido Direto" pressionada â†’ Corrente passa pelo contato NF de KM2 â†’ Bobina de KM1 energiza.</li>
            <li>KM1 energizado â†’ Contatos de potÃªncia fecham â†’ Motor gira no sentido direto.</li>
            <li>Contato de selo KM1 fecha â†’ MantÃ©m KM1 ligado.</li>
            <li>Para inverter: pressionar "Sentido Reverso" â†’ Contato NF de KM1 abre â†’ KM1 desenergiza.</li>
            <li>Contato NF de KM1 fecha (desbloqueio) â†’ Corrente flui para KM2 â†’ KM2 energiza.</li>
            <li>KM2 energizado â†’ L2 e L3 invertidas â†’ Motor gira no sentido reverso.</li>
          </ol>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>NÃ£o usar intertravamento:</strong> Causa curto-circuito catastrÃ³fico. ERRO GRAVÃSSIMO.</li>
            <li><strong>Inverter as 3 fases:</strong> NÃ£o inverte o sentido â€” apenas gasta contatores Ã  toa.</li>
            <li><strong>Esquecer o tempo de comutaÃ§Ã£o:</strong> O motor precisa parar antes de inverter. Em cargas com inÃ©rcia, pode ser necessÃ¡rio freio ou temporizador.</li>
            <li><strong>NÃ£o considerar a inÃ©rcia da carga:</strong> Inverter um motor com carga pesada em movimento pode causar correntes enormes e dano mecÃ¢nico.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Para inverter o sentido de rotaÃ§Ã£o de um motor trifÃ¡sico, qual Ã© a regra?",
            options: [
              "Inverter as 3 fases simultaneamente",
              "Inverter apenas uma fase",
              "Inverter qualquer duas fases",
              "Trocar o neutro pela fase"
            ],
            correct: 2,
            explanation: "Para inverter o sentido de rotaÃ§Ã£o, basta inverter a conexÃ£o de QUALQUER DUAS fases. Inverter as 3 fases NÃƒO altera o sentido."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a consequÃªncia de NÃƒO usar intertravamento entre contatores de reversÃ£o?",
            options: [
              "O motor gira mais devagar",
              "O motor nÃ£o liga",
              "Curto-circuito trifÃ¡sico (fase-fase) ao acionar ambos os contatores",
              "Aumento do torque"
            ],
            correct: 2,
            explanation: "Sem intertravamento, se ambos os contatores energizarem simultaneamente, L2 e L3 serÃ£o conectadas diretamente (curto-circuito fase-fase), causando destruiÃ§Ã£o dos componentes e risco de incÃªndio."
          },
          {
            type: "drag-drop",
            question: "Organize a sequÃªncia de inversÃ£o de marcha (do sentido direto para o reverso):",
            pairs: [
              { term: "1Âº", definition: "Pressionar botoeira 'Sentido Reverso'" },
              { term: "2Âº", definition: "Contato NF de KM1 abre â†’ KM1 desenergiza" },
              { term: "3Âº", definition: "Contato NF de KM1 fecha (desbloqueio)" },
              { term: "4Âº", definition: "KM2 energiza â†’ L2 e L3 invertidas" },
              { term: "5Âº", definition: "Motor gira no sentido reverso" }
            ]
          },
          {
            type: "multiple-choice",
            question: "Em um circuito de reversÃ£o, qual fase permanece igual nos dois contatores (KM1 e KM2)?",
            options: [
              "L1",
              "L2",
              "L3",
              "Todas sÃ£o invertidas"
            ],
            correct: 0,
            explanation: "No circuito padrÃ£o de reversÃ£o, L1 permanece conectada igual em ambos os contatores. Apenas L2 e L3 sÃ£o trocadas entre si no contator de reversÃ£o (KM2)."
          },
          {
            type: "fill-blank",
            question: "O intertravamento mecÃ¢nico Ã© uma barra fÃ­sica que conecta os dois contatores e impede que ambos energizem _____ (simultaneamente/sequencialmente).",
            correct: "simultaneamente",
            explanation: "O intertravamento mecÃ¢nico Ã© uma barra rÃ­gida entre os dois contatores. Se um estÃ¡ acionado, a barra impede fisicamente que o outro seja acionado, mesmo se o intertravamento elÃ©trico falhar."
          }
        ]
      },
      {
        id: "m4-l7",
        title: "ProteÃ§Ã£o de Motores",
        theory: `
          <h2>ProteÃ§Ã£o de Motores ElÃ©tricos</h2>
          <p>Proteger um motor Ã© essencial para garantir sua vida Ãºtil, evitar incÃªndios e preservar o investimento. Um motor sem proteÃ§Ã£o adequada pode queimar em segundos sob condiÃ§Ãµes anormais. Este lesson cobre todos os dispositivos e mÃ©todos de proteÃ§Ã£o.</p>

          <h3>Tipos de Falhas e ProteÃ§Ãµes</h3>
          <ul>
            <li><strong>Sobrecarga:</strong> Corrente acima da nominal por tempo prolongado. Causa: sobrecarga mecÃ¢nica, partida prolongada, fase perdida. <strong>ProteÃ§Ã£o:</strong> RelÃ© tÃ©rmico (FR) ou relÃ© eletrÃ´nico de sobrecarga.</li>
            <li><strong>Curto-circuito:</strong> Corrente muito alta (milhares de amperes) por falha de isolamento. <strong>ProteÃ§Ã£o:</strong> Disjuntor magnÃ©tico, fusÃ­vel, relÃ© de curto-circuito.</li>
            <li><strong>Falta de fase (fase aberta):</strong> Perda de uma das trÃªs fases. O motor continua tentando girar, mas com corrente muito alta na(s) fase(s) restante(s). <strong>ProteÃ§Ã£o:</strong> RelÃ© de falta de fase, relÃ© de sequÃªncia de fases.</li>
            <li><strong>SubtensÃ£o:</strong> TensÃ£o abaixo da nominal causa aumento de corrente e aquecimento. <strong>ProteÃ§Ã£o:</strong> RelÃ© de subtensÃ£o, monitor de fase.</li>
          </ul>

          <h3>RelÃ© TÃ©rmico (FR) â€” A ProteÃ§Ã£o Mais Comum</h3>
          <ul>
            <li><strong>PrincÃ­pio:</strong> Duas lÃ¢metas bimetÃ¡licas percorridas pela corrente do motor. Se a corrente exceder o ajuste, as lÃ¢metas aquecem e desviam, abrindo um contato NF no circuito de comando.</li>
            <li><strong>Ajuste:</strong> Regulador de corrente nominal do motor (ex: ajustar para 7,79A em um motor de 5CV/380V).</li>
            <li><strong>Tempo de disparo:</strong> Inversamente proporcional Ã  corrente. Quanto maior a sobrecarga, mais rÃ¡pido dispara (curva tÃ©rmica IÂ²t).</li>
            <li><strong>Rearme:</strong> ApÃ³s o disparo, o relÃ© tÃ©rmico esfria e pode ser rearmanado (manual ou automÃ¡tico).</li>
          </ul>

          <h3>Curva TÃ©rmica do RelÃ©</h3>
          <div class="formula-box">
            <strong>Curva tÃ­pica de um relÃ© tÃ©rmico:</strong><br><br>
            â€¢ 100% da corrente ajustada: NÃƒO dispara (operaÃ§Ã£o normal)<br>
            â€¢ 120%: dispara em ~7-10 minutos<br>
            â€¢ 150%: dispara em ~2-4 minutos<br>
            â€¢ 200%: dispara em ~30-60 segundos<br>
            â€¢ 600% (partida): dispara em ~5-15 segundos<br><br>
            <strong>Nota:</strong> O relÃ© tÃ©rmico NÃƒO protege contra curto-circuito (muito rÃ¡pido). Para isso, use disjuntor magnÃ©tico ou fusÃ­vel.
          </div>

          <h3>RelÃ© de Falta de Fase</h3>
          <ul>
            <li><strong>FunÃ§Ã£o:</strong> Detecta se uma ou mais fases estÃ£o ausentes e desliga o motor antes que ele danifique.</li>
            <li><strong>Funcionamento:</strong> Monitora a tensÃ£o entre as fases. Se a diferenÃ§a de tensÃ£o entre qualquer par de fases exceder ~30%, o relÃ© dispara.</li>
            <li><strong>ImportÃ¢ncia:</strong> Em um motor trifÃ¡sico, a falta de uma fase causa corrente 1,73Ã— maior nas fases restantes, queimando o motor rapidamente.</li>
          </ul>

          <h3>Esquema Completo de ProteÃ§Ã£o</h3>
          <div class="formula-box">
            <strong>Cadeia de proteÃ§Ã£o completa:</strong><br>
            1. FusÃ­vel ou disjuntor â†’ ProteÃ§Ã£o contra curto-circuito<br>
            2. Disjuntor termomagnÃ©tico â†’ Curto-circuito + sobrecarga<br>
            3. RelÃ© tÃ©rmico (FR) â†’ Sobrecarga (curva tÃ©rmica precisa)<br>
            4. RelÃ© de falta de fase â†’ Perda de fase<br>
            5. DR â†’ Choques elÃ©tricos (quando aplicÃ¡vel)<br><br>
            <strong>CoordenaÃ§Ã£o:</strong> Cada proteÃ§Ã£o deve atuar na sua faixa, sem conflito com as outras.
          </div>

          <h3>Erros Comuns</h3>
          <ul>
            <li><strong>Ajustar relÃ© tÃ©rmico para corrente maior que a do motor:</strong> ProteÃ§Ã£o ineficaz â€” motor queima antes do relÃ© disparar.</li>
            <li><strong>Usar relÃ© tÃ©rmico para proteger contra curto-circuito:</strong> O relÃ© Ã© lento demais para curto. Use fusÃ­vel ou disjuntor.</li>
            <li><strong>NÃ£o ter proteÃ§Ã£o de falta de fase:</strong> Em Ã¡reas com rede instÃ¡vel, a falta de fase Ã© a causa #1 de queima de motores.</li>
            <li><strong>Bipassar o relÃ© tÃ©rmico:</strong> PrÃ¡tica perigosa e ilegal. O motor fica sem proteÃ§Ã£o.</li>
          </ul>
        `,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual dispositivo protege o motor contra sobrecarga com curva tÃ©rmica (IÂ²t)?",
            options: [
              "FusÃ­vel",
              "Disjuntor magnÃ©tico",
              "RelÃ© tÃ©rmico (FR)",
              "Contator KM1"
            ],
            correct: 2,
            explanation: "O relÃ© tÃ©rmico (FR) possui lÃ¢metas bimetÃ¡licas que respondem Ã  corrente ao longo do tempo, seguindo a curva IÂ²t. Ã‰ a proteÃ§Ã£o ideal para sobrecarga gradual."
          },
          {
            type: "multiple-choice",
            question: "O que acontece com um motor trifÃ¡sico quando perde uma fase (fase aberta)?",
            options: [
              "Gira mais devagar, mas sem dano",
              "Para imediatamente sem dano",
              "Corrente aumenta 1,73Ã— nas fases restantes, causando aquecimento e queima",
              "Inverte o sentido de rotaÃ§Ã£o"
            ],
            correct: 2,
            explanation: "Na falta de uma fase, o motor tenta continuar girando, mas a corrente nas fases restantes aumenta drasticamente (1,73Ã—), causando aquecimento rÃ¡pido e queima dos enrolamentos."
          },
          {
            type: "multiple-choice",
            question: "Um relÃ© tÃ©rmico ajustado para 10A dispara em quanto tempo com 150% de sobrecarga (15A)?",
            options: [
              "Instantaneamente (0 segundos)",
              "Em 5-15 segundos",
              "Em 2-4 minutos",
              "Em mais de 30 minutos"
            ],
            correct: 2,
            explanation: "Com 150% da corrente ajustada (15A), o relÃ© tÃ©rmico dispara em aproximadamente 2-4 minutos, seguindo a curva tÃ©rmica IÂ²t."
          },
          {
            type: "drag-drop",
            question: "Associe cada tipo de falha Ã  sua proteÃ§Ã£o adequada:",
            pairs: [
              { term: "Sobrecarga gradual", definition: "RelÃ© tÃ©rmico (FR)" },
              { term: "Curto-circuito", definition: "FusÃ­vel ou disjuntor magnÃ©tico" },
              { term: "Falta de fase", definition: "RelÃ© de falta de fase" },
              { term: "SubtensÃ£o", definition: "RelÃ© de subtensÃ£o / monitor de fase" }
            ]
          },
          {
            type: "fill-blank",
            question: "O relÃ© tÃ©rmico NÃƒO protege contra _____ (sobrecarga/curto-circuito), pois seu tempo de resposta Ã© lento demais.",
            correct: "curto-circuito",
            explanation: "O relÃ© tÃ©rmico Ã© projetado para proteger contra sobrecarga (corrente moderadamente acima da nominal por tempo prolongado). Para curto-circuito (correntes extremamente altas), Ã© necessÃ¡rio fusÃ­vel ou disjuntor magnÃ©tico."
          }
        ]
      }
    ]
  }
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 5 â€” COMANDOS ELÃ‰TRICOS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m5",
    title: "MÃ³dulo 5 â€” Comandos ElÃ©tricos",
    color: "#0984E3",
    icon: "ðŸŽ›ï¸",
    lessons: [
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L1 â€” Botoeiras e Sinais
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l1",
        moduleId: "m5",
        title: "Botoeiras e Sinais",
        theory: `
<h2>Botoeiras e Sinais</h2>

<h3>O que sÃ£o botoeiras?</h3>
<p>Botoeiras sÃ£o dispositivos de comando manual constituÃ­dos por um botÃ£o mecÃ¢nico acoplado a contatos elÃ©tricos (NA ou NF). SÃ£o o principal meio de interface entre o operador e o circuito de comando. Cada botoeira pode possuir um ou mais contatos, que podem ser do tipo NA (Normalmente Aberto) ou NF (Normalmente Fechado).</p>

<h3>Contato NA â€” Normalmente Aberto (verde)</h3>
<p>O contato NA estÃ¡ aberto em repouso e se fecha quando o botÃ£o Ã© pressionado. A cor padrÃ£o internacional para o botÃ£o NA Ã© o <strong>verde</strong>, indicando a aÃ§Ã£o de <strong>LIGAR</strong> ou PARTIR. No diagrama elÃ©trico, o contato NA Ã© representado por dois terminais separados â€” o circuito sÃ³ se completa quando o botÃ£o Ã© acionado.</p>

<h3>Contato NF â€” Normalmente Fechado (vermelho)</h3>
<p>O contato NF estÃ¡ fechado em repouso e se abre quando o botÃ£o Ã© pressionado. A cor padrÃ£o para o botÃ£o NF Ã© o <strong>vermelho</strong>, indicando a aÃ§Ã£o de <strong>DESLIGAR</strong> ou PARADA. No diagrama, o contato NF Ã© representado por dois terminais unidos por uma barra â€” o circuito Ã© interrompido ao pressionar o botÃ£o.</p>

<h3>Botoeira NA/NF Combo (semelforÃ§o)</h3>
<p>A botoeira semelforÃ§o possui um Ãºnico mecanismo com dois contatos simultÃ¢neos: um NA e um NF. Ao pressionar, o NA fecha e o NF abre ao mesmo tempo. Ã‰ muito utilizada em circuitos de comando onde Ã© necessÃ¡rio sinalizar e ao mesmo tempo desligar outro ramo do circuito. Aæ¾ confirma o estado anterior (self-holding) enquanto aciona uma nova funÃ§Ã£o.</p>

<h3>Sinalizadores e Indicadores Visuais</h3>
<p>Sinalizadores luminosos (lÃ¢mpadas ou LEDs) sÃ£o instalados nos quadros para indicar o estado do equipamento. A cores seguem a norma <strong>IEC 60204-1</strong> e <strong>NBR NM-ISO 13850</strong>:</p>
<ul>
  <li><strong>Verde</strong> â€” equipamento ligado / funcionando normalmente</li>
  <li><strong>Vermelho</strong> â€” equipamento desligado / falha / emergÃªncia</li>
  <li><strong>Amarelo</strong> â€” advertÃªncia / condiÃ§Ã£o anormal / alerta</li>
  <li><strong>Azul</strong> â€” informe / estado especial</li>
  <li><strong>Branco</strong> â€” tensÃ£o presente / autorizaÃ§Ã£o de energia</li>
  <li><strong>Ã‚mbar/laranja</strong> â€” intervenÃ§Ã£o necessÃ¡ria</li>
</ul>

<h3>AplicaÃ§Ã£o PrÃ¡tica</h3>
<p>Em um painel de comando de um motor, temos tipicamente: botoeira verde (NA) para PARTIDA, botoeira vermelha (NF) para PARADA, e uma lÃ¢mpada verde indicando motor em funcionamento e uma lÃ¢mpada vermelha indicando motor parado. A botoeira de emergÃªncia (vermelha com fundo amarelo) Ã© do tipo chicote, com trava de reinicializaÃ§Ã£o manual, conforme <strong>NBR NM-ISO 13850</strong>.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>Confundir NA e NF â€” o NA fecha ao pressionar, o NF abre ao pressionar</li>
  <li>Utilizar botoeira sem trava em botÃ£o de emergÃªncia â€” a norma exige trava de reinicializaÃ§Ã£o</li>
  <li>NÃ£o dimensionar a corrente do contato â€” cada contato tem limite de corrente/tensÃ£o</li>
  <li>Instalar indicadores luminosos sem considerar a correta conforme norma</li>
  <li>Esquecer o contato de selo quando se usa botoeira semelforÃ§o para latching</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a cor padrÃ£o de um botÃ£o de PARTIDA (NA)?",
            options: ["Vermelho", "Verde", "Amarelo", "Azul"],
            correct: 1,
            explanation: "O botÃ£o NA (Normalmente Aberto) de PARTIDA tem cor verde padrÃ£o."
          },
          {
            type: "fill-blank",
            question: "O contato que estÃ¡ fechado em repouso e se abre ao ser acionado Ã© chamado de contato ___.",
            correct: "NF",
            explanation: "NF = Normalmente Fechado. EstÃ¡ fechado em repouso e se abre ao pressionar."
          },
          {
            type: "multiple-choice",
            question: "A botoeira semelforÃ§o possui:",
            options: [
              "Apenas contato NA",
              "Apenas contato NF",
              "Um contato NA e um contato NF simultÃ¢neos",
              "Dois contatos NA"
            ],
            correct: 2,
            explanation: "A botoeira semelforÃ§o possui um contato NA e um contato NF que atuam simultaneamente."
          },
          {
            type: "multiple-choice",
            question: "Segundo a norma, qual cor indica FALHA ou equipamento DESLIGADO?",
            options: ["Verde", "Amarelo", "Vermelho", "Branco"],
            correct: 2,
            explanation: "A cor vermelha indica equipamento desligado, falha ou parada de emergÃªncia."
          },
          {
            type: "drag-drop",
            question: "Associe cada cor ao seu significado correto:",
            items: ["Verde", "Vermelho", "Amarelo", "Branco"],
            targets: ["Ligado / Partida", "Desligado / Falha", "AdvertÃªncia", "TensÃ£o presente"],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L2 â€” Contatores
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l2",
        moduleId: "m5",
        title: "Contatores",
        theory: `
<h2>Contatores</h2>

<h3>O que Ã© um Contator?</h3>
<p>O contator Ã© um interruptor eletromagnÃ©tico destinado a fazer e quebrar circuitos de potÃªncia sob condiÃ§Ãµes normais de serviÃ§o. Diferente do disjuntor, o contator <strong>nÃ£o protege contra sobrecarga ou curto-circuito</strong> â€” ele apenas conecta e desconecta cargas de forma controlada. Ã‰ o elemento central dos circuitos de comando de motores e iluminaÃ§Ã£o industrial.</p>

<h3>ConstruÃ§Ã£o Interna</h3>
<p>O contator Ã© composto por: <strong>(1) Bobina eletromagnÃ©tica</strong> â€” quando energizada, gera um campo magnÃ©tico que atrai a armadura; <strong>(2) Armadura mÃ³vel</strong> â€” peÃ§a de ferro que se move ao campo magnÃ©tico, acionando os contatos; <strong>(3) Contatos de potÃªncia (NA)</strong> â€” contactam em sÃ©rie com a carga, suportam correntes elevadas (9 A, 12 A, 25 A, 40 A, 65 A etc.); <strong>(4) Contato auxiliar de selo (NA ou NF)</strong> â€” usado no circuito de comando para manter o contator energizado; <strong>(5) Mola de retorno</strong> â€” devolve a armadura Ã  posiÃ§Ã£o original quando a bobina Ã© desenergizada.</p>

<h3>Contato de Selo (Self-Holding)</h3>
<p>O contato de selo Ã© o elemento que permite que, apÃ³s momentaneamente acionar a botoeira de partida, o contator permaneÃ§a energizado. Ele Ã© ligado em paralelo com a botoeira NA de partida. Quando a bobina energiza, o contato de selo NA fecha, criando um caminho alternativo para a corrente de comando. Assim, ao soltar a botoeira, a corrente continua passando pelo contato de selo, mantendo o contator fechado.</p>

<h3>Capacidade em Amperes</h3>
<p>A capacidade do contator Ã© especificada em Amperes (A) e indica a corrente mÃ¡xima que os contatos de potÃªncia podem suportar. A classificaÃ§Ã£o segue a norma <strong>IEC 60947-4-1</strong>. Exemplos: Contator AC-3 (partida de motor) â€” dimensiona-se para a corrente nominal do motor. Exemplo: motor trifÃ¡sico de 5 CV â†’ I = 5Ã—1,732Ã—0,8 = 7,8 A â†’ contator de 9 A.</p>

<h3>Dimensionamento</h3>
<p>O dimensionamento do contator leva em conta: <strong>(1)</strong> Corrente nominal do motor (IN); <strong>(2)</strong> Categoria de utilizaÃ§Ã£o (AC-1 resistivo, AC-3 partida de motor, AC-4 partida/plugging); <strong>(3)</strong> TensÃ£o da bobina (127V, 220V, 380V); <strong>(4)</strong> NÃºmero de polos (2 ou 3 polos de potÃªncia). Regra prÃ¡tica: para AC-3, o contator deve ser dimensionado para no mÃ­nimo 1,25Ã—IN do motor.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>Usar contator sem contato de selo â€” o motor nÃ£o permanece ligado ao soltar a botoeira</li>
  <li>Dimensionar contator apenas pela corrente nominal â€” deve considerar a corrente de partida (6-8Ã—IN)</li>
  <li>NÃ£o verificar a compatibilidade da tensÃ£o da bobina com a tensÃ£o do circuito de comando</li>
  <li>Confundir contato de potÃªncia com contato auxiliar â€” capacidades muito diferentes</li>
  <li>Instalar contator sem relÃ© tÃ©rmico â€” nÃ£o hÃ¡ proteÃ§Ã£o contra sobrecarga</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o principal do contator?",
            options: [
              "Proteger contra curto-circuito",
              "Fazer e quebrar circuitos de potÃªncia sob condiÃ§Ãµes normais",
              "Medir a corrente do circuito",
              "Regular a tensÃ£o de saÃ­da"
            ],
            correct: 1,
            explanation: "O contator Ã© um interruptor eletromagnÃ©tico para fazer e quebrar circuitos de potÃªncia."
          },
          {
            type: "fill-blank",
            question: "O contato que mantÃ©m o contator energizado apÃ³s soltar a botoeira Ã© chamado contato de ___.",
            correct: "selo",
            explanation: "O contato de selo (self-holding) mantÃ©m o contator energizado em paralelo com a botoeira."
          },
          {
            type: "multiple-choice",
            question: "Um motor trifÃ¡sico de 5 CV tem corrente nominal aproximada de 7,8 A. Qual contator dimensionar (AC-3)?",
            options: ["6 A", "9 A", "12 A", "25 A"],
            correct: 1,
            explanation: "Para AC-3, dimensiona-se para 1,25Ã—IN. 1,25Ã—7,8 = 9,75 A â†’ contator de 9 A Ã© o mais prÃ³ximo (ou 12 A para folga)."
          },
          {
            type: "multiple-choice",
            question: "O contator NÃƒO protege contra:",
            options: [
              "Sobrecarga",
              "Curto-circuito",
              "Ambas as anteriores",
              "Nenhuma das anteriores"
            ],
            correct: 2,
            explanation: "O contator nÃ£o protege contra sobrecarga nem curto-circuito â€” Ã© apenas um interruptor."
          },
          {
            type: "drag-drop",
            question: "Associe cada componente do contator Ã  sua funÃ§Ã£o:",
            items: ["Bobina", "Armadura", "Contato de selo", "Mola de retorno"],
            targets: [
              "Gera campo magnÃ©tico ao energizar",
              "Move-se ao campo magnÃ©tico",
              "MantÃ©m contator ligado apÃ³s soltar botoeira",
              "Devolve armadura Ã  posiÃ§Ã£o original"
            ],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L3 â€” RelÃ©s TÃ©rmicos
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l3",
        moduleId: "m5",
        title: "RelÃ©s TÃ©rmicos",
        theory: `
<h2>RelÃ©s TÃ©rmicos</h2>

<h3>O que Ã© um RelÃ© TÃ©rmico?</h3>
<p>O relÃ© tÃ©rmico Ã© um dispositivo de proteÃ§Ã£o contra sobrecarga de motores elÃ©tricos. Ele monitora a corrente que circula pelo motor e, quando detecta uma sobrecarga prolongada, abre o contato NF do circuito de comando, desligando o contator e, consequentemente, o motor. Ã‰ essencial para evitar que o motor queime devido a sobrecarga prolongada.</p>

<h3>PrincÃ­pio de Funcionamento â€” Bimetal</h3>
<p>O elemento sensÃ­vel do relÃ© tÃ©rmico Ã© a <strong>lÃ¢mina bimetÃ¡lica</strong>, composta por duas ligaÃ§Ãµes metÃ¡licas com coeficientes de dilataÃ§Ã£o diferentes, soldadas juntas. Quando a corrente que passa pelo relÃ© excede o valor de ajuste, o calor gerado faz com que o bimetal se deforme (a lÃ¢mina com maior coeficiente se dilata mais), curvando-se e acionando o mecanismo de disparo que abre o contato NF. ApÃ³s o resfriamento, o bimetal retorna Ã  posiÃ§Ã£o original â€” o relÃ© pode ser reiniciado manualmente (botÃ£o RESET) ou automaticamente.</p>

<h3>Curva de AtuaÃ§Ã£o (IÂ²t)</h3>
<p>A curva de atuaÃ§Ã£o do relÃ© tÃ©rmico Ã© uma curva inversa: quanto maior a sobrecarga, menor o tempo para o relÃ© atuar. Essa caracterÃ­stica Ã© definida pela fÃ³rmula <strong>IÂ²t = constante</strong> â€” a energia dissipada atÃ© o disparo Ã© praticamente constante. Por exemplo, a 140% da corrente nominal, o relÃ© atua em aproximadamente 4 minutos; a 200% da corrente nominal, atua em aproximadamente 30 segundos.</p>

<h3>Ajuste da Corrente Nominal</h3>
<p>A maioria dos relÃ©s tÃ©rmicos possui um botÃ£o ou pino de ajuste que permite definir a corrente nominal (IN) do motor. O ajuste deve ser feito exatamente para a corrente nominal do motor. Exemplo: motor de 4,5 A â†’ ajustar o relÃ© tÃ©rmico para 4,5 A. Se o relÃ© nÃ£o tiver ajuste exato, deve-se escolher o modelo cuja faixa inclua a corrente nominal do motor.</p>

<h3>AplicaÃ§Ã£o PrÃ¡tica</h3>
<p>O relÃ© tÃ©rmico Ã© ligado em sÃ©rie com os contatos de potÃªncia do contator, na saÃ­da (lado do motor). Seu contato NF Ã© ligado em sÃ©rie no circuito de comando, antes da bobina do contator. Quando o relÃ© dispara, seu contato NF abre, desenergizando a bobina do contator e desligando o motor. O relÃ© tÃ©rmico NÃƒO protege contra curto-circuito â€” para isso, deve-se associar com fusÃ­veis ou disjuntores.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>Ajustar o relÃ© tÃ©rmico com corrente diferente da nominal do motor â€” proteÃ§Ã£o ineficiente</li>
  <li>Esquecer o contato NF do relÃ© tÃ©rmico no circuito de comando â€” o relÃ© nÃ£o desligarÃ¡ o motor</li>
  <li>Utilizar relÃ© tÃ©rmico para proteÃ§Ã£o contra curto-circuito â€” o relÃ© tÃ©rmico Ã© lento para curtocircuito</li>
  <li>NÃ£o considerar altitude e temperatura ambiente â€” acima de 1000m ou 40Â°C, o relÃ© deve ser reajustado</li>
  <li>Utilizar relÃ© tÃ©rmico em motores com partida estrela-triÃ¢ngulo sem compensaÃ§Ã£o adequada</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a funÃ§Ã£o principal do relÃ© tÃ©rmico?",
            options: [
              "Proteger contra curto-circuito",
              "Proteger contra sobrecarga prolongada do motor",
              "Controlar a partida do motor",
              "Medir a temperatura do motor"
            ],
            correct: 1,
            explanation: "O relÃ© tÃ©rmico protege contra sobrecarga prolongada, desligando o motor via contato NF."
          },
          {
            type: "fill-blank",
            question: "O elemento sensÃ­vel do relÃ© tÃ©rmico que se deforma com o calor Ã© a lÃ¢mina ___.",
            correct: "bimetÃ¡lica",
            explanation: "O bimetal Ã© composto por duas ligaÃ§Ãµes metÃ¡licas com coeficientes de dilataÃ§Ã£o diferentes."
          },
          {
            type: "multiple-choice",
            question: "A curva de atuaÃ§Ã£o do relÃ© tÃ©rmico Ã©:",
            options: [
              "Direta â€” maior corrente = mais tempo",
              "Inversa â€” maior corrente = menos tempo",
              "Constante â€” sempre o mesmo tempo",
              "AleatÃ³ria"
            ],
            correct: 1,
            explanation: "A curva Ã© inversa: quanto maior a sobrecarga, menor o tempo para o relÃ© atuar."
          },
          {
            type: "calculation",
            question: "Um motor tem corrente nominal de 8 A. Qual o ajuste correto do relÃ© tÃ©rmico?",
            correct: "8",
            unit: "A",
            explanation: "O relÃ© tÃ©rmico deve ser ajustado exatamente para a corrente nominal do motor, ou seja, 8 A."
          },
          {
            type: "multiple-choice",
            question: "O contato do relÃ© tÃ©rmico utilizado no circuito de comando Ã©:",
            options: [
              "NA â€” Normalmente Aberto",
              "NF â€” Normalmente Fechado",
              "Depende do fabricante",
              "NÃ£o se usa contato auxiliar"
            ],
            correct: 1,
            explanation: "O contato NF do relÃ© tÃ©rmico Ã© ligado em sÃ©rie no circuito de comando para desligar a bobina em caso de sobrecarga."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L4 â€” Temporizadores
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l4",
        moduleId: "m5",
        title: "Temporizadores",
        theory: `
<h2>Temporizadores</h2>

<h3>O que sÃ£o Temporizadores?</h3>
<p>Temporizadores sÃ£o dispositivos que introduzem um atraso temporal entre o acionamento de uma entrada e a atuaÃ§Ã£o de seus contatos de saÃ­da. SÃ£o essenciais em automaÃ§Ã£o para sequenciar operaÃ§Ãµes, evitar partidas simultÃ¢neas, criar atrasos programÃ¡veis e implementar lÃ³gicas temporais complexas. Podem ser mecÃ¢nicos (de fluxo de ar ou motor de relÃ³gio) ou eletrÃ´nicos (com circuito integrado).</p>

<h3>Temporizador TON â€” Time ON Delay (Atraso para Ligar)</h3>
<p>O TON Ã© o temporizador mais comum. Quando a bobina Ã© energizada, os contatos de saÃ­da NÃƒO mudam de estado imediatamente â€” aguardam o tempo ajustado (t). Somente apÃ³s esse tempo Ã© que os contatos NA de saÃ­da fecham e os NF abrem. Quando a bobina Ã© desenergizada, os contatos retornam instantaneamente Ã  posiÃ§Ã£o original. Exemplo: TON ajustado para 10 s â†’ ao energizar, aguarda 10 s e fecha o contato NA de saÃ­da.</p>

<h3>Temporizador TOF â€” Time OFF Delay (Atraso para Desligar)</h3>
<p>O TOF funciona de forma inversa ao TON. Quando a bobina Ã© energizada, os contatos de saÃ­da mudam de estado <strong>imediatamente</strong>. Quando a bobina Ã© desenergizada, os contatos mantÃªm o estado por mais um perÃ­odo ajustado (t) antes de retornar. Exemplo: TOF de 5 s â†’ ao desligar a bobina, os contatos permanecem por 5 s e depois retornam.</p>

<h3>Temporizador TP â€” Pulse Timer (Pulso Temporizado)</h3>
<p>O TP gera um pulso de saÃ­da de duraÃ§Ã£o fixa independente da duraÃ§Ã£o do sinal de entrada. Na borda de subida da entrada, os contatos de saÃ­da mudam de estado e permanecem pelo tempo ajustado, mesmo que a entrada seja desligada. Ã‰ Ãºtil para gerar pulsos de duraÃ§Ã£o controlada, como acionamentos momentÃ¢neos de vÃ¡lvulas ou sinais de alarme.</p>

<h3>Temporizador MecÃ¢nico vs EletrÃ´nico</h3>
<p><strong>MecÃ¢nicos:</strong> Utilizam fluxo de ar ( pneu ) ou motor de relÃ³gio. SÃ£o robustos, baratos, mas menos precisos (precisÃ£o Â±10%). Comuns em partidas de motores. <strong>EletrÃ´nicos:</strong> Utilizam circuito integrado com oscilador RC ou cristal. SÃ£o muito precisos (precisÃ£o Â±1%), com ajuste digital. Permitem funÃ§Ãµes adicionais como contagem, contagem regressiva e interface com CLP.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>Confundir TON com TOF â€” o TON atrasa a LIGAÃ‡ÃƒO, o TOF atrasa o DESLIGAMENTO</li>
  <li>NÃ£o considerar a queda de tensÃ£o na bobina do temporizador â€” pode causar funcionamento intermitente</li>
  <li>Utilizar temporizador eletrÃ´nico em ambiente com muita interferÃªncia eletromagnÃ©tica sem blindagem</li>
  <li>Ajustar tempo inadequado para a aplicaÃ§Ã£o â€” tempos muito curtos podem nÃ£o cumprir a funÃ§Ã£o</li>
  <li>Esquecer que o TOF mantÃ©m os contatos ativos apÃ³s desenergizar â€” pode causar conflitos</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "O temporizador TON (Atraso para Ligar) funciona da seguinte forma:",
            options: [
              "Ao energizar, os contatos mudam imediatamente",
              "Ao energizar, os contatos mudam apÃ³s o tempo ajustado",
              "Ao desenergizar, os contatos mudam apÃ³s o tempo ajustado",
              "Gera um pulso de saÃ­da independente da entrada"
            ],
            correct: 1,
            explanation: "O TON introduz um atraso entre a energizaÃ§Ã£o da bobina e a mudanÃ§a dos contatos de saÃ­da."
          },
          {
            type: "fill-blank",
            question: "O temporizador que mantÃ©m os contatos ativos por um perÃ­odo apÃ³s desligar a bobina Ã© o ___.",
            correct: "TOF",
            explanation: "TOF = Time OFF Delay â€” atraso para desligar."
          },
          {
            type: "multiple-choice",
            question: "Qual temporizador gera um pulso de duraÃ§Ã£o fixa?",
            options: ["TON", "TOF", "TP", "Nenhum"],
            correct: 2,
            explanation: "O TP (Pulse Timer) gera um pulso de saÃ­da de duraÃ§Ã£o fixa na borda de subida."
          },
          {
            type: "multiple-choice",
            question: "A precisÃ£o tÃ­pica de um temporizador eletrÃ´nico Ã©:",
            options: ["Â±10%", "Â±5%", "Â±1%", "Â±0,01%"],
            correct: 2,
            explanation: "Temporizadores eletrÃ´nicos possuem precisÃ£o de aproximadamente Â±1%."
          },
          {
            type: "drag-drop",
            question: "Associe cada tipo de temporizador ao seu comportamento:",
            items: ["TON", "TOF", "TP"],
            targets: [
              "Atraso para ligar â€” contatos mudam apÃ³s tempo ao energizar",
              "Atraso para desligar â€” contatos retornam apÃ³s tempo ao desenergizar",
              "Pulso fixo â€” saÃ­da por tempo determinado na borda de subida"
            ],
            correct: [0, 1, 2]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L5 â€” Circuito Partida Direta
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l5",
        moduleId: "m5",
        title: "Circuito Partida Direta",
        theory: `
<h2>Circuito Partida Direta</h2>

<h3>O que Ã© Partida Direta?</h3>
<p>A partida direta Ã© o mÃ©todo mais simples e comum de partida de motores elÃ©tricos trifÃ¡sicos. Neste mÃ©todo, o motor recebe a tensÃ£o plena da rede (380V trifÃ¡sico) diretamente nos seus terminais. NÃ£o hÃ¡ limitaÃ§Ã£o de corrente â€” o motor parte com corrente de partida de 6 a 8 vezes a corrente nominal. Ã‰ utilizada para motores de pequena e mÃ©dia potÃªncia (atÃ© 7,5 CV em geral).</p>

<h3>Diagrama de ForÃ§a â€” Fluxo de Energia</h3>
<p>O fluxo de energia no circuito de forÃ§a Ã©: <strong>Fase L1 â†’ Disjuntor (DR) â†’ Contato de potÃªncia do contator (KC) â†’ Contato do relÃ© tÃ©rmico (KM) â†’ Motor (M)</strong>. O mesmo ocorre para L2 e L3. O disjuntor protege contra curto-circuito, o relÃ© tÃ©rmico protege contra sobrecarga e o contator faz a manobra de ligaÃ§Ã£o/desligamento.</p>

<h3>Circuito de Comando â€” Contato de Selo</h3>
<p>O circuito de comando controla a bobina do contator. O fluxo Ã©: <strong>Fase de comando â†’ Botoeira NF (parada) â†’ Botoeira NA (partida) â†’ Bobina do contator â†’ Retorno ao neutro ou outra fase</strong>. O contato de selo (NA do contator) Ã© ligado em paralelo com a botoeira de partida. Ao pressionar a botoeira, o contator energiza e seu contato de selo fecha, criando um caminho alternativo. Ao soltar a botoeira, o contator permanece energizado pelo selo.</p>

<h3>Parada de EmergÃªncia</h3>
<p>O botÃ£o de emergÃªncia Ã© um botÃ£o vermelho com fundo amarelo, tipo chicote, com trava de reinicializaÃ§Ã£o manual (conforme NBR NM-ISO 13850). Seu contato NF Ã© ligado em sÃ©rie no inÃ­cio do circuito de comando. Ao acionar, interrompe imediatamente toda a corrente de comando, desligando o contator e o motor. Para reiniciar, Ã© necessÃ¡rio girar o botÃ£o para liberar a trava e depois pressionar a botoeira de partida novamente.</p>

<h3>Esquema Resumido do Circuito</h3>
<pre>
  L1 â”€â”€â”¬â”€â”€ DR â”€â”€â”¬â”€â”€ KC â”€â”€â”¬â”€â”€ KM â”€â”€ M
       â”‚        â”‚        â”‚
  L2 â”€â”€â”¤        â”‚        â”‚
       â”‚        â”‚        â”‚
  L3 â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€

  COMANDO:
  F â”€â”€ S2(NF-emerg) â”€â”€ S1(NA-partida) â”€â”€â”¬â”€â”€ Bobina KC â”€â”€ N
                                         â”‚
                                    KC_selo(NA)
</pre>

<h3>Erros Comuns</h3>
<ul>
  <li>NÃ£o instalar disjuntor antes do contator â€” nÃ£o hÃ¡ proteÃ§Ã£o contra curto-circuito</li>
  <li>Esquecer o contato de selo â€” o motor nÃ£o permanece ligado ao soltar a botoeira</li>
  <li>Ligar a botoeira de parada em NA ao invÃ©s de NF â€” nÃ£o desliga o motor</li>
  <li>NÃ£o dimensionar o contator para a corrente de partida â€” o contator pode soldar os contatos</li>
  <li>Omitir o relÃ© tÃ©rmico â€” motor sem proteÃ§Ã£o contra sobrecarga</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Na partida direta, a corrente de partida do motor Ã©:",
            options: [
              "Igual Ã  corrente nominal",
              "2 a 3 vezes a corrente nominal",
              "6 a 8 vezes a corrente nominal",
              "10 a 15 vezes a corrente nominal"
            ],
            correct: 2,
            explanation: "Na partida direta, o motor parte com corrente de 6 a 8 vezes a corrente nominal."
          },
          {
            type: "fill-blank",
            question: "O contato que mantÃ©m o contator energizado apÃ³s soltar a botoeira de partida Ã© o contato de ___.",
            correct: "selo",
            explanation: "O contato de selo Ã© ligado em paralelo com a botoeira de partida e mantÃ©m o contator energizado."
          },
          {
            type: "multiple-choice",
            question: "O botÃ£o de emergÃªncia deve ter:",
            options: [
              "Contato NA",
              "Contato NF com trava de reinicializaÃ§Ã£o",
              "Contato NA/NF sem trava",
              "Apenas sinalizaÃ§Ã£o luminosa"
            ],
            correct: 1,
            explanation: "O botÃ£o de emergÃªncia Ã© NF (Normalmente Fechado) e deve possuir trava de reinicializaÃ§Ã£o manual."
          },
          {
            type: "drag-drop",
            question: "Ordene o fluxo de energia no circuito de forÃ§a da partida direta:",
            items: ["Disjuntor (DR)", "Contator (KC)", "RelÃ© TÃ©rmico (KM)", "Motor (M)"],
            targets: [
              "1Âº â€” ProteÃ§Ã£o contra curto",
              "2Âº â€” Manobra de ligaÃ§Ã£o",
              "3Âº â€” ProteÃ§Ã£o contra sobrecarga",
              "4Âº â€” Carga"
            ],
            correct: [0, 1, 2, 3]
          },
          {
            type: "calculation",
            question: "Um motor de 5 CV (tensÃ£o 380V, fator de potÃªncia 0,85) tem corrente nominal de approximately 9,2 A. Qual a corrente de partida mÃ¡xima esperada?",
            correct: "73.6",
            unit: "A",
            explanation: "Corrente de partida = 8 Ã— IN = 8 Ã— 9,2 = 73,6 A (considerando fator de partida 8)."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L6 â€” Circuito Estrela-TriÃ¢ngulo
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l6",
        moduleId: "m5",
        title: "Circuito Estrela-TriÃ¢ngulo",
        theory: `
<h2>Circuito Estrela-TriÃ¢ngulo</h2>

<h3>O que Ã© Partida Estrela-TriÃ¢ngulo?</h3>
<p>A partida estrela-triÃ¢ngulo (Y-Î”) Ã© um mÃ©todo de partida que reduz a corrente de partida do motor trifÃ¡sico. O motor deve ter os 6 terminais acessÃ­veis (U1, V1, W1 â€” extremos das bobinas; U2, V2, W2 â€” meios das bobinas). Na partida, as bobinas sÃ£o ligadas em <strong>estrela (Y)</strong>, reduzindo a tensÃ£o em cada fase para 220V (em rede de 380V). ApÃ³s um tempo, o motor Ã© comutado para ligaÃ§Ã£o em <strong>triÃ¢ngulo (Î”)</strong>, recebendo a tensÃ£o plena de 380V.</p>

<h3>Vantagens e LimitaÃ§Ãµes</h3>
<p><strong>Vantagens:</strong> A corrente de partida na estrela Ã© 1/3 da corrente na partida direta (triÃ¢ngulo), e o binÃ¡rio de partida Ã© 1/3 tambÃ©m. <strong>LimitaÃ§Ãµes:</strong> O motor deve ser construÃ­do para trabalhar em triÃ¢ngulo (380V). A comutaÃ§Ã£o gera um pico de corrente. NÃ£o Ã© adequado para cargas com alto binÃ¡rio de partida. Reduz a corrente de partida para aproximadamente 1/3 da partida direta.</p>

<h3>Os 3 Contatores NecessÃ¡rios</h3>
<p><strong>KM1 (Contator Principal)</strong> â€” conecta as fases L1, L2, L3 aos terminais U1, V1, W1 do motor. Ã‰ ligado durante todo o funcionamento. <strong>KM2 (Contator Estrela)</strong> â€” conecta os terminais U2, V2, W2 em ponto comum (neutro de estrela). Ã‰ ligado apenas na partida (modo estrela). <strong>KM3 (Contator TriÃ¢ngulo)</strong> â€” conecta U2 a V1, V2 a W1, W2 a U1 (ligaÃ§Ã£o triÃ¢ngulo). Ã‰ ligado no funcionamento normal (modo triÃ¢ngulo).</p>

<h3>RelÃ© de Tempo</h3>
<p>O relÃ© de tempo controla a comutaÃ§Ã£o de estrela para triÃ¢ngulo. Ã‰ ajustado para o tempo necessÃ¡rio ao motor atingir aproximadamente 80% da velocidade nominal (tipicamente 5-15 segundos dependendo da carga). Quando o tempo expira, o relÃ© desliga KM2 e liga KM3.</p>

<h3>Intertravamento KM2 â†” KM3 (CRÃTICO)</h3>
<p>O intertravamento Ã© a proteÃ§Ã£o que impede que KM2 e KM3 sejam energizados simultaneamente. Se isso ocorrer, causa curto-circuito nas fases. O intertravamento Ã© feito de duas formas: <strong>(1) ElÃ©trico:</strong> O contato NF de KM3 Ã© colocado em sÃ©rie com a bobina de KM2, e o contato NF de KM2 em sÃ©rie com a bobina de KM3. Assim, se KM3 estÃ¡ ligado, o contato NF dele abre o circuito de KM2, impedindo sua energizaÃ§Ã£o. <strong>(2) MecÃ¢nico:</strong> UtilizaÃ§Ã£o de intertravador mecÃ¢nico entre KM2 e KM3 (alavanca ou placa comum).</p>

<h3>SequÃªncia de Funcionamento</h3>
<ol>
  <li>Acionar botoeira de partida â†’ KM1 energiza (contato de selo fecha)</li>
  <li>KM1 fecha â†’ corrente passa pelo relÃ© de tempo â†’ KM2 energiza (modo estrela)</li>
  <li>Motor parte em estrela (220V por fase)</li>
  <li>RelÃ© de tempo atinge o ajuste â†’ KM2 desenergiza (contato NF de KM2 abre)</li>
  <li>KM3 energiza (modo triÃ¢ngulo â€” 380V por fase)</li>
  <li>Motor funciona em triÃ¢ngulo (potÃªncia nominal)</li>
</ol>

<h3>Erros Comuns</h3>
<ul>
  <li>Esquecer o intertravamento KM2â†”KM3 â€” risco de curto-circuito</li>
  <li>Ajustar tempo do relÃ© muito curto â€” motor nÃ£o atinge velocidade antes da comutaÃ§Ã£o</li>
  <li>NÃ£o considerar que o motor deve ser construÃ­do para triÃ¢ngulo 380V</li>
  <li>NÃ£o dimensionar KM1 para corrente nominal em triÃ¢ngulo</li>
  <li>Ligar KM2 e KM3 simultaneamente â€” consequÃªncia catastrÃ³fica</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Na partida estrela-triÃ¢ngulo, a corrente de partida Ã© reduzida para:",
            options: [
              "1/2 da partida direta",
              "1/3 da partida direta",
              "1/4 da partida direta",
              "NÃ£o hÃ¡ reduÃ§Ã£o"
            ],
            correct: 1,
            explanation: "A corrente de partida na estrela Ã© 1/3 da corrente em triÃ¢ngulo (partida direta)."
          },
          {
            type: "fill-blank",
            question: "O contato que impede KM2 e KM3 de energizarem simultaneamente Ã© o ___ entre eles.",
            correct: "intertravamento",
            explanation: "O intertravamento (elÃ©trico e/ou mecÃ¢nico) impede que KM2 e KM3 fiquem ligados ao mesmo tempo."
          },
          {
            type: "multiple-choice",
            question: "O relÃ© de tempo no circuito estrela-triÃ¢ngulo controla:",
            options: [
              "A corrente de partida",
              "A tensÃ£o aplicada ao motor",
              "A comutaÃ§Ã£o de KM2 para KM3",
              "A proteÃ§Ã£o contra sobrecarga"
            ],
            correct: 2,
            explanation: "O relÃ© de tempo controla a transiÃ§Ã£o de modo estrela (KM2) para modo triÃ¢ngulo (KM3)."
          },
          {
            type: "drag-drop",
            question: "Associe cada contator Ã  sua funÃ§Ã£o no estrela-triÃ¢ngulo:",
            items: ["KM1", "KM2", "KM3"],
            targets: [
              "Contator principal â€” conecta fases ao motor",
              "Contator estrela â€” junta U2, V2, W2",
              "Contator triÃ¢ngulo â€” liga em Î”"
            ],
            correct: [0, 1, 2]
          },
          {
            type: "multiple-choice",
            question: "Se KM2 e KM3 energizarem simultaneamente, o que acontece?",
            options: [
              "O motor gira em sentido reverso",
              "O motor funciona normalmente",
              "Ocorre curto-circuito nas fases",
              "O relÃ© tÃ©rmico desliga"
            ],
            correct: 2,
            explanation: "A energizaÃ§Ã£o simultÃ¢nea de KM2 e KM3 causa curto-circuito nas fases."
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M5-L7 â€” Circuito de ReversÃ£o
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m5-l7",
        moduleId: "m5",
        title: "Circuito de ReversÃ£o",
        theory: `
<h2>Circuito de ReversÃ£o</h2>

<h3>O que Ã© ReversÃ£o de Sentido?</h3>
<p>A reversÃ£o de sentido de rotaÃ§Ã£o de um motor trifÃ¡sico Ã© obtida <strong>invertendo-se a ligaÃ§Ã£o de qualquer duas fases</strong>. Por exemplo, se as fases estÃ£o ligadas como L1-U1, L2-V1, L3-W1, ao inverter L1 e L3, temos L3-U1, L2-V1, L1-W1 â€” o motor gira no sentido inverso. Essa inversÃ£o Ã© feita por contatores, sem necessidade de intervenÃ§Ã£o manual nas ligaÃ§Ãµes.</p>

<h3>InversÃ£o de Fases com Contatores</h3>
<p>Dois contatores sÃ£o necessÃ¡rios: <strong>KM1 (Sentido Direto)</strong> e <strong>KM2 (Sentido Reverso)</strong>. KM1 liga as fases normalmente: L1-U1, L2-V1, L3-W1. KM2 inverte duas fases: L1-W1, L2-V1, L3-U1 (ou qualquer outra combinaÃ§Ã£o de inversÃ£o de duas fases). Os contatores sÃ£o ligados em paralelo, com circuitos de comando independentes.</p>

<h3>Intertravamento ElÃ©trico com NA/NF</h3>
<p>O intertravamento elÃ©trico impede que KM1 e KM2 sejam energizados simultaneamente. Ã‰ feito da seguinte forma: O contato NF de KM2 Ã© colocado em sÃ©rie com a bobina de KM1, e o contato NF de KM1 Ã© colocado em sÃ©rie com a bobina de KM2. Assim, se KM1 estÃ¡ energizado, seu contato NF abre o circuito de KM2, impedindo sua energizaÃ§Ã£o â€” e vice-versa. Isso Ã© <strong>obrigatÃ³rio</strong> pois a energizaÃ§Ã£o simultÃ¢nea causaria curto-circuito.</p>

<h3>Intertravamento MecÃ¢nico</h3>
<p>O intertravamento mecÃ¢nico Ã© uma proteÃ§Ã£o adicional realizada fisicamente entre os contatores. Pode ser feito com: <strong>(1) Barra de intertravamento</strong> â€” peÃ§a mecÃ¢nica que conecta as armaduras dos dois contatores, impedindo que ambos fechem ao mesmo tempo; <strong>(2) Chave de intertravamento</strong> â€” interruptor mecÃ¢nico acoplado aos contatores que corta o circuito de comando do contatore oposto. O intertravamento mecÃ¢nico Ã© uma proteÃ§Ã£o redundante alÃ©m do intertravamento elÃ©trico.</p>

<h3>Circuito de Comando Completo</h3>
<pre>
  COMANDO â€” ReversÃ£o:
  F â”€â”€ S3(NF-emerg) â”€â”€â”¬â”€â”€ S1(NA-direto) â”€â”€â”¬â”€â”€ KM1 bobina â”€â”€ N
                      â”‚                    â”‚
                      â”‚              KM2_NF(NF) â”€â”€â†’ intertravamento
                      â”‚
                      â””â”€â”€ S2(NA-reverso) â”€â”€â”¬â”€â”€ KM2 bobina â”€â”€ N
                                           â”‚
                                     KM1_NF(NF) â”€â”€â†’ intertravamento

  SELos: KM1_selo em paralelo com S1, KM2_selo em paralelo com S2
</pre>

<h3>ConsideraÃ§Ãµes de SeguranÃ§a</h3>
<ul>
  <li>Sempre usar intertravamento elÃ©trico + mecÃ¢nico (proteÃ§Ã£o redundante)</li>
  <li>NÃ£o comutar direÃ§Ã£o com motor em alta velocidade â€” usar tempo morto</li>
  <li>Considerar inÃ©rcia da carga â€” em cargas pesadas, a reversÃ£o pode causar choques mecÃ¢nicos</li>
  <li>Utilizar botoeiras de partida diferentes para cada sentido (verde para direto, azul para reverso)</li>
  <li>Incluir parada de emergÃªncia antes de ambos os ramos de comando</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li>NÃ£o instalar intertravamento â€” risco de curto-circuito catastrÃ³fico</li>
  <li>Inverter mais de duas fases â€” nÃ£o altera o sentido (inversÃ£o de 2 fases = sentido oposto)</li>
  <li>NÃ£o considerar o tempo de comutaÃ§Ã£o â€” motor pode estar girando ao inverter</li>
  <li>Esquecer o contato de selo â€” motor nÃ£o permanece no sentido escolhido</li>
  <li>Utilizar a mesma botoeira para direto e reverso sem intertravamento elÃ©trico adequado</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Para inverter o sentido de rotaÃ§Ã£o de um motor trifÃ¡sico, deve-se:",
            options: [
              "Inverter todas as trÃªs fases",
              "Inverter qualquer duas fases",
              "Trocar o neutro por uma fase",
              "Aumentar a tensÃ£o"
            ],
            correct: 1,
            explanation: "A inversÃ£o de qualquer duas fases inverte o sentido de rotaÃ§Ã£o do motor trifÃ¡sico."
          },
          {
            type: "fill-blank",
            question: "A proteÃ§Ã£o que impede que KM1 e KM2 energizem simultaneamente Ã© chamada de ___.",
            correct: "intertravamento",
            explanation: "O intertravamento (elÃ©trico e mecÃ¢nico) impede a energizaÃ§Ã£o simultÃ¢nea dos contatores de sentido oposto."
          },
          {
            type: "multiple-choice",
            question: "O intertravamento elÃ©trico Ã© feito com:",
            options: [
              "Contatos NA de cada contator em sÃ©rie com a prÃ³pria bobina",
              "Contatos NF de cada contator em sÃ©rie com a bobina do outro",
              "Contatos NA de cada contator em paralelo com a bobina do outro",
              "FusÃ­veis nos circuitos de comando"
            ],
            correct: 1,
            explanation: "O contato NF de KM2 vai em sÃ©rie com a bobina de KM1, e vice-versa."
          },
          {
            type: "multiple-choice",
            question: "O intertravamento mecÃ¢nico Ã©:",
            options: [
              "Substituto do intertravamento elÃ©trico",
              "ProteÃ§Ã£o adicional alÃ©m do intertravamento elÃ©trico",
              "ObrigatÃ³rio apenas em motores de grande potÃªncia",
              "Uma proteÃ§Ã£o elÃ©trica feita com relÃ©"
            ],
            correct: 1,
            explanation: "O intertravamento mecÃ¢nico Ã© uma proteÃ§Ã£o redundante alÃ©m do intertravamento elÃ©trico."
          },
          {
            type: "drag-drop",
            question: "Ordene os elementos do circuito de comando de reversÃ£o na sequÃªncia correta:",
            items: ["Botoeira emergÃªncia (NF)", "Botoeira direto (NA)", "Contato NF do outro contator", "Bobina do contator", "Contato de selo"],
            targets: [
              "1Âº â€” ProteÃ§Ã£o geral",
              "2Âº â€” Comando do sentido",
              "3Âº â€” Intertravamento",
              "4Âº â€” Acionamento",
              "5Âº â€” ManutenÃ§Ã£o"
            ],
            correct: [0, 1, 2, 3, 4]
          }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 6 â€” AUTOMAÃ‡ÃƒO COM CLP
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m6",
    title: "MÃ³dulo 6 â€” AutomaÃ§Ã£o com CLP",
    color: "#A29BFE",
    icon: "ðŸ’»",
    lessons: [
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L1 â€” O que Ã© um CLP
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l1",
        moduleId: "m6",
        title: "O que Ã© um CLP",
        theory: `
<h2>O que Ã© um CLP?</h2>

<h3>DefiniÃ§Ã£o</h3>
<p>O <strong>Controlador LÃ³gico ProgramÃ¡vel (CLP)</strong> â€” em inglÃªs, PLC (Programmable Logic Controller) â€” Ã© um computador industrial projetado para controlar processos de automaÃ§Ã£o. Diferente de um computador comum, o CLP Ã© projetado para operar em ambientes industriais com temperaturas extremas, vibraÃ§Ã£o, poeira e interferÃªncia eletromagnÃ©tica. Ele executa um programa armazenado em memÃ³ria para monitorar entradas, processar lÃ³gica e acionar saÃ­das em tempo real.</p>

<h3>Arquitetura â€” Entradas â†’ CPU â†’ SaÃ­das</h3>
<p>A arquitetura bÃ¡sica do CLP Ã© composta por trÃªs blocos principais: <strong>(1) MÃ³dulos de Entrada</strong> â€” recebem sinais do mundo real (botÃµes, sensores, chave de fim de curso) e convertem para sinais digitais (0 ou 1) ou analÃ³gicos (valores numÃ©ricos). <strong>(2) CPU (Unidade Central de Processamento)</strong> â€” executa o programa do usuÃ¡rio, processa a lÃ³gica e toma decisÃµes. ContÃ©m memÃ³ria ROM (programa do sistema) e memÃ³ria RAM (programa do usuÃ¡rio e dados). <strong>(3) MÃ³dulos de SaÃ­da</strong> â€” enviam comandos do CLP para o mundo real (contatores, vÃ¡lvulas, lÃ¢mpadas, motores).</p>

<h3>Varredura CÃ­clica â€” Scan Time</h3>
<p>O CLP executa o programa de forma cÃ­clica contÃ­nua, em um processo chamado <strong>scan cycle</strong> (ciclo de varredura). A cada ciclo, o CLP: <strong>(1)</strong> Leitura das entradas (scan de inputs); <strong>(2)</strong> ExecuÃ§Ã£o do programa do usuÃ¡rio (ladder, function block etc.); <strong>(3)</strong> AtualizaÃ§Ã£o das saÃ­das (scan de outputs). O tempo total de um ciclo Ã© chamado de <strong>scan time</strong>, tipicamente entre 1 ms e 100 ms dependendo do tamanho do programa e do modelo do CLP.</p>

<h3>Rack e MÃ³dulos</h3>
<p>O CLP Ã© montado em um <strong>rack</strong> (suporte fÃ­sico) que contÃ©m slots para os mÃ³dulos. O primeiro slot Ã© reservado para a <strong>CPU</strong>. Os demais slots abrigam mÃ³dulos de entrada, saÃ­da, comunicaÃ§Ã£o e especiais. Cada mÃ³dulo ocupa um ou mais slots dependendo da capacidade. A numeraÃ§Ã£o dos slots segue uma sequÃªncia (0, 1, 2, 3...) e os endereÃ§os das entradas/saÃ­das sÃ£o associados ao nÃºmero do slot e da carta (canal).</p>

<h3>Exemplos de Fabricantes</h3>
<ul>
  <li><strong>Siemens</strong> â€” S7-1200, S7-1500 (TIA Portal)</li>
  <li><strong>Allen-Bradley (Rockwell)</strong> â€” CompactLogix, ControlLogix (Studio 5000)</li>
  <li><strong>Schneider Electric</strong> â€” Modicon M221, M241, M340 (EcoStruxure)</li>
  <li><strong>Omron</strong> â€” CP1H, CP1E, NJ (Sysmac Studio)</li>
  <li><strong>Mitsubishi</strong> â€” FX5U, L Series (GX Works)</li>
  <li><strong>Wago, ABB, LS (LG)</strong> â€” tambÃ©m fabricam CLPs industriais</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li>Confundir CLP com microcontrolador â€” CLP Ã© robusto, com E/S dedicadas e programaÃ§Ã£o em linguagens industriais</li>
  <li>NÃ£o considerar o scan time â€” programas muito grandes aumentam o scan time e podem causar atrasos</li>
  <li>Esquecer que o CLP Ã© cÃ­clico â€” ao contrÃ¡rio de interrupÃ§Ãµes, o CLP varre tudo sequencialmente</li>
  <li>NÃ£o dimensionar o nÃºmero de E/S â€” sempre planejar com margem para expansÃ£o</li>
  <li>Usar memÃ³ria RAM sem fonte de alimentaÃ§Ã£o â€” o programa pode ser perdido</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a arquitetura bÃ¡sica de um CLP?",
            options: [
              "Teclado â†’ Monitor â†’ Impressora",
              "Entradas â†’ CPU â†’ SaÃ­das",
              "Sensor â†’ Motor â†’ Atuador",
              "Entrada â†’ Processador â†’ Disco"
            ],
            correct: 1,
            explanation: "A arquitetura do CLP Ã©: Entradas (sensores) â†’ CPU (processamento) â†’ SaÃ­das (atuadores)."
          },
          {
            type: "fill-blank",
            question: "O ciclo contÃ­nuo de leitura-processamento-escrita do CLP Ã© chamado de ___ time.",
            correct: "scan",
            explanation: "O scan time Ã© o tempo total de um ciclo de varredura do CLP (leitura â†’ programa â†’ saÃ­das)."
          },
          {
            type: "multiple-choice",
            question: "Em um CLP, o scan cycle executa na seguinte ordem:",
            options: [
              "SaÃ­das â†’ Programa â†’ Entradas",
              "Programa â†’ Entradas â†’ SaÃ­das",
              "Entradas â†’ Programa â†’ SaÃ­das",
              "SaÃ­das â†’ Entradas â†’ Programa"
            ],
            correct: 2,
            explanation: "O scan cycle: (1) LÃª entradas, (2) Executa programa, (3) Atualiza saÃ­das."
          },
          {
            type: "multiple-choice",
            question: "O rack de um CLP serve para:",
            options: [
              "Armazenar dados do programa",
              "Alimentar o CLP com energia",
              "Suportar fisicamente os mÃ³dulos (CPU, E/S)",
              "Programar o CLP via computador"
            ],
            correct: 2,
            explanation: "O rack Ã© o suporte fÃ­sico onde os mÃ³dulos do CLP sÃ£o encaixados."
          },
          {
            type: "drag-drop",
            question: "Associe cada componente do CLP Ã  sua funÃ§Ã£o:",
            items: ["CPU", "MÃ³dulo de Entrada", "MÃ³dulo de SaÃ­da", "Rack"],
            targets: [
              "Executa o programa e toma decisÃµes",
              "Recebe sinais do mundo real (0/1 ou analÃ³gico)",
              "Envia comandos para atuadores",
              "Suporte fÃ­sico para os mÃ³dulos"
            ],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L2 â€” Entradas e SaÃ­das Digitais
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l2",
        moduleId: "m6",
        title: "Entradas e SaÃ­das Digitais",
        theory: `
<h2>Entradas e SaÃ­das Digitais</h2>

<h3>Sinais Digitais â€” 0 e 1</h3>
<p>Os sinais digitais trabalham com apenas dois estados: <strong>0 (desligado/aberto/falso)</strong> e <strong>1 (ligado/fechado/verdadeiro)</strong>. Ã‰ o tipo mais bÃ¡sico e mais utilizado de sinal em automaÃ§Ã£o. Exemplos: botÃ£o pressionado (1) ou solto (0), sensor detectou objeto (1) ou nÃ£o (0), contato de relÃ© fechado (1) ou aberto (0).</p>

<h3>Sensores NPN e PNP</h3>
<p><strong>NPN (sink â€” dreno):</strong> Quando o sensor detecta o objeto, ele conecta o sinal ao GND (0V). O sensor "drena" a corrente. A carga deve ser conectada entre a fonte de alimentaÃ§Ã£o (+24V) e o terminal de saÃ­da do sensor. Ã‰ mais comum em equipamentos asiÃ¡ticos. <strong>PNP (source â€” fonte):</strong> Quando o sensor detecta o objeto, ele conecta o sinal ao +24V. O sensor "fornece" a corrente. A carga deve ser conectada entre o terminal de saÃ­da e o GND. Ã‰ mais comum em equipamentos europeus. Ã‰ fundamental verificar se o CLP aceita NPN ou PNP antes de conectar.</p>

<h3>MÃ³dulo de Entrada Digital</h3>
<p>O mÃ³dulo de entrada digital recebe os sinais 0/1 dos sensores e botÃµes e os converte para sinais lÃ³gicos que a CPU pode ler. Cada ponto de entrada (terminal) corresponde a um bit na memÃ³ria do CLP. Por exemplo, um mÃ³dulo de 8 pontos de entrada pode ser endereÃ§ado como E0.0, E0.1, E0.2... E0.7. Quando um botÃ£o NA Ã© pressionado e conectado ao ponto E0.3, a CPU lÃª o bit E0.3 como 1 (verdadeiro).</p>

<h3>MÃ³dulo de SaÃ­da Digital</h3>
<p>O mÃ³dulo de saÃ­da digital recebe comandos da CPU e aciona dispositivos. Existem trÃªs tipos principais: <strong>(1) RelÃ©</strong> â€” contato mecÃ¢nico, flexÃ­vel, mas lento (~10ms) e com vida limitada; <strong>(2) Transistor</strong> â€” sem partes mÃ³veis, rÃ¡pido (~0,1ms), ideal para PWM e alta frequÃªncia, mas polarizado (sÃ³ CC); <strong>(3) Triac</strong> â€” para cargas AC, sem partes mÃ³veis, rÃ¡pido, mas com limitaÃ§Ãµes de carga indutiva.</p>

<h3>Carta de EndereÃ§o</h3>
<p>A carta de endereÃ§amento mapeia cada ponto de E/S a um endereÃ§o na memÃ³ria do CLP. O formato varia conforme o fabricante: Siemens usa "I" para entradas e "Q" para saÃ­das (ex: I0.0, Q0.1). Allen-Bradley usa "I" e "O" (ex: I:0/0, O:0/1). Omron usa "CIO" ou "W". A carta de endereÃ§os Ã© essencial para o programador saber qual endereÃ§o corresponde a cada fio fisicamente conectado ao mÃ³dulo.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>Conectar sensor NPN em mÃ³dulo que sÃ³ aceita PNP (ou vice-versa) â€” o sinal nÃ£o Ã© lido</li>
  <li>NÃ£o considerar a corrente de cada ponto de saÃ­da â€” relÃ©s tÃªm limite de corrente (tipicamente 2A)</li>
  <li>Confundir o nÃºmero do slot com o endereÃ§o â€” o endereÃ§o depende da configuraÃ§Ã£o do cartÃ£o</li>
  <li>NÃ£o usar fonte de alimentaÃ§Ã£o isolada para sensores â€” pode causar interferÃªncia</li>
  <li>Esquecer de configurar o tipo de E/S (NPN/PNP) em CLPs parametrizÃ¡veis</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Um sensor NPN (sink) ao detectar o objeto:",
            options: [
              "Conecta o sinal ao +24V",
              "Conecta o sinal ao GND (0V)",
              "Desconecta o sinal",
              "Inverte a polaridade"
            ],
            correct: 1,
            explanation: "O sensor NPN drena a corrente â€” conecta o sinal ao GND quando detecta o objeto."
          },
          {
            type: "fill-blank",
            question: "O mÃ³dulo de saÃ­da do tipo ___ Ã© mais rÃ¡pido e ideal para PWM, mas nÃ£o funciona com corrente alternada.",
            correct: "transistor",
            explanation: "O transistor Ã© rÃ¡pido (~0,1ms) e sem partes mÃ³veis, mas sÃ³ funciona com CC (polarizado)."
          },
          {
            type: "multiple-choice",
            question: "A carta de endereÃ§amento serve para:",
            options: [
              "Programar o CLP em ladder",
              "Mapear cada ponto de E/S a um endereÃ§o na memÃ³ria",
              "Alimentar os sensores",
              "Controlar a velocidade do motor"
            ],
            correct: 1,
            explanation: "A carta de endereÃ§os mapeia cada ponto fÃ­sico de E/S a um endereÃ§o lÃ³gico na memÃ³ria do CLP."
          },
          {
            type: "multiple-choice",
            question: "Se um botÃ£o NA Ã© ligado ao ponto E0.5 do CLP, quando o botÃ£o Ã© pressionado:",
            options: [
              "O bit E0.5 vale 0",
              "O bit E0.5 vale 1",
              "O bit E0.5 pisca",
              "O bit E0.5 fica indefinido"
            ],
            correct: 1,
            explanation: "Com botÃ£o NA, ao pressionar fecha o circuito e o CLP lÃª o bit como 1 (verdadeiro)."
          },
          {
            type: "drag-drop",
            question: "Associe cada tipo de saÃ­da digital Ã  sua caracterÃ­stica principal:",
            items: ["RelÃ©", "Transistor", "Triac"],
            targets: [
              "Contato mecÃ¢nico, flexÃ­vel, mais lento",
              "Sem partes mÃ³veis, rÃ¡pido, sÃ³ CC",
              "Sem partes mÃ³veis, para cargas AC"
            ],
            correct: [0, 1, 2]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L3 â€” Entradas e SaÃ­das AnalÃ³gicas
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l3",
        moduleId: "m6",
        title: "Entradas e SaÃ­das AnalÃ³gicas",
        theory: `
<h2>Entradas e SaÃ­das AnalÃ³gicas</h2>

<h3>Sinais AnalÃ³gicos â€” Valores ContÃ­nuos</h3>
<p>Diferente dos sinais digitais (0 ou 1), os sinais analÃ³gicos representam valores contÃ­nuos em uma faixa. Exemplos: temperatura (0-100Â°C), pressÃ£o (0-10 bar), nÃ­vel (0-100%), vazÃ£o (0-500 L/min). O CLP precisa converter esses sinais contÃ­nuos em valores numÃ©ricos para processÃ¡-los programaticamente.</p>

<h3>PadrÃµes de Sinal â€” 4-20mA e 0-10V</h3>
<p><strong>4-20 mA (corrente):</strong> Ã‰ o padrÃ£o mais utilizado na indÃºstria. O sinal mÃ­nimo Ã© 4 mA (correspondendo ao valor mÃ­nimo da variÃ¡vel) e o sinal mÃ¡ximo Ã© 20 mA (valor mÃ¡ximo). A vantagem do 4 mA como mÃ­nimo Ã© que permite detectar fio cortado â€” se o CLP ler 0 mA, hÃ¡ falha na linha. A corrente Ã© imune a queda de tensÃ£o em cabos longos. <strong>0-10V (tensÃ£o):</strong> Utilizado em distÃ¢ncias curtas e ambientes com pouca interferÃªncia. 0V = valor mÃ­nimo, 10V = valor mÃ¡ximo. Mais suscetÃ­vel a ruÃ­do eletromagnÃ©tico que o 4-20mA.</p>

<h3>ResoluÃ§Ã£o em Bits</h3>
<p>A resoluÃ§Ã£o do mÃ³dulo analÃ³gico Ã© dada em bits e determina quantos nÃ­veis discretos o sinal analÃ³gico Ã© dividido. Um mÃ³dulo de <strong>10 bits</strong> divide o sinal em 2Â¹â° = 1024 nÃ­veis (0-1023). Um mÃ³dulo de <strong>12 bits</strong> divide em 2Â¹Â² = 4096 nÃ­veis (0-4095). Um mÃ³dulo de <strong>16 bits</strong> divide em 2Â¹â¶ = 65536 nÃ­veis. Quanto maior a resoluÃ§Ã£o, maior a precisÃ£o da mediÃ§Ã£o. Para a maioria das aplicaÃ§Ãµes industriais, 12 bits Ã© suficiente.</p>

<h3>Conversor A/D (AnalÃ³gico/Digital)</h3>
<p>O conversor A/D Ã© o circuito que transforma o sinal analÃ³gico (tensÃ£o ou corrente contÃ­nua) em um valor numÃ©rico digital que o CLP pode processar. O processo Ã©: <strong>(1)</strong> Amostragem â€” o sinal Ã© "fotografado" em intervalos regulares; <strong>(2)</strong> QuantizaÃ§Ã£o â€” o valor amostrado Ã© arredondado para o nÃ­vel mais prÃ³ximo da escala; <strong>(3)</strong> CodificaÃ§Ã£o â€” o nÃ­vel Ã© representado em binÃ¡rio. A fÃ³rmula de conversÃ£o para 4-20mA: <code>Valor = (mA_lido - 4) Ã— (Escala_mÃ¡x - Escala_mÃ­n) / 16 + Escala_mÃ­n</code>.</p>

<h3>Mapeamento de Escala</h3>
<p>Para converter o valor digital (0-4095 para 12 bits) em engenharia (ex: 0-100Â°C), utiliza-se a proporcionalidade: <code>Temperatura = (Valor_ADC Ã— 100) / 4095</code>. Exemplo: se o CLP lÃª 2048 em mÃ³dulo de 12 bits, a temperatura Ã© (2048 Ã— 100) / 4095 = 50Â°C.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>NÃ£o considerar a resoluÃ§Ã£o â€” mÃ³dulo de 8 bits pode ser insenso para mediÃ§Ãµes de precisÃ£o</li>
  <li>Usar 0-10V em cabos longos â€” a queda de tensÃ£o causa erros de mediÃ§Ã£o</li>
  <li>NÃ£o calibrar o sensor â€” o sinal pode estar descalibrado</li>
  <li>Confundir o valor digital com o valor de engenharia â€” sempre mapear a escala</li>
  <li>NÃ£o considerar o tempo de amostragem â€” variÃ¡veis muito rÃ¡pidas podem ser perdidas</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "A principal vantagem do sinal 4-20mA sobre 0-10V Ã©:",
            options: [
              "Ã‰ mais barato",
              "Permite detectar fio cortado (0 mA = falha)",
              "Ã‰ mais rÃ¡pido",
              "Funciona com CA"
            ],
            correct: 1,
            explanation: "No 4-20mA, 0 mA indica falha (fio cortado), enquanto 4 mA Ã© o valor mÃ­nimo do sinal."
          },
          {
            type: "fill-blank",
            question: "Um mÃ³dulo analÃ³gico de 12 bits divide o sinal em ___ nÃ­veis discretos.",
            correct: "4096",
            explanation: "2Â¹Â² = 4096 nÃ­veis (0 a 4095) para um mÃ³dulo de 12 bits."
          },
          {
            type: "calculation",
            question: "Um sensor de temperatura de 0-100Â°C envia sinal de 4-20mA. Se o CLP lÃª 12 mA, qual a temperatura correspondente?",
            correct: "50",
            unit: "Â°C",
            explanation: "Temperatura = (12-4) Ã— (100-0) / (20-4) = 8 Ã— 100 / 16 = 50Â°C."
          },
          {
            type: "multiple-choice",
            question: "O conversor A/D dentro do mÃ³dulo analÃ³gico faz:",
            options: [
              "Converte sinal digital em analÃ³gico",
              "Converte sinal analÃ³gico em valor numÃ©rico digital",
              "Amplifica o sinal de entrada",
              "Filtra ruÃ­do do sinal"
            ],
            correct: 1,
            explanation: "O conversor A/D transforma o sinal analÃ³gico contÃ­nuo em um valor digital discreto."
          },
          {
            type: "drag-drop",
            question: "Associe cada resoluÃ§Ã£o ao nÃºmero de nÃ­veis:",
            items: ["8 bits", "10 bits", "12 bits", "16 bits"],
            targets: ["256 nÃ­veis", "1024 nÃ­veis", "4096 nÃ­veis", "65536 nÃ­veis"],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L4 â€” Linguagem Ladder
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l4",
        moduleId: "m6",
        title: "Linguagem Ladder",
        theory: `
<h2>Linguagem Ladder</h2>

<h3>O que Ã© Ladder?</h3>
<p>A linguagem <strong>Ladder (escada)</strong> Ã© a linguagem de programaÃ§Ã£o mais tradicional e amplamente utilizada para CLPs. Seu nome vem da semelhanÃ§a com o diagrama de lÃ³gica de relÃ©s, onde os contatos e bobinas sÃ£o desenhados entre dois trilhos verticais como os degraus de uma escada. Ã‰ uma linguagem grÃ¡fica, padronizada pela <strong>IEC 61131-3</strong>, que representa a lÃ³gica de controle de forma intuitiva para eletricistas e tÃ©cnicos de automaÃ§Ã£o.</p>

<h3>Trilho Esquerdo e Direito</h3>
<p>O diagrama Ladder Ã© composto por dois trilhos verticais: o <strong>trilho esquerdo</strong> (representa a fase ou linha de alimentaÃ§Ã£o +) e o <strong>trilho direito</strong> (representa o neutro ou retorno -). Todos os contatos e bobinas sÃ£o ligados entre esses dois trilhos. A corrente "flui" do trilho esquerdo para o direito, passando pelos contatos â€” quando todos os contatos de uma linha estÃ£o fechados (lÃ³gica verdadeira), a corrente chega Ã  bobina e a energiza.</p>

<h3>Contatos NA e NF</h3>
<p><strong>Contato NA (Normally Open)</strong> â€” representado por duas barras paralelas com espaÃ§o entre elas. Na programaÃ§Ã£o Ladder, Ã© lido como: "se o bit for 1, o contato fecha". <strong>Contato NF (Normally Closed)</strong> â€” representado por duas barras paralelas com uma barra diagonal (X). Ã‰ lido como: "se o bit for 0, o contato fecha". SÃ£o os elementos de entrada na lÃ³gica.</p>

<h3>Bobina de SaÃ­da</h3>
<p>A <strong>bobina</strong> Ã© representada por parÃªnteses ( ) ou cÃ­rculo no final da linha. Ã‰ o elemento de saÃ­da â€” quando a lÃ³gica da linha Ã© verdadeira, a bobina Ã© energizada e o bit de saÃ­da correspondente fica em 1. Exemplos: <code>(  ) Q0.0</code> â€” ao satisfazer a lÃ³gica, Q0.0 fica em 1. TambÃ©m existem bobinas especiais: pulso (â†‘), reset (R), set (S).</p>

<h3>LÃ³gica AND e OR</h3>
<p><strong>AND (em sÃ©rie):</strong> Dois ou mais contatos em sÃ©rie na mesma linha. A lÃ³gica sÃ³ Ã© verdadeira se TODOS os contatos estiverem fechados. Exemplo: <code>--| |----| |--( )</code> â€” contato1 AND contato2 â†’ saÃ­da. <strong>OR (em paralelo):</strong> Dois ou mais contatos em ramos paralelos. A lÃ³gica Ã© verdadeira se PELO MENOS UM contato estiver fechado. Exemplo: ramo1 com contatoA em paralelo com ramo2 com contatoB â†’ saÃ­da.</p>

<h3>Exemplo PrÃ¡tico â€” Selo de Contator</h3>
<pre>
  Ladder â€” Contato de Selo:
  F (trilho) --|S2(NF)|--|S1(NA)|--|  |---(KC)--- N (trilho)
                           |
                    --|KC_selo(NA)|-- (paralelo com S1)

  Quando S1 Ã© pressionado â†’ KC energiza â†’ KC_selo fecha â†’
  ao soltar S1, KC continua energizado pelo selo
</pre>

<h3>Erros Comuns</h3>
<ul>
  <li>Confundir contato NA e NF na programaÃ§Ã£o â€” o NA Ã© verdadeiro quando o bit vale 1</li>
  <li>NÃ£o usar contato de selo â€” a saÃ­da nÃ£o permanece ativa ao soltar o botÃ£o</li>
  <li>Criar linhas com lÃ³gica contraditÃ³ria (contato NA e NF do mesmo bit na mesma linha)</li>
  <li>NÃ£o considerar o scan cycle â€” o Ladder Ã© executado de cima para baixo, da esquerda para a direita</li>
  <li>Esquecer que uma bobina pode ser usada apenas uma vez por programa (regra em alguns CLPs)</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Na linguagem Ladder, o trilho esquerdo representa:",
            options: [
              "O neutro do circuito",
              "A fase ou linha de alimentaÃ§Ã£o (+)",
              "A terra",
              "Uma saÃ­da digital"
            ],
            correct: 1,
            explanation: "O trilho esquerdo Ã© a linha de alimentaÃ§Ã£o (fase/+) de onde parte a corrente."
          },
          {
            type: "fill-blank",
            question: "Dois contatos em sÃ©rie representam a lÃ³gica ___.",
            correct: "AND",
            explanation: "Na lÃ³gica AND, TODOS os contatos devem estar fechados para que a saÃ­da seja ativada."
          },
          {
            type: "multiple-choice",
            question: "Uma bobina de saÃ­da em Ladder Ã© representada por:",
            options: [
              "Duas barras paralelas (||)",
              "Uma barra diagonal (X)",
              "ParÃªnteses ou cÃ­rculo ( )",
              "Uma seta (â†’)"
            ],
            correct: 2,
            explanation: "A bobina Ã© representada por parÃªnteses ( ) ou cÃ­rculo no final da linha Ladder."
          },
          {
            type: "multiple-choice",
            question: "Dois contatos em paralelo representam a lÃ³gica:",
            options: ["AND", "OR", "NOT", "XOR"],
            correct: 1,
            explanation: "Na lÃ³gica OR (paralelo), basta UM dos contatos estar fechado para ativar a saÃ­da."
          },
          {
            type: "drag-drop",
            question: "Associe cada sÃ­mbolo Ladder Ã  sua funÃ§Ã£o:",
            items: ["--| |--", "--|/|--", "--( )--", "--(S)--"],
            targets: [
              "Contato NA â€” fecha quando bit = 1",
              "Contato NF â€” fecha quando bit = 0",
              "Bobina â€” energiza saÃ­da",
              "Bobina SET â€” latches saÃ­da em 1"
            ],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L5 â€” Temporizadores e Contadores no CLP
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l5",
        moduleId: "m6",
        title: "Temporizadores e Contadores no CLP",
        theory: `
<h2>Temporizadores e Contadores no CLP</h2>

<h3>Temporizadores no CLP</h3>
<p>Diferente dos temporizadoresExternos (mecÃ¢nicos/eletrÃ´nicos), os temporizadores no CLP sÃ£o <strong>funÃ§Ãµes implementadas em software</strong>. SÃ£o blocos de funÃ§Ã£o que, quando habilitados, contam o tempo e alteram o estado de seus contatos de saÃ­da apÃ³s o tempo ajustado. SÃ£o mais precisos, flexÃ­veis e nÃ£o ocupam espaÃ§o fÃ­sico no quadro. Os principais tipos sÃ£o TON, TOF e TP, idÃªnticos aos temporizadoresExternos mas executados pelo processador do CLP.</p>

<h3>Bloco TON â€” Timer ON Delay</h3>
<p>O bloco TON no CLP possui: <strong>IN</strong> (habilitaÃ§Ã£o â€” quando em 1, comeÃ§a a contar), <strong>PT</strong> (preset time â€” tempo ajustado), <strong>Q</strong> (saÃ­da â€” muda de estado apÃ³s o tempo), <strong>ET</strong> (elapsed time â€” tempo decorrido). Quando IN vai para 1, ET comeÃ§a a contar de 0 atÃ© PT. Quando ET = PT, Q vai para 1. Quando IN vai para 0, ET zera e Q vai para 0 imediatamente.</p>

<h3>Bloco TOF â€” Timer OFF Delay</h3>
<p>O TOF funciona inversamente: quando IN vai para 1, Q vai para 1 imediatamente e ET zera. Quando IN vai para 0, ET comeÃ§a a contar de 0 atÃ© PT. Enquanto ET < PT, Q permanece em 1. Quando ET = PT, Q vai para 0. Ã‰ Ãºtil para manter uma saÃ­da ativa por um tempo apÃ³s desligar a entrada.</p>

<h3>Bloco TP â€” Pulse Timer</h3>
<p>O TP gera um pulso de saÃ­da de duraÃ§Ã£o fixa. Na borda de subida de IN, Q vai para 1 e ET comeÃ§a a contar. Q permanece em 1 atÃ© ET = PT, independente do estado de IN. Se IN for desligado antes de PT, Q continua em 1. Ã‰ ideal para gerar pulsos de acionamento de vÃ¡lvulas, buzinas etc.</p>

<h3>Contadores â€” CTU e CTD</h3>
<p><strong>CTU (Count Up â€” Contador Crescente):</strong> Conta bordas de subida do sinal de entrada (CU). A cada borda, CV (current value) incrementa em 1. Quando CV â‰¥ PV (preset value), Q vai para 1. O reset (R) zera o CV. <strong>CTD (Count Down â€” Contador Decrescente):</strong> Conta bordas de descida. CV decrementa em 1 a cada borda. Quando CV â‰¤ 0, Q vai para 1. O load (LD) carrega PV no CV.</p>

<h3>Borda de Subida e Descida</h3>
<p><strong>Borda de subida (â†‘):</strong> Detecta a transiÃ§Ã£o de 0 para 1 de um sinal. Gera um pulso de 1 scan cycle. Ã‰ usada para contar eventos (ex: cada vez que um sensor detecta uma peÃ§a). <strong>Borda de descida (â†“):</strong> Detecta a transiÃ§Ã£o de 1 para 0. Gera um pulso de 1 scan cycle na queda do sinal.</p>

<h3>Erros Comuns</h3>
<ul>
  <li>NÃ£o considerar o tempo de scan â€” o timer pode ter erro de Â±1 scan time</li>
  <li>NÃ£o usar reset no contador â€” o contador pode atingir o mÃ¡ximo e parar de contar</li>
  <li>Confundir borda de subida com nÃ­vel alto â€” borda Ã© a transiÃ§Ã£o, nÃ­vel Ã© o estado</li>
  <li>NÃ£o dimensionar o preset value â€” timers e contadores com valores inadequados</li>
  <li>Esquecer que o TON reseta quando IN vai para 0 â€” nÃ£o Ã© um latch</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "No bloco TON, o sinal Q vai para 1 quando:",
            options: [
              "IN vai para 1 imediatamente",
              "ET atinge o valor de PT (preset time)",
              "IN vai para 0",
              "O CLP Ã© desligado"
            ],
            correct: 1,
            explanation: "No TON, Q sÃ³ vai para 1 quando o tempo decorrido (ET) atinge o tempo ajustado (PT)."
          },
          {
            type: "fill-blank",
            question: "O contador CTU incrementa o valor atual (CV) a cada ___ do sinal de entrada.",
            correct: "borda de subida",
            explanation: "O CTU conta transiÃ§Ãµes de 0 para 1 (bordas de subida) do sinal CU."
          },
          {
            type: "multiple-choice",
            question: "A borda de subida (â†‘) gera um pulso de duraÃ§Ã£o:",
            options: [
              "1 segundo",
              "O tempo ajustado no timer",
              "1 ciclo de scan do CLP",
              "Indefinida"
            ],
            correct: 2,
            explanation: "A borda de subida gera um pulso de exatamente 1 ciclo de scan do CLP."
          },
          {
            type: "multiple-choice",
            question: "No bloco TOF, quando IN vai para 0:",
            options: [
              "Q vai para 0 imediatamente",
              "Q permanece em 1 por um tempo (PT) e depois vai para 0",
              "Q pisca alternadamente",
              "ET zera imediatamente"
            ],
            correct: 1,
            explanation: "No TOF, Q mantÃ©m em 1 por mais PT tempo apÃ³s IN ir para 0, depois vai para 0."
          },
          {
            type: "drag-drop",
            question: "Associe cada bloco de timer/contador Ã  sua funÃ§Ã£o:",
            items: ["TON", "TOF", "TP", "CTU"],
            targets: [
              "Atraso para ligar â€” Q apÃ³s tempo em IN=1",
              "Atraso para desligar â€” Q mantÃ©m por PT apÃ³s IN=0",
              "Pulso fixo â€” Q por PT na borda de subida",
              "Contador crescente â€” CV++ a cada borda"
            ],
            correct: [0, 1, 2, 3]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L6 â€” FunÃ§Ãµes ComparaÃ§Ã£o e MatemÃ¡ticas
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l6",
        moduleId: "m6",
        title: "FunÃ§Ãµes ComparaÃ§Ã£o e MatemÃ¡ticas",
        theory: `
<h2>FunÃ§Ãµes ComparaÃ§Ã£o e MatemÃ¡ticas</h2>

<h3>FunÃ§Ãµes de ComparaÃ§Ã£o</h3>
<p>As funÃ§Ãµes de comparacÃ£o sÃ£o blocos que comparam dois valores e produzem um resultado booleano (verdadeiro/falso). SÃ£o essenciais para decisÃµes no programa do CLP. Os principais operadores de comparaÃ§Ã£o sÃ£o:</p>
<ul>
  <li><strong>= (igual)</strong>: Verifica se o valor A Ã© igual ao valor B. Exemplo: se MW10 = 100, ativa saÃ­da.</li>
  <li><strong>â‰  ou <> (diferente)</strong>: Verifica se A Ã© diferente de B. Ãštil para detectar estados fora do esperado.</li>
  <li><strong>> (maior que)</strong>: Verifica se A Ã© maior que B. Exemplo: se temperatura > 80Â°C, ativa alarme.</li>
  <li><strong>< (menor que)</strong>: Verifica se A Ã© menor que B. Exemplo: se nÃ­vel < 20%, liga bomba.</li>
  <li><strong>â‰¥ (maior ou igual)</strong> e <strong>â‰¤ (menor ou igual)</strong>: CombinaÃ§Ãµes dos anteriores.</li>
</ul>

<h3>Bloco de ComparaÃ§Ã£o no Ladder</h3>
<p>No Ladder, as comparaÃ§Ãµes sÃ£o representadas como blocos de funÃ§Ã£o com dois operandos de entrada e uma saÃ­da booleana. Exemplo:</p>
<pre>
  Ladder â€” ComparaÃ§Ã£o:
  --[ CMP â‰¥ ]--( Q1 )--
  |  MW10   |
  |  100    |

  Se MW10 â‰¥ 100, Q1 = 1
</pre>

<h3>FunÃ§Ãµes MatemÃ¡ticas</h3>
<p>Os CLPs oferecem blocos para operaÃ§Ãµes matemÃ¡ticas sobre valores inteiros ou reais (float):</p>
<ul>
  <li><strong>ADD (+)</strong>: Soma dois valores. Exemplo: C = A + B.</li>
  <li><strong>SUB (âˆ’)</strong>: Subtrai B de A. Exemplo: C = A âˆ’ B.</li>
  <li><strong>MUL (Ã—)</strong>: Multiplica dois valores. Exemplo: C = A Ã— B.</li>
  <li><strong>DIV (Ã·)</strong>: Divide A por B. Exemplo: C = A / B. Cuidado: divisÃ£o por zero!</li>
  <li><strong>MOD</strong>: Resto da divisÃ£o inteira. Exemplo: 17 MOD 5 = 2.</li>
</ul>

<h3>Bloco MOVE</h3>
<p>O bloco MOVE copia o valor de uma variÃ¡vel de entrada (IN) para uma variÃ¡vel de saÃ­da (OUT). Ã‰ Ãºtil para: transferir valores entre registradores, inicializar variÃ¡veis, copiar resultados de cÃ¡lculos. Exemplo: MOVE MW10 â†’ MW20 copia o conteÃºdo de MW10 para MW20.</p>

<h3>AplicaÃ§Ã£o PrÃ¡tica â€” ConversÃ£o de Escala</h3>
<p>Para converter um valor analÃ³gico (0-4095) em engenharia (0-100Â°C):</p>
<pre>
  TEMP_REAL = (ADC_VALUE Ã— 100.0) / 4095.0
  Usando blocos: MUL ADC_VALUE Ã— 100.0 â†’ Temp
                 DIV Temp / 4095.0 â†’ TEMP_REAL
</pre>

<h3>Erros Comuns</h3>
<ul>
  <li>DivisÃ£o por zero â€” sempre verificar se o divisor Ã© diferente de zero antes de dividir</li>
  <li>Overflow â€” resultado de soma/multiplicaÃ§Ã£o pode exceder o limite do tipo (INT: -32768 a 32767)</li>
  <li>Confundir igualdade (=) com atribuiÃ§Ã£o â€” em Ladder, = Ã© comparaÃ§Ã£o, Ã© atribuiÃ§Ã£o</li>
  <li>NÃ£o considerar a resoluÃ§Ã£o â€” operaÃ§Ãµes com INT podem perder casas decimais</li>
  <li>Usar valores negativos indevidamente â€” verificar se o sinal Ã© unsigned ou signed</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "Qual funÃ§Ã£o matemÃ¡tica copia o valor de uma variÃ¡vel para outra?",
            options: ["ADD", "SUB", "MOVE", "CMP"],
            correct: 2,
            explanation: "O bloco MOVE copia o valor de IN para OUT."
          },
          {
            type: "fill-blank",
            question: "O operador de comparaÃ§Ã£o que verifica se A Ã© diferente de B Ã© ___ ou <>.",
            correct: "â‰ ",
            explanation: "O operador â‰  (ou <>) retorna verdadeiro quando os valores sÃ£o diferentes."
          },
          {
            type: "calculation",
            question: "Se MW10 = 250 e MW20 = 10, qual o resultado de MW10 Ã· MW20 usando DIV?",
            correct: "25",
            unit: "",
            explanation: "250 Ã· 10 = 25."
          },
          {
            type: "multiple-choice",
            question: "Ao executar DIV por zero em um CLP:",
            options: [
              "O resultado Ã© 0",
              "O resultado Ã© infinito",
              "O CLP pode gerar erro ou comportamento indefinido",
              "O CLP ignora a instruÃ§Ã£o"
            ],
            correct: 2,
            explanation: "DivisÃ£o por zero pode causar erro de execuÃ§Ã£o no CLP â€” deve ser evitada com verificaÃ§Ã£o prÃ©via."
          },
          {
            type: "drag-drop",
            question: "Associe cada operaÃ§Ã£o matemÃ¡tica ao seu sÃ­mbolo:",
            items: ["ADD", "SUB", "MUL", "DIV", "MOD"],
            targets: [
              "+ (soma)",
              "âˆ’ (subtraÃ§Ã£o)",
              "Ã— (multiplicaÃ§Ã£o)",
              "Ã· (divisÃ£o)",
              "% (resto da divisÃ£o)"
            ],
            correct: [0, 1, 2, 3, 4]
          }
        ]
      },

      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      // M6-L7 â€” Projeto PrÃ¡tico: Controle de Bomba
      // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m6-l7",
        moduleId: "m6",
        title: "Projeto PrÃ¡tico â€” Controle de Bomba",
        theory: `
<h2>Projeto PrÃ¡tico â€” Controle de Bomba</h2>

<h3>DescriÃ§Ã£o do Projeto</h3>
<p>Neste projeto prÃ¡tico, vamos programar o controle de uma bomba d'Ã¡gua com sinalizaÃ§Ã£o luminosa. O sistema deve funcionar da seguinte forma: <strong>(1)</strong> Quando o operador aciona o botÃ£o de partida (IA1), o sistema inicia. <strong>(2)</strong> ApÃ³s 10 segundos de atraso (temporizador T1), a bomba (Q1) Ã© ligada e a lÃ¢mpada indicadora (Q2) tambÃ©m se acende. <strong>(3)</strong> A bomba e a lÃ¢mpada permanecem ligadas enquanto o sistema estiver ativo. <strong>(4)</strong> O botÃ£o de parada (IA2) desliga todo o sistema imediatamente.</p>

<h3>Lista de E/S (Carta de EndereÃ§os)</h3>
<pre>
  ENTRADAS:
  IA1 = I0.0 â€” Botoeira de Partida (NA)
  IA2 = I0.1 â€” Botoeira de Parada (NF)

  SAÃDAS:
  Q1 = Q0.0 â€” Contator da Bomba (KC)
  Q2 = Q0.1 â€” LÃ¢mpada Indicadora

  TEMPORIZADORES:
  T1 = TON â€” Timer ON Delay, PT = 10s
</pre>

<h3>LÃ³gica do Programa</h3>
<p>O programa Ladder Ã© composto por 3 linhas (rungs):</p>
<pre>
  RUNG 1 â€” Contato de Selo:
  I0.0(NF-parada) --| |-- I0.1(NF) --| |--( SISTEMA )--|  |--
                                         |
                              --|SISTEMA|-- (paralelo = selo)

  RUNG 2 â€” TemporizaÃ§Ã£o:
  SISTEMA --| |--( TON T1 )--|  |--
              |               |
              |          PT: 10s

  RUNG 3 â€” SaÃ­das:
  T1.Q --| |--( Q0.0 bomba )--|  |--
   |
   +------( Q0.1 lÃ¢mpada )--|  |--
</pre>

<h3>ExplicaÃ§Ã£o Detalhada do Programa</h3>
<p><strong>RUNG 1:</strong> Implementa o contato de selo do sistema. IA2 (NF) estÃ¡ em sÃ©rie â€” ao pressionar parada, o circuito abre. IA1 (NA) inicia o sistema. O bit SISTEMA (M0.0) Ã© energizado e mantido pelo contato de selo M0.0 em paralelo com IA1. <strong>RUNG 2:</strong> Quando SISTEMA = 1, o bloco TON Ã© habilitado. T1 comeÃ§a a contar de 0 atÃ© 10 segundos. <strong>RUNG 3:</strong> Quando T1.Q vai para 1 (apÃ³s 10s), Q0.0 (bomba) e Q0.1 (lÃ¢mpada) sÃ£o energizados simultaneamente. Ao pressionar IA2 (parada), SISTEMA vai para 0, T1 reseta, Q0.0 e Q0.1 desligam.</p>

<h3>VerificaÃ§Ã£o do Funcionamento</h3>
<ol>
  <li>Sem nada acionado: SISTEMA=0, T1=0, Q0.0=0, Q0.1=0 (bomba desligada)</li>
  <li>Pressionar IA1: SISTEMA=1 (selo), T1 comeÃ§a a contar</li>
  <li>Aguardo 10s: T1.Q=1 â†’ Q0.0=1 (bomba liga), Q0.1=1 (lÃ¢mpada acende)</li>
  <li>Soltar IA1: SISTEMA mantÃ©m=1 (selo), bomba continua ligada</li>
  <li>Pressionar IA2: SISTEMA=0, T1 reseta, Q0.0=0, Q0.1=0 (tudo desliga)</li>
</ol>

<h3>Erros Comuns em Projetos PrÃ¡ticos</h3>
<ul>
  <li>NÃ£o implementar o contato de selo â€” o sistema nÃ£o permanece ativo</li>
  <li>Colocar o timer antes do selo â€” o timer sÃ³ funciona quando o sistema estÃ¡ ativo</li>
  <li>NÃ£o resetar o timer na parada â€” pode haver comportamento indesejado</li>
  <li>Esquecer que IA2 Ã© NF â€” na programaÃ§Ã£o, usa-se contato NA do bit correspondente (I0.1)</li>
  <li>NÃ£o testar todos os estados â€” sempre simular antes de baixar para o CLP</li>
</ul>
`,
        exercises: [
          {
            type: "multiple-choice",
            question: "No projeto da bomba, o que acontece ao pressionar IA1 (partida)?",
            options: [
              "A bomba liga imediatamente",
              "O sistema Ã© ativado e o timer comeÃ§a a contar",
              "A lÃ¢mpada acende imediatamente",
              "Nada acontece"
            ],
            correct: 1,
            explanation: "Ao pressionar IA1, o bit SISTEMA Ã© energizado (selo) e o TON comeÃ§a a contar 10s."
          },
          {
            type: "fill-blank",
            question: "O temporizador T1 do tipo TON tem PT ajustado para ___ segundos.",
            correct: "10",
            explanation: "O timer TON estÃ¡ ajustado para 10 segundos (PT = 10s)."
          },
          {
            type: "multiple-choice",
            question: "Qual o endereÃ§o da botoeira de parada (IA2) no CLP?",
            options: ["I0.0", "I0.1", "Q0.0", "M0.0"],
            correct: 1,
            explanation: "IA2 (parada) estÃ¡ no endereÃ§o I0.1 conforme a carta de endereÃ§os."
          },
          {
            type: "multiple-choice",
            question: "Ao pressionar IA2 (parada), qual Ã© o efeito no sistema?",
            options: [
              "A bomba desliga mas a lÃ¢mpada continua",
              "A lÃ¢mpada desliga mas a bomba continua",
              "Tudo desliga imediatamente (SISTEMA, timer, bomba, lÃ¢mpada)",
              "O timer recomeÃ§a a contar"
            ],
            correct: 2,
            explanation: "IA2 (NF) corta o selo â†’ SISTEMA=0 â†’ T1 reseta â†’ Q0.0=0, Q0.1=0."
          },
          {
            type: "drag-drop",
            question: "Ordene a sequÃªncia de eventos ao pressionar IA1:",
            items: [
              "SISTEMA energiza (selo fecha)",
              "Timer T1 comeÃ§a a contar",
              "T1 atinge 10s â†’ T1.Q = 1",
              "Q0.0 (bomba) liga",
              "Q0.1 (lÃ¢mpada) acende"
            ],
            targets: [
              "1Âº",
              "2Âº",
              "3Âº",
              "4Âº",
              "5Âº"
            ],
            correct: [0, 1, 2, 3, 4]
          },
          {
            type: "calculation",
            question: "Se o scan time do CLP Ã© 5ms, qual o erro mÃ¡ximo do temporizador T1 de 10s?",
            correct: "0.005",
            unit: "s",
            explanation: "O erro mÃ¡ximo do timer Ã© Â±1 scan time = 5ms = 0,005s ( desprezÃ­vel para 10s)."
          }
        ]
      }
    ]
  }
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 7 â€“ INSTRUMENTAÃ‡ÃƒO INDUSTRIAL
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m7",
    title: "InstrumentaÃ§Ã£o Industrial",
    color: "#00CEC9",
    icon: "ðŸ“Š",
    lessons: [
      // â”€â”€â”€ M7-L1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l1",
        title: "Sensores Indutivos e Capacitivos",
        theory: `<h2>Sensores Indutivos</h2>
<h3>O que sÃ£o?</h3>
<p>Os sensores indutivos sÃ£o dispositivos que detectam a presenÃ§a de <strong>objetos metÃ¡licos</strong> sem contato fÃ­sico. Funcionam mediante um oscilador LC que gera um campo eletromagnÃ©tico na face sensÃ­vel. Quando um metal se aproxima, as <strong>correntes de Foucault (eddy currents)</strong> sÃ£o induzidas no objeto, drenando energia do oscilador e reduzindo a amplitude da oscilaÃ§Ã£o. Essa variaÃ§Ã£o Ã© detectada pelo circuito interno, que alterna o estado de saÃ­da.</p>
<h3>PrincÃ­pio de Funcionamento â€” Correntes Eddy</h3>
<p>A bobina interna cria um campo alternado. Ao entrar no campo, o metal sofre induÃ§Ã£o eletromagnÃ©tica: circulam correntes circunferenciais (eddy currents) que geram campo oposto, atenuando o oscilador. Metais ferrosos (aÃ§o, ferro) tÃªm maior alcance de detecÃ§Ã£o porque possuem alta permeabilidade magnÃ©tica. Metais nÃ£o ferrosos (alumÃ­nio, cobre, latÃ£o) reduzem o alcance em 40â€“60% em relaÃ§Ã£o ao aÃ§o.</p>
<h3>Como e Onde SÃ£o Aplicados</h3>
<ul>
  <li><strong>Contagem de peÃ§as</strong> em esteiras â€” detectam cada peÃ§a metÃ¡lica que passa pela zona sensÃ­vel.</li>
  <li><strong>Posicionamento de cilindros pneumÃ¡ticos</strong> â€” sensores de perfil (bandeira) detectam a posiÃ§Ã£o do pistÃ£o.</li>
  <li><strong>Controle de velocidade</strong> â€” engrenagens metÃ¡licas passam diante do sensor, gerando pulsos.</li>
  <li><strong>SeguranÃ§a</strong> â€” presenÃ§a de portas metÃ¡licas em mÃ¡quinas.</li>
</ul>
<h3>Erros Comuns</h3>
<ul>
  <li>Usar sensor indutivo para detectar plÃ¡stico ou madeira â€” <strong>nÃ£o funciona</strong>, pois o material nÃ£o Ã© condutor nem ferromagnÃ©tico.</li>
  <li>Instalar o sensor com distÃ¢ncia superior ao alcance nominal â€” gera leituras falsas ou falha de detecÃ§Ã£o.</li>
  <li>Desconsiderar o fator de reduÃ§Ã£o: um sensor com alcance 8 mm em aÃ§o pode detectar apenas 3â€“4 mm em alumÃ­nio.</li>
</ul>

<h2>Sensores Capacitivos</h2>
<h3>O que sÃ£o?</h3>
<p>Sensores capacitivos funcionam como uma das placas de um capacitor. A face sensÃ­vel forma um campo eletrostÃ¡tico; quando qualquer material dielÃ©trico (sÃ³lido, lÃ­quido ou gasoso) se aproxima, a <strong>capacitÃ¢ncia muda</strong>, alterando a frequÃªncia do oscilador interno. Diferente do indutivo, o capacitivo detecta praticamente <strong>qualquer material</strong>: metais, plÃ¡sticos, Ã¡gua, grÃ£os, pÃ³.</p>
<h3>Como Funcionam</h3>
<p>A variaÃ§Ã£o de capacitÃ¢ncia Ã© proporcional Ã  constante dielÃ©trica (Îµ) do material. Materiais com Îµ alto (Ã¡gua â‰ˆ 80, etileno glicol â‰ˆ 37) sÃ£o detectados a maior distÃ¢ncia. Materiais com Îµ baixo (plÃ¡stico â‰ˆ 2â€“3, madeira â‰ˆ 2â€“5) precisam estar mais prÃ³ximos. Ajuste de sensibilidade permite calibrar o limiar de detecÃ§Ã£o conforme o material.</p>
<h3>Onde SÃ£o Aplicados</h3>
<ul>
  <li><strong>NÃ­vel de lÃ­quidos</strong> em tanques â€” detectam Ã¡gua, Ã³leo, solventes atravÃ©s da parede nÃ£o metÃ¡lica.</li>
  <li><strong>DeteÃ§Ã£o de nÃ­vel em silos</strong> â€” grÃ£os, pÃ³, cimento.</li>
  <li><strong>PresenÃ§a de embalagens plÃ¡sticas</strong> em linhas de enchimento.</li>
  <li><strong>DetecÃ§Ã£o de metais e nÃ£o-metais</strong> â€” versatilidade total.</li>
</ul>
<h3>Erros Comuns</h3>
<ul>
  <li>NÃ£o considerar a constante dielÃ©trica do material â€” um sensor ajustado para Ã¡gua pode nÃ£o detectar Ã³leo com a mesma distÃ¢ncia.</li>
  <li>AcumulaÃ§Ã£o de material na face sensÃ­vel â€” resÃ­duos de lÃ­quido ou poeira afetam a leitura.</li>
  <li>Instalar em ambiente com vibraÃ§Ã£o excessiva â€” pode causar leituras intermitentes.</li>
</ul>

<h2>Tabela Comparativa</h2>
<div class="formula-box">
<table style="width:100%; border-collapse:collapse;">
<tr style="background:rgba(0,206,201,0.15);"><th style="padding:6px; border:1px solid #00CEC9; text-align:left;">CaracterÃ­stica</th><th style="padding:6px; border:1px solid #00CEC9;">Indutivo</th><th style="padding:6px; border:1px solid #00CEC9;">Capacitivo</th></tr>
<tr><td style="padding:6px; border:1px solid #333;">Material detectado</td><td style="padding:6px; border:1px solid #333; text-align:center;">SÃ³ metais</td><td style="padding:6px; border:1px solid #333; text-align:center;">Qualquer material</td></tr>
<tr><td style="padding:6px; border:1px solid #333;">Alcance tÃ­pico</td><td style="padding:6px; border:1px solid #333; text-align:center;">1â€“40 mm</td><td style="padding:6px; border:1px solid #333; text-align:center;">1â€“25 mm</td></tr>
<tr><td style="padding:6px; border:1px solid #333;">Fator de reduÃ§Ã£o</td><td style="padding:6px; border:1px solid #333; text-align:center;">Sim (nÃ£o-ferro)</td><td style="padding:6px; border:1px solid #333; text-align:center;">Sim (Îµ baixo)</td></tr>
<tr><td style="padding:6px; border:1px solid #333;">DetecÃ§Ã£o through-wall</td><td style="padding:6px; border:1px solid #333; text-align:center;">NÃ£o</td><td style="padding:6px; border:1px solid #333; text-align:center;">Sim (p. ex. plÃ¡stico)</td></tr>
</table>
</div>

<div class="norma-badge">NR-12 â€” MÃ¡quinas e Equipamentos: dispositivos de seguranÃ§a devem ser compatÃ­veis com o risco e instalados conforme fabricante.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Um sensor indutivo Ã© ideal para detectar:",
            options: ["PlÃ¡stico preto", "Ãgua em tanque", "PeÃ§a de aÃ§o em esteira", "NÃ­vel de Ã³leo em reservatÃ³rio"],
            correct: 2,
            explanation: "O sensor indutivo detecta apenas metais. A peÃ§a de aÃ§o Ã© ferromagnÃ©tica, proporcionando mÃ¡xima sensibilidade."
          },
          {
            type: "fill-blank",
            question: "A corrente induzida no objeto metÃ¡lico pelo sensor indutivo Ã© chamada de corrente de ___.",
            answer: "Foucault",
            explanation: "Correntes de Foucault (eddy currents) sÃ£o correntes circulantes induzidas por campo magnÃ©tico variÃ¡vel em um condutor."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a principal diferenÃ§a entre sensores indutivos e capacitivos?",
            options: [
              "Indutivos sÃ£o mais baratos",
              "Capacitivos detectam qualquer material, indutivos apenas metais",
              "Indutivos precisam de alimentaÃ§Ã£o CA",
              "Capacitivos nÃ£o tÃªm ajuste de sensibilidade"
            ],
            correct: 1,
            explanation: "Sensores capacitivos detectam qualquer material condutor ou dielÃ©trico (Ã¡gua, plÃ¡stico, grÃ£os), enquanto indutivos restringem-se a metais."
          },
          {
            type: "drag-drop",
            question: "Classifique os materiais pela facilidade de detecÃ§Ã£o com sensor indutivo (maior â†’ menor alcance):",
            items: ["AÃ§o carbono", "AlumÃ­nio", "LatÃ£o", "PlÃ¡stico"],
            correctOrder: [0, 1, 2, 3],
            explanation: "AÃ§o carbono (ferromagnÃ©tico) > alumÃ­nio (condutor, nÃ£o ferro) > latÃ£o (condutor, nÃ£o ferro) > plÃ¡stico (nÃ£o Ã© detectado pelo indutivo)."
          },
          {
            type: "calculation",
            question: "Um sensor indutivo tem alcance nominal de 10 mm em aÃ§o. O fator de reduÃ§Ã£o para alumÃ­nio Ã© 0,4. Qual o alcance efetivo em alumÃ­nio?",
            answer: "4",
            unit: "mm",
            explanation: "Alcance efetivo = alcance nominal Ã— fator de reduÃ§Ã£o = 10 mm Ã— 0,4 = 4 mm."
          }
        ]
      },

      // â”€â”€â”€ M7-L2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l2",
        title: "Sensores Ã“pticos e Fim de Curso",
        theory: `<h2>Sensores FotoelÃ©tricos</h2>
<h3>O que sÃ£o?</h3>
<p>Sensores fotoelÃ©tricos usam luz (infravermelha, vermelha ou laser) para detectar a presenÃ§a ou ausÃªncia de objetos. SÃ£o compostos por um <strong>emissor LED/laser</strong> e um <strong>receptor fotodiodo/fototransistor</strong>. Quando o feixe Ã© interrompido (ou refletido), o circuito alterna o estado de saÃ­da. SÃ£o extremamente versÃ¡teis por detectar praticamente qualquer material: sÃ³lidos, lÃ­quidos, transparentes, opacos.</p>

<h3>ConfiguraÃ§Ãµes de OperaÃ§Ã£o</h3>
<ul>
  <li><strong>Barreira (through-beam):</strong> emissor e receptor em corpos separados, face a face. O objeto interrompe o feixe. Maior alcance (atÃ© 30 m), mas exige fiaÃ§Ã£o dupla e alinhamento preciso. Ideal para portas de seguranÃ§a e detectar objetos em longa distÃ¢ncia.</li>
  <li><strong>Reflexivo retro-refletido:</strong> emissor e receptor no mesmo corpo. Um refletor (corner cube) devolve a luz ao sensor. O objeto interrompe o feixe refletido. Alcance atÃ© 10 m. NÃ£o precisa de alimentaÃ§Ã£o no refletor. Comum em esteiras e controle de acesso.</li>
  <li><strong>Difuso (energia prÃ³pria):</strong> o prÃ³prio objeto reflete a luz de volta ao sensor. Sem refletor. Alcance curto (atÃ© 2 m). SensÃ­vel Ã  cor e textura do objeto. Bom para detectar peÃ§as brancas/claras a curta distÃ¢ncia.</li>
</ul>

<h3>Onde SÃ£o Aplicados</h3>
<ul>
  <li>Contagem de itens em linhas de produÃ§Ã£o.</li>
  <li>DetecÃ§Ã£o de garrafas, embalagens, etiquetas.</li>
  <li>Portas e cortinas de seguranÃ§a (barreira).</li>
  <li>DetecÃ§Ã£o de nÃ­vel de lÃ­quidos transparentes (reflexivo bifilar).</li>
</ul>

<h2>Fim de Curso MecÃ¢nico</h2>
<h3>O que sÃ£o?</h3>
<p>Fins de curso sÃ£o chaves mecÃ¢nicas que sÃ£o acionadas pelo contato fÃ­sico de uma peÃ§a mÃ³vel (gatilho, roldana, alavanca). Existem various tipos: <strong>de agulha</strong> (aÃ§Ã£o rÃ¡pida, para baixa potÃªncia), <strong>de rolamento</strong> (para deslizamento suave), e <strong>de alavanca</strong> (para percurso longo). SÃ£o dispositivos positivos: quando acionados, abrem ou fecham contatos elÃ©tricos de forma definitiva.</p>

<h3>Como Funcionam</h3>
<p>A peÃ§a mÃ³vel encosta no gatilho, que move o mecanismo interno e alterna o contato. Contato <strong>NA (Normalmente Aberto)</strong> fecha quando acionado; contato <strong>NC (Normalmente Fechado)</strong> abre quando acionado. Para seguranÃ§a, usa-se contato NC â€” se o cabo romper, o circuito abre e a mÃ¡quina para (fail-safe).</p>

<h3>Onde SÃ£o Aplicados</h3>
<ul>
  <li>Limite de curso de cilindros pneumÃ¡ticos e atuadores lineares.</li>
  <li>Final de curso de elevadores e portÃµes.</li>
  <li>Posicionamento de mandris e mesas de mÃ¡quinas-ferramenta.</li>
  <li>SeguranÃ§a: parada de emergÃªncia mecÃ¢nica.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li>Usar sensor fotoelÃ©trico em ambiente com poeira pesada â€” a poeira obstrui o feixe e gera falsos disparos. SoluÃ§Ã£o: usar sensor com compensaÃ§Ã£o automÃ¡tica ou limpeza periÃ³dica.</li>
  <li>Confundir NA e NC no fim de curso â€” pode deixar a mÃ¡quina funcionando quando deveria parar.</li>
  <li>Usar fim de curso com contato NA em circuito de seguranÃ§a â€” falha se o cabo romper (perde a funÃ§Ã£o fail-safe).</li>
  <li>Instalar sensor Ã³ptico sem proteÃ§Ã£o contra luz solar direta â€” radiaÃ§Ã£o solar pode saturar o receptor.</li>
</ul>

<div class="norma-badge">NR-12 â€” Dispositivos de limitaÃ§Ã£o de curso e posiÃ§Ã£o devem ser instalados para impedir movimentos perigosos alÃ©m dos limites ajustados.</div>
<div class="norma-badge">NR-10 â€” Toda instalaÃ§Ã£o de dispositivos de seguranÃ§a deve respeitar o princÃ­pio fail-safe (falha segura).</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Qual configuraÃ§Ã£o de sensor fotoelÃ©trico tem o maior alcance?",
            options: ["Difuso", "Reflexivo retro-refletivo", "Barreira (through-beam)", "Capacitivo"],
            correct: 2,
            explanation: "A barreira (through-beam) pode atingir atÃ© 30 m porque emissor e receptor estÃ£o em corpos separados face a face, com mÃ¡xima potÃªncia no feixe."
          },
          {
            type: "multiple-choice",
            question: "Em circuito de seguranÃ§a, qual contato do fim de curso deve ser utilizado?",
            options: ["NA (Normalmente Aberto)", "NC (Normalmente Fechado)", "Qualquer um", "Contato de potÃªncia"],
            correct: 1,
            explanation: "Usa-se contato NC para que, se o cabo romper ou houver mau contato, o circuito abra e a mÃ¡quina pare automaticamente (fail-safe)."
          },
          {
            type: "fill-blank",
            question: "O sensor __________ Ã© o que possui emissor e receptor em corpos separados, face a face, com o maior alcance entre os fotoelÃ©tricos.",
            answer: "barreira",
            explanation: "Sensor barreira (through-beam): emissor e receptor em corpos opostos, alcance atÃ© 30 m, ideal para seguranÃ§a e longas distÃ¢ncias."
          },
          {
            type: "drag-drop",
            question: "Classifique os sensores Ã³pticos por alcance crescente (menor â†’ maior):",
            items: ["Difuso", "Reflexivo retro-refletivo", "Barreira"],
            correctOrder: [0, 1, 2],
            explanation: "Difuso (atÃ© 2 m) < Reflexivo retro-refletivo (atÃ© 10 m) < Barreira (atÃ© 30 m)."
          }
        ]
      },

      // â”€â”€â”€ M7-L3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l3",
        title: "SaÃ­das NPN e PNP",
        theory: `<h2>Transistores NPN e PNP em Sensores</h2>
<h3>O que sÃ£o?</h3>
<p>Sensores de proximidade e fotoelÃ©tricos industriais utilizam transistores bipolares de potÃªncia como elementos de saÃ­da. Os dois tipos sÃ£o <strong>NPN</strong> e <strong>PNP</strong>, que diferem na polaridade do transistor e, consequentemente, no tipo de carga que podem acionar. A escolha depende do tipo de entrada do CLP (Programador LÃ³gico Controlador) ou do circuito de controle.</p>

<h3>NPN (Sink â€” Sumidor)</h3>
<p>No NPN, o coletor estÃ¡ conectado Ã  carga e o emissor ao terra (0V). Quando o sensor Ã© acionado, o transistor conduz e <strong>conecta o lado da carga ao terra</strong>. A carga deve ter uma fonte de alimentaÃ§Ã£o positiva separada. O sensor "suga" (sink) a corrente da carga para o terra. Corrente de saÃ­da flui <strong>para dentro</strong> do sensor.</p>
<h3>PNP (Source â€” Fonte)</h3>
<p>No PNP, o emissor estÃ¡ conectado Ã  fonte positiva (Vcc) e o coletor Ã  carga. Quando acionado, o transistor conduz e <strong>conecta a carga Ã  fonte positiva</strong>. O sensor "fornece" (source) corrente Ã  carga. Corrente de saÃ­da flui <strong>para fora</strong> do sensor.</p>

<h3>Como LigÃ¡-los ao CLP</h3>
<ul>
  <li><strong>CLP com entrada tipo sink (comum):</strong> usa sensor PNP â€” o sensor fornece corrente para a entrada do CLP.</li>
  <li><strong>CLP com entrada tipo source:</strong> usa sensor NPN â€” a entrada do CLP fornece corrente e o sensor conduz ao terra.</li>
  <li><strong>Regra prÃ¡tica:</strong> entrada do CLP = 24VDC â†’ sensor PNP. Entrada do CLP = 0V (terra) â†’ sensor NPN.</li>
</ul>

<h3>Diagrama de LigaÃ§Ã£o (Fio 3 / Fio 4)</h3>
<ul>
  <li><strong>Fio 3 (2 cabos + blindagem):</strong> Marrom = +Vcc (10-30VDC), Azul = 0V, Preto = saÃ­da.</li>
  <li><strong>Fio 4 (3 cabos + blindagem):</strong> Marrom = +Vcc, Azul = 0V, Preto = saÃ­da 1, Branco = saÃ­da 2 (opostos: NA e NC).</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Inverter NPN e PNP:</strong> se conectar sensor NPN em entrada sink do CLP, nÃ£o haverÃ¡ corrente â€” a entrada nÃ£o aciona. Nunca confunda: NPN = sink, PNP = source.</li>
  <li>NÃ£o conectar o terra do sensor ao terra do CLP â€” circuitsos com referÃªncias diferentes causam curto-circuito ou leitura errada.</li>
  <li>Usar saÃ­da de sensor direto em cargas indutivas (contator, relÃ©) sem diodo de roda livre â€” o campo indutivo destrÃ³i o transistor.</li>
  <li>Confundir a corrente mÃ¡xima de saÃ­da (tipicamente 200 mA) com a corrente da carga â€” se a carga puxar mais, queima o transistor.</li>
</ul>

<div class="formula-box">
<p><strong>Regra de Ouro:</strong></p>
<p>PNP = <em>Source</em> = fornece +Vcc â†’ entrada do CLP recebe sinal positivo.</p>
<p>NPN = <em>Sink</em> = conduz ao 0V â†’ entrada do CLP recebe sinal de referÃªncia negativa.</p>
</div>
<div class="norma-badge">NR-12 â€” Entradas e saÃ­das de dispositivos de seguranÃ§a devem ser dimensionadas corretamente quanto Ã  corrente e tensÃ£o nominal.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Um sensor PNP Ã© classificado como:",
            options: ["Sink (sumidor)", "Source (fonte)", "RelÃ© mecÃ¢nico", "Semicondutor unipolar"],
            correct: 1,
            explanation: "PNP = Source: quando acionado, fornece corrente positiva (Vcc) para a carga, ou seja, Ã© fonte de energia."
          },
          {
            type: "fill-blank",
            question: "O sensor ___ Ã© o tipo que conduz a corrente da carga para o terra (0V) quando acionado.",
            answer: "NPN",
            explanation: "NPN = Sink (sumidor): o transistor conduz e conecta a carga ao terra, drenando a corrente."
          },
          {
            type: "multiple-choice",
            question: "Se a entrada do CLP estÃ¡ conectada ao terra (0V) e precisa receber sinal positivo ao acionar o sensor, qual tipo de sensor devo usar?",
            options: ["NPN", "PNP", "Fim de curso NA", "RelÃ© de seguranÃ§a"],
            correct: 1,
            explanation: "Entrada do CLP em 0V precisa receber +Vcc â†’ sensor PNP (source) fornece a tensÃ£o positiva."
          },
          {
            type: "drag-drop",
            question: "Associe as cores dos fios do sensor de 3 cabos Ã  sua funÃ§Ã£o:",
            items: ["Marrom", "Azul", "Preto"],
            correctOrder: [0, 1, 2],
            explanation: "Marrom = +Vcc (alimentaÃ§Ã£o), Azul = 0V (referÃªncia), Preto = sinal de saÃ­da."
          }
        ]
      },

      // â”€â”€â”€ M7-L4 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l4",
        title: "Medidas ElÃ©tricas",
        theory: `<h2>Medidores ElÃ©tricos BÃ¡sicos</h2>
<h3>AmperÃ­metro â€” MediÃ§Ã£o de Corrente</h3>
<p>O amperÃ­metro mede a <strong>corrente elÃ©trica</strong> (em AmpÃ¨res) e deve ser conectado em <strong>sÃ©rie</strong> com o circuito. Internamente possui baixa resistÃªncia (prÃ³xima de zero) para nÃ£o alterar a corrente que mede. Para correntes altas (> 5 A), usa-se <strong>pontas de prova com alicate</strong> (alicate de gancho) que envolvem o condutor, medindo o campo magnÃ©tico sem abrir o circuito (baseado no efeito Hall ou transformador de corrente). Nunca abrir um circuito sob carga para instalar amperÃ­metro em sÃ©rie.</p>

<h3>VoltÃ­metro â€” MediÃ§Ã£o de TensÃ£o</h3>
<p>O voltÃ­metro mede a <strong>diferenÃ§a de potencial</strong> (em Volts) e deve ser conectado em <strong>paralelo</strong> com o componente ou trecho de circuito a ser medido. Internamente possui altÃ­ssima resistÃªncia (megaohms) para nÃ£o drenar corrente significativa. As pontas de prova sÃ£o conectadas nos pontos desejados: vermelho no ponto de maior potencial, preto no de menor (referÃªncia).</p>

<h3>WattÃ­metro â€” MediÃ§Ã£o de PotÃªncia</h3>
<p>O wattÃ­metro mede a <strong>potÃªncia ativa</strong> (em Watts) e possui dois elementos: um <strong>bobina de corrente</strong> (em sÃ©rie, baixa resistÃªncia) e uma <strong>bobina de tensÃ£o</strong> (em paralelo, alta resistÃªncia). O produto vetorial das duas grandezas fornece a potÃªncia. Ã‰ essencial para dimensionamento de disjuntores e cabeamento, pois o fator de potÃªncia influencia o valor real consumido.</p>

<h3>MegÃ´hmetro â€” MediÃ§Ã£o de Isolamento</h3>
<p>O megÃ´hmetro (megger) mede a <strong>resistÃªncia de isolamento</strong> entre condutores ou entre condutor e terra, aplicando uma tensÃ£o DC elevada (tipicamente 500V ou 1000V). Ã‰ o instrumento obrigatÃ³rio para:</p>
<ul>
  <li><strong>Teste de instalaÃ§Ãµes novas</strong> â€” verificar se nÃ£o hÃ¡ curto entre fases ou fuga para terra.</li>
  <li><strong>ManutenÃ§Ã£o preditiva</strong> â€” monitorar degradaÃ§Ã£o de isolamento em motores, cabos e transformadores.</li>
  <li><strong>Antes de energizar</strong> â€” garantir que nÃ£o hÃ¡ defeito de isolamento.</li>
</ul>
<p>Valores aceitÃ¡veis: motores > 1 MÎ©, cabos > 100 MÎ© (depende da norma e tensÃ£o nominal). Valores abaixo indicam degradaÃ§Ã£o ou umidade.</p>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Conectar amperÃ­metro em paralelo</strong> â€” curto-circuito, pois tem baixa resistÃªncia.</li>
  <li><strong>Conectar voltÃ­metro em sÃ©rie</strong> â€” circuito abre, pois tem altÃ­ssima resistÃªncia.</li>
  <li><strong>Medir megÃ´hmetro com circuito energizado</strong> â€” risco de choque e destruiÃ§Ã£o do instrumento.</li>
  <li><strong>NÃ£o zerar o multÃ­metro</strong> antes de medir resistÃªncia â€” valor incorreto.</li>
  <li>Usar amperÃ­metro comum em corrente alternada â€” necessita multÃ­metro TRMS (raiz mÃ©dia quadrÃ¡tica verdadeira) para cargas nÃ£o lineares.</li>
</ul>

<div class="norma-badge">NR-10 â€” Instrumentos de mediÃ§Ã£o devem ser calibrados e aferidos periodicamente conforme norma do fabricante.</div>
<div class="norma-badge">NBR NM-ISO 17025 â€” LaboratÃ³rios de calibraÃ§Ã£o devem atender aos requisitos de competÃªncia tÃ©cnica.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "O amperÃ­metro deve ser conectado ao circuito em:",
            options: ["Paralelo", "SÃ©rie", "SÃ©rie-Paralelo", "NÃ£o precisa conectar"],
            correct: 1,
            explanation: "AmperÃ­metro em sÃ©rie: mede a mesma corrente que circula pelo circuito. Conectar em paralelo causaria curto-circuito devido Ã  baixa resistÃªncia interna."
          },
          {
            type: "multiple-choice",
            question: "O megÃ´hmetro Ã© utilizado para medir:",
            options: ["TensÃ£o de rede", "Corrente de curto-circuito", "ResistÃªncia de isolamento", "PotÃªncia aparente"],
            correct: 2,
            explanation: "MegÃ´hmetro (megger) aplica tensÃ£o DC elevada e mede a resistÃªncia de isolamento entre condutores e terra."
          },
          {
            type: "fill-blank",
            question: "O wattÃ­metro possui dois elementos: uma bobina de ___ e uma bobina de tensÃ£o.",
            answer: "corrente",
            explanation: "A bobina de corrente (em sÃ©rie) e a bobina de tensÃ£o (em paralelo) combinam para medir a potÃªncia ativa."
          },
          {
            type: "calculation",
            question: "Uma carga recebe 220V e consome 5A. Qual Ã© a potÃªncia ativa se o fator de potÃªncia for 0,8?",
            answer: "880",
            unit: "W",
            explanation: "P = V Ã— I Ã— cos(Ï†) = 220 Ã— 5 Ã— 0,8 = 880 W."
          }
        ]
      },

      // â”€â”€â”€ M7-L5 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l5",
        title: "Sinais AnalÃ³gicos",
        theory: `<h2>IntroduÃ§Ã£o a Sinais AnalÃ³gicos em AutomaÃ§Ã£o</h2>
<p>Enquanto sinais digitais representam apenas dois estados (ligado/desligado, 0/1), os sinais analÃ³gicos representam grandezas contÃ­nuas: temperatura, pressÃ£o, nÃ­vel, vazÃ£o. SÃ£o fundamentais em processos industriais onde a mediÃ§Ã£o e o controle precisam de granularidade entre valores mÃ­nimo e mÃ¡ximo.</p>

<h2>4-20 mA vs 0-10 V</h2>
<h3>Corrente 4-20 mA (Loop de Corrente)</h3>
<p>O sinal de 4-20 mA Ã© o padrÃ£o industrial dominante para transmissÃ£o de mediÃ§Ã£o. O valor mÃ­nimo (4 mA) representa o fundo de escala e o mÃ¡ximo (20 mA) o topo. A grande vantagem: se o fio romper, a corrente cai para 0 mA, que Ã© detectado como falha (fault), ao contrÃ¡rio de 0-10V onde 0V pode ser tanto fundo de escala quanto fio rompido.</p>
<ul>
  <li><strong>4 mA = 0% do range</strong> (ex: 0Â°C, 0 bar, 0 mÂ³/h)</li>
  <li><strong>20 mA = 100% do range</strong> (ex: 100Â°C, 10 bar, 100 mÂ³/h)</li>
  <li><strong>Vantagens:</strong> imune a queda de tensÃ£o no fio (corrente Ã© igual em sÃ©rie), detecÃ§Ã£o de falha em 0 mA, alimentaÃ§Ã£o pela prÃ³pria malha (2-wire).</li>
</ul>

<h3>TensÃ£o 0-10 V</h3>
<p>Comum em instalaÃ§Ãµes comerciais e de baixa potÃªncia. 0V = fundo de escala, 10V = topo. Mais simples de medir, mas sofre com quedas de tensÃ£o em longas distÃ¢ncias e nÃ£o detecta fio rompido (0V pode ser mediÃ§Ã£o legÃ­tima).</p>

<h2>ConversÃ£o AnalÃ³gica</h2>
<p>A conversÃ£o entre sinais Ã© feita por mÃ³dulos conversores (transductores). A fÃ³rmula linear Ã©:</p>
<div class="formula-box">
<p><strong>y = ((x - x_min) / (x_max - x_min)) Ã— (y_max - y_min) + y_min</strong></p>
<p>Exemplo: converter 12 mA para escala 0â€“100Â°C:</p>
<p>y = ((12 - 4) / (20 - 4)) Ã— (100 - 0) + 0 = (8/16) Ã— 100 = 50Â°C</p>
</div>

<h2>Fios 2 e Fios 4</h2>
<ul>
  <li><strong>Fios 2 (2-wire):</strong> o sensor alimenta-se pelo prÃ³prio loop de 4-20mA. Os dois fios carregam tanto alimentaÃ§Ã£o quanto sinal. Simples, menos cabeamento.</li>
  <li><strong>Fios 4 (4-wire):</strong> dois fios para alimentaÃ§Ã£o (ex: 24VDC) e dois para o sinal analÃ³gico. Maior precisÃ£o, alimentaÃ§Ã£o separada, mas mais cabeamento.</li>
</ul>

<h2>Blindagem (Cabo Blindado)</h2>
<p>O sinal analÃ³gico de 4-20mA ou 0-10V Ã© sensÃ­vel a interferÃªncias eletromagnÃ©ticas (EMI/RFI) de cabos de potÃªncia, inversores de frequÃªncia e motores. O <strong>cabo blindado</strong> possui uma malha metÃ¡lica ou fita de alumÃ­nio que atua como escudo eletrostÃ¡tico. A blindagem deve ser aterrada em <strong>um Ãºnico ponto</strong> (para evitar correntes de terra) â€” geralmente no lado do receptor (CLP).</p>

<h2>Termometria com PT100</h2>
<p>A PT100 Ã© uma resistÃªncia de platina com 100 Î© a 0Â°C. A temperatura altera a resistÃªncia de forma linear (aprox. 0,385 Î©/Â°C). O sensor Ã© conectado ao transmissor de temperatura, que converte a resistÃªncia em sinal 4-20mA ou 0-10V. ConfiguraÃ§Ãµes de ligaÃ§Ã£o:</p>
<ul>
  <li><strong>2 fios:</strong> simples, mas com erro de compensaÃ§Ã£o do cabo.</li>
  <li><strong>3 fios:</strong> compensa a resistÃªncia do cabo (mais comum industrial).</li>
  <li><strong>4 fios:</strong> mÃ¡xima precisÃ£o, elimina completamente o efeito do cabo.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Non blindar o cabo analÃ³gico</strong> â€” interferÃªncia de VF causa leituras instÃ¡veis.</li>
  <li><strong>Ground loop</strong> â€” blindagem aterrada em dois pontos com diferenÃ§a de potencial gera corrente circulante.</li>
  <li><strong>Usar 0-10V em distÃ¢ncias > 10m</strong> â€” queda de tensÃ£o distorce a leitura. Usar 4-20mA.</li>
  <li><strong>NÃ£o considerar a corrente mÃ­nima do sensor</strong> em fios 2 â€” se o sensor consumir mais que 4mA, o range efetivo diminui.</li>
</ul>

<div class="norma-badge">NBR 5410 â€” InstalaÃ§Ãµes de baixa tensÃ£o: cabeamento de sinal analÃ³gico deve ser separado do cabeamento de potÃªncia.</div>
<div class="norma-badge">IEC 61131-8 â€” CLPs: entrada/saÃ­da analÃ³gica deve ser dimensionada conforme o sinal do instrumento de campo.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Qual a principal vantagem do sinal 4-20 mA sobre 0-10 V?",
            options: [
              "Ã‰ mais barato de instalar",
              "Detecta fio rompido (0 mA = falha)",
              "NÃ£o precisa de blindagem",
              "Funciona com qualquer tensÃ£o de alimentaÃ§Ã£o"
            ],
            correct: 1,
            explanation: "No 4-20 mA, 0 mA indica falha (fio rompido). No 0-10V, 0V pode ser tanto fundo de escala quanto fio rompido, impossibilitando a detecÃ§Ã£o."
          },
          {
            type: "calculation",
            question: "Converta 16 mA para a escala de 0â€“150 bar (4-20 mA). Qual Ã© a pressÃ£o medida?",
            answer: "112.5",
            unit: "bar",
            explanation: "P = ((16 - 4) / (20 - 4)) Ã— 150 = (12/16) Ã— 150 = 112,5 bar."
          },
          {
            type: "fill-blank",
            question: "A PT100 Ã© uma resistÃªncia de platina com __ Î© a 0Â°C.",
            answer: "100",
            explanation: "PT = Platina, 100 = resistÃªncia a 0Â°C. APT100 tem TCR â‰ˆ 0,385 Î©/Â°C."
          },
          {
            type: "drag-drop",
            question: "Classifique as configuraÃ§Ãµes de ligaÃ§Ã£o da PT100 por precisÃ£o crescente:",
            items: ["2 fios", "3 fios", "4 fios"],
            correctOrder: [0, 1, 2],
            explanation: "2 fios (menor precisÃ£o, compensaÃ§Ã£o de cabo) < 3 fios (compensa parcialmente) < 4 fios (mÃ¡xima precisÃ£o)."
          },
          {
            type: "multiple-choice",
            question: "A blindagem do cabo analÃ³gico deve ser aterrada em:",
            options: ["Ambos os extremos", "Nenhum extremo", "Um Ãºnico ponto", "A cada 10 metros"],
            correct: 2,
            explanation: "Aterramento em um Ãºnico ponto evita correntes de terra (ground loops) que causam interferÃªncia no sinal."
          }
        ]
      },

      // â”€â”€â”€ M7-L6 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m7-l6",
        title: "Malha Aberta vs Malha Fechada",
        theory: `<h2>Conceitos Fundamentais</h2>
<h3>Controle em Malha Aberta</h3>
<p>Em malha aberta (open-loop), o controlador envia um comando de saÃ­da <strong>sem verificar</strong> se o efeito desejado foi alcanÃ§ado. O sistema nÃ£o possui sensor de realimentaÃ§Ã£o. Exemplo: ligar uma resistÃªncia de aquecimento a potÃªncia fixa â€” se a carga tÃ©rmica mudar, a temperatura nÃ£o serÃ¡ corrigida. Ã‰ simples e barato, mas impreciso e sensÃ­vel a perturbaÃ§Ãµes.</p>

<h3>Controle em Malha Fechada (com RetroalimentaÃ§Ã£o)</h3>
<p>Em malha fechada (closed-loop), um <strong>sensor mede a variÃ¡vel controlada</strong> (temperatura, pressÃ£o, velocidade, posiÃ§Ã£o) e envia o valor real ao controlador. O controlador compara o valor medido com o valor desejado (setpoint) e ajusta a saÃ­da para minimizar o erro. Ã‰ mais robusto, preciso e insensÃ­vel a perturbaÃ§Ãµes.</p>

<h3>Componentes da Malha Fechada</h3>
<ul>
  <li><strong>Setpoint (SP):</strong> valor desejado da variÃ¡vel controlada.</li>
  <li><strong>Valor medido (PV â€” Process Variable):</strong> leitura do sensor.</li>
  <li><strong>Erro (e):</strong> e = SP - PV.</li>
  <li><strong>Controlador:</strong> processa o erro e gera sinal de saÃ­da.</li>
  <li><strong>Atuador:</strong> elemento que executa a aÃ§Ã£o (resistÃªncia, vÃ¡lvula, inversor).</li>
  <li><strong>Processo:</strong> sistema sendo controlado (forno, tanque, motor).</li>
</ul>

<h2>Controlador PID</h2>
<p>O PID Ã© o algoritmo de controle mais utilizado na indÃºstria. Combina trÃªs aÃ§Ãµes:</p>

<h3>Proporcional (P)</h3>
<p>A saÃ­da Ã© proporcional ao erro: <strong>SaÃ­da = Kp Ã— e</strong>. Quanto maior o Kp, mais rÃ¡pida a resposta. PorÃ©m, sofre <strong>erro em regime permanente</strong> (offset): quando o erro se estabiliza em valor diferente de zero, o P sozinho nÃ£o consegue eliminÃ¡-lo.</p>

<h3>Integral (I)</h3>
<p>A saÃ­da acumula o erro ao longo do tempo: <strong>SaÃ­da += Ki Ã— âˆ«e dt</strong>. Elimina o erro em regime permanente (offset â†’ 0). PorÃ©m, pode causar <strong>overshoot</strong> e oscilaÃ§Ãµes se o Ki for muito alto. O termo integral "lembra" o erro acumulado.</p>

<h3>Derivativo (D)</h3>
<p>A saÃ­da reage Ã  <strong>velocidade de variaÃ§Ã£o do erro</strong>: <strong>SaÃ­da = Kd Ã— de/dt</strong>. Antecipa o comportamento futuro do erro. Reduz overshoot e oscilaÃ§Ãµes. SensÃ­vel a ruÃ­do â€” pode amplificar ruÃ­do de alta frequÃªncia se Kd for muito alto.</p>

<h3>Ajuste dos ParÃ¢metros Kp, Ki, Kd</h3>
<ul>
  <li><strong>MÃ©todo de Ziegler-Nichols:</strong> aumenta Kp atÃ© o sistema oscilar em regime, registra o ganho crÃ­tico (Ku) e o perÃ­odo de oscilaÃ§Ã£o (Tu), e calcula Kp, Ki, Kd com base em tabelas.</li>
  <li><strong>Regra prÃ¡tica:</strong> aumente Kp atÃ© resposta aceitÃ¡vel, aumente Ki para eliminar offset, aumente Kd para reduzir overshoot.</li>
  <li><strong>Comece sempre com Kp apenas</strong>, depois adicione I, e sÃ³ depois D.</li>
</ul>

<div class="formula-box">
<p><strong>EquaÃ§Ã£o PID (forma ideal):</strong></p>
<p>SaÃ­da(t) = Kp Ã— [ e(t) + (1/Ti) Ã— âˆ«e(Ï„)dÏ„ + Td Ã— de(t)/dt ]</p>
<p>Onde: Ti = tempo integral (Ki = 1/Ti), Td = tempo derivativo (Kd = Td)</p>
</div>

<h3>Exemplos PrÃ¡ticos</h3>
<ul>
  <li><strong>Controle de temperatura:</strong> sensor PT100 â†’ transmissor 4-20mA â†’ CLP (PID) â†’ saÃ­da PWM â†’ resistÃªncia de aquecimento.</li>
  <li><strong>Controle de nÃ­vel:</strong> sensor de nÃ­vel â†’ CLP â†’ vÃ¡lvula proporcional de alimentaÃ§Ã£o.</li>
  <li><strong>Controle de velocidade:</strong> encoder â†’ inversor de frequÃªncia (PID interno) â†’ motor.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Ki alto demais</strong> â€” causa oscilaÃ§Ãµes e instabilidade. Reduza Ki ou aumente Ti.</li>
  <li><strong>Kd alto demais</strong> â€” amplifica ruÃ­do, a saÃ­da fica "nervosa". Reduza Kd.</li>
  <li><strong>NÃ£o considerar o atraso do processo</strong> â€” sistemas com grande dead time (atraso puro) sÃ£o difÃ­ceis de controlar com PID convencional. Considere compensadores de atraso.</li>
  <li><strong>Trocar P e I de lugar</strong> â€” Kp controla a velocidade, Ki elimina offset. NÃ£o confunda as funÃ§Ãµes.</li>
</ul>

<div class="norma-badge">IEC 61131-3 â€” Linguagens de programaÃ§Ã£o de CLPs incluem blocos PID para controle de processos industriais.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Em um sistema de controle em malha aberta, o que falta ao controlador?",
            options: ["Setpoint", "Atuador", "Sensor de realimentaÃ§Ã£o (feedback)", "AlimentaÃ§Ã£o elÃ©trica"],
            correct: 2,
            explanation: "Malha abenta = sem retroalimentaÃ§Ã£o. O controlador nÃ£o sabe qual Ã© o valor real da variÃ¡vel controlada, nÃ£o podendo corrigir erros."
          },
          {
            type: "fill-blank",
            question: "O termo __________ do controlador PID elimina o erro em regime permanente (offset).",
            answer: "Integral",
            explanation: "O termo I acumula o erro ao longo do tempo e aumenta a saÃ­da atÃ© que o erro chegue a zero."
          },
          {
            type: "multiple-choice",
            question: "Se um forno de controle PID comeÃ§a a oscilar em torno do setpoint, qual parÃ¢metro provavelmente estÃ¡ muito alto?",
            options: ["Kp (proporcional)", "Ki (integral)", "Kd (derivativo)", "O sensor estÃ¡ defeituoso"],
            correct: 1,
            explanation: "Ki alto causa oscilaÃ§Ãµes porque acumula erro rapidamente e sobrecorrege o sistema. Reduzir Ki ou aumentar Ti estabiliza."
          },
          {
            type: "drag-drop",
            question: "Ordene os componentes de uma malha fechada de controle na sequÃªncia correta do fluxo de sinal:",
            items: ["Setpoint (SP)", "Controlador PID", "Atuador", "Processo", "Sensor (PV)"],
            correctOrder: [0, 1, 2, 3, 4],
            explanation: "SP â†’ Controlador compara SP com PV â†’ gera saÃ­da â†’ Atuador atua no Processo â†’ Sensor mede o resultado e retorna ao controlador."
          },
          {
            type: "calculation",
            question: "Um controlador PID tem Kp = 2, Ki = 0,5 sâ»Â¹ e o erro acumulado ao longo de 10 segundos Ã© 5Â°CÂ·s. Qual a contribuiÃ§Ã£o do termo integral na saÃ­da?",
            answer: "25",
            unit: "unidades",
            explanation: "SaÃ­da_I = Ki Ã— âˆ«e dt = 0,5 Ã— 5 = 2,5. Mas o erro acumulado jÃ¡ Ã© âˆ«e dt = 5, entÃ£o SaÃ­da_I = Ki Ã— erro_acumulado = 0,5 Ã— 5 = 2,5. Se Ki = 0,5 e erro integrado = 5, saÃ­da = 2,5."
          }
        ]
      }
    ]
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MÃ“DULO 8 â€“ SEGURANÃ‡A E PROTEÃ‡ÃƒO
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: "m8",
    title: "SeguranÃ§a e ProteÃ§Ã£o",
    color: "#636E72",
    icon: "ðŸ›¡ï¸",
    lessons: [
      // â”€â”€â”€ M8-L1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l1",
        title: "NR-10 VisÃ£o Geral",
        theory: `<h2>O que Ã© a NR-10?</h2>
<p>A <strong>Norma Regulamentadora NR-10</strong> (SeguranÃ§a em InstalaÃ§Ãµes e ServiÃ§os em Eletricidade) Ã© a principal norma brasileira que regulamenta a seguranÃ§a elÃ©trica em ambientes de trabalho. Publicada pelo MinistÃ©rio do Trabalho e Emprego, ela estabelece os <strong>requisitos mÃ­nimos</strong> para proteÃ§Ã£o dos trabalhadores que operam, instalaram, inspecionaram e mantiveram instalaÃ§Ãµes elÃ©tricas. Seu objetivo Ã© reduzir riscos de acidentes elÃ©tricos, que sÃ£o uma das principais causas de acidentes fatais no trabalho.</p>

<h3>Escopo de AplicaÃ§Ã£o</h3>
<p>A NR-10 se aplica a todas as instalaÃ§Ãµes elÃ©tricas em <strong>tensÃ£o igual ou superior a 50V CA ou 120V CC</strong> em ambientes internos e externos, incluindo:</p>
<ul>
  <li>GeraÃ§Ã£o, transmissÃ£o, distribuiÃ§Ã£o e consumo de energia elÃ©trica.</li>
  <li>InstalaÃ§Ãµes industriais, comerciais, residenciais e pÃºblicas.</li>
  <li>ServiÃ§os de manutenÃ§Ã£o, reparo e inspeÃ§Ã£o em instalaÃ§Ãµes energizadas ou desenergizadas.</li>
  <li>Projetos e projetos executivos de instalaÃ§Ãµes elÃ©tricas.</li>
</ul>

<h3>PrincÃ­pios Fundamentais</h3>
<ul>
  <li><strong>PrevenÃ§Ã£o:</strong> aÃ§Ãµes antes do acidente, nÃ£o depois. Toda instalaÃ§Ã£o deve ser projetada e mantida para minimizar riscos.</li>
  <li><strong>Hierarquia de controles:</strong> eliminaÃ§Ã£o do perigo â†’ engenharia â†’ administrativo â†’ EPI.</li>
  <li><strong>Trabalho Desenerizado (TD):</strong> Ã© o procedimento padrÃ£o. Deve ser realizado sempre que possÃ­vel.</li>
  <li><strong>ProteÃ§Ã£o contra contato indireto:</strong> aterramento, equipotencializaÃ§Ã£o, dispositivos de proteÃ§Ã£o contra curto-circuito e fuga.</li>
</ul>

<h3>Responsabilidades</h3>
<ul>
  <li><strong>Empregador:</strong> fornecer EPIs adequados, capacitar trabalhadores, manter instalaÃ§Ãµes em conformidade, elaborar Plano de Trabalho, realizar AnÃ¡lise de Risco (AR) e PermissÃ£o de Trabalho (PT).</li>
  <li><strong>Empregado:</strong> cumprir as normas, utilizar EPIs, comunicar riscos e situaÃ§Ãµes de perigo, interromper trabalho em condiÃ§Ãµes inseguras.</li>
  <li><strong>CIPA (ComissÃ£o Interna de PrevenÃ§Ã£o de Acidentes):</strong> atuar como agente de mudanÃ§a, promover treinamentos, inspecionar ambientes, comunicar acidentes e quase-acidentes.</li>
</ul>

<h3>ClassificaÃ§Ã£o por TensÃ£o e Grau de Risco</h3>
<ul>
  <li><strong>Baixa tensÃ£o (BT):</strong> atÃ© 1.000V CA ou 1.500V CC.</li>
  <li><strong>Alta tensÃ£o (AT):</strong> acima de 1.000V CA ou 1.500V CC.</li>
  <li><strong>Grau de risco:</strong> I (baixo), II (mÃ©dio), III (alto), IV (muito alto) â€” definidos conforme o tipo de instalaÃ§Ã£o e o ambiente de trabalho.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Desconsiderar a NR-10 em instalaÃ§Ãµes "simples"</strong> â€” qualquer instalaÃ§Ã£o â‰¥ 50V CA estÃ¡ sujeita.</li>
  <li><strong>Trabalhar sem PermissÃ£o de Trabalho</strong> em instalaÃ§Ãµes energizadas.</li>
  <li><strong>NÃ£o realizar AnÃ¡lise de Risco</strong> antes de iniciar serviÃ§os.</li>
  <li><strong>Assumir que baixa tensÃ£o nÃ£o mata</strong> â€” 127V jÃ¡ pode ser letal em condiÃ§Ãµes favorÃ¡veis (umidade, contato direto).</li>
</ul>

<div class="norma-badge">NR-10 â€” SeguranÃ§a em InstalaÃ§Ãµes e ServiÃ§os em Eletricidade (Portaria MTb nÂº 594/2014 e atualizaÃ§Ãµes).</div>
<div class="norma-badge">NR-10 SeÃ§Ã£o 10.1 â€” A NR-10 se aplica a instalaÃ§Ãµes elÃ©tricas em tensÃ£o â‰¥ 50V CA ou â‰¥ 120V CC.</div>
<div class="norma-badge">NR-5 â€” CIPA: composiÃ§Ã£o, atribuiÃ§Ãµes e procedimentos de prevenÃ§Ã£o de acidentes.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "A NR-10 se aplica a instalaÃ§Ãµes elÃ©tricas com tensÃ£o igual ou superior a:",
            options: ["220V CA", "127V CA", "50V CA", "1000V CA"],
            correct: 2,
            explanation: "A NR-10 se aplica a instalaÃ§Ãµes â‰¥ 50V CA ou â‰¥ 120V CC em ambientes de trabalho."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© o procedimento padrÃ£o recomendado pela NR-10 para serviÃ§os em instalaÃ§Ãµes elÃ©tricas?",
            options: ["Trabalho energizado com EPI", "Trabalho Desenerizado (TD)", "Trabalho com proteÃ§Ã£o de barreira apenas", "Trabalho sem PermissÃ£o de Trabalho"],
            correct: 1,
            explanation: "O Trabalho Desenerizado (TD) Ã© o procedimento padrÃ£o. Deve ser realizado sempre que possÃ­vel para eliminar o risco elÃ©trico."
          },
          {
            type: "fill-blank",
            question: "A ___ Ã© a comissÃ£o interna responsÃ¡vel por promover a prevenÃ§Ã£o de acidentes no ambiente de trabalho.",
            answer: "CIPA",
            explanation: "CIPA = ComissÃ£o Interna de PrevenÃ§Ã£o de Acidentes, prevista na NR-5."
          },
          {
            type: "drag-drop",
            question: "Ordene as responsabilidades conforme a hierarquia de controles (da mais eficaz para a menos eficaz):",
            items: ["EPI (Equipamento de ProteÃ§Ã£o Individual)", "EliminaÃ§Ã£o do perigo", "Controles de engenharia", "Controles administrativos"],
            correctOrder: [1, 2, 3, 0],
            explanation: "Hierarquia: EliminaÃ§Ã£o > Engenharia > Administrativo > EPI. Quanto mais alto na hierarquia, mais eficaz."
          }
        ]
      },

      // â”€â”€â”€ M8-L2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l2",
        title: "EPIs e EPCs",
        theory: `<h2>Equipamentos de ProteÃ§Ã£o Individual (EPIs)</h2>
<p>EPIs sÃ£o dispositivos ou acessÃ³rios usados pelo trabalhador para <strong>proteÃ§Ã£o contra riscos</strong> que ameaÃ§am sua saÃºde e seguranÃ§a. SÃ£o a Ãºltima barreira de defesa â€” devem ser usados quando os controles de engenharia e administrativos nÃ£o eliminam totalmente o risco. O empregador Ã© obrigado a fornecer, treinar o uso correto e substituir quando danificados.</p>

<h3>EPIs ElÃ©tricos Principais</h3>
<ul>
  <li><strong>Luvas isolantes:</strong> confeccionadas em borracha isolante, classificadas por classe de tensÃ£o (00 a 4). Devem ser inspecionadas visualmente antes de cada uso (furos, rasgos, desgaste). Usadas em serviÃ§os de HT e BT para proteÃ§Ã£o contra choque elÃ©trico direto.</li>
  <li><strong>Capacete de seguranÃ§a com isolamento elÃ©trico:</strong> classe B (atÃ© 20kV), E (atÃ© 30kV) ou C (atÃ© 40kV). Protege contra choque elÃ©trico por contato indireto e contra impactos. Deve ter validade do isolamento verificada anualmente.</li>
  <li><strong>Ã“culos de proteÃ§Ã£o:</strong> protegem contra arcos elÃ©tricos, respingos de metal fundido e partÃ­culas. Lentes com proteÃ§Ã£o UV/IR para arco elÃ©trico.</li>
  <li><strong>CalÃ§ado de seguranÃ§a com isolamento:</strong> solados isolantes (atÃ© 1.000V), biqueira de composite ou aÃ§o. Evita choque elÃ©trico por contato com piso energizado e protege contra impactos.</li>
  <li><strong>Cinto paraqÃ¼edista com cinturÃ£o trava-quedas:</strong> obrigatÃ³rio em trabalhos em altura (NR-35). Trava-queda retrÃ¡til ou talabarte com ABS (absorvedor de energia).</li>
  <li><strong>Faixa isolante / tapete isolante:</strong> superfÃ­cie isolante sobre a qual o trabalhador permanece para evitar contato com o solo energizado.</li>
</ul>

<h2>Equipamentos de ProteÃ§Ã£o Coletiva (EPCs)</h2>
<p>EPCs protegem <strong>todos os trabalhadores</strong> simultaneamente e tÃªm prioridade sobre os EPIs. Incluem:</p>
<ul>
  <li><strong>SinalizaÃ§Ã£o de advertÃªncia:</strong> placas de "Perigo â€” Risco ElÃ©trico", faixas de sinalizaÃ§Ã£o, cones. Devem ser visÃ­veis e resistentes Ã s condiÃ§Ãµes ambientais.</li>
  <li><strong>Barreiras e isolamentos:</strong> cercas, tapumes, grades que impedem acesso a Ã¡reas energizadas. Devem ser rÃ­gidas, estÃ¡veis e sinalizadas.</li>
  <li><strong>Sistemas de intertravamento:</strong> dispositivos que impedem acesso a partes perigosas enquanto estiverem energizadas (porta com microswitch, trava eletromagnÃ©tica).</li>
  <li><strong>Extintores de incÃªndio classe C (elÃ©trico):</strong> COâ‚‚ ou pÃ³ quÃ­mico seco. Nunca usar Ã¡gua em fogo elÃ©trico.</li>
  <li><strong>Isolamento temporÃ¡rio:</strong> uso de lonas isolantes, tapetes e coberturas para proteger trabalhadores e equipamentos durante manutenÃ§Ã£o.</li>
</ul>

<h3>InspeÃ§Ã£o e ManutenÃ§Ã£o de EPIs</h3>
<ul>
  <li><strong>Antes de cada uso:</strong> inspeÃ§Ã£o visual â€” verificar rasgos, furos, desgaste, avarias.</li>
  <li><strong>Periodicamente:</strong> teste elÃ©trico conforme norma (ex: luvas isolantes â€” teste de potencial a cada 6 meses ou conforme NR-10).</li>
  <li><strong>Armazenamento:</strong> local limpo, seco, longe de solventes e luz solar direta.</li>
  <li><strong>SubstituiÃ§Ã£o:</strong> imediata quando apresentar defeito ou apÃ³s prazo de validade.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Usar luva de borracha comum</strong> em vez de luva isolante certificada â€” a borracha comum nÃ£o tem resistÃªncia elÃ©trica garantida.</li>
  <li><strong>NÃ£o inspecionar EPI antes do uso</strong> â€” um furo microscÃ³pico pode causar choque fatal.</li>
  <li><strong>Substituir EPC por EPI</strong> â€” o EPI Ã© a Ãºltima defesa. EPCs sÃ£o sempreä¼˜å…ˆ (barreiras > luvas).</li>
  <li><strong>Usar capacete com isolamento vencido</strong> â€” o isolamento degradado nÃ£o protege contra choque elÃ©trico.</li>
</ul>

<div class="norma-badge">NR-6 â€” Equipamentos de ProteÃ§Ã£o Individual (EPI): obrigatoriedade de fornecimento, uso e conservaÃ§Ã£o.</div>
<div class="norma-badge">NR-10 SeÃ§Ã£o 10.6 â€” EPIs devem ser selecionados conforme o risco e a atividade, com certificaÃ§Ã£o de validade.</div>
<div class="norma-badge">NR-10 SeÃ§Ã£o 10.7 â€” EPCs devem ser instalados antes dos EPIs, conforme hierarquia de controles.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Qual Ã© a ordem de prioridade entre EPC e EPI conforme a hierarquia de controles?",
            options: [
              "EPI primeiro, depois EPC",
              "EPC primeiro, depois EPI",
              "SÃ£o equivalentes",
              "Depende do risco"
            ],
            correct: 1,
            explanation: "EPCs protegem coletivamente e tÃªm prioridade. EPIs sÃ£o a Ãºltima barreira de defesa individual."
          },
          {
            type: "multiple-choice",
            question: "Luvas isolantes devem ser classificadas por:",
            options: ["Cor", "Classe de tensÃ£o (00 a 4)", "Tamanho", "Fabricante"],
            correct: 1,
            explanation: "Luvas isolantes sÃ£o classificadas por classe de tensÃ£o (00 atÃ© 4), definindo a mÃ¡xima tensÃ£o de trabalho permitida."
          },
          {
            type: "fill-blank",
            question: "O capacete de seguranÃ§a com isolamento elÃ©trico deve ter sua validade do isolamento verificada ___ (periodicidade).",
            answer: "anualmente",
            explanation: "Conforme NR-10, o teste de isolamento do capacete deve ser realizado anualmente ou conforme instruÃ§Ã£o do fabricante."
          },
          {
            type: "drag-drop",
            question: "Classifique os EPIs elÃ©tricos conforme a proteÃ§Ã£o que oferecem (maior â†’ menor proteÃ§Ã£o contra choque direto):",
            items: ["Luva isolante classe 4", "Luva isolante classe 00", "Luva isolante classe 2"],
            correctOrder: [0, 2, 1],
            explanation: "Classe 4 (atÃ© 36kV) > Classe 2 (atÃ© 17kV) > Classe 00 (atÃ© 500V)."
          }
        ]
      },

      // â”€â”€â”€ M8-L3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l3",
        title: "Bloqueio e SinalizaÃ§Ã£o LOTO",
        theory: `<h2>O que Ã© LOTO?</h2>
<p><strong>Lockout/Tagout (LOTO)</strong> â€” Bloqueio e SinalizaÃ§Ã£o â€” Ã© o procedimento de seguranÃ§a que garante que mÃ¡quinas e equipamentos sejam <strong>desenergizados e isolados</strong> antes de manutenÃ§Ã£o ou inspeÃ§Ã£o. Evita que trabalhadores sejam expostos a energias perigosas (elÃ©trica, hidrÃ¡ulica, pneumÃ¡tica, tÃ©rmica, quÃ­mica) que podem ser liberadas inesperadamente. Ã‰ exigido pela NR-10, NR-12 e normas internacionais (OSHA 1910.147).</p>

<h3>Procedimento Passo a Passo (PadrÃ£o OSHA)</h3>
<h4>1. PreparaÃ§Ã£o</h4>
<ul>
  <li>Identificar todas as fontes de energia: elÃ©trica, pneumÃ¡tica, hidrÃ¡ulica, gravitacional, tÃ©rmica, quÃ­mica.</li>
  <li>Notificar todos os trabalhadores afetados sobre o procedimento.</li>
  <li>Reunir os dispositivos LOTO (cadeado, trava, etiqueta).</li>
</ul>

<h4>2. Desligamento</h4>
<ul>
  <li>Desligar a mÃ¡quina pelo interruptor ou disjuntor principal.</li>
  <li>Colocar o <strong>cadeado de bloqueio</strong> no dispositivo de desligamento na posiÃ§Ã£o "desligado".</li>
  <li>Cada trabalhador que realizarÃ¡ a manutenÃ§Ã£o deve colocar <strong>seu prÃ³prio cadeado</strong> (cadeado individual = 1 trabalhador = 1 cadeado).</li>
</ul>

<h4>3. VerificaÃ§Ã£o de AusÃªncia de TensÃ£o</h4>
<ul>
  <li>Tentar religar a mÃ¡quina (tentativa de ligaÃ§Ã£o) â€” deve permanecer desligada.</li>
  <li>Medir tensÃ£o com multÃ­metro em todos os condutores â€” verificar fase-fase e fase-terra.</li>
  <li>Verificar ausÃªncia de energia residual (capacitores, baterias, sistemas hidrÃ¡ulicos com carga).</li>
</ul>

<h4>4. SinalizaÃ§Ã£o</h4>
<ul>
  <li>Instalar <strong>etiqueta LOTO</strong> (tag) em cada ponto de bloqueio. A etiqueta contÃ©m: nome do trabalhador, data, motivo, previsÃ£o de retorno.</li>
  <li>Etiquetas devem ser legÃ­veis, resistentes e nÃ£o devem ser removidas por outra pessoa.</li>
</ul>

<h4>5. Trabalho Seguro</h4>
<ul>
  <li>ApÃ³s confirmar ausÃªncia de energia, iniciar a manutenÃ§Ã£o.</li>
  <li>Trabalhar sempre assumindo que a energia pode ser liberada (nÃ£o confiar apenas no interruptor).</li>
</ul>

<h4>6. Restabelecimento</h4>
<ul>
  <li>Verificar que todos os trabalhadores estÃ£o afastados da mÃ¡quina.</li>
  <li>Remover ferramentas e materiais da Ã¡rea de risco.</li>
  <li>Cada trabalhador remove <strong>apenas o seu cadeado</strong>.</li>
  <li>Energizar o circuito e testar o funcionamento.</li>
</ul>

<h3>Dispositivos LOTO</h3>
<ul>
  <li><strong>Cadeado de bloqueio:</strong> chave exclusiva, cada trabalhador tem sua chave. NÃ£o pode ser aberto por outra pessoa.</li>
  <li><strong>Trava (hasp):</strong> permite que mÃºltiplos cadeados sejam colocados no mesmo ponto (ex: disjuntor com trava para 6 cadeados).</li>
  <li><strong>Etiqueta (tag):</strong> identifica quem bloqueou, porquÃª e quando. Nunca substitui o cadeado â€” Ã© complementar.</li>
  <li><strong>Bloqueio de vÃ¡lvula:</strong> dispositivos especÃ­ficos para bloquear vÃ¡lvulas de esfera, gaveta ou borboleta.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Usar apenas etiqueta sem cadeado</strong> â€” a etiqueta pode ser removida acidentalmente. Cadeado = isolamento fÃ­sico.</li>
  <li><strong>Compartilhar cadeados</strong> â€” cada trabalhador deve ter seu cadeado. Se um remove o cadeado do outro, pode energizar enquanto estÃ¡ trabalhando.</li>
  <li><strong>NÃ£o verificar ausÃªncia de tensÃ£o apÃ³s bloqueio</strong> â€” pode haver alimentaÃ§Ã£o por outro caminho (paralelo, gerador).</li>
  <li><strong>Remover cadeado do colega</strong> â€”crime contra a seguranÃ§a do trabalho. SÃ³ o titular deve remover seu cadeado.</li>
</ul>

<div class="norma-badge">NR-10 SeÃ§Ã£o 10.8 â€” Bloqueio e sinalizaÃ§Ã£o devem seguir procedimento documentado, com cadeado individual e verificaÃ§Ã£o de ausÃªncia de tensÃ£o.</div>
<div class="norma-badge">OSHA 1910.147 â€” PadrÃ£o de controle de energias perigosas (LOTO) â€” referÃªncia internacional.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "No procedimento LOTO, quantos cadeados devem ser colocados se 3 trabalhadores farÃ£o manutenÃ§Ã£o simultÃ¢nea?",
            options: ["1 cadeado compartilhado", "2 cadeados", "3 cadeados (um por trabalhador)", "6 cadeados"],
            correct: 2,
            explanation: "Cada trabalhador deve colocar SEU PRÃ“PRIO cadeado. SÃ£o necessÃ¡rios 3 cadeados, um para cada pessoa. Cada um remove apenas o seu."
          },
          {
            type: "multiple-choice",
            question: "ApÃ³s colocar o cadeado e a etiqueta, o prÃ³ximo passo Ã©:",
            options: ["Iniciar a manutenÃ§Ã£o imediatamente", "Verificar ausÃªncia de tensÃ£o medindo com multÃ­metro", "Desligar o disjuntor", "Notificar o supervise"],
            correct: 1,
            explanation: "ApÃ³s bloqueio, Ã© obrigatÃ³rio verificar ausÃªncia de tensÃ£o com multÃ­metro para confirmar que a energia foi efetivamente removida."
          },
          {
            type: "fill-blank",
            question: "O cadeado de bloqueio deve ser de __ exclusivo â€” cada trabalhador tem sua chave.",
            answer: "chave",
            explanation: "Chave exclusiva garante que apenas o titular pode remover o cadeado, protegendo-o enquanto trabalha."
          },
          {
            type: "drag-drop",
            question: "Ordene os passos do procedimento LOTO na sequÃªncia correta:",
            items: ["Desligamento", "PreparaÃ§Ã£o e identificaÃ§Ã£o de energias", "VerificaÃ§Ã£o de ausÃªncia de tensÃ£o", "SinalizaÃ§Ã£o com etiqueta", "Restabelecimento"],
            correctOrder: [1, 0, 2, 3, 4],
            explanation: "1Âº Preparar e identificar energias â†’ 2Âº Desligar e bloquear â†’ 3Âº Verificar ausÃªncia de tensÃ£o â†’ 4Âº Sinalizar â†’ 5Âº Restabelecer."
          }
        ]
      },

      // â”€â”€â”€ M8-L4 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l4",
        title: "Trabalho Desenerizado",
        theory: `<h2>O que Ã© Trabalho Desenerizado (TD)?</h2>
<p>Trabalho Desenerizado Ã© o <strong>procedimento padrÃ£o</strong> de seguranÃ§a elÃ©trica que consiste em <strong>desligar, bloquear, sinalizar e verificar ausÃªncia de tensÃ£o</strong> antes de iniciar serviÃ§os em instalaÃ§Ãµes elÃ©tricas. Ã‰ a forma mais segura de trabalhar, pois elimina o risco elÃ©trico por completo. Deve ser utilizado <strong>sempre que possÃ­vel</strong>.</p>

<h3>Procedimento Completo</h3>
<h4>1. Planejamento</h4>
<ul>
  <li>AnÃ¡lise de Risco (AR) detalhada do serviÃ§o a ser executado.</li>
  <li>PermissÃ£o de Trabalho (PT) aprovada pelo responsÃ¡vel.</li>
  <li>IdentificaÃ§Ã£o de todos os circuitos envolvidos e seus pontos de desligamento.</li>
  <li>VerificaÃ§Ã£o de que o serviÃ§o nÃ£o pode ser realizado com seguranÃ§a em condiÃ§Ãµes energizadas.</li>
</ul>

<h4>2. Desligamento</h4>
<ul>
  <li>Desligar o disjuntor, contatores e fusÃ­veis do circuito a ser trabalhado.</li>
  <li>Em circuitos com vÃ¡rios pontos de alimentaÃ§Ã£o, desligar <strong>TODOS</strong>.</li>
  <li>Verificar visualmente que o disjuntor estÃ¡ na posiÃ§Ã£o "desligado".</li>
</ul>

<h4>3. Bloqueio e SinalizaÃ§Ã£o (LOTO)</h4>
<ul>
  <li>Colocar cadeado e etiqueta no ponto de desligamento.</li>
  <li>Cada trabalhador coloca seu cadeado individual.</li>
  <li>Notificar todos os envolvidos sobre o bloqueio.</li>
</ul>

<h4>4. VerificaÃ§Ã£o de AusÃªncia de TensÃ£o</h4>
<ul>
  <li>Usar <strong>detector de tensÃ£o sem contato</strong> (wavestick) para verificaÃ§Ã£o preliminar.</li>
  <li>Confirmar com <strong>multÃ­metro TRMS</strong> â€” medir fase-fase e fase-terra em todos os condutores.</li>
  <li>Verificar que o multÃ­metro estÃ¡ funcionando â€” testar em circuito energizado conhecido antes e depois da mediÃ§Ã£o (checagem cruzada).</li>
  <li>Considerar tensÃµes residuais: capacitores, circuitos auxiliares, backfeed por paralelo.</li>
</ul>

<h4>5. Aterramento TemporÃ¡rio</h4>
<ul>
  <li>Em instalaÃ§Ãµes de alta tensÃ£o, <strong>aterrar os condutores</strong> apÃ³s a verificaÃ§Ã£o de ausÃªncia de tensÃ£o.</li>
  <li>O aterramento temporÃ¡rio protege contra reenergizaÃ§Ã£o acidental e descargas capacitivas.</li>
  <li>Deve ser instalado <strong>apÃ³s</strong> a verificaÃ§Ã£o de ausÃªncia de tensÃ£o e <strong>antes</strong> do inÃ­cio do trabalho.</li>
  <li>Remover o aterramento <strong>antes</strong> de reenergizar o circuito.</li>
</ul>

<h4>6. Isolamento e ProteÃ§Ã£o</h4>
<ul>
  <li>Isolar condutores adjacentes energizados com capas isolantes ou barreiras.</li>
  <li>Proteger o trabalhador contra quedas e choques mecÃ¢nicos.</li>
  <li>Verificar distÃ¢ncia de seguranÃ§a de condutores energizados vizinhos.</li>
</ul>

<h4>7. ExecuÃ§Ã£o do ServiÃ§o</h4>
<ul>
  <li>Executar o serviÃ§o conforme o planejado.</li>
  <li>MantÃªr comunicaÃ§Ã£o constante entre os trabalhadores.</li>
  <li>NÃ£o assumir que o circuito continua desenerizado â€” confirmar periodicamente se necessÃ¡rio.</li>
</ul>

<h4>8. Restabelecimento</h4>
<ul>
  <li>Remover ferramentas, materiais e people do circuito.</li>
  <li>Remover aterramento temporÃ¡rio.</li>
  <li>Cada trabalhador remove apenas o seu cadeado.</li>
  <li>Energizar o circuito e testar.</li>
  <li>Comunicar o restabelecimento a todos os envolvidos.</li>
</ul>

<h3>Erros Comuns e Acidentes TÃ­picos</h3>
<ul>
  <li><strong>NÃ£o verificar ausÃªncia de tensÃ£o</strong> â€” assume-se que o circuito estÃ¡ desligado sem medir. Ã‰ a causa #1 de acidentes fatais.</li>
  <li><strong>AlimentaÃ§Ã£o por paralelo</strong> â€” outro circuito pode alimentar o que se trabalha por meio de derivaÃ§Ã£o nÃ£o identificada.</li>
  <li><strong>Retorno de tensÃ£o por motor-generador ou inversor</strong> â€” cargas com capacitores ou geradores podem manter tensÃ£o apÃ³s o desligamento.</li>
  <li><strong>NÃ£o usar aterramento temporÃ¡rio em HT</strong> â€” reenergizaÃ§Ã£o acidental pode causar arco elÃ©trico fatal.</li>
  <li><strong>Trabalhar sem EPI adequado</strong> mesmo com o circuito desenerizado â€” pode haver energizaÃ§Ã£o acidental.</li>
</ul>

<div class="norma-badge">NR-10 SeÃ§Ã£o 10.9 â€” Trabalho Desenerizado: procedimento obrigatÃ³rio com verificaÃ§Ã£o de ausÃªncia de tensÃ£o em todos os condutores.</div>
<div class="norma-badge">NR-10 SeÃ§Ã£o 10.9.1 â€” Detector de tensÃ£o sem contato deve ser utilizado para verificaÃ§Ã£o preliminar.</div>
<div class="norma-badge">NR-10 SeÃ§Ã£o 10.9.2 â€” Aterramento temporÃ¡rio deve ser aplicado em instalaÃ§Ãµes de alta tensÃ£o.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Antes de iniciar trabalho desenerizado em um circuito de alta tensÃ£o, qual Ã© o passo OBRIGATÃ“RIO apÃ³s a verificaÃ§Ã£o de ausÃªncia de tensÃ£o?",
            options: [
              "Iniciar a manutenÃ§Ã£o imediatamente",
              "Instalar aterramento temporÃ¡rio",
              "Remover o cadeado LOTO",
              "Energizar o circuito para testar"
            ],
            correct: 1,
            explanation: "ApÃ³s verificar ausÃªncia de tensÃ£o, o aterramento temporÃ¡rio deve ser instalado em HT para proteger contra reenergizaÃ§Ã£o acidental e descargas capacitivas."
          },
          {
            type: "multiple-choice",
            question: "Qual instrumento deve ser usado para a verificaÃ§Ã£o DEFINITIVA de ausÃªncia de tensÃ£o?",
            options: ["Wavestick apenas", "MultÃ­metro TRMS", "LÃ¢mpada de prova", "Alicate de gancho"],
            correct: 1,
            explanation: "MultÃ­metro TRMS Ã© o instrumento definitivo. O wavestick Ã© apenas preliminar â€” pode dar falso negativo em ambientes com interferÃªncia."
          },
          {
            type: "fill-blank",
            question: "O aterramento temporÃ¡rio deve ser instalado __ do inÃ­cio do trabalho e removido __ da reenergizaÃ§Ã£o.",
            answer: "antes, antes",
            explanation: "Instalar ANTES de trabalhar (protege durante o serviÃ§o) e remover ANTES de reenergizar (senÃ£o pode causar curto-circuito ao energizar com aterramento)."
          },
          {
            type: "drag-drop",
            question: "Ordene os passos do Trabalho Desenerizado na sequÃªncia correta:",
            items: ["Planejamento e AnÃ¡lise de Risco", "Desligamento", "Bloqueio e SinalizaÃ§Ã£o (LOTO)", "VerificaÃ§Ã£o de ausÃªncia de tensÃ£o", "Aterramento temporÃ¡rio", "ExecuÃ§Ã£o do serviÃ§o"],
            correctOrder: [0, 1, 2, 3, 4, 5],
            explanation: "Fluxo correto: Planejar â†’ Desligar â†’ Bloquear/LOTO â†’ Verificar tensÃ£o â†’ Aterrar â†’ Executar."
          },
          {
            type: "multiple-choice",
            question: "Por que Ã© necessÃ¡rio medir fase-fase E fase-terra na verificaÃ§Ã£o de ausÃªncia de tensÃ£o?",
            options: [
              "Para verificar se o multÃ­metro funciona",
              "Porque pode haver tensÃ£o entre fases e entre fase e terra em situaÃ§Ãµes diferentes",
              "Por excesso de precauÃ§Ã£o",
              "Apenas fase-fase Ã© necessÃ¡rio"
            ],
            correct: 1,
            explanation: "TensÃ£o pode persistir entre fases (paralelo com outro circuito) ou entre fase e terra (neutro deslocado, aterramento deficiente). Ambas as mediÃ§Ãµes sÃ£o necessÃ¡rias."
          }
        ]
      },

      // â”€â”€â”€ M8-L5 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l5",
        title: "Aterramento",
        theory: `<h2>O que Ã© Aterramento?</h2>
<p>Aterramento Ã© a <strong>ligaÃ§Ã£o elÃ©trica intencional</strong> entre um ponto do sistema elÃ©trico e uma massa de terra (eletrodo de aterramento). Ã‰ fundamental para proteÃ§Ã£o contra choque elÃ©trico, contra descargas atmosfÃ©ricas e para o funcionamento correto dos dispositivos de proteÃ§Ã£o (disjuntores, DR). A terra Ã© um condutor natural com resistÃªncia variÃ¡vel (conforme umidade, composiÃ§Ã£o do solo, profundidade).</p>

<h3>Neutro de Aterramento (Sistema TN)</h3>
<p>No <strong>sistema TN</strong>, o neutro da fonte (transformador) Ã© <strong>aterrado diretamente</strong> na substaÃ§Ã£o. O condutor PE (Protective Earth) percorre toda a instalaÃ§Ã£o e conecta as partes metÃ¡licas expostas dos equipamentos. Se houver falta de isolamento (fase encosta na carcaÃ§a), a corrente de falta flui pela carcaÃ§a â†’ PE â†’ neutro, formando um <strong>curto-circuito de alta corrente</strong> que aciona imediatamente o disjuntor ou fusÃ­vel, desligando o circuito.</p>
<ul>
  <li><strong>TN-S:</strong> neutro e PE separados desde o transformador. Mais seguro, usado em instalaÃ§Ãµes novas.</li>
  <li><strong>TN-C:</strong> neutro e PE combinados em um Ãºnico condutor (PEN) atÃ© o ponto de utilizaÃ§Ã£o. Mais barato, mas menos seguro (corrente circula pelo PE durante defeitos).</li>
  <li><strong>TN-C-S:</strong> inÃ­cio como TN-C, separa-se em TN-S a partir do Quadro de ForÃ§a. Comum em edifÃ­cios.</li>
</ul>

<h3>Condutor PE (ProteÃ§Ã£o)</h3>
<p>O condutor PE Ã© o <strong>fio verde-amarelo</strong> que conecta todas as partes metÃ¡licas expostas dos equipamentos ao barramento de aterramento. Em caso de falta de isolamento, a corrente de falta circula pelo PE, acionando o disjuntor. O PE <strong>nunca deve ser used para outro fim</strong> â€” nÃ£o deve conduzir corrente de funcionamento (exceto em TN-C).</p>

<h3>Eletrodo de Aterramento</h3>
<p>O eletrodo Ã© o elemento que estabelece a ligaÃ§Ã£o fÃ­sica com a terra:</p>
<ul>
  <li><strong>Haste de aterramento:</strong> barra de cobre ou aÃ§o galvanizado, cravada verticalmente no solo. Comprimento tÃ­pico: 1,5 a 3 metros.</li>
  <li><strong>Malha de aterramento:</strong> grade de conductores enterrados, usada em subestaÃ§Ãµes e grandes instalaÃ§Ãµes.</li>
  <li><strong>Anel de aterramento:</strong> conductor perimetral ao redor da edificaÃ§Ã£o, conectado a vÃ¡rias hastes.</li>
  <li><strong>Placa de aterramento:</strong> placa de cobre enterrada, usada quando o solo Ã© rochoso.</li>
</ul>

<h3>ResistÃªncia de Aterramento</h3>
<p>A resistÃªncia entre o eletrodo e a terra deve ser <strong>â‰¤ 25 Î©</strong> conforme NR-10 para instalaÃ§Ãµes de baixa tensÃ£o. Para HT e subestaÃ§Ãµes, valores mais baixos sÃ£o exigidos (atÃ© 10 Î© ou menos). A resistÃªncia depende de:</p>
<ul>
  <li>ComposiÃ§Ã£o do solo (argila Ã© melhor que areia).</li>
  <li>Umidade do solo.</li>
  <li>Profundidade e comprimento do eletrodo.</li>
  <li>Ãrea de contato eletrodo-solo.</li>
</ul>

<h3>MediÃ§Ã£o da ResistÃªncia de Aterramento</h3>
<p>O instrumento utilizado Ã© o <strong>medidor de resistÃªncia de aterramento</strong> (tester de terra). MÃ©todo mais comum: <strong>fall-of-potencial (queda de potencial)</strong>. Dois pinos auxiliares sÃ£o cravados a distÃ¢ncias especÃ­ficas (20m e 40m do eletrodo), e o instrumento mede a resistÃªncia entre o eletrodo e a terra. Outro mÃ©todo: <strong>clamp-on</strong> (alicate medidor), que mede sem necessidade de pino auxiliar, mas menos preciso.</p>

<h3>EquipotencializaÃ§Ã£o</h3>
<p>A equipotencializaÃ§Ã£o conecta todas as massas metÃ¡licas da instalaÃ§Ã£o (tubulaÃ§Ãµes de Ã¡gua, gÃ¡s, ar-condicionado, estruturas metÃ¡licas) ao barramento de aterramento. Seu objetivo Ã© que, em caso de falta, <strong>todas as massas atinjam o mesmo potencial</strong>, evitando tensÃ£o de passo e contato entre equipamentos ligados a aterramentos diferentes.</p>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>NÃ£o medir a resistÃªncia de aterramento</strong> â€” instalaÃ§Ã£o sem teste pode ter resistÃªncia > 25Î© e nÃ£o proteger.</li>
  <li><strong>Usar eletrodo muito curto</strong> â€” profundidade insuficiente resulta em alta resistÃªncia.</li>
  <li><strong>Conectar PE em neutro apÃ³s o DR</strong> â€” faz o DR nÃ£o funcionar, pois a corrente de retorno circula pelo PE.</li>
  <li><strong>NÃ£o equipotencializar</strong> â€” pode haver diferenÃ§a de potencial perigosa entre equipamentos metÃ¡licos.</li>
  <li><strong>Usar cano de Ã¡gua como aterramento Ãºnico</strong> â€” canos plÃ¡sticos nÃ£o conduzem; canos metÃ¡licos podem ter conexÃµes deficientes.</li>
</ul>

<div class="norma-badge">NR-10 SeÃ§Ã£o 10.5.1 â€” Aterramento de proteÃ§Ã£o: resistÃªncia â‰¤ 25 Î© para instalaÃ§Ãµes de baixa tensÃ£o.</div>
<div class="norma-badge">NBR 5410 â€” InstalaÃ§Ãµes de baixa tensÃ£o: requisitos de aterramento e equipotencializaÃ§Ã£o.</div>
<div class="norma-badge">NBR 14039 â€” InstalaÃ§Ãµes de mÃ©dia tensÃ£o: aterramento e proteÃ§Ã£o contra falta.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "A resistÃªncia mÃ¡xima de aterramento para instalaÃ§Ãµes de baixa tensÃ£o conforme a NR-10 Ã©:",
            options: ["10 Î©", "25 Î©", "50 Î©", "100 Î©"],
            correct: 1,
            explanation: "NR-10 determina resistÃªncia de aterramento â‰¤ 25 Î© para instalaÃ§Ãµes de baixa tensÃ£o."
          },
          {
            type: "multiple-choice",
            question: "No sistema TN-S, o condutor PE Ã© utilizado para:",
            options: [
              "Conduzir corrente de funcionamento normal",
              "Conectar partes metÃ¡licas expostas ao aterramento para proteÃ§Ã£o contra choque",
              "Alimentar cargas monofÃ¡sicas",
              "Substituir o neutro em caso de defeito"
            ],
            correct: 1,
            explanation: "O PE conecta partes metÃ¡licas expostas ao barramento de aterramento. Em caso de falta, conduz a corrente de falta para acionar o disjuntor."
          },
          {
            type: "fill-blank",
            question: "O condutor de proteÃ§Ã£o (PE) possui a cor ___.",
            answer: "verde-amarelo",
            explanation: "A cor verde-amarela Ã© o padrÃ£o internacional e nacional (NBR 5410) para identificaÃ§Ã£o do condutor de proteÃ§Ã£o."
          },
          {
            type: "drag-drop",
            question: "Classifique os tipos de aterramento conforme a aplicaÃ§Ã£o (maior proteÃ§Ã£o â†’ menor):",
            items: ["Malha de aterramento", "Haste Ãºnica", "Aneis perimetrais"],
            correctOrder: [0, 2, 1],
            explanation: "Malha (subestaÃ§Ãµes) > Anel perimetral (edifÃ­cios) > Haste Ãºnica (casas, pequenas instalaÃ§Ãµes)."
          },
          {
            type: "calculation",
            question: "Uma haste de aterramento tem resistÃªncia de 20 Î©. Outra haste idÃªntica Ã© instalada em paralelo a 5 metros de distÃ¢ncia. A resistÃªncia resultante aproximada serÃ¡:",
            answer: "10",
            unit: "Î©",
            explanation: "Hastes em paralelo reduzem a resistÃªncia. Duas hastes idÃªnticas em paralelo: R_eq â‰ˆ R/2 = 20/2 = 10 Î© (considerando baixa interaÃ§Ã£o entre eletrodos)."
          }
        ]
      },

      // â”€â”€â”€ M8-L6 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l6",
        title: "ProteÃ§Ã£o contra Surtos",
        theory: `<h2>O que sÃ£o Surtos de TensÃ£o?</h2>
<p>Um <strong>surtos de tensÃ£o (transient voltage surge)</strong> Ã© um pico de tensÃ£o de <strong>curta duraÃ§Ã£o</strong> (microssegundos a milissegundos) e <strong>alta amplitude</strong> que pode ser causado por descargas atmosfÃ©ricas, manobras de religamento, abertura de chaves, falhas no sistema ou interruptores de cargas indutivas. Esses picos podem danificar equipamentos eletrÃ´nicos, causar incÃªndio e degradar o isolamento de cabos e motores.</p>

<h3>Fontes de Surtos</h3>
<ul>
  <li><strong>Descargas atmosfÃ©ricas:</strong> a mais energÃ©tica, pode gerar picos de milhares de volts.</li>
  <li><strong>Manobras de religamento:</strong> energizar um transformador gera corrente de excitaÃ§Ã£o transitÃ³ria que sobretensÃ£o na rede.</li>
  <li><strong>InterrupÃ§Ã£o de carga indutiva:</strong> abertura de contatores, disjuntores ou fusÃ­veis sob carga gera arco e pico de tensÃ£o (L Ã— di/dt).</li>
  <li><strong>RestauraÃ§Ã£o de falta:</strong> retorno de tensÃ£o apÃ³s queda pode causar sobretensÃ£o transitÃ³ria.</li>
</ul>

<h2>DPS â€” Dispositivo de ProteÃ§Ã£o contra Surtos</h2>
<p>O DPS Ã© o dispositivo projetado para <strong>limitar surtos de tensÃ£o</strong> e desviar a corrente de surto para o terra, protegendo equipamentos a jusante. Funciona como uma "vÃ¡lvula" que se abre instantaneamente quando a tensÃ£o excede um limiar e fecha novamente apÃ³s o surto.</p>

<h3>PrincÃ­pio de Funcionamento</h3>
<p>O DPS contÃ©m um elemento nÃ£o linear (varistor de Ã³xido de metal â€” MOV, ou descarga de gÃ¡s) que apresenta <strong>alta resistÃªncia</strong> em tensÃ£o normal e <strong>baixÃ­ssima resistÃªncia</strong> quando a tensÃ£o excede o limiar. Ao "abrir", conduz a corrente de surto para o terra, limitando a tensÃ£o a um valor seguro para os equipamentos.</p>

<h3>Classes de DPS</h3>
<ul>
  <li><strong>Classe I (Type 1):</strong> instalado no ponto de entrada da alimentaÃ§Ã£o (QDC principal). Suporta surtos diretos de descarga atmosfÃ©rica (atÃ© 25 kA). Utiliza descarga de gÃ¡s (GDT). Primeira linha de defesa.</li>
  <li><strong>Classe II (Type 2):</strong> instalado no QDA (quadro de distribuiÃ§Ã£o). Protege contra surtos induzidos e reflexos da Classe I (atÃ© 40 kA). Utiliza MOV (varistor). ProteÃ§Ã£o de equipamentos sensÃ­veis.</li>
  <li><strong>Classe III (Type 3):</strong> instalado junto ao equipamento (tomada, rack). ProteÃ§Ã£o deç²¾ç»† (atÃ© 10 kA). Combina MOV + filtro. Ãšltima barreira antes do equipamento.</li>
</ul>

<h3>Zona de ProteÃ§Ã£o do DPS</h3>
<p>Cada classe de DPS protege uma <strong>zona</strong> do sistema. A distÃ¢ncia entre o DPS e o equipamento protegido Ã© crÃ­tica â€” quanto mais longe, menor a eficÃ¡cia (a impedÃ¢ncia do cabo reduz a proteÃ§Ã£o). Regra: DPS Classe III deve estar a <strong>no mÃ¡ximo 10 metros</strong> do equipamento sensÃ­vel (regra dos 10 metros).</p>

<h3>Nivelamento de TensÃ£o</h3>
<p>Quando hÃ¡ mais de uma classe de DPS, deve-se <strong>coordenar</strong> seus limiares de atuaÃ§Ã£o para que a Classe I atue primeiro (surto maior), depois a Classe II e por Ãºltimo a Classe III. A distÃ¢ncia entre os DPSs (cabo com impedÃ¢ncia) cria um <strong>nivelamento de tensÃ£o</strong> que permite essa coordenaÃ§Ã£o sem que o DPS a jusante atue desnecessariamente.</p>
<div class="formula-box">
<p><strong>Regra dos 10 metros:</strong> a distÃ¢ncia mÃ­nima entre DPS Classe I/II e o equipamento protegido deve ser â‰¤ 10 metros para garantir eficÃ¡cia. Se for maior, instalar DPS adicional (Classe III) junto ao equipamento.</p>
</div>

<h3>Escolha do DPS</h3>
<ul>
  <li><strong>TensÃ£o nominal do sistema:</strong> o DPS deve ser classificado para a tensÃ£o de trabalho (ex: 275V AC para rede 220V).</li>
  <li><strong>Corrente de surto nominal (In):</strong> capacidade de descarga do DPS (ex: 20 kA, 40 kA).</li>
  <li><strong>TensÃ£o de proteÃ§Ã£o (Up):</strong> tensÃ£o mÃ¡xima que o DPS permite passar aos equipamentos. Deve ser menor que a tensÃ£o suportÃ¡vel do equipamento.</li>
  <li><strong>Corrente de descarga mÃ¡xima (Imax):</strong> corrente mÃ¡xima que o DPS suporta sem danificar-se.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Instalar DPS sem aterramento adequado</strong> â€” o DPS desvia a corrente para o terra; se o terra for deficiente, a proteÃ§Ã£o nÃ£o funciona.</li>
  <li><strong>Instalar apenas DPS Classe III</strong> â€” sem Classe I na entrada, o surto pode danificar cabos e quadros antes de chegar ao equipamento.</li>
  <li><strong>DPS danificado nÃ£o substituÃ­do</strong> â€” apÃ³s atuar, o DPS pode ficar em curto (MOV degradado) ou aberto (perdeu a funÃ§Ã£o). Testar e substituir periodicamente.</li>
  <li><strong>Exceder a distÃ¢ncia de 10m</strong> entre DPS e equipamento â€” a impedÃ¢ncia do cabo reduz a eficÃ¡cia da proteÃ§Ã£o.</li>
</ul>

<div class="norma-badge">NBR 5410 â€” InstalaÃ§Ãµes de baixa tensÃ£o: proteÃ§Ã£o contra surtos deve ser prevista conforme grau de exposiÃ§Ã£o.</div>
<div class="norma-badge">IEC 62305 â€” ProteÃ§Ã£o contra descargas atmosfÃ©ricas: sistema de proteÃ§Ã£o contra surtos (SPD) deve ser dimensionado conforme classe de proteÃ§Ã£o.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "Qual classe de DPS Ã© instalada no ponto de entrada da alimentaÃ§Ã£o (QDC) e protege contra descargas atmosfÃ©ricas diretas?",
            options: ["Classe III", "Classe II", "Classe I", "NÃ£o Ã© necessÃ¡rio DPS na entrada"],
            correct: 2,
            explanation: "Classe I (Type 1) Ã© instalada no QDC principal e suporta atÃ© 25 kA de corrente de surto de descarga atmosfÃ©rica direta."
          },
          {
            type: "fill-blank",
            question: "A distÃ¢ncia mÃ¡xima recomendada entre o DPS Classe III e o equipamento protegido Ã© de ___ metros.",
            answer: "10",
            explanation: "Regra dos 10 metros: a impedÃ¢ncia do cabo entre DPS e equipamento deve ser baixa o suficiente para manter a proteÃ§Ã£o eficaz."
          },
          {
            type: "multiple-choice",
            question: "Qual Ã© a principal funÃ§Ã£o do nivelamento de tensÃ£o entre DPSs?",
            options: [
              "Aumentar a corrente de surto",
              "Coordenar as classes para que cada uma atue na ordem correta",
              "Reduzir o custo da instalaÃ§Ã£o",
              "Eliminar a necessidade de aterramento"
            ],
            correct: 1,
            explanation: "O nivelamento de tensÃ£o coordena os limiares das classes para que a Classe I atue primeiro, depois II e por Ãºltimo III, sem atuaÃ§Ã£o desnecessÃ¡ria."
          },
          {
            type: "drag-drop",
            question: "Classifique as classes de DPS conforme a localizaÃ§Ã£o de instalaÃ§Ã£o (entrada â†’ equipamento):",
            items: ["QDC (Quadro de DistribuiÃ§Ã£o Geral)", "QDA (Quadro de DistribuiÃ§Ã£o Auxiliar)", "Junto ao equipamento"],
            correctOrder: [0, 1, 2],
            explanation: "Classe I (QDC) â†’ Classe II (QDA) â†’ Classe III (junto ao equipamento)."
          }
        ]
      },

      // â”€â”€â”€ M8-L7 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      {
        id: "m8-l7",
        title: "ProteÃ§Ã£o contra Descargas AtmosfÃ©ricas",
        theory: `<h2>O que sÃ£o Descargas AtmosfÃ©ricas?</h2>
<p>Descargas atmosfÃ©ricas (raios) sÃ£o descargas eletrostÃ¡ticas naturais entre nuvens carregadas e o solo, ou entre nuvens. Podem atingir <strong>correntes de pico de 30 a 200 kA</strong>, temperaturas de 30.000Â°C e tensÃµes de milhÃµes de volts. SÃ£o uma das principais causas de danos a edificaÃ§Ãµes, instalaÃ§Ãµes elÃ©tricas e equipamentos eletrÃ´nicos, alÃ©m de riscos de incÃªndio e choque em pessoas.</p>

<h2>Sistema de ProteÃ§Ã£o contra Descargas AtmosfÃ©ricas (PDA)</h2>
<p>O PDA Ã© um sistema projetado para <strong>interceptar raios e conduzir a corrente ao solo</strong> com seguranÃ§a, evitando danos Ã  edificaÃ§Ã£o e Ã s pessoas. Ã‰ regido pela norma <strong>NBR 5419</strong> no Brasil e pela <strong>IEC 62305</strong> internacionalmente.</p>

<h3>Componentes do PDA</h3>
<h4>1. Captor (Sistema de Captura)</h4>
<p>Os captors sÃ£o dispositivos metÃ¡licos que interceptam a descarga atmosfÃ©rica antes que atinja a edificaÃ§Ã£o. Tipos:</p>
<ul>
  <li><strong>PÃ¡ra-raios convencional (captor deFranklin):</strong> haste pontiaguda de cobre ou aÃ§o inoxidÃ¡vel, instalada no ponto mais alto do telhado. A ponta gera campo elÃ©trico intenso que "attraÃ­" o canal de lideranÃ§a do raio. Comprimento: 1 a 2 metros.</li>
  <li><strong>Captor em rede (malha de captura):</strong> grade de conductores metÃ¡licos (cobre ou alumÃ­nio) sobre o telhado, usada em grandes Ã¡reas. Oferece proteÃ§Ã£o mais uniforme.</li>
  <li><strong>Captor elÃ©trico (tipo Early Streamer Emission â€” ESE):</strong> gera um pulsso de ionizaÃ§Ã£o antecipado que estende o raio de proteÃ§Ã£o. Controverso â€” normas como NBR 5419 nÃ£o reconhecem ESE como mÃ©todo validado.</li>
</ul>
<p>O <strong>raio de proteÃ§Ã£o</strong> do captor Ã© calculado pelo <strong>mÃ©todo da esfera rolante (rolling sphere)</strong>: uma esfera fictÃ­cia de raio R (dependendo da classe de proteÃ§Ã£o) Ã© "rolada" sobre a edificaÃ§Ã£o; as Ã¡reas tocadas pela esfera sÃ£o protegidas. Valores de R conforme classe:</p>
<div class="formula-box">
<p><strong>Raio de proteÃ§Ã£o (mÃ©todo da esfera rolante):</strong></p>
<p>Classe I: R = 20 m â†’ ProteÃ§Ã£o mÃ¡xima</p>
<p>Classe II: R = 30 m â†’ ProteÃ§Ã£o ordinÃ¡ria</p>
<p>Classe III: R = 45 m â†’ ProteÃ§Ã£o bÃ¡sica</p>
<p>Classe IV: R = 60 m â†’ ProteÃ§Ã£o limitada</p>
</div>

<h4>2. Descida (Down Conductor)</h4>
<p>A descida Ã© o conductor que conecta o captor ao sistema de aterramento. Deve ser o <strong>camino de menor impedÃ¢ncia</strong> entre o captor e a terra.</p>
<ul>
  <li><strong>Material:</strong> cobre (50 mmÂ² mÃ­nimo), alumÃ­nio (50 mmÂ²) ou aÃ§o galvanizado (50 mmÂ²).</li>
  <li><strong>Rota:</strong> preferencialmente pela parte externa do edifÃ­cio, o mais reto possÃ­vel. Evitar curvas acentuadas e caminhos paralelos a cabos de sinal.</li>
  <li><strong>Quantidade:</strong> depende do tamanho do edifÃ­cio. EdificaÃ§Ãµes grandes podem ter mÃºltiplas descidas para distribuir a corrente.</li>
  <li><strong>JunÃ§Ãµes:</strong> todas as conexÃµes devem ser soldadas, comprimidas ou conectores homologados. Nunca apenas dobrar e amarrar.</li>
</ul>

<h4>3. Aterramento do PDA</h4>
<p>O aterramento do PDA Ã© o sistema de eletrodos que conduz a corrente de descarga ao solo.</p>
<ul>
  <li><strong>ResistÃªncia:</strong> deve ser â‰¤ 10 Î© (conforme NBR 5419) para garantir que a corrente se dissipe sem criar gradientes de tensÃ£o perigosos.</li>
  <li><strong>Preferencialmente integrado</strong> ao aterramento de proteÃ§Ã£o da instalaÃ§Ã£o (equipotencializado), evitando diferenÃ§a de potencial entre os dois sistemas.</li>
  <li><strong>Eletrodos:</strong> hastes de aterramento perimetrais ou anel ao redor da edificaÃ§Ã£o, conectados Ã s descidas.</li>
</ul>

<h3>ProteÃ§Ã£o de Equipamentos Internos</h3>
<ul>
  <li><strong>EquipotencializaÃ§Ã£o:</strong> todas as massas metÃ¡licas (tubulaÃ§Ãµes, armÃ¡rios, estruturas) devem ser conectadas ao barramento de aterramento principal.</li>
  <li><strong>SPD (DPS):</strong> dispositivos de proteÃ§Ã£o contra surtos em todos os pontos de entrada (alimentaÃ§Ã£o, dados, telecomunicaÃ§Ãµes).</li>
  <li><strong>Isolamento de cabos:</strong> cabos de sinal e dados devem ser blindados e roteados longe de descidas do PDA.</li>
</ul>

<h3>Zonas de ProteÃ§Ã£o</h3>
<p>A NBR 5419 define zonas de proteÃ§Ã£o (LPZ â€” Lightning Protection Zone):</p>
<ul>
  <li><strong>LPZ 0A:</strong> Ã¡rea externa, sujeita a descarga direta e campo eletromagnÃ©tico total.</li>
  <li><strong>LPZ 0B:</strong> protegida contra descarga direta (pelo PDA), mas sujeita ao campo eletromagnÃ©tico.</li>
  <li><strong>LPZ 1:</strong> interior da edificaÃ§Ã£o, protegida contra descarga direta e campo eletromagnÃ©tico reduzido (paredes, blindagem).</li>
  <li><strong>LPZ 2, 3, ...:</strong> interiores de armÃ¡rios, salas com equipamentos sensÃ­veis, com proteÃ§Ã£o adicional.</li>
</ul>

<h3>Erros Comuns</h3>
<ul>
  <li><strong>Instalar captor sem aterramento adequado</strong> â€” o captor conduz a corrente ao topo, mas sem terra eficiente, a corrente se espalha pela edificaÃ§Ã£o causando danos.</li>
  <li><strong>Descidas com caminhos tortuosos</strong> â€” curvas acentuadas aumentam a impedÃ¢ncia e provocam salto de arco (flashover).</li>
  <li><strong>NÃ£o equipotencializar</strong> â€” a diferenÃ§a de potencial entre o aterramento do PDA e o aterramento da instalaÃ§Ã£o pode causar arcos internos.</li>
  <li><strong>Usar ESE sem respaldo normativo</strong> â€” a NBR 5419 nÃ£o reconhece captors ESE como mÃ©todo vÃ¡lido. Usar apenas mÃ©todos convencionais ou em rede.</li>
  <li><strong>Esquecer proteÃ§Ã£o de linhas de dados</strong> â€” um raio pode acoplar-se indutivamente a cabos de dados e danificar equipamentos internos mesmo sem atingir diretamente a edificaÃ§Ã£o.</li>
</ul>

<div class="norma-badge">NBR 5419 â€” ProteÃ§Ã£o contra descargas atmosfÃ©ricas: sistema de proteÃ§Ã£o (captor, descida, aterramento) deve ser projetado conforme classe de proteÃ§Ã£o.</div>
<div class="norma-badge">IEC 62305 â€” Norma internacional para proteÃ§Ã£o contra descargas atmosfÃ©ricas â€” danos a pessoas, edificaÃ§Ãµes e equipamentos.</div>
<div class="norma-badge">NBR 5419 Anexo H â€” MÃ©todo da esfera rolante para cÃ¡lculo do raio de proteÃ§Ã£o dos captors.</div>`,

        exercises: [
          {
            type: "multiple-choice",
            question: "A resistÃªncia mÃ¡xima do aterramento de um PDA conforme a NBR 5419 Ã©:",
            options: ["25 Î©", "10 Î©", "5 Î©", "50 Î©"],
            correct: 1,
            explanation: "NBR 5419 determina resistÃªncia â‰¤ 10 Î© para o aterramento do PDA, para garantir dissipaÃ§Ã£o segura da corrente de descarga."
          },
          {
            type: "multiple-choice",
            question: "O mÃ©todo da esfera rolante com raio de 20 metros corresponde Ã  classe de proteÃ§Ã£o:",
            options: ["Classe IV", "Classe III", "Classe II", "Classe I"],
            correct: 3,
            explanation: "Raio de 20m = Classe I (proteÃ§Ã£o mÃ¡xima). Quanto menor o raio, maior a proteÃ§Ã£o: I=20m, II=30m, III=45m, IV=60m."
          },
          {
            type: "fill-blank",
            question: "O componente do PDA que conduz a corrente do captor ao sistema de aterramento Ã© chamado de ___.",
            answer: "descida",
            explanation: "Descida (down conductor): conductor que liga o captor ao aterramento, conduzindo a corrente de descarga ao solo."
          },
          {
            type: "drag-drop",
            question: "Classifique as zonas de proteÃ§Ã£o (LPZ) da externa para a interna (menos protegida â†’ mais protegida):",
            items: ["LPZ 0A", "LPZ 0B", "LPZ 1", "LPZ 2"],
            correctOrder: [0, 1, 2, 3],
            explanation: "LPZ 0A (externa, sem proteÃ§Ã£o) â†’ LPZ 0B (protegida contra descarga direta, mas campo total) â†’ LPZ 1 (interna, campo reduzido) â†’ LPZ 2 (interna adicional)."
          },
          {
            type: "multiple-choice",
            question: "Qual NÃƒO Ã© uma causa comum de surtos de tensÃ£o em instalaÃ§Ãµes elÃ©tricas?",
            options: [
              "Descarga atmosfÃ©rica",
              "Manobras de religamento",
              "Sobrecarga tÃ©rmica de motor",
              "Abertura de contatores sob carga"
            ],
            correct: 2,
            explanation: "Sobrecarga tÃ©rmica Ã© uma condiÃ§Ã£o de sobrecorrente, nÃ£o de surto. Surtos sÃ£o transientes de microssegundos causados por descargas, manobras e aberturas de carga indutiva."
          }
        ]
      }
    ]
  }
  ]
};
