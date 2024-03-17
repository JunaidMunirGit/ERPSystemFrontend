import { ERPSystemTemplatePage } from './app.po';

describe('ERPSystem App', function() {
  let page: ERPSystemTemplatePage;

  beforeEach(() => {
    page = new ERPSystemTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
