import React from 'react';
import { authStore } from '@MobxFarm/store';

const Dashboard = () => {
  return (
    <div>
      <button type="button" onClick={() => authStore.logOut()}>
        로그아웃
      </button>
    </div>
  );
};

export default Dashboard;
