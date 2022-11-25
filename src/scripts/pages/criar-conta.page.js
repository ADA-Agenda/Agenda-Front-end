import { UserPost } from "../services/user.service.js";
import Compress from "compress.js";

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')


const criarConta = async (event) => {
    event.preventDefault()
    const fd = new FormData(signup)

    const foto = await recuperarEComprimirFoto()
    if (foto) fd.append('foto', foto.data)

    const response = await UserPost(fd)

    if(response.status === 200) {
        window.open('#login', '_self')
    }    
}



const recuperarEComprimirFoto = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress()
        const upload = signup.querySelector('input[type="file"]')
        const files = [...upload.files]
    
        const options = {
            size: 2,
            quality: 0.75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false,
        }
    
        compress.compress(files, options)
            .then((data) => resolve(data[0]))
            .catch(() => reject(null))
    })
}



const events = () => {
    signup.addEventListener('submit', criarConta)
}


export const CriarConta = () => {
    signup.innerHTML = (`
        <h1>
          Signup
        </h1>
        <div class="form__name">
            <label for="nome">Nome</label>
            <input type="text" class="form__name__input" name="nome" id="nome">
        </div>
        <div class="form__email">
            <label for="email">E-mail</label>
            <input type="email" class="form__email__input" name="email" id="email">
        </div>
        <div class="form__password">
            <label for="senha">Senha</label>
            <div class="form__password__input">
              <input type="password" name="senha" id="senha">
              <img id="show-password" src="">
            </div>
        </div>
        <label for="inputGroupFile04">Foto</label>
        <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/*">
        </div>
        <div>
            <button type="submit" id="btn__login">Criar conta</button>
        </div> 
    `)

    events()
    return signup
}
