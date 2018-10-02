import { DumbNavbarModule } from './dumb-navbar.module';

describe('DumbNavbarModule', () => {
  let dumbNavbarModule: DumbNavbarModule;

  beforeEach(() => {
    dumbNavbarModule = new DumbNavbarModule();
  });

  it('should create an instance', () => {
    expect(dumbNavbarModule).toBeTruthy();
  });
});
