import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "./Login.css";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState("");
  const [carregando, setCarregando] = useState(false); // Adicione esta linha
  const navigate = useNavigate();

  const handleLogin = async () => {
  setCarregando(true);
  if (!email || !senha) {
    setAlerta("Preencha todos os campos!");
    setCarregando(false);
    return;
  }

  try {
    const response = await api.login({ email, senha });
    if (response.success) {
      login(); // Chama a prop para atualizar isAuthenticated
      localStorage.setItem("token", response.token); // Armazena o token
      localStorage.setItem("userData", JSON.stringify(response.user)); // Armazena dados do usuário
      navigate("/app"); // Redireciona para a rota autenticada
    } else {
      setAlerta(response.message || "Credenciais inválidas");
    }
  } catch (error) {
    setAlerta("Erro ao conectar com o servidor");
  } finally {
    setCarregando(false);
  }
};

  return (
    <div className="login-container">
      <div className="login-box">
        {alerta && <div className="alerta">{alerta}</div>}
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          className="login-input"
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          className="login-input"
        />
        <button 
          onClick={handleLogin} 
          className="login-button"
          disabled={carregando}
        >
          {carregando ? "Carregando..." : "Entrar"}
        </button>
        <div className="cadastro-link">
          <span>Não tem uma conta? </span>
          <button onClick={() => navigate("/cadastro")}>Cadastre-se</button>
        </div>

        <div className="esquecisenha-link">
          <span>Esqueceu sua senha? </span>
          <button onClick={() => navigate("/esqueci-senha")}>Clique aqui</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
