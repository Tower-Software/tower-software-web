import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import WebDevService from './pages/webDevService';
import NavBar from './components/navBar';
import { BASE_WEB_URL } from './config/app.config';

const App = () => {
  return (
    <div>
      <BrowserRouter basename={BASE_WEB_URL}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/webDev" element={<WebDevService />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
