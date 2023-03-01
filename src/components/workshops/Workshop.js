import { useState } from 'react';
import FormPopup from '../../components/workshops/FormPopup';
import './Workshop.css';

const Workshop = ({ img, title, date, place, duration, description, price }) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    setModal(false);
  };

  const setWorkshopContent = () => (
    <div className="workshop-content">
      <h1 className="workshop-title">{title}</h1>
      <h3 className="workshop-date">
        {date} - {place}
      </h3>
      <p className="workshop-description">{description}</p>
      <p className="workshop-duration">{duration}</p>
      <p className="workshop-info">{price}</p>
    </div>
  );

  return (
    <div className="workshop">
      <div className="workshop-image-wrapper" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="text-wrapper">
        {setWorkshopContent()}
        <button type="submit" className="idea-btn" onClick={() => setModal({ isOpen: true })}>
          REGISTER
        </button>
      </div>
      {
        <FormPopup
          modal={modal}
          setModal={setModal}
          handleSubmit={handleSubmit}
          workshopTitle={`${title}-${date}-${place}`}
        />
      }
    </div>
  );
};

export default Workshop;
