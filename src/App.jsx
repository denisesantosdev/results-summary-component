import "./css/global.css";
import "./css/variables.css";
import "./css/fonts.css";
import "./css/App.css";

import UserResult from "./components/UserResult/UserResult";
import Button from "./components/Button/Button";
import Summary from "./components/Summary/Summary";

import reactionImg from "./assets/images/icon-reaction.svg";

import summaryData from './assets/data.json'

function App() {
  return (
    <main>
      <UserResult />
      <section className="summary-container">
        <h3>Summary</h3>
        <Summary data={summaryData} />
        <Button />
      </section>
    </main>
  );
}

export default App;
