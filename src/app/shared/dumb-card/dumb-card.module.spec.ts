import { DumbCardModule } from './dumb-card.module';

describe('DumbCardModule', () => {
  let dumbCardModule: DumbCardModule;

  beforeEach(() => {
    dumbCardModule = new DumbCardModule();
  });

  it('should create an instance', () => {
    expect(dumbCardModule).toBeTruthy();
  });
});
