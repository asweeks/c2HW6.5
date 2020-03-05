import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        Welcome to Mad Libs!
        <br />
        <br />
        Are you ready for an adventure?
      </p>
    ),
    buttons: [{ label: "Continue", page: "names" }]
  },
  names: {
    content: (getData, setData) => (
      <p>
        Enter three names
        <br />
        <br />
        Name1:
        <br />
        <br />
        <input
          type="text"
          value={getData("name1")}
          onChange={event => setData("name1", event.target.value)}
        />
        <br />
        <br />
        Name2:
        <br />
        <br />
        <input
          type="text"
          value={getData("name2")}
          onChange={event => setData("name2", event.target.value)}
        />
        <br />
        <br />
        Name3:
        <br />
        <br />
        <input
          type="text"
          value={getData("name3")}
          onChange={event => setData("name3", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "places" }]
  },
  places: {
    content: (getData, setData) => (
      <p>
        <h1> Enter three places. </h1>
        <br />
        <br />
        Place1:
        <br />
        <br />
        <input
          type="text"
          value={getData("place1")}
          onChange={event => setData("place1", event.target.value)}
        />
        <br />
        <br />
        Place2:
        <br />
        <br />
        <input
          type="text"
          value={getData("place2")}
          onChange={event => setData("place2", event.target.value)}
        />
        <br />
        <br />
        Place3:
        <br />
        <br />
        <input
          type="text"
          value={getData("place3")}
          onChange={event => setData("place3", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "animals" }]
  },
  animals: {
    content: (getData, setData) => (
      <p>
        Enter three animals.
        <br />
        <br />
        Animal1:
        <br />
        <br />
        <input
          type="text"
          value={getData("animal1")}
          onChange={event => setData("animal1", event.target.value)}
        />
        <br />
        <br />
        Animal2:
        <br />
        <br />
        <input
          type="text"
          value={getData("animal2")}
          onChange={event => setData("animal2", event.target.value)}
        />
        <br />
        <br />
        Animal3:
        <br />
        <br />
        <input
          type="text"
          value={getData("animal3")}
          onChange={event => setData("animal3", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "story" }]
  },
  story: {
    content: (getData, setName) => (
      <p>
        It was a sunny day, and {getData("name1")} and {getData("name2")} were
        on a walk to {getData("place1")}. As they strolled along talking about
        their weekend plans, a {getData("animal1")} jumped out of the bushes
        next to the sidewalk and bit {getData("name1")} on the leg.{" "}
        {getData("name1")} screamed and kicked their leg, subsequently yeeting
        the {getData("animal1")}
        into the {getData("place2")} across the way. {getData("name1")} grabed
        their leg and checked to see if there was a wound. Luckily there wasnt.{" "}
        {getData("name1")} and {getData("name2")} continued walking to{" "}
        {getData("place1")}. As they are strolled along a group of{" "}
        {getData("animal2")}'s crossed the street in front of them in quite a
        hurry. They dismissed it as nothing and kept walking. Moments later they
        recieved a frantic phonecall from their friend {getData("name3")}. Im at{" "}
        {getData("place3")} {getData("name3")} screamed, please come help me!{" "}
        {getData("name1")} and {getData("name2")} rushed to {getData("place3")}{" "}
        to find their friend being attacked by the group of {getData("animal2")}
        s they had seen earlier. They worked together to help {getData("name3")}{" "}
        and escape the {getData("animal2")}
        s. As they walked away from {getData("place3")} a giant{" "}
        {getData("animal3")} appeared and ate them all.
        <br />
        <br />
        The End.
        <br />
        <br />
      </p>
    ),
    buttons: [{ label: "Play Again", page: "start" }]
  },
  happybirthday: {
    content: (getData, setName) => <p>Happybirthday!!!</p>,
    buttons: [{ label: "continue", page: "welcome" }]
  },
  onthetrain: {
    content: (getData, setName) => (
      <p>
        Welcome aboard the choo-choo train! Please make your way to your seat.
        What's the number?
      </p>
    ),
    buttons: [{ label: "12E", page: "death" }, { label: "97C", page: "life" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    // }
    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
