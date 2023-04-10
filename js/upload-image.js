const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadImage = document.querySelector('#upload-file');
const previewImage = document.querySelector('.img-upload__preview img');

const openUploadImage = () => {
  uploadImage.addEventListener('change', () => {
    const file = uploadImage.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      previewImage.src = URL.createObjectURL(file);
    }
  });
};

export {openUploadImage};
