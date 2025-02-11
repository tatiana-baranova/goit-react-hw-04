import s from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({ images, openModal }) => {
    return (
    <ul className={s.listCard}>
        {images.map((image) => (
        <li key={image.id} className={s.card} onClick={() => openModal(image)}>
            <ImageCard data={image} />
        </li>
        ))}
    </ul>
    );
};

// const ImageGallery = ({ images, openModal }) => {
//     const clickImage = (e) => {
//     const imageId = e.target.id;
//     const findImage = images.find(image => image.id === imageId);
    
//     if (findImage) {
//     openModal(findImage);
//     }
// };

//     return (
//         <ul className={s.listCard} onClick={clickImage}>
//             {images.map(data => (
//                 <li className={s.list} key={data.id} data-id={data.id}>
//                     <ImageCard data={data} />
//                 </li>
//             ))}
//         </ul>
//     );
// };

export default ImageGallery;

