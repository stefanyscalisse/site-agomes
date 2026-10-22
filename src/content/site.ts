export const contact = {
  phoneDisplay: '(11) 98216-6464',
  phoneHref: 'tel:+5511982166464',
  whatsappDisplay: '(11) 98216-6464',
  whatsappHref: 'https://wa.me/5511982166464?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20A%20Gomes%20Advogados%20Associados.',
  email: 'agomes69@aasp.org.br',
  formEmail: 'contato@digitaltimes.com.br',
  address: 'Rua Tabatinguera, 140, conjunto 1212, Centro, São Paulo – SP, 01020-000',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua%20Tabatinguera%2C%20140%2C%20conjunto%201212%2C%20Centro%2C%20S%C3%A3o%20Paulo%2C%2001020-000',
  instagram: 'https://www.instagram.com/agomessociedadeadvogados/',
};

export const areas = [
  { slug: 'direito-civil', name: 'Direito Civil', short: 'Relações privadas, contratos, indenizações e responsabilidades.', heroImage: '/civil-hero.png', description: 'Atuação preventiva e contenciosa em relações civis, contratos, obrigações, responsabilidade civil e reparação de danos.', demands: ['Contratos e obrigações', 'Indenizações e responsabilidade civil', 'Cobranças e conflitos contratuais', 'Análise e prevenção de riscos'] },
  { slug: 'direito-criminal', name: 'Direito Criminal', short: 'Defesa técnica e orientação jurídica em questões criminais.', heroImage: '/criminal-hero.png', description: 'Orientação e defesa técnica em inquéritos, processos criminais e situações que exigem atuação cuidadosa, estratégica e ética.', demands: ['Inquéritos e investigações', 'Defesa em processos criminais', 'Audiências e medidas cautelares', 'Acompanhamento jurídico especializado'] },
  { slug: 'direito-trabalhista', name: 'Direito Trabalhista', short: 'Relações de trabalho mais seguras para pessoas e empresas.', heroImage: '/trabalhista-hero.png', description: 'Assessoria e representação em questões trabalhistas, com foco na análise de direitos, prevenção de passivos e condução responsável de conflitos.', demands: ['Verbas rescisórias e vínculos', 'Reclamações trabalhistas', 'Consultoria preventiva para empresas', 'Negociações e acordos'] },
  { slug: 'direito-empresarial', name: 'Direito Empresarial', short: 'Segurança jurídica para decisões e relações empresariais.', heroImage: '/empresarial-hero.png', description: 'Suporte jurídico para empresas em sua rotina, contratos, relações societárias e decisões que demandam clareza e segurança.', demands: ['Contratos empresariais', 'Relações entre sócios', 'Consultoria para negócios', 'Prevenção e gestão de riscos'] },
  { slug: 'direito-imobiliario', name: 'Direito Imobiliário', short: 'Análise e proteção jurídica em negócios com imóveis.', heroImage: '/imobiliario-hero.png', description: 'Atuação em contratos, transações e conflitos imobiliários, com atenção à documentação, aos riscos e aos interesses envolvidos.', demands: ['Compra e venda de imóveis', 'Locação e contratos imobiliários', 'Regularização documental', 'Conflitos de posse e propriedade'] },
  { slug: 'direito-de-familia', name: 'Direito de Família', short: 'Orientação jurídica cuidadosa para momentos decisivos.', heroImage: '/familia-hero.png', description: 'Atendimento humanizado e estratégico em questões familiares, buscando preservar direitos, relações e interesses com responsabilidade.', demands: ['Divórcio e dissolução de união estável', 'Guarda, convivência e alimentos', 'Inventário e partilha', 'Planejamento familiar e patrimonial'] },
  { slug: 'direito-tributario', name: 'Direito Tributário', short: 'Clareza e estratégia para obrigações e conflitos tributários.', heroImage: '/tributario-hero.png', description: 'Análise de questões tributárias e orientação para pessoas e empresas diante de obrigações, cobranças e discussões fiscais.', demands: ['Análise de obrigações tributárias', 'Defesas e recursos administrativos', 'Planejamento e prevenção de riscos', 'Discussões sobre cobranças fiscais'] },
  { slug: 'direito-do-consumidor', name: 'Direito do Consumidor', short: 'Proteção em relações de consumo e prestação de serviços.', heroImage: '/consumidor-hero.png', description: 'Orientação e atuação em conflitos de consumo, buscando soluções adequadas para relações com fornecedores e prestadores de serviços.', demands: ['Cobranças indevidas', 'Falhas em produtos e serviços', 'Contratos de consumo', 'Indenizações e negociações'] },
  { slug: 'direito-previdenciario', name: 'Direito Previdenciário', short: 'Orientação para benefícios e direitos previdenciários.', heroImage: '/previdenciario-hero.png', description: 'Atuação em planejamento, requerimentos e discussões relacionadas a benefícios previdenciários, com análise individualizada de cada caso.', demands: ['Aposentadorias e pensões', 'Benefícios por incapacidade', 'Revisões e requerimentos', 'Planejamento previdenciário'] },
];

