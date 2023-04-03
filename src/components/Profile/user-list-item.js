import React from "react";
const userListItem = ({ user }) => {
    return (
        <li className="list-group-item">
        <div className="row">

            <div className="col-3 d-flex justify-content-center">
                    {user.role === 'MEMBER' && <div><i className="d-flex justify-content-center bi bi-person-badge mb-0"></i><div>MEMBER</div></div>}
                    {user.role === 'ADMIN' && <div><i className="d-flex justify-content-center bi bi-person-gear"></i><div>ADMIN</div></div>}
            </div>

            <div className="col-7">
                <div className="fw-bold">{user.userName}</div>
                <div>{user.email}</div>
            </div>

            <div className="col-2 d-flex justify-content-center my-auto">
                <button className="btn btn-danger rounded-pill float-end">Delete</button>
            </div>

        </div>
        </li>
    )
}
export default userListItem;
