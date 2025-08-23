import bellIcon from "../../assets/bell.svg";
import engineIcon from "../../assets/engine.svg";
import avatar from "../../assets/avatar.svg";
import arrowDown from "../../assets/arrow-down.svg";
import personIcon from "../../assets/person.svg";
import folderIcon from "../../assets/folder.svg";
import denyIcon from "../../assets/deny.svg";

import policy from "../../assets/policy.svg";
import reciept from "../../assets/reciept.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/logout.svg";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import "./style.css"
import "@/app/globals.css"

const Headers = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (<>
        <header className="painel-navbar">
            <div id="logo">
                NICEHOUSE<sup>®</sup>GlowFlag
            </div>
            <div id="image">
                <div className="nav-icon">
                    <Image src={engineIcon} alt="engine" width={20} height={20} />
                </div>
                <div className="nav-icon">
                    <Image src={bellIcon} alt="notifications" width={20} height={20} />
                </div>
                <div className="user-avatar-container" ref={dropdownRef}>
                    <div className="user-avatar" onClick={toggleDropdown}>
                        <Image
                            src={avatar}
                            alt="user"
                            style={{ objectFit: "cover" }}
                        />
                        <Image
                            src={arrowDown}
                            alt="arrow down"
                            className={`arrow-down ${isDropdownOpen ? 'arrow-up' : ''}`}
                            width={16}
                            height={16}
                        />
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => window.location.assign('/users')}>
                                <Image src={user} alt="users" width={16} height={16} />
                                <span>Usuários</span>
                            </div>
                            <div className="dropdown-item">
                                <Image src={policy} alt="privacy" width={16} height={16} />
                                <span>Políticas de privacidade</span>
                            </div>
                            <div className="dropdown-item">
                                <Image src={reciept} alt="terms" width={16} height={16} />
                                <span>Termos de uso</span>
                            </div>
                            <div className="dropdown-item logout">
                                <Image src={logout} alt="logout" width={16} height={16} />
                                <span>Sair da plataforma</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header></>)
}

export default Headers