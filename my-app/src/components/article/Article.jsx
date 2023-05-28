import './Article.css';

export const Article = ({ imgUrl, date, title }) => {
	return (
		<div className="gpt__blog-container__article">
			<div className="gpt__blog-container__article-image">
				<img src={imgUrl} alt="blog" />
			</div>
			<div className="gpt__blog-container__article-content">
				<div>
					<p>{date}</p>
					<h3>{title}</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	);
};
