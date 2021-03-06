
function newTarefa(numero, titulo, subtarefas, disabled, checked, forceMarker){
	return {
		"numero": numero,
		"titulo": titulo,
		"subtarefas": subtarefas || [],
		"isPai": (subtarefas || []).length > 0,
		"disabled" : disabled || false,
		"checked" : checked || false,
		"forceMarker": forceMarker || false
	}
}

const sprint_81 = { 
		title: 'Sprint 81',
		sprint_number: "81",
		meta: "Permitir trocar cor da agenda e criar solicitação de procedimentos do TISS",
		data_atualizacao: "30/09/2018 a partir das 22:00",
		easter_egg: "https://media1.tenor.com/images/b2f380865b3b97c559905ea20f9addbc/tenor.gif",
		tarefas: []
}

sprint_81.tarefas.push(newTarefa(8299, "Ordenar cards de senha contínua pela dataHora de geração", []));
sprint_81.tarefas.push(newTarefa(4922, "[TISS] Criar área para solicitação de procedimentos no TISS", []));
sprint_81.tarefas.push(newTarefa(7270, "Alterar forma de exibição dos dados do orçamento na tela de resumo do orçamento	Baixa", []));
sprint_81.tarefas.push(newTarefa(8029, "Possibilitar utilizar tabela de coeficientes na renegociação", []));
sprint_81.tarefas.push(newTarefa(8258, "Possibilitar escolher cor para o agendamento", []));
sprint_81.tarefas.push(newTarefa(8265, "Permitir inserir no orçamento a quantidade liberada para agendamento em cada procedimento", []));
sprint_81.tarefas.push(newTarefa(8189, "Logo da clinica não aparece no relatórios de Atestado de saúde ocupacional em branco por empresa", []));
sprint_81.tarefas.push(newTarefa(8389, "Marcar como FATURADO as agendas quitadas pelo pagseguro", []));
sprint_81.tarefas.push(newTarefa(8063, "Bloquear edição de valores ao inserir produtos no orçamento (usar a mesma cfg de procedimentos existente)", []));
sprint_81.tarefas.push(newTarefa(8244, "Falta as opções para selecionar o tipo do ASO em branco", []));
sprint_81.tarefas.push(newTarefa(8336, "Configurar altura da margem cabeçalho documentos", []));
sprint_81.tarefas.push(newTarefa(7941, "No relatório de procedimentos faturados por período, mostrar também os procedimentos faturados contra o convênio", []));
sprint_81.tarefas.push(newTarefa(8136, "Possibilitar edição de dados do orçamento após ser aprovado", []));


const sprint_82 = { 
		title: 'Sprint 82',
		sprint_number: "82",
		meta: "Permitir que a clínica cadastre promoções para procedimentos, e indique a especialidade de cada procedimento agendado",
		data_atualizacao: "17/10/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
		tarefas: []
}

sprint_82.tarefas.push(newTarefa(8430, "Criar opção de escolher especialidade no procedimento agenda", []));
sprint_82.tarefas.push(newTarefa(8427, "Criar opção de descontos para procedimentos", []));
sprint_82.tarefas.push(newTarefa(8496, "Ajustar tela de recibo para responsável financeiro", []));
sprint_82.tarefas.push(newTarefa(6874, "Criar configuração dentro do modelo de anamnese para ordenar perguntas da anamnese", []));
sprint_82.tarefas.push(newTarefa(8108, "Configurar responsável financeiro no paciente", []));
sprint_82.tarefas.push(newTarefa(8380, "Ter a possibilidade de definir a duração dos agendamento através dos tipos de consulta", []));
sprint_82.tarefas.push(newTarefa(8341, "Quando o titulo extenso no laudo, está cortando a frase no documento gerado", []));
sprint_82.tarefas.push(newTarefa(8405, "Ao cadastrar o usuário corrente como profissional de saúde, o sistema exige logout/login para mostrar o botão 'atender' na agenda", []));
sprint_82.tarefas.push(newTarefa(8437, "Ignorar a opção Bloquear atendimento sem pagamento quando os procedimentos só lançarem valores para o convênio faturados por TISS", []));
sprint_82.tarefas.push(newTarefa(7897, "Remover indicador de iss retido no emissor", []));


