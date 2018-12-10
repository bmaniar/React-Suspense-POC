import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const FetchPosts = lazy(() => import("./showPosts"));


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchPosts: false
    };
  }
  _fetchPosts() {
    this.setState({
      fetchPosts: true
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <button className="button" onClick={() => this._fetchPosts()}>
            Fetch Posts
          </button>
        </div>
        {this.state.fetchPosts ? (
          <Suspense maxDuration={1500} fallback={<div>Loading......</div>}>
            <FetchPosts />
          </Suspense>
        ) : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement);
