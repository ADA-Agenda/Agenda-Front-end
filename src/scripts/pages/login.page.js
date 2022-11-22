import { AuthPost } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')


const entrar = async (event) => {
    event.preventDefault()
    const fd = new FormData(login)
    const response = await AuthPost(fd)

    if(response.status === 200) {
        const {token, ...user} = response.data
        sessionStorage.setItem('@user', JSON.stringify(user))
        sessionStorage.setItem('@token', token)

        window.open('#contatos', '_self')
    }
    // if(response.status !== 200) window.alert('Deu ruim')
    // else window.alert('Deu bom!')

    // const json = await response.json()
    // console.log(json);
}


const events = () => {
    login.addEventListener('submit', entrar)
}

export const Login = () => {
    login.innerHTML = (`
        <h1>
          Login
        </h1>
        <div class="form__email">
          <label for="email">E-mail</label>
          <input class="form__email__input" type="email" name="email" id="email">
        </div>
        <div class="form__password">
          <label for="password">Senha</label>
          <div class="form__password__input">
            <input type="password" name="senha" id="senha">
            <img id="show-password" src="">
          </div>
        </div>
        <div class="form__signup">
          <span>Ainda não tem cadastro?</span>
          <a href="/#criar-conta" target="_self">Clique Aqui</a>  
        </div>
        <div>
          <button type="submit" id="btn__login">Entrar</button>
        </div> 
    `)

    events()
    return login
}
