import React, { useContext, useEffect } from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import { Body, CardArea, Date, CommentForm, ComentsAndEnjoys, Text, UserName, Enjoy, CountEnjoys, UpArrow, DownArrow } from "./styled"
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

const Posts = () => {
  useProtectedPage()
  const params = useParams()
  const { postList,
    commentList,
    getPostComments,
    form,
    onChange,
    onSubmitNewComment,
    enjoyPost,
    hatePost,
    enjoyComment,
    hateComment,
    stringToDate,
  } = useContext(GlobalContext);

  const filteredPost = postList.filter((item) => {
    return item.id === params.id
  })

  const post = filteredPost[0]

  useEffect(() => {
    getPostComments(params.id)
  }, [])

  const messageList = commentList && commentList.map((item) => {
    return (<CardArea key={item.id}>
      <UserName>
        <p><strong>{item && item.username}</strong> respondeu</p>
        <Date>criado em {stringToDate(item && item.createdAt)}</Date>
      </UserName>
      <Text>
        <h3>{item && item.title}</h3>
        <p>{item && item.body}</p>
      </Text>
      <ComentsAndEnjoys>
        <Enjoy>
          <UpArrow onClick={() => enjoyComment(params.id, item.id)} />
          <CountEnjoys>{item && item.voteSum === null ? "0" : item && item.voteSum}</CountEnjoys>
          <DownArrow onClick={(id) => hateComment(params.id, item.id)} />
        </Enjoy>
      </ComentsAndEnjoys>
    </CardArea>
    )
  })

  return (

    <Body>

      {post ? <CardArea>

        <UserName>
          <p><strong>{post && post.username}</strong> comentou </p>
          <Date>criado em {stringToDate(post && post.createdAt)}</Date>
        </UserName>
        <Text>
          <h3>{post && post.title}</h3>
          <p>{post && post.body}</p>
        </Text>
        <ComentsAndEnjoys>
          <Enjoy>
            <UpArrow onClick={() => enjoyPost("posts", post.id)} />
            <CountEnjoys>{post && post.voteSum === null ? "0" : post && post.voteSum}</CountEnjoys>
            <DownArrow onClick={() => hatePost("posts", post.id)} />
          </Enjoy>

        </ComentsAndEnjoys>

      </CardArea> : <h3> Carregando post, aguarde...</ h3>}

      <CommentForm onSubmit={(event) => onSubmitNewComment(event, params.id)}>

        <input
          placeholder={"Escreva seu Comentário"}
          name={"body"}
          value={form.body}
          onChange={onChange}
          required
          type={"text"}
        />
        <button>Enviar</button>
      </CommentForm>


        {commentList.length >= 1 ? messageList : <h3> Carregando respostas, aguarde...</ h3>}
    

    </Body>
  )
}

export default Posts;
