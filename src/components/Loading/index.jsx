import './index.css';

function LoadingSkeleton() {

    return(
        <div className='container-loading flex flex-col justify-center items-center rounded-md'>
            
                <div className='card-loading h-6 w-28 mt-4 rounded-md'> </div>
                <div className='card-loading w-52 h-44 flex justify-center items-center mt-2 rounded-md'></div>
                <div className='card-loading mb-4 mt-5 w-52 h-24 font-normal rounded-md'>
                </div>               
        </div>
    )
}

export { LoadingSkeleton }