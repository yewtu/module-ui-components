//const host = 'http://yewtu-farm.herokuapp.com/farm';
const host = 'http://localhost:3000/farm';
const hostWithQuerystring = `${host}/static?image=`;

module.exports = [
	{
		label: 'Dashboard',
		link: `${host}?`
	},
	{
		label: '3.5.2 Gamification',
		link: `${hostWithQuerystring}3.5.2-Gamification`
	},
	{
		label: 'J3.4.1 Farm KPI',
		link: `${hostWithQuerystring}J3.4.1-Farm-KPI`
	},
	{
		label: 'J3.1.2 CoP Report Design',
		link: `${hostWithQuerystring}J3.1.2-CoP-Report-Design`
	},
	{
		label: 'J5.1.2.1 Ready to publish cows',
		link: `${hostWithQuerystring}J5.1.2.1-View-Ready-to-Publish-Cows_Design-v2`
	},
	{
		label: 'J5.1.2.2 Publish to Market',
		link: `${hostWithQuerystring}J5.1.2.2-Publish-to-Market_Design-v2`
	},
	{
		label: 'J5.1.2.3 Publish Message',
		link: `${hostWithQuerystring}J5.1.2.3-Publish-Message_Design-v2`
	},
	{
		label: 'J7.2.1 Genetics 1',
		link: `${hostWithQuerystring}J7.2.1`
	},
	{
		label: 'J7.3.1 Genetics 2',
		link: `${hostWithQuerystring}J7.3.1`
	},
	{
		label: 'J7.4.1 Genetics 3',
		link: `${hostWithQuerystring}J7.4.1`
	},
	{
		label: 'J7.4.2 Genetic Matching Service 1',
		link: `${hostWithQuerystring}J7.4.2`
	},
	{
		label: 'J7.4.3 Genetic Matching Service 2',
		link: `${hostWithQuerystring}J7.4.3`
	},
	{
		label: 'J7.5.1 Genetics 4',
		link: `${hostWithQuerystring}J7.5.1`
	},
	{
		label: 'J8.1 Consumer Sentiment',
		link: `${hostWithQuerystring}j8.1-consumer-sentiment`
	},
	{
		label: 'J6.1.1 Aligned Retail Forecast',
		link: `${hostWithQuerystring}J6.1.1-aligned-retail-forecast`
	},
	{
		label: 'J6.2.1 Marketplace Design',
		link: `${hostWithQuerystring}J6.2.1-Marketplace_Design`
	},
	{
		label: 'J6.2.2.1 Search Results Design',
		link: `${hostWithQuerystring}J6.2.2.1-Search-Results_Design`
	},
	{
		label: 'J6.2.2.2 Search Results',
		link: `${hostWithQuerystring}J6.2.2.2-Search-Results-Selected_Design`
	},
	{
		label: 'J6.2.3 Place a Bid',
		link: `${hostWithQuerystring}J6.2.3-Place-a-bid_Design`
	},
	{
		label: 'J6.2.4 Farmer Received Notification',
		link: `${hostWithQuerystring}J6.2.4-Farmer-Received-Notification_Design-Copy`
	},
	{
		label: 'J6.2.5 Buyer Confirms Farm\'s Reply',
		link: `${hostWithQuerystring}J6.2.5-Buyer-Confirms-Farm's-Reply_Design`
	},
	{
		label: 'J6.2.5 Buyer Confirms Farm\'s Reply Alt',
		link: `${hostWithQuerystring}J6.2.5-Buyer-Confirms-Farm's-Reply_Design-Alt`
	},
	{
		label: 'J6.2.6 Farm Confirm Commitment',
		link: `${hostWithQuerystring}J6.2.6-Farm-confirm-commitment_Design`
	},
	{
		label: 'J6.3 Managing Forecast vs Demand',
		link: `${hostWithQuerystring}J6.3-managing-forecast-vs-demand`
	}
]