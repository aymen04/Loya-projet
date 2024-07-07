// src/components/ModalPopUp.d.ts
interface ModalPopUpProps {
    isOpen: boolean;
    onClose: () => void;
    scanResult: {
      item: string;
      dispose: string;
    } | null;
  }
  
  declare const ModalPopUp: React.FC<ModalPopUpProps>;
  export default ModalPopUp;
  