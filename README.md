# Substituição EMFAL

Quadro de substituição de professores da Escola Municipal Francisca Alves (SMED-BH / GERED-Pampulha).

Escolha o turno, o dia e marque quem faltou. O aplicativo monta o quadro horário por horário e gera a mensagem pronta para o grupo de WhatsApp.

## Critérios aplicados

- Só é indicado como substituto quem está marcado como **subst** naquele horário exato.
- Professor em **Acepat o dia inteiro** não é usado para nada.
- Professor com **um único Acepat no dia** aparece como segunda opção, com o módulo remanejado dentro do próprio dia.
- Sem ninguém de plantão, a indicação é a **coordenação**.
- O mesmo professor nunca é escalado para duas turmas no mesmo horário.

## Atualizar os horários

Os horários ficam no início do arquivo `app.js`, nas constantes `MANHA` (5 horários por dia) e `TARDE` (4 horários por dia).
Cada professor tem uma linha com os cinco dias separados por `|`, da segunda à sexta.

## Instalar no celular

Abra o endereço do aplicativo no navegador e use **Adicionar à tela de início**. Depois disso ele funciona sem internet.
