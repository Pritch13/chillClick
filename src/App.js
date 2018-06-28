import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";
import Score from "./components/Score";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    friends,
    score: 0,
    lives: 3,
    clicked: []
  };

  handleClick = id => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends, clicked: this.state.clicked.concat(id) });
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ score: this.state.score +1, });
    } else {
      this.setState({lives: this.state.lives -1});
      if (this.state.lives < 2) {
        this.setState({lives: 3, score: 0})
      }
    }
  };

  



  render() {
    return (
      <Wrapper>
        <Nav
          title="chillClick"
        />
        <Title>It has been scientifically proven that viewing peaceful landscapes can help you relax, and a simple mindful counting game can help bring focus and awareness.</Title>
        <Title>Click each image once to score a point, dont click the same image twice though!</Title>
        <Score>Score: {this.state.score} Lives: {this.state.lives}</Score>

        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
