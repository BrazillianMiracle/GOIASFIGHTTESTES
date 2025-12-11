// ==========================================================
// DADOS SIMULADOS DA PLATAFORMA (Expansão do Backend Simulado)
// ==========================================================
const listingsData = [
    // PROFESSORES / ACADEMIAS
    { id: 1, type: "teacher", title: "Mestre João 'Pitbull' Alves", subtitle: "Academia Pitbull Jiu-Jitsu", city: "Goiânia", modality: "jiujitsu", photo: "images/teacher_joao.jpg", rank: 1, description: "Campeão Brasileiro de Jiu-Jitsu, com 20 anos de experiência." },
    { id: 2, type: "teacher", title: "Professora Carla Nunes", subtitle: "Thai Power Anápolis", city: "Anápolis", modality: "muaythai", photo: "images/teacher_carla.jpg", rank: 3, description: "Especialista em Muay Thai feminino e treinamento de alto rendimento." },
    { id: 3, type: "teacher", title: "Coach Fernando Costa", subtitle: "Fúria MMA Team", city: "Aparecida de Goiânia", modality: "mma", photo: "images/teacher_fernando.jpg", rank: 5, description: "Treinador de atletas profissionais de MMA na região metropolitana." },
    { id: 4, type: "teacher", title: "Sensei Ricardo Lima", subtitle: "Dojo Dragão Verde", city: "Rio Verde", modality: "karate", photo: "images/teacher_ricardo.jpg", rank: null, description: "Foco no ensino tradicional e competição de Karatê Kyokushin." },
    
    // EVENTOS
    { id: 5, type: "event", title: "Copa Goiana de Boxe - Final", subtitle: "Grande Final do Campeonato Estadual", city: "Goiânia", modality: "boxe", photo: "images/event_boxe.jpg", rank: null, description: "Evento de Boxe amador e profissional com as melhores equipes do estado." },
    { id: 6, type: "event", title: "MMA Challenge Goiás 12", subtitle: "Noite de Duelos Profissionais", city: "Caldas Novas", modality: "mma", photo: "images/event_mma.jpg", rank: null, description: "Maior evento de MMA do interior de Goiás. Ingressos limitados." },
    { id: 7, type: "event", title: "Seminário de Defesa Pessoal", subtitle: "Mestre 'Escorpião' - Jiu-Jitsu", city: "Goiânia", modality: "jiujitsu", photo: "images/event_seminar.jpg", rank: null, description: "Curso intensivo de defesa pessoal para todas as idades." },
];

const newsData = [
    { title: "Goiânia sediará o 'Fight Week' em Fevereiro", snippet: "Uma semana de treinamentos abertos e coletivas de imprensa para o GFN 6.", image: "images/news_01.jpg" },
    { title: "O Desafio de peso: A. Silva pronto para a luta principal", snippet: "Entrevista exclusiva com o Professor A. Silva sobre seu treinamento para o Goiás Fight Night.", image: "images/news_02.jpg" },
    { title: "Academias de Anápolis dominam o pódio de Jiu-Jitsu", snippet: "Resultados completos da última Copa Regional de Jiu-Jitsu...", image: "images/news_03.jpg" }
];

// ==========================================================
// 1. NAVEGAÇÃO E MODAIS (iLutas Inspired)
// ==========================================================

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "var(--bg-dark)";
}

function showModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Bloqueia scroll
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}


// ==========================================================
// 2. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================================

// RENDERIZAÇÃO DA SEÇÃO DE RANKING
function renderRanking() {
    const rankingGrid = document.querySelector('.ranking-grid');
    
    // Filtra e pega apenas os 5 melhores ranqueados
    const topRanked = listingsData
        .filter(item => item.type === 'teacher' && item.rank !== null)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, 5); 

    topRanked.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('ranking-card', item.modality);
        
        card.innerHTML = `
            <div class="rank-number">#${item.rank}</div>
            <img src="${item.photo}" alt="Foto de ${item.title}" class="photo-sm">
            <h4>${item.title}</h4>
            <p class="modality">${item.modality.toUpperCase()}</p>
        `;
        rankingGrid.appendChild(card);
    });
}

