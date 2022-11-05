import React, { useState, useEffect, useRef } from "react";
export default function Editor({
  content = "",
  getContent = () => {},
  disable = false,
  placeholder = "Enter Decription here...",
}) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <div className="w-100 ">
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          onReady={(editor) => {}}
          config={{
            placeholder: placeholder,
            removePlugins: ["Heading"],
            toolbar: ["bold", "italic", "bulletedList", "numberedList", "link"],
          }}
          data={content}
          className="mt-3 wrap-ckeditor "
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data, "data");
            getContent(data);
          }}
        />
      ) : (
        "loading..."
      )}
    </div>
  );
}
