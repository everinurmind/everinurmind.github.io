// Navigation Menu JS

const hamburger = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navigationMenu.classList.toggle('show');
  navigationMenu.classList.toggle('change');
  logo.classList.toggle('change');
});

document.querySelectorAll('.navigation').forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navigationMenu.classList.remove('show');
  navigationMenu.classList.remove('change');
  logo.classList.remove('change');
}));

// Works Section JS

const worksContainer = document.querySelector('.works-container');
const containerProject = document.querySelector('#works');
const overlay = document.querySelector('.overlay');

const cardsContainer = [

  {
    id: 0,
    name: 'Tonic',
    titleDescription: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@2x.png',
    technologies: [
      'html',
      'css',
      'javaScript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 1,
    name: 'Multi-Post Stories',
    titleDescription: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    image: 'worksimg/Snapshoot Portfolio@2x (1).png',
    technologies: [
      'html',
      'css',
      'javaScript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 2,
    name: 'Tonic',
    titleDescription: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@2x (2).png',
    technologies: [
      'html',
      'css',
      'javaScript'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 3,
    name: 'Multi-Post Stories',
    titleDescription: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@2x (3).png',
    technologies: [
      'html',
      'css',
      'javaScript'],
    liveVersion: '#',
    source: '#',
  },
];

const displayModal = (id) => {
  const displayIdOf = cardsContainer.findIndex((card) => card.id === +id);
  worksContainer.style.display = 'flex';
  overlay.style.display = 'block';
  let html = '';

  html += `
  <div calss= "works-card">
  <div class= "top">
    <div class="main1">
        <h2 id="six">${cardsContainer[displayIdOf].name}</h2>
        <button class="close">
          <i class="las la-times"></i>
        </button>
    </div>
        <ul class="frame">
          <li id="client">${cardsContainer[displayIdOf].titleDescription[0]}</li>
          <li id="dot"></li>
          <li id="role">${cardsContainer[displayIdOf].titleDescription[1]}</li>
          <li id="dot"></li>
          <li id="year">${cardsContainer[displayIdOf].titleDescription[2]}</li>
      </ul>
  </div>
      <img class="image" src="${cardsContainer[displayIdOf].image}">
      <div class='top'>
        <div class=desc>
          <p class="project-description">${cardsContainer[displayIdOf].description}</p>
        </div>
        <div class='bottom'>
          <ul class="tags">
            <li class="language">${cardsContainer[displayIdOf].technologies[0]}</li>
            <li class="language">${cardsContainer[displayIdOf].technologies[1]}</li>
            <li class="language">${cardsContainer[displayIdOf].technologies[2]}</li>
          </ul>
  
          <div class="action">
            <button class="action">
              <a class="btn-seeLive" href="${cardsContainer[displayIdOf].liveVersion}"> See live </a>
              <i class="las la-external-link-alt" id="share-sign"></i>
            </button>
            <button class="action">
              <a class="btn-seeSource" href="${cardsContainer[displayIdOf].source}">See source </a>
              <i class="lab la-github" id="git-sign"></i>
            </button>
          </div>
        </div>
      </div>
      </div>`;

  worksContainer.innerHTML = html;

  const BtnClose = document.querySelector('.close');

  BtnClose.addEventListener('click', (e) => {
    e.preventDefault();
    worksContainer.style.display = 'none';
    overlay.style.display = 'none';
  });
};

cardsContainer.forEach((card) => {
  const boxCard = document.createElement('div');
  boxCard.className = 'box-card';
  const html = `<section id="works">
  <div class="works-container">
    <div class="works-card">
  <img class="image" src="${card.image}" alt=${card.name}>
    <div class="info-block">
      <div class="top">
              <h2 id="six">${card.name}</h2>
              <ul class="frame">
                <li id="client">${card.titleDescription[0]}</li>
                <li id="dot"> </li>
                <li id="role">${card.titleDescription[1]}</li>
                <li id="dot"> </li>
                <li id="year">${card.titleDescription[2]}</li>
              </ul>
        </div>
                <p>${card.mainDescription}</p>
          <div class="bottom">
                <ul class="tags">
                <li>${card.technologies[0]}</li>
                <li>${card.technologies[1]}</li>
                <li>${card.technologies[2]}</li></ul>
                <button class="action" id="${card.id}">See Project</button>
          </div>
        </div>
      </div>
  </div>
</section>`;
  containerProject.insertAdjacentHTML('afterbegin', html);
});

const actbtn = document.querySelectorAll('.action');
actbtn.forEach((action) => action.addEventListener('click', (e) => {
  const { id } = e.target;
  displayModal(id);
}));