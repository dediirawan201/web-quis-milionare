import React from 'react'
import './app.css';

const App = () => {
  const moneyPyramid = [
    {id:1, amount:'Rp. 50.000'},
    {id:2, amount:'Rp. 100.000'},
    {id:3, amount:'Rp. 500.000'},
    {id:4, amount:'Rp. 1.000.000'},
    {id:5, amount:'Rp. 5.000.000'},
    {id:6, amount:'Rp. 15.000.000'},
    {id:7, amount:'Rp. 30.000.000'},
    {id:8, amount:'Rp. 100.000.000'},
    {id:9, amount:'Rp. 500.000.000'},
    {id:10, amount:'Rp. 750.000.000'},
    {id:11, amount:'Rp. 1.0000.000.000'},
  ].reverse()
  return (
    <div className='app'>
      <div className='main'>main</div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map(m => (
          <li className='moneyListItem '>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;