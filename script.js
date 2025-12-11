// ==========================================================
// 1. CONFIGURAÇÃO E INTEGRAÇÃO WHATSAPP (BACKEND DE CONTATO)
// ==========================================================
const WHATSAPP_NUMBER = '5562993901617';

/**
 * Abre o link do WhatsApp com mensagem pré-preenchida, centralizando o contato comercial.
 * @param {string} type Tipo de contato (ola, cadastro, anuncio, patrocinio, info_evento, ajuda, registro_novo).
 * @param {string} [detail=''] Detalhe adicional, como nome do lutador/evento.
 */
function openWhatsApp(type, detail = '') {
    let message = '';
    
    switch (type) {
        case 'ola':
            message = 'Olá Goiás Fight! Gostaria de mais informações sobre a plataforma e a luta em Goiás.';
            break;
        case 'cadastro':
            message = 'Olá, quero cadastrar meu perfil de lutador/professor na plataforma Goiás Fight. Por favor, me oriente sobre os próximos passos e taxas.';
            break;
        case 'anuncio':
            message = `Olá, gostaria de anunciar meu evento ou minha academia no seu diretório. Meu nome é [Seu Nome] e quero o espaço de destaque!`;
            break;
        case 'patrocinio':
            message = 'Temos interesse em patrocinar o Goiás Fight. Gostaria de receber o Mídia Kit 2026 e as propostas de parceria.';
            break;
        case 'info_evento':
            message = `Olá, gostaria de receber informações atualizadas sobre o evento principal GFN 5 e a compra de ingressos.`;
            break;
        case 'lutador_contato':
            message = `Olá, meu nome é [Seu Nome], sou fã do(a) atleta ${detail} e gostaria de agendar uma aula/semínário ou obter contato profissional.`;
            break;
        case 'academia_contato':
            message = `Olá, gostaria de agendar uma aula experimental na academia ${detail}.`;
            break;
        case 'cadastro_academia':
            message = 'Gostaria de cadastrar minha academia no Diretório e no Mapa de Academias do Goiás Fight.';
            break;
        case 'registro_novo':
            message = 'Quero criar uma nova conta de usuário/atleta no Goiás Fight. Preciso de ajuda com o registro.';
            break;
        case 'ajuda':
            message = 'Preciso de suporte técnico/ajuda com a plataforma Goiás Fight.';
            break;
        default:
            message = 'Olá Goiás Fight! Estou entrando em contato via WhatsApp.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}


// ==========================================================
// 2. DADOS SIMULADOS (EXPANDIDOS)
// ==========================================================
const listingsData = [
    // Lutadores de MMA/Jiu-Jitsu
    { id: 101, type: "teacher", subType: "lutador", title: "Professor A. Silva", subtitle: "Líder da Team Alpha", city: "Goiânia", modality: "mma", photo: "images/teacher_joao.jpg", rankMMA: 1, rankJiuJitsu: 5, wins: 15, losses: 2, draws: 0, history: ["Venceu G. Costa (Decisão) - GFN 4", "Perdeu para F. Moura (KO) - Jungle Fight"], academia: "Team Alpha" },
    { id: 102, type: "teacher", subType: "lutador", title: "Mestre B. Souza", subtitle: "Mestre do Jiu-Jitsu", city: "Anápolis", modality: "jiujitsu", photo: "images/teacher_carla.jpg", rankMMA: 3, rankJiuJitsu: 1, wins: 8, losses: 4, draws: 1, history: ["Venceu C. Dantas (Finalização) - GFN 3", "Venceu J. Nunes (Decisão) - Copa X"], academia: "Gracie Anápolis" },
    // Professores / Academias
    { id: 103, type: "teacher", subType: "academia", title: "Fúria MMA Team", subtitle: "Coach Fernando Costa", city: "Aparecida de Goiânia", modality: "mma", photo: "images/teacher_fernando.jpg", rankMMA: null, rankJiuJitsu: null, wins: 0, losses: 0, draws: 0, history: [], academia: "Fúria MMA" },
    { id: 104, type: "teacher", subType: "professor", title: "Sensei Ricardo Lima", subtitle: "Dojo Dragão Verde", city: "Rio Verde", modality: "karate", photo: "images/teacher_ricardo.jpg", rankMMA: null, rankJiuJitsu: null, wins: 0, losses: 0, draws: 0, history: [], academia: "Dojo Dragão Verde" },
    // Eventos
    { id: 201, type: "event", subType: "pro", title: "Copa Goiana de Boxe - Final", subtitle: "Grande Final do Campeonato Estadual", city: "Goiânia", modality: "boxe", photo: "images/event_boxe.jpg", rankMMA: null, rankJiuJitsu: null, date: "2026-03-15", time: "19:00h", description: "O maior torneio de boxe amador e profissional de Goiás." },
    { id: 202, type: "event", subType: "pro", title: "MMA Challenge Goiás 12", subtitle: "Noite de Duelos Profissionais", city: "Caldas Novas", modality: "mma", photo: "images/event_mma.jpg", rankMMA: null, rankJiuJitsu: null, date: "2026-04-20", time: "20:00h", description: "Onde nascem os campeões de MMA do estado." },
    { id: 203, type: "event", subType: "seminario", title: "Seminário de Defesa Pessoal", subtitle: "Mestre 'Escorpião'", city: "Goiânia", modality: "jiujitsu", photo: "images/event_seminar.jpg", rankMMA: null, rankJiuJitsu: null, date: "2026-02-10", time: "14:00h", description: "Curso intensivo de defesa pessoal para todas as idades." },
    // Mais Notícias para preencher a seção
    { id: 301, title: "Goiânia sediará o 'Fight Week' em Fevereiro", snippet: "Uma semana de treinamentos abertos e coletivas de imprensa para o GFN 6.", image: "images/news_01.jpg" },
    { id: 302, title: "O Desafio de peso: A. Silva pronto para a luta principal", snippet: "Entrevista exclusiva com o Professor A. Silva sobre seu treinamento para o Goiás Fight Night.", image: "images/news_02.jpg" },
    { id: 303, title: "Academias de Anápolis dominam o pódio de Jiu-Jitsu", snippet: "Resultados completos da última Copa Regional de Jiu-Jitsu.", image: "images/news_03.jpg" },
    { id: 304, title: "Lutador Goiano assina com Bellator após vitória no GFN", snippet: "História de superação e dedicação que levou o atleta ao cenário internacional.", image: "images/news_04.jpg" },
    { id: 305, title: "Guia Completo: Como escolher a modalidade certa para você em Goiânia", snippet: "Dicas de professores e academias cadastradas na plataforma.", image: "images/news_05.jpg" }
];

// ==========================================================
// 3. NAVEGAÇÃO, MODAIS E UX
// ==========================================================
function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "var(--bg-dark)";
}

function showModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Renderiza o modal detalhado do lutador/academia/evento ao ser clicado.
 * @param {number} id ID do lutador ou academia.
 */
function showProfile(id) {
    const item = listingsData.find(d => d.id === id);
    if (!item) return;

    const detailsContainer = document.getElementById('profile-details');
    
    // CONTEÚDO BASE DO MODAL
    let htmlContent = `
        <div class="profile-header">
            <img src="${item.photo}" alt="Foto de ${item.title}" class="profile-photo">
            <h3>${item.title}</h3>
            <p class="modality">${item.subtitle} | ${item.modality ? item.modality.toUpperCase() : 'GERAL'}</p>
        </div>
        <div class="profile-body">
    `;
    
    // CONTEÚDO ESPECÍFICO
    if (item.subType === 'lutador') {
        htmlContent += `
            <div class="profile-stats">
                <div><span>${item.wins}</span><p>Vitórias</p></div>
                <div><span>${item.losses}</span><p>Derrotas</p></div>
                <div><span>#${item.rankMMA || '-'}</span><p>Ranking MMA</p></div>
                <div><span>#${item.rankJiuJitsu || '-'}</span><p>Ranking BJJ</p></div>
            </div>
            <h4>Histórico de Lutas Recentes</h4>
            <div class="profile-history">
                <ul>
                    ${item.history.map(h => `<li>${h}</li>`).join('')}
                    ${item.history.length === 0 ? '<li>Nenhum registro recente.</li>' : ''}
                </ul>
            </div>
            <h4>Contato e Agendamento</h4>
            <p>Agende um treino ou seminário.</p>
            <div class="profile-contact">
                <button class="cta-button primary-button" onclick="openWhatsApp('lutador_contato', '${item.title}')">CONTATO PROFISSIONAL <i class="fab fa-whatsapp"></i></button>
            </div>
        `;
    } else if (item.subType === 'academia' || item.subType === 'professor') {
         htmlContent += `
            <h4>Sobre a ${item.subType === 'academia' ? 'Academia' : 'Professor(a)'}</h4>
            <p><strong>Localização:</strong> ${item.city}</p>
            <p><strong>Modalidades:</strong> ${item.modality.toUpperCase()} + outras.</p>
            <p>Entre em contato para saber horários e preços.</p>
            <div class="profile-contact">
                <button class="cta-button primary-button" onclick="openWhatsApp('academia_contato', '${item.title}')">AGENDAR AULA EXPERIMENTAL <i class="fab fa-whatsapp"></i></button>
            </div>
        `;
    } else if (item.type === 'event') {
         htmlContent += `
            <h4>Detalhes do Evento</h4>
            <p>${item.description}</p>
            <h4>Data e Local</h4>
            <p><i class="far fa-calendar-alt"></i> ${new Date(item.date).toLocaleDateString('pt-BR')} às ${item.time}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${item.city}</p>
            <div class="profile-contact">
                <button class="cta-button primary-button" onclick="alert('Redirecionando para compra de ingressos para ${item.title}')">COMPRAR INGRESSOS</button>
                <button class="cta-button secondary-button" onclick="openWhatsApp('info_evento', '${item.title}')">MAIS INFORMAÇÕES <i class="fab fa-whatsapp"></i></button>
            </div>
        `;
    }
    
    htmlContent += `</div>`;
    detailsContainer.innerHTML = htmlContent;
    showModal('profile-modal');
}


// ==========================================================
// 4. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================================

// RENDERIZAÇÃO DA SEÇÃO DE RANKING
function renderRanking() {
    const rankingLutadoresGrid = document.getElementById('ranking-lutadores');
    const rankingJiuJitsuGrid = document.getElementById('ranking-jiujitsu');
    const rankingEventosList = document.getElementById('ranking-eventos');
    
    rankingLutadoresGrid.innerHTML = '';
    rankingJiuJitsuGrid.innerHTML = '';
    rankingEventosList.innerHTML = '';

    // Lutadores MMA
    listingsData
        .filter(item => item.rankMMA !== null)
        .sort((a, b) => a.rankMMA - b.rankMMA)
        .slice(0, 5)
        .forEach(item => {
            rankingLutadoresGrid.innerHTML += `
                <div class="ranking-card" onclick="showProfile(${item.id})">
                    <div class="rank-number">#${item.rankMMA}</div>
                    <img src="${item.photo}" alt="Foto de ${item.title}" class="photo-sm">
                    <h4>${item.title}</h4>
                    <p class="modality">MMA | ${item.wins} - ${item.losses}</p>
                </div>
            `;
        });
        
    // Lutadores Jiu-Jitsu
    listingsData
        .filter(item => item.rankJiuJitsu !== null)
        .sort((a, b) => a.rankJiuJitsu - b.rankJiuJitsu)
        .slice(0, 5)
        .forEach(item => {
            rankingJiuJitsuGrid.innerHTML += `
                <div class="ranking-card" onclick="showProfile(${item.id})">
                    <div class="rank-number">#${item.rankJiuJitsu}</div>
                    <img src="${item.photo}" alt="Foto de ${item.title}" class="photo-sm">
                    <h4>${item.title}</h4>
                    <p class="modality">JIU-JITSU | ${item.subtitle.split(' ')[0]}</p>
                </div>
            `;
        });

    // Próximos Eventos
    listingsData
        .filter(item => item.type === 'event')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5)
        .forEach(item => {
            rankingEventosList.innerHTML += `
                <div class="event-list-item" onclick="showProfile(${item.id})">
                    <div class="event-info">
                        <h4>${item.title}</h4>
                        <p>${item.modality.toUpperCase()} | ${item.city} - ${new Date(item.date).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <button class="cta-button primary-button" onclick="showProfile(${item.id})" style="padding: 8px 15px; font-size: 0.9em;">DETALHES</button>
                </div>
            `;
        });
    
    // Listener para a troca de tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
            
            this.classList.add('active');
            // Garante que o grid ou bloco seja exibido corretamente
            document.getElementById(`ranking-${this.dataset.tab}`).style.display = this.dataset.tab === 'eventos' ? 'block' : 'grid';
        });
    });
}

