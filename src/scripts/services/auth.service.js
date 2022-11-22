
const baseUrl = 'http://localhost:5000/v1/'

const headers = new Headers()
headers.append('Content-Type', 'application/json')


export const AuthPost = async (formData) => {
    const obj = Object.fromEntries(formData)
    const body = JSON.stringify(obj)
    const response = await fetch(baseUrl + 'auth', { body, headers, method: "POST" })
    return await response.json()
}


// AuthPost(fd)
//     .then((response) => {
//         console.log(response);

//         if (response.status !== 200) {
//             window.alert('Deu ruim!')
//         }
//         else {
//             window.alert('Entrou na aplicação')
//             return response.json()
//         }
//     })
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch((error) => {
//         console.log(error);
//         window.alert('Deu ruim!')
//     })