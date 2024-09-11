import AddUser from "./components/AddUser";
import NavBar  from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
     <NavBar />
     <Routes>
     
     <Route path="/all" element={<AllUsers />} />
     <Route  path="/add" element={<AddUser />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
