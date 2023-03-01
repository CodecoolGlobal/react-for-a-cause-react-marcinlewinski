import Contact from '../../components/contact/Contact';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const FormPopup = ({ modal, setModal, handleSubmit, workshopTitle }) => (
  <PureModal
    header="REGISTRATION FORM "
    isOpen={modal}
    closeButton="X"
    closeButtonPosition="header"
    onClose={() => {
      setModal(false);
      return true;
    }}
  >
    <Contact handleSubmit={handleSubmit} formpopup={true} workshopTitle={workshopTitle} />
  </PureModal>
);

export default FormPopup;
