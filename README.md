
# IGNITE TEAMS

## APREENDIZAGEM

- [x] Mapeamento de caminhos PathMapping, técnica utilizando a [biblioteca babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver). 
- [x] Styled-Components:

  - Na instalação da bibliotéca não foi possível fazer a instalação usando o procesdimento normal devido a bibliotéca esta incompatível com o react native. Nesse caso eu usei um parâmetro para concluir a instalação.

  ```bash
  npm install styled-components --legacy-peer-deps
  ```

  - Para usar a bibliotéca foi nescessário fazer a instalação do plugin para [extenção vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

  - Foi realizada a instalação da fonte Roboto utilizando o comando o expo, porém como minha versão do styled componente está imcompatível com a versão do react native eu tive que fazer uma adaptação. Desinstalei o styled-components e fiz a instalação, somente depois eu fiz a instalação novamente do styled-components.

  ```bash
  npx expo install expo-font @expo-google-fonts/roboto
  ```
  
- [x] [phosphor-react-native](https://github.com/duongdev/phosphor-react-native)

  - Biblioteca para fazer a utilização de icones da biblioteca Phosphor Icons.

  - Comando para instalação:
  
  ```bash
  npm install --save phosphor-react-native
  ```

- [x] [react-native-svg](https://docs.expo.dev/versions/latest/sdk/svg/)

  - Biblioteca para que o aplicativo consiga renderizar SVG na tela.

  ```bash
  npx expo install react-native-svg
  ```






  