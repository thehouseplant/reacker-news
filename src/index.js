import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Ask from './routes/Ask';
import Jobs from './routes/Jobs';
import New from './routes/New';
import Show from './routes/Show';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/new" element={<New />} />
      <Route path="/show" element={<Show />} />
    </Routes>
  </BrowserRouter>
);