import { Selector } from 'testcafe';


fixture("Home page")
.page("https://start.duckduckgo.com/")

test("Logo", async t => {
    const logo = await Selector('#logo_homepage_link').exists;   
    
});
