import { connect } from "react-redux";

import NavBar from "../components/NavBar";

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const connected = connect(mapStateToProps);

export default connected(NavBar);
