import { ModelType } from './model-type';

export class MockType {
    mockTypeBuildingResidentialSingle: ModelType = new ModelType(
        1,
        "Building Residential Single",
        "This is a single, stand-alone residential building"
    );
    mockTypeBuildingResidentialMultiple: ModelType = new ModelType(
        2,
        "Building Residential Multiple",
        "This is a residential building with multiple units."
    );
    mockTypeBuildingCommercialSingle: ModelType = new ModelType(
        3,
        "Building Commercial Single",
        "this is a commercial location with a single customer"
    );
    mockTypeBuildingCommercialMultiple: ModelType = new ModelType(
        3,
        "Building Commercial Multiple",
        "this is a commercial location with multiple customers"
    );
}
