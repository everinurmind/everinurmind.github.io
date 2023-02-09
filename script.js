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

const cardsContainer = [

  {
    id: 0,
    name: 'Tonic',
    titleDescription: [
      'CANOPY',
      'Back End Dev',
      '2015',
    ],
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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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