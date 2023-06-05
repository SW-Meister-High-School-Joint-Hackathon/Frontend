import { styled } from 'styled-components';
import Newsitem from './NewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0 1rem 0;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const featchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c9b4332e1aae4a26b304e044d7c9386f`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    featchData(false);
  },[category]);

  if(loading){
    return <NewsListBlock>대기 중.....</NewsListBlock>;
  }
  if(!articles){
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map(
        article => (<Newsitem key={article.url} article={article}/>)
      )}
    </NewsListBlock>
  );
};

export default NewsList;
