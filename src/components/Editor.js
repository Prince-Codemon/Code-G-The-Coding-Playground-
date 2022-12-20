import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import {githubDark} from "@uiw/codemirror-theme-github";
import { useState } from "react";
import { css } from "@codemirror/lang-css";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import {SiHtml5, SiCss3, SiJavascript} from "react-icons/si"
import { FiCopy } from "react-icons/fi";

const Editor = (props) => {
  const { language, displayName, onChange,value,  } = props;
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={`editor-container ${open ? " " : "collapsed"}`}>
        <div className="editor-title desktop">
          {displayName === "HTML" && <SiHtml5 size={25} color="#E44D27" />}
          {displayName === "CSS" && <SiCss3 size={25} color="#1F8FE7" />}
          {displayName === "JS" && <SiJavascript size={25} color={"yellow"} />}
          {displayName}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="btn btn-copy"
              onClick={() => {
                navigator.clipboard.writeText(value);
                alert("Copied to clipboard");
              }}
            >
              <FiCopy />
            </button>
            <button
              className="btn"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              {open ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
            </button>
          </div>
        </div>
        {language === "js" && (
          <CodeMirror
            value={value}
            extensions={[javascript({ jsx: true })]}
            theme={githubDark}
            onChange={onChange}
            className={`codemirror-wrapper`}
            options={{
              lint: true,
              lineWrapping: true,
              mode: language,
              lineNumbers: true,
              theme: "material",
            }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
          />
        )}
        {language === "css" && (
          <CodeMirror
            value={value}
            extensions={[css()]}
            theme={githubDark}
            onChange={onChange}
            className={`codemirror-wrapper `}
            options={{
              lint: true,
              lineWrapping: true,
              mode: language,
              lineNumbers: true,
              theme: "material",
            }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
          />
        )}
        {language === "html" && (
          <CodeMirror
            value={value}
            height="200px"
            theme={githubDark}
            extensions={[
              html({
                config: {
                  htmlMode: true,
                  autoCloseTags: true,
                  autoCloseBrackets: true,
                  matchTags: true,
                  matchBrackets: true,
                },
              }),
            ]}
            onChange={onChange}
            className={`codemirror-wrapper `}
            options={{
              lint: true,
              lineWrapping: true,
              mode: language,
              lineNumbers: true,
              theme: "material",
            }}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Editor;

// import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// function App() {
//   const onChange = React.useCallback((value, viewUpdate) => {
//     console.log("value:", value);
//   }, []);
//   return (
//     <CodeMirror
//       value="console.log('hello world!');"
//       height="200px"
//       extensions={[javascript({ jsx: true })]}
//       onChange={onChange}
//     />
//   );
// }
// export default App;
