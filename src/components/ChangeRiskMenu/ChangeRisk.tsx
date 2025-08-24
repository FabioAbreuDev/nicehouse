"use client";
import React, { useState, useRef, useEffect } from "react";
import RiskBadge, { RiskLevel } from "../Badge/RiskBadge";

const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    marginTop: "16px",
    right: "24px",
    width: "10rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "16px 24px",
    zIndex: 20,
    alignItems: "center",

};

const itemStyle: React.CSSProperties = {
    cursor: "pointer",
};

interface ChangeRiskProps {
    initialRisk: RiskLevel;
    onChangeRisk?: (level: RiskLevel) => void;
}

const ChangeRisk: React.FC<ChangeRiskProps> = ({ initialRisk, onChangeRisk }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelectRisk = (level: RiskLevel) => {
        setOpen(false);
        onChangeRisk?.(level); // comunica alteração ao pai
        // Aqui você pode chamar a API para atualizar o risco
    };

    return (
        <div className="relative inline-block" ref={menuRef}>
            <div
                className="flex items-center gap-1 text-purple-600 cursor-pointer select-none"
                onClick={() => setOpen(!open)}
            >
                <svg
                    className="w-4 h-4 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                Alterar risco

            </div>
            {open && (
                <div style={dropdownStyle}>
                    <div onClick={() => handleSelectRisk("alto")} style={itemStyle}>
                        <RiskBadge level="alto" />
                    </div>
                    <div onClick={() => handleSelectRisk("medio")} style={itemStyle}>
                        <RiskBadge level="medio" />
                    </div>
                    <div onClick={() => handleSelectRisk("baixo")} style={itemStyle}>
                        <RiskBadge level="baixo" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChangeRisk;
