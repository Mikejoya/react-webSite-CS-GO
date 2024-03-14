/**
 * Esta funcion observa un contenedor para realizar una accion.
 * @param {Array, function} list callback lista de contenedores y funcion a realizar.
 * @returns {Array} filtrado que cumplen con la codicion del callback.
 */

export function lazyLoad(list, callback) {

    const isIntersecting = (entry)=> {
        return entry.isIntersecting;
    }
    
    const observer = new IntersectionObserver((entries)=> {
        entries.filter(isIntersecting).forEach(callback);
    });

    const events = ()=> {
        list.forEach((elemet)=> {
            observer.observe(elemet);
        })
    }

    events();
}
