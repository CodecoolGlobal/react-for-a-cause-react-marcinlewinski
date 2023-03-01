import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const SubmissionMessage = ({ submitted, setSubmitted }) => (
  <PureModal
    header="REGISTRATION FORM "
    isOpen={submitted}
    closeButton="X"
    closeButtonPosition="header"
    onClose={() => {
      setSubmitted(false);
      return true;
    }}
  ></PureModal>
);

export default SubmissionMessage;
