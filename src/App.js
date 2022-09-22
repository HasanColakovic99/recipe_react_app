import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>    
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe/:id" element={<Recipe />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
