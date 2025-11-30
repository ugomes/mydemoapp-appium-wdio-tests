# MyDemo145 - Automação de Testes Mobile com WebdriverIO e Appium

## 📋 Descrição do Projeto

Este projeto implementa testes automatizados para a aplicação **MyDemoApp** (Android) utilizando **WebdriverIO** e **Appium**. O projeto segue o padrão de arquitetura **Page Object Model (POM)** para melhor manutenibilidade e escalabilidade.

### Objetivo Principal
Automatizar o fluxo de compra de uma mochila na aplicação MyDemoApp, validando cada etapa do processo com testes estruturados e relatórios detalhados.

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

```
mydemoapp-test/
├── src/
│   ├── pages/
│   │   ├── home.page.js
│   │   ├── product.page.js
│   │   └── cart.page.js
│   ├── tests/
│   │   └── mydemoapp.test.js
│   └── utils/
│       └── helpers.js
├── wdio.conf.js
├── package.json
└── README.md
```

### Padrões Utilizados

- **Page Object Model (POM)**: Separação clara entre lógica de teste e elementos da página.
- **BDD com Cucumber**: Para escrita de testes em linguagem natural.
- **WebdriverIO v8**: Framework de automação mobile moderno.
- **Appium**: Ferramenta para automação de apps mobile.

---

## 🚀 Como Executar os Testes

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Android Studio com AVD configurado
- Appium Server rodando
- Aplicativo MyDemoApp instalado no dispositivo/AVD

### Passos para Execução

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o Appium Server:
   ```bash
   appium
   ```

3. Execute os testes:
   ```bash
   npm test
   ```

---

## 🧪 Exemplo de Teste

```javascript
describe('Fluxo de Compra - MyDemoApp', () => {
  it('Deve adicionar um produto ao carrinho e finalizar a compra', async () => {
    await HomePage.open();
    await HomePage.clickOnProduct('Backpack');
    
    await ProductPage.addToCart();
    await ProductPage.goToCart();
    
    await CartPage.validateProductInCart('Backpack');
    await CartPage.proceedToCheckout();
    
    // Validações finais...
  });
});
```

---

## 🛠️ Configurações Adicionais

### wdio.conf.js

Configurações principais do WebdriverIO para execução em dispositivos Android:

```javascript
exports.config = {
  runner: 'local',
  specs: ['./src/tests/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:app': path.resolve(__dirname, './apps/MyDemoApp.apk'),
    'appium:automationName': 'UiAutomator2'
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
```

---


