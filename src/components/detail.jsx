//Detail.jsx

var React = require('react');

import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom';
import Footer from './../components/footer.jsx';
 
//サイトヘッダコンポーネント
var Detail = React.createClass({
  render: function() {
    const {jsonData} = this.props;
    console.log(jsonData);
    var thumbnail = jsonData._embedded;
    var title = jsonData.title;
    // var post_thumbnail = jsonData[i]._embedded['wp:featuredmedia'] ? jsonData[i]._embedded['wp:featuredmedia'][0].source_url : '';
    return (
    	<div>
	    	<div className="single-featured-image-header">
	    		<img width="1280" height="720" src="" className="attachment-twentyseventeen-featured-image size-twentyseventeen-featured-image wp-post-image" alt="" srcset="http://demo1.rmd-demo.com/wp/wp-content/uploads/2017/08/maxresdefault.jpg 1280w, http://demo1.rmd-demo.com/wp/wp-content/uploads/2017/08/maxresdefault-300x169.jpg 300w, http://demo1.rmd-demo.com/wp/wp-content/uploads/2017/08/maxresdefault-768x432.jpg 768w, http://demo1.rmd-demo.com/wp/wp-content/uploads/2017/08/maxresdefault-1024x576.jpg 1024w" sizes="100vw" />
	    	</div>
	      <div className="site-content-contain">
					<div id="content" className="site-content">

					<div className="wrap">
					<header className="page-header">
					<h2 className="page-title">投稿</h2>
					</header>

					<div id="primary" className="content-area">
						<main id="main" className="site-main" role="main">
							<article id="post-8" className="post-8 post type-post status-publish format-standard has-post-thumbnail hentry category-1">
								<header className="entry-header">
									<div className="entry-meta">
										<span className="posted-on">
											<span className="screen-reader-text">投稿日:</span>
											<a href="http://demo1.rmd-demo.com/8/" rel="bookmark">
												<time className="entry-date published" datetime="2017-08-15T22:49:40+09:00">2017年8月15日</time>
												<time className="updated" datetime="2017-08-16T12:07:08+09:00">2017年8月16日</time>
											</a>
										</span>
										<span className="byline"> 投稿者: 
											<span className="author vcard">
												<a className="url fn n" href="http://demo1.rmd-demo.com/author/rmd_admin/">rmd_admin</a>
											</span>
										</span>
									</div>
									<h1 className="entry-title">{title}</h1>
								</header>
								<div className="entry-content">
									<p>Ember:&nbsp;https://www.emberjs.com/</p>
								</div>
							</article>

							<div id="comments" className="comments-area">

									<div id="respond" className="comment-respond">
									<h3 id="reply-title" className="comment-reply-title">コメントを残す 
										<small>
											<a rel="nofollow" id="cancel-comment-reply-link" href="/8/#respond" style={{display: 'none'}}>コメントをキャンセル</a>
										</small>
									</h3>
									<form action="http://demo1.rmd-demo.com/wp/wp-comments-post.php" method="post" id="commentform" className="comment-form" novalidate="">
										<p className="comment-notes">
											<span id="email-notes">メールアドレスが公開されることはありません。</span> <span className="required">*</span> が付いている欄は必須項目です
										</p>
										<p className="comment-form-comment">
											<label for="comment">コメント</label> 
											<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" aria-required="true" required="required">
											</textarea>
										</p>
										<p className="comment-form-author">
											<label for="author">名前 <span className="required">*</span>
											</label> 
											<input id="author" name="author" type="text" value="" size="30" maxlength="245" aria-required="true" required="required" />
										</p>
										<p className="comment-form-email">
											<label for="email">メールアドレス <span className="required">*</span>
											</label> 
											<input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" aria-required="true" required="required" />
										</p>
										<p className="comment-form-url">
											<label for="url">ウェブサイト</label> 
											<input id="url" name="url" type="url" value="" size="30" maxlength="200" />
										</p>
										<p className="form-submit">
											<input name="submit" type="submit" id="submit" className="submit" value="コメントを送信" /> 
											<input type="hidden" name="comment_post_ID" value="8" id="comment_post_ID" />
											<input type="hidden" name="comment_parent" id="comment_parent" value="0" />
										</p>
									</form>
								</div>
							</div>
					<nav className="navigation post-navigation" role="navigation">
						<h2 className="screen-reader-text">投稿ナビゲーション</h2>
						<div className="nav-links">
							<div className="nav-previous">
								<a href="http://demo1.rmd-demo.com/6/" rel="prev">
									<span className="screen-reader-text">過去の投稿</span>
									<span aria-hidden="true" className="nav-subtitle">前</span> 
									<span className="nav-title">
										<span className="nav-title-icon-wrapper">
											<svg className="icon icon-arrow-left" aria-hidden="true" role="img">
												<use xlinkHref="#icon-arrow-left"></use>
											</svg>
										</span>園さんはVue.js
									</span>
								</a>
							</div>
						</div>
					</nav>
						</main>
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
    	</div>
    );
  }
});

module.exports = Detail;
$(window).on('load', function() {
});