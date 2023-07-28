// Editor.tsx
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic<any>(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export interface EditorProps {
  value: string;
  onChange?: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const quillRef = React.useRef<any | null>(null);
  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      if (!input.files || !quillRef.current) return;
      const file = input.files[0];
      const formData = new FormData();

      formData.append('image', file);
      const quillEditor = quillRef.current.getEditor();

      const range = quillEditor.getSelection(true);

      quillEditor.insertEmbed(
        range.index,
        'image',
        `${window.location.origin}/images/loader.gif`
      );

      quillEditor.setSelection(range.index + 1);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      quillEditor.deleteText(range.index, 1);

      quillEditor.insertEmbed(range.index, 'image', data.url);
    };
  };

  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ['link', 'image', 'video'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  const handleChange = (content: string) => {
    if (onChange) {
      onChange(content);
    }
  };

  return (
    <QuillNoSSRWrapper
      ref={quillRef}
      value={value}
      onChange={handleChange}
      modules={quillModules}
      theme="snow"
    />
  );
};

export default Editor;
