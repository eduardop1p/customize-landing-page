import { Dispatch, SetStateAction } from 'react';

import { ModalContainer } from './styled';
import { ImgProps } from '.';

interface Props {
  imgObj: ImgProps;
  controlModal: {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
  };
}

export const Modal = ({ imgObj, controlModal }: Props) => {
  const { showModal, setShowModal } = controlModal;

  return (
    <ModalContainer
      data-show-modal={showModal}
      onClick={() => setShowModal(false)}
    >
      <img {...imgObj} onClick={event => event.stopPropagation()} />
    </ModalContainer>
  );
};
