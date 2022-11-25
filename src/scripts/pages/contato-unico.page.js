import { Header } from "../components/header.component.js"
import { ContactGetById } from "../services/contact.service.js"

const root = document.getElementById('root')

/* const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts') */

const contactsContainer = document.createElement('div')
contactsContainer.setAttribute('class', 'p-contact_byId')


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
                <img src="data:image/jpeg;base64,${contact.foto}" alt="Foto do contato">
                <h1>${contact.nome}</h1>
            </div>
            <div class="contato-dados">
                
                <span>Nome </span>
                <p>${contact.nome}</p>

                <span>Apelido </span>
                <p>${contact.apelido}</p>

                <span>E-mail </span>
                <p>${contact.email}</p>

                <span>Notas </span>
                <p>${contact.notas}</p>
            </div>
    
            <div class="contato-dados">
                <span>celular </span>
                <p>${contact.telefones[0].numero}</p>

                <div class="contato-group">
                    <div>
                        <span>residencial </span>
                        <p>${contact.telefones[1].numero}</p>
                    </div>
    
                    <div>
                        <span>comercial </span>
                        <p>${contact.telefones[2].numero}</p>
                    </div>
                </div>

                <span>Endereço </span>
                <p>${contact.endereco.logradouro} ${contact.endereco.cidade} ${contact.endereco.estado} ${contact.endereco.cep} ${contact.endereco.pais} </p>        
                
                <div class="contato-group">
                    <div>
                        <span>Cidade </span>
                        <p>${contact.endereco.cidade} ${contact.endereco.estado} ${contact.endereco.pais} </p>
                    </div>   
    
                    <div>
                        <span>CEP </span>
                        <p>${contact.endereco.cep}</p> 
                    </div> 
                </div>
            </div>
        </div>
        <a href="#contatos"><i class="fa fa-solid fa-reply"></i></a>
    ` 
    contactsContainer.insertAdjacentHTML("beforeend", contactHtml);
}


export const ContatoUnico = () => {
    const header = Header()
    root.append(header)

    /* contacts.innerHTML= " ";
    contactsContainer.innerHTML = " ";
    contacts.appendChild(contactsContainer) */

    contactsContainer.innerHTML = " ";
    
    getContact()
    return contactsContainer
}
