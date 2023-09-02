import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import WebDevService from './pages/webDevService';
import NavBar from './components/navBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/webDev" element={<WebDevService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
