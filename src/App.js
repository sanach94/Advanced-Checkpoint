import React from 'react';
import './App.css';


const App=()=> {
  return (
    <div className="App">
   <Productable prod={products}/>
    </div>
  );
}
// const Productable=props=> {
//   return (
//     <div >
//   <p> my products: {props.children} </p>
//     </div>
//   );
// }
// const App=()=> {
//   return (
//     <div className="App">
//    <Productable> prod={products} </Productable>
//     </div>
//   );
// }

export default App;
