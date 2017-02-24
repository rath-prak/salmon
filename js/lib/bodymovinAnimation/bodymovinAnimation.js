import prototypeData from './data/prototypeData';
import uiData from './data/uiData';

const bodymovinAnimation = {
  animPrototypeData: {
    container: document.getElementById('bodymovin-prototype'),
    renderer: 'svg',
    loop: 1,
    autoplay: false,
    animationData: prototypeData,
  },
  uiData: {
    container: document.getElementById('bodymovin-ui'),
    renderer: 'svg',
    loop: 1,
    autoplay: false,
    animationData: uiData,
  },

}

export default bodymovinAnimation
