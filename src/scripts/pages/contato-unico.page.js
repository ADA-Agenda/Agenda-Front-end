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
        
        populateList(response.data)
    } 
}


const populateList = contactsArray => {

    const arrayList = contactsArray.map((contact)=>{
        return `
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
            <div class="contacts__options">
                <button class="delete-button">
                    <i class="fa fa-trash"></i>
                </button>
                <button class="edit-button" id="${contact.id}" name="hype">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
        </div>
        `
    })
    const listHtml = arrayList.join(" ");
    contactsContainer.insertAdjacentHTML("beforeend", listHtml);

    const buttons = document.querySelectorAll('.contacts__options button.delete-button')
    buttons.forEach(b => b.addEventListener('click', deleteContact))

    const editButton = document.querySelectorAll('.contacts__options button.edit-button')
    editButton.forEach(b => b.addEventListener('click', () => editContac(b.id))) 
}


const editContac = (id) => {
    sessionStorage.setItem("@contactId", `${id}`)
    console.log(id)
    window.open('#editar-contato', '_self')    
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
