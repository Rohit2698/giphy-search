import React from "react";
import SearchResult, { GifData } from "./SearchResult";
import { Card } from "react-bootstrap";
import { CardHeader } from "../CollectionSectionView/DropZoneStyledComponent";
import {
  AccordianGifCollapse,
  AccordianStyle,
  GifSectionContainer,
} from "./SearchResultStyledComponents";

type GiphSectionType = {
  gifs: GifData[];
  refreshGifs: () => void;
};

const GiphSection: React.FC<GiphSectionType> = ({ gifs, refreshGifs }) => {
  return (
    <GifSectionContainer fluid>
      <AccordianStyle defaultActiveKey="0">
        <Card style={{ maxHeight: "50%" }}>
          <CardHeader>
            <h4>Searched Gifs</h4>
          </CardHeader>
          <AccordianGifCollapse eventKey="0">
            <SearchResult gifs={gifs} refreshGifs={refreshGifs} />
          </AccordianGifCollapse>
        </Card>
      </AccordianStyle>
    </GifSectionContainer>
  );
};

export default GiphSection;
