function nextStep(tipo) {

  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");

  step1.classList.remove("active");

  setTimeout(() => {
    step2.classList.add("active");
  }, 200);

  let titulo = document.getElementById("titulo");
  let descricao = document.getElementById("descricao");
  let beneficios = document.getElementById("beneficios");
  let imagem = document.getElementById("imagem");
  let btnAcao = document.getElementById("btnAcao");

  beneficios.innerHTML = "";

  // CLIENTES
  if (tipo === "clientes") {
    titulo.innerText = "Atraia Clientes Todos os Dias";
    descricao.innerText = "Estratégias avançadas de marketing digital";
    imagem.src = "cliente.png";

    beneficios.innerHTML = `
      <li>✔ Tráfego pago inteligente</li>
      <li>✔ Gestão de páginas</li>
      <li>✔ Criação de conteúdos estratégicos</li>
    `;

    btnAcao.href = "servicos.html#trafego";
    btnAcao.innerText = "Ver solução de marketing";
  }

  // DESIGN (corrigido — antes estava dinheiro)
  else if (tipo === "dinheiro") {
    titulo.innerText = "Destaque a Sua Empresa com Design Profissional";
    descricao.innerText = "Criamos identidade visual que transmite confiança e aumenta suas vendas.";
    imagem.src = "dinheiro.png";

    beneficios.innerHTML = `
      <li>✔ Design moderno e profissional</li>
      <li>✔ Mais credibilidade no mercado</li>
      <li>✔ Diferenciação da concorrência</li>
    `;

    btnAcao.href = "servicos.html#design";
    btnAcao.innerText = "Ver serviços de design";
  }

  // FORMAÇÃO
  else if (tipo === "aprender") {
    titulo.innerText = "Aprenda a Ganhar Dinheiro no Digital";
    descricao.innerText = "Formação completa com fundamentos para começar a ganhar no mercado digital";
    imagem.src = "aprender.png";

    beneficios.innerHTML = `
      <li>✔ Fundamentos do marketing digital</li>
      <li>✔ Criação e venda de ebooks</li>
      <li>✔ Estratégias de tráfego pago</li>
      <li>✔ Abertura de conta Visa</li>
    `;

    btnAcao.href = "servicos.html#formacao";
    btnAcao.innerText = "Ver formação completa";
  }

  // ESCALA
  else if (tipo === "crescer") {
    titulo.innerText = "Cresça com Estrutura Profissional";
    descricao.innerText = "Desenvolvemos o seu site e criamos uma estratégia personalizada para escalar o seu negócio.";
    imagem.src = "crescer.png";

    beneficios.innerHTML = `
      <li>✔ Criação de site profissional</li>
      <li>✔ Presença digital forte</li>
      <li>✔ Estratégia de crescimento</li>
    `;

    btnAcao.href = "servicos.html#consultoria";
    btnAcao.innerText = "Ver solução completa";
  }
}

// VOLTAR
function voltar() {
  document.getElementById("step2").classList.remove("active");

  setTimeout(() => {
    document.getElementById("step1").classList.add("active");
  }, 200);
}