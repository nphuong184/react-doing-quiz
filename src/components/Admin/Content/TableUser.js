import { Button, Table } from "react-bootstrap";

const TableUser = (props) => {
  // const [listUsers, setListUsers] = useState([]);s
  const { listUsers } = props;

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
              <td colSpan={5}>Not found data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableUser;
