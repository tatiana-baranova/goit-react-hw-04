import s from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ images }) => {

    return (
        <ul className={s.listCard}>
            {images.map(data => (
                <li className={s.list} key={data.id} data-id={data.id}>
                    <ImageCard data={data} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;