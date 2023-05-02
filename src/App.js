import './App.css';
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Nadvar from './Components/Nadvar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDatailContainer from './Components/ItemDatailContainer'




function App() {


  
  return (
    <BrowserRouter>

      <Nadvar />

      <Routes>

        <Route path= '/' element= {<ItemListContainer />}/> 
        <Route path= '/marca/:marca'element= {<ItemListContainer/>}/>
        <Route pach= '/detail/:id' element={<ItemDatailContainer />}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;



