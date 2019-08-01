jQuery(document).ready(function($) {
  
  const dotsControlPanel = function(){

    const dots = document.querySelectorAll('.page-count__dot'),
        formattedDots = Array.prototype.slice.call(dots),
        blockNumber = document.getElementById('dotNumber');

    let dotsState = {
      dotOne: true,
      dotTwo: false,
      dotThree: false,
      dotFour: false,
    },
    dotsNumber = {
      dotOne: '01',
      dotTwo: '02',
      dotThree: '03',
      dotFour: '04',
    };

    const setDotsState = (currentDot) => {
      const dotId = currentDot;

      for (let key in dotsState) {

        if (dotsState[key]) {
            document.getElementById(key).className = 'page-count__dot';
          dotsState[key] = false;
        }
        dotsState[dotId] = true;
        document.getElementById(dotId).className += ' page-count__dot--active';
      }
    }

    const respondToScroll = () => {

      const offet = 300;
      const targets = {
        banner: $('#sectionBanner').offset().top - offet,
        productOne: $('#sectionProductOne').offset().top - offet,
        advantages: $('#sectionAdvantages').offset().top - offet,
        about: $('#sectionAbout').offset().top - offet
      };

      const switchDotsState = () => {
          let activeDot;
        if (window.pageYOffset >= targets.banner && window.pageYOffset <= targets.productOne) {
          activeDot = 'dotOne';
          blockNumber.innerText = dotsNumber[activeDot];
          setDotsState(activeDot);
        }else if (window.pageYOffset >= targets.productOne && window.pageYOffset <= targets.advantages) {
          activeDot = 'dotTwo';
          blockNumber.innerText = dotsNumber[activeDot];
          setDotsState(activeDot);
        }else if (window.pageYOffset >= targets.advantages && window.pageYOffset <= targets.about) {
          activeDot = 'dotThree';
          blockNumber.innerText = dotsNumber[activeDot];
          setDotsState(activeDot);
        }else if (window.pageYOffset >= targets.about) {
          activeDot = 'dotFour';
          blockNumber.innerText = dotsNumber[activeDot];
          setDotsState(activeDot);
        }

      }

      document.addEventListener('scroll', switchDotsState);

      //blockNumber.innerText = currentNumber;
    }

    const smoothScroll = (event, duration) => {

      let currentDot = event.target,
          currentNumber = dotsNumber[currentDot.id],
          target;

      switch (currentDot.id) {
        case 'dotOne':
          target = 'sectionBanner';
          break;
        case 'dotTwo':
          target = 'sectionProductOne';
          break;
        case 'dotThree':
          target = 'sectionAdvantages';
          break;
        case 'dotFour':
          target = 'sectionAbout';
          break;
        default:
          break;
      }

      let targetEl = document.getElementById(target),
        targetPosition = targetEl.offsetTop,
        startPosition = window.pageYOffset,
        startTime = null;

      function animate(currentTime) {

        if (startTime === null) startTime = currentTime
        let timePassed = currentTime - startTime,
          distance = targetPosition - startPosition,
          scrollTo = easeInOutQuad(timePassed, startPosition, distance, duration);

        window.scrollTo(0, scrollTo);
        if (duration > timePassed) requestAnimationFrame(animate)
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animate);
      

    }

    for (val in formattedDots) {
      formattedDots[val].addEventListener('click', (e) => smoothScroll(e, 2000))
    }

    respondToScroll();

  }
  

  dotsControlPanel();
  

});
