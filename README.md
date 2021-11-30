# Telbby Frontend

<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/22045163/141472494-00de9d64-1f05-4b1c-bb29-3f688368136c.png" alt="logo" width="150px" />
</p>

This is **FrontEnd Repository** of **Telbby**, a service that can be introduced into my project to exchange feedback with various users.

> [Go to BackEnd Repository](https://github.com/telbby/telbby-backend)

## Technology

- TypeScript
- React
- Recoil
- Emotion

## Project Structure

```bash
config
└── webpack
public
├── favicon.png
├── index.html
└── robots.txt
src
├── @types              # type definition files
├── apis                # api request modules
├── assets              # static files (fonts, images, ...)
├── atoms               # recoil states
├── components          # react components
├── constants           # constants
├── hooks               # react hooks
├── pages               # react page components
├── styles              # global styles
├── types               # types
├── utils               # utility functions
├── App.tsx
└── index.tsx
```

## Getting Started

### Prerequisites

- Intstall [Node.js](https://nodejs.org/).
- Refer to the `.mock.env` file and create the `.env` file in the root directory.

### Run

```bash
yarn install
yarn dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
