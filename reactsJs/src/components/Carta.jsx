import act1 from "../assets/boxeo.jpg";
import act2 from "../assets/musculacion.jpg";
import act3 from "../assets/pilates.jpg";
import act4 from "../assets/spinning.jpg";
const Carta = () => {
    return (
        <div className="card mb-3 px-2 py-5">
            <div className="row g-0 p-1">
                <div className="col-md-4">
                    <img src={act1} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Boxeo</h5>
                        <p className="card-text">El entrenamiento funcional se basa en realizar ejercicios que se adaptan a los movimientos naturales del cuerpo humano para trabajar de forma global músculos y articulaciones. Una de sus principales ventajas es que se adaptan completamente a las condiciones físicas de cada persona, por eso resulta muy efectivo como entrenamiento personal: mejora la movilidad corporal, la agilidad y el equilibrio, desarrolla la salud cardiovascular, corrige la postura, fortalece la masa muscular y ayuda a mantener el peso. Por ejemplo, uno de los ejercicios funcionales más populares son las sentadillas. Si se realizan con la técnica correcta, este único movimiento que imita la acción de sentarse proporciona múltiples beneficios. Las sentadillas activan varios grupos musculares, en concreto el erector de columna, el glúteo, los isquiotibiales, el cuádriceps y el abdomen. El entrenamiento de estos músculos se traduce en más flexibilidad en las caderas, aumento de la resistencia cardiovascular, fortalecimiento de toda la cadena muscular de las piernas y mejora de la postura corporal, entre otros.</p>
                    </div>
                </div>
            </div>
            <div className="row g-0 p-1">
                <div className="col-md-4">
                    <img src={act2} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Musculacion</h5>
                        <p className="card-text">Es una alternativa de actividad física basada generalmente en ejercicio físico de media a alta intensidad, con la finalidad encontrar un equilibrio muscular entre los segmentos corporales, generalmente se utilizan estímulos anaeróbicos, principalmente se desarrolla en los gimnasios. También se le llama musculación a la actividad encaminada a hipertrofiar el músculo sin llegar a un desarrollo competitivo. La musculación al ser un entrenamiento con pesas, provoca transformaciones inducidas en las fibras musculares como son los micro traumas; estas pequeñas lesiones en el músculo contribuyen al cansancio experimentado tras el ejercicio. La reparación de los micro traumas, forman parte del crecimiento muscular mejor conocido como hipertrofia.</p>
                    </div>
                </div>
            </div>
            <div className="row g-0 p-1">
                <div className="col-md-4">
                    <img src={act3} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Pilates</h5>
                        <p className="card-text">El pilates es un método de ejercicio y movimiento físico. Su objetivo es fortalecer y equilibrar cuerpo y mente. A través de la práctica sistemática de ejercicios de pilates, el pilates ha demostrado tener un valor incalculable. No solo resulta beneficioso para personas que quieran tener y/o mantener una buena condición física y mental. También supone un importante complemento a la práctica deportiva y a la rehabilitación física El Método Pilates es un conjunto de movimientos controlados para el cuerpo y la mente. Dichos movimientos y ejercicios también se realizan sobre colchonetas y máquinas de pilates diseñadas especialmente para una correcta ejecución. Joseph Pilates fue el creador de este innovador sistema de ejercicios de cuerpo y mente. A través de la práctica de pilates, podrás transformar la manera en la que sientes tu cuerpo, así como la forma de actuar. Más adelante te contaremos todo sobre los beneficios del pilates.</p>
                    </div>
                </div>
            </div>
            <div className="row g-0 p-1">
                <div className="col-md-4">
                    <img src={act4} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Spinning</h5>
                        <p className="card-text">Muchos lo definen como ciclismo en casa, y es la definición más cercana que se puede tener. El spinning es un ejercicio cardiovascular y aeróbico que se lleva a cabo utilizando una bicicleta estática o, más bien, una bicicleta de spinning. A la hora de practicar spinning, el objetivo del deportista suele ser perder peso y tonificar su musculatura. No obstante, entrenando a través de este deporte se puede conseguir también una importante mejora tanto de la resistencia como de la fuerza. Pensado para personas de todas las edades y estaturas, otro punto clave de este deporte, también conocido como ciclismo indoor, es el cómo se practica. Para poder hacerlo hace falta una bicicleta estática que cumpla con un requisito fundamental: tener un volante de inercia que se encarga de hacer resistencia y dar realismo al pedaleo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carta;