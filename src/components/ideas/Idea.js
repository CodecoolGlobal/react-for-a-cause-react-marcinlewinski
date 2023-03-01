import './Idea.css';
import { useState } from 'react';
import ModalDiscoverMore from '../modal/ModalDiscoverMore';

const Idea = ({ img, title, description, plasticWaste }) => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="idea">
      <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="idea-content">
        <h1 className="idea-title">{title}</h1>
        <p className="idea-description">{description}</p>
        <button className="idea-btn" onClick={() => setModal(true)}>
          Discover more!
        </button>
        <ModalDiscoverMore open={modal} close={closeModal} data={plasticWaste} />
      </div>
    </div>
  );
};

export default Idea;