export const serviceDetails: Record<string, { heading: string; context: string; audience: string; approach: string; faq: [string, string][] }> = {
  'direito-civil': {
    heading: 'Segurança jurídica para relações que fazem parte da sua vida.',
    context: 'O Direito Civil organiza relações entre pessoas e empresas, desde a formação de um contrato até a reparação de um dano. A análise considera documentos, prazos, responsabilidades e os objetivos envolvidos.',
    audience: 'Pessoas e empresas envolvidas em contratos, cobranças, indenizações ou conflitos patrimoniais.',
    approach: 'A atuação pode envolver análise documental, orientação preventiva, negociação e adoção das medidas judiciais ou extrajudiciais cabíveis.',
    faq: [
      ['Que situações podem ser analisadas no Direito Civil?', 'Contratos, obrigações, cobranças, indenizações, responsabilidade civil e outros conflitos entre particulares podem ser avaliados conforme os fatos e documentos disponíveis.'],
      ['É possível revisar um contrato antes da assinatura?', 'Sim. A revisão pode ajudar a identificar obrigações, riscos, responsabilidades e cláusulas que mereçam esclarecimento antes da formalização.'],
      ['Quais documentos devo separar?', 'Reúna contratos, comprovantes, mensagens, notificações e uma cronologia dos fatos. A equipe orientará quais documentos são pertinentes ao caso.'],
    ],
  },
  'direito-criminal': {
    heading: 'Defesa técnica para momentos que exigem firmeza e discrição.',
    context: 'Questões criminais exigem atuação técnica, sigilosa e atenta aos prazos. O trabalho começa pela compreensão dos fatos e da fase da investigação ou do processo, sempre respeitando as garantias legais.',
    audience: 'Pessoas investigadas, acusadas ou envolvidas em procedimentos criminais, além de familiares que necessitem de orientação jurídica.',
    approach: 'A atuação pode incluir acompanhamento de investigações, análise de medidas cautelares, preparação para audiências e defesa técnica nos limites da legislação.',
    faq: [
      ['Quando é recomendável procurar orientação criminal?', 'Quanto antes houver uma intimação, investigação, prisão, busca, audiência ou outra situação com possível repercussão criminal, para que os próximos passos sejam avaliados adequadamente.'],
      ['O advogado pode acompanhar uma investigação?', 'A possibilidade e a forma de acompanhamento dependem da fase e das características do procedimento. A equipe analisará o caso e indicará as medidas cabíveis.'],
      ['É possível garantir o resultado de um processo criminal?', 'Não. A advocacia pode oferecer defesa técnica e estratégia responsável, mas o resultado depende das provas, da legislação e da decisão da autoridade competente.'],
    ],
  },
  'direito-trabalhista': {
    heading: 'Relações de trabalho orientadas com clareza e responsabilidade.',
    context: 'As relações de trabalho envolvem direitos, deveres, documentos e prazos que precisam ser analisados em conjunto. A orientação adequada contribui para decisões mais seguras para trabalhadores e empresas.',
    audience: 'Trabalhadores, empregadores e empresas que precisam esclarecer direitos, obrigações ou conflitos relacionados ao trabalho.',
    approach: 'A atuação pode abranger análise de vínculos e documentos, orientação preventiva, negociações, acordos e representação em reclamações trabalhistas.',
    faq: [
      ['Que documentos ajudam na análise trabalhista?', 'Contratos, holerites, registros de jornada, comprovantes de pagamento, mensagens e documentos de desligamento podem contribuir para a compreensão da situação.'],
      ['Empresas podem buscar orientação antes de um conflito?', 'Sim. A orientação preventiva pode auxiliar na revisão de rotinas, documentos e decisões, contribuindo para a redução de riscos trabalhistas.'],
      ['Toda questão trabalhista precisa virar um processo?', 'Não necessariamente. Dependendo do caso, uma negociação ou solução extrajudicial pode ser avaliada, sem prejuízo da análise técnica e da documentação necessária.'],
    ],
  },
  'direito-empresarial': {
    heading: 'Decisões empresariais mais seguras para sustentar o seu negócio.',
    context: 'Decisões empresariais precisam considerar contratos, responsabilidades, relações entre sócios e riscos jurídicos. O suporte jurídico pode acompanhar a rotina do negócio e situações específicas.',
    audience: 'Empresas, sócios, administradores e empreendedores que buscam mais segurança jurídica para suas decisões.',
    approach: 'O trabalho pode envolver revisão contratual, análise de relações societárias, prevenção de conflitos e orientação para decisões empresariais.',
    faq: [
      ['Em que momento uma empresa deve buscar assessoria jurídica?', 'A orientação pode ser útil na abertura ou reorganização do negócio, antes de contratos relevantes, diante de conflitos ou sempre que uma decisão envolver risco jurídico.'],
      ['Contratos empresariais podem ser revisados antes da assinatura?', 'Sim. A revisão ajuda a compreender obrigações, responsabilidades, prazos, garantias e hipóteses de encerramento da relação.'],
      ['A atuação empresarial serve apenas para processos?', 'Não. A prevenção, a análise de documentos e a orientação estratégica também fazem parte de uma atuação jurídica empresarial.'],
    ],
  },
  'direito-imobiliario': {
    heading: 'Patrimônio protegido em cada negociação e decisão imobiliária.',
    context: 'Negócios e conflitos envolvendo imóveis exigem atenção à documentação, ao contrato e à situação registral. Uma análise prévia pode ajudar a esclarecer riscos antes de uma decisão patrimonial.',
    audience: 'Proprietários, compradores, vendedores, locadores, locatários e empresas envolvidas em negócios imobiliários.',
    approach: 'A atuação pode incluir análise de contratos e documentos, orientação em locações, regularização e avaliação de conflitos de posse ou propriedade.',
    faq: [
      ['O que deve ser analisado antes de comprar um imóvel?', 'A situação depende do negócio, mas normalmente merece atenção a matrícula, documentos das partes, contrato, ônus, certidões e condições de pagamento.'],
      ['Contratos de locação podem ser revisados?', 'Sim. A revisão pode esclarecer direitos e deveres, garantias, reajustes, prazos e responsabilidades previstas para cada parte.'],
      ['Um problema documental impede qualquer negociação?', 'Não é possível responder sem analisar a documentação. O primeiro passo é identificar a pendência e avaliar alternativas juridicamente adequadas.'],
    ],
  },
  'direito-de-familia': {
    heading: 'Cuidado e orientação para escolhas que envolvem a família.',
    context: 'Questões familiares envolvem aspectos jurídicos e pessoais. O atendimento busca organizar informações, esclarecer possibilidades e preservar direitos com sensibilidade, discrição e responsabilidade.',
    audience: 'Pessoas que precisam de orientação em divórcio, união estável, guarda, alimentos, inventário ou planejamento familiar e patrimonial.',
    approach: 'A atuação pode incluir orientação, elaboração e revisão de acordos, representação em procedimentos e acompanhamento de demandas judiciais quando necessário.',
    faq: [
      ['Como funciona o primeiro atendimento em uma questão de família?', 'A conversa inicial busca compreender a situação, os objetivos e os documentos disponíveis. A partir disso, são apresentados os caminhos possíveis e as informações necessárias.'],
      ['Um divórcio pode ser feito de forma consensual?', 'Em determinadas situações, o divórcio pode seguir uma via consensual. A possibilidade depende das circunstâncias, dos acordos e dos requisitos legais do caso.'],
      ['Como são avaliadas questões de guarda e convivência?', 'A análise considera as circunstâncias concretas e o melhor interesse da criança ou adolescente, sempre conforme a legislação aplicável.'],
    ],
  },
  'direito-tributario': {
    heading: 'Estratégia para compreender obrigações e reduzir riscos tributários.',
    context: 'Obrigações e discussões tributárias podem afetar diretamente o patrimônio e a operação de pessoas e empresas. A análise individualizada ajuda a compreender documentos, prazos e alternativas previstas em lei.',
    audience: 'Pessoas físicas, empresas e responsáveis por decisões financeiras ou administrativas relacionadas a obrigações tributárias.',
    approach: 'O trabalho pode envolver análise de cobranças, orientação preventiva, defesas e recursos administrativos e avaliação de riscos tributários.',
    faq: [
      ['Quando procurar orientação tributária?', 'A orientação pode ser útil diante de uma cobrança, autuação, dúvida sobre obrigação, mudança na atividade ou decisão com possível impacto tributário.'],
      ['Planejamento tributário é o mesmo que sonegação?', 'Não. Planejamento deve observar a legislação e buscar alternativas lícitas. Qualquer análise depende da atividade, dos documentos e das normas aplicáveis.'],
      ['Quais documentos são importantes em uma cobrança fiscal?', 'Notificações, autos, guias, declarações, comprovantes e comunicações relacionadas podem ajudar na avaliação inicial.'],
    ],
  },
  'direito-do-consumidor': {
    heading: 'Seus direitos respeitados nas relações de consumo.',
    context: 'As relações de consumo envolvem produtos, serviços, contratos e deveres de informação. A documentação da compra e das tentativas de solução é importante para avaliar cada situação.',
    audience: 'Consumidores e fornecedores que precisam esclarecer direitos, deveres ou conflitos em relações de consumo.',
    approach: 'A atuação pode incluir análise de documentos, orientação sobre alternativas de solução, negociação e medidas administrativas ou judiciais cabíveis.',
    faq: [
      ['Quais provas devo guardar em um problema de consumo?', 'Guarde notas fiscais, contratos, protocolos, comprovantes, fotos, mensagens e demais registros que ajudem a demonstrar a compra e o problema ocorrido.'],
      ['É preciso reclamar diretamente com a empresa antes de buscar orientação?', 'Nem sempre. Os registros de contato podem ser úteis, mas a necessidade e a conveniência de uma tentativa prévia dependem da situação concreta.'],
      ['Toda falha em produto ou serviço gera indenização?', 'Não. A existência de dano e a medida adequada dependem dos fatos, das provas e da análise jurídica do caso.'],
    ],
  },
  'direito-previdenciario': {
    heading: 'Planejamento e orientação para proteger o seu futuro.',
    context: 'Benefícios previdenciários dependem de histórico contributivo, documentos e requisitos específicos. Uma análise organizada pode ajudar a identificar informações relevantes antes de um requerimento ou recurso.',
    audience: 'Segurados, aposentados, pensionistas e famílias que precisam de orientação sobre benefícios e planejamento previdenciário.',
    approach: 'A atuação pode abranger análise do histórico, planejamento, requerimentos, revisões e discussões administrativas ou judiciais quando cabíveis.',
    faq: [
      ['Quando vale a pena fazer um planejamento previdenciário?', 'O planejamento pode ser considerado antes de uma aposentadoria ou quando houver dúvidas sobre contribuições, tempo, regras aplicáveis e possíveis cenários.'],
      ['O que fazer quando um benefício é negado?', 'É importante verificar o motivo da negativa, o processo administrativo e os documentos apresentados para avaliar a possibilidade de recurso ou outra medida.'],
      ['Quais documentos ajudam na análise previdenciária?', 'Carteira de trabalho, CNIS, comprovantes de contribuição, laudos, documentos pessoais e decisões do INSS podem ser relevantes, conforme o benefício analisado.'],
    ],
  },
};

