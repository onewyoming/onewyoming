import { ModelTier } from './model-tier';
import { MockTierCategory } from './mock-tier-category';

export class MockTier {
    mockTierInternal: ModelTier = new ModelTier(
        1, 
        "Internal",
        "We own this",
        new MockTierCategory().mockTierCategoryServing
    );
    mockTierSubsidiary: ModelTier = new ModelTier(
        2, 
        "Subsidiary",
        "We own the subsidiary but we have to show this as a separate item for tax purposes",
        new MockTierCategory().mockTierCategoryServing
    );
    mockTierExternal: ModelTier = new ModelTier(
        3, 
        "External",
        "This belongs to a competitor but we serve this",
        new MockTierCategory().mockTierCategoryServing
    );
    mockTierExternalNoContract: ModelTier = new ModelTier(
        4, 
        "External No Contract",
        "We don't have a valid contract to use these. Do not use these.",
        new MockTierCategory().mockTierCategoryNonServing
    );
}
