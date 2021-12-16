export class Unfollow {
    constructor(
        private followerId: string,
        private userToFollowId: string
    ) { }

    public getFollowerId() {
        return this.followerId
    }

    public getUserToFollowId() {
        return this.userToFollowId
    }

    static toFollowModel(data: any): Unfollow {
        return new Unfollow(data.followerId, data.userToFollowId)
    }
}