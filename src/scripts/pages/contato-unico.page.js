import { Header } from "../components/header.component.js"
import { ContactGetById } from "../services/contact.service.js"

const root = document.getElementById('root')

const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')

const contactsContainer = document.createElement('div')
contactsContainer.setAttribute('class', 'contacts__container')


const getContact = async () => {
    const response = await ContactGetById()

    if(response.status === 200){
        console.log("status 200")
        renderContact(response.data)
    } 
    else{
        console.log("erro")
    }
}


const renderContact = contact => {

        const contactHtml = `
        <div class="container-contato">
        <div class="contato-photo">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Foto do contato">
        </div>
        <div class="contato-dados">
            <p>Nome: ${contact.nome}</p>
            <p>Apelido: ${contact.apelido}</p>
            <p>Email: ${contact.email}</p>
            <p>Notas: ${contact.notas}</p>
        </div>

        <div class="contato-dados">
            <p>Telefone celular: ${contact.telefones[0].numero}</p>
            <p>Telefone residencial: ${contact.telefones[1].numero}</p>
            <p>Telefone trabalho: ${contact.telefones[2].numero}</p>
            <p>Endereço: ${contact.endereco.logradouro} ${contact.endereco.cidade} ${contact.endereco.estado} ${contact.endereco.cep} ${contact.endereco.pais} </p>
            
        </div>
    </div>

        `
        
    contactsContainer.insertAdjacentHTML("beforeend", contactHtml);

}


export const ContatoUnico = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML= " ";
    contactsContainer.innerHTML = " ";

    contacts.appendChild(contactsContainer)
    
    getContact()
    return contacts
}
