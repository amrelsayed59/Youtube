const KEY = "AIzaSyCU1ucYPHKADStGVJ1bBAmFJBa8JojQWqc";

export const getVideos = async (query: string) => {
  return await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${KEY}`
  )
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => console.log("error happened", error));
};
