/* ======================================================
   CONFIGURAÇÕES GERAIS
====================================================== */
const WHATSAPP_NUMBER = "244952805504";
const EMAIL_ADDRESS = "multsevsolucaodigital@gmail.com";

/* ======================================================
   FUNÇÕES DE CONTACTO
====================================================== */
function abrirWhatsapp() {
  const mensagem = `Olá, MultSev Solução Digital.\n\nGostaria de obter mais informações sobre os serviços.\n\nNome:\nServiço de interesse:\nDescrição do projeto:`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

function abrirEmail() {
  const assunto = "Contacto Profissional - MultSev Solução Digital";
  const corpo = `Olá, MultSev Solução Digital.\n\nGostaria de informações sobre os serviços disponíveis.\n\nNome:\nServiço pretendido:\nDetalhes do projeto:`;
  window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}

/* ======================================================
   ANIMAÇÃO SUAVE AO SCROLL
====================================================== */
const elementosAnimados = document.querySelectorAll(".servico, .livraria, .contacto, .hero-text, .hero-img");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visivel");
    });
  },
  { threshold: 0.15 }
);
elementosAnimados.forEach(el => el && observer.observe(el));

/* ======================================================
   HEADER DINÂMICO
====================================================== */
let ultimoScroll = 0;
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    const scrollAtual = window.pageYOffset;
    header.style.transform = scrollAtual > ultimoScroll && scrollAtual > 120 ? "translateY(-100%)" : "translateY(0)";
    ultimoScroll = scrollAtual;
  });
}

/* ======================================================
   MICRO-INTERAÇÕES NOS BOTÕES
====================================================== */
document.querySelectorAll("button, .livraria a").forEach(botao => {
  botao.addEventListener("mouseenter", () => botao.style.transform = "translateY(-3px)");
  botao.addEventListener("mouseleave", () => botao.style.transform = "translateY(0)");
});

/* ======================================================
   MODAL DE CONSULTA
====================================================== */
const modal = document.getElementById("consultModal");
const openBtn = document.getElementById("openConsult");
const closeBtn = document.querySelector(".close-modal");

if (modal && openBtn && closeBtn) {
  openBtn.onclick = e => {
    e.preventDefault();
    modal.classList.add("active");
  };
  closeBtn.onclick = () => modal.classList.remove("active");
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

/* ======================================================
   COPIAR IBAN
====================================================== */
function copiarIBAN() {
  const ibanEl = document.getElementById("iban");
  const msgEl = document.getElementById("msg");
  if (!ibanEl || !msgEl) return;

  const text = ibanEl.innerText.trim();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      msgEl.style.display = "block";
      setTimeout(() => msgEl.style.display = "none", 2000);
    });
  } else {
    // fallback antigo
    const range = document.createRange();
    range.selectNode(ibanEl);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    msgEl.style.display = "block";
    setTimeout(() => msgEl.style.display = "none", 2000);
  }
}

/* ======================================================
   ENVIO DO FORMULÁRIO PARA WHATSAPP (COM FORMATO MELHORADO)
====================================================== */
const consultForm = document.getElementById("consultForm");
if (consultForm) {
  consultForm.onsubmit = e => {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "Não informado";
    const whatsapp = document.getElementById("whatsapp")?.value || "Não informado";
    const type = document.getElementById("type")?.value || "Não especificado";
    const local = document.getElementById("local")?.value || "Não informado";
    const data = document.getElementById("data")?.value || "";
    const hora = document.getElementById("hora")?.value || "";
    const mensage = document.getElementById("mensage")?.value || "Sem mensagem.";

    // Formata data/hora atual para registrar quando foi feito o pedido
    const now = new Date();
    const dataEnvio = now.toLocaleDateString("pt-AO");
    const horaEnvio = now.toLocaleTimeString("pt-AO", { hour12: false });

    let text = 
`*📌 SOLICITAÇÃO DE CONSULTA DIGITAL*\n\n` +
`👤 *Nome:* ${name}\n` +
`📱 *WhatsApp:* ${whatsapp}\n` +
`🎯 *Tipo de consulta:* ${type}\n` +
`📍 *Local de atendimento:* ${local}\n\n` +
`💬 *Necessidade:*\n${mensage}`;

    if (data && hora) {
      text += `\n\n📅 *Agendamento solicitado:*\n🗓 ${data}\n⏰ ${hora}`;
    }

    text += `\n\n—\n*Enviado em:* ${dataEnvio} às ${horaEnvio}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
}

/* ======================================================
   MENU HAMBÚRGUER MOBILE (CORRIGIDO E GARANTIDO)
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }
});

/* ======================================================
   ACESSIBILIDADE BÁSICA
====================================================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const ativo = document.activeElement;
    if (ativo?.tagName === "BUTTON" || ativo?.tagName === "A") {
      ativo.click();
    }
  }
});

/* ======================================================
   PERFORMANCE & LOG
====================================================== */
console.log("MultSev Solução Digital — Script carregado com sucesso.");
// Tempo de inatividade: 3 minutos = 180.000 milissegundos
const INATIVIDADE_LIMITE = 180000; // 3 minutos
let tempoInativo = null;

function resetarInatividade() {
  if (tempoInativo) clearTimeout(tempoInativo);
  tempoInativo = setTimeout(() => {
    // Força recarregamento da página (com bypass de cache)
    window.location.reload(true);
  }, INATIVIDADE_LIMITE);
}

// Monitorar atividade do usuário
['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(evento => {
  window.addEventListener(evento, resetarInatividade, true);
});

// Iniciar o contador ao carregar a página
resetarInatividade();