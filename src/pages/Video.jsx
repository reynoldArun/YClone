import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {fetch} from '../util/rapid'
import ReactPlayer from "react-player";

export default function VideoComponent() {
  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState(null)
  const [recommended, setRecommended] = useState(null)

  useEffect(() => {
    fetch(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))

      fetch(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRecommended(data.items))
  }, [id]);


  if(!videoDetails?.snippet) return <h1>Loading</h1>;

  const { snippet: { title, channelId, description, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;


  return (
    <div className="m-h-[95vh] mt-8 flex flex-col xl:flex-row justify-between">
        <div className="mx-auto">
          <div className="border border-blue-500 w-[90%] ml-10 h-[300px] md:h-[450px] xl:h-[650px]">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="100%" controls />
          <h1 className="mt-4 font-semibold">{title}</h1>
          </div>

          <div className="flex mt-4">
            <div className="mt-8 ml-8">
              <h1 className="font-semibold ml-4">{channelTitle}</h1>
            </div>
            <button className="rounded-full bg-black text-white text-[14px] ml-14 mt-8 font-bold w-[90px] h-[35px]">Subscribe</button>
          </div>

          <div className="w-[95%] mx-auto mt-4 bg-gray-100 p-4 rounded-md">
            <h1 className="font-semibold">{viewCount} views</h1>
            <h5>{description}</h5>
          </div>
          
        </div>
        <div className="w-[25%] mt-4 ml-10">
          { recommended && recommended.map((recomm, index) => (
            <div className="flex w-[360px]" key={index}>
              <div className="my-2">
                <img src={recomm.snippet.thumbnails.high.url} alt="" className="h-[96px] w-[166px] rounded-e-lg"/>
              </div>
              <div className="w-[175px] my-4 mx-4">
                <h2>{recomm.snippet.title.slice(0, 100)}</h2>
                <h5>{recomm.snippet.channelTitle}</h5>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
