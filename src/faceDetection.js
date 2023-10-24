const cv = require('opencv4nodejs');

const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
const webcam = new cv.VideoCapture(0); // 0 corresponds to the default webcam

while (true) {
  const frame = webcam.read();
  const grayImg = frame.bgrToGray();
  const { objects, numDetections } = classifier.detectMultiScale(grayImg);

  objects.forEach((rect, i) => {
    const point1 = new cv.Point2(rect.x, rect.y);
    const point2 = new cv.Point2(rect.x + rect.width, rect.y + rect.height);
    frame.drawRectangle(point1, point2, new cv.Vec(0, 255, 0), 2); // Green rectangle
  });

  cv.imshow('Face Detection', frame);
  const key = cv.waitKey(1);

  if (key === 27) {
    // Press 'ESC' to exit the loop
    break;
  }
}

webcam.release();
cv.destroyAllWindows();
   