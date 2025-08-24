import React, { useEffect } from "react";
import { PositiveIcon, NegativeIcon } from "./icons";

type ToastMode =
    | "convite-enviado"
    | "convite-copiado"
    | "convite-reenviado"
    | "usuario-deletado";

interface ToastProps {
    mode: ToastMode;
    message?: string;
    onClose?: () => void;
    duration?: number;
    top?: string;
    right?: string;
}

const messages: Record<ToastMode, string> = {
    "convite-enviado": "Convite enviado com sucesso",
    "convite-copiado": "Convite copiado com sucesso",
    "convite-reenviado": "Convite reenviado com sucesso",
    "usuario-deletado": "Você deletado com sucesso",
};

const bgColors: Record<ToastMode, string> = {
    "convite-enviado": "linear-gradient(135deg, #8ee5ad 0%, #60ca9a 100%)",
    "convite-copiado": "linear-gradient(135deg, #8ee5ad 0%, #60ca9a 100%)",
    "convite-reenviado": "linear-gradient(135deg, #8ee5ad 0%, #60ca9a 100%)",
    "usuario-deletado": "linear-gradient(135deg, #FF306BCC 0%, #d93054 100%)",
};

export const Toast: React.FC<ToastProps> = ({
    mode,
    message,
    onClose,
    duration = 3000,
    top = "104px",
    right = "1rem",
}) => {
    const isPositive = mode !== "usuario-deletado";

    useEffect(() => {
        const timer = setTimeout(() => onClose?.(), duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const containerStyle: React.CSSProperties = {
        position: "fixed",
        top,
        right,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "16px 10px", // mais espaço horizontal
        borderRadius: 16,
        background: bgColors[mode],
        color: "#1C1C1E",
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        fontSize: 16,
        fontWeight: 500,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        maxWidth: 280,
        userSelect: "none",
        zIndex: 9999,
        animation: "toast-in 0.3s ease-out",
    };

    const messageStyle: React.CSSProperties = {
        whiteSpace: "nowrap",
    };

    return (
        <div role="alert" aria-live="assertive" aria-atomic="true" style={containerStyle}>
            <span style={{ display: "flex", alignItems: "center" }}>
                {isPositive ? <PositiveIcon /> : <NegativeIcon />}
            </span>
            <span style={messageStyle}>{message ?? messages[mode]}</span>
        </div>
    );
};

export default Toast;
