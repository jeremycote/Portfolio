import './App.css';
import Project from './components/project/Project';
import DownloadSource from './utilities/enums/DownloadSource'
import Skill from './components/skill/Skill';
import Landing from './components/landing/Landing';

// Images
import iFavsImage from './assets/images/projects/iFavs-icon.png';
import pedalboardImage from './assets/images/projects/PedalboardiPad.png';
import ttolImage from './assets/images/projects/TTOLiPhone.png';
import fiveHundredsImage from './assets/images/projects/Ace.png';
import fxfImage from './assets/images/projects/5x5iPhone.png';
import geoSwapImage from './assets/images/projects/GeoSwapperiPhone.png';

const iFavsDescription = "Organise and use all of your links, files, and apps using iFavs.\nEntirely written in Swift, iFavs lives in MacOS' menubar for quick and easy access.";
const pedalboardDescription = "Written in Swift, Pedalboard uses the AudioKit library to apply digital sound processing in real time. Simply plug-in your instrument or microphone and start playing.";
const ttolDescription = "Challenge your friends and family to a Two Truths and a Lie over iMessage.\nTwo Truths and a Lie is an iMessage extension written in Swift.";
const fiveHundredsDescription = "Play a classic 4 player card game against AI trained using Unity's ml-agents toolkit. Coded in C# and trained using PyTorch.";
const fxfDescription = "5x5 Math Puzzles puts your arithmetic skills to the test with grid based puzzles.\nWritten in C#, this game uses Unity for rendering and fluid interaction with the user.";
const geoSwapDescription = "Guess animals, food, and landmarks from all over the world! Not sure what it is? Complete the puzzle to reveal a beautiful image.";

function App() {
  return (
    <div className="App">
      <div className='head-content'>
        <div className='header'>
          <a>About me</a>
          <a>Skills</a>
          <a>Projects</a>
          <a className='margin-right-auto'>Contact</a>
          <a><i class="fa-brands fa-instagram"></i></a>
          <a><i class="fa-brands fa-github"></i></a>
        </div>
        <div className='head-title'>
          <h1>Jeremy Côté</h1>
          <p>Software Developer</p>
        </div>
      </div>
      {/* <Landing className="landing" title="Jeremy\nCôté" imgUrl={iFavsImage}/> */}

      <div className='content'>
        <div className='section'>
          <h2>About me</h2>
          <p>Currently a second year student in a Bsc. of Computer Engineering at the University of Ottawa,
            I started programming 7 years ago using C for Arduino, and now, after 5 Game Jams hosted by Epic Games,
            I mainly program in Swift, C# and C++. In the summer of 2020, I started running HDH Analytics Inc where
            I currently develop apps for the Apple AppStore and Google PlayStore.
            My love of violin and guitar has sparked a passion for Digital Sound Processing which resulted in project Pedalboard.</p>
        </div>
        
        <div className='section'>
          <h2>My Skills</h2>
          <div className="grid">
            <Skill title="Languages" elements={['C#', 'Swift','C++','Python','Java', 'Scala']}/>
            <Skill title="Graphical UI" elements={['Unity','SwiftUI','WxWidgets','Unreal Engine', 'Lanterna']}/>
            <Skill title="Web Development" elements={['HTML', 'CSS', 'React JS', 'Angular JS', 'JavaScript', 'TypeScript']}/>
            <Skill title="Dependency Management" elements={['apt', 'npm', 'Yarn', 'Maven']}/>
            <Skill title="Databases" elements={['Spark', 'SQL', 'Flyway', 'Redis', 'PySpark']}/>
            <Skill title="Collaboration" elements={['Jira', 'Confluence', 'Git']}/>
            <Skill title="Deployment" elements={['Docker', 'Kubernetes', 'Apple TestFlight']}/>
            <Skill title="Testing" elements={['JUnit', 'ScalaTest', 'XCode Test', 'PyTest']}/>
          </div>
        </div>
        
        <div className='section'>
          <h2>My Projects</h2>
          <div className="project-grid">
            <Project title="iFavs" description={iFavsDescription} imgUrl={iFavsImage} downloadUrl="#" downloadSource={DownloadSource.AppleStoreMac}/>
            <Project title="Pedalboard" description={pedalboardDescription} imgUrl={pedalboardImage} downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
            <Project title="Two Truths and a Lie" description={ttolDescription} imgUrl={ttolImage} downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
            <Project title="5x5" description={fxfDescription} imgUrl={fxfImage} downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
            <Project title="GeoSwap" description={geoSwapDescription} imgUrl={geoSwapImage} downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
            <Project title="500" description={fiveHundredsDescription} imgUrl={fiveHundredsImage} downloadUrl="#" downloadSource={DownloadSource.AppleStore}/>
          </div>
        </div>
      </div>
      <div className='footer'>
          <div className='flex-column'>
            <h1>Thanks for reading</h1>
            <h2>Let's get in touch</h2>
          </div>
          <div className='flex-row'>
              <a className='button-call-to-action'>jeremymcote@hdh-analytics.com</a>
              <a className='button-dark'>Git</a>
          </div>
        </div>
    </div>
  );
}

export default App;
