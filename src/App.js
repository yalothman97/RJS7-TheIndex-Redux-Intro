import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  state = {
    authors: authors,
    newAuthorId: 5
  };

  addAuthor = () => {
    const newAuthor = {
      id: this.state.newAuthorId,
      first_name: "Author",
      last_name: "McAuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };
    this.setState({
      authors: this.state.authors.concat(newAuthor),
      newAuthorId: this.state.newAuthorId + 1
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.addAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
