import React from 'react';
import { Editor } from './Editor';

const App = () => (
  <div className="App">
    <Editor
      headline={`<h1>Create your event!</h1>
    <p>Start typing something...</p>`}
    />
  </div>
);

export default App;
