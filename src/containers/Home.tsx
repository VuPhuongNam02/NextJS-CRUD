import StudentForm from "@/components/StudentForm";
import StudentTable from "@/components/StudentTable";
import React from "react";

function Home() {
  return (
    <div className="grid place-items-center w-full h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-8/12 h-[80vh] bg-[#fff] rounded-xl">
        <StudentForm />
        <StudentTable />
      </div>
    </div>
  );
}

export default Home;
