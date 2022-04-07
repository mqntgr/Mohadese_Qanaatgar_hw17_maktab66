import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";
import ItemContextProvider from "./components/ItemContextProvider";
function App() {
  return (
    
    <div className="container">
    <main>
      <ItemContextProvider>
        <AllItems/>
        <SelectedItems/>
      </ItemContextProvider>
    </main>
  </div>

  );
}

export default App;
