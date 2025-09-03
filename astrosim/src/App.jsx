import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Error } from "./pages/error.jsx";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App
