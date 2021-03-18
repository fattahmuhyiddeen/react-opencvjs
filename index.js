import injectScript from 'react-inject-script';

export default ({ onLoaded = () => null, onFailed = () => null, version = 'master' }) => {
  const OPENCV_URL = `https://docs.opencv.org/${version}/opencv.js`;
  injectScript('opencv-injected-js', OPENCV_URL).then(() => {
    console.log(`Success loading ${OPENCV_URL}`);
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      console.log(cv.getBuildInformation());
      onLoaded();
    }, 1000);
  })
    .catch(e => {
      // eslint-disable-next-line no-console
      console.log(`Failed to load ${OPENCV_URL}: ${e}`);
      onFailed();
    });
};