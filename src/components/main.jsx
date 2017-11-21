//Main.jsx

var React = require('react');

import PostItem from './../components/post-item.jsx';
import Footer from './../components/footer.jsx';
 
//サイトヘッダコンポーネント
var Main = React.createClass({
  render: function() {
  	const { jsonData } = this.props;
    return (
      <div className="site-content-contain">
				<div id="content" className="site-content">

				<div className="wrap">
				<header className="page-header">
				<h2 className="page-title">投稿</h2>
				</header>

				<div id="primary" className="content-area">
					<PostItem jsonData={jsonData} />
				</div>

				<aside id="secondary" className="widget-area" role="complementary">
					<section id="search-2" className="widget widget_search">

						<form role="search" method="get" className="search-form" action="http://demo1.rmd-demo.com/">
							<label for="search-form-59b636ed05904">
								<span className="screen-reader-text">検索:</span>
							</label>
							<input type="search" id="search-form-59b636ed05904" className="search-field" placeholder="検索 …" value="" name="s" />
							<button type="submit" className="search-submit">
								<svg className="icon icon-search" aria-hidden="true" role="img">
									<use href="#icon-search" xlinkHref="http://www.w3.org/1999/xlink"></use>
								</svg>
								<span className="screen-reader-text">検索</span>
							</button>
						</form>
					</section>
					<section id="recent-posts-2" className="widget widget_recent_entries">
						<h2 className="widget-title">最近の投稿</h2>
						<ul>
							<li>
								<a href="http://demo1.rmd-demo.com/1/">Hello world!</a>
							</li>
						</ul>
					</section>
					<section id="recent-comments-2" className="widget widget_recent_comments"><h2 className="widget-title">最近のコメント</h2>
						<ul id="recentcomments">
							<li className="recentcomments">
								<a href="http://demo1.rmd-demo.com/1/#comment-1">Hello world!</a> に 
								<span className="comment-author-link">
									<a href="https://wordpress.org/" rel="external nofollow" className="url">WordPress コメントの投稿者</a>
								</span> より</li></ul>
					</section>
					<section id="archives-2" className="widget widget_archive">
						<h2 className="widget-title">アーカイブ</h2>
						<ul>
							<li><a href="http://demo1.rmd-demo.com/date/2017/08/">2017年8月</a></li>
						</ul>
					</section>
					<section id="categories-2" className="widget widget_categories">
						<h2 className="widget-title">カテゴリー</h2>
						<ul>
							<li className="cat-item cat-item-1"><a href="http://demo1.rmd-demo.com/category/%e6%9c%aa%e5%88%86%e9%a1%9e/">未分類</a>
							</li>
						</ul>
					</section>
					<section id="meta-2" className="widget widget_meta">
						<h2 className="widget-title">メタ情報</h2>
						<ul>
							<li><a href="http://demo1.rmd-demo.com/wp/wp-login.php">ログイン</a></li>
							<li><a href="http://demo1.rmd-demo.com/feed/">投稿の <abbr title="Really Simple Syndication">RSS</abbr></a></li>
							<li><a href="http://demo1.rmd-demo.com/comments/feed/">コメントの <abbr title="Really Simple Syndication">RSS</abbr></a></li>
							<li><a href="https://ja.wordpress.org/" title="Powered by WordPress, state-of-the-art semantic personal publishing platform.">WordPress.org</a></li>
						</ul>
					</section>
				</aside>
			</div>


		</div>

		<Footer/>

	</div>
    );
  }
});
 
module.exports = Main;