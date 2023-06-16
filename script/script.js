const news = [];

function AddNews(img, title, text, user, name, date) {
  this.img = img,
  this.title = title,
  this.text = text,
  this.user = user,
  this.name = name,
  this.date = date
}

function add(img, title, text, user, name, date) {
  news.push(new AddNews(img, title, text, user, name, date));
}

add('images/news1.png', 'SEE THE UNMATCHED BEAUTY OF THE GREAT.', 'Free directories: directories are perfect for customers that are searching for...', 'images/photo1.png', 'ALJA BRUN', '20 Jan 2020');
add('images/news2.png', 'EFFECTIVE ADVERTISING POINTERS.', 'Having a home based business is a wonderful asset to your life...', 'images/photo2.png', 'DOMINIC FREEMAN', '13 Dec 2019');
add('images/news3.png', 'HYPNOTIZE YOURSELF INTO THE GHOST.', 'There are many things that are important to catalog design...', 'images/photo3.png', 'ALICE WARD', '30 Nov 2019');
add('images/news1.png', 'SEE THE UNMATCHED BEAUTY OF THE GREAT.', 'Free directories: directories are perfect for customers that are searching for...', 'images/photo1.png', 'ALJA BRUN', '20 Jan 2020');
add('images/news2.png', 'EFFECTIVE ADVERTISING POINTERS.', 'Having a home based business is a wonderful asset to your life...', 'images/photo2.png', 'DOMINIC FREEMAN', '13 Dec 2019');
add('images/news3.png', 'HYPNOTIZE YOURSELF INTO THE GHOST.', 'There are many things that are important to catalog design...', 'images/photo3.png', 'ALICE WARD', '30 Nov 2019');
add('images/news1.png', 'SEE THE UNMATCHED BEAUTY OF THE GREAT.', '>Free directories: directories are perfect for customers that are searching for...', 'images/photo1.png', 'ALJA BRUN', '20 Jan 2020');

render = () => {
  const cards = document.querySelector('.news__cards--wrapper');
  cards.innerHTML = '';
  for(const item of news) {
    const card = document.createElement('div');
    card.classList.add('news__card');
    card.classList.add('swiper-slide');

    cards.append(card);

    const img = document.createElement('img');
    img.classList.add('news__img--main');
    img.src = item.img;

    const cardMain = document.createElement('div');
    cardMain.classList.add('news__card--main');

    const cardHeader = document.createElement('h3');
    cardHeader.classList.add('heading__h3');
    cardHeader.innerText = item.title;

    const cardText = document.createElement('p')
    cardText.classList.add('news__text');
    cardText.innerText = item.text;

    const cardUser = document.createElement('div');
    cardUser.classList.add('news__user');

    const cardUserPhoto = document.createElement('img');
    cardUserPhoto.classList.add('news__img');
    cardUserPhoto.src = item.user;

    const userInfo = document.createElement('div');
    userInfo.classList.add('news__user--info');

    const userInfoName = document.createElement('p');
    userInfoName.classList.add('news__user--info-name');
    userInfoName.innerText = item.name;
    const userInfoDate = document.createElement('p');
    userInfoDate.classList.add('news__user--info-date');
    userInfoDate.innerText = item.date;

    userInfo.append(userInfoName, userInfoDate);
    cardUser.append(cardUserPhoto, userInfo);
    cardMain.append(cardHeader, cardText, cardUser);
    card.append(img, cardMain);
  }
}

render();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  resistance:false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    stopOnLastSlide: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
});

const swiperHero = new Swiper('.swiper__hero', {
  direction: 'vertical',
  loop: true,
  clickable: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 6,    
  },
   
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 2000,
  //   pauseOnMouseEnter: true,
  //   stopOnLastSlide: false,
  // },
  slidesPerView: 1,
});  

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
let img = document.querySelectorAll(".myImg");

for(const item of img) {
    item.addEventListener('click', function () {
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modalImg.src = this.src;
  })
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", function (params) {
  if(params.target === modal) {
    closeModal();
  }
})

const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const swipers = document.querySelector('.swiper').swiper;

btnNext.addEventListener('click', function (params) {
  swipers.slideNext();
});

btnPrev.addEventListener('click', function (params) {
  swipers.slidePrev();
});

const burger = document.querySelector('.burger__menu');

burger.addEventListener('click', function (params) {
  const x = document.getElementById("nav__responsive");
  if (x.className === "nav nav_resp") {
    x.className += " responsive";
  } else {
    x.className = "nav nav_resp";
  }
});