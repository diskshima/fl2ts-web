# Flow to TypeScript Converter

Flow to TypeScript converter that works inside the browser.

The code is hosted on github.io: https://diskshima.github.io/fl2ts-web/

This work uses the code in [Kiikurage/babel-plugin-flow-to-typescript](https://github.com/Kiikurage/babel-plugin-flow-to-typescript/) to convert Flow to TypeScript.

## Development

1. Initialize the submodule
    ```
    git submodule init
    ```
1. Build submodule.
    ```
    cd src/babel-plugin-flow-to-typescript
    npm install
    ```
1. Open HTML file.
    ```
    open docs/index.html
    ```

## Built With

* [TypeScript](https://www.typescriptlang.org/) - Some things are easier with types.
* [babel-standalone](https://babeljs.io/docs/en/next/babel-standalone.html) - For using Babel inside the browser.
* [webpack](https://webpack.js.org/) - For building and bundling our assets.

## Authors

* **Daisuke Shimamoto** - *Initial work* - [diskshima](https://github.com/diskshima)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
