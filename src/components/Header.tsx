"use client"

import Image from "next/image";
import styled from "styled-components";

const StyledHeader = styled.header`
  && {
    display: flex;
    border-bottom-width: 1px;
  }

  .menus {
    display: flex;
    column-gap: 10px;
    margin: 18px;
  }
`;

export default function Header(){
    return (
        <StyledHeader>
            <div className="menus">
                <a href="/about"><p>About</p></a>
                <a href="/discord"><p>Discord</p></a>
            </div>
        </StyledHeader>
    )
}