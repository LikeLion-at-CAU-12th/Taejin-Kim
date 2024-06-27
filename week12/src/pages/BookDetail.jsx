import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const BookDetail = () => {
    const params = useParams();
    const id = params.id; // url에서 가져온 id값은 string에 해당함.
    const [books, setBooks] = useState([]);
    const [likes, setLikes] = useState(0);

    const updateLikes = ()=>{
        setLikes(likes + 1);
    }

    useEffect(()=>{
        const fetchBooks = async()=>{
            const response = await axios.get('/databases/books.json');
            setBooks(response.data);
        };
        fetchBooks();
    },[]);

    useEffect(()=>{
        setLikes(0);
    },[id]); // id가 바뀔때마다 setLikes가 바껴야하니까 의존성 배열에 [id]넣음.

    const book = books.find((b)=>b.id===parseInt(id)); // string을 int로 바꾸는 것이 parseInt

    if(!book){
        return <div> 찾는 책이 없습니다.</div>;
    }
  return (
    <div>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <Button onClick={updateLikes}>
            <Icon>bb</Icon> {likes}
        </Button>
    </div>
  )
}

export default BookDetail

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9ecfff;
  }

  &:active {
    background-color: #3d9dfd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;
