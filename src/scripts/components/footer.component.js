const footer = document.createElement('footer')
footer.setAttribute('id', 'c-footer')

export const Footer = () => {
    const user = JSON.parse(sessionStorage.getItem('@user'))

    footer.innerHTML = `
    <div style="padding: 10px;">
            Todos os direitos reservados.
    </div>
    <div>

        <a href="">
            <img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png" width="16" />
            Damares
        </a>

        <a href="">
            <img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png" width="16" />
            Daniel
        </a>
        <a href="">
            <img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png" width="16" />
            Eduardo
        </a>

        <a href="">
            <img src="https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png" width="16" />
            Leonardo
        </a>

    </div>
    `
    return footer
}