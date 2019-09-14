import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
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
    const updateContact = {
      name,
      email,
      phone
    }

    const { id } = this.props.match.params;
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
    
    dispatch({type: 'update_contact', payload: res.data});

    console.log(res);
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
              <h1 className="display-4 mb-3"><span className="text-danger">Edit</span> Contact</h1>
              <div className="card mb-3">
                {/* <div className="card-header">Add Contact</div> */}
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
                    <TextInputGroup label="Email" name="email" type="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
                    <TextInputGroup label="Phone" name="phone" placeholder="Enter Phone" value={phone} onChange={this.onChange} error={errors.phone}/>
                    <input type="submit" value="Update Contact" className="btn btn-dark btn-block"/>
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

export default EditContact;