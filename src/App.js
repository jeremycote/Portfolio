import './App.css';
import Project from './Components/Project/Project';
import Technology from './Utilities/Enums/Technology'
import DownloadSource from './Utilities/Enums/DownloadSource'

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Project title="iFavs" description="Organise and use all of your links, files, and apps using iFavs.\nEntirely written in Swift, iFavs lives in MacOS' menubar for quick and easy access." imgUrl="images/iFavs-icon.png" downloadUrl="#" downloadSource={DownloadSource.AppleStoreMac}/>
        <Project title="Pedalboard" description="Written in Swift, Pedalboard uses the AudioKit library to apply digital sound processing in real time. Simply plug-in your instrument or microphone and start playing." imgUrl="images/PedalboardiPad.png" downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
        <Project title="Two Truths and a Lie" description="Challenge your friends and family to a Two Truths and a Lie over iMessage.\nTwo Truths and a Lie is an iMessage extension written in Swift." imgUrl="images/TTOLiPhone.png" downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
        <Project title="500" description="Play a classic 4 player card game against AI trained using Unity's ml-agents toolkit. Coded in C# and trained using PyTorch." imgUrl="images/Ace.png" downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
      </div>
    </div>
  );
}

export default App;
