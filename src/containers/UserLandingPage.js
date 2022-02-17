import React from 'react'
import UserHeader from '../components/UserHeader'
import UserOverTourism from '../components/UserOverTourism'
import UserOurSolution from '../components/UserOurSolution'
import UserHistory from '../components/UserHistory'
import Footer from '../components/Footer'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<UserHeader />
			<UserOverTourism />
			<UserOurSolution />
			<UserHistory />
			<Footer />
		</div>
	)
}

export default LandingPage
