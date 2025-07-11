# 🎯 Target

> Aplicativo mobile desenvolvido com **React Native (Expo)** + **TypeScript** para ajudar você a definir e acompanhar metas de poupança totalmente **offline**.

[![Expo](https://img.shields.io/badge/Expo-53-000.svg?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.79-61DAFB.svg?logo=react&logoColor=white)](https://reactnative.dev/)
[![License: MIT](https://img.shields.io/badge/Licença-MIT-green.svg)](LICENSE)

---

## ✨ Funcionalidades

- **Cadastro de metas** com valor‑alvo e data limite  
- Registro de **transações** de entrada e saída vinculadas a cada meta  
- **Dashboard de progresso** com totais e barra de porcentagem  
- **Offline‑first** usando _expo‑sqlite_  
- Navegação suave via **Expo Router**  
- Setup rápido com **Expo** — roda em **Android**, **iOS** e **Web**  

## 📸 Telas

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/target/refs/heads/main/.github/screens1.png" alt="Target" />
</p>

---

<p align="center">
  <img src="https://raw.githubusercontent.com/Whuanderson/target/refs/heads/main/.github/screens2.png" alt="Target" />
</p>

## 📂 Stack Tecnológica

| Camada            | Tecnologias / Bibliotecas                                                     |
|-------------------|-------------------------------------------------------------------------------|
| Core              | React Native 0.79, Expo SDK 53                                                |
| Linguagem         | TypeScript                                                                    |
| Navegação         | `expo-router`                                                                 |
| Estado / Hooks    | React Hooks + hooks customizados (`useTargetDatabase`, `useTransactionsDatabase`) |
| Persistência      | `expo-sqlite` (SQLite no cliente)                                             |
| UI / Estilo       | Componentes RN, `expo-linear-gradient`, fonte _Inter_                         |
| Build & Deploy    | EAS Build (Android / iOS)                                                     |

## 🚀 Começando

### Pré‑requisitos

* **Node.js ≥ 18**
* **Expo CLI**

```bash
npm install -g expo-cli
```

### Instalação

```bash
git clone https://github.com/Whuanderson/target.git
cd target
npm install         # ou pnpm / yarn
```

### Execução

```bash
# Abre o Expo DevTools
npx expo start

# ou rode diretamente no dispositivo/emulador
npx expo run:android    # Android
npx expo run:ios        # iOS
```

A primeira compilação pode levar alguns minutos enquanto o Expo baixa dependências nativas.

## 🗄️ Estrutura do Projeto

```
target
├─ src
│  ├─ app/              # Páginas (Expo Router)
│  ├─ components/       # Componentes de UI reutilizáveis
│  ├─ database/         # Helpers SQLite & hooks
│  ├─ theme/            # Cores, fontes, espaçamentos
│  └─ utils/            # Funções utilitárias
├─ assets/              # Ícones, imagens, fontes
├─ app.json             # Configuração Expo
└─ ...
```

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE) para mais informações.

---

### Autor

Feito por **Whuanderson Marinho**  
[LinkedIn](https://linkedin.com/in/whuanderson) • [Portfólio](https://whuanderson.com)
