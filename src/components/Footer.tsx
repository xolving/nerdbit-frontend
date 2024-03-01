"use client"

import styled from "styled-components";

const StyledFooter = styled.footer`
  && {
    display: flex;
    padding: 18px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    column-gap: 18px;
    border-width: 1px;
    font-weight: 500;
    background-color: white;
  }

  .menu {
    display: flex;
    column-gap: 20px;
  }

  .account {
    margin-left: auto;
  }
`;

export default function Footer(){
    return (
        <StyledFooter>
          <div className="text-slate-600">
            <h1 className="pb-5">Projects</h1>
            <a><p>Gitty Bot</p></a>
            <a><p>Deepup Theme</p></a>
            <a><p>Xolic</p></a>
          </div>
        </StyledFooter>
    )
}