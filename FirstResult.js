import { Selector ,ClientFunction} from 'testcafe';


fixture("Home page")
.page("https://start.duckduckgo.com/")

    test('first suggestion', async t => {
    await t
    .typeText("#search_form_input_homepage","supercalafragalistic")

    const autosuggest = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap')
    .child('div')
    .withText('supercalafragalisticexpialadoshus');
    const selectedIndex = await(ClientFunction(() => document.getElementsByTagName('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap > div:nth-child(1)')[0].selectedIndex)());

    expect(selectedIndex).eql(0);
});