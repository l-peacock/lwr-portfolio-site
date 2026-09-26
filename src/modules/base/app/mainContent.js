const MAIN_CONTENT = {
	BANNER: {
		prefix: "hello, ",
		titles: ["world!", "friend!", "there!"],
		subtitle: "Welcome to lachlanpeacock.com",
		typeWriterEffect: true,
	},
	LINKS: [
		{
			label: "portfolio",
			href: "https://portfolio.lachlanpeacock.com",
			ariaLabel: "Lachlan's Portfolio",
			target: "_blank",
			iconName: "portfolio",
		},
		{
			label: "linkedin",
			href: "https://www.linkedin.com/in/lachlan-peacock/",
			ariaLabel: "Lachlan's LinkedIn Profile",
			target: "_blank",
			iconName: "linkedin",
		},
		{
			label: "github",
			href: "https://github.com/l-peacock",
			ariaLabel: "Lachlan's GitHub Profile",
			target: "_blank",
			iconName: "github",
		},
		{
			label: "trailblazer",
			href: "https://www.salesforce.com/trailblazer/lachlan-peacock",
			ariaLabel: "Lachlan's Salesforce Trailblazer Profile",
			target: "_blank",
			iconName: "salesforce",
		},
	],
	FOOTER: { text: `© ${new Date().getFullYear()} Lachlan Peacock` },
	DEVELOPER_INFO: {
		introduction: {
			text: "I see you, checking out the dev console 👀👨‍💻",
			style:
				"color: white; font-family: monospace; font-size: 1rem; padding: 0.5rem; border-radius: 0.5rem; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,0.7693671218487395) 0%, rgba(145,20,0,0.77) 85%, rgba(126,0,0,0.77) 100%);",
		},
		info: {
			text: "Since you're here, have some of the nerdy details:",
			body: {
				builtWith: "Lightning Web Components",
				framework: "https://lwc.dev/",
				repository: "https://github.com/l-peacock/lwr-portfolio-site",
				author: "Lachlan Peacock",
				hostedOn: "GitHub Pages",
				testFramework: "Jest",
			},
		},
	},
};

export { MAIN_CONTENT };