const sprint_83 = { 
		title: 'Sprint 83',
		sprint_number: "83",
		meta: "Possibilitar que os clientes consigam emitir notas de devolução e também visualizar todas as informações sobre um agendamento",
		data_atualizacao: "04/11/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif",
		tarefas: []
}

sprint_83.tarefas.push(newTarefa(8378, "Criar tela de mais detalhes agendamento", []));
sprint_83.tarefas.push(newTarefa(8474, "Possibilitar geração de nota de devolução de produtos", []));
sprint_83.tarefas.push(newTarefa(8470, "Criar comissão por indicação no orçamento", []));
sprint_83.tarefas.push(newTarefa(6857, "Possibilitar impressão da agenda em impressora térmica", []));
sprint_83.tarefas.push(newTarefa(7365, "Criar a opção de guia de encaminhamento (orçamento)", []));
sprint_83.tarefas.push(newTarefa(8494, "Ao editar um paciente existente, a opção de 'Continuar', na integração com pipedrive, está integrando com uma pessoa, mesmo sem estar marcada alguma pessoa para integração", []));
sprint_83.tarefas.push(newTarefa(8475, "Integração de volta Pipedrive para o CNN", []));
sprint_83.tarefas.push(newTarefa(8441, "Problemas no campo de busca 'Responsável pelo orçamento'", []));
sprint_83.tarefas.push(newTarefa(8497, "Criar uma nova macro nos modelos de documento", []));
sprint_83.tarefas.push(newTarefa(8255, "Ao faturar um agendamento quando clica na opção de voltar a lista se perde todos os valores dos filtros", []));
sprint_83.tarefas.push(newTarefa(8512, "Alterar clone() da interface Replicavel para copy(), e remover clone da agenda e faturamento", []));

const sprint_84 = {
		title: 'Sprint 84',
		sprint_number: "84",
		meta: "Permitir que o cliente imprima novos relatórios do orçamento e possibilitar realização de prescrições pela Memed.",
		data_atualizacao: "25/11/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
		tarefas: []
}

	const tf1 = newTarefa(8548, "Consumir endpoint para cadastrar e atualizar pacientes no Lapius.", [], true, true);
	const tf2 = newTarefa(8549, "Consumir endpoint para cadastrar e atualizar dados do prontuário do paciente no Lapius.", [], true, true);
	sprint_84.tarefas.push(newTarefa(8547, "[Tarefa pai] Criar integração com app da Lapius", [tf1, tf2], true, true));

	sprint_84.tarefas.push(newTarefa(8499, "Alterar forma de integração das prescrições com o memed", []));
	sprint_84.tarefas.push(newTarefa(8472, "Possibilitar leitura de xml de nota e inserir no estoque os produtos da nota", []));

	sprint_84.tarefas.push(newTarefa(8545, "Cadastrar data de início e fim de tratamento odontológico no orçamento", []));
	sprint_84.tarefas.push(newTarefa(8502, "Relatório de quais pacientes que aprovaram orçamento e não realizaram nenhum agendamento", []));
	sprint_84.tarefas.push(newTarefa(8503, "Relatório de quais pacientes não vieram para a manutenção do mês", []));
	sprint_84.tarefas.push(newTarefa(8504, "Relatório de quais pacientes não fizeram a instalação", []));
	sprint_84.tarefas.push(newTarefa(8622, "Relatório de SMS enviados", [])); // extra
	sprint_84.tarefas.push(newTarefa(8584, "Melhoria componente modal.js", []));
	sprint_84.tarefas.push(newTarefa(8533, "Poder cadastrar o paciente na hora de criar um novo orçamento", []));
	sprint_84.tarefas.push(newTarefa(8469, "Mostrar a informação de quanto espaço em disco o cliente esta consumindo", []));
	
	sprint_84.tarefas.push(newTarefa(8615, "Adicionar campo de chave de API nas perguntas adicionais de paciente e anamnese e nas suas alternativas", [])); // extra


