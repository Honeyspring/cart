import React ,{Component} from 'react';

class Filter extends Component {
  render() {
    return (
    	 <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />&nbsp;Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filter;