import React from 'react'
import UserHeader from '../components/UserHeader'
import UserOverTourism from '../components/UserOverTourism'
import UserOurSolution from '../components/UserOurSolution'
import UserHistory from '../components/UserHistory'
import RoadMap from '../components/RoadMap'
import UserSubscription from '../components/UserSubscription'
import Benefits from '../components/UserBenefits'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<UserHeader />
			{/* <UserOverTourism />
			<UserOurSolution />
			<UserHistory />
			<RoadMap /> */}
			<Benefits />
			{/* <FAQs />
			<UserSubscription/>
			<Footer /> */}
		</div>
	)
}

export default LandingPage
