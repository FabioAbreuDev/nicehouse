"use client";
import "./page.css";
import "@/app/globals.css";
import { useState } from "react";
import smile from "@/assets/smile.svg"
import house from "@/assets/house.svg"
import arrowIcon from "@/assets/arrow.png"

import Image from "next/image";
import Headers from "@/components/header";

export default function InviteUser() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        permissao: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <>
            <Headers></Headers>
            <div className="createUser-container">
                <div className="w-2/5 mx-auto">
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
                                <span className="button-text">Enviar convite</span>
                            </button>
                        </div>
                    </div>

                    {/* Invitation Form */}
                    <div className="invitation-form-container">
                        <h2 className="form-title">Convite</h2>
                        <form onSubmit={handleSubmit} className="invitation-form">
                            <div className="form-field">
                                <label htmlFor="nome" className="form-label required">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    placeholder="Digite o nome do usuário"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email" className="form-label required">
                                    E-mail de acesso
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Digite o e-mail do usuário"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="telefone" className="form-label">
                                    Telefone de contato
                                </label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                    placeholder="DDD + Número"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="permissao" className="form-label required">
                                    Permissão
                                </label>
                                <div className="select-wrapper">
                                    <select
                                        id="permissao"
                                        name="permissao"
                                        value={formData.permissao}
                                        onChange={handleInputChange}
                                        className="form-select"
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        <option value="admin">Administrador</option>
                                        <option value="user">Usuário</option>
                                        <option value="viewer">Visualizador</option>
                                    </select>
                                    <div className="select-arrow">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="submit-button">
                                Enviar Convite
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
