
const words = ['Explore nossos projetos!', 'vamos realizar suas Ideias Inovadoras!'];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    const heroText = document.querySelector('#hero h2 span');
    heroText.textContent = words[wordIndex].substring(0, charIndex);

    if (charIndex < words[wordIndex].length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 2000);
    }
}

typeEffect();

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajuste do deslocamento
                behavior: 'smooth'
            });
        }
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    });
});

// Animar as barras de progresso ao visualizar a seção
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
        progressBars.forEach(bar => {
            if (!bar.classList.contains('animated')) {
                const progressHeight = getComputedStyle(bar).getPropertyValue('--progress-height');
                bar.style.height = progressHeight; // Preenche a altura da barra
                bar.classList.add('animated'); // Marca como animada
            }
        });
    }
});

// Validação simples do formulário

    // Se todos os campos forem válidos, enviar o e-mail
    if (isValid) {
        const formData = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#message').value,
        };
        // Enviar os dados para o Email
        emailjs.send('seu_servico_id', 'seu_modelo_email_id', formData)
            .then((response) => {
                alert('Formulário enviado com sucesso!');
                contactForm.reset(); // Limpa o formulário
            })
            .catch((error) => {
                alert('Erro ao enviar o formulário. Tente novamente.');
                console.error('Erro ao enviar e-mail:', error);
            });
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Criar o botão "Voltar ao Topo"
const backToTop = document.createElement('div');
backToTop.textContent = '⬆';
backToTop.style.position = 'fixed';
backToTop.style.bottom = '20px';
backToTop.style.right = '20px';
backToTop.style.background = '#4A4E69';
backToTop.style.color = '#fff';
backToTop.style.padding = '10px 15px';
backToTop.style.borderRadius = '50%';
backToTop.style.cursor = 'pointer';
backToTop.style.display = 'none';
backToTop.style.zIndex = '1000';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Função para revelar elementos ao rolar
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Aplicar animação inicial
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.5s ease';
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});



