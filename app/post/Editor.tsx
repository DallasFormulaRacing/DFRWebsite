// import React, { Component } from "react";
// import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";

// import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
// import { Context } from "@ckeditor/ckeditor5-core";
// import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
// import { Essentials } from "@ckeditor/ckeditor5-essentials";
// import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

// class Editor extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h2>Using CKEditor 5 build in React</h2>
//         <CKEditor
//           editor={ClassicEditor}
//           data="<p>Hello from CKEditor 5!</p>"
//           onReady={(editor) => {
//             // You can store the "editor" and use when it is needed.
//             console.log("Editor is ready to use!", editor);
//           }}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             console.log({ event, editor, data });
//           }}
//           onBlur={(event, editor) => {
//             console.log("Blur.", editor);
//           }}
//           onFocus={(event, editor) => {
//             console.log("Focus.", editor);
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default Editor;
