import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.ajax({
      type: 'GET',
      url: '/repos'
    })
    .then(data => {
      console.log('DATA from client index.jsx', data);
      this.setState({repos: data})
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // jQuery's ajax method to send a POST request to /repos
    $.ajax({
      type: "POST",
      url: '/repos',
      data: {term: term},
      success: (response)=>{console.log('ajax success', response)},
      error: (err)=>{console.log('ajax error', err)},
      // contentType: "application/json"
    })
      .then(data => {
        //console.log('DATA IN SEARCH', data)
        //this.setState({repos: data})
        return this.getData()
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));