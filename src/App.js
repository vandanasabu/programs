
import './App.css';



import {BrowserRouter,Routes,Route} from 'react-router-dom'



import Travel from './Travel'
import Book from './Book';
import Button from './Button';
import Reservation from './Reservation';


 

function App() {
  return (
    <>
  
  <div>
    <BrowserRouter>
   
    <Travel/>
    <Routes >
   <Route path='/book' element={<Book />}></Route>
   <Route path='/button' element={<Button />}></Route>
   <Route path='/Reservation' element={<Reservation />}></Route>
   

    
  
    </Routes>
    </BrowserRouter>
  </div>
</>
  );
}

export default App;
