import React from "react";
import { Outlet } from "react-router-dom";
import Selector from "./Selector";

function AdminPage() {
  return (
    <div>
      <Selector />
      <Outlet />
    </div>
  );
}

export default AdminPage;
