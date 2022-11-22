import { ContactPost } from "../services/contact.service.js"


const formCreate = document.createElement('form')
formCreate.setAttribute('id', 'p-create')

const criarContato = async (event) => {
    event.preventDefault()
    const fd = new FormData(signup)
    const response = await ContactPost(fd)

    if(response.status === 200) {
        window.open('#contatos', '_self')
    }    
}


const events = () => {
    formCreate.addEventListener('submit', criarContato)
}

export const CriarContato = () => {
    formCreate.innerHTML = (`
        /* criar o form aqui */
    `)

    events()
    return formCreate
}
