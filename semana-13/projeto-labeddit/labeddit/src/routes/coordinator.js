export const goToLogin = (history) => {
    history.push("/")
}

export const goToPosts = (history, id) => {
    history.push(`/posts/${id}`)
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}