export const team = [
  { name: 'Alexandre Gomes da Silva', role: 'Advogado', oab: 'OAB/SP 335.899', photo: '/alexandre.png', bio: 'MBA em Direito do Trabalho e Direito Previdenciário, com pós-graduações em Direito do Trabalho, Direito Processual do Trabalho, Direito Civil e Direito Processual Civil.' },
  { name: 'Leandro Rodrigo da Silva', role: 'Advogado', oab: 'OAB/SP 479.243', photo: '/leandro.png', bio: 'Advogado integrante da equipe A Gomes Advogados Associados, com atuação orientada pela análise responsável e pelo atendimento próximo.' },
  { name: 'Roberta de Jesus Leite', role: 'Advogada', oab: 'OAB/SP 469.912', photo: '/roberta.png', bio: 'Pós-graduada em Direito Civil e Processual Civil e especializada em Direito Penal.' },
];

export const faq = [
  ['O escritório atende clientes de outras cidades?', 'Sim. Além do atendimento presencial em São Paulo, a A Gomes Advogados Associados realiza atendimento online para clientes em todo o Brasil.'],
  ['Como funciona o primeiro contato?', 'Você pode entrar em contato pelo WhatsApp, telefone, e-mail ou formulário. A equipe fará uma triagem inicial para entender a demanda e indicar os próximos passos.'],
  ['O envio do formulário representa contratação?', 'Não. O envio de uma mensagem não cria relação advogado-cliente nem substitui uma análise jurídica individualizada. A contratação depende de avaliação e formalização próprias.'],
  ['Quais documentos devo enviar?', 'Isso depende da situação. No primeiro contato, informe os fatos principais e aguarde a orientação sobre quais documentos são necessários. Evite enviar dados sensíveis sem solicitação.'],
  ['O escritório pode garantir o resultado de um processo?', 'Não. Cada caso depende de fatos, documentos, provas e decisões das autoridades competentes. A atuação jurídica busca oferecer análise técnica e estratégia responsável, sem promessa de resultado.'],
];
