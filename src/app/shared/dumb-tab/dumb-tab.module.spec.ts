import { DumbTabModule } from './dumb-tab.module';

describe('DumbTabModule', () => {
  let dumbTabModule: DumbTabModule;

  beforeEach(() => {
    dumbTabModule = new DumbTabModule();
  });

  it('should create an instance', () => {
    expect(dumbTabModule).toBeTruthy();
  });
});
