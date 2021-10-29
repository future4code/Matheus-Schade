import React, { useContext } from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { GlobalContext } from "../../contexts/GlobalContext";
import EachPostCard from "../../components/Cards/EachPost/EachPostCard"
import { Form, Body, PostTitle, PostComment } from "./styled";
import { useHistory } from "react-router-dom"

const Feed = () => {
  useProtectedPage()
  const history = useHistory()
  const { postList, onSubmitNewPost, form, onChange } = useContext(GlobalContext);

  const list = postList && postList.map((item) => {
    return <EachPostCard
      key={item.id}
      post={item} />
  })

  return (

    <Body>

      <Form onSubmit={(event) => onSubmitNewPost(event, history)}>
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

      {postList.length >= 1 ? list : <h3> Carregando, aguarde...</ h3>}


    </Body>
  )
}

export default Feed;
