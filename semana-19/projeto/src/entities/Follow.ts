export class Follow {
    constructor(
        private id: string,
        private followerId: string,
        private userToFollowId: string
    ) { }

    public getId() {
        return this.id
    }

    public getFollowerId() {
        return this.followerId
    }

    public getUserToFollowId() {
        return this.userToFollowId
    }

    static toFollowModel(data: any): Follow {
        return new Follow(data.id, data.followerId, data.userToFollowId)
    }
}