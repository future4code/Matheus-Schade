export enum POST_TYPES {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export interface post {
    userId: string,
    id: string,
    image: string,
    description: string,
    createdAt: string,
    type: POST_TYPES
}