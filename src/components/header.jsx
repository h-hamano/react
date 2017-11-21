//Header.jsx
 
import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
 
//サイトヘッダコンポーネント
var Header = React.createClass({
  render: function() {
    return (
      <header id="masthead" className="site-header" role="banner">
				<div className="custom-header" style={{marginBottom: '0px'}}>
					<div className="custom-header-media">
						<div id="wp-custom-header" className="wp-custom-header">
							<img src="http://demo1.rmd-demo.com/wp/wp-content/themes/twentyseventeen/assets/images/header.jpg" width="2000" height="1200" alt="SPA作ってみる" />
						</div>
					</div>
					<div className="site-branding" style={{marginBottom: '0px'}}>
						<div className="wrap">
							<div className="site-branding-text">
								<h1 className="site-title"><a href="http://demo1.rmd-demo.com/" rel="home">SPA作ってみる</a></h1>
								<p className="site-description">Just another WordPress site</p>
							</div>
							<a href="#content" className="menu-scroll-down">
								<svg className="icon icon-arrow-right" aria-hidden="true" role="img">
									<use xlinkHref="#icon-arrow-right"></use>
								</svg>
								<span className="screen-reader-text">本文までスクロール</span>
							</a>
						</div>
					</div>
				</div>

		
	</header>
    );
  }
});
 
module.exports = Header;