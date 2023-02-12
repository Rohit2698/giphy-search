import { Accordion, Container } from "react-bootstrap";
import Styled from "styled-components";

export const GifWrapper = Styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
`;

export const GifContainer = Styled.div`
    column-count: 5;
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    max-width: 100%;
    background-color: white;
    @media screen and (max-width: 1200px) {
        column-count: 5;
      }
      @media screen and (max-width: 800px) {
        column-count: 4;
      }
      @media screen and (max-width: 600px) {
        column-count: 3;
      }
      @media screen and (max-width: 450px) {
        column-count: 1;
      }
`;

export const ImageWrapper = Styled.div`
    display: inline-flex;
    padding: 8px;
    width: 100%;
`;

export const ImageContainer = Styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    img{
        width: 100%;
        display: flex;
        border-radius: 16px;
        object-fit: cover;
    }
`;

type GifViewProps = {
  backgroundColor?: string;
  border?: string;
}

export const GifView = Styled.div<GifViewProps>`
    overflow-y: auto;
    min-height: 20vh;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    max-height: 100vh;
`;

export const SpinnerWrapper = Styled.div`
  display: flex;
  justify-content: center;
`;

export const GifSectionContainer = Styled(Container)`
  flex-grow: 2;
  max-height: 80%;
  overflow-y: auto; 
  ::-webkit-scrollbar {
    display: none;
  }
`

export const AccordianStyle = Styled(Accordion)`
  max-height: 100%;
`;

export const AccordianGifCollapse = Styled(Accordion.Collapse)`
  max-height: 100%;
`;