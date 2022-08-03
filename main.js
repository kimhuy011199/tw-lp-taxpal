import './style.css';
import appImage1 from './assets/images/app-1.png';
import appImage2 from './assets/images/app-2.png';
import appImage3 from './assets/images/app-3.png';
import appImage4 from './assets/images/app-4.png';

const $appsList = document.querySelectorAll('.app-item');
const $appImg = document.querySelector('.app-img');

const onChange = (e) => {
  $appsList.forEach(function (item) {
    item.lastElementChild.classList.remove('active');
  });
  const $currentNode = e.target.closest('li');
  $currentNode.lastElementChild.classList.add('active');
  switch ($currentNode.id) {
    case 'app-1':
      $appImg.src = appImage1;
      break;
    case 'app-2':
      $appImg.src = appImage2;
      break;
    case 'app-3':
      $appImg.src = appImage3;
      break;
    case 'app-4':
      $appImg.src = appImage4;
      break;
    default:
      $appImg.src = appImage1;
  }
};

$appsList.forEach(function (item) {
  item.addEventListener('click', onChange);
});

const $navBtn = document.querySelector('#nav-btn');
const $backdrop = document.querySelector('.backdrop');
const $navList = document.querySelector('.nav-list-container');
$navBtn.addEventListener('click', function (e) {
  $backdrop.classList.remove('hidden');
  $navList.classList.remove('hidden');
});
$backdrop.addEventListener('click', function (e) {
  $backdrop.classList.add('hidden');
  $navList.classList.add('hidden');
});
