import { Selector } from 'testcafe';


fixture("Traffic page")
.page("https://start.duckduckgo.com/traffic")

const section = Selector('#content_wrapper > div:nth-child(2) > div:nth-child(5) > div');


test('total queries', async t => {
    
    await t
    .click(section)
    const queries= Selector('#content_wrapper > div:nth-child(2) > div:nth-child(5) > div > div.wrap > div.traffic__year__right')
    .child('div')
    .withText('Total Queries');

    const dec = Selector('#content_wrapper > div:nth-child(2) > div:nth-child(5) > div > div:nth-child(2)')
    .child('div')
    .withAttribute('h3', 'December ');

    const jan = Selector('#content_wrapper > div:nth-child(2) > div:nth-child(5) > div > div:nth-child(13)').nth(-1)
    .child('div')
    .withAttribute('h3', 'January ');


});