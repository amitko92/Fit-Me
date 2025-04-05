
export class ItemEntity {

    id: string;
    itemName: string;
    imageName: string;
    userId: string;
    tags: string[];
    itemType: string;
    creationDate: string;
    description: string;

    constructor(id: string, imageName: string, itemName: string, userId: string, 
        tags: string[], itemType: string, creationDate: string, description: string) {

        this.id = id;
        this.imageName = imageName;
        this.itemName = itemName;
        this.userId = userId;
        this.tags = tags;
        this.itemType = itemType;
        this.creationDate = creationDate;
        this.description = description;
    }
}