import { DumbTableModule } from './dumb-table.module';

describe('DumbTableModule', () => {
  let dumbTableModule: DumbTableModule;

  beforeEach(() => {
    dumbTableModule = new DumbTableModule();
  });

  it('should create an instance', () => {
    expect(dumbTableModule).toBeTruthy();
  });
});
