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
        <div class="contacts__card" id="${contact.id}">
            <div>
                <div class="contacts__img">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Foto do contato">
                </div>
                <div class="contacts__data">
                    <p>${contact.nome}</p>
                    <span>${contact.email}</span>
                    <div>
                        ${contact.telefones.map(tel => `<span>${tel.numero}</span>`).join(" ")}
                    </div>   
                </div>
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
