import QuestionModel from "../../model/question";
import ResponseModel from "../../model/response";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a Doença de Chagas?", [
    ResponseModel.wrong("Abelha"),
    ResponseModel.wrong("Barata"),
    ResponseModel.wrong("Pulga"),
    ResponseModel.correct("Barbeiro"),
  ]),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      ResponseModel.wrong("Caju"),
      ResponseModel.wrong("Côco"),
      ResponseModel.wrong("Chuchu"),
      ResponseModel.correct("Abóbora"),
    ]
  ),
  new QuestionModel(203, "Qual é o coletivo de cães?", [
    ResponseModel.wrong("Manada"),
    ResponseModel.wrong("Alcateia"),
    ResponseModel.wrong("Rebanho"),
    ResponseModel.correct("Matilha"),
  ]),
  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      ResponseModel.wrong("Equilátero"),
      ResponseModel.wrong("Isóceles"),
      ResponseModel.wrong("Trapézio"),
      ResponseModel.correct("Escaleno"),
    ]
  ),
  new QuestionModel(205, "Quem compôs o Hino da Independência?", [
    ResponseModel.wrong("Castro Alves"),
    ResponseModel.wrong("Manuel Bandeira"),
    ResponseModel.wrong("Carlos Gomes"),
    ResponseModel.correct("Dom Pedro I"),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
    ResponseModel.wrong("Perder"),
    ResponseModel.wrong("Fracassar"),
    ResponseModel.wrong("Desprezar"),
    ResponseModel.correct("Conseguir"),
  ]),
  new QuestionModel(207, "Em que país nasceu Carmen Miranda?", [
    ResponseModel.wrong("Argentina"),
    ResponseModel.wrong("Espanha"),
    ResponseModel.wrong("Brasil"),
    ResponseModel.correct("Portugal"),
  ]),
  new QuestionModel(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      ResponseModel.wrong("Costa e Silva"),
      ResponseModel.wrong("Emílio Médici"),
      ResponseModel.wrong("Ernesto Geisel"),
      ResponseModel.correct("João Figueiredo"),
    ]
  ),
  new QuestionModel(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      ResponseModel.wrong("Ás"),
      ResponseModel.wrong("Nove"),
      ResponseModel.wrong("Rei"),
      ResponseModel.correct("Valete"),
    ]
  ),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
    ResponseModel.wrong("Vela"),
    ResponseModel.wrong("Vento"),
    ResponseModel.wrong("Vênia"),
    ResponseModel.correct("Veia"),
  ]),
  new QuestionModel(211, "Que nome se dá à purificação por meio da água?", [
    ResponseModel.wrong("Abrupção"),
    ResponseModel.wrong("Abolição"),
    ResponseModel.wrong("Abnegação"),
    ResponseModel.correct("Ablução"),
  ]),
  new QuestionModel(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      ResponseModel.wrong("Monte Branco"),
      ResponseModel.wrong("Monte Fuji"),
      ResponseModel.wrong("Monte Carlo"),
      ResponseModel.correct("Monte Everest"),
    ]
  ),
  new QuestionModel(213, "Em que parte do corpo se encontra a epiglote?", [
    ResponseModel.wrong("Estômago"),
    ResponseModel.wrong("Pâncreas"),
    ResponseModel.wrong("Rim"),
    ResponseModel.correct("Pescoço"),
  ]),
  new QuestionModel(214, "A compensação por perda é chamada de...", [
    ResponseModel.wrong("Déficit"),
    ResponseModel.wrong("Indexação"),
    ResponseModel.wrong("Indébito"),
    ResponseModel.correct("Indenização"),
  ]),
  new QuestionModel(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      ResponseModel.wrong("Cuca"),
      ResponseModel.wrong("Curupira"),
      ResponseModel.wrong("Boitatá"),
      ResponseModel.correct("Saci-pererê"),
    ]
  ),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    ResponseModel.wrong("Marechal Deodoro"),
    ResponseModel.wrong("Barão de Mauá"),
    ResponseModel.wrong("Marquês de Pombal"),
    ResponseModel.correct("Duque de Caxias"),
  ]),
];

export default questions;
