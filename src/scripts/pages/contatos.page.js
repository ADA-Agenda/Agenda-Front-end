import { Header } from "./../components/header.component.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')

const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')
/* contacts.setAttribute('class', 'contacts__container') */

const contactsContainer = document.createElement('div')
contactsContainer.setAttribute('class', 'contacts__container')

let data=[]

const getContacts = async () => {
    const response = await ContactGet()

    if(response.status === 200){
        
        populateList(response.data)
        createSearchArea()
        data = response.data
    } 
}

const populateList = contactsArray => {

    const arrayList = contactsArray.map((contact)=>{
        return `
        <div class="contacts__card" id="${contact.id}">
            <div class="photo-name">
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

    const contactDiv = document.querySelectorAll('.photo-name')
    contactDiv.forEach(card => card.addEventListener('click', () => showContac(card.id))) 
}

const editContac = (id) => {
    console.log(id)
    sessionStorage.setItem("@contactId", `${id}`)
    window.open('#editar-contato', '_self')    
}

const showContac = (id) => {
    console.log(id)
    sessionStorage.setItem("@contactId", `${id}`)
    
    window.open('#contato-unico', '_self')    
}

const createSearchArea = () => {

    const menu = `
            <div class="search_container">
                <div>
                    <input type="text" id="search" placeholder="Buscar contato">
                    <button class="btn-busca">
                        Buscar  
                    </button>
                </div>
                <div>
                    <button class="btn-todos">
                        Todos
                    </button>
                </div>
            </div>
            `
    contacts.insertAdjacentHTML('beforeend', menu)  

    const btnSearch = document.querySelector('.btn-busca')
    btnSearch.addEventListener('click', searchContact)
    const btnAllContacts = document.querySelector('.btn-todos')
    btnAllContacts.addEventListener('click', searchAllContacts)
}



const deleteContact = () =>{
    console.log('DELETOU');
}


const searchContact = () =>{
    const inputSearch = document.querySelector('#search')
    const value = inputSearch.value
    
    if(value){
        const searchFilter = data.filter(contact => contact.nome.toLowerCase().includes(value.toLowerCase()))

        if(searchFilter.length !== 0){
            contactsContainer.innerHTML = "";
            populateList(searchFilter)
        } 
        else
            alert("Nenhum contato encontrado")
    } 

    inputSearch.value=""
}


const searchAllContacts = () => {
    contactsContainer.innerHTML = " ";
    populateList(data)
}


export const Contatos = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML = ''
    contactsContainer.innerHTML = ''

    contacts.appendChild(contactsContainer)
    
    getContacts()
    return contacts
}
