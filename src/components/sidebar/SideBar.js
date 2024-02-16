import './SideBar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logoSpotify} alt="logo do spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <div class="grid-container">
                        <div>
                            <a>
                                <span>Legal</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Centro de Privacidader</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Política de privacidade</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Cookies</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Sobre anúncios</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Accessibilidade</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Notice at Collection</span>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Definições de cookies</span>
                            </a>
                        </div>
                    </div>
                    <a href="https://www.spotify.com/us/legal/cookies-policy/">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;