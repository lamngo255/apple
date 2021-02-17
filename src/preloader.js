/*
 * image preloader
 */

/* eslint-disable global-require */
const images = [];

images.forEach((image) => {
  new Image().src = image;
});
