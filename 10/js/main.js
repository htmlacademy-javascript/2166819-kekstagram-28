//import {createPhotoDescriptionArray} from './data.js';
//import {generatedPicture} from './miniature.js';
//import {openBigPicture} from './modal.js';
import './validatetag.js';
import {setUserFormSubmit} from './validatetag.js';
import {openOverlay, closeOverlay} from './form.js';
import {getData} from './api.js';
//const generatedPictureByNumber = createPhotoDescriptionArray();
getData();
openOverlay();

setUserFormSubmit(closeOverlay);
