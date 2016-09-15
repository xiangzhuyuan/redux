import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Foot from './Foot'
import Sidebar from './Sidebar'

// why 这两个来自 container
// 因为他们是动态的部分
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

var mainStyle = {
  'border': 'dashed 1px yellow',
  'margin-left': '200px'
}
const App = () => (
  <div>
    <Header/>
    <Sidebar/>
    <div style={mainStyle}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    <Foot/>

  </div>
)

export default App
