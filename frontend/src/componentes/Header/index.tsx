import logo from '../../assets/img/logo.svg'
import './style.css'

function Header(){
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Projeto desenvolvido por <a href="https://github.com/fagnercruz">@fagnercruz</a></p>
                <p>Semana Spring React - DEV Superior - 14 a 20 de Novembro de 2022</p>
            </div>
        </header>
    )
}

export default Header