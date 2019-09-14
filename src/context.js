// context API
import React, {Component} from 'react';
import axios from 'axios';
import { arrowFunctionExpression } from '@babel/types';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'move_to_trash':
      return {
        ...state,//spread operator
        contacts: state.contacts.filter (contact => contact.id !== action.payload)
      };
    case 'add_to_contacts':
      return {
        ...state,//spread operator
        contacts: [action.payload, ...state.contacts]
      };
    case 'update_contact':
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
      }
    default:
        return state;
  }
 
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts: res.data})
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
};

export const Consumer = Context.Consumer;