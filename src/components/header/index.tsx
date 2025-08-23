import bellIcon from "../../assets/bell.png";
import engineIcon from "../../assets/engine.png";
import Image from "next/image";

import "./style.css"
import "@/app/globals.css"

const Headers = () => {
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
                <div className="user-avatar">
                    <Image
                        src={engineIcon}
                        alt="user"
                        width={32}
                        height={32}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </header></>)
}

export default Headers