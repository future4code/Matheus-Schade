export class RecipeFeed {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: string,
        private name: string
    ) { }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getName() {
        return this.name
    }

    public getCriatedAt() {
        return this.created_at
    }

    static toRecipeModel(data: any): RecipeFeed {
        return new RecipeFeed(data.id, data.title, data.description, data.name, data.created_at)
    }
}