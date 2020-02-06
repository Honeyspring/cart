import React from 'react';
import Products from './components/Product.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header"><h1>MyCart</h1></header>
        <section>
          <Products ></Products>
        </section>
      </div>
    );
  }
} 

export default App;