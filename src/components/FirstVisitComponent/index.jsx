import { useContext, useEffect } from 'react';
import { AppContext } from '../../Context';
import BackgroundHomePage from '../../assets/header_ctt6png.png';
import './index.css';

function FirstVisitComponent() {
    const context = useContext(AppContext);

    useEffect(()=> {
        context.setLoading(true);
    }, []);

    return(
        <div className='w-full h-4/5 flex flex-col items-center justify-between gap-8 overflow-hidden text-black'>
            <div className='w-full h-full flex justify-around items-center'>
                <section className=' w-1/4 z-10'>
                    <h1 className='title-responsive font-bold text-9xl'>MkSkins</h1>
                </section>
                <section className=' w-3/5'>
                    <img className='w-full' src={BackgroundHomePage} alt="Imagen para la primera vista de la pagina" />
                </section>
            </div>
            <div >
                <p className='mb-6'>¡Bienvenidos a nuestra página dedicada a las skins de CS:GO! 
                </p>
                <span> 
                    Aquí encontrarás un espacio especialmente diseñado para que aprendas todo sobre las skins de CS:GO, incluyendo detalles como el float, la rareza y otros aspectos interesantes. Queremos brindarte una experiencia educativa y agradable mientras te sumerges en el fascinante mundo de las skins.</span>
            </div>
        </div>
    )
}

export { FirstVisitComponent }