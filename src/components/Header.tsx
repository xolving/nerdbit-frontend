"use client"

import Image from "next/image";
import styled from "styled-components";
import xolving from "@/public/xolving.svg"

const StyledHeader = styled.header`
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

export default function Header(){
    return (
        <StyledHeader>
            <a href="/"><Image src={xolving} alt="xolving" width={35} height={35} /></a>
            <p className="text-2xl text-slate-300 font-extralight">/</p>
            <div className="menu">
                <a href="/about"><p>About</p></a>
                <a href="/discord"><p>Forum</p></a>
                <a href="/member"><p>Member</p></a>
            </div>
            <div className="account">
              <a href="/login"><p>Login</p></a>
            </div>
        </StyledHeader>
    )
}