// import Cronometro from './components/Cronometro'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<itemListContainer saludo="Nuestros Productos" />} />
          <Route path="/category/:idCategory" element={<itemListContainer saludo="Nuestros Productos" />} />
          <Route path="/detail/:idProduct" element={<itemDetailContainer />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
