import React, { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Client } from "../Base/Client";
import { getGif } from "../Constants/ApiConstants";
import { gifKey } from "../Constants/ApiKey";
import CollectionSection from "./CollectionSectionView/CollectionSection";
import GiphSection from "./GiphSectionView/GiphSection";
import SearchBar from "./Header/SearchBar";
import { debounce } from "lodash";

type GifData = {
  title: string;
  imageUrl: string;
  id: string;
};

const GiphyApplication = () => {
  const [giphyData, setGiphyData] = useState<GifData[]>([]);
  const [searchGif, setSearchGif] = useState("all");

  const fetch = useCallback(
    (gipgyDataLength = 0) => {
      Client.getInstance()
        .getData(
          getGif,
          {
            params: {
              api_key: gifKey,
              q: searchGif === "" ? "all" : searchGif,
              offset: gipgyDataLength + 1,
              limit: 25,
            },
          },
          true
        )
        .then((response) => {
          const data: GifData[] = response.data.data.map((item: any) => ({
            imageUrl: item.images.original.url,
            title: item.title,
            id: item.id,
          }));
          setGiphyData((prevDate: GifData[]) => {
            return [...prevDate, ...data];
          });
        });
    },
    [searchGif]
  );

  useEffect(() => {
    setGiphyData([]);
    fetch();
  }, [fetch]);

  //eslint-disable-next-line
  const setSearchText = useCallback(
    debounce((text) => setSearchGif(text), 1000),
    []
  );

  return (
    <div className={"main-container"}>
      <SearchBar setSearchGif={(text: string) => setSearchText(text)} />
      <DndProvider backend={HTML5Backend}>
        <GiphSection
          gifs={giphyData}
          refreshGifs={() => fetch(giphyData.length)}
        />
        <CollectionSection />
      </DndProvider>
    </div>
  );
};

export default GiphyApplication;
