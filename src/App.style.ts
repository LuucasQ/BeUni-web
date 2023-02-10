import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    min-width: 320px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #ECE7E7;
    @media (max-width: 1365px) {
      flex-direction: column;
    }
  `}
`;

export const ContentProducts = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: auto;
    background: #ECE7E7;
    @media (min-width: 1366px) {
      margin-left: 24px;
    }
  `}
`

export const Title = styled.p`
  ${() => css`
    font-size: 20px;
    font-weight: 700;
    margin: 24px auto 0 24px;
  `}
`

export const Products = styled.div`
  ${() => css`
    width: 100%;
    display: grid;
    grid-template-columns:  minmax(216px, max-content) repeat(auto-fill, 216px);
    padding: 24px;
    margin: 32px auto 48px;
    gap: 16px;
    overflow: auto;

    @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns:  minmax(120px, max-content) repeat(auto-fill, 136px);
      margin: 24px auto;
    }
  `}
`

export const ShowSelectedProducts = styled.div<{expanded: boolean}>`
  ${({ expanded }) => css`
    position: fixed;
    
    display: flex;
    flex-direction: column;
    width: 70%;
    border-radius: 8px 8px 0 0;
    height: ${expanded ? '50%' : '50px'};
    background: #FFFFFF;
    color: black;
    bottom: 0;
    padding: 16px;
    cursor: pointer;
    border-top: 2px solid #F45E18;
    border-left: 2px solid #F45E18;
    border-right: 2px solid #F45E18;
    p:first-child {
      color: #F45E18;
    }
    transition: height 0.5s ease-in-out;
  `}
`

export const SelectedProducts = styled.div`
  ${() => css`
    display: grid;
    margin-top: 1rem;
    padding: 8px;
    gap: 16px;
    grid-template-columns:  minmax(216px, max-content) repeat(auto-fill, 216px);
    overflow: auto;
    
    @media (min-width: 320px) and (max-width: 767px) {
      grid-template-columns:  minmax(120px, max-content) repeat(auto-fill, 136px);
      
    }
  `}
`