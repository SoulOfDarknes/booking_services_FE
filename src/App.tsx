import { Provider } from "react-redux";
import Booking from "./pages/Booking/index";
import { store } from "./redux/store";


function App() {
  return (
    <div className="App">
          <Provider store={store}>
              <Booking/>
    </Provider>
      
    </div>
  );
}

export default App;
