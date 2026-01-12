document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const revealElements = document.querySelectorAll('.reveal');

    let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    revealOnScroll();
}

    // 3. Menu Mobile funcional
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animação do ícone hambúrguer
        const spans = mobileMenuIcon.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
    });
    document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = document.getElementById("whatsappBtn");
    btn.innerText = "Abrindo WhatsApp…";
    btn.disabled = true;

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const agora = new Date();
    const data = agora.toLocaleDateString("pt-BR");
    const hora = agora.toLocaleTimeString("pt-BR");

    const texto =
`👋 *Novo contacto via site*
━━━━━━━━━━━━━━━━━━━
🏢 *Empresa:* MultSev Solução Digital
🌐 *Origem:* Site institucional

👤 *Nome:* ${nome}
📧 *Email:* ${email}

💬 *Mensagem do cliente:*
"${mensagem}"

━━━━━━━━━━━━━━━━━━━
📊 *Objetivo:* Promoção de serviços / marketing
📆 *Data:* ${data}
⏰ *Hora:* ${hora}

🚀 Estou interessado(a) em soluções digitais estratégicas para crescimento do meu negócio.
`;

    const numeroWhatsApp = "244959622160";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    // (opcional) restaurar botão se o utilizador voltar
    setTimeout(() => {
        btn.innerText = "Enviar Mensagem";
        btn.disabled = false;
    }, 4000);
});

    // 4. Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Fechar menu mobile se estiver aberto
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Resetar ícone
                const spans = mobileMenuIcon.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para revelar elementos ao rolar
    function revealOnScroll() {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    // Executar uma vez no carregamento
    revealOnScroll();
});
