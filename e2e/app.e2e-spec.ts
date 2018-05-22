import { WikipediaPage } from './app.po';

describe('wikipedia App', () => {
  let page: WikipediaPage;

  beforeEach(() => {
    page = new WikipediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
