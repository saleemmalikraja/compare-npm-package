import { NpmCardModule } from './npm-card.module';

describe('NpmCardModule', () => {
  let npmCardModule: NpmCardModule;

  beforeEach(() => {
    npmCardModule = new NpmCardModule();
  });

  it('should create an instance', () => {
    expect(npmCardModule).toBeTruthy();
  });
});
