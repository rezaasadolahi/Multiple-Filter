import React, { useState, useEffect } from 'react'
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
  const filterHomeData = useSelector(state => state.FilterData.FilterData)

  let FilterData = () => {
    filterHomeData.length === 0 ? setData(homeData) : setData(filterHomeData)
  }

  useEffect(() => {
    FilterData()
    Dispatch(GetData(homeData))
  }, [filterHomeData])





  return (
    <div id='homes'>
      <h5 id='total-data'>{data.length}</h5>
      {data.map(item => {
        return (
          <section key={item.id} id='AllHome'>
            <img src={item.pic} alt="This is pic home" width='300' height='250' />
            <p id='title'>{item.title}</p>
            <hr />
            <p id='badge'>{item.id}</p>
            <Link to='' id='status'>جزییات</Link>
          </section>
        )
      })}
    </div>
  )
}


export default Sell