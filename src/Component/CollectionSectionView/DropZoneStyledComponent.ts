import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const StyledDropzone = styled.section`
    border: 1px solid #282c34;
    min-height: 20vh;
    margin-top:30px;
`;

export const StyledContainer = styled(Container)`
    padding: 15px;
`;

type AccordianCollapsibleIconProps = {
    rotate: string;
}

export const AccordianCollapsibleIcon = styled.div<AccordianCollapsibleIconProps>`
  font-size: 30px;
  transform: ${props => `rotate(${props.rotate}deg)`};
  
  @media screen and (max-width: 450px) {
        display: contents;
      }
`;

type CardHeaderProps = {
    backgroundColor?: string;
}

export const CardHeader = styled(Card.Header) <CardHeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props: CardHeaderProps) => props.backgroundColor ? props.backgroundColor : "white"};
    @media screen and (max-width: 450px) {
        button {
            display: block;
        }
      } 
`;

export const CollectedGifWrapper = styled.div`
    display: flex;
    overflow-X: auto;
    width: 100%;
    @media screen and (max-width: 450px) {
        display: grid;
      } 
`;

type CollectedImageWrapperProps = {
    opacity: string;
};

export const CollectedImageWrapper = styled.div<CollectedImageWrapperProps>`
    opacity: ${(props: CollectedImageWrapperProps) => props.opacity};
    padding: 20px;
`;

export const GifImage = styled.img`
    border-radius: 10px;
    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;