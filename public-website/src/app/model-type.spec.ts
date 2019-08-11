import { ModelType } from './model-type';
import { MockType } from './mock-type';

describe('ModelType', () => {
  it('should create an instance', () => {
    expect(new MockType().mockTypeBuildingResidentialSingle).toBeTruthy();
  });
});
