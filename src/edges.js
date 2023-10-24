const cv = require('opencv4nodejs');

const webcam = new cv.VideoCapture(0); // 0 corresponds to the default webcam

while (true) {
  const frame = webcam.read();
  const grayImg = frame.bgrToGray();

  const edges = grayImg.canny(50,150);

  cv.imshow('Face Detection', edges);
  const key = cv.waitKey(1);

  if (key === 27) {
    // Press 'ESC' to exit the loop
    break;
  }
}

webcam.release();
cv.destroyAllWindows();