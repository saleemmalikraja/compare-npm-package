import { DumbGraphModule } from './dumb-graph.module';

describe('DumbGraphModule', () => {
  let dumbGraphModule: DumbGraphModule;

  beforeEach(() => {
    dumbGraphModule = new DumbGraphModule();
  });

  it('should create an instance', () => {
    expect(dumbGraphModule).toBeTruthy();
  });
});
