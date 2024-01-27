import React, { useState } from 'react';
import './TextAnalyzer.css'
import ParagraphComp from './ParagraphComp';
import WordInputComp from './WordInputComp';

function TextAnalyzer() {
  const [highlightWordInput, setHighlightWordInput] = useState(true);
  const [highlightParagraph, setHighlightParagraph] = useState(false);

  const toggleHighlight = (option) => {
    if (option === 'wordInput') {
      setHighlightWordInput(true);
      setHighlightParagraph(false);
    } else if (option === 'paragraph') {
      setHighlightParagraph(true);
      setHighlightWordInput(false);
    }
  };

  return (
    <div>
        <div className='buttons'>
        <button className='btn  wordinput-button '
        onClick={() => toggleHighlight('wordInput')}
        style={{ backgroundColor: highlightWordInput ? 'green' : 'white' }}
      >
        Word Input
      </button>
      <button className='btn paragraph-button'
        onClick={() => toggleHighlight('paragraph')}
        style={{ backgroundColor: highlightParagraph ? 'green' : 'white' }}
      >
        Paragraph
      </button>

        </div>
      

      {highlightWordInput && (
        <div>
          <WordInputComp />
        </div>
      )}

      {highlightParagraph && (
        <div>
          <ParagraphComp />
        </div>
      )}
    </div>
  );
}

export default TextAnalyzer;
