// import React from 'react'
import list from "../list.json"
import PropTypes from "prop-types";
import Cards from "./Cards";
import {Link} from "react-router-dom";

function Course() {
  return (<>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-semibold md:text-4xl "> We are delighted to have you 
        <span className="text-pink-500"> Here! :)</span>
      </h1>
      <p className="mt-12">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <Link to="/">
      <button className="bg-pink-500 text-white px-4 py-2 md:rounded-md mt-5 hover:bg-pink-700 duration-300">Back</button>
      </Link> 
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
      {
        list.map((item) => (
          <Cards key={item.id} item={item} />
        ))
      }
    </div>
  </div>
  </>
  )
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


export default Course