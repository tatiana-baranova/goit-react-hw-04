import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import getImages from './services/api'
import Loader from './components/Loader/Loader';
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';


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
        setLoading(true);
        const data = await getImages(query, page);
        setImage(prev => [...prev, ...data.results]);
        setTotalPage(data.total_pages);
        console.log(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = searchValue => {
    setQuery(searchValue);
    setImage([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  }
  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <Toaster position="bottom-right"/>
      {error && <ErrorMessage/>}
      <ImageGallery images={image} />
      {loading && <Loader />}
      {image.length > 0 && page < totalPage && (
        <LoadMoreBtn changePage={handleChangePage}/>
      )}
    </>
  )
}

export default App
