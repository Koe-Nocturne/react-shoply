import { connect } from 'react-redux';

import { addItem, deleteItem } from '../actions';
import ItemList from '../components/ItemList'

function mapStateToProps(state) {
  return {
    items: state.products
  }
}

function mapDispatchToProps(dispatch) {

  return {
    addItem: (newItem) => dispatch(addItem(newItem)),
    deleteItem: (id) => dispatch(deleteItem(id))
  }
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connected(ItemList);