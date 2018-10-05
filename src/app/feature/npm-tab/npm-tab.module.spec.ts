import { NpmTabModule } from './npm-tab.module';

describe('NpmTabModule', () => {
  let npmTabModule: NpmTabModule;

  beforeEach(() => {
    npmTabModule = new NpmTabModule();
  });

  it('should create an instance', () => {
    expect(npmTabModule).toBeTruthy();
  });
});
