
import PropTypes from "prop-types";

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img src={item.image} alt={item.name} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.Category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between ">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white duration-200 rounded-lg">
                                Buy Now!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Prop validation
Cards.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        Category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Cards;
