import React from "react";
import ProductManagement from "../components/ProductManagement ";
import UserManagement from "../components/UserManagement ";

const AdminPanel = () => {
  return (
    <div>
      <h1 className="text-center py-5 font-bold">Admin Panel</h1>
      <ProductManagement />
      <UserManagement />
    </div>
  );
};

export default AdminPanel;
