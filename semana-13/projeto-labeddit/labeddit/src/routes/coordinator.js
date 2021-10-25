export const goToLogin = (history) => {
    history.push("/")
}

export const goToPosts = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToCadastro = (history, id) => {
    history.push(`/posts/${id}`)
}