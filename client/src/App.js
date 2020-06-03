import React, { Component } from 'react';
// import logo from './tone150.png';
import video from './logoDrawOn.mp4'
import Container from 'react-bootstrap/Container'
// import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import './App.css';
import Story from './components/Story';
import Contact from './routes/contact';
// import { Link } from 'react-router';
// import { 
//   NavLink,
// } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';


// NOTE: App.js is currently placed in the scaffold like a controller, whereas the other components are in the routes directory. How do I want App.js to behave in relation to the other components?
// TODO: API scrolling 
// FIXME: Performance issues with logo

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
 
render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         {/* <video src={video} style={{objectFit: "cover" }} /> */}
         <div className="embed-responsive embed-responsive-16by9">
          <embed className="embed-responsive-item" src={video} style={{objectFit:"cover"}} allowFullScreen></embed>
        </div>
        </header>
        
        {/* Server test */}
        {/* <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p> */}
        
        <Container>
          <Story />
          <Contact />
        </Container>

        {/* <Nav.Item>
          <NavLink className="nav-link" to="./contact">
            Contact
          </NavLink>         
        </Nav.Item> */}



      </div>
    );
  }
}

export default App;