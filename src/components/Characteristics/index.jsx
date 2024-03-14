function Characteristics() {
    return(
        <div className='w-full flex flex-col justify-center items-center gap-12'>
            <section className='w-4/5 mt-20 flex flex-col justify-center items-center'>
                <h2 className='font-extrabold text-xl mb-6'>
                    Float
                </h2>
                <div className='flex flex-col justify-center items-center gap-4 text-left'>
                    <p>
                        El "float" es un valor numérico que determina el grado de desgaste visual de una skin de arma en CS:GO. Cada skin de arma tiene un float asignado, que puede variar entre 1 (deplorable, muy desgastado) y 0 (recién fabricado, sin desgaste). Cuanto más cercano a 1 sea el float, más desgastada se verá la skin, mientras que un float cercano a 0 indicará que la skin está en mejores condiciones y se verá más nueva.

                        Existen cinco estados posibles basados en el valor del float:

                        Deplorable: Si el float se encuentra entre 1 y 0.45, la skin estará en un estado                       deplorable, mostrando un alto grado de desgaste y deterioro.
                        Bastante desgastado: Si el float está entre 0.45 y 0.38, la skin tendrá un                     aspecto bastante desgastado.
                        Algo desgastado: Con un float entre 0.38 y 0.15, la skin estará en un estado algo                      desgastado.
                        Casi nuevo: Un float entre 0.15 y 0.07 indicará que la skin está casi nueva, con                       un mínimo desgaste.
                        Recién fabricado: Si el float se encuentra entre 0.07 y 0, la skin estará en un                        estado recién fabricado, sin desgaste aparente.
                    </p>
                    <figure className='shadow-xl mb-6 mt-6'>
                        <img src="https://steamuserimages-a.akamaihd.net/ugc/1688247204865483704/331B71291BB48DF6073629DF6760B730A21244F7/" alt="" />
                    </figure>
                    <p>
                        Saber el valor de float de una skin es esencial para los jugadores que deseen comerciar o intercambiar skins, ya que el desgaste de la skin puede influir en su precio. Por ejemplo, una skin con un float de 0.15 puede venderse a un precio más alto que la misma skin con un float de 0.35, ya que se verá en mejores condiciones y será más atractiva visualmente. Esto es especialmente relevante para las skins de cuchillos y guantes, donde los valores de float cercanos a los límites, como 0.00 o 0.999, pueden hacer que las skins sean más valiosas debido a su rareza.
                    </p>
                </div>
            </section>
            <section className='w-4/5 mt-10 flex flex-col justify-center items-center'>
                <h2 className='font-extrabold text-xl mb-6'>
                    Rareza
                </h2>
                <div className='text-left flex flex-col gap-8 mb-20'>
                    <p>
                        <span className='text-lg font-extrabold'>Común (Common)</span>: Las armas de rareza común son las más frecuentes y menos valiosas en términos de apariencia. Son skins que se obtienen con facilidad y son relativamente sencillas en diseño. A menudo tienen acabados simples y colores básicos.
                    </p>

                    <p>
                        <span className='text-lg font-extrabold'>Grado Industrial (Industrial Grade)</span>: Las armas de rareza Grado Industrial son más atractivas y elaboradas que las comunes. Tienen diseños más detallados y colores más llamativos. Son más deseadas que las armas comunes y suelen tener un valor un poco más alto en el mercado.
                    </p>

                    <p>
                        <span className='text-lg font-extrabold'>Especificaciones Militares (Mil-Spec)</span>: Las armas de rareza Especificaciones Militares son aún más valiosas y raras que las de Grado Industrial. Tienen diseños únicos y llamativos, con acabados especiales y patrones más exclusivos. Son más difíciles de obtener y tienen un mayor valor en el mercado del juego.
                    </p>

                    <p>
                        <span className='text-lg font-extrabold'>Restringida (Restricted)</span>: Las armas de rareza Restringida son muy codiciadas y bastante raras. Tienen diseños excepcionales y acabados especiales que las hacen destacar entre las categorías anteriores. Son más costosas y muy valoradas por los jugadores.
                    </p>

                    <p>
                        <span className='text-lg font-extrabold'>Clasificada (Classified)</span>: Las armas de rareza Clasificada son extremadamente raras y valiosas. Tienen diseños impresionantes con efectos visuales especiales y detalles elaborados. Son altamente buscadas por los coleccionistas y jugadores que buscan skins exclusivas.
                    </p>

                    <p>
                        <span className='text-lg font-extrabold'>Encubierta (Covert)</span>: Las armas de rareza Encubierta son las más raras y valiosas en CS:GO. Tienen diseños excepcionales y acabados únicos con efectos visuales impresionantes. Son las skins más codiciadas y caras del juego.
                    </p>

                    <p>
                        Es importante destacar que la rareza de las armas en CS:GO no afecta directamente a su rendimiento en el juego, sino que se trata de una clasificación basada en su aspecto estético y demanda en el mercado. Las skins más raras y atractivas pueden tener un alto valor en el mercado, lo que hace que los jugadores las busquen para personalizar sus armas y tener una apariencia única mientras juegan.
                    </p>
                </div>
            </section>
        </div>
    )
}

export { Characteristics }