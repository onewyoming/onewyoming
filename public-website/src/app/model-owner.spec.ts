import { ModelOwner } from './model-owner';

describe('ModelOwner', () => {
  it('should create an instance', () => {
    expect(new ModelOwner(1, 'title', 'description')).toBeTruthy();
  });
});
