import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ons Jabeur",
        bio: "Ons Jabeur, née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2010. En devenant nᵒ 2 mondiale dans le classement WTA en 2022, Ons Jabeur est devenue la joueuse tunisienne, arabe et africaine la mieux classée des classements WTA et ATP.",
        imgSrc: "https://kapitalis.com/tunisie/wp-content/uploads/2023/06/Ons-Jabeur.jpg",
        profession: "Joueuse de tennis tunisienne professionnelle "
      },
      show: false
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow} style={{ marginBottom: "20px" }}>
          {this.state.show ? "Masquer le profil" : "Afficher le profil"}
        </button>
        {this.state.show && (
          <div>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} style={{ borderRadius: "50%" }} />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h3>{this.state.person.profession}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
