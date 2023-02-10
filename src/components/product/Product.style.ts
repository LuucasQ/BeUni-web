import styled, { css } from 'styled-components';

export const Container = styled.div<{boxShadow?: boolean}>`
  ${({ boxShadow }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    padding: 8px;
    background: #FFFFFF;
    box-shadow: ${boxShadow ? '1px 1px 5px 0px rgb(0, 0, 0, 0.4)' : 'none'};
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 200px;
    height: 200px;
    border-radius: 4px;
    
    @media (min-width: 320px) and (max-width: 767px) {
      width: 120px;
      height: 120px;
    }
  `}
`;


export const Name = styled.p`
  ${() => css`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    width: max-content;
    max-width: 200px;
    margin-top: 8px;

    @media (min-width: 320px){
      max-width: 120px;
    }
  `}
`;

export const Price = styled.p`
  ${() => css`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    width: max-content;
    color: green;
    margin: 8px 0;
  `}
`;

export const ContentSelect = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Stock = styled.p`
  ${() => css`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    width: max-content;
  `}
`;

export const Checkbox = styled.input`
  ${({ checked }) => css`
    position: relative;
    width: 23px;
    height: 23px;
    outline: none;
    cursor: pointer;
    :before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      background-color: ${checked ? '#F45E18' : '#FFFFFF'};
      border: ${checked ? '1px solid #F45E18' : '1px solid #F45E18'};
      border-radius: 8px;
      top: -2px;
      left: -2px;
    }

    :checked:after{
      content: "";
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      top: 3px;
      left: 7px;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      position: absolute;
    }
  `}
`