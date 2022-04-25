import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// CSS
import './CSS/Homes.scss'
// Data
import homeData from '../DATA/data.json'
// Redux
import { GetData } from '../Redux/Action Creator/ActionCreator'






function Sell() {
  const [data, setData] = useState([])
  const Dispatch = useDispatch()
  const filterPriedData = useSelector(state => state.FilterPrice.Filter_Price)

  let FilterData = () => {
    filterPriedData.length === 0 ? setData(homeData) : setData(filterPriedData)
  }

  useEffect(() => {
    FilterData()
    Dispatch(GetData(homeData))
  }, [filterPriedData])



  

  return (
    <div id='homes'>
      {data.map(item => {
        return (
          <div key={item.id} id='AllHome'>
            <img src={item.pic} alt="This is pic home" width='300' height='250' />
            <p id='title'>{item.title}</p>
            <hr />
            <Link to='' id='status'>جزییات</Link>
          </div>
        )
      })}
    </div>
  )
}


export default Sell