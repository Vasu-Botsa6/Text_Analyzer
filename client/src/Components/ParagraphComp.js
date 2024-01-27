import React, { useState } from 'react';

function ParagraphComp() {
  const [text, setText] = useState('');

  const calculateMetrics = () => {
    const charCount = text.length;
    const wordCount = text.split(/\s+/).filter(word => word !== '').length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
    const paragraphCount = text.split('\n').filter(para => para.trim() !== '').length;
    const spaceCount = text.split(' ').length - 1;
    const punctuationCount = text.replace(/[^\.,!?]/g, '').length;

    return {
      charCount,
      wordCount,
      sentenceCount,
      paragraphCount,
      spaceCount,
      punctuationCount
    };
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const { charCount, wordCount, sentenceCount, paragraphCount, spaceCount, punctuationCount } = calculateMetrics();

  return (
    <div className="ParagraphComp">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type, or copy/paste your content here."
        rows="10"
        cols="177"
      ></textarea>
      <div style={{margin:'20px'}}>
        <table className='table table-striped table-bordered .mx-5'>
            <thead>
            <tr>
                <th>Characters</th>
                <th>Words</th>
                <th>Sentences</th>
                <th>Paragraphs</th>
                <th>Spaces</th>
                <th>Punctuations</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{charCount}</td>
                <td>{wordCount}</td>
                <td>{sentenceCount}</td>
                <td>{paragraphCount}</td>
                <td>{spaceCount}</td>
                <td>{punctuationCount}</td>
            </tr> 
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParagraphComp;
