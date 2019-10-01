import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={this.props.image_url} alt="is stuff"/>
            <span className="card-title">{this.props.name}</span>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
            <p><b>Price: ${this.props.price}</b></p>
          </div>
          <div className="card-action">
          <a class="waves-effect waves-light btn">Add to Cart</a>
          <a class="waves-effect waves-light btn red">Remove from Cart</a>
          </div>
        </div>
      </div>
    </div>
        );
      }
    }
    
export default Item;