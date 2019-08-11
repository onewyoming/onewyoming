import { ModelNode } from './model-node';
import { ModelNote } from './model-note';
import { ModelOwner } from './model-owner';
import { ModelBase } from './model-base';

export class ModelEdge extends ModelBase {
    // id: number;
    // uuid: string;
    // title: string;
    // description: string;
    // aNode: ModelNode;
    // zNode: ModelNode;
    // owner: ModelOwner;
    // costInUSCents: number;
    // notes: ModelNote[];
    constructor(
        public id: number, 
        public uuid: string, 
        public title: string, 
        public description: string, 
        public dateCreated: Date, 
        public dateModified: Date, 
        public aNode: ModelNode, 
        public zNode: ModelNode, 
        public owner: ModelOwner, 
        public costInUSCets: number
        )
    {
        super(id, uuid, title, description, dateCreated, dateModified);
    }
}
