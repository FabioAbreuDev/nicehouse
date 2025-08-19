"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/painel");
    }
    if (error) {
      setLoginError("Login failed. Please try again.");
    }
  }, [user, error, router]);

  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <div className="login-logo">
            NICEHOUSE® GlowFlag
          </div>
          <p className="login-title">Análise creators</p>
          <p className="login-paragraph">
          Avalie o nível de risco que cada creator pode trazer para a imagem da
          sua marca.
        </p>
        
        <div className="login-box-input">
          <p className="login-text-input">E-mail</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="login-input"
              disabled={isLoading}
            />
        </div>

        <div className="login-box-input">
          <p className="login-text-input">Senha</p>
          <div className="login-input-wrapper">
            <input
              type="password"
              placeholder="Digite sua senha"
              className="login-input"
              disabled={isLoading}
            />
            <button type="button" className="login-input-icon" disabled={isLoading}></button>
          </div>
          <a href="#" className="login-recover">Recuperar senha</a>
        </div>

      <div className="login-box-btn">
      <button className="login-btn" onClick={handleLogin} disabled={isLoading}>
            <span>Entrar</span>
            <span className="ml-2">→</span>
          </button>

      </div>
         
      <div className="login-box-google"> 
        <button className="login-btn-google" onClick={handleLogin} disabled={isLoading}>
          <img
             src="https://www.google.com/favicon.ico"
             alt="Google"
             className="btn-google-icon"
            />
            <span>Entrar com Google</span>
        </button>
      </div>
       

        <p className="login-tile-register">
          Ainda não é cadastrado?{" "}
          <a href="#" className="login-text-purple">
            Cadastre-se
          </a>
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
