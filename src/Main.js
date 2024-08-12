import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import ScoreboardPage from './pages/ScoreBoardPage';
import LogPage from './pages/LogPage';
// import NotFoundPage from './pages/NotFoundPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="scoreboard/:mat" element={<ScoreboardPage />} />
          <Route path="log" element={<LogPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
