import * as React from 'react';
import Editor from 'react-simple-code-editor';
import * as Prism from 'prismjs';
import * as FL2TS from '../babel-plugin-flow-to-typescript/dist/index';

require('prismjs/components/prism-typescript');
require('prismjs/components/prism-flow');

const FL2TSPlugin = FL2TS;
const initialCode = '(num: ?number) => num ? num + 1 : ""';

export class App extends React.Component {
  state = { code: initialCode };

  convert = (codeFrom: string) => {
    try {
      return Babel.transform(codeFrom, { plugins: [FL2TSPlugin] }).code;
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  renderEditor = (value: string,
    onValueChange: (value: string) => void, language: Prism.LanguageDefinition
  ) =>
    <Editor
      value={value}
      onValueChange={onValueChange}
      highlight={(code: string) =>
        Prism.highlight(code, language)
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        overflow: 'scroll',
      }}
    />;

  renderFrom = () => this.renderEditor(this.state.code,
    (code: string) => this.setState({ code }), Prism.languages.flow)

  renderTo = () => this.renderEditor(this.convert(this.state.code),
    null, Prism.languages.typescript)

  render() {
    return (
      <div id="main">
        <div className="editor-box">
          <h3>Flow</h3>
          {this.renderFrom()}
        </div>
        <div className="editor-box">
          <h3>TypeScript</h3>
          {this.renderTo()}
        </div>
      </div>
    );
  }
}
