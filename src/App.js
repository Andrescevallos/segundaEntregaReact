import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Nadvar from './Components/Nadvar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer'




function App() {


  
  return (
    <BrowserRouter>

      <Nadvar />

      <Routes>

        <Route path= '/' element= {<ItemListContainer />}/> 
        <Route path= '/marca/:marca'element= {<ItemListContainer/>}/>
        <Route pach= '/daetail/:id' element={<ItemDetailContainer />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;



