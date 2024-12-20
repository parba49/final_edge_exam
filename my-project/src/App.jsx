
import {} from "react-router-dom";

import Sidebar from "./component/Sidebar.jsx";
import Navbar from "./component/Navbar.jsx";




const App = () => {
  return (
   <>
   <div className="grid grid-cols-2">
   <Sidebar></Sidebar>
   <Navbar></Navbar>

   </div>
   


   </>
  );
};

export default App;
