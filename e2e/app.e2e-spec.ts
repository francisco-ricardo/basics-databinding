import { BasicsDatabindingPage } from './app.po';

describe('basics-databinding App', () => {
  let page: BasicsDatabindingPage;

  beforeEach(() => {
    page = new BasicsDatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
