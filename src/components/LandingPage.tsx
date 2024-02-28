import React, { useState } from "react";
import "../css/LandingPage.css"; //importing css class

type AlphabetItem = {
  name: string;
};

class LandingPage extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedAlphabet: null as null | string,
      items: [] as AlphabetItem[],
    };
  }

  handleAlphabetClick = (alphabet: string) => {
    let items: AlphabetItem[] = [];

    switch (alphabet) {
      case 'A':
        items = ["Apple", "Aircraft", "Ant", "Astronaut", "Aquarium"].map(
          (name) => ({ name } as AlphabetItem)
        );
        break;
      case 'B':
        items = ["Bat", "Ball"].map((name) => ({ name } as AlphabetItem));
        break;
      // Add more cases for other alphabets as needed
      default:
        items = [];
    }
    // const a = ["Apple", "Aircraft", "Ant", "Astronaut", "Aquarium"].map(
    //   (name) => ({ name } as AlphabetItem)
    // );

    // const b = ["Bat", "Ball"].map(
    //   (name) => ({ name } as AlphabetItem)
    // );

    this.setState({ selectedAlphabet: alphabet, items });
    console.log(`Alphabet ${alphabet} clicked!`);
    
  };

  render() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const { selectedAlphabet, items } = this.state;

    return (
      <div>
        <h1>Welcome to Alphabet Landing Page!</h1>
        <div>
          {alphabets.map((alphabet) => (
            <button
              key={alphabet}
              onClick={() => this.handleAlphabetClick(alphabet)}
            >
              {alphabet}
            </button>
          ))}
        </div>
        <div>
          {items.map((item: AlphabetItem, index: number) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default LandingPage;