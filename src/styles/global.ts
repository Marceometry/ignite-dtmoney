import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --foreground: #2E2E31;
    --title: #CAD3F3;
    --text: #B9BCC6;
    --text-secondary: #9E9E9F;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #FF5B77;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
  }

  body {
    height: 100vh;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: grid;
    place-items: center
  }

  .react-modal-content {
    width: 95%;
    max-width: 576px;
    padding: 3rem;
    background: var(--background);
    position: relative;
    border-radius: 5px;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    padding: 0.25rem;
    font-size: 0;
    transition: filter 0.2s;

    &:focus {
      outline: 1px solid var(--red);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--foreground);
  }
`
