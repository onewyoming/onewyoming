import { ModelType } from './model-type';
import { ModelTier } from './model-tier';
import { ModelNote } from './model-note';

export class ModelNode {
    id: number;
    uuid: string;
    title: string;
    description: string;
    type: ModelType;
    tier: ModelTier;
    notes: ModelNote[];
}
