import * as React from 'react';
import Editor from 'react-simple-code-editor';
import * as Prism from 'prismjs';

const initialCode = '(num) => num + 1';

export class App extends React.Component {
  state = { code: initialCode };

  render() {
    return (
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
      />);
  }
}
