import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // console.log(name, job);
  const nextPerson = () => {
    setIndex((unUpdatedIndex) => {
      const newIndex = (unUpdatedIndex + 1) % people.length;
      return newIndex;
    });
  };
  const prePerson = () => {
    setIndex((unUpdatedIndex) => {
      const newIndex = (unUpdatedIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='container'>
          <button className='prev-btn' onClick={prePerson}>
            <FaChevronLeft />
          </button>

          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise me{' '}
        </button>
      </article>
    </main>
  );
};
export default App;
