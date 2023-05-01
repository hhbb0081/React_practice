// 비용 양식 js 파일
import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // 하나로 합치기
  const [userInput, setUserInput] = useState({
    title: '',
    amount: 0,
    date: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    };

    // 부모 컴포넌트로 데이터 전달
    props.onSaveExpenseDate();
  };
  
  return (<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => {
          setUserInput((prevState) => {
            //즉시 실행하기 위해 반환문 활용
            return { ...prevState, title: e.target.value };
          })
        }}/>
      </div>

      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => {
          setUserInput((prevState) => {
            //즉시 실행하기 위해 반환문 활용
            return { ...prevState, amount: e.target.value };
          })
        }}/>
      </div>

      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          min="2019-01-01"
          step="2022-12-31"
          value={date}
          onChange={(e) => {
          setUserInput((prevState) => {
            //즉시 실행하기 위해 반환문 활용
            return { ...prevState, date: e.target.value };
          })
        }}/>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>)
};

export default ExpenseForm;