import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

import {
  CloseButton,
  ModalHeader,
  SuccessModalContainer,
  SuccessModalHeaderText,
  SuccessModalLayout,
  SuccessModalText,
} from "./styles";
interface I_SuccessModal {
  headerText: string;
  messageText?: string;
  closeModal: any;
  forceClose?: any;
  children?: any;
  closeBtn?: boolean;
  bgColor?: string;
  overflow?: boolean;
}

const CustomModal = ({
  headerText,
  messageText,
  closeModal,
  children,
  forceClose = false,
  closeBtn,
  bgColor,
  overflow = true,
}: I_SuccessModal) => {
  const [showModal, setShowModal] = useState(true);
  const handleClickOutside = (e: any) => {
    if (!forceClose) {
      if (e.target === e.currentTarget) {
        e.stopPropagation();
        closeModal();
        setShowModal(false);
      }
    }
  };
  useEffect(() => {
    if (overflow) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, []);
  return (
    <SuccessModalLayout onMouseDown={handleClickOutside}>
      <SuccessModalContainer bgColor={bgColor}>
        <ModalHeader bgColor={bgColor}>
          <SuccessModalHeaderText>{headerText}</SuccessModalHeaderText>
          {!closeBtn && (
            <CloseButton>
              <RiCloseFill
                size={20}
                color="#fff"
                onClick={closeModal}
              ></RiCloseFill>
            </CloseButton>
          )}
        </ModalHeader>
        <SuccessModalText>{children}</SuccessModalText>
      </SuccessModalContainer>
    </SuccessModalLayout>
  );
};

export default CustomModal;
