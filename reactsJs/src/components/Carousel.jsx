import gym1 from "../assets/calistenia.jpg";
import gym2 from "../assets/funcional.jpg";
import gym3 from "../assets/yoga.jpg";
const Carousel = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner p-5">
                            <div className="carousel-item active">
                            <img src={gym1} className="d-block w-100" alt="Banner #1" />
                            </div>
                            <div className="carousel-item">
                            <img src={gym2} className="d-block w-100" alt="Banner #1" />
                            </div>
                            <div className="carousel-item">
                            <img src={gym3} className="d-block w-100" alt="Banner #1" />
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