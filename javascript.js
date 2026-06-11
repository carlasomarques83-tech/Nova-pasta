const produtos = [
{
 id:1,
 titulo:"frida khalo",
 categoria:"Bordado",
 preco:25,
 disponivel:true
}
];

Disponível
Reservado
Vendido

const frases = [
"Respira.",
"Cria sem medo.",
"Cada ponto conta.",
"A arte também cura."
];


// ==========================
// VALIDAÇÃO DO FORMULÁRIO
// ==========================

const formulario = document.getElementById("contactForm");
if (formulario) { formulario.addEventListener("submit", 
function (e) { e.preventDefault();

        // Campos
 const nome = document.getElementById("nome");
 const email = document.getElementById("email");
 const mensagem = document.getElementById("mensagem");
 const feedback = document.getElementById("feedback");

        // Remover espaços vazios
 const nomeValor = nome.value.trim();
 const emailValor = email.value.trim();
 const mensagemValor = mensagem.value.trim();

        // Limpar mensagem anterior
feedback.textContent = "";

        // ==========================
        // VALIDAÇÃO NOME
        // ==========================
 if (nomeValor === "") {
    feeback.textContent =
              "⚠️ Por favor introduza o seu nome.";
           feedback.style.color = "#c0392b";
            nome.focus();
            return;
        }

        // ==========================
        // VALIDAÇÃO EMAIL
        // ==========================
        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValor === "") {
            feedback.textContent =
                "⚠️ Por favor introduza o seu email.";
            feedback.style.color = "#c0392b";
            email.focus();
            return;
        }

        if (!regexEmail.test(emailValor)) {
            feedback.textContent =
                "⚠️ Introduza um email válido.";
            feedback.style.color = "#c0392b";
            email.focus();
            return;
        }

        // ==========================
        // VALIDAÇÃO MENSAGEM
        // ==========================
        if (mensagemValor === "") {
            feedback.textContent =
                "⚠️ Escreva uma mensagem.";
            feedback.style.color = "#c0392b";
            mensagem.focus();
            return;
        }

        // ==========================
        // SUCESSO
        // ==========================
        feedback.textContent =
            "✓ Mensagem enviada com sucesso! Obrigada pelo contacto.";
        feedback.style.color = "#2e7d32";
        formulario.reset();
    });

}

// ==========================
// VALIDAÇÃO DO FORMULÁRIO
// ==========================
const formulario = document.getElementById("contactForm");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        // Campos
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");
        const feedback = document.getElementById("feedback");
        // Remover espaços vazios
        const nomeValor = nome.value.trim();
        const emailValor = email.value.trim();
        const mensagemValor = mensagem.value.trim();
        // Limpar mensagem anterior
        feedback.textContent = "";

        // ==========================
        // VALIDAÇÃO NOME
        // ==========================

        if (nomeValor === "") {
            feedback.textContent =
                "⚠️ Por favor introduza o seu nome.";
            feedback.style.color = "#c0392b";
            nome.focus();
            return;
        }

        // ==========================
        // VALIDAÇÃO EMAIL
        // ==========================

        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === "") {

            feedback.textContent =
                "⚠️ Por favor introduza o seu email.";

            feedback.style.color = "#c0392b";

            email.focus();

            return;
        }

        if (!regexEmail.test(emailValor)) {

            feedback.textContent =
                "⚠️ Introduza um email válido.";

            feedback.style.color = "#c0392b";

            email.focus();

            return;
        }

        // ==========================
        // VALIDAÇÃO MENSAGEM
        // ==========================

        if (mensagemValor === "") {

            feedback.textContent =
                "⚠️ Escreva uma mensagem.";

            feedback.style.color = "#c0392b";

            mensagem.focus();

            return;
        }

        // ==========================
        // SUCESSO
        // ==========================

        feedback.textContent =
            "✓ Mensagem enviada com sucesso! Obrigada pelo contacto.";

        feedback.style.color = "#2e7d32";

        formulario.reset();

    });

