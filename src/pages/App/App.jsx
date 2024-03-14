import { useRoutes, BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from '../../Context';
import { Navar } from '../../components/Navar';
import { Home } from '../Home'
import { ContentItems } from '../../components/ContentItems';
import { CategoriesItems } from '../../components/CategoriesItems';
import { Characteristics } from '../../components/Characteristics';
import './App.css'

const AppRoutes = ()=> {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/articles', element: <ContentItems /> },
    { path: '/articles/pistolas', element: <CategoriesItems /> },
    { path: '/articles/Rifles', element: <CategoriesItems /> },
    { path: '/articles/armaspesadas', element: <CategoriesItems /> },
    { path: '/articles/Subfusiles', element: <CategoriesItems /> },
    { path: '/articles/Cuchillos', element: <CategoriesItems /> },
    { path: '/articles/Guantes', element: <CategoriesItems /> },
    { path: '/caracteristicas', element: <Characteristics /> },
  ]);

  return routes;
}

function App() {

  return (
    <BrowserRouter> 
      <AppContextProvider >
        <Navar />
        <AppRoutes />
      </AppContextProvider >
    </BrowserRouter> 
  )
}

export default App
