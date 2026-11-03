# Gabriela dos Santos — Portfólio

Portfólio pessoal desenvolvido em React + Vite, com tema claro/escuro e arquitetura de componentes reutilizáveis.

🔗 **Live:** https://gabisinhas.github.io/myPortfolio/

## Sobre

Página única com apresentação profissional, skills, projetos, experiência e contato. Conteúdo centralizado em `src/data/*`, facilitando atualização sem tocar nos componentes.

## Stack

- **React 18** + **Vite 5**
- **Sass** para estilos (tema light/dark via `src/styles/theme.sass`)
- **React Icons**
- **ESLint** para qualidade de código
- Deploy via **GitHub Pages** (`gh-pages`)

## Estrutura

```
src/
├── components/     # Header, Hero, About, Skills, Experience, Projects, Contact, Footer, ThemeToggle...
├── data/           # Conteúdo (hero, skills, projects, experience)
├── pages/Home/     # Composição da página principal
├── styles/         # Variáveis, mixins e tema
└── utils/          # Ícones (tech/conceitos)
```

## Rodando localmente

```bash
npm install
npm run dev
```

Outros comandos:

```bash
npm run build     # build de produção
npm run preview   # preview do build
npm run lint       # lint do projeto
npm run deploy     # build + publish no GitHub Pages
```
