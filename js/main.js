import {createPhotoDescriptionArray} from './data.js';
import {generatedPicture} from './miniature.js';
import {openBigPicture} from './modal.js';
import {openOverlay} from './form.js';
const generatedPictureByNumber = createPhotoDescriptionArray();
openBigPicture (generatedPictureByNumber);
generatedPicture(generatedPictureByNumber);
openOverlay();
