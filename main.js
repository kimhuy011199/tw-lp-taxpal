import './style.css';
import appImage1 from './assets/images/app-1.png';
import appImage2 from './assets/images/app-2.png';
import appImage3 from './assets/images/app-3.png';
import appImage4 from './assets/images/app-4.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

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
