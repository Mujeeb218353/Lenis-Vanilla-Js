import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// Initialize Lenis
const lenis = new Lenis({
  // orientation: 'horizontal',
  // infinite: true,
});

// Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);


document.querySelectorAll('.elem').forEach(elem => {
    let image = elem.querySelector('img');
    let tl = gsap.timeline()

    let xTransform = gsap.utils.random(-100, 100);

    tl.set(image, {
      transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
    }, "start")
    .to(image, {
      scale: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: image,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    }, "start")
    .to(elem, {
      xPercent: xTransform,
      ease: 'none',
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
});
