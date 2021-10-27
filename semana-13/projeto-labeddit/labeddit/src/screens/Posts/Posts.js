import React, { useContext, useEffect, useState } from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardArea, Date, CommentForm, ComentsAndEnjoys, Text, UserName, Coments, Enjoy, CountEnjoys, UpArrow, DownArrow, DetailButton } from "./styled"
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const Posts = () => {
  const params = useParams()
  const { postList } = useContext(GlobalContext);

  const filteredPost = postList.filter((item) => {
    return item.id === params.id
  })

  const post = filteredPost[0]

  console.log(post)

  useProtectedPage()
  return (

    <div>
      <CardArea>
        <UserName>
          <p><strong>{post && post.username}</strong></p>
          <Date>criado em {post && post.createdAt}</Date>
        </UserName>
        <Text>
          <h3>{post && post.title}</h3>
          <p>{post && post.body}</p>
        </Text>
        <ComentsAndEnjoys>
          <Enjoy>
            <UpArrow />
            <CountEnjoys>{post && post.voteSum === null ? "0" : post && post.voteSum}</CountEnjoys>
            <DownArrow />

          </Enjoy>
          <Coments>{post && post.commentCount === null ? (`Nenhum Comentário`) : (
            post && post.commentCount.length === 1 ? (`${post && post.commentCount.length} Comentário`) : (`${post && post.commentCount.length} Comentários`)
          )}</Coments>
        </ComentsAndEnjoys>


      </CardArea>


      <CommentForm>
        
        <input
          placeholder={"Escreva seu Comentário"}
        />
        <button>Enviar</button>
      </CommentForm>



    </div>
  )
}

export default Posts;
