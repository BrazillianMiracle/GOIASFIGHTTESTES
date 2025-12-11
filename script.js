// Dados simulados de professores e eventos de Goiás
const listingsData = [
    {
        type: "teacher",
        title: "Mestre João 'Pitbull' Alves",
        style: "Jiu-Jitsu Brasileiro",
        location: "Goiânia",
        photo: "images/teacher_joao.jpg",
        modality_class: "jiujitsu"
    },
    {
        type: "teacher",
        title: "Professora Carla Nunes",
        style: "Muay Thai (Boxe Tailandês)",
        location: "Anápolis",
        photo: "images/teacher_carla.jpg",
        modality_class: "muaythai"
    },
    {
        type: "event",
        title: "Copa Goiana de Boxe - 2024",
        style: "Evento: Boxe",
        location: "Aparecida de Goiânia",
        photo: "images/event_boxe.jpg",
        modality_class: "boxe"
    },
    {
        type: "teacher",
        title: "Sensei Ricardo 'Dragão' Lima",
        style: "Karate Kyokushin",
        location: "Rio Verde",
        photo: "images/teacher_ricardo.jpg",
        modality_class: "karate"
    },
    {
        type: "event",
        title: "MMA Challenge Goiás 12",
        style: "Evento: MMA Profissional",
        location: "Caldas Novas",
        photo: "images/event_mma.jpg",
        modality_class: "mma"
    }
];

// Função para injetar os cards de listagem no HTML
function loadListings(data = listingsData) {
    const grid = document.querySelector('.listing-grid');
    grid.innerHTML = ''; // Limpa o grid antes de carregar
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('teacher-card', item.type, item.modality_class);
        
        let content;
        
        if (item.type === 'teacher') {
            content = `
                <img src="${item.photo}" alt="Foto de ${item.title}" class="teacher-photo">
                <h4>${item.title}</h4>
                <p class="style">${item.style}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
                <a href="#" class="cta-button" style="padding: 10px 15px; font-size: 0.9em; margin-top: 10px;">Ver Perfil</a>
            `;
        } else { // type === 'event'
            content = `
                <img src="${item.photo}" alt="Imagem do Evento ${item.title}" class="teacher-photo">
                <h4>${item.title}</h4>
                <p class="style">${item.style}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
                <a href="#" class="cta-button" style="padding: 10px 15px; font-size: 0.9em; margin-top: 10px;">Detalhes do Evento</a>
            `;
        }

        card.innerHTML = content;
        grid.appendChild(card);
    });
}

// Funcionalidade do Formulário de Newsletter
function setupNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const feedback = document.getElementById('message-feedback');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const name = document.getElementById('name').value;
            
            feedback.textContent = `Obrigado, ${name}! Seu cadastro foi realizado com sucesso.`;
            feedback.style.color = '#4CAF50'; 
            
            setTimeout(() => {
                form.reset();
                feedback.textContent = '';
            }, 3000);
        });
    }
}

// Funcionalidade de Compra de Ingresso
function setupBuyTicketButton() {
    const buyButton = document.getElementById('buy-ticket-btn');
    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('Redirecionando para a página de ingressos...');
        });
    }
}

// A implementação de filtragem com JavaScript puro seria extensa.
// O ideal para o filtro avançado da base iLutas (por título, tipo, data e local)
// seria a utilização de bibliotecas como o jplist.js (presente no seu código base )
// ou frameworks como Vue/React para manipulação de estado.

document.addEventListener('DOMContentLoaded', () => {
    loadListings();
    setupNewsletterForm();
    setupBuyTicketButton();
});