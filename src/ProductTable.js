import React from "react";
import PropTypes from "prop-types";
import "./App.css"

const ProductTable = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center'}}>
        {props.prod ? <h2>These are my products </h2>  : <h2>Products not available</h2>}
      <table border='2'>
        <thead>
          <tr>
            <th >Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.prod.map((el , i) => (
            <tr key={i}>
              <td className={el.name === "TV" && "blue"}>{el.name}</td>
              <td style={{color: el.price === 30 ? 'green' : 'red', padding:'10'}}>{el.price}</td>
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
