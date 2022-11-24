
const baseUrl = 'http://localhost:5000/v1/'



export const ContactGet = async () => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')  

    const token = sessionStorage.getItem("@token")
    headers.append('Authorization', token)
    const response = await fetch(baseUrl + 'contact', { headers, method: "GET" })
    return await response.json()
}


export const ContactPost = async (formData) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const token = sessionStorage.getItem("@token");
    headers.append('Authorization', token);
    
    const contato = ArrangeObject(formData);
    const body = JSON.stringify(contato);
    const response = await fetch(baseUrl + 'contact', { body, headers, method: "POST" })
    return await response.json()

}

<<<<<<< HEAD
=======


>>>>>>> ecfb9bb4eb43a5ccb7d1bc02e985ed4715c89133
export const ContactPatch = async (formData) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const token = sessionStorage.getItem("@token");
    headers.append('Authorization', token);

    const contato = ArrangeObject(formData);
    const body = JSON.stringify(contato);
    const response = await fetch(baseUrl + 'contact', { body, headers, method: "PATCH" })
    return await response.json()

}

<<<<<<< HEAD
=======

>>>>>>> ecfb9bb4eb43a5ccb7d1bc02e985ed4715c89133
function ArrangeObject(formData) {

    const entries = Object.fromEntries(formData);

    const contato = {
        idContato: entries.idContato,
        nome: entries.nome,
        apelido:entries.apelido,
        telefones:[{tipo:"celular", numero: entries.celular}, {tipo:"casa", numero: entries.casa} ,{tipo:"trabalho", numero: entries.trabalho} ],
        email: entries.email,
        endereco : {
            cep : entries.cep,
            logradouro : entries.logradouro,
            estado : entries.estado,
            pais : entries.pais,
            cidade : entries.pais
        },
        notas: entries.notas,
        foto: ""
    }
    return contato;

}

