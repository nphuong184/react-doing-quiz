import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import { getAllUsers } from "../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModelCreateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState();

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    console.log(res);
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

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
        <TableUser listUsers={listUsers}></TableUser>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
