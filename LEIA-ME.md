# Seg Lab — Cidade da prevenção

Jogo de observação para navegador, com sete setores e 42 riscos. Esta revisão usa mapa ilustrado e interface em tela inteira com HUD flutuante.

A abertura traz “vibe coded by rômulo gonzaga” e permite entrar com ou sem som. Os sons são ambientes sintetizados localmente (não gravações): cidade, mina, oficina, escritório, escola, praça, casa e armazém. Acertos e dicas têm efeitos discretos. O botão de alto-falante do HUD liga/desliga o áudio; ao sair da aba, o áudio é suspenso. Não há reprodução antes da escolha inicial.

## Abrir sem instalação

Abra `dist/index.html` no Chrome, Edge ou Firefox. Não precisa instalar pacotes e não precisa de internet para jogar. A consulta às referências externas exige conexão. Na versão ZIP offline, abra `index.html` na pasta extraída.

O progresso fica apenas no navegador/dispositivo atual. “Reiniciar jogo” apaga a partida após confirmação. Não há cadastro ou envio de resultados para um servidor.

## Funcionamento

Escolha um setor no mapa ilustrado, clique sobre os riscos e leia a ficha flutuante. Os círculos de acerto são verdes. A primeira solicitação de dica oferece uma pista textual. A segunda sinaliza a região de um risco pendente com um círculo amarelo pulsante por 12 segundos, sem dar o acerto automaticamente. Ao encontrar esse risco, as dicas avançam para outro ainda não encontrado. A tecla D também solicita uma dica.

O HUD oferece progresso, descobertas, zoom, retorno ao mapa, ajuda, reinício e botão de tela cheia. Clique em uma descoberta já realizada para reabrir a ficha. Feche a ficha para ver a cena inteira. A partida termina ao encontrar os 42 riscos.

Há exploração por teclado: ative o botão no cenário, use setas, Shift para precisão, Enter para verificar e Escape para sair.

O botão de painel no HUD permite ocultar ou mostrar as descobertas para examinar regiões que ficariam cobertas. A revisão de 29/10/2026 incorpora os pontos da apresentação Mundo SENAI e atualiza as imagens da praça e do armazém. A mineração deixa de contabilizar a proteção auditiva e inclui três situações distintas de interação entre pessoas e máquinas, além do acesso improvisado ao caminhão.

Na escola, proteção ocular, proteções das máquinas e proteção das mãos são tratadas conforme a operação. Não se recomenda o uso geral de luvas junto a partes giratórias com risco de agarramento. Os pontos que dependem da análise da tarefa ou da certificação do EPI trazem essa ressalva na ficha.

## Conteúdo e ajustes

- `dist/data.js`: textos, fontes e regiões de clique. Cada `area` é `[centroX, centroY, raioX, raioY]`, como fração da largura/altura da imagem. São elipses e acompanham o zoom.
- `dist/app.js`: HUD, interações e regras do jogo.
- `dist/style.css` e `dist/game.css`: apresentação e adaptações responsivas.
- `dist/assets/cidade-seglab.png`: mapa criado com a ferramenta integrada de geração de imagens, seguindo o estilo das cenas.
- `dist/audio.js` e `dist/intro.css`: abertura com crédito e sons via Web Audio, sem arquivos externos.
- `dist/assets/`: as ilustrações dos setores; praça e armazém atualizados com as versões da apresentação.

Referências consultadas em outubro de 2026. Normas ocupacionais são diferenciadas de orientações domésticas e de lazer. As descrições são educativas; medidas reais dependem da análise de riscos e das regras aplicáveis. Em equipamentos de proteção, uma imagem não comprova certificação ou adequação técnica.

## Verificação

Execute `node verify.cjs` na pasta do projeto. Os testes incluem os 42 hotspots, conclusão, persistência, reset, zoom e dicas em dois níveis sem acerto automático. Nesta revisão, foram conferidos no navegador o mapa, as duas etapas da dica no armazém, o clique após a marcação, a ficha em HUD, a conclusão do setor e a apresentação em 390 px.

Execute também `node verify-audio.cjs` para conferir ausência de autoplay, entrada silenciosa, troca de ambientes sem acúmulo de loops e limpeza das fontes ao desligar/sair. A abertura, a entrada com som e o controle no HUD foram verificados no navegador sem erros de console.

Para servir a pasta em outro servidor estático, publique o conteúdo de `dist/`. Não há etapa de compilação nem dependências externas.
