import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo';
import CountableFooter from '../containers/CountableFooter'

const App = ({match: { params }}) => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <CountableFooter />
    </div>
  );
}


App.propTypes = {

}
 
export default App;
