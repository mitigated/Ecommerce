import { OoshopPage } from './app.po';

describe('ooshop App', () => {
  let page: OoshopPage;

  beforeEach(() => {
    page = new OoshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
