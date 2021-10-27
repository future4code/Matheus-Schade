import React, { useContext } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { GlobalContext } from "../../contexts/GlobalContext";
import EachPostCard from "../../components/Cards/EachPost/EachPostCard"
import { Form, Body,PostTitle, PostComment } from "./styled";
import { useHistory } from "react-router-dom"

const Feed = () => {
  useProtectedPage()
  const history = useHistory()
  const { postList, onSubmitComment, form, onChange } = useContext(GlobalContext);
  
  return (


    <Body>

      <Form onSubmit={(event) => onSubmitComment(event, history)}>
      <PostTitle
          placeholder={"Título do Post"}
          name={"title"}
          value={form.title}
          onChange={onChange}
          required
          type={"text"}
        />
        <PostComment
          placeholder={"Comentário do Post"}
          name={"body"}
          value={form.body}
          onChange={onChange}
          required
          type={"text"}
        />
        <button>Enviar</button>


      </Form>


      {postList.map((item) => {
        return <EachPostCard
          key={item.id}
          post={item} />
      })}
    </Body>
  )
}

export default Feed;
