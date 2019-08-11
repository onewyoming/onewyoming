import { ModelNode } from './model-node';
import { ModelNote } from './model-note';
import { ModelOwner } from './model-owner';

export class ModelEdge {
    id: number;
    uuid: string;
    title: string;
    description: string;
    aNode: ModelNode;
    zNode: ModelNode;
    owner: ModelOwner;
    costInUSCents: number;
    notes: ModelNote[];
}
