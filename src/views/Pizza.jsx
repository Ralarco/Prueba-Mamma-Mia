import { useContext } from "react";
import shopCarAddIco24 from "../img/ico-shopping-cart-add_24.png"
import myContext from "../myContext";

const Pizza = () => {
    const { pizzas, setPizzas, pizzaId, setPizzaId } = useContext(myContext)

    const pizzaDetalle = pizzas.filter((pizza) => pizza.id === pizzaId)

    return(
        <>
            {pizzaDetalle.map((pizza) =>{
                return(
                    <div className="detallePizza">
                        <img src={pizza.img} alt="" />
                        <div>
                            <h1> {pizza.name[0].toUpperCase() + pizza.name.slice(1)} </h1>
                            <p> {pizza.desc} </p>
                            <ul>
                            {pizza.ingredients.map((p) => {
                            return(
                                <li key={p + Math.random()}>{p[0].toUpperCase() + p.slice(1)}</li>
                                    )
                                })}
                            </ul>
                            <h2>${pizza.price}</h2>
                            <div className="btnsCard">
                                <button className="btnVerMas">Ver más</button>
                                <button className="btnAddpizza">Añadir<img src={shopCarAddIco24} alt=""/></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
        
    )
}

export default Pizza;