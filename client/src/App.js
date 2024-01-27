
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TextAnalyzer from './Components/TextAnalyzer';

function App() {
  return (
    <div className="App">
      <h1 className="mainheading">Text Analyzer</h1>
      <p className="text-para">Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
      <div className="selection">
        <TextAnalyzer/>
      </div>
    </div>
  );
}

export default App;
