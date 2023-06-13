import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import Graph from './components/Graph';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
        <Graph/>
      </div>
    </div>
  );
}

export default App;
