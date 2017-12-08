import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';

// import { Router, Route, browserHistory } from 'react-router';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const url = 'http://demo1.rmd-demo.com/wp-json/wp/v2/posts/';

import Header from './../components/header.jsx';
import Main from './../components/main.jsx';
import Footer from './../components/footer.jsx';
import PageBottom from './../components/pagebottom.jsx';

import Detail from './../components/detail.jsx';



// /* Storeの実装 */

// // 初期state変数（initialState）の作成
// const initialState = {
//   value: null,
// };
// // createStore（）メソッドを使ってStoreの作成
// const store = createStore(formReducer, initialState);



// /* Actionの実装 */

// // Action名の定義
// const SEND = 'SEND';

// // Action Creator
// function send(value) {
//   // Action
//   return {
//     type: SEND,
//     value,
//   };
// }



// // Reducer
// function formReducer(state, action) {
//   switch (action.type) {
//     case SEND:
//       return Object.assign({}, state, {
//         value: action.value,
//       });
//     default:
//       return state;
//   }
// }



// const history = syncHistoryWithStore(browserHistory, store);



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
  // <Provider store={store}>
  //   <Router history={history}>
  //     <Route path="/" component={Index}>
  //       <Route path="/:id" component={Details}/>
  //     </Route>
  //   </Router>
  // </Provider>,
  <Root />,
  document.getElementById('root')
);
