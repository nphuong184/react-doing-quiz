import { Button } from "react-bootstrap";
import ModalCreateUser from "./ModelCreateUser";

const ManageUser = () => {
  return (
    <div className="manage-users-container">
      <div className="title">ManageUser</div>
      <div className="users-content">
        <div>
          <Button>Add new user</Button>
        </div>
        <div>Table Users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
