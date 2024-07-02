import {Card, Board} from './card'
import List from './List'
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import Calculator from './tasks/Calculator';
import UseRef from './hooks/UseRef';
import UseMemo from './hooks/UseMemo';
import RegistrationForm from './tasks/RegistrationForm';


function App() {

  const data = {
    name:"Rock Star",
    age: 21,
    des:"Time to shine",
    src: "https://play-lh.googleusercontent.com/-gQlRSL8c_ekb1c5b2ftwVQgtoNde70KI4CDO36gdxl9RDcjrg864_Wj4JvYjAVZU7PM=w240-h480-rw"
  };

  return (
    <>
      <RegistrationForm />
    </>
  )
}


export default App
