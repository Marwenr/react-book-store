import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Layout";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
