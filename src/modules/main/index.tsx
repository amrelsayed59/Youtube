import React, { useState } from "react";
import Item from "./Components/Item";
import { InnerLoader } from "../../components/Loader";
import Header from "../../components/Header";
import MobHeader from "../../components/MobHeader";
import { getVideos } from "../../services/youtube";
import Filter from "./Components/Filter";
import useViewport from "../../hooks/useViewport";

export const Main: React.FC<any> = () => {
  const [searchInput, setSearchInput] = useState("");
  const [videos, setvideos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loader, setLoader] = useState(false);

  const { width } = useViewport();
  const breakpoint = 620;

  const onFormSubmit = async (e: Event) => {
    e.preventDefault();
    await fetchVideos();
  };

  const fetchVideos = async () => {
    setLoader(true);
    const data = await getVideos(searchInput);
    setvideos(data.items);
    setFilter(data.pageInfo);
    setLoader(false);
  };

  const AllVideos = videos?.map((video: any, i: number) => (
    <Item video={video} index={i} key={i} />
  ));

  return (
    <>
      {width < breakpoint ? (
        <MobHeader
          onSubmit={onFormSubmit}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      ) : (
        <Header
          onSubmit={onFormSubmit}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}

      <section className="main">
        <div className="container">
          {videos?.length > 0 && <Filter filter={filter} />}
          {loader ? <InnerLoader /> : null}
          {AllVideos.length > 0 ? AllVideos : null}
        </div>
      </section>
    </>
  );
};

export default Main;
