import { useContext, useState, useRef, lazy, Suspense} from "react";
import { AppContext } from "../../Context";
import { LoadingSkeleton } from "../Loading";
import { Card } from '../Card';
import './index.css'

function CategoriesItems() {
    const context = useContext(AppContext);
    console.log(context);
    const [listType, setListType] = useState('hidden');
    const items = context.filterCategories;
    console.log('YO SOYYY ITEMS',items);
    //Filtrado por palabra: se filtra las categorias por arma especifica.
    const [filteredWordWeapon, setFilteredWordWeapon] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    
    function filterForWordItems(keyWord) {
        if(keyWord === '') {
            setFilteredWordWeapon(items);
            setIsFiltering(false);
            console.log('soy KEYWORD', keyWord);
        }else {
            console.log('soy KEYWORD', keyWord);
            const filterForItems = items.filter( item => item.weapon === keyWord)
            setFilteredWordWeapon(filterForItems);
            setIsFiltering(true);
        }
    }

    const typeWeapon = [];
    items.forEach((type)=> {
        const weapon = type.weapon
        if(!typeWeapon.includes(weapon)) {
            typeWeapon.push(weapon);
        }
    })

    function repeatComponent(Component, key) {
        const components = [];
        for(let i = 0; i < 8; i++) {
            components.push(<Component key={`${key}-${i}`}/>);
        }
        return components;
    }

console.log('REspuestas...', filteredWordWeapon);

    return(
        <section className='w-full flex flex-col gap-10 mt-20'>
            <section className='text-black'>
                <h1>Aprende sobre el float minimo y maximo ademas del tipo de rareza.</h1>
            </section>
            <section className='w-full  relative'>
                <div className='list-style w-64 max-h-96 absolute flex flex-col right-0 rounded-lg mr-4 '>
                    <button className=' h-10 flex-none' onClick={()=> {
                        if(listType === 'hidden')setListType('flex')
                        else if(listType === 'flex') setListType('hidden');
                    }}>Filtrar</button>
                    <ul className={`w-auto overflow-auto text-white ${listType} flex-col gap-1 text-left m-2`}>
                        {typeWeapon.map((type, index) =>{

                            return <li 
                            key={index}
                            onClick={()=> filterForWordItems(type.name)}
                            className='text-black m-2 cursor-pointer list-hover'>{type.name}</ li>
                            
                        }
                            )}
                    </ul>
                </div>
            </section>
            <section className='container-items w-full gap-8 justify-center mb-10 mt-24'>
                {context.loading && ( 
                    repeatComponent(LoadingSkeleton, 'loading-skeleton-')
                )}
                {isFiltering ? (filteredWordWeapon.map((item, index)=> (
                    <Suspense fallback={<p>Hola...</p>}>
                        
                        <Card
                        
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            minFoat={item.min_float}
                            maxFoat={item.max_float}
                            rarity={item.rarity.name}
                        />
                    </Suspense>

                ))) : (items.map((item, index)=> (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        minFoat={item.min_float}
                        maxFoat={item.max_float}
                        rarity={item.rarity.name}
                    />

                )))}

            </section>
        </section>
    )
}


export { CategoriesItems }