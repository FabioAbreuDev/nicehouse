import React from 'react';
import { HighRiskIcon, MediumRiskIcon, LowRiskIcon } from './icons';

type RiskLevel = 'alto' | 'medio' | 'baixo';

interface RiskBadgeProps {
    level: RiskLevel;
}

const riskConfig = {
    alto: { label: "Alto risco", bgColor: "#FFE3E3", textColor: "#FD2C5E", Icon: HighRiskIcon },
    medio: { label: "Médio risco", bgColor: "#FFF7C8", textColor: "#555323", Icon: MediumRiskIcon },
    baixo: { label: "Baixo risco", bgColor: "#D5FFBC", textColor: "#419A09", Icon: LowRiskIcon },
};


const RiskBadge: React.FC<RiskBadgeProps> = ({ level }) => {
    const { label, bgColor, textColor, Icon } = riskConfig[level];

    return (
        <div
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: bgColor,
                color: textColor,
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: 500,
            }}
        >
            <Icon />
            <span>{label}</span>
        </div>
    );
};

export default RiskBadge;

