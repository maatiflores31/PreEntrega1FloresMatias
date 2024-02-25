
const Carousel = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner p-5">
                            <div className="carousel-item active">
                                <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/09/05/16623854543198.jpg" className="d-block w-100" alt="Banner #1" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://phantom-marca.unidadeditorial.es/d7f86afa6daba8940fcfc45eac617ee6/resize/828/f/jpg/assets/multimedia/imagenes/2023/07/22/16900132154906.jpg" className="d-block w-100" alt="Banner #1" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://phantom-elmundo.unidadeditorial.es/95aebb12721c45a14b949cca2d81c06d/crop/0x0/2475x1666/resize/1200/f/jpg/assets/multimedia/imagenes/2021/08/27/16300683348682.jpg" className="d-block w-100" alt="Banner #1" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;