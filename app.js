const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// tamanho, duração, tempo para cada linha
tl.to('.text', {y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1}, '-=1.5' );
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')
// y = tamanho
// duration = tempo
// stagger = tempo para cada linha
// delay = delay
// , '-=1' = começar 1 segundo antes