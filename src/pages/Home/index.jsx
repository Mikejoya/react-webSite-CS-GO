import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { AppContext } from '../../Context'
import { FirstVisitComponent } from '../../components/FirstVisitComponent';
import { useContext } from 'react';
import './index.css'


function Home() {

  const context = useContext(AppContext);

  

  // function renderView() {
  //   if(context.firstViewPage) {
  //     return <FirstVisitComponent />;
  //   }
  //   if(context.filteredItems) {
  //     return console.log('si Funciono');
  //   }
  // }

    return(
      <div className='home mt-20'>
        <FirstVisitComponent />
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
    )
}

export { Home };