import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../features/AdminSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.users);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => dispatch(setUsers(data)));
  }, [dispatch]);

  return (
    <div className="md:px-24">
      <h1 className="text-center bg-black text-white px-5 py-3 font-bold mb-4 mt-9">User Management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
