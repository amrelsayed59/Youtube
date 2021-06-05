import axios from "axios";

const KEY = 'AIzaSyCU1ucYPHKADStGVJ1bBAmFJBa8JojQWqc';
//AIzaSyCU1ucYPHKADStGVJ1bBAmFJBa8JojQWqc
// 'AIzaSyBS2OE65llWg0UZs-Ug9JgkacXHZAbzz5M';
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }

})

export const getVideos = async () => {
  return await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=the%20weeked&key=AIzaSyCU1ucYPHKADStGVJ1bBAmFJBa8JojQWqc")
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => console.log("error happened", error));
};



