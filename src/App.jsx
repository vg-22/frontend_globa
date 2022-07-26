import React from 'react';
import { Route, Routes } from 'react-router-dom';

import UserPage from './pages/UserPage/UserPage';
import Layout from './components/Layout/Layout';

import Main from './components/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="users/:id" element={<UserPage />} />
      </Route>
    </Routes>

  );
}

export default App;
