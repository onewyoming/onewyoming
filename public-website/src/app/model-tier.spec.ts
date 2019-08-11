import { ModelTier } from './model-tier';
import { MockTierCategory } from './mock-tier-category';

describe('ModelTier', () => {
  it('should create an instance', () => {
    expect(new ModelTier(1, "title", "description", new MockTierCategory().mockTierCategoryServing)).toBeTruthy();
  });
});
