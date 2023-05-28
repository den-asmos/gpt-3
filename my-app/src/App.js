import './App.css';
import * as Components from './components/index';
import * as Containers from './containers/index';

export const App = () => {
	return (
		<div className="app">
			<div className="gradient__bg">
				<Components.Navbar />
				<Containers.Header />
			</div>
			<Components.Brand />
			<Containers.WhatGPT />
			<Containers.Features />
			<Containers.Possibility />
			<Components.CTA />
			<Containers.Blog />
			<Containers.Footer />
		</div>
	);
};
