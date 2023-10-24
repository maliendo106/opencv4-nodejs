const cv = require('opencv4nodejs');

const cap = new cv.VideoCapture(0);

(async () => {
  while (true) {
    const frame = cap.read();

    if (frame.empty) break;

    const grayImg = frame.cvtColor(cv.COLOR_BGR2GRAY);
    const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
    const { objects, numDetections } = classifier.detectMultiScale(grayImg);

    objects.forEach((rect, i) => {
      const point1 = new cv.Point(rect.x, rect.y);
      const point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
      frame.drawRectangle(point1, point2, new cv.Vec(255, 0, 0), 2);

      const textPosition = new cv.Point(rect.x, rect.y + rect.height + 30);
      frame.putText(
        'Marcos',
        textPosition,
        cv.FONT_HERSHEY_SIMPLEX,
        1,
        new cv.Vec(255, 0, 0),
        2
      );
    });

    cv.imshow('Video', frame);

    const key = cv.waitKey(1);
    if (key === 27) break;
  }

  cap.release();
  cv.destroyAllWindows();
})();
