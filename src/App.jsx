import {Card, Board} from './card'
import List from './List'
import UseState from './UseState';
import UseEffect from './UseEffect';
import Calculator from './tasks/Calculator';


function App() {

  const data = {
    name:"Rock Star",
    age: 21,
    des:"Time to shine",
    src: "https://play-lh.googleusercontent.com/-gQlRSL8c_ekb1c5b2ftwVQgtoNde70KI4CDO36gdxl9RDcjrg864_Wj4JvYjAVZU7PM=w240-h480-rw"
  };

  return (
    <>
      <Calculator />
    </>
  )
}


export default App
