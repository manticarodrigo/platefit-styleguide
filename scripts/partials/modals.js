import MicroModal from 'micromodal';

const config = {
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
};

const onDomReady = () => {
  MicroModal.init(config);
  MicroModal.show('newsletter-modal', config);
};

export default {
  onDomReady,
}
