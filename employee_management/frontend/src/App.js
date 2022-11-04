import LoggedinState from './Components/ContextAPI/Loggedin';
import ProfileState from './Components/ContextAPI/ProfileState';
import Interface from './Components/Interface';


function App() {
  return (
    <>
      <LoggedinState>
        <ProfileState>
          <Interface />
        </ProfileState>
      </LoggedinState>
    </>
  );
}

export default App;
