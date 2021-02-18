import { Selector } from 'testcafe';


fixture("Home page")
.page("https://start.duckduckgo.com/")

    test('number of suggestion', async t => {
    await t
    .typeText("#search_form_input_homepage","super");
    const autocomplete = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap').child().count;
  
    await t.expect(autocomplete).eql(10);
});
   