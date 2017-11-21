//Footer.jsx
 
var React = require('react');
 
//サイトヘッダコンポーネント
var Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer">
				<div className="wrap">
					<div className="site-info">
						<a href="https://ja.wordpress.org/">Proudly powered by WordPress</a>
					</div>
				</div>
      </footer>
    );
  }
});
 
module.exports = Footer;