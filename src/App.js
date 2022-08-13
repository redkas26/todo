
import './App.css';
// import AddItems from './components/AddItems/AddItems';
// import Home from './components/Home/Home';
import TodoList from './components/Home/TodoList';
// import Items from './components/Items/Items';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// class App extends Component {
//   state = {
//     items : [
//       {id:1, name:'red', description:32},
//       {id:2, name:'kas', description:33},
//       {id:3, name:'redkas', description:34},
//     ]
//   }

//   deleteItem =(id) => {
//     let items = this.state.items.filter(item => {
//       return item.id !== id
//     })
//     this.setState({items})
//   }

//   addItem = (item) => {
//     item.id = Math.random();
//     let items = this.state.items;
//     items.push(item);
//     this.setState({items})
//   }


//   render(){
//     return (
//     <div className='App'>
//       <Home />
//       <Items items={this.state.items} deleteItem={this.deleteItem} />
//       <AddItems addItem={this.addItem} />
//     </div>
    
//   );
//   }
  
// }
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
export default App;
