import { Selector } from 'testcafe';


fixture("Home page")
.page("https://start.duckduckgo.com/")
const hamburger = Selector('#pg-index > div > div.header-wrap--home.js-header-wrap > div > a');
const themes= Selector(() => {
    return document.getElementsByClassName('nav-menu__item clear');
});

const dark = Selector('#content_internal > div.settings-page-wrapper > div.set-main > div.set-detail.js-set-detail > form > div > div > div:nth-child(4)');

// const save= Selector(() => {
//     return document.getElementsByClassName('btn  btn--primary  js-set-exit');
// });

const save = Selector('#content_internal > div.settings-page-wrapper > div.set-main > div.set-main-footer > a').withText('Save and Exit');

test("Hamburger", async t => {

await t
    
    .click(hamburger)
    .click(themes)
    .click(dark)
    .click(save)
    const page= Selector('#pg-index');
    const bgcolour  = await page.getStyleProperty('background-color');

    // await t.expect(bgcolour).eql('1', {timeout: 5000});
    await t.expect(page.getStyleProperty('background-color')).eql('rgb(28, 28, 28)', {timeout: 5000})
});
