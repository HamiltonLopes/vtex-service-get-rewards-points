
<h1 align="center">
    Vtex SERVICE Get Rewards Points
</h1>

## 💻 Sobre o serviço

Projeto desenvolvido como challenge no HiringCoders Gama Academy/VTEX.

Este serviço acompanha o login do usuário e escreve na api da vtex @vtex.session o número de pontos do mesmo,
junto da informação que verifica se tem alguém logado. Para isso este serviço funciona como um middleware na session
e faz um get na api [Rewards API](https://github.com/HamiltonLopes/rewards-API-travellog-group1) que está hospedada na
[aws](https://rewardsapi.tk/rewards-api/v1) com Ec2 e Route53, utilizando o id do usuário que realizou a sessão.

Este serviço também disponibiliza um endpoint (/\_v/pvt/points/:clientId) para consultar os pontos do usuário informando um clientID.


---

## 🛠 Tecnologias/Ferramentas

As seguintes ferramentas foram usadas na construção do projeto:

- VtexIO
- TypeScript
- NodeJS
- ReactJS

---

## 🚀 Melhorias

As seguintes melhorias precisam ser feitas para aprimoramento do projeto

Principais Pontos de Melhoria:
 - Alterar politica de cache, pois o endpoint de consulta está com o cache padrão utilizado no vtexIO
 - Criar chamada no checkou para escrita no session, atualizando os pontos do usuário

---

## 🦸 Autor

Desenvolvido por Hamilton Lopes ✌ [Entre em contato!](https://www.linkedin.com/in/hamilton-lopes/)
