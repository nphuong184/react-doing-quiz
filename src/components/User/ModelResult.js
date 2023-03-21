import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModelResult = (props) => {
  const { show, setShow, dataModelResult } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('aaaa',dataModelResult);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>Total Question : <b>{dataModelResult.countTotal}</b></div>
            <div>Total Correct Question : <b>{dataModelResult.countCorrect}</b></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Show answers
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelResult;
