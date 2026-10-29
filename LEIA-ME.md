# Seg Lab — Cidade da prevenção

Jogo de observação para navegador, com sete setores e 42 riscos. Esta revisão usa mapa ilustrado e interface em tela inteira com HUD flutuante.

A abertura traz “vibe coded by rômulo gonzaga” e permite entrar com ou sem som. Cada ambiente usa uma gravação local: rua com pássaros no mapa, caminhão e escavadeira na mineração, chave de catraca na oficina, teclado no escritório, escrita no quadro na escola, pássaros na praça, pratos e talheres em casa e aviso de marcha a ré no armazém. As gravações são de Joseph SARDIN / BigSoundBank, sob CC0, com fontes em `dist/assets/audio/CREDITOS.md`. Os efeitos breves de acerto e dica continuam sintetizados. O botão de alto-falante liga/desliga o áudio; ao sair da aba, a reprodução pausa. A entrada sem som não carrega as gravações.

## Abrir sem instalação

Abra `dist/index.html` no Chrome, Edge ou Firefox. Não precisa instalar pacotes e não precisa de internet para jogar. A consulta às referências externas exige conexão. Na versão ZIP offline, abra `index.html` na pasta extraída.

O progresso fica apenas no navegador/dispositivo atual. “Reiniciar jogo” apaga a partida após confirmação. Não há cadastro ou envio de resultados para um servidor.

## Funcionamento

Escolha um setor no mapa ilustrado, clique sobre os riscos e leia a ficha flutuante. Os círculos de acerto são verdes. A primeira solicitação de dica oferece uma pista textual. A segunda sinaliza a região de um risco pendente com um círculo amarelo pulsante por 12 segundos, sem dar o acerto automaticamente. Ao encontrar esse risco, as dicas avançam para outro ainda não encontrado. A tecla D também solicita uma dica.

Ao pedir uma dica, a ficha do último acerto fecha para evitar confusão. A seleção e a marcação visual excluem os riscos já encontrados. Quando o setor está completo, nenhuma dica ou sinalização fica ativa.

O HUD oferece progresso, descobertas, zoom, retorno ao mapa, ajuda, reinício e botão de tela cheia. Clique em uma descoberta já realizada para reabrir a ficha. Feche a ficha para ver a cena inteira. A partida termina ao encontrar os 42 riscos.

Há exploração por teclado: ative o botão no cenário, use setas, Shift para precisão, Enter para verificar e Escape para sair.

O botão de painel no HUD permite ocultar ou mostrar as descobertas para examinar regiões que ficariam cobertas. A revisão de 29/10/2026 incorpora os pontos da apresentação Mundo SENAI e atualiza as imagens da praça e do armazém. A mineração deixa de contabilizar a proteção auditiva e inclui três situações distintas de interação entre pessoas e máquinas, além do acesso improvisado ao caminhão.

Na escola, proteção ocular, proteções das máquinas e proteção das mãos são tratadas conforme a operação. Não se recomenda o uso geral de luvas junto a partes giratórias com risco de agarramento. Os pontos que dependem da análise da tarefa ou da certificação do EPI trazem essa ressalva na ficha.

## Conteúdo e ajustes

- `dist/data.js`: textos, fontes e regiões de clique. Cada `area` é `[centroX, centroY, raioX, raioY]`, como fração da largura/altura da imagem. São elipses e acompanham o zoom.
- `dist/app.js`: HUD, interações e regras do jogo.
- `dist/style.css` e `dist/game.css`: apresentação e adaptações responsivas.
- `dist/assets/cidade-seglab.png`: mapa criado com a ferramenta integrada de geração de imagens, seguindo o estilo das cenas.
- `dist/audio.js` e `dist/intro.css`: abertura com crédito, gravações locais e efeitos breves via Web Audio.
- `dist/assets/audio/`: gravações MP3 e créditos. Os arquivos acompanham a versão offline.
- `dist/assets/`: as ilustrações dos setores; praça e armazém atualizados com as versões da apresentação.

Referências consultadas em outubro de 2026. Normas ocupacionais são diferenciadas de orientações domésticas e de lazer. As descrições são educativas; medidas reais dependem da análise de riscos e das regras aplicáveis. Em equipamentos de proteção, uma imagem não comprova certificação ou adequação técnica.

## Verificação

Execute `node verify.cjs` na pasta do projeto. Os testes incluem os 42 hotspots, conclusão, persistência, reset, zoom e dicas em dois níveis sem acerto automático. Nesta revisão, foram conferidos no navegador o mapa, as duas etapas da dica no armazém, o clique após a marcação, a ficha em HUD, a conclusão do setor e a apresentação em 390 px.

Execute também `node verify-audio.cjs` para conferir ausência de autoplay, entrada silenciosa, oito arquivos locais, troca sem sobreposição, pausa em segundo plano e desligamento durante o carregamento. Os testes também verificam a recuperação após falha de reprodução.

Para servir a pasta em outro servidor estático, publique o conteúdo de `dist/`. Não há etapa de compilação nem dependências externas.
