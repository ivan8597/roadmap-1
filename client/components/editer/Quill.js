import React, { useEffect, useRef, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor=({value, setValue,planeValue,setPlaneValue}) =>{
  const ref=useRef()
 const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image','video'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image','video'
  ]
  useEffect(()=>{
   setPlaneValue(ref.current.getEditor().getText())
  },[value])
  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} ref={ref} modules={modules} formats={formats}/>
);
}
export default QuillEditor