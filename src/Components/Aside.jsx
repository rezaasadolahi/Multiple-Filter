import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from "react-number-format"
import { Accordion } from 'react-bootstrap'
// CSS
import './CSS/Aside.scss'
// Reducer
import { filter_price } from '../Redux/Action Creator/ActionCreator'









function Aside() {
  const Dispatch = useDispatch()
  const homeData = useSelector(state => state.SetData_Home.getData)
  const [firstPrice, setFirstPrice] = useState('')
  const [secondPrice, setSecondPrice] = useState('')
  const [firstYear, setFirstYear] = useState('')
  const [secondYear, setSecondYear] = useState('')



  // Filter Homes
  const handleApplyFilter = () => {
    if (firstPrice !== '' && secondPrice !== '') {
      Dispatch(
        filter_price(
          homeData
            .filter(item => item.price > Number(firstPrice.replaceAll(',', '')))
            .filter(item => item.price <= Number(secondPrice.replaceAll(',', ''))))
      )
      if (firstYear !== '' && secondYear !== '' && firstPrice !== '' && secondPrice !== '') {
        Dispatch(filter_price(
          homeData
            .filter(item => item.price > Number(firstPrice.replaceAll(',', '')))
            .filter(item => item.price <= Number(secondPrice.replaceAll(',', '')))
            .filter(item => item.Year_of_construction > Number(firstYear.replaceAll(',', '')))
            .filter(item => item.Year_of_construction <= Number(secondYear.replaceAll(',', '')))
        ))
        return
      }
      return
    }

    if (firstYear !== '' && secondYear !== '') {
      Dispatch(filter_price(
        homeData
          .filter(item => item.Year_of_construction > Number(firstYear.replaceAll(',', '')))
          .filter(item => item.Year_of_construction <= Number(secondYear.replaceAll(',', '')))
      ))
      return
    }
  }







  return (
    <div id='aside'>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>قیمت</Accordion.Header>
          <Accordion.Body>
            <section className='input-group'>
              <NumberFormat
                inputMode="numeric"
                thousandSeparator={true}
                className='form-control w-50'
                placeholder='تا قیمت ...'
                dir='rtl'
                value={secondPrice}
                onChange={(e) => setSecondPrice(e.target.value)}
              />
              <NumberFormat
                inputMode="numeric"
                thousandSeparator={true}
                className='form-control w-50'
                placeholder='از قیمت ...'
                dir='rtl'
                value={firstPrice}
                onChange={(e) => setFirstPrice(e.target.value)}
              />
            </section>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>سن بنا</Accordion.Header>
          <Accordion.Body>
            <section className='mt-2'>
              <section className='input-group'>
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='سن بنا تا ...'
                  dir='rtl'
                  value={secondYear}
                  onChange={(e) => setSecondYear(e.target.value)}
                />
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='سن بنا از ...'
                  dir='rtl'
                  value={firstYear}
                  onChange={(e) => setFirstYear(e.target.value)}
                />
              </section>
            </section>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <button className='btn btn-success w-100 mt-3' onClick={handleApplyFilter}>اعمال فیلتر</button>
    </div>
  )
}

export default Aside