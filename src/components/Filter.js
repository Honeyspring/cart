import React ,{Component} from 'react';

class Filters extends Component {
	constructor(props) {
    super(props);
	this.handleChange = this.handleChange.bind(this);
}
	/*an event handler that passes user input to the handler passed in from the parent. 
	By using the  name  property of the target element, we can handle both inputs in a single handler*/
	 handleChange(e) {
    const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }
  render() {
    return (
    	 <form>
               <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}  //Assigning the handler to the  onChange  property of our input element (We'll also assign a  name  property here, so we can reference it in the handler above).
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            name="inStockOnly"
            onChange={this.handleChange}
          />
          &nbsp;
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default Filters;