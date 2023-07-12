import { useState, useEffect } from 'react';

import './App.css';

import CardItem from './components/CardItem';
import PopUpContainer from './components/PopUpContainer';
import PreLoader from './components/PreLoader';

const App = () => {
  const [isCardClicked, setClicked] = useState(false);
  const [cardId, setCardId] = useState();
  const [categories, setCategories] = useState([]);

  const [isPreLoading, setPreLoading] = useState(true);

  const cardClicked = (eachItem) => {
    console.log(eachItem)
    setClicked(true);
    setCardId(eachItem);
  };

  const toggleModal = () => {
    setClicked(false);
  };

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setTimeout(() => {
          setPreLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
      {isPreLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className="bg-container">
            <h1 className="main-head">Chuck Norris</h1>
            <div className="card-container">
              <ul className="list-container">
                {categories.map((eachItem) => (
                  <CardItem key={eachItem} eachItem={eachItem} cardClicked={cardClicked} />
                ))}
              </ul>
            </div>
          </div>
          {isCardClicked && (
            <div className="popup">
              <div onClick={toggleModal} className="overlay"></div>
              <PopUpContainer toggleModal={toggleModal} categoryId={cardId} />
            </div>
          )}
        </>
      )}
    </>
  );
  
};

export default App;
