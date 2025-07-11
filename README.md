<!DOCTYPE html>
<html lang="pt-BR">

<body>
  <h1>Realtime Spotify Application ✨</h1>

  <img src="/frontend/public/screenshot-for-readme.png" alt="Demo App Screenshot" />

  <section>
    <h2>Sobre o projeto</h2>
    <p>Este é um clone do Spotify desenvolvido como uma aplicação Full Stack moderna, que oferece uma experiência musical completa e interativa.</p>
    <h3>Funcionalidades principais:</h3>
    <ul>
      <li>🎸 Ouça músicas, avance para a próxima ou volte para a anterior</li>
      <li>🔈 Controle de volume com slider</li>
      <li>🎧 Dashboard administrativo para criar álbuns e músicas</li>
      <li>💬 Chat em tempo real integrado ao Spotify</li>
      <li>👨🏼‍💼 Status online/offline dos usuários</li>
      <li>👀 Veja em tempo real o que outros usuários estão ouvindo</li>
      <li>📊 Dados agregados para a página de análises</li>
      <li>🚀 E muito mais...</li>
    </ul>
  </section>

  <section>
    <h2>Configuração</h2>
    <h3>1. Configurar arquivo <code>.env</code> na pasta <strong>backend</strong></h3>
    <pre>
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...

CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
    </pre>
 </section>
  <section>
    <h3>2. Configurar arquivo <code>.env</code> na pasta <strong>frontend</strong></h3>
    <pre>
VITE_CLERK_PUBLISHABLE_KEY=...
    </pre>
  </section>

  <section>
    <h2>Tecnologias utilizadas</h2>
    <ul>
      <li>React.js (Frontend)</li>
      <li>Node.js + Express.js (Backend)</li>
      <li>MongoDB (Banco de dados)</li>
      <li>Cloudinary (Armazenamento de arquivos)</li>
      <li>Socket.io (Comunicação em tempo real)</li>
      <li>Zustand (Gerenciamento de estado)</li>
      <li>Clerk (Autenticação)</li>
    </ul>
  </section>

  <section>
    <h2>Executando o projeto localmente</h2>
    <ol>
      <li>Clone o repositório</li>
      <li>Instale as dependências no backend e frontend</li>
      <li>Configure os arquivos <code>.env</code> conforme acima</li>
      <li>Rode o backend (<code>npm start</code> na pasta backend)</li>
      <li>Rode o frontend (<code>npm run dev</code> na pasta frontend)</li>
      <li>Acesse a aplicação em <code>http://localhost:3000</code> (ou porta configurada)</li>
    </ol>
  </section>

  <section>
    <h2>Demonstração online</h2>
    <p>Confira a aplicação funcionando aqui: <a href="https://spotify-clone-react-b3qt.onrender.com/" target="_blank" rel="noopener noreferrer">https://spotify-clone-react-b3qt.onrender.com/</a></p>
  </section>

  <section>
    <h2>Desafios e aprendizados</h2>
    <p>Durante o desenvolvimento, enfrentei desafios como:</p>
    <ul>
      <li>Gerenciamento e upload de arquivos multimídia</li>
      <li>Comunicação em tempo real via WebSocket com Socket.io</li>
      <li>Organização do estado da aplicação com Zustand</li>
      <li>Desenvolvimento de uma interface responsiva e intuitiva</li>
      <li>Implementação de autenticação segura com Clerk</li>
    </ul>
    <p>Este projeto aprofundou meu conhecimento em tecnologias modernas e boas práticas no desenvolvimento Full Stack.</p>
  </section>

  <hr />
  <footer>
    <p>MIT © Dev Correria</p>
    <p>Contato: <a href="mailto:dev.correria@gmail.com">dev.correria@gmail.com</a> | <a href="https://linkedin.com/in/ruan-tarcisio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
  </footer>
</body>
</html>
