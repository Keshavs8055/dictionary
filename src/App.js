import React from "react";
import "./app.styles.scss";
import { Loading } from "./components/loading/loading";
import { Word } from "./components/word/word.jsx";
class App extends React.Component {
  state = {
    searchWord: "",
    loading: false,
    error: {
      error: false,
      msg: "",
    },
  };

  handleInputChange = (e) => {
    this.setState({ searchWord: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchWord.length === 0) {
      this.setState({
        error: {
          error: true,
          msg: "Please Enter A Word",
        },
      });
    }
    this.setState({ loading: true });
    fetch(
      `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${this.state.searchWord}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key":
            "a36a84312fmsh1a0d509b1e3fd5ep1bd46fjsn86747472d291",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ wordData: data, loading: false });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  render() {
    return (
      <div className="App">
        <Loading loading={this.state.loading} />
        <header className="header">
          <div className="container">
            <h1>Dictionary</h1>
            <form className="search-bar" onSubmit={this.handleSubmit}>
              <input
                placeholder="Search Word"
                autoComplete="off"
                autoFocus
                onChange={this.handleInputChange}
                value={this.state.searchWord}
              ></input>
              <button type="submit" onClick={this.handleSubmit}>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" />
                </svg>
              </button>
            </form>
          </div>
        </header>
        <div className="content">
          {this.state.error.error ? <h2>{this.state.error.msg}</h2> : null}
          {this.state.wordData ? (
            <Word data={this.state.wordData}></Word>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