const sprint_85 = {
		title: 'Sprint 85',
		sprint_number: "85",
		meta: "Possibilitar a inativação do paciente e melhorar a geração do fluxo de caixa.",
		data_atualizacao: "09/12/2018 a partir das 22:00",
		easter_egg: "https://media.giphy.com/media/13j918ylcwctG/giphy.gif",
		tarefas: []
}

	sprint_85.tarefas.push(newTarefa(8616, "[Lapius] Consumir os dados de Sinais vitais do paciente", []));
	sprint_85.tarefas.push(newTarefa(8618, "Possibilitar inativação de pacientes", []));
	sprint_85.tarefas.push(newTarefa(8625, "Otimizar rotina de fluxo de caixa", []));
	sprint_85.tarefas.push(newTarefa(8581, "Implementar novas versões de TISS", []));
	sprint_85.tarefas.push(newTarefa(8519, "Remover max height dos conteúdos da tela da agenda", []));
	sprint_85.tarefas.push(newTarefa(6807, "Melhorar forma de retorno à lista quando da edição de procedimentos", []));
	sprint_85.tarefas.push(newTarefa(8621, "Profissional de saúde inativo na clinica ainda consegue gerar prescrições.", []));
	sprint_85.tarefas.push(newTarefa(8510, "Popular o campo 'Profissional' ao faturar comissões", []));
	sprint_85.tarefas.push(newTarefa(8460, "Ao renegociar uma conta, não esta sendo possível gerar e imprimir todos os boletos de uma só vez.", []));
	sprint_85.tarefas.push(newTarefa(8605, "Não está mostrando a disponibilidade dos exames quando o mesmo não possui localAgenda", []));
	sprint_85.tarefas.push(newTarefa(8224, "Nas guias TISS, permitir pesquisar por código do CBO sem o ponto", []));
	sprint_85.tarefas.push(newTarefa(8617, "Criar opção de carregar automaticamente ou não a disponibilidade", []));
	sprint_85.tarefas.push(newTarefa(8569, "Alertar que a pessoa tem caixa aberto há muito tempo", []));
	sprint_85.tarefas.push(newTarefa(8455, "Criar menu para agrupar guias do Tiss, deixando as mesmas em submenus", []));

const sprint_86 = {
		title: 'Sprint 86',
		sprint_number: "86",
		meta: "Possibilitar gerar comissão para não profissionais.",
		data_atualizacao: "...",
		easter_egg: "/static/images/andre.png",
		tarefas: []
}

sprint_86.tarefas.push(newTarefa(8668, "(Fechada) - Colocar totalizador no relatório de dados por convênio", []));
sprint_86.tarefas.push(newTarefa(8685, "(Fechada) - Bug no menu lateral da agenda", []));
sprint_86.tarefas.push(newTarefa(8686, "(Fechada) - Bug no rodapé da agenda ao visualizar por mês", []));
sprint_86.tarefas.push(newTarefa(7065, "(Fechada) - Mensagem ao faturar agenda com convênio sem clienteFornecedor", []));
sprint_86.tarefas.push(newTarefa(8659, "(Fechada) - Integrar orçamento aprovado ao RDStation", []));
sprint_86.tarefas.push(newTarefa(8661, "(Fechada) - Otimizar carregamento da lista de pacientes", []));
sprint_86.tarefas.push(newTarefa(8662, "(Fechada) - Otimizar carregamento da lista de pacientes incompletos", []));

const tarefasFilhas = [];
tarefasFilhas.push(newTarefa(8645, "Permitir copiar configuracoes de comissao de outra pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8642, "Permitir adicionar procedimentos na regra da pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8644, "Modificar lógica de reajuste dos valores de comissao", [], true, true));
tarefasFilhas.push(newTarefa(8639, "Alterar a busca de valores de comissão para pegar valores da cfg geral", [], true, true));
tarefasFilhas.push(newTarefa(8637, "Migrar campos relacionados à comissão de profissional para pessoa", [], true, true));
tarefasFilhas.push(newTarefa(8641, "Permitir listar e adicionar pessoas nas regras individuais de comissão", [], true, true));
tarefasFilhas.push(newTarefa(8638, "Permitir o cadastro de valores gerais de comissão", [], false, true));
tarefasFilhas.push(newTarefa(8643, "Modificar importacao da planilha de comissoes", [], true, false));

sprint_86.tarefas.push(newTarefa(7387, "[Tarefa pai] Criar comissões para não profissionais", tarefasFilhas));


const sprint_87 = {
		title: 'Sprint 87',
		sprint_number: "87",
		meta: "Possibilitar agendar para executores, e não somente para profissionais de saúde.",
		data_atualizacao: "13/01/2019 a partir das 22:00",
		easter_egg: "/static/images/vibracao.gif",
		tarefas: []
}

