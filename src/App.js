
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import BookList from './components/BookList';
import MyJumbotron from './components/MyJumbotron';
import WarningSign from './components/WarningSign';
import SingleBook from './components/SingleBook';
import fantasy from './data/fantasy.json'


function App() {
  return (
  <>
   <MyNav/>
   <MyJumbotron title ="Strive Books"/>
   {/* <SingleBook book = {fantasy[0]} ></SingleBook> */}
   <BookList books = {fantasy}/>
  </>)
}

export default App;
