import PropTypes from 'prop-types';
const FoodCart = ({ foodCart, handleWantCook }) => {
    console.log(foodCart);
    const { recipe_name, recipe_image_url, short_description, ingredients, preparing_time, calories } = foodCart;
    return (
        <div className='p-4 border rounded-2xl space-y-2'>
            <img className='w-full h-60 rounded-2xl' src={recipe_image_url} alt="" />
            <h3 className='text-xl font-bold'>{recipe_name}</h3>
            <p className='text-gray-500'>{short_description}</p>
            <hr />
            <h4 className='text-lg font-bold'>Ingredients: {ingredients.length}</h4>
            <div className='space-y-1 ml-4 text-gray-500'>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </div>
            <hr />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center text-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                    <p>{preparing_time} minutes</p>
                </div>
                <div className='flex gap-2 items-center text-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" /></svg>
                    <p>{calories} calories</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { handleWantCook(foodCart) }} className='btn bg-green-500 rounded-3xl'>Want to Cook</button>
            </div>


        </div>
    );
};

FoodCart.propTypes = {
    foodCart: PropTypes.object.isRequired,
    handleWantCook: PropTypes.array.isRequired
}

export default FoodCart;