import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FcPlus } from "react-icons/fc";
import {
  getAllUsers,
  getListUsersWithPaginate,
} from "../../services/apiService";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

  const [listUsers, setListUsers] = useState();

  const [dataUpdate, setDataUpdate] = useState();

  const [showModalDeleteUser, setShowModalDeleteUser] = useState();

  const [dataDelete, setDataDelete] = useState();

  const [pageCount, setPageCount] = useState(0);

  const LIMIT_USER = 9;

  useEffect(() => {
    fetchListUsersWithPaginate(1);
    // fetchListUsers;
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getListUsersWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log(res.DT);
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    } else {
      console.log("sai");
    }
  };

  const handleClickBtnUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  const handleClickBtnDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  return (
    <div className="manage-users-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <Button
            className="mt-3 mb-3"
            variant="info"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new user
          </Button>
        </div>
        <TableUser
          listUsers={listUsers}
          handleClickBtnUpdateUser={handleClickBtnUpdateUser}
          handleClickBtnDeleteUser={handleClickBtnDeleteUser}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          pageCount={pageCount}
        ></TableUser>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
