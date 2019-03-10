import * as React from 'react';
import Editor from 'react-simple-code-editor';
import * as Prism from 'prismjs';
import * as FL2TS from '../babel-plugin-flow-to-typescript/index';

const initialCode = '(num: ?number) => num ? num + 1 : ""';

export class App extends React.Component {
  state = { code: initialCode };

  convert = (codeFrom: string) => {
    try {
      return Babel.transform(codeFrom, {
        plugins: [FL2TS()],
        presets: ['es2015'],
      }).code;
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  renderFrom = () =>
    <Editor
      value={this.state.code}
      onValueChange={(code: string) => this.setState({ code })}
      highlight={(code: string) =>
        Prism.highlight(code, Prism.languages.javascript)
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        // fontSize: 12,
      }}
    />;

  renderTo = () =>
    <Editor
      value={this.convert(this.state.code)}
      onValueChange={null}
      highlight={(code: string) =>
        Prism.highlight(code, Prism.languages.javascript)
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        // fontSize: 12,
      }}
    />;

  render() {
    return (
      <div className="app">
        {this.renderFrom()}
        {this.renderTo()}
      </div>
    );
  }
}
