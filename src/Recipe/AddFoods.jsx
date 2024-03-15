import PropTypes from 'prop-types';
import WantFood from './WantFood';
const AddFoods = ({ wantCook }) => {
    return (
        <div className="border rounded-2xl p-4">
            <div>
                <h3 className='text-center text-xl font-bold'>Want to Cook: {wantCook.length}</h3>
                <hr />
                <div>
                    <table className='border w-full'>
                        <thead className='border'>
                            <td className=''></td>
                            <td className=''>Name</td>
                            <td className=''>Time</td>
                            <td className=''>Calories</td>
                            <td className=''></td>
                        </thead>
                    </table>
                </div>
                {

                    wantCook.map((wantCookItem, idx) => <WantFood key={idx} wantCookItem={wantCookItem}></WantFood>)

                }
            </div>
            <div>
                <h3 className='text-center text-xl font-bold'>Want to Cook: </h3>
                <hr />
            </div>
        </div>
    );
};

AddFoods.propTypes = {
    wantCook: PropTypes.array.isRequired
}
export default AddFoods;