import data from "./data";
import Questions from "./Questions";
const App = () => {
  return (
    <main>
      <Questions questions = {data}/>
    </main>
  );
};
export default App;
