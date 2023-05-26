import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Nadvar";
import CustomProvider from "./Components/CustomProvider";
import Footer from "./Components/Footer";
import CarritoList from "./Components/CarritoList";
import Confirmar from "./Components/Confirmar";

export default function App() {
  return (
    <div className="container" id="flecha">    
      <BrowserRouter>
        <CustomProvider >
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/marca/:marca" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/CarritoList" element={<CarritoList />} />
            <Route path="/Confirmar" element={<Confirmar />} />
          </Routes>            
          <Footer />      
        </CustomProvider>
    </BrowserRouter>
    </div>
  );
}