const _t_87 = [
	newTarefa(8701, "1 - Criar e gerenciar pessoas agendáveis", [
		newTarefa(8725, "Migrar banco de dados para a nova estrutura", []),
		newTarefa(8726, "Criar entidade e modificar queries relacionadas", []),
		newTarefa(8727, "Sincronizar cadastro de executor com o cadastro de profissionais de saúde", [])
	]),
	newTarefa(8697, "2 - Modificar o modal da agenda para buscar executores ao invés de profissionais", []),
	newTarefa(8702, "3 - No TISS, filtrar somente as agendas cuja execução é de profissional", []),
	newTarefa(8703, "4 - Possibilitar que um cliente-fornecedor seja um agenda_executor", [])
];

sprint_87.tarefas.push(newTarefa(8667, "[Tarefa Pai] Possibilitar agendar para não profissionais", _t_87));
sprint_87.tarefas.push(newTarefa(8671, "Adicionar somatório total no final da pagina dos relatório de orçamentos por status", []));
sprint_87.tarefas.push(newTarefa(8694, "Criar campo conta contábil no cadastro de categorias de contas", []));
sprint_87.tarefas.push(newTarefa(8693, "Possibilitar filtrar por especialidade no autocomplete de procedimento", []));
sprint_87.tarefas.push(newTarefa(8695, "Possibilitar escolha de obrigatoriedade de telefone celular ao cadastrar o paciente", []));
sprint_87.tarefas.push(newTarefa(8669, "Colocar a cidade do paciente no relatório de dados do convênio", []));


const sprint_88 = {
		title: 'Sprint 88',
		sprint_number: "88",
		meta: "Possibilitar emitir nota de serviço para a cidade de Florianópolis e emitir boletos para o Banco Uniprime.",
		data_atualizacao: "27/01/2019 a partir das 22:00",
		easter_egg: "/static/images/dimitri.gif",
		tarefas: []
}

sprint_88.tarefas.push(newTarefa(6438, "[FAST] Bug ao trocar de clínica no call center", []));
sprint_88.tarefas.push(newTarefa(7999, "[FAST] Criar relatório que mostre informações dos pacientes que faltaram na ultima consulta", []));
sprint_88.tarefas.push(newTarefa(8717, "[FAST] Colocar totalizador de valores no relatorio de de movimentos do estoque", []));
sprint_88.tarefas.push(newTarefa(8379, "[FAST] Aparecer o nome do profissional posto no campo 'Indicado por:' nos prontuários, nas 'Outras informações'", []));
sprint_88.tarefas.push(newTarefa(8436, "[FAST] No relatório de procedimentos faturados por período criar filtro por profissional e ordenar os dados por data", []));
sprint_88.tarefas.push(newTarefa(8141, "[FAST] Ao criar um paciente por padrão vir marcada as opções de envio de sms e email de aniversário", []));
sprint_88.tarefas.push(newTarefa(8433, "[FAST] Colocar caixa de seleção na renegociação para selecionar todos", []));
sprint_88.tarefas.push(newTarefa(8218, "Homologar boletos para o banco Uniprime", []));
sprint_88.tarefas.push(newTarefa(8331, "Implementar Nota Fiscal ( nfs-e ) PHI Concept Serviços - prefeitura de Florianópolis SC", []));
sprint_88.tarefas.push(newTarefa(8682, "Possibilitar ordenar as informações complementares", []));
sprint_88.tarefas.push(newTarefa(8222, "No relatório de orçamento por status, melhorar a exibição do relatório na versão para os formatos .xlsx e .docx", []));
sprint_88.tarefas.push(newTarefa(8709, "Quando uma agenda estiver vinculada com orçamento odontológico, a aba de financeiro deve mostrar os faturamentos vinculados ao orçamento", []));
sprint_88.tarefas.push(newTarefa(8305, "Na pesquisa geral do sistema, quando pesquisar por profissional com escala, mostrar descrição do tipo de consulta.", []));


const sprint_89 = {
		title: 'Sprint 89',
		sprint_number: "89",
		meta: "Possibilitar assinar o laudo através de uma imagem e escolher os dias da semana em uma campanha",
		data_atualizacao: "10/02/2019 a partir das 22:00",
		easter_egg: "/static/images/feliz1.gif",
		tarefas: []
}

