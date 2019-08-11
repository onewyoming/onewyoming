import { ModelTierCategory } from './model-tier-category';

describe('ModelTierCategory', () => {
  it('should create an instance', () => {
    expect(new ModelTierCategory(1, "Tier", "This is the description")).toBeTruthy();
  });
});
