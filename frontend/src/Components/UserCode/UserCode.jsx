import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CodeEditor = ({children}) => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={tomorrowNight}>
        {children}
      </SyntaxHighlighter>
    );
  };
  export default CodeEditor