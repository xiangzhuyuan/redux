#针对app 状态

## 也就是对于 app state 的 slice


Reducer它本身就是用来处理当前 redux app 状态的
而它的定义就是接收一个状态和动作, 然后返回该动作影响之后的新的状态.


最后再由一个总结用的 reducer 把所有的状态收集`combineReducers()`函数到一起. 
