import { DumbSearchModule } from './dumb-search.module';

describe('DumbSearchModule', () => {
  let dumbSearchModule: DumbSearchModule;

  beforeEach(() => {
    dumbSearchModule = new DumbSearchModule();
  });

  it('should create an instance', () => {
    expect(dumbSearchModule).toBeTruthy();
  });
});
