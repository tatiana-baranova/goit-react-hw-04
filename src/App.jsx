import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import getImages from './services/api'
import './App.css'

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




  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
