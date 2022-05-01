import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from "react-number-format"
import { Accordion } from 'react-bootstrap'
// CSS
import './CSS/Aside.scss'
// Reducer
import { filter_Data } from '../Redux/Action Creator/ActionCreator'








function Aside() {
  const Dispatch = useDispatch()
  const homeData = useSelector(state => state.SetData_Home.getData)
  const [firstPrice, setFirstPrice] = useState('')
  const [secondPrice, setSecondPrice] = useState('')
  const [firstBedroom, setFirstBedroom] = useState('')
  const [secondBedroom, setSecondBedroom] = useState('')
  const [firstYear, setFirstYear] = useState('')
  const [secondYear, setSecondYear] = useState('')
  const [firstArea, setFirstArea] = useState('')
  const [secondArea, setSecondArea] = useState('')


  const handleApplyFilter = () => {
    return Dispatch(filter_Data(
      homeData.filter(item =>
        (firstPrice ? item.price >= Number(firstPrice.replaceAll(',', '')) : true) &&
        (secondPrice ? item.price <= Number(secondPrice.replaceAll(',', '')) : true) &&
        (firstBedroom ? item.bedroom >= Number(firstBedroom.replaceAll(',', '')) : true) &&
        (secondBedroom ? item.bedroom <= Number(secondBedroom.replaceAll(',', '')) : true) &&
        (firstYear ? item.year_of_construction >= Number(firstYear.replaceAll(',', '')) : true) &&
        (secondYear ? item.year_of_construction <= Number(secondYear.replaceAll(',', '')) : true) &&
        (firstArea ? item.area >= Number(firstArea.replaceAll(',', '')) : true) &&
        (secondArea ? item.area <= Number(secondArea.replaceAll(',', '')) : true)
      )
    ))
  }







  return (
    <div id='aside'>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><h5 dir='rtl' className='w-100 d-flex px-2'>قیمت</h5></Accordion.Header>
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

        <Accordion.Item eventKey="1" className='mt-1'>
          <Accordion.Header><h5 dir='rtl' className='w-100 d-flex px-2'>سن بنا</h5></Accordion.Header>
          <Accordion.Body>
            <section className='mt-2'>
              <section className='input-group'>
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='تا ...'
                  dir='rtl'
                  maxLength='4'
                  value={secondYear}
                  onChange={(e) => setSecondYear(e.target.value)}
                />
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='از ...'
                  dir='rtl'
                  maxLength='4'
                  value={firstYear}
                  onChange={(e) => setFirstYear(e.target.value)}
                />
              </section>
            </section>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className='mt-1'>
          <Accordion.Header><h5 dir='rtl' className='w-100 d-flex px-2'>متراژ</h5></Accordion.Header>
          <Accordion.Body>
            <section className='mt-2'>
              <section className='input-group'>
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='تا ...'
                  dir='rtl'
                  value={secondArea}
                  onChange={(e) => setSecondArea(e.target.value)}
                />
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='از ...'
                  dir='rtl'
                  value={firstArea}
                  onChange={(e) => setFirstArea(e.target.value)}
                />
              </section>
            </section>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className='mt-1'>
          <Accordion.Header><h5 dir='rtl' className='w-100 d-flex px-2'>تعداد اتاق</h5></Accordion.Header>
          <Accordion.Body>
            <section className='mt-2'>
              <section className='input-group'>
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='تا ...'
                  dir='rtl'
                  maxLength='2'
                  value={secondBedroom}
                  onChange={(e) => setSecondBedroom(e.target.value)}
                />
                <NumberFormat
                  inputMode="numeric"
                  thousandSeparator={true}
                  className='form-control w-50'
                  placeholder='از ...'
                  dir='rtl'
                  maxLength='2'
                  value={firstBedroom}
                  onChange={(e) => setFirstBedroom(e.target.value)}
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