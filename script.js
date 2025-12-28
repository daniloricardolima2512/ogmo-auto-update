import axios from "axios";
import cheerio from "cheerio";

const URL = "https://www.ogmoparanagua.org.br/ogmopr/MenuTPA/MenuTPA.php";

async function executar() {
  try {
    const response = await axios.get(URL, {
      timeout: 20000
    });

    const $ = cheerio.load(response.data);

    // TESTE INICIAL: pegar título da página
    const titulo = $("title").text();

    console.log("Página acessada com sucesso");
    console.log("Título:", titulo);

  } catch (erro) {
    console.error("Erro ao acessar o site:", erro.message);
    process.exit(1);
  }
}

executar();
