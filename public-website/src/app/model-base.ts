export class ModelBase {
    constructor(
        public id: number, 
        public uuid: string, 
        public title: string, 
        public description: string, 
        public dateCreated: Date, 
        public dateModified?: Date)
        {
            
        }
}
