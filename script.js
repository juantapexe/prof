
const card = document.querySelector('.profile');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

document.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

document.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});