sprint_89.tarefas.push(newTarefa(8052, "Criar tela para poder filtrar pacientes que já tem um tempo que não passam pela clínica", []));
sprint_89.tarefas.push(newTarefa(8731, "Possibilitar a inclusão de uma imagem da assinatura nos laudos", []));
sprint_89.tarefas.push(newTarefa(8712, "Possibilitar escolher os dias da semana no período da campanha", []));
sprint_89.tarefas.push(newTarefa(8612, "Problemas na lista de espera", []));
sprint_89.tarefas.push(newTarefa(8653, "Fazer filtro na tela de orçamentos por data execução", []));


const sprint_90 = {
		title: 'Sprint 90',
		sprint_number: "90",
		meta: "Possibilitar split de pagamento e melhorias na importação de procedimentos",
		data_atualizacao: "24/02/2019 a partir das 22:00",
		easter_egg: "/static/images/sprint90.gif",
		tarefas: []
}

sprint_90.tarefas.push(newTarefa(8827, "Criar relatório de receita líquida analítico", []));
sprint_90.tarefas.push(newTarefa(8820, "Problema de emissão de nota fiscal chapecó", []));
sprint_90.tarefas.push(newTarefa(8826, "Modificar a tela de emissão de notas para faturamentos criados no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8784, "Atualizar integração com RDStation para API 2.0", []));
sprint_90.tarefas.push(newTarefa(8822, "Identificar que o faturamento foi criado no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8821, "Listar resumo de repasses quando acessar opção de \"gerar recibo\" em faturamentos gerados no modo split", []));
sprint_90.tarefas.push(newTarefa(8818, "Criar relatório de receita líquida sintético", []));
sprint_90.tarefas.push(newTarefa(8791, "Melhorar importação de exames no tipo de procedimento", []));
sprint_90.tarefas.push(newTarefa(8798, "Melhorar visualização das datas de pesquisa ao efetuar conciliação bancária", []));
sprint_90.tarefas.push(newTarefa(8817, "Aumentar tamanho do campo na coluna de observações do tipo de procedimento", []));
sprint_90.tarefas.push(newTarefa(8823, "Modificar a tela de emissão de recibos para faturamentos criados no modo de split de pagamento", []));
sprint_90.tarefas.push(newTarefa(8828, "Otimizar query do relatorio de agendas por periodo (com telefones) e o relatorio de pacientes por tempo sem agendar", []));
sprint_90.tarefas.push(newTarefa(8480, "Poder selecionar o prazo para reconsulta de cada convênio", []));
sprint_90.tarefas.push(newTarefa(8819, "Criar novo atributo de configuração para identificar que a clínica tem split de pagamento", []));
sprint_90.tarefas.push(newTarefa(6217, "Homologação NFS-e Contagem MG", []));
sprint_90.tarefas.push(newTarefa(8852, "Adicionar timeout na conexão para emissão, consulta e cancelamento de NF", []));


const sprint_91 = {
		title: 'Sprint 91',
		sprint_number: "91",
		meta: "Permitir realizar a cobrança de um orçamentos somente após realizar o agendamento",
		data_atualizacao: "10/03/2019 a partir das 22:00",
		easter_egg: "/static/images/sprint91.gif",
		tarefas: []
}



const _t_91 = [
	newTarefa(8886, "No orçamento, permitir cadastro do mesmo tipo de procedimento mais de uma vez",[]),
	newTarefa(8892, "Vincular faturamentos de agenda ao orçamento",[]),
	newTarefa(8891, "Possibilitar a seleção de procedimentos na agenda para orçamentos odontológicos",[]),
	newTarefa(8890, "Identificar tipo de geração de financeiro no orçamento",[])
]

sprint_91.tarefas.push(newTarefa(8885, "[Tarefa pai] Possibilitar a cobrança de orçamentos somente após agendar", _t_91));
sprint_91.tarefas.push(newTarefa(8855, "Aumentar prazo de dias para filtro da tela de movimentação financeira", []));
sprint_91.tarefas.push(newTarefa(8867, "Adicionar macro com o valor dos procedimentos realizados por terceiros", []));
sprint_91.tarefas.push(newTarefa(8876, "Adicionar configuração para que o recibo em a4 não imprima cabeçalho", []));
sprint_91.tarefas.push(newTarefa(8883, "Filtrar relatório orçamento também pelo código procedimento", []));
sprint_91.tarefas.push(newTarefa(8848, "Mesmo com a opção de bloquear atendimento sem pagamento, o sistema permite atender pela tela de prontuários do paciente", []));
sprint_91.tarefas.push(newTarefa(8849, "Quando a clínica bloqueia atendimento sem pagamento, deve permitir a visualização dos dados de prontuário dos pacientes", []));
sprint_91.tarefas.push(newTarefa(8753, "Executar drop das colunas nao utilizadas ref migração comissões", []));
sprint_91.tarefas.push(newTarefa(8857, "Executar drop das colunas de reconsulta da tabela CONFIGURACAO", []));

sprint_91.tarefas.push(newTarefa(8896, "Criar estrutura de controle de relatórios customizados", []));
sprint_91.tarefas.push(newTarefa(8889, "Relatório de vendas", []));
sprint_91.tarefas.push(newTarefa(8887, "Criar relatório ativos telemarketing", []));


const sprint_fast_42 = {
		title: 'Sprint fast 42',
		sprint_number: "F42",
		meta: "Melhorias no dashboard, alteração em massa, whitelabel e Correções diversas",
		data_atualizacao: "14/04/2019 a partir das 22:00",
		easter_egg: "/static/images/sprintFast42.gif",
		tarefas: []
}

sprint_fast_42.tarefas.push(newTarefa(7988, "Implementar Nota Fiscal ( nfs-e ) Clinica do Bem - prefeitura de Belo Horizonte", [], true, true));
sprint_fast_42.tarefas.push(newTarefa(8977, "Alinhar elementos html", []));
sprint_fast_42.tarefas.push(newTarefa(8926, "Melhorias no dashboard", []));
sprint_fast_42.tarefas.push(newTarefa(8925, "Alterar visualização de pacientes com cadastro incompleto no dashboard", []));
sprint_fast_42.tarefas.push(newTarefa(8923, "Possibilitar busca e e alteração em massa pelo status da agenda", []));
sprint_fast_42.tarefas.push(newTarefa(8915, "Alinhar campos do documento impresso do orçamento", []));
sprint_fast_42.tarefas.push(newTarefa(8881, "Exportar template de importação de procedimento com valores preenchidos", []));
sprint_fast_42.tarefas.push(newTarefa(8949, "Sistema duplica os procedimentos ao importar tabela", []));
sprint_fast_42.tarefas.push(newTarefa(8922, "Melhorar modal de atendimento odontológico", []));
sprint_fast_42.tarefas.push(newTarefa(8946, "Refazer impressão do recibo de pagamento financeiro", []));
sprint_fast_42.tarefas.push(newTarefa(8942, "Erro ao listar escala de profissional com datas inválidas", []));
sprint_fast_42.tarefas.push(newTarefa(8979, "Erro no SQL relatório personalizado Vendas", []));
sprint_fast_42.tarefas.push(newTarefa(8927, "Programar whitelabel para academia da pele", []));
	

const sprint_92 = {
	title: 'Sprint 92',
	sprint_number: "92",
	meta: "Possibilitar geração de repasse(comissão) para diversas pessoas em um faturamento e alterar procedimentos do orçamento",
	data_atualizacao: "21/04/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint92.gif",
	tarefas: []
}

const tf_92 = [];
tf_92.push(newTarefa(8931, "Criar cadastro de tipos de repasse", [], false, false, true));
tf_92.push(newTarefa(8932, "Vincular o tipo de repasse com o tipo procedimento", [], false, false, true));
tf_92.push(newTarefa(8962, "Vincular regras para tipos de repasse e pessoas", [], false, false, true));
tf_92.push(newTarefa(8936, "Possibilitar a inserção de pessoas do repasse na tela de orçamento", [], false, false, true));
tf_92.push(newTarefa(8935, "Possibilitar a inserção de pessoas do repasse na tela de faturar", [], false, false, true));
tf_92.push(newTarefa(8899, "Botão aplicar a todos no desconto/acréscimo por procedimento no faturamento", [], false, false, true));
tf_92.push(newTarefa(8938, "Ajustar o cálculo de comissões para o novo formato de configuração", [], false, false, true));

sprint_92.tarefas.push(newTarefa(8953, "Possibilitar alteração de procedimentos de orçamentos já aprovados", []));
sprint_92.tarefas.push(newTarefa(8928, "Possibilitar pagamento de mais de um tipo de comissão para o mesmo procedimento", tf_92));


const sprint_93 = {
	title: 'Sprint 93',
	sprint_number: "93",
	meta: "Possibilitar o envio de mensagens via WhatsApp e possibilitar a geração de guias Tiss com mais de uma agenda.",
	data_atualizacao: "05/05/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint93.gif",
	tarefas: []
}

sprint_93.tarefas.push(newTarefa(8982, "Preencher dados da guia de solicitação TISS", []));	

const tp1=[];
tp1.push(newTarefa(8985, "Possibilitar gerar guias para agendas não finalizadas", [], false, false, true));
tp1.push(newTarefa(8988, "Possibilitar escolher mais de uma agenda para uma guia TISS", [], false, false, true));
sprint_93.tarefas.push(newTarefa(6083, "[TISS] Permitir inserção de procedimentos seriados na guia SADT", tp1));


sprint_93.tarefas.push(newTarefa(9005, "Problema nas margens da solicitação de exames", []));
sprint_93.tarefas.push(newTarefa(8993, "Alterar o formato de visualização da hora na impressão do prontuário", []));
sprint_93.tarefas.push(newTarefa(8971, "Mostrar o nome da conta conectada no RD Station", []));
sprint_93.tarefas.push(newTarefa(8992, "Cliente/fornecedor é criado com status inativo ao criar novo usuário", []));

const tp2=[];
tp2.push(newTarefa(8981, "Criar tela de configuração para whats", [], false, false, true));
tp2.push(newTarefa(9004, "Criar gatilhos da agenda para envio de Whats", [], false, false, true));
tp2.push(newTarefa(9002, "Criar serviço REST para whats", []));
tp2.push(newTarefa(9003, "Consumir webservice pigeon", []));

sprint_93.tarefas.push(newTarefa(8943, "[Tarefa Pai] Integração com WhatsApp", tp2));

const sprint_94 = {
	title: 'Sprint 94',
	sprint_number: "94",
	meta: "Possibilitar o envio de guias Tiss através de webservices e realizar a devolução de dinheiro através do orçamento.",
	data_atualizacao: "19/05/2019 a partir das 22:00",
	easter_egg: "/static/images/sprint94.gif",
	tarefas: []
}
sprint_94.tarefas.push(newTarefa(8984, "Criar consumo webservice solicitação procedimento TISS", []));
sprint_94.tarefas.push(newTarefa(8995, "Criar uma configuração dos webservices TISS", []));
sprint_94.tarefas.push(newTarefa(8996, "Criar consumo webservice Elegibilidade", []));
sprint_94.tarefas.push(newTarefa(9055, "Possibilitar devolver dinheiro pelo orçamento", []));
sprint_94.tarefas.push(newTarefa(9057, "Imprimir Sessões do prontuário", []));
sprint_94.tarefas.push(newTarefa(8987, "Faturar TISS pela agenda", []));
sprint_94.tarefas.push(newTarefa(9033, "Refatorar relatório de movimentação de estoque", []));
sprint_94.tarefas.push(newTarefa(9038, "Refatorar relatório de orçamentos por status", []));
sprint_94.tarefas.push(newTarefa(9045, "Melhoria gráfica", []));
sprint_94.tarefas.push(newTarefa(9046, "Melhoria gráfica 2", []));
sprint_94.tarefas.push(newTarefa(4840, "WebService TISS Unimed BH", []));

const SPRINTS = [sprint_81, sprint_82, sprint_83, sprint_84, sprint_85, sprint_86, sprint_87, sprint_88, sprint_89, sprint_90, sprint_91, sprint_fast_42, sprint_92, sprint_93, sprint_94];

module.exports = {
	getSprints: ()=>{
		return SPRINTS.map((spr)=>{
			return {
				"nome": spr.title,
				"numero": spr.sprint_number,
				"meta": spr.meta,
				"numTarefas": spr.tarefas.length
			}
		});
	},
	dadosDaSprint: (sprint_n)=>{
		
		const sp  = SPRINTS.filter((index)=>{
			return index.sprint_number == sprint_n;
		});

		return sp.length > 0 ? sp[0] : {};
	}
};
