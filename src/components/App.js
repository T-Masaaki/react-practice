import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import CountableFooter from '../containers/CountableFooter'

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <CountableFooter />
    </div>
  );
}


App.propTypes = {

}
 
export default App;
