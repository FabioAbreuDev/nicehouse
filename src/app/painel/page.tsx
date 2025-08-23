"use client";
import React, { useState } from "react";
import "./page.css";
import "../globals.css";

import arrowIcon from "../../assets/arrow.png";
import house from "../../assets/house.svg";
import mug from "../../assets/mug.svg";
import media from "../../assets/media.svg";
import folder from "../../assets/folder.svg";
import plus from "../../assets/plus.svg";
import pointerDown from "../../assets/pointer-down.svg";
import setting from "../../assets/setting.svg";
import person from "../../assets/person.svg";
import check from "../../assets/check.svg";
import deny from "../../assets/deny.svg";

import Image from "next/image";
import Modal from "../../components/Modal";
import Headers from "@/components/header"

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Individual");
  const [creators, setCreators] = useState([{
    photo: "",
    tag: "",

  }]);


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="painel-container ">
      {/* Header */}
      <Headers></Headers>

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

        {creators.length ? <div className="painel-content-creators">
          {/* Status Cards */}
          <div className="status-cards">
            <div className="status-card">
              <div className="status-icon profile-icon">
                <Image src={person} className="painel-home-icon" alt="house" />{" "}
              </div>
              <div className="status-info">
                <h3 className="status-title">Perfis analisados</h3>
                <p className="status-value">Processando</p>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon success-icon">
                <Image src={check} className="painel-home-icon" alt="house" />{" "}
              </div>
              <div className="status-info">
                <h3 className="status-title">Taxa de sucesso</h3>
                <p className="status-value">Processando</p>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon risk-icon">
                <Image src={deny} className="painel-home-icon" alt="house" />{" "}
              </div>
              <div className="status-info">
                <h3 className="status-title">Perfis com alto risco</h3>
                <p className="status-value">Processando</p>
              </div>
            </div>
          </div>

          {/* Consultation History Section */}
          <div className="history-header">
            <Image src={pointerDown} alt="pointerDown" />{" "}
            <h2 className="history-title">Histórico de consultas</h2>
          </div>
          <div className="history-section">


            {/* Search Bar */}
            <div className="search-container">
              <div className="search-input">
                <div className="search-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11 11L15 15" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="7" cy="7" r="5" stroke="#9ca3af" strokeWidth="2" />
                  </svg>
                </div>
                <input type="text" placeholder="Buscar" className="search-field" />
                <div className="filter-icon">
                  <Image src={setting} alt="setting" />{" "}
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="data-table">
              <table className="table">
                <thead className="table-header">
                  <tr>
                    <th className="table-header-cell creator-header">
                      Creator
                      <div className="sort-icon">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M3 4.5L6 1.5L9 4.5M3 7.5L6 10.5L9 7.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </th>
                    <th className="table-header-cell">Seguidores</th>
                    <th className="table-header-cell">Seguimento</th>
                    <th className="table-header-cell">Região</th>
                    <th className="table-header-cell">Risco</th>
                    <th className="table-header-cell">Data</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {Array.from({ length: 10 }, (_, index) => (
                    <tr key={index} className="table-row" onClick={() => window.location.assign(`/painel/${index}`)}>
                      <td className="table-cell creator-cell">
                        <div className="creator-info">
                          <div className="creator-avatar">
                            <div className="avatar-placeholder"></div>
                          </div>
                          <div className="creator-details">
                            <p className="creator-name">Arlene McCoy</p>
                            <p className="creator-username">@emmarodriguez</p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">2.5M</td>
                      <td className="table-cell">Moda</td>
                      <td className="table-cell">São Paulo</td>
                      <td className="table-cell">
                        <span className="risk-tag">Processando</span>
                      </td>
                      <td className="table-cell">25 de dez de 2023</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="pagination-footer">
              <div className="pagination-info">
                <span className="pagination-text">1 - 5 de 5</span>
              </div>
              <div className="pagination-controls">
                <div className="rows-selector">
                  <span className="rows-label">Linhas por página</span>
                  <div className="rows-dropdown">
                    <span className="rows-value">5</span>
                    <div className="dropdown-arrow">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pagination-buttons">
                  <button className="pagination-btn prev-btn" disabled>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 12L6 8L10 4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="pagination-btn current-btn">1</button>
                  <button className="pagination-btn next-btn" disabled>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> :
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
          </div>}


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
              className={`toggle-button ${selectedOption === "Individual" ? "active" : ""
                }`}
              onClick={() => setSelectedOption("Individual")}
            >
              Individual
            </button>
            <button
              className={`toggle-button ${selectedOption === "Em massa" ? "active" : ""
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
