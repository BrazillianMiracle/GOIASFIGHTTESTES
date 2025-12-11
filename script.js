// ==========================================================
// 1. CONFIGURAÇÃO DE WHATSAPP (Backend de Contato)
// ==========================================================
const WHATSAPP_NUMBER = '5562993901617';
const DEFAULT_INSTAGRAM = 'https://www.instagram.com/brazillianmiracle/';

/**
 * Abre o link do WhatsApp com mensagem pré-preenchida.
 * @param {string} type Tipo de contato.
 * @param {string} [detail=''] Detalhe adicional para personalização.
 */
function openWhatsApp(type, detail = '') {
    let message = '';
    
    switch (type) {
        case 'ola_geral':
            message = 'Olá Goiás Fight MAX! Gostaria de mais informações sobre seus serviços e anúncios.';
            break;
        case 'anuncio_geral':
            message = 'Tenho interesse em anunciar na plataforma Goiás Fight MAX. Por favor, me envie o media kit.';
            break;
        case 'suporte':
            message = 'Preciso de suporte técnico/ajuda com a plataforma Goiás Fight MAX.';
            break;
        case 'comprar_ingresso':
            message = `Olá! Tenho interesse em comprar ingressos para o evento: ${detail}. Por favor, me envie os valores e formas de pagamento.`;
            break;
        case 'personal_contact':
            // Mensagem solicitada: personalfight joel
            message = `personalfight joel - Olá, gostaria de contratar o personal fight ${detail}. Por favor, me envie os valores e disponibilidade de horários.`;
            break;
        case 'anuncio_personal':
            // Mensagem solicitada: quero anunciar personalifight
            message = `quero anunciar personalifight - Olá, gostaria de anunciar meu serviço de personal fight na plataforma Goiás Fight MAX.`;
            break;
        case 'academia_contact':
            message = `Olá, tenho interesse em conhecer a academia ${detail}. Por favor, me envie o endereço e horários de aula de ${detail}.`;
            break;
        case 'anuncio_evento':
            message = 'Quero anunciar meu evento de luta na seção Destaque do Goiás Fight MAX.';
            break;
        case 'anuncio_academia':
            message = 'Quero anunciar minha academia no Diretório de Academias do Goiás Fight MAX.';
            break;
        case 'anuncio_workshop':
            message = 'Quero anunciar meu Workshop/Seminário na plataforma Goiás Fight MAX.';
            break;
        case 'info_workshop':
            message = `Olá, gostaria de receber mais informações e detalhes de inscrição para o Workshop de ${detail}.`;
            break;
        case 'comprar_produto':
            message = `Olá! Gostaria de comprar o produto: ${detail} (Shopping Goiás Fight). Qual o valor do frete e o prazo de entrega?`;
            break;
        case 'duvida_shopping':
            message = 'Tenho uma dúvida sobre um produto no Goiás Fight Shopping.';
            break;
        default:
            message = 'Olá Goiás Fight MAX!';
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}


// ==========================================================
// 2. DADOS SIMULADOS (MASSIVOS)
// ==========================================================

// PILAR 1: EVENTOS DE LUTA (3 ITENS)
const eventsData = [
    { 
        id: 1, name: "Goiana Fight Night 8", date: "22 de Janeiro", city: "Goiânia", 
        fighterA: "Marco 'Predador' Silva", fighterA_photo: "images/2.jpg", 
        fighterB: "Júlio 'Spartan' Costa", fighterB_photo: "images/3.jpg",
        instagram: DEFAULT_INSTAGRAM,
        whatsapp_msg: "Goiana Fight Night 8 - Marco Silva vs Júlio Costa"
    },
    { 
        id: 2, name: "Copa Estadual de Jiu-Jitsu", date: "05 de Fevereiro", city: "Anápolis", 
        fighterA: "Mestre Carlos Gracie", fighterA_photo: "images/4.jpg", 
        fighterB: "Professor Joel Fernandes", fighterB_photo: "images/5.jpg",
        instagram: DEFAULT_INSTAGRAM,
        whatsapp_msg: "Copa Estadual de Jiu-Jitsu - Inscrição ou Ingressos"
    },
    { 
        id: 3, name: "Muay Thai GP - Elite", date: "15 de Março", city: "Rio Verde", 
        fighterA: "Lara 'Killer' Souza", fighterA_photo: "images/6.jpg", 
        fighterB: "Renata 'Tigre' Mendes", fighterB_photo: "images/7.jpg",
        instagram: DEFAULT_INSTAGRAM,
        whatsapp_msg: "Muay Thai GP Elite - Lara Souza vs Renata Mendes"
    }
];

// PILAR 2: PERSONAIS FIGHT (20 ITENS)
const personalsData = [
    // 8.jpg a 27.jpg (20 fotos)
    { id: 1, name: "Joel Lima (O Criador)", photo: "images/8.jpg", price: "R$ 150/h", modality: "MMA/Boxe", instagram: DEFAULT_INSTAGRAM },
    { id: 2, name: "Amanda Tavares", photo: "images/9.jpg", price: "R$ 120/h", modality: "Jiu-Jitsu", instagram: DEFAULT_INSTAGRAM },
    { id: 3, name: "Fábio 'Kick' Nunes", photo: "images/10.jpg", price: "R$ 140/h", modality: "Muay Thai", instagram: DEFAULT_INSTAGRAM },
    { id: 4, name: "Carla Pires", photo: "images/11.jpg", price: "R$ 110/h", modality: "Boxe", instagram: DEFAULT_INSTAGRAM },
    { id: 5, name: "Ricardo 'The Rock' Rocha", photo: "images/12.jpg", price: "R$ 160/h", modality: "Luta Livre", instagram: DEFAULT_INSTAGRAM },
    { id: 6, name: "Luiza Santos", photo: "images/13.jpg", price: "R$ 130/h", modality: "MMA", instagram: DEFAULT_INSTAGRAM },
    { id: 7, name: "Pedro Henrique", photo: "images/14.jpg", price: "R$ 100/h", modality: "Jiu-Jitsu (Iniciantes)", instagram: DEFAULT_INSTAGRAM },
    { id: 8, name: "Mariana Oliveira", photo: "images/15.jpg", price: "R$ 125/h", modality: "Muay Thai (Foco em Defesa)", instagram: DEFAULT_INSTAGRAM },
    { id: 9, name: "Gustavo Mendes", photo: "images/16.jpg", price: "R$ 155/h", modality: "Boxe Profissional", instagram: DEFAULT_INSTAGRAM },
    { id: 10, name: "Patrícia Dantas", photo: "images/17.jpg", price: "R$ 90/h", modality: "Karatê", instagram: DEFAULT_INSTAGRAM },
    { id: 11, name: "Alex Costa", photo: "images/18.jpg", price: "R$ 135/h", modality: "MMA (Solo)", instagram: DEFAULT_INSTAGRAM },
    { id: 12, name: "Bianca Feitosa", photo: "images/19.jpg", price: "R$ 115/h", modality: "Jiu-Jitsu (Kids)", instagram: DEFAULT_INSTAGRAM },
    { id: 13, name: "Ramon Dias", photo: "images/20.jpg", price: "R$ 145/h", modality: "Kickboxing", instagram: DEFAULT_INSTAGRAM },
    { id: 14, name: "Vitória Gama", photo: "images/21.jpg", price: "R$ 105/h", modality: "Boxe (Mulheres)", instagram: DEFAULT_INSTAGRAM },
    { id: 15, name: "Léo Miranda", photo: "images/22.jpg", price: "R$ 165/h", modality: "Wrestling", instagram: DEFAULT_INSTAGRAM },
    { id: 16, name: "Tainá Rocha", photo: "images/23.jpg", price: "R$ 95/h", modality: "Muay Thai (Iniciantes)", instagram: DEFAULT_INSTAGRAM },
    { id: 17, name: "Sérgio Brito", photo: "images/24.jpg", price: "R$ 170/h", modality: "MMA (Condicionamento)", instagram: DEFAULT_INSTAGRAM },
    { id: 18, name: "Daniela Pires", photo: "images/25.jpg", price: "R$ 120/h", modality: "Jiu-Jitsu (Defesa Pessoal)", instagram: DEFAULT_INSTAGRAM },
    { id: 19, name: "Marcelo Souza", photo: "images/26.jpg", price: "R$ 140/h", modality: "Boxe/Muay Thai", instagram: DEFAULT_INSTAGRAM },
    { id: 20, name: "Elisa Gomes", photo: "images/27.jpg", price: "R$ 130/h", modality: "Kickboxing", instagram: DEFAULT_INSTAGRAM }
];

// PILAR 3: ACADEMIAS PARCEIRAS (10 ITENS)
const academiesData = [
    // 28.jpg a 37.jpg (10 fotos)
    { id: 1, name: "Elite Fight Center", photo: "images/28.jpg", city: "Goiânia", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Elite Fight Center" },
    { id: 2, name: "Tigres do Ringue", photo: "images/29.jpg", city: "Anápolis", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Tigres do Ringue" },
    { id: 3, name: "Força Total BJJ", photo: "images/30.jpg", city: "Aparecida", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Força Total BJJ" },
    { id: 4, name: "Boxe GO", photo: "images/31.jpg", city: "Rio Verde", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Boxe GO" },
    { id: 5, name: "MMA Revolution", photo: "images/32.jpg", city: "Goiânia (Setor Bueno)", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "MMA Revolution" },
    { id: 6, name: "Dojo Bushido", photo: "images/33.jpg", city: "Trindade", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Dojo Bushido" },
    { id: 7, name: "Gracie Central", photo: "images/34.jpg", city: "Caldas Novas", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Gracie Central" },
    { id: 8, name: "Viking Muay Thai", photo: "images/35.jpg", city: "Goiânia (Centro)", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Viking Muay Thai" },
    { id: 9, name: "Team Nogueira GO", photo: "images/36.jpg", city: "Luziânia", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Team Nogueira GO" },
    { id: 10, name: "Capoeira Raiz", photo: "images/37.jpg", city: "Itumbiara", instagram: DEFAULT_INSTAGRAM, whatsapp_msg: "Capoeira Raiz" }
];

// PILAR 4: WORKSHOPS/CURSOS (6 ITENS)
const workshopsData = [
    // 38.jpg a 43.jpg (6 fotos)
    { id: 1, name: "Seminário Avançado de Queda", instructor: "Mestre Rodrigo Minotauro", photo: "images/38.jpg", modality: "MMA", instagram: DEFAULT_INSTAGRAM, date: "10/06" },
    { id: 2, name: "Curso Tático de Boxe", instructor: "Ex-Campeão Popó Freitas", photo: "images/39.jpg", modality: "Boxe", instagram: DEFAULT_INSTAGRAM, date: "15/07" },
    { id: 3, name: "Defesa Pessoal para Mulheres", instructor: "Mestra Kyra Gracie", photo: "images/40.jpg", modality: "Jiu-Jitsu", instagram: DEFAULT_INSTAGRAM, date: "20/08" },
    { id: 4, name: "Clinica de Clinch", instructor: "Instrutor Anderson Silva", photo: "images/41.jpg", modality: "Muay Thai", instagram: DEFAULT_INSTAGRAM, date: "05/09" },
    { id: 5, name: "Jiu-Jitsu Sem Kimono", instructor: "Lutador Gordon Ryan", photo: "images/42.jpg", modality: "NOGI", instagram: DEFAULT_INSTAGRAM, date: "01/10" },
    { id: 6, name: "Mentalidade de Campeão", instructor: "Coach Bernardinho", photo: "images/43.jpg", modality: "Geral", instagram: DEFAULT_INSTAGRAM, date: "12/11" }
];

// PILAR 5: SHOPPING (10 ITENS)
const shoppingData = [
    // 44.jpg a 53.jpg (10 fotos)
    { id: 1, name: "Kimono Black Edição Limitada", photo: "images/44.jpg", price: "R$ 499,90", description: "Kimono de alta performance, 100% algodão trançado.", whatsapp_msg: "Kimono Black Edição Limitada" },
    { id: 2, name: "Luva de Boxe Profissional", photo: "images/45.jpg", price: "R$ 299,90", description: "12oz, couro sintético, máxima proteção.", whatsapp_msg: "Luva de Boxe Profissional 12oz" },
    { id: 3, name: "Shorts MMA Pro", photo: "images/46.jpg", price: "R$ 159,90", description: "Tecido elástico, resistente a rasgos.", whatsapp_msg: "Shorts MMA Pro" },
    { id: 4, name: "Protetor Bucal Gel", photo: "images/47.jpg", price: "R$ 59,90", description: "Moldável, para todas as modalidades.", whatsapp_msg: "Protetor Bucal Gel" },
    { id: 5, name: "Camiseta Dry Fit GF", photo: "images/48.jpg", price: "R$ 89,90", description: "Tecnologia Dry Fit, estampa exclusiva.", whatsapp_msg: "Camiseta Dry Fit GF" },
    { id: 6, name: "Faixa Preta Premium", photo: "images/49.jpg", price: "R$ 119,90", description: "Bordado personalizado opcional.", whatsapp_msg: "Faixa Preta Premium" },
    { id: 7, name: "Bandagem Elástica (Par)", photo: "images/50.jpg", price: "R$ 49,90", description: "4m de comprimento, diversas cores.", whatsapp_msg: "Bandagem Elástica (Par)" },
    { id: 8, name: "Rashguard Competição", photo: "images/51.jpg", price: "R$ 199,90", description: "Proteção UV e compressão ideal.", whatsapp_msg: "Rashguard Competição" },
    { id: 9, name: "Mochila Tática de Luta", photo: "images/52.jpg", price: "R$ 349,90", description: "Grande capacidade para Kimono e equipamentos.", whatsapp_msg: "Mochila Tática de Luta" },
    { id: 10, name: "Caneleira Muay Thai", photo: "images/53.jpg", price: "R$ 249,90", description: "Alta absorção de impacto, fecho em velcro.", whatsapp_msg: "Caneleira Muay Thai" }
];


// ==========================================================
// 3. FUNÇÕES DE RENDERIZAÇÃO ESPECÍFICAS (5 PILARES)
// ==========================================================

function renderEvents() {
    const grid = document.getElementById('eventos-grid');
    grid.innerHTML = '';
    
    eventsData.forEach(event => {
        grid.innerHTML += `
            <div class="event-card">
                <div class="event-header">
                    <h3>${event.name}</h3>
                    <span class="status-badge live">${event.date}</span>
                </div>
                <div class="event-fighters-images">
                    <img src="${event.fighterA_photo}" alt="${event.fighterA}" class="fighter-image-a">
                    <span class="vs-tag">VS</span>
                    <img src="${event.fighterB_photo}" alt="${event.fighterB}" class="fighter-image-b">
                </div>
                <div class="event-details-body">
                    <p><i class="fas fa-map-marker-alt"></i> Local: <strong>${event.city}/GO</strong></p>
                    <p class="insta-link"><i class="fab fa-instagram"></i> Organizador: <a href="${event.instagram}" target="_blank">@organizador</a></p>
                    <div class="event-cta">
                        <button class="cta-button primary-button" onclick="openWhatsApp('comprar_ingresso', '${event.whatsapp_msg}')">
                            COMPRAR INGRESSOS <i class="fab fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderPersonals() {
    const grid = document.getElementById('personais-grid');
    grid.innerHTML = '';
    
    personalsData.forEach(personal => {
        grid.innerHTML += `
            <div class="personal-card">
                <img src="${personal.photo}" alt="${personal.name}" class="personal-photo">
                <div class="personal-info">
                    <h4>${personal.name}</h4>
                    <p class="modality">${personal.modality}</p>
                    <div class="price-tag">${personal.price}</div>
                    <div class="academy-cta-group">
                        <a href="${personal.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i> INSTAGRAM</a>
                    </div>
                    <button class="cta-button primary-button" style="width: 100%; margin-top: 15px;" 
                        onclick="openWhatsApp('personal_contact', '${personal.name}')">
                        CONTATO WHATSAPP <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

function renderAcademies() {
    const grid = document.getElementById('academias-grid');
    grid.innerHTML = '';
    
    academiesData.forEach(academy => {
        grid.innerHTML += `
            <div class="academy-card">
                <img src="${academy.photo}" alt="${academy.name}" class="academy-photo">
                <div class="academy-info">
                    <h4>${academy.name}</h4>
                    <p><i class="fas fa-map-marker-alt"></i> ${academy.city}</p>
                    <div class="academy-cta-group">
                        <a href="${academy.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i> Instagram</a>
                        <a href="#" onclick="openWhatsApp('academia_contact', '${academy.whatsapp_msg}')" title="WhatsApp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderWorkshops() {
    const grid = document.getElementById('workshops-grid');
    grid.innerHTML = '';
    
    workshopsData.forEach(workshop => {
        grid.innerHTML += `
            <div class="workshop-card">
                <img src="${workshop.photo}" alt="${workshop.name}" class="workshop-photo">
                <div class="workshop-details">
                    <span class="status-badge" style="font-size: 0.8em; background-color: ${workshop.modality === 'MMA' ? 'var(--primary-color)' : 'var(--secondary-color)'}">${workshop.modality.toUpperCase()}</span>
                    <h4>${workshop.name}</h4>
                    <p class="instructor">Com: ${workshop.instructor}</p>
                    <p><i class="far fa-calendar-alt"></i> Data: <strong>${workshop.date}</strong></p>
                    <div class="academy-cta-group" style="border-top: none; padding-top: 10px;">
                        <a href="${workshop.instagram}" target="_blank" title="Instagram"><i class="fab fa-instagram"></i> Instagram</a>
                        <a href="#" onclick="openWhatsApp('info_workshop', '${workshop.name}')" title="Mais Info"><i class="fab fa-whatsapp"></i> Mais Info</a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderShopping() {
    const grid = document.getElementById('shopping-grid');
    grid.innerHTML = '';
    
    shoppingData.forEach(product => {
        grid.innerHTML += `
            <div class="shopping-item-card">
                <img src="${product.photo}" alt="${product.name}" class="product-photo">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">${product.price}</p>
                    <button class="cta-button primary-button" style="width: 100%;"
                        onclick="openWhatsApp('comprar_produto', '${product.whatsapp_msg}')">
                        COMPRE AGORA <i class="fab fa-whatsapp"></i>
                    </button>
                </div>
            </div>
        `;
    });
}


// ==========================================================
// 4. INICIALIZAÇÃO E EVENT LISTENERS
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

document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todas as seções dinâmicas
    renderEvents();
    renderPersonals();
    renderAcademies();
    renderWorkshops();
    renderShopping();

    // Adiciona o listener para o menu lateral em telas pequenas
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            closeNav();
        }
    });
});