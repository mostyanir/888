import { HometaskPage } from './app.po';

describe('hometask App', function() {
  let page: HometaskPage;

  beforeEach(() => {
    page = new HometaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
