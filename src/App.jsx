import logo from './logo.svg';
import './App.css';
import Myheading from './components/Heading';
import Mylist from './components/List';
function App() {
  const heading={
    color:'yellow',
    fontSize:"7rem",
  }
  return (
    <div className="App">
      {/* {[1,2,3,4,5].map((e)=>(
        <h1>hello {e}</h1>
      ))} */}

     <Myheading head={"Mobile operating system"}/>

    <Mylist arr={["android","blackbarry","iphone","windowsphone"]} />

    <Myheading head={"Mobile Manufactures"}/>

<Mylist arr={["Samsung","HTC","Microphone","Apple"]} />

    </div>
  );
}




export default App;
