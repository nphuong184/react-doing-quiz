import { Button } from "react-bootstrap";
import ModalCreateUser from "./ModelCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = () => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);

  return (
    <div className="manage-users-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <div>
          <Button variant="info" onClick={() => setShowModelCreateUser(true)}>
            <FcPlus /> Add new user
          </Button>
        </div>
        <div>Table Users</div>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
