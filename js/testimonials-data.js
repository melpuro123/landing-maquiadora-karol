/* ==========================================================================
   TESTIMONIALS-DATA.JS
   Depoimentos em formato de conversa WhatsApp.
   Para adicionar um novo: inclua um objeto neste array — sem alterar HTML/CSS.
   ========================================================================== */

const TESTIMONIALS_DATA = [
  {
    id: 'mariana',
    nome: 'Mariana',
    foto: 'assets/depoimentos/cliente-1.jpg',
    horario: '14:32',
    dataLabel: 'Ontem',
    mensagens: [
      { tipo: 'cliente', texto: 'Karol!! Cheguei em casa agora 😍', hora: '14:26' },
      { tipo: 'cliente', texto: 'Muito obrigada ❤️ A maquiagem ficou impecável!', hora: '14:28' },
      { tipo: 'maquiadora', texto: 'Fico muito feliz! Você estava linda ✨', hora: '14:30', lida: true },
      { tipo: 'cliente', texto: 'Ficou exatamente como eu imaginava. Durou a festa inteira!', hora: '14:31' },
      { tipo: 'maquiadora', texto: 'Esse era o objetivo 😊 Qualquer coisa, estou por aqui!', hora: '14:32', lida: true },
    ],
  },
  {
    id: 'ana-paula',
    nome: 'Ana Paula',
    foto: 'assets/depoimentos/cliente-3.jpg',
    horario: '20:47',
    dataLabel: 'Sábado',
    mensagens: [
      { tipo: 'cliente', texto: 'Karol, acabei de chegar em casa da formatura', hora: '20:42' },
      { tipo: 'cliente', texto: 'A maquiagem AINDA está perfeita depois de 8 horas!! 🎓✨', hora: '20:43' },
      { tipo: 'maquiadora', texto: 'Isso aí! Produtos de alta fixação fazem diferença 💪', hora: '20:45', lida: true },
      { tipo: 'cliente', texto: 'Todas as amigas perguntaram quem me maquiou', hora: '20:46' },
      { tipo: 'cliente', texto: 'Já te indiquei pra umas 3 delas kkk', hora: '20:46' },
      { tipo: 'maquiadora', texto: 'Muito obrigada pela confiança, Ana! 🥰', hora: '20:47', lida: true },
    ],
  },
  {
    id: 'patricia',
    nome: 'Patricia',
    foto: 'assets/depoimentos/cliente-2.jpg',
    horario: '13:50',
    dataLabel: 'Hoje',
    mensagens: [
      { tipo: 'cliente', texto: 'Oii Karol! Vi suas fotos no Instagram 👀', hora: '13:44' },
      { tipo: 'cliente', texto: 'Quero agendar uma maquiagem!', hora: '13:45' },
      { tipo: 'maquiadora', texto: 'Oi Patricia! Que honra 🥰 Qual a ocasião?', hora: '13:47', lida: true },
      { tipo: 'cliente', texto: 'Madrinha de casamento 💒 Quero algo elegante mas sem exagero', hora: '13:48' },
      { tipo: 'maquiadora', texto: 'Perfeito! Me manda foto do vestido que a gente monta a paleta juntas 😊', hora: '13:50', lida: true },
    ],
  },
];
