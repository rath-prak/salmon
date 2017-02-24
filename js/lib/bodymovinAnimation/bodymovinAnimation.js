import prototypeData from './data/prototypeData';

const bodymovinAnimation = {
  animPrototypeData: {
    container: document.getElementById('bodymovin-prototype'),
    renderer: 'svg',
    loop: 1,
    autoplay: false,
    animationData: prototypeData,
  },
}

export default bodymovinAnimation
