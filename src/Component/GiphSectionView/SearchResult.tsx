import React from "react";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import GifImageCard from "./GifImageCard";
import {
  GifContainer,
  GifWrapper,
  GifView,
  SpinnerWrapper,
} from "./SearchResultStyledComponents";

export type GifData = {
  title: string;
  imageUrl: string;
  id: string;
};

type SearchResultProps = {
  gifs: GifData[];
  refreshGifs: () => void;
};

const SearchResult: React.FC<SearchResultProps> = ({ gifs, refreshGifs }) => {
  return (
    <GifView id={"gifView"}>
      <InfiniteScroll
        dataLength={gifs.length}
        next={refreshGifs}
        hasMore={true}
        loader={
          <SpinnerWrapper>
            <Spinner animation={"grow"} />
          </SpinnerWrapper>
        }
        scrollableTarget={"gifView"}
      >
        <GifWrapper>
          <GifContainer>
            {gifs.map((item) => (
              <GifImageCard
                id={item.id}
                imageUrl={item.imageUrl}
                key={item.id}
                title={item.title}
              />
            ))}
          </GifContainer>
        </GifWrapper>
      </InfiniteScroll>
    </GifView>
  );
};

export default SearchResult;
