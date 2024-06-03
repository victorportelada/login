import { Link } from "react-router-dom"
import StyledLogin from "./styles"
import Header from "../../components/Header/header"

export default function Login() {
    return (
        <StyledLogin>
            <Header />
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Login</button>
                <p>Não possui uma conta ainda? <Link to={"/register"}>Cadastro</Link></p>
            </form>
        </StyledLogin>
    )
}