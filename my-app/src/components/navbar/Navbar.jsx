import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

const Menu = () => {
	return (
		<>
			<p>
				<a href="#home">Home</a>
			</p>
			<p>
				<a href="#whatgpt">What is GPT?</a>
			</p>
			<p>
				<a href="#possibility">Open AI</a>
			</p>
			<p>
				<a href="#features">Case Studies</a>
			</p>
			<p>
				<a href="#blog">Library</a>
			</p>
		</>
	);
};

export const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt__navbar">
			<div className="gpt__navbar-links">
				<div className="gpt__navbar-links-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="gpt__navbar-links__container">
					<Menu />
				</div>
			</div>
			<div className="gpt__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className="gpt__navbar-menu__container scale-up-center">
						<div className="gpt__navbar-menu__container-links">
							<Menu />
							<div className="gpt__navbar-menu__container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
