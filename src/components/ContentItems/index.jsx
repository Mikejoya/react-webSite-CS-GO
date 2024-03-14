import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "../Card";
import './index.css'
import { lazyLoad } from "../../utils";
import { AppContext } from "../../Context";

function ContentItems() {

    const context = useContext(AppContext);
    const categoriesRef = useRef([]);
    
    useEffect(()=>{
        
        function animationCategories(entry) {
            const element = entry.target;
            element.style.transform = "translate(24px, 24px)";
            element.style.transition = "transform 0.9s ease-in-out";
        }
        lazyLoad(categoriesRef.current, animationCategories);


        //console.log('Soy categoriesRef.current', categoriesRef.current);
        //console.log('Soy categoriesRef', categoriesRef);
        context.setLoading(true);
    },[]);

    
    const listCategories = ['Pistolas', 'Rifles', 'Armas pesadas', 'Subfusiles', 'Cuchillos', 'Guantes'];

    const categories = listCategories.map((element, index)=> {
            //console.log(categoriesRef.current[index])
        const categoryTitle = element.replace(/\s+/g, '').toLowerCase();
        return(
            <Link className='small-animation' key={index} to={categoryTitle}>
                <article  ref={(el)=> categoriesRef.current[index] = el} className='article-categories w-ful h-64  relative  rounded-md cursor-pointer' >
                    <p
                        className='absolute text-white text-5xl font-extrabold text-center title-categories'
                        key={element}
                    >  
                        {element}
                    </p>
                </article>
            </Link>
                
            );
    })

    console.log('Antes de la lista', listCategories);
    console.log('SOY CATEGORIES DE LOS FILTROS DE ARMAS', categories);
    return(
        <div className='flex flex-col justify-center items-center text-white mt-20 gap-8'>
            <section className='w-3/5 '>
                <article className='self-center text-black'>
                    <h2 className=' font-bold text-xl mb-5'>Explora las Categorías de Armas</h2>
                    <div className=''>
                        <p>Esta página no tiene como objetivo ser una tienda para vender artículos de CS:GO. Su propósito principal es brindar información sobre las distintas skins disponibles en el juego y mostrar su valor de float.</p>
                    </div>
                </article>
            </section>
            <section className='w-10/12 grid grid-cols-3 gap-14 justify-center'>
                {categories}                  
            </section>
        </div>
    )
}

export { ContentItems }