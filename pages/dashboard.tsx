import { authStore } from "@/src/mobx/store";
import React from "react";

function Dashboard() {
  return (
    <div>
      <button onClick={() => authStore.logOut()}>로그아웃</button>
    </div>
  );
}

export default Dashboard;
