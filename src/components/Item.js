import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={this.props.image_url} alt="is stuff" />
              <span className="card-title">{this.props.name}</span>
            </div>
            <div className="card-content">
              <p>{this.props.description}</p>
              <p>
                <b>Price: ${this.props.price}</b>
              </p>
            </div>
            <div className="card-action">
              <button
                className="waves-effect waves-light btn"
                onClick={() =>
                  this.props.addItem({
                    [this.props.id]: { ...this.props.item }
                  })
                }
              >
                Add to Cart
              </button>
              <button
                className="waves-effect waves-light btn red"
                onClick={() => this.props.deleteItem(this.props.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
