const translation = {
  en: {
    mainSentence: "Hi, I'm looking forward to be a web developer",
    edu: "education",
    devOut: "low code developer_ outsystems",
    onG: "< on going >",
    alG: "algorithms fundamentals and object-oriented programming",
    devMeth: "software development",
    sysAnal: "information systems, modeling and analysis",
    dataMan: "database design | advanced transact SQL",
    ccod: "creative coding",
    ccodP:
      "processing | editing images through generative and parametric design",
    //
    //
    uiUx: "user experience & user interface design",
    desThink:
      "user experience | design thinking | user interface | visual design | design systems | figma",
    trainG: "training",
    titleAI: "AI foundations for everyone",
    txtAI: "introduction to Artificial Intelligence (AI)",
    titleWeb: "build responsive real-world websites - HTML and CSS",
    workX: "work experience",
    admCust: "administrative | customer support",
    accS: "accountant support in PortSpar Retail, lda",
    cusSup: "customer support - portuguese/ english market, AirBnb, Sitel",
    archJew: "architecture | jewelry Design",
    jewFree: "jewelry designer and maker, freelance 'Diana Dóris'",
    pres: "present - 2012",
    jewAC: "jewelry maker in António Castro, Gondomar",
    archJFG: "arquitect in José Fernando Gonçalves atelier, Porto",
    jewDes: "jewelry design<",
    archTitle: "architecture",
    meTitle: "about me",
    meTxt01: "I'm a former architect on my way to digital reskilling.",
    meTxt02:
      "I consider myself a creative person with a strong sense of responsability.",
    meTxt03:
      "I love critical thinking and enjoy exchanging ideias with others.",
    meTxt04: "Curiosity, resilience and adaptability have brought me here",
    compDig: "digital skills",
    othSk: "other skills",
    lanE: "english",
    othDigSk: "other digital skills ",
    madeBy: "using html5, css3,responsive: media querie to pdf, javascript",
  },
  pt: {
    mainSentence: "Olá, procuro uma oportunidade como desenvolvedora web!",
    edu: "educação",
    devOut: "desenvolvedor de low code_ outsystems",
    onG: "< a decorrer >",
    alG: "fundamentos de algoritmia e programação orientada a objetos",
    devMeth: "desenvolvimento de software",
    sysAnal: "modelação e análise de sistemas de informação",
    dataMan: "desenho de base de dados | advanced transact SQL",
    ccod: "código criativo",
    ccodP:
      "processing | edição de imagens através do design paramétrico e generativo",
    //
    //
    uiUx: "experiência do utilizador & interface do utilizador",
    desThink:
      "experiência do utilizador | design thinking | interface do utilizador | design visual | design systems | figma",
    trainG: "treinamento",
    titleAI: "AI foundations for everyone",
    txtAI: "introdução à Inteligência Artificial (IA)",
    titleWeb:
      "construção de websites realistas e responsivos - em  HTML e CSS ",
    workX: "experiência de trabalho",
    admCust: "administrativo | apoio ao cliente ",
    accS: "apoio à contabilidade, PortSpar Retail, lda",
    cusSup: "suporte ao cliente, mercado inglês e português, AirBnb, Sitel",
    archJew: "arquitetura | design de joias",
    jewFree: "design e fabrico de joalharia de autor, 'diana dóris', freelance",
    pres: "presente - 2012",
    jewAC: "aprendiz de joalharia, António Castro, Gondomar",
    archJFG: "arquiteta, José Fernando Gonçalves atelier, Porto",
    jewDes: "design de joalharia",
    archTitle: "arquitetura",
    meTitle: "sobre mim",
    meTxt01: "Sou arquiteta de formação, a caminho da requalificação digital.",
    meTxt02: "Sou criativa, com um bom sentido de responsabilidade.",
    meTxt03: "Gosto do pensamento crítico e de trocar ideias com os outros.",
    meTxt04:
      "A curiosidade, a resiliência e a capacidade de adaptação trouxeram-me até aqui.",
    compDig: "competências digitais",
    othSk: "outras competências",
    lanE: "inglês",
    othDigSk: "outras competências digitais",
    madeBy:
      "feito com: html5, css3, (responsivo: media querie to pdf), javascript",
  },
};

let currentLang = "en";

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerText = translation[currentLang][el.dataset.i18n];
  });
}

document.querySelectorAll(".btnLang, .btnLangSmall").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "pt" : "en";
    applyLang();
  });
});

// document.querySelector(".btnLang").addEventListener("click", () => {
//   currentLang = currentLang === "en" ? "pt" : "en";

//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     el.innerText = translation[currentLang][el.dataset.i18n];
//   });
// });

// document.querySelector(".btnLangSmall").addEventListener("click", () => {
//   currentLang = currentLang === "en" ? "pt" : "en";

//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     el.innerText = translation[currentLang][el.dataset.i18n];
//   });
// });