// RENDERIZAÇÃO DA SEÇÃO DE NOTÍCIAS
function renderNews() {
    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = '';
    
    // Reutiliza os dados de listagem com type news (simulação)
    listingsData.filter(item => item.id >= 301).forEach(article => {
        const item = document.createElement('a');
        item.href = "#"; 
        item.classList.add('news-article');
        
        item.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <span class="tag-type">${article.id % 2 === 0 ? 'MMA' : 'Jiu-Jitsu'}</span>
                <h4>${article.title}</h4>
                <p>${article.snippet}</p>
                <span class="link-full-ranking" style="font-size: 0.9em; margin-top: 10px; display: block;">Continuar Lendo &raquo;</span>
            </div>
        `;
        newsGrid.appendChild(item);
    });
}

// RENDERIZAÇÃO E FILTRAGEM PRINCIPAL
function filterAndRenderListings() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const typeFilter = document.getElementById('filter-type').value;
    const modalityFilter = document.getElementById('filter-modality').value;
    const grid = document.querySelector('.listing-grid');
    const noResults = document.getElementById('no-results');

    let filteredData = listingsData.filter(item => item.type !== 'event' || item.type !== 'teacher'); // Filtra apenas listagens de acad/prof/eventos

    // Aplica filtros
    if (typeFilter !== 'all') {
        filteredData = filteredData.filter(item => item.type === typeFilter);
    }
    if (modalityFilter !== 'all') {
        filteredData = filteredData.filter(item => item.modality === modalityFilter);
    }
    if (searchInput) {
        filteredData = filteredData.filter(item => 
            item.title.toLowerCase().includes(searchInput) ||
            item.subtitle.toLowerCase().includes(searchInput) ||
            item.city.toLowerCase().includes(searchInput)
        );
    }
    
    // Remove itens que não são de listagem (ex: notícias)
    filteredData = filteredData.filter(item => item.id < 301);

    grid.innerHTML = '';
    
    if (filteredData.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        
        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('listing-card', item.type, item.modality);
            
            card.innerHTML = `
                <img src="${item.photo}" alt="Foto de ${item.title}" class="photo-lg" onclick="showProfile(${item.id})">
                <div style="padding: 20px;">
                    <span class="tag-type">${item.subType.toUpperCase()} | ${item.modality.toUpperCase()}</span>
                    <h4>${item.title}</h4>
                    <p>${item.subtitle}</p>
                    <p class="location"><i class="fas fa-map-marker-alt"></i> ${item.city}/GO</p>
                    <button class="cta-button primary-button" onclick="showProfile(${item.id})" style="padding: 10px 15px; font-size: 0.9em; margin-top: 15px;">VER PERFIL COMPLETO</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}


// ==========================================================
// 5. INICIALIZAÇÃO E EVENT LISTENERS
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialização de todas as seções
    renderRanking();
    renderNews();
    filterAndRenderListings(); 

    // 2. Configura a filtragem ao interagir
    document.getElementById('apply-filters').addEventListener('click', filterAndRenderListings);
    document.getElementById('filter-type').addEventListener('change', filterAndRenderListings);
    document.getElementById('filter-modality').addEventListener('change', filterAndRenderListings);

    // 3. Funcionalidade do botão de Compra de Ingresso
    document.getElementById('buy-ticket-btn').addEventListener('click', () => {
        alert('Redirecionando para a página de vendas de ingressos para o GFN 5...');
    });

    // 4. Funcionalidade do Formulário de Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('nl-name').value;
            const feedback = document.getElementById('newsletter-feedback');

            feedback.textContent = `Sucesso! Bem-vindo ${name}! Suas notícias do Goiás Fight chegarão em breve.`;
            feedback.style.color = '#4CAF50';
            
            setTimeout(() => {
                newsletterForm.reset();
                feedback.textContent = '';
            }, 5000);
        });
    }
    
    // 5. Fechar modal ao clicar fora
    const profileModal = document.getElementById('profile-modal');
    const loginModal = document.getElementById('profile-modal-login');
    window.onclick = function(event) {
        if (event.target == profileModal) {
            closeModal('profile-modal');
        }
        if (event.target == loginModal) {
            closeModal('profile-modal-login');
        }
    }
});