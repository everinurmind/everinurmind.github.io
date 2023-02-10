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
    name: 'Uber Navigation',
    titleDescription: ['UBER', 'Lead Developer', '2018'],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@4x.svg',
    technologies: ['html', 'ruby', 'css', 'javaScript', 'bootstrap', 'gitHub'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 1,
    name: 'Facebook 360',
    titleDescription: ['FACEBOOK', 'Full Stack Dev', '2015'],
    mainDescription: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@3x.svg',
    technologies: ['html', 'ruby', 'css', 'javaScript', 'bootstrap', 'gitHub'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    titleDescription: ['FACEBOOK', 'Full Stack Dev', '2015'],
    mainDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@2x.svg',
    technologies: ['html', 'ruby', 'css', 'javaScript', 'bootstrap', 'gitHub'],
    liveVersion: '#',
    source: '#',
  },

  {
    id: 3,
    name: 'Tonic',
    titleDescription: ['CANOPY', 'Back End Dev', '2015'],
    mainDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'worksimg/Snapshoot Portfolio@1x.svg',
    technologies: ['html', 'ruby', 'css', 'javaScript', 'bootstrap', 'gitHub'],
    liveVersion: '#',
    source: '#',
  },
];

const displayModal = (id) => {
  const displayIdOf = cardsContainer.findIndex((card) => card.id === +id);
  worksContainer.style.display = 'flex';
  overlay.style.display = 'block';
  let html = '';

  html += `<div id="pop">
  <div class= "part1">
    <div class="main1">
        <h2 id="six">${cardsContainer[displayIdOf].name}</h2>
        <button class="close">
          <i class="las la-times"></i>
        </button>
    </div>
        <ul class="frame" id="frame">
          <li id="client">${cardsContainer[displayIdOf].titleDescription[0]}</li>
          <li id="dot"></li>
          <li id="role">${cardsContainer[displayIdOf].titleDescription[1]}</li>
          <li id="dot"></li>
          <li id="year">${cardsContainer[displayIdOf].titleDescription[2]}</li>
      </ul>
    <div class="image">  
      <img id="image" src="${cardsContainer[displayIdOf].image}">  
    </div>
  </div>
  
        
  
  <div class="part2">
    <div id="destext">
      <p>${cardsContainer[displayIdOf].description}</p>
    </div>
    <div id="column">     
        <div id="tags">
          <ul class="tags">
            <li id="pr">${cardsContainer[displayIdOf].technologies[0]}</li>
            <li id="pr">${cardsContainer[displayIdOf].technologies[2]}</li>
            <li id="pr">${cardsContainer[displayIdOf].technologies[3]}</li>
          </ul>
          <ul class="tags">
            <li id="pr">${cardsContainer[displayIdOf].technologies[5]}</li>
            <li id="pr">${cardsContainer[displayIdOf].technologies[1]}</li>
            <li id="pr">${cardsContainer[displayIdOf].technologies[4]}</li>
          </ul>
        </div>
          <div id="separation"></div>
          <div class="srcgit">
            <button id="actionbtn" class="action" href="${cardsContainer[displayIdOf].liveVersion}">See live
              <i class="las la-external-link-alt" id="share-sign"></i>
            </button>
            <button id="actionbtn" class="action" href="${cardsContainer[displayIdOf].source}">See source
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
                <li>${card.technologies[2]}</li>
                <li>${card.technologies[3]}</li>
                </ul>
                <button class="action" id="${card.id}">See Project</button>
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

// Contact Form JS

const contactForm = document.getElementById('contact-form');
const clientEmail = document.getElementById('email');

contactForm.addEventListener('submit', (e) => {
  const validationCheck = clientEmail.value.toLowerCase();
  if (clientEmail.value === validationCheck) {
    clientEmail.classList.remove('error');
    contactForm.removeChild(document.querySelector('.error-msg'));
    contactForm.removeChild(document.querySelector('.fixed-msg'));
    contactForm.submit();
  } else {
    e.preventDefault();
    clientEmail.classList.add('error');
    contactForm.insertAdjacentHTML('afterbegin',
      `<div class="error-msg">Please enter valid e-mail address, starting with lowercase<div class="fixed-msg">"${validationCheck}"</div></div>`);
  }
});

// Preserved data Section

const clientName = document.getElementById('name');
const clientMsg = document.getElementById('msg');
const inputFields = document.querySelectorAll('.input-field');

const userData = {
  name: JSON.parse(localStorage.getItem('userData')).name ? JSON.parse(localStorage.getItem('userData')).name : '',
  email: JSON.parse(localStorage.getItem('userData')).email ? JSON.parse(localStorage.getItem('userData')).email : '',
  message: JSON.parse(localStorage.getItem('userData')).message ? JSON.parse(localStorage.getItem('userData')).message : '',
};

const contactPart = () => {
  const savedData = JSON.parse(localStorage.getItem('userData'));
  clientName.value = savedData.name;
  clientEmail.value = savedData.email;
  clientMsg.value = savedData.message;
};

const setlocalStorage = (event, data) => {
  userData[data] = event.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
};

window.onload = contactPart;
inputFields.forEach((field) => field.addEventListener('keyup', (e) => {
  setlocalStorage(e, field.name);
}));