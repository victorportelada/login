import { Link } from "react-router-dom"
import Header from "../../components/Header/header";
import { StyledRegister } from "./styles";

export default function Register() {
  return (
    <StyledRegister>
      <Header />
      <h1>Cadastro</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
        <p>Já possui uma conta? <Link to={"/login"}>Login</Link></p>
      </form>
    </StyledRegister>
  );
}