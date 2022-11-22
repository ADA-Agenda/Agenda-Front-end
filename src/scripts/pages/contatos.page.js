import { Header } from "./../components/header.component.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')

const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')


const getContacts = async () => {
    const response = await ContactGet()
    console.log(response);

    if(response.status === 200) {
        alert("FOI");
    }     
}


const events = () => {
    contacts.addEventListener('load', getContacts)
}


export const Contatos = () => {
    const header = Header()
    root.append(header)

    
    contacts.innerHTML = (`
        <a id="btn__criar" href="#criar-contato">
            Criar contato
        </a>
    `)
    
    events()
    return contacts
}
