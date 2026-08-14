import './Login.css'
import { GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from '../../assets/logoanand.png';

export default function Login() {

    const usuarios = [{
        usuario: "admin",
        senha: "senhamaster"
    }];
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [usuarioInvalido, setUsuarioInvalido] = useState(false);
    const navigate = useNavigate();
    const navigateGoogle = useNavigate();

    function fazerLogin(){
        const usuarioValido = usuarios.find((item) => 
            item.usuario === usuario && item.senha === senha
    )

        if (usuarioValido){
            navigate("/home")
        } else{
            setUsuarioInvalido(true)
        }
        
    }

    return (
        <>
            <div className="loginContainer">

                <div className="loginAnand">
                    <img src={logo} alt="logoanand" />
                </div>

                <div className="loginForm">

                    <h2>Bem-vindo(a) de volta!</h2>
                    <p>Entre para acessar sua central de atendimento.</p>
                    <input type="email" placeholder="E-mail" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button className="senha">Esqueci minha senha</button>
                    <button className="entrar" onClick={fazerLogin}>Entrar</button>

                    {usuarioInvalido && (
                        <div className="erroLogin"> 
                            Usuário ou senha inválidos.
                        </div>
                       )}

                    <div className="googleLogin">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log("Login realizado!");
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log("Erro ao fazer login");
                            }}
                        />
                    </div>

                </div>

            </div>

        </>


    )
}
