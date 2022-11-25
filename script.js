import { Contatos } from "./src/scripts/pages/contatos.page.js";
import { CriarConta } from "./src/scripts/pages/criar-conta.page.js";
import { Login } from "./src/scripts/pages/login.page.js";
import { CriarContato } from "./src/scripts/pages/criar-contato.page.js";
import { EditarContato } from "./src/scripts/pages/editar-contato.page.js";
import {ContatoUnico} from "./src/scripts/pages/contato-unico.page.js"


function redirectPages() {
    const root = document.getElementById('root')

    const Router = {
        '#login': { component: Login, path: '#login' },
        '#criar-conta': { component: CriarConta, path: '#criar-conta' },
        '#contatos': { component: Contatos, path: '#contatos' },
        '#contato-unico': { component: ContatoUnico, path: '#contato-unico' },
        '#criar-contato': { component: CriarContato, path: '#criar-contato' },
        '#editar-contato': { component: EditarContato, path: '#editar-contato' },
        '#404': { component: Login, path: '#404' }
    }

    let route;

    if(window.location.hash === "") {
        route = Router["#login"]
    }
    else {
        route = Router[window.location.hash] || Router['#404']
    }

    root.innerHTML = null
    root.append(route.component())
    window.history.pushState(null, null, route.path)
}

window.addEventListener('load', () => {
    redirectPages()
    window.addEventListener('hashchange', redirectPages)
})
