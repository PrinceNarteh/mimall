import React from "react";
import Card from "../../components/Card";
import AdminLayout from "./AdminLayout";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

const Home = ({ children }) => {
  return (
    <div>
      <AdminLayout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Card heading="Total Sells">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">$3799.00</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineRise className="text-green-500 font-bold" /> 37.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
          <Card heading="Average Order Value">
            <div className="flex justify-between gap-5 items-center">
              <h3 className="text-xl font-extrabold">$279.00</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineFall className="text-red-500 font-bold" /> 12.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
          <Card heading="Total Orders">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">600</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-2xl gap-2">
                  <AiOutlineRise className="text-green-500 font-bold" /> 21.5%
                </div>
                <p className="text-xs">Compared to previous month</p>
              </div>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Home;
