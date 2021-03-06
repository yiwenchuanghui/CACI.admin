import React from 'react';
import MarkdownElement from './MarkdownElement';

export const Preview = props => {
  return (
    <div style={ { padding: 10 } }>
      <h3>Markdown result</h3>
      <MarkdownElement text={ props.markdown } />
    </div>
  );
};
