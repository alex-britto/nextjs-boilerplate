import puppeteer from 'puppeteer'
import createBackstopScenarios from './createBackstopScenarios'
;(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('http://localhost:6006')

	const buttonsIDs: string[] = []
	const componentsLinks: {
		name: string
		links: { name: string; url: string }[]
	}[] = []
	const allComponentsButtons = await page.$$('#storybook-explorer-tree button')

	for (let i = 0; i < allComponentsButtons.length; i++) {
		const id = (await allComponentsButtons[i].getProperty('id')).toString()
		buttonsIDs.push(`#${id.replace('JSHandle:', '')}`)
	}

	for (let i = 0; i < buttonsIDs.length; i++) {
		if (i > 0) await page.click(`#storybook-explorer-tree ${buttonsIDs[i]}`)
		const componentID = buttonsIDs[i].replace('#', '')

		const storyLinks = await page.$$eval(
			`#storybook-explorer-tree a[id^="${componentID}"]:first-of-type`,
			(anchors) => {
				return anchors.map((a) => {
					const iframeID = a.href.split('/').at(-1)
					return {
						name: a.textContent,
						url: `http://localhost:6006/iframe.html?viewMode=story&id=${iframeID}`,
					}
				})
			}
		)
		componentsLinks.push({ name: componentID, links: storyLinks })
	}
	createBackstopScenarios(componentsLinks)

	await browser.close()
})()
