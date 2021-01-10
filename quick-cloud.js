// Fix Header 
const header = document.getElementsByTagName('header');
window.addEventListener('scroll', () => {
  if(scrollY > 100) {
    header[0].classList.add('fixed');
  }
  else 
    header[0].classList.remove('fixed');
})

// Welcome Slide
const welcomeCon = document.getElementsByClassName('welcome-con');
const welcomeSlide = document.getElementsByClassName('welcome-slide');
const welcomePrev = document.getElementsByClassName('welcome-prev');
const welcomeNext = document.getElementsByClassName('welcome-next');

let currentPage = 1;

const firstSlide = welcomeSlide[0];
const lastSlide = welcomeSlide[welcomeSlide.length-1];

const cloneFirst = firstSlide.cloneNode(true);
const cloneLast = lastSlide.cloneNode(true);
welcomeCon[0].appendChild(cloneFirst);
welcomeCon[0].insertBefore(cloneLast, firstSlide);

// Welcome - Horizontalize Slide 
for( let i = 0; i < welcomeSlide.length; i++ ) {
  welcomeSlide[i].style.left = i*100 + '%';
}

const welcomeMove = (idx) => {
  welcomeCon[0].style.transform = 'translateX('+ idx * -100 +'%)';
}

// Welcome - Slide Control Handler
welcomePrev[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '0.3s';
  welcomeMove( currentPage - 1 );
  currentPage--;
  if( currentPage == 0 ) {
    welcomeMove(0)
    currentPage = 0
    setTimeout(()=> {
      welcomeCon[0].style.transition = '0s';
      welcomeMove( welcomeSlide.length-2 )
      currentPage = welcomeSlide.length-2;
    }, 301)
  }
})
welcomeNext[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '0.3s';
  welcomeMove(currentPage + 1);
  currentPage++;
  if(currentPage==welcomeSlide.length-1) {
    setTimeout(()=> {
      welcomeCon[0].style.transition = '0s';
      welcomeMove(1)
      currentPage = 1;
    }, 301)
  }
})
welcomeMove(1)

// History Slide 
const historySlide = document.getElementsByClassName('history-slide');
const historySlideItem = document.getElementsByClassName('history-slide-item')
const historyPrev = document.getElementsByClassName('history-slide-prev');
const historyNext = document.getElementsByClassName('history-slide-next');
let currentIndex = 0;
window.addEventListener('load', ()=> {
  historyPrev[0].classList.add('disabled');
})
const historyMove = (idx) => {
  historySlide[0].style.transform = 'translateX('+ idx * -12.5 +'%)';
}
historyPrev[0].addEventListener('click', ()=> {
  if(currentIndex == 1) { historyPrev[0].classList.add('disabled'); }
  if(currentIndex > 0) {
    historyMove( currentIndex - 1 );
    currentIndex--;
    historyNext[0].classList.remove('disabled');
  }
})
historyNext[0].addEventListener('click', ()=> {
  if(currentIndex == (historySlideItem.length/2)-1 ) { historyNext[0].classList.add('disabled'); }
  if(currentIndex<historySlideItem.length/2) {
    historyMove( currentIndex + 1 );
    currentIndex++;
    historyPrev[0].classList.remove('disabled')
  }
})
historyMove(currentIndex)

// Subscribe Tab 
const subscribeTabs = document.getElementsByClassName('subscribe-tab');
const subscribeDuration = document.getElementsByClassName('subscribe-duration');
const subscribeCardCon = document.getElementsByClassName('subscribe-card-con');

const shiftSubscribeCon = (idx) => {
  subscribeCardCon[0].style.transform = 'translateX(' + idx * -50 + '%)';
}

for(let i = 0; i < subscribeTabs.length; i++) {
  subscribeTabs[i].addEventListener('click', ()=> {
    for(let j = 0; j < subscribeTabs.length; j++) {
      subscribeTabs[j].classList.remove('enabled');
      subscribeTabs[j].classList.add('disabled');
      subscribeDuration[i].classList.remove('show');
    }
    subscribeTabs[i].classList.add('enabled');
    subscribeTabs[i].classList.remove('disabled')
    subscribeDuration[i].classList.add('show');
    shiftSubscribeCon(i);
  })
}


