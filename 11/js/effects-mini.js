const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview  img');
const miniEffectsPreview = document.querySelectorAll('.effects__preview');

const effectsMini = () => {
  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    preview.src = URL.createObjectURL(file);
    miniEffectsPreview.forEach((item) => {
      item.style.backgroundImage = `URL(${preview.src})`;
    });
  });
};

export {effectsMini};
