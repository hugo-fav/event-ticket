import styled from "styled-components";

export const ImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BannerContent = styled.div`
  position: absolute;
  width: 50%;
  top: 19%;
  left: 29%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    top: 19%;
    left: 45%;
  }
`;

export const BannerContentHeading1 = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;

export const BannerContentHeading2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: skyblue;
`;

export const BannerContentParagraph = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const PayingButton = styled.button`
  display: block;
  padding: 10px 18px;
  border-radius: 8px;
  background: orange;
  color: white;
  margin-top: 15px;
  border: none;
  font-size: 16px;

  @media (min-width: 769px) {
    display: none; /* Desktop should NOT have Buy Ticket button */
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 5000;

  @media (min-width: 769px) {
    display: none; /* No overlay on desktop */
  }
`;
