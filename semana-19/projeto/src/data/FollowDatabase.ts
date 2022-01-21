import { Follow } from "../entities/Follow";
import { RecipeFeed } from "../entities/RecipeFeed";
import { Unfollow } from "../entities/Unfollow";
import { BaseDatabase } from "./BaseDatabase";

export class FollowDatabase extends BaseDatabase {

    public async followUser(follow: Follow): Promise<void> {
        try {

            await BaseDatabase.connection(`cookenu_follow`).insert({
                id: follow.getId(),
                followerId: follow.getFollowerId(),
                userToFollowId: follow.getUserToFollowId()
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async unfollowUser(unfollow: Unfollow): Promise<void> {
        try {

            await BaseDatabase.connection(`cookenu_follow`).delete().where({
                followerId: unfollow.getFollowerId(),
                userToFollowId: unfollow.getUserToFollowId()
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllFollows(follow: Follow): Promise<Follow> {
        try {
            const followHistory = await BaseDatabase.connection(`cookenu_follow`).select().where({ followerId: follow.getFollowerId(), userToFollowId: follow.getUserToFollowId() })
            return followHistory[0] && Follow.toFollowModel(followHistory[0])

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getFollow(user_id: string, followed_id: string): Promise<any> {
        try {

            const getEspecificFollow = await BaseDatabase.connection(`cookenu_follow`).select().where({ followerId: user_id, userToFollowId: followed_id })
            return getEspecificFollow[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getFeed(id: string): Promise<RecipeFeed[]> {
        try {
            const feed = await BaseDatabase.connection.raw(`
            SELECT 
            cookenu_recipe.id as "Id da receita",
            cookenu_recipe.title, 
            cookenu_recipe.description, 
            cookenu_recipe.created_at, 
            name 
            FROM cookenu_recipe
            JOIN cookenu_follow ON cookenu_recipe.userId = cookenu_follow.userToFollowId
            JOIN cookenu_user ON cookenu_user.id = cookenu_follow.userToFollowId
            WHERE cookenu_follow.followerId = "${id}";
            `)

            return feed[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}