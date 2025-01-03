
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

- [x] Tipos de navegação em telas

  - [Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator)

    Navegação em Pilha, cada tela nova fica por cima da antiga. Quando precisar voltar para a tela anteior é nescessário remover a tela atual e vai aparece a tela "abaixo".

  - [Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator)

    Utiliza icones na parte inferior para fazer a negação entre as telas que já estão carregadas.

  - [Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator)

    Utiliza uma barra lateral para fazer a navegação dos aplicativos.

- [x] [React Navitagor](https://reactnavigation.org/)

  ```bash
  npm install @react-navigation/native
  ```

  Devido o bug do styled-components foi nescessário remover o pacote e adcionar depois de fazer a instalação das dependências abaixo:

  ```bash
  npm remove styled-components
  npx expo install react-native-screens react-native-safe-area-context
  npm install styled-components --legacy-peer-deps
  ```

  No projeto vai utilizar o stack navigator então vai ser usado o código de instalação abaixo:

  ```bash
  npm install @react-navigation/native-stack --legacy-peer-deps
  ```


  
