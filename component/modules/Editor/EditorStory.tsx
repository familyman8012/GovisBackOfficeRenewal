// EditorStory.tsx
import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill'; // 정적 임포트
import 'react-quill/dist/quill.snow.css';
import { uploadToS3 } from '@UtilFarm/uploads3';

export interface EditorStoryProps {
  value: string;
  onChange?: (content: string) => void;
  disabled?: boolean;
}

const EditorStory: React.FC<EditorStoryProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const quillRef = useRef<any | null>(null);

  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.className = 'sr-only';
    document.body.append(input);
    input.click();

    input.addEventListener('change', async e => {
      const file = input.files?.[0];

      if (!file) return;

      const imagePath = await uploadToS3(file);

      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection();
      if (!range || !editor) {
        console.error('not found quill editor ref object!', quillRef.current);
        return;
      }

      editor.insertEmbed(range.index, 'image', imagePath);
      editor.setSelection(range.index + 1, 1);
      document.body.removeChild(input);
    });
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
    if (!disabled && onChange) {
      onChange(content);
    }
  };

  return (
    <ReactQuill
      ref={quillRef}
      value={value}
      onChange={handleChange}
      modules={quillModules}
      theme="snow"
      readOnly={disabled}
    />
  );
};

export default EditorStory;
