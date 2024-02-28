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
    column-gap: 20px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .menus {
    display: flex;
    column-gap: 10px;
    font-weight: 500;
    padding-left: 20px;
  }
`;

export default function Header(){
    return (
        <StyledHeader>
            <a href="/"><Image src={xolving} alt="xolving" width={35} height={35} /></a>
            <div className="menus">
                <a href="/about"><p>about</p></a>
                <a href="/discord"><p>discord</p></a>
            </div>
        </StyledHeader>
    )
}