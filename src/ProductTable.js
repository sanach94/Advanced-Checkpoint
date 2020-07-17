import React from "react";
import PropTypes from "prop-types";

const ProductTable = (props) => {
  return (
    <div>
        {props.prod ? <h2>HELLOOOO </h2>  : <h2>go away</h2>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.prod.map((el , i) => (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.price}</td>
              <td>{el.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes  = {
    prod: PropTypes.array
}

export default ProductTable;
