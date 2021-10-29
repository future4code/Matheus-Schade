import React, { useContext } from "react"
import { CardArea, Date, ComentsAndEnjoys, Text, UserName, Coments, Enjoy, CountEnjoys, UpArrow, DownArrow, DetailButton } from "./styled"
import { useHistory } from "react-router";
import { goToPosts } from "../../../routes/coordinator";
import { GlobalContext } from "../../../contexts/GlobalContext";


const EachPostCard = ({ post }) => {
    const history = useHistory()
    const { enjoyPost, hatePost, stringToDate } = useContext(GlobalContext);

    return (
        <CardArea>
            <UserName>
                <p><strong>{post.username}</strong></p>
                <Date>criado em {stringToDate(post && post.createdAt)}</Date>
                <DetailButton onClick={() => goToPosts(history, post.id)}>Detalhes</DetailButton>
            </UserName>
            <Text>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </Text>
            <ComentsAndEnjoys>
                <Enjoy>
                    <UpArrow onClick={() => enjoyPost("posts", post.id)} />
                    <CountEnjoys>{post && post.voteSum ? post.voteSum : "0"}</CountEnjoys>
                    <DownArrow onClick={() => hatePost("posts", post.id)} />

                </Enjoy>
                <Coments>{post && post.commentCount === null ? (`Nenhum Comentário`) : (
                    (post && post.commentCount < 2 ? `${post && post.commentCount} Comentário` : `${post && post.commentCount} Comentários`)
                )}</Coments>
            </ComentsAndEnjoys>
        </CardArea>
    )
}

export default EachPostCard