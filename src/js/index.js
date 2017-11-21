import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';

const url = 'http://demo1.rmd-demo.com/wp-json/wp/v2/posts/';

import Header from './../components/header.jsx';
import Main from './../components/main.jsx';
import Footer from './../components/footer.jsx';
import PageBottom from './../components/pagebottom.jsx';

import Detail from './../components/detail.jsx';

//コンポーネントを一つにまとめる
const Index = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      // url: this.props.url + '?_embed',
      url: url + '?_embed',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({jsonData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(props) {
    return {jsonData: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, 2000);
  },
  render: function(){
    return (
      <div id="wrapper">
        <Header/>
        <Main jsonData={this.state.jsonData} />
        <PageBottom/>
      </div>
    );
  }
});

const Details = React.createClass({
  loadCommentsFromServer: function() {
    var currentUrl = location.href;
    var host = location.hostname;
    host = 'http://' + host + '/';
    var page = currentUrl.replace(host, '');
    $.ajax({
      url: url + page + '?_embed',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({jsonData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(props) {
    return {jsonData: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render: function(){
    return (
      <div id="wrapper">
        <Detail jsonData={this.state.jsonData} />
        <PageBottom/>
      </div>
    );
  }
});

const Root = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/:id" component={Details} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
