const slider = document.querySelector('.slider');

const imagesFolder = './SliderAssets'; // Update with your folder path
const imageExtension = 'jpeg'; // Update with your image extension

fetch(imagesFolder)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');
    const files = html.querySelectorAll('a');

    const imageFiles = Array.from(files)
      .filter(file => file.href.endsWith(imageExtension))
      .map(file => file.href);

    startSlider(imageFiles);
  })
  .catch(error => {
    console.error('Error fetching images:', error);
  });

function startSlider(images) {
  let index = 0;

  setInterval(() => {
    slider.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }, 600);
}
