import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";

const Posts = () => {
  useProtectedPage()
  return (
    <div>
      Posts
    </div>
  )
}

export default Posts;
