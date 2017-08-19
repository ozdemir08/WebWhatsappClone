import React, { Component } from 'react';
import './styles/App.css';
import ChatList from './component/ChatList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import ChatBox from './component/ChatBox';

const stylePaper = {
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 400,
    marginRight: 10,
    height: '100%',
};

class App extends Component {

    constructor(props){
        super(props);
    }

  render() {
	return (
	  <div className="App">
		  <MuiThemeProvider>
              <div>
                  <div className="App-header">
                      <h2>Welcome to Whatsapp Clone</h2>
                  </div>
                  <ChatList/>
                  <Paper elevation="2" style={stylePaper}>
                      <ChatBox />
                  </Paper>
              </div>
		  </MuiThemeProvider>
	  </div>
	);
  }
}

export default App;
