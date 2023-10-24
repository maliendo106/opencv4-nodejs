const cv = require('opencv4nodejs');
// const cv = require('@u4/opencv4nodejs');


// Ruta de la imagen que deseas cargar
const imagePath = '../images/foto.jpg'; // Reemplaza con la ruta real de tu imagen

// Carga la imagen
const image = cv.imread(imagePath);

// Muestra la imagen
cv.imshow('Imagen', image);
cv.waitKey();
cv.destroyAllWindows();
