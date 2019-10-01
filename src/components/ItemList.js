import React, { Component } from "react";
import Item from "./Item"

class ItemList extends Component {

  render() {
    const products = this.props.items.products;
    console.log(this.props.items.products);
    let itemList = Object.keys(products).map(itemId => {
      return <Item key={itemId} {...products[itemId]} id={itemId}/>
    });
    return (
      <div>
        {itemList}
      </div>
    );
  }
}

export default ItemList;