import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import WebDevService from './pages/webDevService';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/webDev" element={<WebDevService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
