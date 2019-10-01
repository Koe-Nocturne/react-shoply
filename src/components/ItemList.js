import React, { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
  render() {
    const products = this.props.items.products;
    let itemList = Object.keys(products).map(itemId => {
      return (
        <Item
          item={products[itemId]}
          addItem={this.props.addItem}
          deleteItem={this.props.deleteItem}
          key={itemId}
          {...products[itemId]}
          id={itemId}
        />
      );
    });
    return <div>{itemList}</div>;
  }
}

export default ItemList;
