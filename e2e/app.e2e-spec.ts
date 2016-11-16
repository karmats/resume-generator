import { ResumeGeneratorPage } from './app.po';

describe('resume-generator App', function() {
  let page: ResumeGeneratorPage;

  beforeEach(() => {
    page = new ResumeGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
