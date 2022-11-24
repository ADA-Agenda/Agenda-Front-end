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
                <button>
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        `
    })
    const listHtml = arrayList.join(" ");
    contactsContainer.insertAdjacentHTML("beforeend", listHtml);

    const buttons = document.querySelectorAll('.contacts__options button')
    buttons.forEach(b => b.addEventListener('click', deleteContact))
}



const createSearchArea = () => {

    const menu = `
            <input type="text" id="search" placeholder="Buscar contato">
            <button class="btn-busca">
                Buscar
            </button>
            `
    contacts.insertAdjacentHTML('beforeend', menu)  
    const btnSearch = document.querySelector('.btn-busca')
    btnSearch.addEventListener('click', searchContact)
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



export const Contatos = () => {
    const header = Header()
    root.append(header)

    contacts.appendChild(contactsContainer)
    
    getContacts()
    return contacts
}
