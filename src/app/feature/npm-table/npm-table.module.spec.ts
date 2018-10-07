import { NpmTableModule } from './npm-table.module';

describe('NpmTableModule', () => {
  let npmTableModule: NpmTableModule;

  beforeEach(() => {
    npmTableModule = new NpmTableModule();
  });

  it('should create an instance', () => {
    expect(npmTableModule).toBeTruthy();
  });
});
