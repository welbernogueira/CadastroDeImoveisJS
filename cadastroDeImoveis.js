const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo Imóvel\n2. Lista de imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário: ");
      imovel.quartos = prompt("Quantos quartos possui no imóvel: ");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel:");
      imovel.garagem = prompt("Imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel? \n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;

    case "2":
      if (imoveis.length === 0) {
        alert("Nenhum imóvel cadastrado.");
      } else {
        let listaImoveis = "Lista de Imóveis:\n";
        for (let i = 0; i < imoveis.length; i++) {
          listaImoveis +=
            "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem +
            "\n\n";
        }
        alert(listaImoveis);
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
