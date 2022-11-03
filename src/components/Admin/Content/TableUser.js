import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const TableUser = (props) => {
  const { listUsers, pageCount } = props;
  // const listUsers = props.listUsers;

  const handlePageClick = (event) => {
    props.fetchListUsersWithPaginate(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
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
                    <Button
                      variant="warning"
                      className="mx-3"
                      onClick={() => props.handleClickBtnUpdateUser(item)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => props.handleClickBtnDeleteUser(item)}
                    >
                      Delete
                    </Button>
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
        <div className="container-paginate d-flex justify-content-center">
          <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </Table>
    </>
  );
};

export default TableUser;
