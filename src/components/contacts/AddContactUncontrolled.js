import React, { Component } from 'react'

class AddContactUncontrolled extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  };
  state = {
    name: '',
    email: '',
    phone: ''
  };
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact);
  };
  static defaultProps = {
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '09132461313'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter Name..." name="name" defaultValue={name} ref={this.nameInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control form-control-lg" placeholder="Enter Email..." name="email" defaultValue={email} ref={this.emailInput}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control form-control-lg" placeholder="Enter Phone..." name="phone" defaultValue={phone} ref={this.phoneInput}/>
            </div>
            <input type="submit" value="Add Contact" className="btn btn-danger btn-block"/>
          </form>
        </div>
      </div>
    )
  }
}

export default  AddContactUncontrolled;