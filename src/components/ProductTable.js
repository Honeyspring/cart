import React,{Component} from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends Component {
  render() {
    let productsAsArray = Object.keys(this.props.products) //coverts products object to array to enable iteration
    .map((pid) => this.props.products[pid]);
    let rows = [];
//adds product row containing product as props and product id as key
    productsAsArray.forEach((product) => {
      rows.push(
        <ProductRow product={product} key={product.id} ></ProductRow>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader column="name" ></ProductTableHeader>
              <ProductTableHeader column="price" ></ProductTableHeader>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;