import  "./App.scss";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Navbar from "./component/Navbar/Navbar";

const App =()=>{
  return(
    <div className="App">
      
      <Navbar />
      <Header />
      <Main />


    </div>
  )
}
export default App;