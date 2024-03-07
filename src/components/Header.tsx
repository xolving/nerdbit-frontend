"use client"

import Image from "next/image";
import styled from "styled-components";
import nerdbit from "@/public/nerdbit.svg"

const StyledHeader = styled.header`
  && {
    display: flex;
    padding: 18px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    column-gap: 18px;
    font-weight: 500;
    font-size: large;
    display: fixed;
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
            <a href="/"><Image src={nerdbit} alt="xolving" width={87.5} height={25} /></a>
            <div className="menu">
                <a href="/about"><p>소개</p></a>
                <a href="/discord"><p>포럼</p></a>
                <a href="/contribute"><p>기여하기</p></a>
            </div>
            <div className="account">
              <a href="/login"><p>로그인</p></a>
            </div>
        </StyledHeader>
    )
}