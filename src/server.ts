import express from "express";
import helmet from "helmet";
import router from "./routes";



const server = express();

server.use(helmet());
server.use(express.urlencoded({ extended: true }));

server.use("/", router);

const PORT = process.env.PORT || 3000;
const serverInstance = server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});


export default serverInstance;


process.on("SIGTERM", () => {
  serverInstance.close(() => {
    console.log("Servidor encerrado.");
  });
});
