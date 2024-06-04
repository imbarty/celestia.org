export const heroData = {
	title: "Celestia Underneath",
	subtitle: "Build whatever",
	description: `
	<p>Celestia is a modular blockchain specialized in ordering transactions and making their data available (DA). This modular design means Celestia can be plugged into all rollup frameworks or chains to scale any ecosystem.</p>
	<p>You can deploy in the Ethereum ecosystem with an L2 that taps into Celestia for modular DA. Or launch your own customizable sovereign chain.</p>
	<p>With abundant blockspace and new ways to create apps, you have a blank canvas to build whatever with Celestia underneath.</p>
	`,
	image: {
		src: "celestia-underneath/celestia-underneath-hero.png",
		alt: "Celestia Underneath Hero",
	},
	cards: [
		{
			title: "Ethereum L2",
			text: "Use leading rollup frameworks to deploy an Ethereum L2.",
			button: {
				class: "external",
				type: "external",
				text: "Simply deploy",
				url: "/build?framework_category=Ethereum#build",
			},
		},
		{
			title: "Sovereign rollup",
			text: "Deploy your own customizable sovereign chain.",
			button: {
				class: "external",
				type: "external",
				text: "Build whatever",
				url: "/build/?framework_category=Sovereign#build",
			},
		},
	],
};
