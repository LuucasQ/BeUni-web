import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 35vw;
    min-width: 320px;
    max-width: 400px;
    height: 100vh;
    background: #FFFFFF;
    padding: 80px 48px;
    border-radius: 0 16px 16px 0;
    
    @media (max-width: 767px) {
      width: 100vw;
      max-width: 100vw;
      height: 200px;
      padding: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1365px) {
      width: 100vw;
      max-width: 100vw;
      padding: 2rem 7.5rem;
    }
  `}
`;

export const Logo = styled.img`
  ${() => css`
    max-width: 146px;
  `}
`

export const Input = styled.input`
  ${() => css`
    border-radius: 4px;
    border: none;
    padding: 0.5rem 1rem;
    outline: none;
    font-size: 16px;
    line-height: 24px;
    margin-top: 32px;
    border: 2px solid #F45E18;
  `}
`

export const Button = styled.button`
  ${() => css`
    border-radius: 4px;
    background: #F45E18;
    color: white;
    padding: 8px 24px;
    text-align: center;
    width: max-content;
    margin-top: 16px;
    margin-left: auto;
    cursor: pointer;
    border: none;
    :hover {
      opacity: 0.9;
    }

    transition: opacity 0.3s ease-in-out;
  `}
`