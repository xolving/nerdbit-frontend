"use client"

import Image from "next/image";
import styled from "styled-components";
import xolving from "@/public/xolving.svg"

const StyledHeader = styled.header`
  && {
    display: flex;
    border-bottom-width: 1px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    column-gap: 20px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  .menus {
    display: flex;
    column-gap: 10px;
  }
`;

export default function Header(){
    return (
        <StyledHeader>
            <a href="/"><Image src={xolving} alt="xolving" width={20} height={20} /></a>
            <div className="menus">
                <a href="/about"><p>about</p></a>
                <a href="/discord"><p>discord</p></a>
            </div>
        </StyledHeader>
    )
}