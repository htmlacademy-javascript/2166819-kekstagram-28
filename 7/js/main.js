import {createPhotoDescriptionArray} from './data.js';
const generatedPictureByNumber = createPhotoDescriptionArray();
import {generatedPicture} from './miniature.js';
generatedPicture(generatedPictureByNumber);

//import './modal.js';
import {openBigPicture} from './modal.js';
openBigPicture (generatedPictureByNumber);

