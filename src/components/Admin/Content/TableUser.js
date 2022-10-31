import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllUsers } from "../../services/apiService";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUSers();
  }, []);

  const fetchListUSers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <Button variant="secondary">View</Button>
                    <Button variant="warning" className="mx-3">
                      Update
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}

          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={4}>Not found data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
