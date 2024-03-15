import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import FoodCart from "./FoodCart";
const FoodCarts = ({ handleWantCook }) => {

    const [foodCarts, setFoodCarts] = useState([]);
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setFoodCarts(data))
    }, [])

    return (
        <div className=" col-span-2 grid grid-cols-2 gap-4">
            {
                foodCarts.map(foodCart => <FoodCart key={foodCart.recipe_id} foodCart={foodCart} handleWantCook={handleWantCook}></FoodCart>)

            }
        </div>
    );
};

FoodCarts.propTypes = {

    handleWantCook: PropTypes.array.isRequired
}

export default FoodCarts;