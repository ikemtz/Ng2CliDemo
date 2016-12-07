import { MyFirstAngularCliAppPage } from './app.po';

describe('my-first-angular-cli-app App', function() {
  let page: MyFirstAngularCliAppPage;

  beforeEach(() => {
    page = new MyFirstAngularCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
