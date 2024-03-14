import { createContext, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

function AppContextProvider({ children }) {
    
    
    //Elemetos: Todos los elementos de la Api.
    const filteredItems = useRef([]);
    
    //Filtrado: Filtrado de elemetos.
    const [ filterCategories, setFilterCategories ] = useState([]);
    // console.log('Soy el filtrado de los items',filterCategories);
    
    //Path: Filtrar los items en categorias.
    const [filteredCategories, setFilteredCategories] = useState(null);
    // console.log('Esta es la palabra de filtrado', filteredCategories)

    //Carga y Error: Verifica si esta cargando o ahi un error al filtrar items.
    const [loading, setLoading] = useState(true);
    
    const location = useLocation();

    useEffect(()=> {
        fetch('https://bymykel.github.io/CSGO-API/api/es-MX/skins.json')
        .then(response => response.json())
        .then(data => filteredItems.current = data)
    }, []);
    console.log('Soy todos los items',filteredItems);
    // console.log('Soy el texto de la url' ,filteredCategories);
    
    useEffect(()=> {
        setFilteredCategories(location.pathname.split('/')[2]);
    }, [location.pathname, setFilteredCategories]);

    useEffect(() => {
        setTimeout(()=> {
            const textFilterCategories = filteredCategories;
            searchCategory(textFilterCategories); 
            console.log('NOS EJECUTAMOS');
            console.log('Estamos cargando',loading);
            if(location.pathname === '/' || location.pathname === '/caracteristicas' || location.pathname === '/articles') {
                setLoading(true);
            }
        }, 1000);
    }, [filteredItems, filteredCategories, setLoading]);
    //const array = filteredItems.map(item => item.category)
    
    function searchCategory(FilterText) {
        setFilterCategories([]);
        const items = filteredItems.current.filter(item => {
            // console.log('Nosotros somos...',item);
            const categoryName = item.category && item.category.name;
            // console.log('Yo soy categoryName', categoryName);
            if(categoryName) {
                return categoryName.replace(/\s+/g, '').toLowerCase() === FilterText;
            }else {
                return false;
            }

        });
        console.log('HOLA MUNDO ' ,filteredItems);
        setFilterCategories(items);
        setLoading(false);
    }
    
  
    return (
        <AppContext.Provider value={{
            filteredItems,
            
            filterCategories,
            setFilterCategories,
            filteredCategories,
            setFilteredCategories,
            loading,
            setLoading,
        }}>
            { children }
        </AppContext.Provider>
    );
}

export { AppContextProvider, AppContext }