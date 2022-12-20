import React from "react";
import { Modal } from 'antd';

interface Props {
  isDetailMovieModal: boolean,
  setIsDetailMovieModal: (isDetailModal: boolean) => void;
}

const ModalInfo = ({ setIsDetailMovieModal, isDetailMovieModal }: Props) => {
  const handleCancel = () => {
    setIsDetailMovieModal(false);
  }

  return (
    <Modal centered title="Basic Modal" onCancel={handleCancel} visible={isDetailMovieModal}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
};

export default ModalInfo;