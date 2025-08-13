import '../estilos/Header.css';
import logo from '../assets/logo.jpg.jpg';




function Header() {
    return (
        <header className="header">

            <img src={logo} alt="Logo" className="header-logo" />
            <h1 className="header-titulo">Biblioteca de Troqueles</h1>
            <p className="header-subtitulo">Imprenta Encabo</p>
        </header>
    );
}


export default Header;