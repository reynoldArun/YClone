import {moreOptions} from '../util/data'
import Button from './Button'

export default function SideOptions() {
  return (
    <div className='my-4'>
        <hr className='bg-gray-400'/>
        <div>
            {moreOptions && moreOptions.map((sideItem, index) => (
              <button
                className="flex w-[90%] pb-2 hover:bg-gray-100 rounded-sm space-x-3 space-y-3"
                key={index}
              >
                <span className="pt-3 pr-3 font-extrabold">
                  {sideItem.icon}
                </span>
                <span>{sideItem.name}</span>
              </button>
            ))}
          </div>
          <hr className='bg-gray-400 my-2'/>
          <div className='text-md'>
            <h2 className='my-2 pl-4'>Sign in to like videos, <br /> comment, and subscribe.</h2>
            <Button />
          </div>
          <hr className='bg-gray-400 my-4'/>
    </div>
  )
}
