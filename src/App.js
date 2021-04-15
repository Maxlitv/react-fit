import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileSummary />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
