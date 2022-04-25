import { useRef } from 'react'
// Components
import Homes from './Homes'
import Aside from '../Components/Aside'
// CSS
import './CSS/Main.scss'
// Images
import Scroll from './images/scroll.png'





function Main() {
  const ScrollTop = useRef()

  window.onscroll = function () {
    if (document.documentElement.scrollTop >= 350) {
      ScrollTop.current.style.opacity = '1'
    } else {
      ScrollTop.current.style.opacity = '0'
    }
  }


  return (
    <main id='main'>
      <Homes />
      <Aside />
      <img
        src={Scroll}
        alt="This is scroll icon"
        id='scrollIcon'
        ref={ScrollTop}
        onClick={() => window.scrollTo(0, 0)}
      />
    </main>
  )
}


export default Main