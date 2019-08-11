import { ModelTierCategory } from './model-tier-category';

export class MockTierCategory {
    mockTierCategoryServing: ModelTierCategory = new ModelTierCategory(
        1,
        'Serving',
        'These tiers are able to serve more customers'
    );
    mockTierCategoryNonServing: ModelTierCategory = new ModelTierCategory(
        2, 
        'Non-serving',
        'These tiers are not able to serve more customers'
    );
}
