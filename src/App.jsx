import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import getImages from './services/api'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery';


// import axios from "axios";

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(0);


  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setError(false);
        const data = await getImages(query, page);
        setImage(prev => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = searchValue => {
    setQuery(searchValue);
    setImage([]);
    setPage(1);
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery}/>
      <ImageGallery images={image} />
    </>
  )
}

export default App
