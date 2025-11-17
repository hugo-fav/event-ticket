import styled from "styled-components";


export const CheckoutOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 9998;

  background: transparent;
  backdrop-filter: none;
  pointer-events: none; 
  align-items: center;

 
  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(4px);
    pointer-events: auto; 
    align-items: flex-end;
    justify-content: center;
  }
`;

export const CheckoutFormDiv = styled.div`
  position: fixed;
  z-index: 6000;
  background: white;
  border-radius: 20px;
  padding: 30px;
  width: 420px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);

  /* DESKTOP POSITION */
  right: 20px;
  bottom: 20px;

  /* MOBILE OVERRIDE */
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 20px 20px 0 0;

    transform: ${({ $showMobile }) =>
      $showMobile ? "translateY(0)" : "translateY(100%)"};
    transition: transform 0.35s ease-out;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: #ddd;
  border: none;
  border-radius: 50%;
  padding: 6px 10px;
  font-size: 18px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none; /* No close button on desktop */
  }
`;

export const CheckoutFormH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  color: #0a0a0a;
  margin-bottom: 6px;
`;

export const CheckoutFormParagraph = styled.p`
  font-size: 1.02rem;
  color: #666;
  margin-bottom: 12px;
`;

export const CheckoutFormPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 14px;
  background: #f9fafb;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid #ebebeb;

  span {
    font-size: 1rem;
    color: #222;
  }

  span:nth-child(odd) {
    font-weight: 600;
  }

  span:nth-child(even) {
    text-align: right;
  }
`;

export const CheckoutFormDivider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 12px 0;
`;

export const CheckoutFormTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  font-weight: 700;
  color: #000;
`;