// =====================================
// ATIVIDADES DE ARTE-TERAPIA
// =====================================

const atividades = [

  "Escolha três cores que representem o seu estado de espírito e faça um desenho livre.",

  "Crie um pequeno bordado inspirado numa memória feliz.",

  "Durante 15 minutos, faça crochê concentrando-se apenas na respiração.",

  "Cole imagens de revistas e construa um painel dos seus sonhos.",

  "Desenhe uma flor imaginária que represente a sua força interior.",

  "Crie uma mandala utilizando lápis de cor ou marcadores.",

  "Escreva uma palavra importante para si e decore-a com padrões e cores.",

  "Faça uma caminhada na natureza e desenhe algo que tenha chamado a sua atenção.",

  "Crie uma peça artística utilizando materiais reciclados.",

  "Escolha uma emoção e represente-a através de formas e cores.",

  "Borde uma palavra que lhe transmita tranquilidade.",

  "Faça um autorretrato sem se preocupar com a perfeição.",

  "Crie uma composição com tecidos e texturas diferentes.",

  "Desenhe algo pelo qual se sente grata hoje.",

  "Experimente criar sem objetivo final, apenas pelo prazer do processo."

];

const botaoAtividade =
  document.getElementById("atividadeBtn");

const textoAtividade =
  document.getElementById("atividade");

if (botaoAtividade && textoAtividade) {

  botaoAtividade.addEventListener("click", () => {

    const indice =
      Math.floor(
        Math.random() * atividades.length
      );

    textoAtividade.textContent =
      atividades[indice];

  });

}
let totalAtividades = 0;

botaoAtividade.addEventListener("click", () => {

    const indice =
      Math.floor(Math.random() * atividades.length);

      textoAtividade.textContent =
      atividades[indice];

      totalAtividades++;

      document.getElementById("contador").textContent =
      totalAtividades;
});


// ==========================
// FORMULÁRIO DE CONTACTO
// ==========================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome =
      document.getElementById("nome").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const mensagem =
      document.getElementById("mensagem").value.trim();

    const feedback =
      document.getElementById("feedback");

    if (
      nome === "" ||
      email === "" ||
      mensagem === ""
    ) {

      feedback.textContent =
        "⚠️ Por favor preencha todos os campos obrigatórios.";

      feedback.style.color = "#c0392b";

      return;
    }

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

      feedback.textContent =
        "⚠️ Introduza um endereço de email válido.";

      feedback.style.color = "#c0392b";

      return;
    }

    feedback.textContent =
      "✓ Mensagem enviada com sucesso! Obrigada pelo contacto.";

    feedback.style.color = "#2e7d32";

    form.reset();

  });

}

// ==========================
// MENSAGEM DE BOAS-VINDAS
// ==========================

window.addEventListener("load", () => {

  console.log(
    "Bem-vindo ao portefólio de Carla Sofia Marques."
  );

});

// ==========================
// ANO AUTOMÁTICO NO FOOTER
// ==========================

const anoAtual = new Date().getFullYear();

const footerAno = document.getElementById("ano");

if (footerAno) {
  footerAno.textContent = anoAtual;
}


const produtos = [
{
 id:1,
 titulo:"Flores Silvestres",
 categoria:"Bordado",
 preco:25,
 disponivel:true
}
];


// ==========================
// DADOS DO PORTEFÓLIO
// ==========================

const projetos = [
    {
        id: 1,
        titulo: "Frida khalo",
        categoria: "bordado",
        imagem: "assets/img/b.frida.jpg",
        descricao: "Bordado livre em fotografia estampada em tecido, com pequeno pormenor de aplicações  ."
    },

    {
        id: 2,
        titulo: "Memórias em Linha",
        categoria: "bordado",
        imagem: "assets/bordado2.jpg",
        descricao: "Peça artística bordada à mão."
    },

    {
        id: 3,
        titulo: "Mala em Crochê",
        categoria: "croche",
        imagem: "assets/croche1.jpg",
        descricao: "Peça artesanal feita em crochê."
    },

    {
        id: 4,
        titulo: "Cesto Decorativo",
        categoria: "croche",
        imagem: "assets/croche2.jpg",
        descricao: "Crochê funcional e decorativo."
    },

    {
        id: 5,
        titulo: "Montra Primavera",
        categoria: "vitrinismo",
        imagem: "assets/vitrine1.jpg",
        descricao: "Projeto de vitrinismo comercial."
    },

    {
        id: 6,
        titulo: "Montra Premiada",
        categoria: "vitrinismo",
        imagem: "assets/vitrine2.jpg",
        descricao: "Montra distinguida em concurso."
    }
];

