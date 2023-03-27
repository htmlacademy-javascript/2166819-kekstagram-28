import {createPhotoDescriptionArray} from './data.js';
const generatedPictureByNumber = createPhotoDescriptionArray();
import {generatedPicture} from './miniature.js';
import {openBigPicture} from './modal.js';
openBigPicture (generatedPictureByNumber);
generatedPicture(generatedPictureByNumber);

import {openOverlay} from './form.js';
openOverlay();
