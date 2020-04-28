import React, { Component } from 'react';
import axios from 'axios';
import AllQuestions from './AllQuestions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      fullmarks: null
    };

    axios.get('/questions')
      .then(response => {
        // console.log(response);
        this.setState({ questions: response.data })
      })
      .catch(err => console.log)


    // IF we have answers, check them
    if (window.location.search) {
      const answers = {};
      window.location.search.slice(1).split('&').forEach(a => {
        //a '0=b'
        const kvpair = a.split('=');
        answers[kvpair[0]] = kvpair[1];
      });

      console.log(answers);


      axios.post('/answers', answers)
        .then(response => {
          console.log(response.data);
          this.setState({fullmarks:response.data.fullmarks})
        })
        .catch(e => console.log)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>QUIZ</h1>
    <h2>{this.state.fullmarks === null? '' : `Fullmarks: ${this.state.fullmarks}`}</h2>
        </div>

        <form className="ui form">

          <AllQuestions questions={this.state.questions} />

          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
