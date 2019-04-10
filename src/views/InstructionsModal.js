import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const InstructionsModal = ({ show, handleClose }) => (
  <Modal
    show={show}
    onHide={handleClose}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Importing by Relative Path</Modal.Title>
    </Modal.Header>
    <Modal.Body id="modal-body">
      When we want to import files we need to specify the path to that file,
      relative to the file doing the importing.
      <br />
      <br />"<b className="modal-spacing"> filename</b> " refers to a file in
      the same directory.
      <br />"<b className="modal-spacing"> ./filename</b> " also refers to a
      file in the same directory.
      <br />"<b className="modal-spacing"> ../filename</b> " refers to a file
      one level up.
      <br />"<b className="modal-spacing"> ./directory/filename</b> " refers to
      a file inside a directory on this level.
      <br />"<b className="modal-spacing"> ../directory/filename</b> " refers to
      a file inside a directory one level up.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default InstructionsModal;
