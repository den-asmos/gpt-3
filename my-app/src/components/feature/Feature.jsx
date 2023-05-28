import './Feature.css';

export const Feature = ({ title, text }) => {
	return (
		<div className="gpt__features-container__feature">
			<div className="gpt__features-container__feature-title">
				<div />
				<h1>{title}</h1>
			</div>
			<div className="gpt__features-container__feature-text">
				<p>{text}</p>
			</div>
		</div>
	);
};
