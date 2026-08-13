import './Login.css'
import { GoogleLogin } from "@react-oauth/google"

export default function Login() {

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
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <button>Entrar</button>

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
