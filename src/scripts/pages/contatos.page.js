import { Header } from "./../components/header.component.js"
import { ContactDelete, ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')

const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contacts')
contacts.setAttribute('class', 'p_container')

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
            <div class="photo-name" id="${contact.id}">
                <div class="contacts__img">
                    <img src="data:image/jpeg;base64,${contact.foto}" alt="Foto do contato">
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
                <button class="delete-button" id="${contact.id}">
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
    buttons.forEach(b => b.addEventListener('click', () => deleteContact(b.id)))

    const editButton = document.querySelectorAll('.contacts__options button.edit-button')
    editButton.forEach(b => b.addEventListener('click', () => editContac(b.id))) 

    const contactDiv = document.querySelectorAll('.photo-name')
    contactDiv.forEach(card => card.addEventListener('click', () => showContac(card.id))) 
}


const editContac = (id) => {
    sessionStorage.setItem("@contactId", `${id}`)
    window.open('#editar-contato', '_self')    
}


const showContac = (id) => {
    /* console.log(id) */
    sessionStorage.setItem("@contactId", `${id}`)
    window.open('#contato-unico', '_self')    
}

const createSearchArea = () => {

    const menu = `
            <div class="search_container">
                <div>
                    <button id="btnExportToCsv" class="btn-todos" style="margin-right: 10px;">
                        Exportar
                    </button>
                    <input type="text" id="search" placeholder="Buscar contato">
                    <button class="btn-busca">
                        Buscar
                    </button>
                </div>
                <div>
                    <button id="btn-todos" class="btn-todos">
                        Todos
                    </button>
                    
                    <a class="btn-novo" href="#criar-contato" target="_self">
                        Novo
                    </a>
                </div>
            </div>
            `
    contacts.insertAdjacentHTML('afterbegin', menu)  

    const btnSearch = document.querySelector('.btn-busca')
    btnSearch.addEventListener('click', searchContact)
    
    const btnAllContacts = document.querySelector('#btn-todos')
    btnAllContacts.addEventListener('click', searchAllContacts)

    const btnExportToCsv = document.querySelector('#btnExportToCsv')
    btnExportToCsv.addEventListener('click', exportContactsToCsv)
}

const exportContactsToCsv = async () => {
    const response = await ContactGet()

    if(response.status === 200){
        let csv = generateCsv(response.data)
        download(csv)
    }
}

function generateCsv(contacts) {
    let csv = 'fn,ln,email,phone'

    contacts.forEach((contact, index, array) => {
        let fullName = contact.nome.trim()
        let indexOfFirstWhiteSpace = fullName.indexOf(' ')
        let fn
        let ln

        if (indexOfFirstWhiteSpace != -1) {
            fn = fullName.substring(0, indexOfFirstWhiteSpace).trim()
            ln = fullName.substring(indexOfFirstWhiteSpace + 1).trim()
        }

        else {
            fn = fullName
            ln = ''
        }

        let email = contact.email
        let phone = contact.telefones[0].numero

        csv += `\n${fn},${ln},${email},${phone}`
    })

    return csv
}

const download = function (data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'contatos.csv');
    a.click()
}

const deleteContact =  async (id) =>{
    const resp = await ContactDelete(id)

    if(resp.status === 200){
        const response = await ContactGet()
        contactsContainer.innerHTML = " ";

        if(response.status === 200){
            populateList(response.data)
            data = response.data
        } 
    }
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

const events = () => {
    window.addEventListener('load', getContacts)
}


export const Contatos = () => {
    const header = Header()
    root.append(header)

    contacts.innerHTML= " ";
    contactsContainer.innerHTML = " ";

    contacts.appendChild(contactsContainer)
    
    getContacts()
    events()
    return contacts
}
