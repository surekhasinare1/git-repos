



import Header from "./Header";
import Footer from "./Footer";
import nature from "./nature.jpg";


function App() {
  
  return (
    <div className="App container">
      <Header></Header>
      <hr></hr>

      {/* <Banner img = {image}/> */}

<img src={nature}></img>

      <hr></hr>

      <Footer></Footer>
    </div >
  );
}
// function Banner({img}) {
//   return (
//     <img src={img} alt="Testing"></img>
//   ); 
// }


export default App;