// RENDERIZAÇÃO DA SEÇÃO DE NOTÍCIAS
function renderNews() {
    const newsGrid = document.querySelector('.news-grid');

    newsData.forEach(article => {
        const item = document.createElement('a');
        item.href = "#"; // Simula link para artigo
        item.classList.add('news-article');
        
        item.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <h4>${article.title}</h4>
                <p>${article.snippet}</p>
                <span class="tag-type">Ler Mais &raquo;</span>
            </div>
        `;
        newsGrid.appendChild(item);
    });
}

// RENDERIZAÇÃO PRINCIPAL E FILTRAGEM (Simulando jplist/iLutas)
function filterAndRenderListings() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const typeFilter = document.getElementById('filter-type').value;
    const modalityFilter = document.getElementById('filter-modality').value;
    const grid = document.querySelector('.listing-grid');
    const noResults = document.getElementById('no-results');

    let filteredData = listingsData;

    // 1. Filtrar por Tipo (Professor/Evento)
    if (typeFilter !== 'all') {
        filteredData = filteredData.filter(item => item.type === typeFilter);
    }

    // 2. Filtrar por Modalidade
    if (modalityFilter !== 'all') {
        filteredData = filteredData.filter(item => item.modality === modalityFilter);
    }

    // 3. Filtrar por Busca (Nome/Academia/Cidade)
    if (searchInput) {
        filteredData = filteredData.filter(item => 
            item.title.toLowerCase().includes(searchInput) ||
            item.subtitle.toLowerCase().includes(searchInput) ||
            item.city.toLowerCase().includes(searchInput)
        );
    }

    grid.innerHTML = ''; // Limpa a listagem
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        
        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('listing-card', item.type, item.modality);
            
            card.innerHTML = `
                <img src="${item.photo}" alt="Foto de ${item.title}" class="photo-lg">
                <span class="tag-type">${item.type === 'teacher' ? 'PROFESSOR/ACADEMIA' : 'EVENTO'}</span>
                <h4>${item.title}</h4>
                <p>${item.subtitle}</p>
                <p class="modality">${item.modality.toUpperCase()}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${item.city}/GO</p>
                <a href="#" class="cta-button" style="padding: 10px 15px; font-size: 0.9em; margin-top: 15px;">Ver Detalhes</a>
            `;
            grid.appendChild(card);
        });
    }
}


// ==========================================================
// 3. EVENT LISTENERS E INICIALIZAÇÃO
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o carregamento de todas as seções
    renderRanking();
    renderNews();
    filterAndRenderListings(); // Carrega a listagem inicial

    // 2. Configura a filtragem ao clicar no botão
    document.getElementById('apply-filters').addEventListener('click', filterAndRenderListings);
    
    // 3. Configura a filtragem automática ao mudar os selects (UX aprimorada)
    document.getElementById('filter-type').addEventListener('change', filterAndRenderListings);
    document.getElementById('filter-modality').addEventListener('change', filterAndRenderListings);
    // Nota: O filtro de input geralmente só é aplicado ao clicar em 'BUSCAR' em plataformas grandes, 
    // mas pode ser configurado com 'keyup' se preferir busca instantânea.

    // 4. Funcionalidade do botão de Compra de Ingresso
    document.getElementById('buy-ticket-btn').addEventListener('click', () => {
        alert('Redirecionando para a página de compra de ingressos do GOIÁS FIGHT NIGHT 5!');
    });

    // 5. Funcionalidade do Formulário de Contato/Cadastro de Academia
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const feedback = document.getElementById('contact-feedback');

            feedback.textContent = `Proposta de cadastro de ${name} enviada com sucesso! Entraremos em contato em breve.`;
            feedback.style.color = '#4CAF50';
            
            setTimeout(() => {
                contactForm.reset();
                feedback.textContent = '';
            }, 5000);
        });
    }
    
    // 6. Fechar modal ao clicar fora
    const modal = document.getElementById('registro-modal');
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal('registro-modal');
        }
    }
});