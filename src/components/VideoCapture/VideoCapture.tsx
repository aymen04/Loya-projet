// src/components/VideoCapture/VideoCapture.tsx
import React, { useEffect, useState, useRef } from 'react';
import { DecodedBarcodesResult } from 'dynamsoft-barcode-reader';
import {
  CameraEnhancer,
  CameraView,
} from 'dynamsoft-camera-enhancer';
import {
  CapturedResultReceiver,
  CaptureVisionRouter,
} from 'dynamsoft-capture-vision-router';
import { MultiFrameResultCrossFilter } from 'dynamsoft-utility';
import ModalPopUp from './ModalPopUp';
import './VideoCapture.css';
import { useNavigate } from 'react-router-dom';

 // Définir RecyclingProcess comme un tableau de chaînes

// Assurez-vous que RecyclingProcess est correctement défini
interface RecyclingProcess {
  env: any;
  step: string;
  image: string;
}

export interface ObjectInfo {
  id: string;
  name: string;
  whereToThrow: string;
  tips: string;
  alternatives: {
    imageUrl: string;
    name: string;
    url: string;
  }[];
  recyclingProcess: RecyclingProcess[];
  imageUrl: string;
}


const applyObjectFitCover = () => {
  const videoElement = document.querySelector("#root > div > div > div.div-ui-container > default-camera-view")
    ?.shadowRoot?.querySelector("div > div.dce-video-container > dce-component > div > video") as HTMLVideoElement | null;

  if (videoElement) {
    videoElement.style.objectFit = 'cover';
  } else {
    console.error('Video element not found');
  }
};

const VideoCapture: React.FC = () => {
  const [objectData, setObjectData] = useState<ObjectInfo[]>([]);
  const [scannedInfo, setScannedInfo] = useState<ObjectInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uiContainer = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const handleNav1Click = () => {
    navigate('/VideoCapture');
  };
  const handleNav2Click = () => {
    navigate('/Map');
  };
  const handleNav3Click = () => {
    navigate('/Dashboard');
  };

  useEffect(() => {
    fetch('/objectData.json')
      .then(response => response.json())
      .then(data => setObjectData(data))
      .catch(error => console.error('Error loading object data:', error));
  }, []);

  const init = async () => {
    try {
      const cameraView = await CameraView.createInstance();
      const cameraEnhancer = await CameraEnhancer.createInstance(cameraView);
      if (uiContainer.current) {
        uiContainer.current.innerText = '';
        uiContainer.current.append(cameraView.getUIElement());
      }

      const cvRouter = await CaptureVisionRouter.createInstance();
      cvRouter.setInput(cameraEnhancer);

      const resultReceiver = new CapturedResultReceiver();
      resultReceiver.onDecodedBarcodesReceived = (result: DecodedBarcodesResult) => {
        if (!result.barcodeResultItems.length) return;

        for (let item of result.barcodeResultItems) {
          const scannedObject = objectData.find(obj => obj.id === item.text);
          if (scannedObject) {
            setScannedInfo(scannedObject);
            setIsModalOpen(true); // Open the modal when a valid object is scanned
            break;
          }
        }
      };
      cvRouter.addResultReceiver(resultReceiver);

      const filter = new MultiFrameResultCrossFilter();
      filter.enableResultCrossVerification('barcode', true);
      filter.enableResultDeduplication('barcode', true);
      filter.setDuplicateForgetTime('barcode', 3000);
      await cvRouter.addResultFilter(filter);

      await cameraEnhancer.open();
      await cvRouter.startCapturing('ReadSingleBarcode');

      // Appliquer le style object-fit: cover à la vidéo après l'initialisation
      applyObjectFitCover();

      return { cameraView, cameraEnhancer, cvRouter };
    } catch (ex: any) {
      console.error(ex.message || ex);
      alert(ex.message || ex);
      throw ex;
    }
  };

  useEffect(() => {
    let pInit: Promise<any> | null = init();
    return () => {
      if (pInit) {
        pInit.then(({ cameraView, cameraEnhancer, cvRouter }) => {
          cvRouter.dispose();
          cameraEnhancer.dispose();
          cameraView.dispose();
        });
      }
    };
  }, [objectData]);

  const closeModal = () => {
    setIsModalOpen(false);
    setScannedInfo(null); // Reset scannedInfo when closing modal
  };

  return (
    <div className="video-capture-container">
      <p className="title">Scannes ton objet !</p>
      <div ref={uiContainer} className="div-ui-container"></div>
      <ModalPopUp isOpen={isModalOpen} onClose={closeModal} scanResult={scannedInfo} />
      <div className="dashboard-nav">
        <img
          alt="Rectangle21943"
          src="/external/rectangle21943-s4nj.svg"
          className="dashboard-rectangle2"
        />
        <div className="dashboard-frame15">
          <button onClick={handleNav3Click} className='dashboard-nav2-button'>
            <img
              alt="Nav1998"
              src="/external/nav1998-qapr.svg"
              className="dashboard-nav1"
            />
          </button>
          <button onClick={handleNav2Click} className='dashboard-nav2-button'>
            <img
              alt="Nav2018"
              src="/external/nav2018-4z0m.svg"
              className="dashboard-nav2"
            />
          </button>
          <button onClick={handleNav1Click} className="dashboard-nav1-button">
            <img
              alt="Nav2018"
              src="/external/scanver.png"
              className="dashboard-nav3"
            />
          </button>
          <img
            alt="Nav2018"
            src="/external/nav2018-315c.svg"
            className="dashboard-nav4"
          />
          <div className="dashboard-nav5">
            <img
              alt="BoucheI2018"
              src="/external/bouchei2018-fmia.svg"
              className="dashboard-bouche1"
            />
            <img
              alt="VisageI2018"
              src="/external/visagei2018-h3lr.svg"
              className="dashboard-visage1"
            />
            <img
              alt="YeuxI2018"
              src="/external/yeuxi2018-60ou.svg"
              className="dashboard-yeux1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCapture;

