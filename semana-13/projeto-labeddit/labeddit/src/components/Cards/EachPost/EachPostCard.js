import React from "react"
import { CardArea, Date, ComentsAndEnjoys, Text, UserName, Coments, Enjoy, CountEnjoys, UpArrow, DownArrow, DetailButton } from "./styled"
import { useHistory } from "react-router";
import { goToPosts } from "../../../routes/coordinator";

const EachPostCard = ({ post }) => {
    const history = useHistory()

    return (
        <CardArea>
            <UserName>
                <p><strong>{post.username}</strong></p>
                <Date>criado em {post.createdAt}</Date>
                <DetailButton onClick={() => goToPosts(history, post.id)}>Detalhes</DetailButton>
            </UserName>
            <Text>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </Text>
            <ComentsAndEnjoys>
                <Enjoy>
                    <UpArrow />
                    <CountEnjoys>{post.voteSum ? post.voteSum : "0"}</CountEnjoys>
                    <DownArrow />

                </Enjoy>
                <Coments>{post.commentCount === null ? (`Nenhum Comentário`) : (
                    post.commentCount.length === 1 ? (`${post.commentCount.length} Comentário`) : (`${post.commentCount.length} Comentários`)
                )}</Coments>
            </ComentsAndEnjoys>
        </CardArea>
    )
}

export default EachPostCard