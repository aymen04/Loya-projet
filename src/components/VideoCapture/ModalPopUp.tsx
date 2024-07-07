import React from 'react';
import { ObjectInfo,  } from './VideoCapture'; // Assurez-vous que RecyclingStep est importé
import './ModalPopUp.css'; // Assurez-vous que le style est correctement importé

interface ModalPopUpProps {
  isOpen: boolean;
  onClose: () => void;
  scanResult: ObjectInfo | null;
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({ isOpen, onClose, scanResult }) => {
  if (!scanResult) return null;

   return (
    <div className={`modal-popup ${isOpen ? '' : 'hidden'}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="reco-popup">
          {scanResult.imageUrl && (
            <img
              src={process.env.PUBLIC_URL + scanResult.imageUrl}
              alt="Scan Result"
              style={{ width: '37%', maxWidth: '400px', height: '12vh' }}
            />
          )}
          <span className="reco-text">
            <p>{scanResult.name}</p>
          </span>
          <div className="reco-group93">
            <div className="reco-group92">
              <img
                src="/external/poubelle2127-snhg.svg"
                alt="Poubelle2127"
                className="reco-poubelle"
              />
            </div>
          </div>
          <div className="reco-group113">
            <span className="reco-text02">
              <span>Où le jeter</span>
            </span>
          </div>
          <span className="reco-text04">
            <span>{scanResult.whereToThrow}</span>
          </span>
          <span className="reco-text06">
            <span>Nos recommandations + écolo<br></br></span>
            
          </span>
  
          <div>
  {/* Section for displaying alternatives */}
  <div className="alternatives-section">
    {scanResult.alternatives && scanResult.alternatives.length > 0 ? (
      scanResult.alternatives.map((alternative, index) => (
        <div key={index} className="alternative-item">
          <img
            src={process.env.PUBLIC_URL + alternative.imageUrl}
            alt={alternative.name}
            className="alternative-image"
          />
          <a href={alternative.url} target="_blank" rel="noopener noreferrer" className="alternative-link">
            {alternative.name}
          </a>
        </div>
      ))
    ) : (
      <p>Aucune alternative disponible</p>
    )}
  </div>

  {/* Section for displaying recycling process */}
  <div className="recycling-section">
    <h3>Le tri</h3>
    {scanResult.recyclingProcess && scanResult.recyclingProcess.length > 0 && (
      <>
        {scanResult.recyclingProcess.map((process, index) => (
          <div key={index} className="recycling-item">
            <img
              src={`/external/${process.image}`}
              alt={process.step}
              className="recycling-image"
            />
            <p className="recycling-text">{process.step}</p>
          </div>
        ))}
      </>
    )}
  </div>
</div>

          {/* Close button replaced with icon */}
          <i className="fa-solid fa-circle-xmark close-icon" style={{ color: '#055531' }} onClick={onClose}></i>
  
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
