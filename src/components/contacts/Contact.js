import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo : false
  };

  onDelete = async ( id, dispatch) => {
    // console.log('dispatch', dispatch);
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type: "move_to_trash", payload: id})
  }

  render() {
    
    const { id, name, email, phone } = this.props.contact; //destructuring
    const {showContactInfo} = this.state;

    return (
      <Consumer>
         {value => {
           const {dispatch} = value;
           return (
            <div className="card card-body mb-3">
              <h4>
                {name }{' '}
                <i className="fas fa-caret-down" style={{ cursor: 'pointer'}} onClick={ () => this.setState({showContactInfo: !this.state.showContactInfo}) }/>
                <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDelete.bind(this, id, dispatch)}></i>
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt" style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i>
                </Link>
              </h4>

              {showContactInfo ? 
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
                : null}
            </div>
           )
         }}

      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact : PropTypes.object.isRequired
}; // validate the prop types

export default Contact;
