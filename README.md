# Seg Lab — Cidade da prevenção

Jogo educativo de identificação de riscos, executado inteiramente no navegador.

- Sete cenários e 25 riscos clicáveis.
- Mapa ilustrado com HUD e opção de tela cheia.
- Fichas de prevenção com referências oficiais.
- Dicas em dois níveis: pista textual e marcação visual temporária.
- Progresso salvo no navegador e reinício para um novo jogador.
- Abertura com o crédito “vibe coded by rômulo gonzaga”.
- Sons ambientes sintetizados por setor, efeitos de acerto/dica e controle de som no HUD.
- Sem dependências, cadastro ou servidor de aplicação.

## Jogar localmente

Abra **dist/index.html** no navegador. Os links das referências exigem internet; o jogo funciona offline.

## Verificar

Com Node.js instalado, execute:

```sh
node verify.cjs
node verify-audio.cjs
```

## Arquivos

- `dist/index.html`: entrada do jogo.
- `dist/data.js`: cenários, regiões de clique e conteúdo educativo.
- `dist/app.js`: interface e regras.
- `dist/style.css` e `dist/game.css`: estilos e HUD responsivo.
- `dist/audio.js` e `dist/intro.css`: introdução e áudio local, iniciado apenas por escolha do jogador.
- `dist/assets/`: mapa e ilustrações.
- `LEIA-ME.md`: instruções detalhadas e notas sobre referências.

## Publicação

O jogo é publicado no GitHub Pages em https://romulogonzaga.github.io/seg-lab/.

O workflow `.github/workflows/pages.yml` publica o conteúdo de `dist/` a cada atualização da branch `main`. Também pode ser iniciado manualmente na aba Actions. Não há etapa de compilação.