// ==========================
// ELEMENTOS HTML
// ==========================

const galeria = document.getElementById("galeria");
const botoesFiltro = document.querySelectorAll(".filter-btn");

// ==========================
// MOSTRAR PROJETOS
// ==========================

function mostrarProjetos(listaProjetos) {

    if (!galeria) return;

    galeria.innerHTML = "";

    if (listaProjetos.length === 0) {

        galeria.innerHTML = `
            <p class="sem-resultados">
                Nenhum projeto encontrado.
            </p>
        `;

        return;
    }

    listaProjetos.forEach(projeto => {

        galeria.innerHTML += `
            <article class="card">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.titulo}">

                <div class="card-body">

                    <h3>${projeto.titulo}</h3>

                    <p>${projeto.descricao}</p>

                    <span class="categoria">
                        ${projeto.categoria}
                    </span>

                </div>

            </article>
        `;
    });
}

// ==========================
// FILTROS
// ==========================

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        const categoria =
            botao.dataset.categoria;

        if (categoria === "todos") {

            mostrarProjetos(projetos);

            return;
        }

        const filtrados =
            projetos.filter(projeto =>
                projeto.categoria === categoria
            );

        mostrarProjetos(filtrados);

    });

});

// ==========================
// CARREGAMENTO INICIAL
// ==========================

mostrarProjetos(projetos);


let totalAtividades = 0;

botaoAtividade.addEventListener("click", () => {

    const indice =
      Math.floor(Math.random() * atividades.length);

    textoAtividade.textContent =
      atividades[indice];

    totalAtividades++;

    document.getElementById("contador").textContent =
      totalAtividades;
});
}

// ==========================
// DADOS
// ==========================

const trabalhos = [
{
    id: 1,
    categoria: "Bordado",
    titulo: "Frida Kahlo",
    preco: 25
},
{
    id: 2,
    categoria: "Crochê",
    titulo: "Mala Artesanal",
    preco: 35
},
{
    id: 3,
    categoria: "Vitrinismo",
    titulo: "Montra Premiada",
    preco: "Projeto"
}
];

// ==========================
// GALERIA
// ==========================

function render(lista) {

    const galeria = document.getElementById("galeria");

    if (!galeria) return;

    galeria.innerHTML = "";

    const semResultados =
        document.getElementById("semResultados");

    if (semResultados) {
        semResultados.style.display =
            lista.length ? "none" : "block";
    }

    lista.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img
                src="https://via.placeholder.com/300x200"
                alt="${item.titulo}">

            <h3>${item.titulo}</h3>

            <p>${item.categoria}</p>

            <p>
                ${typeof item.preco === "number"
                    ? item.preco + "€"
                    : item.preco}
            </p>
        `;

        galeria.appendChild(card);

    });

}

// ==========================
// FILTROS
// ==========================

function filtrar(categoria) {

    if (categoria === "Todos") {

        render(trabalhos);

        return;
    }

    const resultados =
        trabalhos.filter(item =>
            item.categoria === categoria
        );

    render(resultados);

}

// ==========================
// FORMULÁRIO
// ==========================

const form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const feedback =
            document.getElementById("feedback");

        if (feedback) {

            feedback.textContent =
                "Mensagem enviada com sucesso!";

            feedback.style.color =
                "#2e7d32";
        }

        form.reset();

    });

}

// ==========================
// CARREGAMENTO INICIAL
// ==========================

render(trabalhos);

