import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import {fetch} from '../util/rapid'
import {Link} from 'react-router-dom'

export default function VideoSection() {
  const {category} = useSelector((state) => state.GlobalState)
  const fetchVideos = async() => {
    try {
      const result = await fetch(`search?part=snippet&q=${category}`)
      return result.items
    } catch (error) {
      console.log(error)
    }
  }

  const {isLoading, data} = useQuery(['videosByCategory',category], fetchVideos, {notifyOnChangeProps: ['data'], refetchOnWindowFocus: false})


  if(isLoading) return <h1>Loading...</h1>

  
  return (
    <section className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 md:mx-2 xl:grid-cols-3 xxl:grid-cols-4">
      {data && data.map((singleVideo, index) => {
        return ( 
          <div key={index} className="mt-4 mx-auto">
            <Link to={`/video/${singleVideo.id.videoId}`}>
              <img src={singleVideo.snippet.thumbnails.high.url} alt="" className="w-[360px] h-[200px] object-fill rounded-xl hover:rounded-none"/>
            </Link>
            <div className="flex">
              <div className="w-[330px] mx-auto">
                <h1 className="text-black font-semibold">{singleVideo.snippet.title.slice(0, 60)}</h1>
                <h3 className="text-gray-600">{singleVideo.snippet.channelTitle}</h3>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
