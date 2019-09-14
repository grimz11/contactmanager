import React, { Component } from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  
  onSubmit = async (dispatch, e) => {
    console.log('dispact', dispatch);
    e.preventDefault();
    const { name, email, phone } = this.state;
    
    //chech for errors
    if (name === '') {
      this.setState({errors: {name: 'Name is required'}});
      return;
    }
    if (email === '') {
      this.setState({errors: {email: 'Email is required'}});
      return;
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}});
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    dispatch({type: 'add_to_contacts' , payload: res.data});

    //clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  }

render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3"><span className="text-danger">Add</span> Contact</h1>
              <div className="card mb-3">
                {/* <div className="card-header">Add Contact</div> */}
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
                    <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
                    <TextInputGroup label="Phone" name="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange} error={errors.phone}/>
                    <input type="submit" value="Add Contact" className="btn btn-dark btn-block"/>
                  </form>
                </div>
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
};

export default AddContact;