import React, { Component } from 'react'
import LoanCalc from 'loan-calc'

class Loans extends Component{
  constructor(props){
    super(props);
    this.state = {
      loans: [{type: 'Home',
                principal: 200000,
                      rate: 5,
                      months: 360},
              {type: 'Auto',
                principal: 15000,
                     rate: 3.5,
                     months: 48},
              {type: 'Student',
                principal: 40000,
                        rate: 8.9,
                        months: 120}]
    }
  }
  handlePrincipal(loan, index, event){
    //console.log(event.target.value);
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: parseInt(event.target.value, 10),
                  rate: loan.rate,
                  months: loan.months};
        } else {
          return item;
        }
      }
    );
    this.setState({loans: newArray });
  }
  handleRate(loan, index, event){
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: loan.principal,
                  rate: parseInt(event.target.value, 10),
                  months: loan.months};
        } else {
          return item;
        }
      }
    );
    this.setState({loans: newArray });
  }
  handleMonths(loan, index, event){
    let newArray = this.state.loans.map((item, index) => {
        if (item.type === loan.type){
          return {type: loan.type,
                  principal: loan.principal,
                  rate: loan.rate,
                  months: parseInt(event.target.value, 10)};
        } else {
          return item;
        }
      }
    );
    this.setState({loans: newArray });
  }
  render(){
    // console.log(this.state.loans.map((loan, index) =>
    //   "Type:" + loan.type + " " +
    //   "Principal:" + loan.principal + " " +
    //   "Rate:" + loan.rate + " " +
    //   "Months:" + loan.months
    // ));
    let currentLoans = this.state.loans.map((loan, index) => {
      if (loan.type === 'Auto'){
        return <div key={index}>
                  <h3>{loan.type}</h3>
                  <p>Principal
                  <input type='range' min={100} max={50000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                  {loan.principal}
                  </p>
                  <p>Rate
                  <input type='range' min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                  {loan.rate}
                  </p>
                  <p>Months
                  <input type='range' min={1} max={78} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                  {loan.months}
                  </p>
                  <p>Monthly Payment: {LoanCalc.paymentCalc({
                      amount: loan.principal,
                      rate: loan.rate,
                      termMonths: loan.months
                  })}</p>
                  <p>Total Interest: {LoanCalc.totalInterest({
                      amount: loan.principal,
                      rate: loan.rate,
                      termMonths: loan.months
                  })}</p>
              </div>
      } else {
        return <div key={index}>
                  <h3>{loan.type}</h3>
                  <p>Principal
                  <input type='range' min={100} max={200000} step={100} onChange={this.handlePrincipal.bind(this, loan, index)}/>
                  {loan.principal}
                  </p>
                  <p>Rate
                  <input type='range' min={.1} max={20} step={.1} onChange={this.handleRate.bind(this, loan, index)}/>
                  {loan.rate}
                  </p>
                  <p>Months
                  <input type='range' min={1} max={360} step={1} onChange={this.handleMonths.bind(this, loan, index)}/>
                  {loan.months}
                  </p>
                  <p>Monthly Payment: {LoanCalc.paymentCalc({
                      amount: loan.principal,
                      rate: loan.rate,
                      termMonths: loan.months
                  })}</p>
                  <p>Total Interest: {LoanCalc.totalInterest({
                      amount: loan.principal,
                      rate: loan.rate,
                      termMonths: loan.months
                  })}</p>
              </div>
      }
    })
    return(
      <div>
        <h1>Loans</h1>
        {currentLoans}
      </div>
    )
  }
}

export default Loans
