"use client";
import "./page.css";
import "../../globals.css";
import React, { use, useState } from "react";
import glass from "../../../assets/glass.svg"
import arrowIcon from "../../../assets/arrow.png"
import Instagram from "../../../assets/Instagram.svg"
import Tiktok from "../../../assets/Tiktok.svg"
import Youtube from "../../../assets/Youtube.svg"
import Kwai from "../../../assets/Kwai.svg"
import checkCircle from "../../../assets/check-circle.svg"


import Image from "next/image";

import Headers from "@/components/header";
import ChangeRisk from "@/components/ChangeRiskMenu/ChangeRisk";
import RiskBadge from "@/components/Badge/RiskBadge";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

//simulando o valor do risco vindo da API para teste
const apiRiskLevel: RiskLevel = "medio";


export default function DynamicPage({ params }: PageProps) {
    const { id } = use(params);
    const [selectedRisk, setSelectedRisk] = useState<RiskLevel>(apiRiskLevel);

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
                                <span>Detalhes da consulta</span>
                                <Image src={glass} alt="Lupa"></Image>
                            </div>
                            <div className="breadcrumb">Home / Arlene McCoy</div>
                        </div>
                        <div className="right-section">
                            <button className="consult-button">
                                <span className="button-text">Fazer nova consulta</span>
                                <div className="arrow-icon">
                                    <Image
                                        src={arrowIcon}
                                        alt="arrow-right"

                                    />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Social Media Metrics Section */}
                    <div className="social-metrics">
                        <div className="metric-card instagram">
                            <div className="platform-logo">
                                <Image src={Instagram} alt="Instagram"></Image>
                            </div>
                            <div>
                                <div className="platform-name">Instagram</div>
                                <div className="platform-stats">
                                    <span className="followers">53M</span>
                                    <span className="change positive">+5%</span>
                                </div>
                            </div>
                        </div>

                        <div className="metric-card tiktok">
                            <div className="platform-logo">
                                <Image src={Tiktok} alt="Tiktok"></Image>
                            </div>
                            <div>
                                <div className="platform-name">Tiktok</div>
                                <div className="platform-stats">
                                    <span className="followers">10.1M</span>
                                    <span className="change positive">+7%</span>
                                </div>
                            </div>

                        </div>

                        <div className="metric-card youtube">
                            <div className="platform-logo">
                                <Image src={Youtube} alt="Youtube"></Image>
                            </div>
                            <div>
                                <div className="platform-name">Youtube</div>
                                <div className="platform-stats">
                                    <span className="followers">10M</span>
                                    <span className="change negative">-5%</span>
                                </div>
                            </div>
                        </div>

                        <div className="metric-card kwai">
                            <div className="platform-logo">
                                <Image src={Kwai} alt="Kwai"></Image>
                            </div>
                            <div>
                                <div className="platform-name">Kwai</div>
                                <div className="platform-stats">
                                    <span className="followers">-</span>
                                    <span className="change neutral">-</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="profile-card">
                        <div className="risk-badge">
                            <RiskBadge level={selectedRisk} />
                        </div>
                        <div className="profile-content">
                            <div className="profile-image">
                                <div className="avatar-placeholder">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="8" r="5" fill="#FF6B35" />
                                        <path d="M20 21C20 16.58 16.42 13 12 13C7.58 13 4 16.58 4 21" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2 className="profile-name">Jade Picon</h2>
                                <p className="profile-handle">@jadepicon</p>
                                <p className="profile-description">
                                    Apesar dos processos judiciais e das polêmicas ocasionais envolvendo sua vida pessoal, os litígios e controvérsias são de natureza comercial e geralmente resolvidos, sem demonstração de ativismo político intenso ou envolvimento em segmentos sensíveis.
                                </p>

                            </div>
                        </div>
                        <div className="profile-attributes">
                            <div className="last-consultation">
                                Última consulta: 25 de dez de 2023
                            </div>
                            <div className="change-risk">
                                <ChangeRisk initialRisk={selectedRisk} onChangeRisk={setSelectedRisk} />
                            </div>
                        </div>

                    </div>

                    {/* Trajectory Section */}
                    <div className="trajectory-section">
                        <h3>Trajetória</h3>
                        <div className="separator-line"></div>
                        <p>
                            Iniciou sua carreira como influenciadora digital ainda na adolescência, expandindo sua atuação para modelo e empresária. Em 2022, ganhou grande notoriedade ao participar do BBB 22 e estrelar a novela 'Travessia'. Em 2025, protagonizou o longa-metragem 'Cinco Júlias', marcando uma consolidação como atriz e ampliando seu alcance no mercado de entretenimento.
                        </p>
                    </div>

                    {/* Risk Analysis Section */}
                    <div className="risk-analysis-section">
                        <div className="section-header">
                            <h3>Análise de risco</h3>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="risk-cards">
                            {/* Top Card - Niche of Activity */}
                            <div className="risk-card large">
                                <h4>Nicho de atuação</h4>
                                <div className="separator-line"></div>
                                <p>
                                    Seu conteúdo abrange moda, lifestyle, fitness e entretenimento, sendo ideal para marcas que visam atingir um público jovem e antenado nas tendências digitais, sem perder o apelo aspiracional e o toque de glamour.
                                </p>
                            </div>

                            <div className="small-cards-container">
                                {/* Bottom Left Card - Political Involvement */}
                                <div className="risk-card small">
                                    <h4>Envolvimento político</h4>
                                    <div className="separator-line"></div>
                                    <div className="risk-content">
                                        <div className="risk-icon neutral">
                                            <span>😊</span>
                                        </div>
                                        <div className="risk-text">
                                            <div className="risk-status">Neutro</div>
                                            <div className="risk-description">Se posicionou ou fez posts de cunho político uma vez.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Right Card - Betting Involvement */}
                                <div className="risk-card small">
                                    <h4>Envolvimento com bets</h4>
                                    <div className="separator-line"></div>
                                    <div className="risk-content">
                                        <div className="risk-icon warning">
                                            <span>!</span>
                                        </div>
                                        <div className="risk-text">
                                            <div className="risk-status">Sem envolvimento</div>
                                            <div className="risk-description">Nenhum resultado encontrado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Checklist Section */}
                    <div className="checklist-section">
                        <div className="section-header">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Checklist</h3>
                        </div>

                        <div className="checklist-card">
                            <div className="checklist-subsection">
                                <h4>Tema</h4>

                                <div className="checklist-item">
                                    <div className="subsection-header">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Processos Judiciais</span>
                                    </div>
                                    <div className="summary-line">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>3 registros encontrados</span>
                                    </div>
                                    <div className="checklist-items">
                                        <div className="checklist-item-text">JP-001 - Jade Picon vs Felipe Dutra (ex-sócio) - Prestação de contas e reaver investimento de R$416 mil - Vencido - 27/07/2024</div>
                                        <div className="checklist-item-text">JP-002 - Felipe Dutra vs Jade Picon - Suposto calote de R$500 mil em peças - Em andamento - 09/11/2022</div>
                                        <div className="checklist-item-text">JP-003 - Jade Picon vs Ex-sócio - Disputa por prejuízo de R$180 mil - Em andamento - 31/10/2022</div>
                                    </div>
                                </div>

                                <div className="checklist-item">
                                    <div className="subsection-header">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>Notícias recentes</span>
                                    </div>
                                    <div className="summary-line">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>2 registros encontrados</span>
                                    </div>
                                    <div className="checklist-items">
                                        <div className="checklist-item-text">[13/05/2025] Jade Picon dá adeus aos fios loiros e muda de visual - CNN Brasil - Atualização sobre mudança de estilo e reforço de sua identidade visual.</div>
                                        <div className="checklist-item-text">[02/04/2025] Irritada, Jade Picon dá resposta ríspida sobre affair com André Lamoglia - UOL Notícias - Aproximação entre sua vida pessoal e repercussão nas redes.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Marcas Section */}
                    <div className="marcas-section">
                        <div className="marcas-card">
                            <div className="marcas-subsection">
                                <h4>Marcas</h4>
                                <div className="subsection-header">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Publicidade e Embaixadorias</span>
                                </div>
                                <div className="marcas-items">
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>Ray-Ban, L'Oréal, Colcci, Nina Ricci</span>
                                    </div>
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>Adidas - foi a primeira mulher brasileira a cocriar um tênis com a marca</span>
                                    </div>
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>C&A - sua primeira campanha de moda, quando tinha 1 ano de idade</span>
                                    </div>
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>Eudora, M.A.C, Valentino, Calvin Klein, Fendi, Levi's, Avon, John John, Foreo, Pandora, Espaçolaser</span>
                                    </div>
                                </div>
                            </div>

                            <div className="marcas-subsection">
                                <div className="subsection-header">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Colaborações em Moda e Beleza</span>
                                </div>
                                <div className="marcas-items">
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>Simple Organic - assina uma linha de maquiagem clean beauty</span>
                                    </div>
                                    <div className="marcas-item">
                                        <div className="check-icon">
                                            <Image src={checkCircle} alt="check-icon"></Image>
                                        </div>
                                        <span>Aura Beauty (Hinode) - lançou linha própria de cuidados pessoais em parceria com a Hinode, com fragrâncias da Givaudan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Histórico Section */}
                    <div className="historico-section">
                        <div className="section-header">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="dropdown-icon">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Histórico</h3>
                        </div>

                        <div className="historico-card">
                            <h4>Marcas trabalhadas</h4>
                            <div className="separator-line"></div>
                            <div className="brands-columns">
                                <div className="brands-column">
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Ray-Ban</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>L'Oreal</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Colcci</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Nina Ricci</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Adidas</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>C&A</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Eudora</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>M.A.C</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Valentino</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Calvin Klein</span>
                                    </div>
                                </div>

                                <div className="brands-column">
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                    <div className="brand-item">
                                        <div className="bullet-point"></div>
                                        <span>Brand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reputação Section */}
                    <div className="reputacao-section">
                        <div className="reputacao-card">
                            <h4>Reputação</h4>
                            <div className="separator-line"></div>
                            <p>
                                Jade Picon é percebida como uma jovem influenciadora e empreendedora que, apesar de enfrentar diversas controvérsias e polêmicas nas redes sociais, procura manter uma postura reservada e prioriza sua saúde mental. Sua imagem oscila entre momentos de destaque positivo no entretenimento e episódios de conflitos públicos.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
