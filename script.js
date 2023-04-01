// Skrypt dla podstrony "Lwy"
/*const lionImages = [
    'lion1.jpg',
    'lion2.jpg',
    'lion3.jpg'
];

const lionImage = document.querySelector('.lion-image');

lionImage.addEventListener('mouseenter', () => {
    const randomImage = lionImages[Math.floor(Math.random() * lionImages.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
});

// Skrypt dla podstrony "Słonie"
const chartData = [
    { country: 'Kenya', population: 35000 },
    { country: 'Tanzania', population: 24000 },
    { country: 'Poland', population: 1}];
*/
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('selected');
    });
});
