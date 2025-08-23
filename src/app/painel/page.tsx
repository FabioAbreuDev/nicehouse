"use client";
import React, { useState } from "react";
import "./page.css";
import "../globals.css";
import bellIcon from "../../assets/bell.png";
import engineIcon from "../../assets/engine.png";
import arrowIcon from "../../assets/arrow.png";
import house from "../../assets/house.png";
import mug from "../../assets/mug.svg";
import media from "../../assets/media.svg";
import folder from "../../assets/folder.svg";
import plus from "../../assets/plus.svg";

import Image from "next/image";
import Modal from "../../components/Modal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Individual");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="painel-container ">
      {/* Header */}
      <header className="painel-navbar">
        <div className="flex-grow"></div> {/* Spacer div */}
        <div id="logo" className="font-bold text-lg tracking-wide">
          NICEHOUSE<sup>®</sup>GlowFlag
        </div>
        <div className="flex-grow"></div> {/* Spacer div */}
        <div id="image" className="flex items-center gap-4">
          <div className="">
            <Image src={engineIcon} alt="user" />
          </div>
          <div className="">
            <Image src={bellIcon} alt="user" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
            <Image
              src={engineIcon}
              alt="user"
              width={32}
              height={32}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-25 py-10">
        <div className="painel-title">
          <div className="painel-title-text">Boas vindas 👋</div>
          <div>
            <button className="painel-title-button" onClick={handleOpenModal}>
              Consultar creator{" "}
              <Image
                src={arrowIcon}
                className="painel-title-button-arrow"
                alt="arrow-right"
              />
            </button>
          </div>
        </div>

        <div className="painel-home">
          <Image src={house} className="painel-home-icon" alt="house" />{" "}
          <p className="painel-home-text">Home</p>
        </div>

        <div className="painel-content-noCreator ">
          {/* Left content */}
          <div className="max-w-lg">
            <h2 className="text-base font-semibold mb-2">
              Você ainda não possui consultas
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Para aproveitar todos os insights de creators que oferecemos,
              comece agora a fazer suas consultas!
            </p>
            <button className="painel-title-button" onClick={handleOpenModal}>
              Consultar creator{" "}
              <Image
                src={arrowIcon}
                className="painel-title-button-arrow"
                alt="arrow-right"
              />
            </button>
          </div>

          {/* Right image */}
          <Image src={mug} alt="user" />
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <Image src={media} className="" alt="arrow-right" />
        </div>
        <div>
          <p>Analise creators</p>
          <p>
            Avalie o nível de risco que cada creator pode trazer para a imagem
            da sua marca.
          </p>
          <div className="toggle-container">
            <button
              className={`toggle-button ${
                selectedOption === "Individual" ? "active" : ""
              }`}
              onClick={() => setSelectedOption("Individual")}
            >
              Individual
            </button>
            <button
              className={`toggle-button ${
                selectedOption === "Em massa" ? "active" : ""
              }`}
              onClick={() => setSelectedOption("Em massa")}
            >
              Em massa
            </button>
          </div>
          {selectedOption === "Individual" && (<>
            <div className="form-section">
              <div className="form-group">
                <label htmlFor="creator-name" className="form-label">
                  Nome do creator <p className="required-icon">*</p>
                </label>
                <input
                  type="text"
                  id="creator-name"
                  className="form-input"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="instagram" className="form-label">
                  Instagram *
                </label>
                <input
                  type="text"
                  id="instagram"
                  className="form-input"
                  placeholder="@username ou username"
                />
              </div>
              
            </div>
          
            </>
          )}
          {selectedOption === "Em massa" && (
            <div className="upload-section">
              <div className="upload-content">
                <h3 className="upload-title">Importe os creators</h3>
                <Image
                  src={folder}
                  alt="folder"
  
                />
                
                <p className="upload-description">
                  Faça o upload do CSV com nome e @username dos creators,{" "}
                  <span className="download-link">baixar template</span>.
                </p>
                <div className="upload-trigger">
                <Image
                  src={plus}
                  alt="plus"
  
                />
                  <p className="upload-hint">clique ou arraste o arquivo para esta área</p>
                </div>
              </div>
            </div>
          )}
              <button className="consult-button">
              <span className="button-text">Consultar</span>
              <div className="arrow-icon">
                <Image
                  src={arrowIcon}
                  alt="arrow-right"
  
                />
              </div>
            </button>
        
        </div>
      </Modal>
    </div>
  );
}
