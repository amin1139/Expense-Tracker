import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const getLocal = () => {
    let expenseList = localStorage.getItem('expenseList')

    if(expenseList){
      return JSON.parse(localStorage.getItem('expenseList'))
    }
    else{
      return
    }
  }

  const [inputValue, setInputValue] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [expenseData, setExpenseData] = useState([])

  useEffect(() => {
    localStorage.setItem('expenseList', JSON.stringify(expenseData))
  },[expenseData])

  const addIteam = ()=>{
    if(inputValue !== ''){
      setExpenseData([...expenseData,{
        value: inputValue,
        Price: inputPrice
      }])
      setInputValue('')
      setInputPrice('')
    }
  }

  const delIteam = (id)=>{
    const updateList = expenseData.filter((elem, index)=>{
      return index !== id
    })
    setExpenseData(updateList)
  }

  const total = () =>{
    let sum = 0
    for(let i = 0; i < expenseData.length; i++){
      sum = sum + Number(expenseData[i].Price)
    }
    return sum
  }

  return (
    <div className="appContainer">
      <div className="heading">
        <h1>Expense Tracker</h1>
      </div>


      <div className="input">
        <input type="text" placeholder='Product Name'
          value={inputValue} onChange={(v) => 
          setInputValue(v.target.value)}
        />
        <input type="number" placeholder='Price' value={inputPrice} onChange={(v) => setInputPrice(v.target.value)}/>
        <button onClick={addIteam}>Add</button>
      </div>

      <div className="total">
        <h2>Total: {total()}</h2>
      </div>

      <div className="expenseList">
        {expenseData.map((v,i)=>{
          return(
            <div className="expenseLayout" key={i}>
              <div className='expense'>
                <span>{v.value}</span>
                <span>{v.Price} ₹</span>
              </div>
              <svg onClick={()=>{delIteam(i)}} xmlns="http://www.w3.org/2000/svg" height='1.3rem' viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            </div>
          )
        })}
      </div>


    </div>
  )
}

export default App;


// end