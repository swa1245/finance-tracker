import React, { Suspense } from "react";
import DshboardPage from "./page";
import { BarLoader } from "react-spinners";

const Dashboardlayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold tracking-tighter text-gray-700 mb-5">
        Dashboard
      </h1>
      <Suspense
        fallback={
          <BarLoader className="mt-10 " width={"100%"} color="#3b82f6" />
        }
      >
        <DshboardPage />
      </Suspense>
    </div>
  );
};

export default Dashboardlayout;
