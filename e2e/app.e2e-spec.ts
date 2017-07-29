import { DisplayingDataPage } from './app.po';

describe('displaying-data App', () => {
  let page: DisplayingDataPage;

  beforeEach(() => {
    page = new DisplayingDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
