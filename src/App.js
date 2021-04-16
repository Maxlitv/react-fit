import "./App.css";
import Header from "./components/Header/Header";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import Thirdsection from "./components/ThirdSection/Thirdsection";
import Lastsection from "./components/Lastsection/Lastsection";

function App({ data }) {
  return (
    <div className="App">
      <Header />
      <ProfileSummary userData={data.userData} />
      <FirstSection store={data.firstSectionData} />
      <SecondSection store={data.secondSectionData} />
      <Thirdsection />
      <Lastsection />
    </div>
  );
}

export default App;
