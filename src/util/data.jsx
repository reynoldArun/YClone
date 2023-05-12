import {AiFillFire, AiOutlineHistory, AiFillHome, AiOutlineBulb, AiOutlineSetting} from 'react-icons/ai'
import {GiShoppingBag, GiClapperboard} from 'react-icons/gi'
import {TfiMusic, TfiCup} from 'react-icons/tfi'
import {CiStreamOn} from 'react-icons/ci'
import {SiYoutubegaming} from 'react-icons/si'
import {BsNewspaper} from 'react-icons/bs'
import {MdOutlineVideoLibrary, MdVideoLibrary, MdSubscriptions, MdOutlineAppShortcut, MdOutlineSubscriptions} from 'react-icons/md'
import {GrHistory} from 'react-icons/gr'
import {RiFeedbackFill} from 'react-icons/ri'
import {BiHelpCircle} from 'react-icons/bi'
import {RxKeyboard, RxGlobe} from 'react-icons/rx'

export const Explore  = [
    { name: 'Trending', icon: <AiFillFire size={20}/>  },
    { name: 'Shopping', icon: <GiShoppingBag size={20}/>  },
    { name: 'Music', icon: <TfiMusic size={20}/> },
    { name: 'Movies & Shows', icon: <GiClapperboard size={20}/> },
    { name: 'Live', icon: <CiStreamOn size={20}/> },
    { name: 'Gaming', icon: <SiYoutubegaming size={20}/> },
    { name: 'News', icon: <BsNewspaper size={20}/> },
    { name: 'Sports', icon: <TfiCup size={20}/>},
    { name: 'Learning', icon: <AiOutlineBulb size={20}/> },
]

export const sideData = [
    { name: 'Home', icon: <AiFillHome size={20}/>  },
    { name: 'Shorts', icon: <MdOutlineAppShortcut size={20}/>  },
    { name: 'Subscriptions', icon: <MdOutlineSubscriptions size={20}/>  },
    { name: 'Library', icon: <MdOutlineVideoLibrary size={20}/>  },
    { name: 'History', icon: <AiOutlineHistory size={20}/>  },
]

export const moreOptions = [
    {name: 'Home', icon: <AiFillHome size={20}/>},
    {name: 'Subscriptions', icon: <MdSubscriptions size={20}/>},
    {name: 'Library', icon: <MdVideoLibrary size={20}/>},
    {name: 'History', icon: <GrHistory size={20}/>},
]

export const settingOpt = [
    {name: 'Your data in Youtube', icon: <AiFillHome size={20}/>},
    {name: 'Appearance', icon: <MdSubscriptions size={20}/>},
    {name: 'Language: English(India)', icon: <MdVideoLibrary size={20}/>},
    {name: 'Restricted Mode: Off', icon: <GrHistory size={20}/>},
    {name: 'Location: India', icon: <RxGlobe size={20}/>},
    {name: 'Keyboard shortcuts', icon: <RxKeyboard size={20}/>},
    {name: 'Settings', icon: <AiOutlineSetting size={20}/>},
    {name: 'Help', icon: <BiHelpCircle size={20}/>},
    {name: 'Send Feedback', icon: <RiFeedbackFill size={20}/>},
]