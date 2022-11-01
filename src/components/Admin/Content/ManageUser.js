import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import { getAllUsers } from "../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModelCreateUser";
import ModalUpdateUser from "./ModelUpdateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModelCreateUser, setShowModelCreateUser] = useState(false);
  const [showModelUpdateUser, setShowModelUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState();
  const [dataUpdate, setDataUpdate] = useState();

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdateUser = (user) => {
    setShowModelUpdateUser(true);
    setDataUpdate(user);
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
        <TableUser
          listUsers={listUsers}
          handleClickBtnUpdateUser={handleClickBtnUpdateUser}
        ></TableUser>
        <ModalCreateUser
          show={showModelCreateUser}
          setShow={setShowModelCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModelUpdateUser}
          setShow={setShowModelUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
