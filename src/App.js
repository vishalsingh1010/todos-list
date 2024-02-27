import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import TodoItem from './MyComponents/TodoItem';

function App() {
  let todos =[
    {sno:1,
    title:'Go to market',
    desc:'you need to go to market to get this job done'
  },
  {sno:1,
    title:'Go to mall',
    desc:'you need to go to mall to get this job done'
  },
  {sno:1,
    title:'Go to ghat',
    desc:'you need to go to ghat to get this job done'
  }
  ]
  return (
   <>
<Header title="My Todo List" searchBar={true}/>
<Todos todos={todos}/>
<TodoItem/>
<Footer/>

   </>
  );
}

export default App;
