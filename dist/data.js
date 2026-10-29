const nrBase='https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/';
const nr=n=>nrBase+`norma-regulamentadora-no-${n}-nr-${n}`;
const SOURCES={nr1:'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs',nr6:nr(6),nr9:nr(9),nr10:nr(10),nr11:nr(11),nr12:nr(12),nr17:nr(17),nr22:nrBase+'nr-22-atualizada-2026.pdf',nr23:nr(23),nr26:nr(26),lab:"https://educapes.capes.gov.br/bitstream/capes/918577/2/Produto%20educacional%20Braulio%20Rev.%20final.pdf",nr35:nrBase+'nr-35-atualizada-2025-1.pdf',quedas:'https://bvsms.saude.gov.br/bvs/folder/prevencao_quedas_pessoas_idosas.pdf',infantil:'https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/',bike:'https://www.gov.br/cidades/pt-br/central-de-conteudos/publicacoes/mobilidade-urbana/cartilhadociclista.pdf',play:'https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/quais-as-normas-referentes-a-brinquedos-de-playground',gas:'https://www.ufabc.edu.br/images/servidor/sest/sst_-_p01_-_cilindros_de_gases_inertes.pdf'};
const risk=(id,title,area,hint,description,prevention,refs,note='')=>({id,title,area,hint,description,prevention,refs,note});
const SECTORS=[
  {
    "id": "mineracao",
    "name": "Mineração",
    "short": "Mina",
    "tag": "Operação e manutenção",
    "icon": "mountain",
    "color": "#aa7046",
    "map": [
      85,
      22
    ],
    "risks": [
      {
        "id": "capacete",
        "title": "Trabalhador sem capacete",
        "area": [
          0.148,
          0.805,
          0.038,
          0.086
        ],
        "hint": "Observe a proteção da cabeça de quem circula pela mina.",
        "description": "Uma pessoa circula na área operacional sem capacete, exposta a impactos.",
        "prevention": "Use capacete adequado aos riscos da atividade, selecionado na avaliação de riscos.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "oculos",
        "title": "Trabalhador sem óculos de segurança",
        "area": [
          0.854,
          0.875,
          0.057,
          0.095
        ],
        "hint": "Na oficina de mina, examine o rosto de quem trabalha na bancada.",
        "description": "A operação com ferramenta manual pode projetar partículas nos olhos.",
        "prevention": "Utilize proteção ocular adequada à operação e mantenha a peça fixada.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "altura",
        "title": "Trabalho em altura sem conexão de segurança",
        "area": [
          0.755,
          0.484,
          0.045,
          0.067
        ],
        "hint": "O cinturão sozinho não completa a proteção de quem está no telhado.",
        "description": "O trabalhador está perto da borda do telhado com o cinturão sem conexão de segurança.",
        "prevention": "Planeje o serviço e adote proteção contra quedas. Quando houver proteção individual, conecte o sistema adequado à ancoragem.",
        "refs": [
          [
            "NR-35",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-35-atualizada-2025-1.pdf"
          ],
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ]
        ],
        "note": "A NR-35 abrange atividades acima de 2 m do nível inferior com risco de queda. O sistema deve ser definido pela análise de risco."
      },
      {
        "id": "escavadeira",
        "title": "Pessoa na área de operação da escavadeira",
        "area": [
          0.15,
          0.104,
          0.026,
          0.035
        ],
        "hint": "No patamar superior esquerdo, observe a distância da pessoa à escavadeira.",
        "description": "Uma pessoa permanece junto à escavadeira durante a movimentação de material.",
        "prevention": "Separe os trajetos de pedestres e equipamentos, controle o acesso e estabeleça zonas de exclusão. Aproxime-se somente com a operação parada e conforme o procedimento da mina.",
        "refs": [
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "caminhao-traseira",
        "title": "Pessoas próximas ao caminhão em carregamento",
        "area": [
          0.755,
          0.246,
          0.028,
          0.038
        ],
        "hint": "Observe o grupo ao lado do caminhão no patamar superior direito.",
        "description": "Trabalhadores permanecem próximos à região de carregamento do caminhão, sujeitos a impactos e queda de material.",
        "prevention": "Separe os trajetos de pedestres e equipamentos, controle o acesso e estabeleça zonas de exclusão. Aproxime-se somente com a operação parada e conforme o procedimento da mina.",
        "refs": [
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "caminhao-frente",
        "title": "Pessoa na zona de manobra do caminhão",
        "area": [
          0.922,
          0.288,
          0.02,
          0.034
        ],
        "hint": "Procure a pessoa isolada próxima à frente do caminhão no alto da mina.",
        "description": "Um trabalhador está junto ao caminhão e à escavadeira, em uma área com pontos cegos e possibilidade de movimentação.",
        "prevention": "Separe os trajetos de pedestres e equipamentos, controle o acesso e estabeleça zonas de exclusão. Aproxime-se somente com a operação parada e conforme o procedimento da mina.",
        "refs": [
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "acesso-caminhao",
        "title": "Acesso improvisado à frente do caminhão",
        "area": [
          0.688,
          0.699,
          0.025,
          0.038
        ],
        "hint": "Na oficina de mina, confira como a pessoa alcança a frente do caminhão.",
        "description": "O trabalhador usa um apoio improvisado na parte dianteira do veículo para alcançar um ponto elevado.",
        "prevention": "Use o meio de acesso previsto pelo fabricante ou uma plataforma adequada. Imobilize o equipamento e planeje a proteção contra quedas.",
        "refs": [
          [
            "NR-22",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-22-atualizada-2026.pdf"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ],
          [
            "NR-35",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-35-atualizada-2025-1.pdf"
          ]
        ],
        "note": "A aplicação da NR-35 depende de altura superior a 2 m com risco de queda. O acesso seguro é necessário também abaixo dessa altura."
      }
    ]
  },
  {
    "id": "oficina",
    "name": "Oficina mecânica",
    "short": "Oficina",
    "tag": "Manutenção automotiva",
    "icon": "wrench",
    "color": "#cc764d",
    "map": [
      85,
      74
    ],
    "risks": [
      {
        "id": "ferramentas",
        "title": "Ferramentas espalhadas no chão",
        "area": [
          0.585,
          0.684,
          0.078,
          0.085
        ],
        "hint": "Observe o caminho de quem atravessa a oficina.",
        "description": "Ferramentas foram deixadas em uma área de circulação.",
        "prevention": "Guarde as ferramentas e mantenha as passagens livres.",
        "refs": [
          [
            "NR-1 · gestão de riscos",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ],
          [
            "NR-12 · entorno das máquinas",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "oleo",
        "title": "Óleo no piso",
        "area": [
          0.331,
          0.483,
          0.079,
          0.056
        ],
        "hint": "Procure vestígios de vazamento perto do carro em manutenção.",
        "description": "O óleo e as marcas de pegadas indicam uma superfície escorregadia.",
        "prevention": "Isole o trecho, contenha o vazamento e faça a limpeza adequada.",
        "refs": [
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "cilindro",
        "title": "Cilindro sem fixação",
        "area": [
          0.81,
          0.365,
          0.027,
          0.105
        ],
        "hint": "Um recipiente alto precisa estar protegido contra tombamento.",
        "description": "O cilindro de gás está em pé sem corrente, cinta ou suporte de fixação.",
        "prevention": "Fixe o cilindro em suporte apropriado e siga as instruções do fabricante e a ficha de dados de segurança do gás.",
        "refs": [
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ],
          [
            "Procedimento institucional · cilindros",
            "https://www.ufabc.edu.br/images/servidor/sest/sst_-_p01_-_cilindros_de_gases_inertes.pdf"
          ]
        ],
        "note": "A exigência técnica depende do gás e do sistema. Não se aplica genericamente a NR-13 a todo cilindro transportável."
      },
      {
        "id": "cabo",
        "title": "Cabo elétrico danificado",
        "area": [
          0.749,
          0.844,
          0.039,
          0.033
        ],
        "hint": "Confira a integridade do cabo próximo ao equipamento de diagnóstico.",
        "description": "A capa do cabo está rompida, deixando os condutores expostos.",
        "prevention": "Retire o equipamento de uso e encaminhe o reparo a pessoa autorizada.",
        "refs": [
          [
            "NR-10",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-10-nr-10"
          ],
          [
            "NR-12 · quando integrar máquina",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "carrinho",
        "title": "Carrinho na área de passagem",
        "area": [
          0.09,
          0.35,
          0.046,
          0.087
        ],
        "hint": "Perto da entrada da oficina, observe onde o carrinho foi estacionado.",
        "description": "Um carrinho de ferramentas ocupa o trajeto ao lado do veículo e pode provocar colisão ou tropeço.",
        "prevention": "Estacione o carrinho em local definido, fora das rotas de circulação.",
        "refs": [
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "cabelo",
        "title": "Cabelo sem contenção junto ao trabalho",
        "area": [
          0.785,
          0.573,
          0.031,
          0.052
        ],
        "hint": "Observe como o cabelo da profissional do diagnóstico fica próximo ao serviço.",
        "description": "O cabelo comprido não está totalmente contido e pode alcançar componentes móveis quando houver acionamento.",
        "prevention": "Prenda e contenha todo o cabelo, retire adornos e mantenha distância das partes móveis. Faça intervenções com o equipamento em condição segura.",
        "refs": [
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ],
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": "O motor e o equipamento devem permanecer em condição segura durante a intervenção. A imagem não comprova que estejam ligados."
      },
      {
        "id": "quimicos",
        "title": "Produtos químicos armazenados inadequadamente",
        "area": [
          0.918,
          0.176,
          0.07,
          0.12
        ],
        "hint": "Confira as embalagens nas prateleiras sobre a bancada direita.",
        "description": "Produtos químicos ficam junto a peças e materiais diversos, sem segregação de armazenamento evidente. Há risco de derramamento, exposição e mistura incompatível.",
        "prevention": "Mantenha rótulos legíveis e FDS disponível. Armazene conforme a compatibilidade e as condições indicadas pelo fabricante, em local próprio com contenção quando necessária.",
        "refs": [
          [
            "NR-26",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-26-nr-26"
          ],
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": "A ilustração não permite ler todos os rótulos. A compatibilidade e a necessidade de contenção devem ser verificadas na FDS."
      }
    ]
  },
  {
    "id": "corporativo",
    "name": "Prédio corporativo",
    "short": "Corporativo",
    "tag": "Ergonomia e circulação",
    "icon": "building",
    "color": "#7a8ab2",
    "map": [
      49,
      22
    ],
    "risks": [
      {
        "id": "postura",
        "title": "Postura inadequada no computador",
        "area": [
          0.874,
          0.77,
          0.061,
          0.112
        ],
        "hint": "Compare a posição do corpo nas diferentes estações de trabalho.",
        "description": "O trabalhador está curvado e inclinado para a tela, sem usar o apoio da cadeira.",
        "prevention": "Ajuste cadeira, mesa e apoios à pessoa e à atividade. Alterne as posturas durante o trabalho.",
        "refs": [
          [
            "NR-17",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-17-nr-17"
          ]
        ],
        "note": ""
      },
      {
        "id": "monitor",
        "title": "Monitor mal ajustado",
        "area": [
          0.115,
          0.17,
          0.094,
          0.13
        ],
        "hint": "Há uma tela que exige olhar para cima e para o lado.",
        "description": "O monitor está alto e deslocado em relação à posição de trabalho.",
        "prevention": "Ajuste a altura, a distância e a posição da tela para uma visualização confortável.",
        "refs": [
          [
            "NR-17",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-17-nr-17"
          ]
        ],
        "note": ""
      },
      {
        "id": "gavetas",
        "title": "Gavetas abertas na passagem",
        "area": [
          0.174,
          0.63,
          0.057,
          0.103
        ],
        "hint": "Nem todo obstáculo está no chão. Observe o mobiliário.",
        "description": "Duas gavetas abertas avançam sobre a área de circulação.",
        "prevention": "Feche as gavetas após o uso e preserve a passagem livre.",
        "refs": [
          [
            "NR-1 · prevenção de acidentes",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": ""
      },
      {
        "id": "cabos",
        "title": "Cabos espalhados",
        "area": [
          0.568,
          0.229,
          0.073,
          0.058
        ],
        "hint": "Examine a área ao lado da impressora.",
        "description": "Um emaranhado de cabos ocupa o piso e pode provocar tropeços.",
        "prevention": "Organize e encaminhe os cabos fora da circulação.",
        "refs": [
          [
            "NR-1 · gestão de riscos",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "escola",
    "name": "Escola SENAI",
    "short": "Escola SENAI",
    "tag": "Aprendizagem e prevenção",
    "icon": "school",
    "color": "#477cb1",
    "map": [
      20,
      59
    ],
    "risks": [
      {
        "id": "mochila",
        "title": "Mochila abandonada no corredor",
        "area": [
          0.479,
          0.65,
          0.042,
          0.062
        ],
        "hint": "Um objeto pessoal ficou onde as pessoas caminham.",
        "description": "A mochila foi deixada no meio do corredor e pode causar uma queda.",
        "prevention": "Guarde os pertences em local apropriado, fora da passagem.",
        "refs": [
          [
            "NR-1 · referência ocupacional",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": "No contexto do aluno, aplica-se a regra de segurança escolar; a NR-1 é referência para o ambiente de trabalho do estabelecimento."
      },
      {
        "id": "cabo",
        "title": "Cabo atravessando a passagem",
        "area": [
          0.539,
          0.324,
          0.126,
          0.041
        ],
        "hint": "Siga a alimentação do equipamento usado para projeção.",
        "description": "A extensão cruza a rota dos pedestres.",
        "prevention": "Reposicione a alimentação do equipamento e mantenha a circulação livre.",
        "refs": [
          [
            "NR-1 · referência ocupacional",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": "Orientação de segurança escolar. A referência ocupacional não transforma o aluno automaticamente em empregado."
      },
      {
        "id": "saida",
        "title": "Saída de emergência bloqueada",
        "area": [
          0.608,
          0.143,
          0.069,
          0.099
        ],
        "hint": "Uma rota de saída precisa estar livre o tempo todo.",
        "description": "Caixas e um carrinho bloqueiam o acesso à porta de emergência.",
        "prevention": "Retire os obstáculos e mantenha a saída e sua rota permanentemente desobstruídas.",
        "refs": [
          [
            "NR-23",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-23-nr-23"
          ]
        ],
        "note": "Também devem ser observadas as regras estaduais de segurança contra incêndio."
      },
      {
        "id": "epi",
        "title": "Aluno usando ferramenta sem óculos",
        "area": [
          0.703,
          0.495,
          0.026,
          0.043
        ],
        "hint": "Na oficina, compare a proteção dos olhos de quem opera equipamentos.",
        "description": "O aluno opera a furadeira de bancada sem proteção ocular.",
        "prevention": "Use óculos adequados à operação e siga a orientação do instrutor.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": "Referências de segurança da atividade prática; obrigações trabalhistas não incidem automaticamente sobre todo aluno. Não use luvas junto às partes giratórias quando houver risco de agarramento."
      },
      {
        "id": "protecao-furadeira",
        "title": "Furadeira com zona de operação exposta",
        "area": [
          0.748,
          0.577,
          0.035,
          0.035
        ],
        "hint": "Observe o mandril e a broca da furadeira de bancada.",
        "description": "A zona de rotação e projeção de partículas da furadeira aparece sem proteção adequada.",
        "prevention": "Use a máquina com os sistemas de proteção previstos e a peça fixada em dispositivo adequado. Não coloque as mãos na zona de operação.",
        "refs": [
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": "A adequação dos sistemas de segurança depende da apreciação de riscos da máquina."
      },
      {
        "id": "oculos-torno",
        "title": "Operação do torno sem proteção ocular",
        "area": [
          0.793,
          0.354,
          0.025,
          0.041
        ],
        "hint": "Compare os olhos dos operadores nas bancadas da escola.",
        "description": "O operador do torno está exposto à projeção de cavacos e partículas sem proteção ocular evidente.",
        "prevention": "Use proteção ocular adequada e mantenha as proteções da máquina. Não utilize luvas junto a elementos giratórios com risco de agarramento.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ],
          [
            "Manual de segurança de laboratórios",
            "https://educapes.capes.gov.br/bitstream/capes/918577/2/Produto%20educacional%20Braulio%20Rev.%20final.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "protecao-torno",
        "title": "Torno com região de usinagem exposta",
        "area": [
          0.849,
          0.391,
          0.043,
          0.032
        ],
        "hint": "Confira a proteção entre a região de usinagem do torno e o operador.",
        "description": "A região de usinagem está exposta ao contato e à projeção de partículas.",
        "prevention": "Mantenha as proteções especificadas para a máquina e suspenda o uso se estiverem ausentes ou inoperantes.",
        "refs": [
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "maos-bancada",
        "title": "Mãos expostas no manuseio de peças",
        "area": [
          0.938,
          0.831,
          0.032,
          0.033
        ],
        "hint": "Na bancada da frente, observe as mãos junto à peça e à morsa.",
        "description": "O manuseio e a fixação da peça podem expor os dedos a cortes e prensamento. A proteção deve corresponder à tarefa.",
        "prevention": "Mantenha os dedos fora da zona de aperto e use meios adequados para fixar e manusear a peça. Se houver risco de corte no manuseio manual, selecione a luva adequada.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": "Ponto de análise da atividade: a imagem não comprova arestas cortantes. Luvas não substituem a prevenção de prensamento e não devem ser recomendadas junto à rotação com risco de agarramento."
      },
      {
        "id": "oculos-area",
        "title": "Proteção ocular na área de máquinas",
        "area": [
          0.819,
          0.257,
          0.027,
          0.047
        ],
        "hint": "O aluno ao fundo usa óculos. Eles oferecem proteção para a atividade?",
        "description": "Óculos de grau, sozinhos, podem não proteger contra partículas projetadas na área de máquinas.",
        "prevention": "Confirme que a proteção ocular atende ao risco. Quando necessário, utilize óculos de segurança de sobrepor ou outro modelo compatível com os óculos de grau.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ]
        ],
        "note": "A imagem não permite confirmar a certificação dos óculos. Este ponto ensina a verificar a adequação, sem afirmar que todo usuário de óculos está sem EPI."
      },
      {
        "id": "oculos-ferramenta",
        "title": "Ferramenta manual sem proteção ocular",
        "area": [
          0.95,
          0.263,
          0.025,
          0.04
        ],
        "hint": "Na bancada do fundo à direita, confira a proteção do rosto.",
        "description": "O aluno manuseia uma ferramenta com possibilidade de projeção de partículas sem proteção ocular evidente.",
        "prevention": "Use proteção ocular adequada, fixe a peça e siga o procedimento do instrutor. Luvas dependem dos riscos da tarefa e da ausência de risco de agarramento.",
        "refs": [
          [
            "NR-6",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6"
          ],
          [
            "NR-12",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-12-nr-12"
          ]
        ],
        "note": ""
      },
      {
        "id": "carrinho",
        "title": "Carrinho no corredor",
        "area": [
          0.538,
          0.251,
          0.035,
          0.055
        ],
        "hint": "Além da mochila, há um equipamento ocupando a passagem.",
        "description": "O carrinho do projetor ocupa a rota dos pedestres e pode causar colisão.",
        "prevention": "Posicione o projetor e seu carrinho fora da passagem e organize a alimentação elétrica.",
        "refs": [
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": ""
      }
    ]
  },
  {
    "id": "praca",
    "name": "Praça e área de lazer",
    "short": "Praça",
    "tag": "Cuidado nos espaços públicos",
    "icon": "tree",
    "color": "#699b63",
    "map": [
      20,
      27
    ],
    "risks": [
      {
        "id": "lago",
        "title": "Criança desacompanhada junto ao lago",
        "area": [
          0.165,
          0.288,
          0.03,
          0.055
        ],
        "hint": "Observe quem está próximo da água e a distância dos adultos.",
        "description": "A criança está sozinha junto à margem, exposta ao risco de afogamento.",
        "prevention": "Mantenha supervisão próxima e contínua de crianças perto da água.",
        "refs": [
          [
            "Ministério da Saúde · prevenção infantil",
            "https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/"
          ]
        ],
        "note": "Orientação de prevenção para lazer; não é enquadramento em NR trabalhista."
      },
      {
        "id": "conflito-ciclista",
        "title": "Conflito entre bicicleta e automóvel",
        "area": [
          0.284,
          0.555,
          0.055,
          0.09
        ],
        "hint": "Compare a posição da bicicleta, do carro e da faixa vermelha.",
        "description": "O ciclista, sem capacete, circula na faixa dos veículos enquanto um carro ocupa a ciclovia. Há risco de colisão e atropelamento.",
        "prevention": "Respeite a separação das vias: o ciclista deve usar a ciclovia em condições seguras e o condutor deve mantê-la livre. Use capacete bem ajustado para reduzir lesões em quedas.",
        "refs": [
          [
            "Cartilha oficial do ciclista",
            "https://www.gov.br/cidades/pt-br/central-de-conteudos/publicacoes/mobilidade-urbana/cartilhadociclista.pdf"
          ]
        ],
        "note": "O capacete é uma recomendação de proteção. A separação do tráfego e o respeito à ciclovia são os controles centrais da cena."
      },
      {
        "id": "brinquedo",
        "title": "Brinquedo danificado",
        "area": [
          0.71,
          0.46,
          0.045,
          0.062
        ],
        "hint": "Um brinquedo tem uma parte que não deveria estar exposta.",
        "description": "A lateral rompida do escorregador pode causar cortes, aprisionamento e quedas.",
        "prevention": "Interrompa o uso, isole o equipamento e solicite manutenção.",
        "refs": [
          [
            "ABNT NBR 16071-2 e 16071-7 · referência Inmetro",
            "https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/brinquedos/quais-as-normas-referentes-a-brinquedos-de-playground"
          ]
        ],
        "note": "Partes da série NBR 16071 tratam de requisitos de segurança, inspeção e manutenção de playgrounds."
      }
    ]
  },
  {
    "id": "casa",
    "name": "Bairro residencial",
    "short": "Residências",
    "tag": "Prevenção dentro de casa",
    "icon": "home",
    "color": "#c69a54",
    "map": [
      49,
      79
    ],
    "risks": [
      {
        "id": "fio",
        "title": "Fio atravessando a passagem",
        "area": [
          0.278,
          0.565,
          0.084,
          0.094
        ],
        "hint": "Observe o caminho entre os cômodos, próximo ao aspirador.",
        "description": "O fio ocupa a passagem e pode prender o pé de quem circula.",
        "prevention": "Posicione os cabos fora do caminho.",
        "refs": [
          [
            "Ministério da Saúde · prevenção de quedas",
            "https://bvsms.saude.gov.br/bvs/folder/prevencao_quedas_pessoas_idosas.pdf"
          ]
        ],
        "note": "Orientação doméstica de prevenção; as NRs não são aplicadas automaticamente ao uso residencial."
      },
      {
        "id": "tapete",
        "title": "Tapete levantado",
        "area": [
          0.804,
          0.886,
          0.046,
          0.037
        ],
        "hint": "Observe as bordas dos tapetes da sala.",
        "description": "A ponta dobrada do tapete pode provocar um tropeço.",
        "prevention": "Corrija a dobra e fixe o tapete, ou retire-o da circulação.",
        "refs": [
          [
            "Ministério da Saúde · prevenção de quedas",
            "https://bvsms.saude.gov.br/bvs/folder/prevencao_quedas_pessoas_idosas.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "piso",
        "title": "Piso molhado",
        "area": [
          0.52,
          0.213,
          0.056,
          0.055
        ],
        "hint": "Procure sinais de umidade na área de serviço.",
        "description": "A água sobre os ladrilhos favorece escorregões.",
        "prevention": "Seque o piso e impeça a circulação até o local estar seguro.",
        "refs": [
          [
            "Ministério da Saúde · prevenção de quedas",
            "https://bvsms.saude.gov.br/bvs/folder/prevencao_quedas_pessoas_idosas.pdf"
          ]
        ],
        "note": ""
      },
      {
        "id": "panela",
        "title": "Cabo da panela voltado para fora",
        "area": [
          0.837,
          0.284,
          0.032,
          0.027
        ],
        "hint": "Confira para onde aponta o cabo da panela.",
        "description": "O cabo projetado para fora pode ser esbarrado ou puxado.",
        "prevention": "Vire os cabos para dentro e prefira as bocas traseiras do fogão.",
        "refs": [
          [
            "Ministério da Saúde · prevenção de queimaduras",
            "https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/"
          ]
        ],
        "note": ""
      },
      {
        "id": "crianca",
        "title": "Criança próxima ao fogão",
        "area": [
          0.8,
          0.323,
          0.031,
          0.07
        ],
        "hint": "Observe a distância entre a criança e as superfícies quentes.",
        "description": "A criança pode alcançar a panela ou tocar partes quentes do fogão.",
        "prevention": "Mantenha crianças afastadas da área de preparo dos alimentos.",
        "refs": [
          [
            "Ministério da Saúde · prevenção infantil",
            "https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/"
          ]
        ],
        "note": ""
      },
      {
        "id": "caneca",
        "title": "Caneca na quina da mesa",
        "area": [
          0.611,
          0.356,
          0.021,
          0.025
        ],
        "hint": "Além do fogão, confira o que está apoiado na borda da mesa.",
        "description": "A caneca junto à quina pode ser esbarrada e cair, causando derramamento e, se o conteúdo estiver quente, queimadura.",
        "prevention": "Coloque a caneca em uma superfície estável, afastada da borda e do alcance de crianças.",
        "refs": [
          [
            "Ministério da Saúde · prevenção infantil",
            "https://linhasdecuidado.saude.gov.br/portal/puericultura/unidade-de-atencao-primaria/crianca/"
          ]
        ],
        "note": "Orientação doméstica de prevenção. A imagem não permite determinar a temperatura do conteúdo."
      }
    ]
  },
  {
    "id": "armazem",
    "name": "Armazém",
    "short": "Armazém",
    "tag": "Movimentação de cargas",
    "icon": "warehouse",
    "color": "#b88754",
    "map": [
      72,
      50
    ],
    "risks": [
      {
        "id": "icamento",
        "title": "Içamento com amarração improvisada",
        "area": [
          0.659,
          0.425,
          0.045,
          0.046
        ],
        "hint": "Inspecione a ligação entre o gancho e a carga suspensa.",
        "description": "A carga é sustentada por cordas desgastadas e nós improvisados.",
        "prevention": "Use acessórios de içamento adequados, inspecionados e compatíveis com a carga e a operação.",
        "refs": [
          [
            "NR-11",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11"
          ]
        ],
        "note": "O problema é a improvisação e a integridade da amarração. A norma não proíbe genericamente o uso de toda corda."
      },
      {
        "id": "carrinho",
        "title": "Carrinho junto à circulação da bancada",
        "area": [
          0.821,
          0.943,
          0.043,
          0.049
        ],
        "hint": "Observe a área próxima à última pessoa da bancada.",
        "description": "Um carrinho foi deixado junto à bancada e invade o espaço de circulação.",
        "prevention": "Guarde carrinhos e materiais em áreas definidas e preserve o espaço necessário para trabalhar e circular.",
        "refs": [
          [
            "NR-11",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11"
          ],
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": ""
      },
      {
        "id": "empilhadeira",
        "title": "Pedestres na zona da empilhadeira",
        "area": [
          0.538,
          0.319,
          0.075,
          0.092
        ],
        "hint": "Observe as pessoas junto às prateleiras e a proximidade da empilhadeira.",
        "description": "Pedestres compartilham a área de movimentação da empilhadeira sem uma barreira física entre os trajetos.",
        "prevention": "Separe as rotas de pedestres e veículos, defina travessias controladas e restrinja o acesso à zona de manobra. A sinalização complementa a segregação.",
        "refs": [
          [
            "NR-11",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11"
          ],
          [
            "NR-1",
            "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs"
          ]
        ],
        "note": ""
      },
      {
        "id": "prateleira",
        "title": "Pessoa sobre a estrutura de armazenamento",
        "area": [
          0.474,
          0.114,
          0.03,
          0.063
        ],
        "hint": "Procure como o material está sendo alcançado na parte alta das estantes.",
        "description": "O trabalhador se apoia na estrutura da estante para alcançar materiais, sujeito a queda e instabilidade.",
        "prevention": "Use equipamento de acesso adequado e estável. Não suba nas longarinas ou nas prateleiras. Planeje proteção contra quedas conforme a altura e a atividade.",
        "refs": [
          [
            "NR-11",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11"
          ],
          [
            "NR-35",
            "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-35-atualizada-2025-1.pdf"
          ]
        ],
        "note": "A NR-35 se aplica quando a atividade ocorre acima de 2 m do nível inferior com risco de queda."
      }
    ]
  }
];
