import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { name, password, email, confirmPassword } = this.state;

    password === confirmPassword
      ? console.log("Sta funcionando")
      : console.log("Rapa tu mai sta mal");
    e.preventDefault();
  }

  render() {
    return (
      <div className="w-4/12 m-auto flex flex-col justify-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          onSubmit={this.handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-projectPalette-dblue text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-projectPalette-ddblue"
              id="name"
              type="text"
              placeholder="Name"
              onChange={this.handleChange}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-projectPalette-dblue text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-projectPalette-ddblue"
              id="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-projectPalette-dblue text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-projectPalette-ddblue mb-3"
              id="password"
              type="password"
              placeholder="******************"
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-projectPalette-dblue text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-projectPalette-ddblue mb-3"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              onChange={this.handleChange}
              name="confirmPassword"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>

          <input
            className="bg-projectPalette-red hover:bg-blue-dark w-full text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Create user"
          />
        </form>
      </div>
    );
  }
}
