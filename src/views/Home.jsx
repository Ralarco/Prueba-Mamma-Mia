import { useContext, useEffect, useState } from "react"
import shopCarAddIco24 from "../img/ico-shopping-cart-add_24.png"
import myContext from "../myContext"
import { useNavigate } from "react-router";
const Home = () => {
    const {pizzas, setPizzas, pizzaId, setPizzaId, carro, setCarro, total, setTotal} = useContext(myContext);

    const navigate = useNavigate();
    const verPizza = () => navigate(`/pizza/${pizzaId}`)

    return(
        
        <section className="listaPizzas">
            {pizzas.map((pizza) => {
                return(
                <div key={pizza.id} className="cardPizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <h2>{pizza.name[0].toUpperCase() + pizza.name.slice(1)}</h2>
                    <ul>
                        {pizza.ingredients.map((p) => {
                            return(
                                <li key={p + Math.random()}>{p[0].toUpperCase() + p.slice(1)}</li>
                            )
                        })}
                    </ul>
                    <p className="pricePizza">${pizza.price}</p>
                    <div className="btnsCard">
                        <button className="btnVerMas" onMouseOver={() => setPizzaId(pizza.id)} onClick={verPizza}>Ver más</button>
                        <button className="btnAddpizza" onClick={() => {
                                        carro.push(pizza)
                                        setTotal(total + pizza.price)
                                        console.log(total)
                                        console.log(carro)
                                     }}>Añadir<img src={shopCarAddIco24} alt=""/></button>
                    </div>
                    
                </div>
                )

            })}
        </section>
    )
}

export default Home;