import './Login.css'
import { GoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {

    const usuarios = [{
        usuario: "admin",
        senha: "senhamaster"
    }];
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const [usuarioInvalido, setUsuarioInvalido] = useState(false);

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

                    <h1>AND</h1>
                    <h3>Anand. Sua Central de Atendimento e Suporte.</h3>


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
