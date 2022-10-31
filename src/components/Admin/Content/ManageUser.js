import { useState } from "react";
import { Button } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import ModalCreateUser from "./ModelCreateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);

  return (
    <div className="manage-users-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <Button
            className="mt-3 mb-3"
            variant="info"
            onClick={() => setShowModelCreateUser(true)}
          >
            <FcPlus /> Add new user
          </Button>
        </div>
        <TableUser></TableUser>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
