import { VdlProjectPage } from './app.po';

describe('vdl-project App', () => {
  let page: VdlProjectPage;

  beforeEach(() => {
    page = new VdlProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
