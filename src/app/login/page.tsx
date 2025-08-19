import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#E6F0FA] to-[#D8C4E2]">
      <div className="bg-white rounded-2xl shadow-md p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-600">
          NICEHOUSE® GlowFlag
        </h1>
        <p className="text-center mb-6 text-gray-600">Análise creators</p>
        <p className="text-center mb-6 text-gray-600">
          Avalie o nível de risco que cada creator pode trazer para a imagem da
          sua marca.
        </p>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-2 border rounded mb-2 text-black"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full p-2 border rounded mb-2 text-black"
          />
          <a href="#" className="text-purple-500 text-sm float-right">
            Recuperar senha
          </a>
        </div>

        <button className="w-full bg-black text-white p-2 rounded-full flex items-center justify-center mb-4">
          <span>Entrar</span>
          <span className="ml-2">→</span>
        </button>

        <button className="w-full bg-white border p-2 rounded flex items-center justify-center mb-4">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span>Entrar com Google</span>
        </button>

        <p className="text-center text-gray-600">
          Ainda não é cadastrado?{" "}
          <a href="#" className="text-purple-500">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
