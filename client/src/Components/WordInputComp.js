import React, { useState } from 'react';
import './WordInputComp.css'

function WordInputComp() {
  const [text, setText] = useState('');

  const calculateMetrics = () => {
    const charCount = text.length;
    const wordCount = text.split(/\s+/).filter(word => word !== '').length;

    return {
      charCount,
      wordCount
    };
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const { charCount, wordCount } = calculateMetrics();

  return (
    <div className="WordInputComp">
        <div className='search-word-btn'>
        <div className='word-input'>
        <input
          type="text"
          id="inputText"
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Type your word here..."
        />
        </div>
        <div className='process-word-btn'>
        <button className='btn btn-primary'>
            Process Word
        </button>
        </div>
        </div>
      <div className='word-input-table'>
        <table className='table table-striped table-bordered '>
            <thead>
            <tr>
                <th>Characters</th>
                <th>Words</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{charCount}</td>
                <td>{wordCount}</td>
            </tr> 
            </tbody>
        </table>
      </div>
      {/* <div className='process-word-details'>
        <p>Defination :</p>

      </div> */}
      <div className="process-word-division">
      <div className="definition">
        <div><p>Definition:</p></div>
        <div className='definition-text'>
        <p>in, relating to, or characteristic of a town or city.</p>
        <p>"the urban population"</p>
        </div>
      </div>
      <div className="parts-of-speech">
        <p>Parts of Speech:</p>
        <p className='parts-of-speech-text'>Noun</p>
      </div>
      <div className="synonyms">
        <p>Synonyms:</p>
        <p className='synonyms-text'>Town</p>
      </div>
      <div className="antonyms">
        <p>Antonyms:</p>
        <p className='antonyms-text'>Rural</p>
      </div>
      </div>
    </div>
  );
}

export default WordInputComp;
