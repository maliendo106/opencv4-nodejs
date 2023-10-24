const cv = require('opencv4nodejs');

// Leer una imagen desde un archivo local
const image = cv.imread('../images/foto.jpg');

// Convertir la imagen a escala de grises
const gray = image.cvtColor(cv.COLOR_BGR2GRAY);

// Detectar los bordes de la imagen usando el algoritmo Canny
const edges = gray.canny(50, 150);

// Mostrar la imagen 
cv.imshow('Original', image);
cv.imshow('Edges', edges);

cv.waitKey();