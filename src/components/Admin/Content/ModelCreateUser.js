import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { addNewUser } from "../../services/apiService";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };

  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const valideteEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handSubmitCreateUser = async () => {
    // validate
    const isValidEmail = valideteEmail(email);

    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }

    let data = await addNewUser(email, password, username, role, image);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal
        backdrop="static"
        show={show}
        onHide={handleClose}
        size="xl"
        className="model-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label for="role" className="form-label">
                Role
              </label>
              <select
                className="form-select"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="upload-img">
                <FcPlus /> Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="upload-img"
                onChange={(e) => handleUploadImage(e)}
              ></input>
            </div>
            <div className="col-md-12 image-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview img</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSubmitCreateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
