import './Home.css'
import logoIcon from '../../assets/icon_anand.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {

    const [menuAberto, setMenuAberto] = useState(false)
    const [darkTema, setDarkTema] = useState(false)

    return (
        <div className={`home ${darkTema ? 'dark' : 'light'}`}>

            <aside className={`menuHome ${menuAberto ? 'aberto' : ''}`}>

                <div className="logoIcon">
                    <NavLink to="/home">
                        <img src={logoIcon} alt="Logo Anand" className="anandIcon"/>
                    </NavLink>
                </div>

                <nav className="navHome">

                    <NavLink to="/chamados" className={({ isActive }) => `menuItem ${isActive ? 'active' : ''}`}>
                        <span>Chamados</span>
                    </NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) => `menuItem ${isActive ? 'active' : ''}`}>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/relatorios" className={({ isActive }) => `menuItem ${isActive ? 'active' : ''}`}>
                        <span>Relatórios</span>
                    </NavLink>

                </nav>

            </aside> 

            <header className={`headerHome ${menuAberto ? 'menuAberto' : ''}`}>

                <div className="headerEsquerdo">

                    <button className="menuButton" onClick={() => setMenuAberto(!menuAberto)} aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>

                    <button className="criaChamadoHeader">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>

                        <span></span>

                    </button>

                </div>

                <div className="buscaHeader">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="16.5" y1="16.5" x2="21" y2="21" />
                    </svg>

                    <input type="text" placeholder="Buscar..."/>

                </div>

                <div className="headerDireito">

                    <button className="headerIcon temaButton" onClick={() => setDarkTema(!darkTema)} aria-label="Alterar tema">

                        {darkTema ? (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" />
                                <path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" />
                                <path d="m19.07 4.93-1.41 1.41" />
                            </svg>

                        ) : (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 3a6.5 6.5 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>

                        )}

                    </button>

                    <button className="headerIcon" aria-label="Notificações">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>

                    </button>

                    <button className="headerIcon usuarioButton" aria-label="Usuário">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
                        </svg>

                    </button>

                </div>

            </header>

            <main className={`heroHome ${menuAberto ? 'menuAberto' : ''}`}>

                <h1>Seja bem-vindo!</h1>

                <p> Acesse seus chamados e acompanhe seus atendimentos.</p>

            </main>

        </div>
    )
}