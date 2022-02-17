import PlandarText from '../assets/PlandarText.png'
import Logo from '../assets/Logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const UserNavbar = () => {
	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

	return (
		<div className="user_navbar">
			<div className="left">
				<img className="logo" src={Logo} alt="logo" />
				<img className="text" src={PlandarText} alt="logo" />
			</div>

			<div className="links">
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#problem">The Problem</a>
					</li>
					<li>
						<a href="#solution">Our Solution </a>
					</li>
					<li>
						<a href="#history">The History of Paladares</a>
					</li>
					<li>
						<a href="#work">How it Works </a>
					</li>
					<li>
						<a href="#benefits">Benefits</a>
					</li>
					<li>
						<a href="#faq">FAQ</a>
					</li>
					<li>
						<a href="#subcription">Subscription</a>
					</li>
				</ul>
			</div>

			<div className="right">
				<button>Be a Paladar Host</button>
			</div>

			<div className="hamburger_menu">
				{showSmallScreenMenu ? (
					<div className="icon" onClick={() => setShowSmallScreenMenu(false)}>
						{' '}
						X{' '}
					</div>
				) : (
					<GiHamburgerMenu className="icon" onClick={() => setShowSmallScreenMenu(true)} />
				)}
			</div>

			{showSmallScreenMenu && (
				<div className="mobile_sidebar">
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#problem">The Problem</a>
						</li>
						<li>
							<a href="#solution">Our Solution </a>
						</li>
						<li>
							<a href="#history">The History of Paladares</a>
						</li>
						<li>
							<a href="#work">How it Works </a>
						</li>
						<li>
							<a href="#benefits">Benefits</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
						<li>
							<a href="#subcription">Subscription</a>
						</li>

						<li>
							<button>Be a Paladar Host</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default UserNavbar
