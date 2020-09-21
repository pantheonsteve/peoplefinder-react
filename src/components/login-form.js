import React from "react"

export default class LoginForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  render() {
    return (
      <form>
        <div className="form-group">
        <label>
          Username
          <input type="text" className="form-control" name="userName" />
        </label>
        </div>
        <div className="form-group">
        <label>
          Password
          <input type="password" className="form-control" name="password" />
        </label>
        </div>
        <div className="form-group">
        <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}