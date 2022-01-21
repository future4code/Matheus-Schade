export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private userId: string,
        private created_at: string
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

    public getUserId() {
        return this.userId
    }

    public getCriatedAt() {
        return this.created_at
    }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(data.id, data.title, data.description, data.userId, data.created_at)
    }
}