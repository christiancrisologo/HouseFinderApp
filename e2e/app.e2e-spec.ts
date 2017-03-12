import { HouseFinderAppPage } from './app.po';

describe('house-finder-app App', function() {
  let page: HouseFinderAppPage;

  beforeEach(() => {
    page = new HouseFinderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
