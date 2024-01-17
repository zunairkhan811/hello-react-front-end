import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageList from './components/Greeting';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="main-container">
            <Routes>
              <Route path="/" element={<MessageList />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
