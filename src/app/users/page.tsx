"use client";
import "./page.css";
import "@/app/globals.css";
import { use, useState } from "react";
import smile from "@/assets/smile.svg"
import house from "@/assets/house.svg"
import mug from "@/assets/mug.svg"
import Tiktok from "@/assets/Tiktok.svg"
import pointerDown from "@/assets/pointer-down.svg"
import setting from "@/assets/setting.svg"
import checkCircle from "@/assets/check-circle.svg"
import arrowIcon from "@/assets/arrow.png"
import actions from "@/assets/actions.svg";

import Image from "next/image";

import Headers from "@/components/header";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DynamicPage({ params }: PageProps) {
  const [users, setUsers] = useState([{
    id: '',
    name: ''
  }])

  return (
    <>
      <Headers></Headers>
      <div className="creator-container ">
        <div className="w-4/5 mx-auto">
          {/* Main Navigation/Title Area */}
          <div className="consultation-header">
            <div className="left-section">
              <div className="back-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Usuários</span>
                <Image src={smile} alt="Lupa"></Image>
              </div>
              <div className="breadcrumb">
                <Image
                  src={house}
                  alt="arrow-right"

                /> Home / Usuários</div>
            </div>
            <div className="right-section">
              <button className="consult-button" onClick={() => window.location.assign('/users/invite')}>
                <span className="button-text">Convidar usuário</span>
                <div className="arrow-icon">
                  <Image
                    src={arrowIcon}
                    alt="arrow-right"

                  />
                </div>
              </button>
            </div>
          </div>

          {users.length ? <>
            <div className="painel-content-users">
              {/* Consultation History Section */}

              <div className="users-section">
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
                          Nome
                          <div className="sort-icon">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 4.5L6 1.5L9 4.5M3 7.5L6 10.5L9 7.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </th>
                        <th className="table-header-cell">Permissão</th>
                        <th className="table-header-cell">Status</th>
                        <th className="table-header-cell">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      {Array.from({ length: 10 }, (_, index) => (
                        <tr key={index} className="table-row" >
                          <td className="table-cell creator-cell">

                            <p className="creator-name">Arlene McCoy</p>

                          </td>
                          <td className="table-cell">Admin</td>
                          <td className="table-cell">Ativo</td>
                          <td className="table-cell"><Image src={actions} alt="actions"></Image></td>
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
            </div>
          </> : <>       <div className="painel-content-noUsers ">
            {/* Left content */}
            <div className="max-w-lg">
              <h2 className="text-base font-semibold mb-2">
                Membros do time
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Convide pessoas do seu time para utilizar a plataforma
              </p>
              <button className="painel-title-button" onClick={() => window.location.assign('/users/invite')}>
                Convidar Usuario{" "}
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
          </>}


        </div>
      </div>
    </>
  );
}
