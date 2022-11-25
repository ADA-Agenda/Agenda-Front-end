const baseUrl = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('Content-Type', 'application/json')
const token = sessionStorage.getItem("@token");
headers.append('Authorization', token);


export const ContactGet = async () => {
    const response = await fetch(baseUrl + 'contact', { headers, method: "GET" })
    return await response.json()
}


export const ContactPost = async (formData) => {
    const contato = ArrangeObject(formData);
    const body = JSON.stringify(contato);
    const response = await fetch(baseUrl + 'contact', { body, headers, method: "POST" })
    return await response.json()
}


export const ContactPatch = async (formData) => {
    const contato = ArrangeObject(formData);
    const body = JSON.stringify(contato);
    const response = await fetch(baseUrl + 'contact', { body, headers, method: "PATCH" })
    return await response.json()
}


export const ContactDelete = async (id) => {
    const body = JSON.stringify({idContato: id});
    const response = await fetch(baseUrl + 'contact', { body, headers, method: "DELETE" })
    return await response.json()
}


function ArrangeObject(formData) {

    const entries = Object.fromEntries(formData);

    const contato = {
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