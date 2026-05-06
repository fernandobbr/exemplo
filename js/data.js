/* ============================================================
   FM NOTÍCIAS — data.js
   Banco de artigos reduzido para apresentação (10 itens).
   ============================================================ */

const FM_ARTICLES = [
  {
    id: 1,
    title: "Novo viaduto na Avenida Central é inaugurado e promete acabar com o gargalo do trânsito urbano",
    subtitle: "Obra de R$ 28 milhões, esperada há cinco anos, foi entregue nesta quarta-feira com capacidade para 1.800 veículos por hora em cada sentido.",
    category: "cidade", categoryLabel: "Infraestrutura", categoryPage: "cidade.html",
    author: "Carlos Henrique", authorRole: "Repórter de Cidade",
    authorAvatar: "author1/80/80", authorBio: "Jornalista com 12 anos de experiência em cobertura municipal. Especializado em urbanismo e mobilidade urbana.",
    date: "2026-05-06T09:45:00", readingTime: 5, views: 4832,
    imageSeed: "img/viaduto_central.webp",
    imageCaption: "Cerimônia de inauguração reuniu autoridades e moradores. Foto: Assessoria de Imprensa / Prefeitura Municipal",
    excerpt: "Com 320 metros de extensão, o viaduto elimina semáforo que causava filas de até 4 km nos horários de pico.",
    body: [
      {type:"p", text:"A cidade ganhou nesta quarta-feira uma obra aguardada há mais de cinco anos: o viaduto da Avenida Central foi oficialmente inaugurado pelo prefeito em cerimônia que reuniu autoridades municipais, estaduais e representantes dos bairros mais afetados pelo congestionamento histórico no cruzamento."},
      {type:"p", text:"Com 320 metros de extensão e capacidade para 1.800 veículos por hora em cada sentido, a estrutura vai eliminar o semáforo que durante anos causou filas de até 4 quilômetros nos horários de pico. A obra foi financiada por emenda parlamentar federal de R$ 28 milhões, com execução em 24 meses dentro do cronograma."},
      {type:"quote", text:"Este viaduto representa a transformação que os moradores esperavam. O percurso que levava 40 minutos vai levar menos de 10.", author:"Prefeito Municipal"},
      {type:"h2", text:"Impacto no trânsito e na mobilidade"},
      {type:"p", text:"Segundo estudo da Secretaria de Mobilidade, a inauguração deve reduzir em 62% o tempo de deslocamento no corredor central no horário de pico. A via, que operava a 8 km/h, deve atingir 35 km/h após a abertura do novo fluxo. O projeto também inclui ciclovias elevadas nos dois lados."},
      {type:"img", seed:"cid-1/900/280", caption:"Vista aérea do viaduto concluído. Foto: Secretaria de Obras / Divulgação"},
      {type:"p", text:"A integração com a ciclovia da Avenida Brasil cria um corredor cicloviário contínuo de 6,2 km, beneficiando cerca de 3.200 ciclistas cadastrados no sistema de bike compartilhada. A obra gerou 180 empregos diretos durante a execução."}
    ],
    tags: ["Infraestrutura","Trânsito","Obras","Viaduto","Mobilidade","Prefeitura"],
    featured: true
  },
  {
    id: 2,
    title: "Prefeitura assina convênio de R$ 4,2 mi para construção de UPA no bairro São Paulo",
    subtitle: "Unidade de Pronto Atendimento vai atender cerca de 80 mil moradores da região sul da cidade e reduzir fila na UPA Central.",
    category: "cidade", categoryLabel: "Saúde", categoryPage: "cidade.html",
    author: "Mariana Costa", authorRole: "Repórter de Saúde",
    authorAvatar: "author2/80/80", authorBio: "Jornalista especializada em saúde pública e políticas sociais. Cobre a área de saúde para a FM Notícias desde 2021.",
    date: "2026-05-06T08:30:00", readingTime: 4, views: 2910,
    imageSeed: "img/upa.webp",
    imageCaption: "Secretário de Saúde e prefeito assinam convênio. Foto: Prefeitura Municipal",
    excerpt: "Nova UPA será construída em área de 2.800 m² cedida pela Cohab e deve ser inaugurada em 18 meses.",
    body: [
      {type:"p", text:"O prefeito assinou nesta manhã o convênio de R$ 4,2 milhões com o Ministério da Saúde para a construção da nova Unidade de Pronto Atendimento no bairro São Paulo. A UPA vai atender os moradores da região sul, que hoje precisam se deslocar até a UPA Central para consultas de urgência."},
      {type:"quote", text:"Com essa unidade vamos desafogar o atendimento de urgência e levar saúde de qualidade para quem mais precisa, perto de casa.", author:"Secretário Municipal de Saúde"},
      {type:"h2", text:"Estrutura e capacidade de atendimento"},
      {type:"p", text:"A nova UPA terá área construída de 2.800 m², com 8 consultórios, 20 leitos de observação, sala de emergência e serviço de raio-X e laboratório 24 horas. A previsão é de 350 atendimentos diários, aliviando a demanda na UPA Central, que opera hoje a 140% da capacidade."},
      {type:"p", text:"O terreno de 4.500 m² foi cedido pela Cohab após aprovação na Câmara Municipal. A licitação para escolha da construtora será aberta em 30 dias, com prazo de 18 meses para entrega da obra."}
    ],
    tags: ["Saúde","UPA","Prefeitura","Obras","SUS"],
    featured: true
  },
  {
    id: 3,
    title: "Polícia Civil deflagra operação e prende três suspeitos de tráfico de drogas no centro",
    subtitle: "Operação Fronteira investigou grupo por três meses e apreendeu 12 kg de cocaína e R$ 28 mil em espécie.",
    category: "cidade", categoryLabel: "Segurança", categoryPage: "cidade.html",
    author: "Roberto Souza", authorRole: "Repórter de Polícia",
    authorAvatar: "author3/80/80", authorBio: "Repórter policial com 8 anos de cobertura em segurança pública no Oeste do Paraná.",
    date: "2026-05-06T07:15:00", readingTime: 3, views: 5240,
    imageSeed: "img/policia.webp",
    imageCaption: "Policiais durante a operação. Foto: Polícia Civil / Divulgação",
    excerpt: "Suspeitos serão indiciados por tráfico qualificado e associação criminosa. Investigação seguiu rota entre Foz do Iguaçu e Cascavel.",
    body: [
      {type:"p", text:"A Polícia Civil deflagrou na madrugada desta quarta-feira a Operação Fronteira, que resultou na prisão de três suspeitos de tráfico de drogas atuando no centro da cidade. A operação foi resultado de três meses de investigação que mapeou a rota de distribuição entre Foz do Iguaçu e Cascavel."},
      {type:"p", text:"Durante a ação, os policiais apreenderam 12 quilos de cocaína, R$ 28 mil em espécie, dois veículos e equipamentos de comunicação usados para monitorar as atividades do grupo."},
      {type:"quote", text:"A operação desarticulou um dos principais pontos de distribuição da cidade. As investigações continuam para identificar os fornecedores.", author:"Delegado da Polícia Civil"},
      {type:"h2", text:"Indiciamentos e próximos passos"},
      {type:"p", text:"Os três presos serão indiciados por tráfico qualificado e associação criminosa, com penas que podem chegar a 20 anos de reclusão. A Polícia Civil informou que a investigação continua e que novas prisões são esperadas nas próximas semanas."}
    ],
    tags: ["Segurança","Polícia","Tráfico","Operação"],
    featured: true
  },
  {
    id: 4,
    title: "Prefeitura entrega segundo trecho da ciclovia da Avenida Brasil com 2,4 km de extensão",
    subtitle: "Obra integra o projeto Mobilidade Sustentável e conecta o centro ao bairro Universitário com iluminação em LED e segurança.",
    category: "cidade", categoryLabel: "Infraestrutura", categoryPage: "cidade.html",
    author: "Carlos Henrique", authorRole: "Repórter de Cidade",
    authorAvatar: "author1/80/80", authorBio: "Jornalista especializado em urbanismo e mobilidade urbana.",
    date: "2026-05-06T10:00:00", readingTime: 3, views: 2450,
    imageSeed: "img/pref_lrv.webp",
    imageCaption: "Novo trecho da ciclovia na Avenida Brasil. Foto: Secretaria de Obras / Divulgação",
    excerpt: "Com 2,4 km de extensão, o novo trecho beneficia cerca de 3.200 ciclistas diários e possui sinalização de última geração.",
    body: [
      {type:"p", text:"A prefeitura entregou nesta manhã o segundo trecho da ciclovia da Avenida Brasil, uma obra estratégica para a mobilidade sustentável da cidade. O novo traçado tem 2,4 quilômetros de extensão e conecta o centro da cidade ao bairro Universitário, facilitando o deslocamento de estudantes e trabalhadores."},
      {type:"p", text:"A estrutura conta com pavimentação asfáltica específica para bicicletas, iluminação em LED em toda a extensão e sinalização horizontal e vertical renovada. O investimento total na etapa foi de R$ 3,8 milhões."},
      {type:"quote", text:"Este é mais um passo para tornarmos nossa cidade referência em transporte limpo e seguro para todos.", author:"Secretário de Obras"},
      {type:"h2", text:"Segurança e conectividade"},
      {type:"p", text:"Com a entrega deste trecho, a malha cicloviária do corredor norte-sul atinge 8,6 km contínuos. A Secretaria de Mobilidade estima que o tempo de deslocamento entre os dois pontos caia de 25 para 12 minutos para os ciclistas."},
      {type:"p", text:"O projeto também incluiu a revitalização dos canteiros centrais e a instalação de áreas de descanso com bebedouros e totens de manutenção rápida para bicicletas ao longo do percurso."}
    ],
    tags: ["Mobilidade","Obras","Ciclovia","Prefeitura","Sustentabilidade"],
    featured: true
  },
  {
    id: 5,
    title: "Câmara Municipal aprova orçamento de R$ 890 milhões para 2027 com foco em saúde e educação",
    subtitle: "Votação ocorreu com 17 votos favoráveis e 2 contrários. Orçamento prevê aumento de 22% para saúde em relação a 2026.",
    category: "politica", categoryLabel: "Municipal", categoryPage: "politica.html",
    author: "Bruno Almeida", authorRole: "Repórter Político",
    authorAvatar: "author5/80/80", authorBio: "Jornalista político com 10 anos de cobertura da Câmara Municipal e Prefeitura.",
    date: "2026-05-06T11:00:00", readingTime: 4, views: 3180,
    imageSeed: "img/camaramunicipal.webp",
    imageCaption: "Vereadores durante a sessão de votação. Foto: Câmara Municipal",
    excerpt: "R$ 280 mi para saúde, R$ 195 mi para educação e R$ 120 mi para infraestrutura são os principais eixos do orçamento aprovado.",
    body: [
      {type:"p", text:"A Câmara Municipal aprovou nesta tarde, em sessão ordinária, o Projeto de Lei Orçamentária Anual de 2027, com valor total de R$ 890 milhões. A votação ocorreu com 17 votos favoráveis e apenas dois contrários, de vereadores da oposição que criticaram o aumento nos gastos com pessoal."},
      {type:"quote", text:"Este é o maior investimento em saúde da história do município. Cada real foi discutido com a população durante as audiências públicas.", author:"Presidente da Câmara Municipal"},
      {type:"h2", text:"Distribuição dos recursos"},
      {type:"p", text:"O orçamento prevê R$ 280 milhões para a Secretaria de Saúde — aumento de 22% sobre 2026 —, R$ 195 milhões para Educação, R$ 120 milhões para Infraestrutura e Obras e R$ 85 milhões para Assistência Social. Os demais R$ 210 milhões se distribuem entre serviços administrativos, segurança e meio ambiente."},
      {type:"p", text:"O orçamento segue para sanção do prefeito, que tem prazo de 15 dias úteis para assinar ou vetar a lei. Não há previsão de veto, segundo o secretário de Finanças."}
    ],
    tags: ["Câmara","Orçamento","Municipal","Prefeitura","Vereadores"],
    featured: true
  },
  {
    id: 6,
    title: "IBGE aponta queda de 0,4% no desemprego no primeiro trimestre; taxa chega a 6,1%",
    subtitle: "Levantamento da PNAD Contínua mostra que 6,8 milhões de pessoas estavam desempregadas, o menor número desde 2012.",
    category: "brasil", categoryLabel: "Economia", categoryPage: "brasil.html",
    author: "Mariana Costa", authorRole: "Repórter de Economia",
    authorAvatar: "author2/80/80", authorBio: "Jornalista especializada em saúde pública e políticas sociais.",
    date: "2026-05-06T10:30:00", readingTime: 4, views: 7120,
    imageSeed: "img/desemprego.webp",
    imageCaption: "Trabalhadores na linha de produção. Foto: Agência Brasil",
    excerpt: "Setor de serviços lidera a criação de novos postos de trabalho, com 320 mil empregos gerados no trimestre.",
    body: [
      {type:"p", text:"O IBGE divulgou nesta manhã os dados da PNAD Contínua referentes ao primeiro trimestre de 2026, com uma queda de 0,4 ponto percentual na taxa de desemprego em relação ao trimestre anterior. O índice chegou a 6,1%, o menor desde o segundo trimestre de 2012, com 6,8 milhões de desempregados."},
      {type:"quote", text:"O mercado de trabalho mostra resiliência. A geração de empregos formais no trimestre foi a maior para o período em dez anos.", author:"Diretora de Pesquisas do IBGE"},
      {type:"h2", text:"Setores que mais empregaram"},
      {type:"p", text:"O setor de serviços foi o grande destaque, com 320 mil novos postos de trabalho, seguido pelo comércio (180 mil) e pela indústria de transformação (95 mil). O agronegócio registrou leve queda sazonal, mas manteve o nível de emprego acima da média histórica para o período."},
      {type:"p", text:"A renda média do trabalhador cresceu 4,2% em termos reais, acima da inflação do período de 3,1%. Economistas apontam que a combinação de juros em queda e inflação controlada deve sustentar o crescimento do emprego ao longo de 2026."}
    ],
    tags: ["IBGE","Desemprego","Economia","Emprego","PNAD"],
    featured: true
  },
  {
    id: 7,
    title: "Indústria paranaense registra maior crescimento dos últimos cinco anos com alta de 4,2% no primeiro trimestre",
    subtitle: "Resultado é puxado pelos setores automotivo, de alimentos e máquinas agrícolas. Investimentos superam R$ 3,2 bi no período.",
    category: "economia", categoryLabel: "Indústria", categoryPage: "economia.html",
    author: "Paulo Mendes", authorRole: "Repórter de Economia",
    authorAvatar: "author8/80/80", authorBio: "Economista e jornalista, especializado em agronegócio e indústria paranaense.",
    date: "2026-05-06T11:30:00", readingTime: 4, views: 3420,
    imageSeed: "img/industria.webp",
    imageCaption: "Linha de produção em fábrica automotiva no Paraná. Foto: FIEP / Divulgação",
    excerpt: "Com a alta, o Paraná consolida sua posição como o quarto maior polo industrial do país, atrás apenas de SP, MG e RJ.",
    body: [
      {type:"p", text:"A indústria do Paraná registrou um crescimento de 4,2% no primeiro trimestre de 2026, o melhor resultado para o período nos últimos cinco anos, segundo dados da Federação das Indústrias do Estado do Paraná (FIEP). O desempenho foi impulsionado principalmente pelos setores automotivo (8,5%), de alimentos (6,2%) e de máquinas e equipamentos (5,8%)."},
      {type:"quote", text:"Estamos colhendo os frutos de um ambiente de negócios favorável e de investimentos pesados em tecnologia e qualificação profissional.", author:"Presidente da FIEP"},
      {type:"h2", text:"Interiorização do crescimento"},
      {type:"p", text:"Um dado relevante do relatório é a interiorização do crescimento. Enquanto a Região Metropolitana de Curitiba cresceu 3,8%, polos industriais como Cascavel, Londrina e Maringá registraram altas superiores a 5%. O setor de máquinas agrícolas no Oeste do estado foi um dos grandes destaques do trimestre."},
      {type:"p", text:"Para o restante do ano, a expectativa é de manutenção do ritmo, com projeção de fechamento de 2026 com alta acumulada de 3,9%. Novos investimentos já anunciados por montadoras e indústrias de alimentos somam R$ 1,8 bilhão para o segundo semestre."}
    ],
    tags: ["Indústria","Economia","Paraná","Crescimento","FIEP"],
    featured: true
  },
  {
    id: 8,
    title: "Cascavel FC confirma contratação de dois reforços e projeta título inédito no Paranaense",
    subtitle: "Clube anunciou o atacante colombiano Diego Ruiz e o volante Rafael Sena. Dupla já treina com o grupo e deve estrear nas quartas de final.",
    category: "esportes", categoryLabel: "Futebol", categoryPage: "esportes.html",
    author: "Carlos Espinoza", authorRole: "Repórter Esportivo",
    authorAvatar: "author9/80/80", authorBio: "Jornalista esportivo especializado em futebol paranaense e sul-americano.",
    date: "2026-05-06T09:00:00", readingTime: 4, views: 5890,
    imageSeed: "img/FCC-CCR.webp",
    imageCaption: "Diego Ruiz e Rafael Sena durante apresentação oficial no clube. Foto: Cascavel FC",
    excerpt: "Com os novos reforços, a comissão técnica aposta em equipe mais equilibrada para as quartas de final do Paranaense.",
    body: [
      {type:"p", text:"O Cascavel FC anunciou nesta manhã a contratação do atacante colombiano Diego Ruiz, 26 anos, ex-Independiente Santa Fe, e do volante brasileiro Rafael Sena, 28, ex-Cruzeiro. Os dois jogadores já estão integrados ao grupo e devem aparecer na lista de relacionados para as quartas de final do Campeonato Paranaense."},
      {type:"quote", text:"Estamos muito felizes com a chegada dos dois. São jogadores de alto nível que vão elevar a qualidade do grupo num momento decisivo.", author:"Técnico do Cascavel FC"},
      {type:"h2", text:"Perfil dos novos contratados"},
      {type:"p", text:"Diego Ruiz é um atacante veloz e finalista que marcou 14 gols na última temporada pelo Santa Fe, no Campeonato Colombiano. Rafael Sena é um volante de marcação que passou por Cruzeiro, Sport e pela seleção brasileira sub-23."},
      {type:"p", text:"Com os reforços, o Cascavel FC totaliza 22 jogadores no elenco. A comissão técnica avalia a possibilidade de uma última contratação antes do fechamento da janela, possivelmente um lateral-esquerdo. A estreia nas quartas de final está prevista para o próximo domingo, às 16h, no Estádio Municipal."}
    ],
    tags: ["Futebol","Cascavel FC","Paranaense","Contratação","Reforços"],
    featured: true
  },
  {
    id: 9,
    title: "Festival de Inverno divulga programação completa com 22 atrações em seis dias de evento",
    subtitle: "Edição 2026 terá shows de artistas nacionais e regionais, cinema ao ar livre, gastronomia e exposições. Ingressos a partir de R$ 40.",
    category: "entretenimento", categoryLabel: "Música", categoryPage: "entretenimento.html",
    author: "Ana Paula Lima", authorRole: "Repórter de Cultura",
    authorAvatar: "author4/80/80", authorBio: "Jornalista formada pela UNIOESTE com pós-graduação em Jornalismo Cultural.",
    date: "2026-05-06T10:00:00", readingTime: 4, views: 4110,
    imageSeed: "img/festival.webp",
    imageCaption: "Palco principal do Festival de Inverno 2025. Foto: Organização do Festival",
    excerpt: "Festival acontece de 15 a 20 de julho no Parque Municipal. Ingressos disponíveis online a partir desta sexta-feira.",
    body: [
      {type:"p", text:"A organização do Festival de Inverno divulgou nesta quarta-feira a programação completa da 12ª edição do evento, que acontece de 15 a 20 de julho no Parque Municipal. São 22 atrações distribuídas em três palcos — o Palco Principal, o Palco Cultural e o Palco Gastronomia — além de exposições, cinema ao ar livre e feira de artesanato."},
      {type:"quote", text:"Esta é nossa edição mais completa. Trabalhamos para oferecer diversidade cultural com shows nacionais e muito espaço para os talentos locais.", author:"Diretor Artístico do Festival"},
      {type:"h2", text:"Destaques da programação"},
      {type:"p", text:"O Palco Principal terá shows de três artistas nacionais de grande público, além de bandas regionais confirmadas do sul do Brasil. O Palco Cultural vai receber apresentações de teatro, dança contemporânea e shows de jazz e MPB. Programação completa disponível no site do festival."},
      {type:"p", text:"Os ingressos para o pacote completo custam R$ 180 (inteira) e R$ 90 (meia). Entradas para dias avulsos custam R$ 40 a R$ 80. A venda começa na sexta-feira pelo site oficial e em pontos físicos do centro da cidade."}
    ],
    tags: ["Festival","Música","Cultura","Inverno","Evento"],
    featured: true
  },
  {
    id: 10,
    title: "Startup paranaense de agtech recebe aporte de R$ 5 milhões em rodada Série A",
    subtitle: "Plataforma conecta produtores rurais a tecnologias de monitoramento de solo e previsão climática por satélite.",
    category: "tecnologia", categoryLabel: "Startups", categoryPage: "tecnologia.html",
    author: "Letícia Ferreira", authorRole: "Repórter de Tecnologia",
    authorAvatar: "author10/80/80", authorBio: "Jornalista de tecnologia e inovação com foco no ecossistema de startups do Paraná.",
    date: "2026-05-06T08:45:00", readingTime: 4, views: 2930,
    imageSeed: "img/startup.webp",
    imageCaption: "Fundadores da startup durante apresentação para investidores. Foto: Divulgação",
    excerpt: "Com o investimento, a empresa vai expandir para 3 novos estados e dobrar o time de engenharia em 2026.",
    body: [
      {type:"p", text:"A startup CampoTech, de Cascavel, anunciou nesta semana o fechamento de uma rodada Série A de R$ 5 milhões, liderada pelo fundo europeu AgriVentures. A empresa desenvolve uma plataforma de monitoramento de solo e previsão climática por satélite voltada para produtores rurais de médio porte."},
      {type:"quote", text:"Este aporte valida o modelo de negócios e nos permite escalar. Queremos chegar a 10 mil produtores cadastrados até o final de 2027.", author:"CEO da CampoTech"},
      {type:"h2", text:"Como funciona a plataforma"},
      {type:"p", text:"A solução da CampoTech usa imagens de satélite e sensores de solo para gerar alertas precisos sobre umidade, risco de geada, nível de nutrientes e previsão de pragas. O produtor recebe recomendações em tempo real pelo aplicativo, reduzindo até 30% o uso de defensivos agrícolas."},
      {type:"p", text:"Atualmente a plataforma atende 1.800 produtores no Paraná e Santa Catarina. Com o investimento, a empresa vai se expandir para São Paulo, Mato Grosso e Mato Grosso do Sul, além de contratar 35 novos engenheiros e desenvolvedores."}
    ],
    tags: ["Startup","Agtech","Tecnologia","Inovação","Investimento"],
    featured: true
  }
];
