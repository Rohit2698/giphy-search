import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemType } from "../GiphSectionView/GifImageCard";
import { GifData } from "../GiphSectionView/SearchResult";
import { Accordion, Button, Card } from "react-bootstrap";
import {
  AccordianCollapsibleIcon,
  CardHeader,
  CollectedGifWrapper,
} from "./DropZoneStyledComponent";
import CollectionImageCard from "./CollectionImage";

const DropZone = () => {
  const [collectedGifs, setCollectedGifs] = useState<GifData[]>([]);
  const [accordianCollpased, setAccordianCollapsed] = useState(true);

  const [{ isOver }, drop] = useDrop({
    accept: ItemType.GIFCARD,
    drop: (item: GifData) => onDropGifImage(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const onDropGifImage = (gifData: GifData) => {
    !collectedGifs.find((item) => item.id === gifData.id) &&
      setCollectedGifs((prevState) => [
        ...prevState,
        {
          id: gifData.id,
          imageUrl: gifData.imageUrl,
          title: gifData.title,
        },
      ]);
  };

  return (
    <Accordion defaultActiveKey="0">
      <Card ref={drop}>
        <CardHeader backgroundColor={isOver ? "#e5e5e5" : "white"}>
          <h4>My Collection</h4>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <AccordianCollapsibleIcon
              rotate={accordianCollpased ? "0" : "180"}
              onClick={() => setAccordianCollapsed(!accordianCollpased)}
            >
              &#x290A;
            </AccordianCollapsibleIcon>
          </Accordion.Toggle>
        </CardHeader>
        <Accordion.Collapse eventKey="0">
          <CollectedGifWrapper>
            {collectedGifs.map((item) => (
              <CollectionImageCard
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                key={item.id}
              />
            ))}
          </CollectedGifWrapper>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default DropZone;
