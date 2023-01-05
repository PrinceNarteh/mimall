import React from "react";
import Card from "../../components/Card";
import AdminLayout from "./AdminLayout";

const Home = ({ children }) => {
  return (
    <div>
      <AdminLayout>
        <Card />
      </AdminLayout>
    </div>
  );
};

export default Home;
