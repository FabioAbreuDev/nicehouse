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
import termsofuse from "../../assets/termsofuse.svg";
import deny from "../../assets/deny.svg";

import Image from "next/image";
import Modal from "../../components/Modal";
import Headers from "@/components/header"

export default function Dashboard() {

  return (
    <div className="painel-container ">
      {/* Header */}
      <Headers></Headers>

      {/* Main */}
      <main className="px-25 py-10">
        <div className="consultation-header">
          <div className="left-section">
            <div className="back-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span> Prolitica de privacidade</span>
              <Image
                src={termsofuse}
                className=""
                alt="termos-de-uso"
              />
            </div>
            <div className="breadcrumb"> <Image src={house} className="painel-home-icon" alt="house" />{" "} Home / Prolitica de privacidade</div>
          </div>
        </div>

        {/* Content Card */}
        <div className="content-card">
          <h1 className="content-title">Title</h1>
          <h2 className="content-subtitle">SubTitle</h2>
          <div className="content-text">
            <ol className="content-list">
              <li className="list-item numbered">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-item bulleted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-item bulleted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </ol>
          </div>
        </div>

      </main>

    </div>
  );
}
