import { NpmGraphModule } from './npm-graph.module';

describe('NpmGraphModule', () => {
  let npmGraphModule: NpmGraphModule;

  beforeEach(() => {
    npmGraphModule = new NpmGraphModule();
  });

  it('should create an instance', () => {
    expect(npmGraphModule).toBeTruthy();
  });
});
