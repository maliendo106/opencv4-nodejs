const cv = require('opencv4nodejs');

while (true) {
  const image = cv.imread("../images/messi.jpg");
  const resizedImage = image.resize(new cv.Size(800, 600));

  const img_gray = resizedImage.bgrToGray(); 
//   const img_gray = resizedImage;
  const imgBlurred = img_gray.gaussianBlur(new cv.Size(21, 21), 0);

  const img_canny = img_gray.canny(100, 200);
  const img_extra_blur_canny = img_gray
    .gaussianBlur(new cv.Size(7, 7), 0)
    .canny(100, 200);

  cv.imshow('Imagen Original', img_gray);
  cv.imshow('Smoothing', imgBlurred);
  cv.imshow('Canny', img_canny);
  cv.imshow('Extra Blur Canny', img_extra_blur_canny);

  const key = cv.waitKey(1);

  if (key === 27) {
    // Press 'ESC' to exit the loop
    break;
  }
}

cv.destroyAllWindows();