import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
import React, { useRef, useState, useMemo } from 'react';
interface EditorProps {
  content: string;
  setContent: (content: string) => void;
}
const Editor: React.FC<EditorProps> = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = {};

  return useMemo(
    () => (
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onChange={(content) => setContent(content)}
      />
    ),
    []
  );
};

export default Editor;
