import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Abubakar Taiwo",
      bio: "Im an aspiring Software Enginner",
      imgSrc: "https://avatars.githubusercontent.com/u/65073623?v=4",
      profession: "Web Developer"
    },
    showProfile: true,
    timeElasped: 0
  };

componentDidMount() {
    this.interval = setInterval(() => {
    this.setState(prevState => ({
      timeElasped: prevState.timeElasped + 1
    }));
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

toggleProfile = () => {
  this.setState(prevState => ({
    showProfile: !prevState.showProfile
  }));
};

  render() {
    const { person, showProfile, timeElasped} = this.state;

    return (
      <div>
        <button onClick= {this.toggleProfile}>
        {showProfile ? "hide" : "show"} Info
        </button>
        {showProfile && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Time elasped since component mounted: {timeElasped} seconds</p>
        </div>
      );
    }
  }

export default App;
