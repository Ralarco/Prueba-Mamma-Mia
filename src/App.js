import "./styles/main.css"
import Header from "./components/Header";
import pizzaData from "./data/pizzas.json"
import { useState, useEffect } from "react"; 
import myContext from "./myContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza"


function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaId, setPizzaId] = useState("")
  

useEffect(() => {
  setPizzas(pizzaData);
  console.log(pizzas)
}, [])

  return (
    <myContext.Provider value={{ pizzas, setPizzas, pizzaId, setPizzaId }}>
      <div className="App">
        
          <Header />
          <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path="/pizza/:pizzaId" element={ <Pizza />} />
          </Routes>

          </BrowserRouter>
        

        
      </div>
    </myContext.Provider>
  );
}

export default App;
