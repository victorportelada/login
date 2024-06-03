import { Link } from "react-router-dom";
import { StyledHeader } from "./styles.ts";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
      </nav>
    </StyledHeader>
  );
}