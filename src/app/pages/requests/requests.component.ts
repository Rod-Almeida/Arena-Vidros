import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  API_URL = "http://187.75.55.139:8081/api/TAB_PEDIDO?DATA1=01/09/2020"
  displayedColumns =
      ['PEDIDO', 'DATA_PEDIDOS', 'HORA', 
      // 'CLIENTE', 'ESTADO', 'EMAIL', 'TELEFONE', 'FRETE', 'VALOR_PAGTO', 'LOCAL_VENDA', 'STATUS'
      ,];
  dataSource = ELEMENT_DATA;
  formatedData: Object[] = [];

  constructor(private http: HttpClient,) { }

  ngOnInit() {
fullList.forEach(data => {
  this.formatedData.push({
  pedidos: data.PEDIDO,
  dia: data.DATA_ENVIOS,
  hora: data.HORA,
  cliente: data.CLIENTE,
  UF: data.ESTADO,
  email: data.EMAIL,
  telefone: data.TELEFONE,
  frete: data.FRETE,
  valorPagamento: data.VALOR_PAGTO,
  localVenda: data.LOCAL_VENDA,
  status: data.STATUS,
});
});
    
    // console.log(fullList)
    
    // this.http.get(this.API_URL).subscribe(next => {console.log("deu certo esssa bagaça: ", next)})
    
    // subscribe((res: any) => {
    //   console.log("deu certo esssa bagaça: ", res.data)
  }

}




export interface RequestList{
  PEDIDO: string;
  DATA_PEDIDOS: string;
  HORA: string;
  CLIENTE: string;
  ESTADO: string;
  EMAIL: string;
  TELEFONE: string;
  FRETE: string;
  VALOR_PAGTO: string;
  LOCAL_VENDA: string;
  STATUS: string;

  SUBTOTAL_DE_PRODUTOS: String;
  IMPOSTOS: String;
  PAGAMENTO1: String;
  VALOR_FRETE: String;
  FORMA_PAGAMENTO_ESCOLHIDA: String;
  DATA_ENVIOS: String;
  COD_ENVIO: String;
  OBS_CLIENTE: String;
  OBS_LOJA: String;
  PARCEIRO: String;
  VALOR_COMISSAO: String;
  CUPOM_DESCONTO: String;
  DESCONTO: String;
  ACRESCIMO_FORMA: String;
  ID_CLIENTE: String;
  APELIDO: String;
  RG: String;
  CPF: String;
  TELEFONE2: String;
  RAZAO: String;
  CNPJ: String;
  IE: String;
  DESTINATARIO: String;
  ENDERECO: String;
  NUM: String;
  CIDADE: String;
  CEP: String;
  COMPLEMENTO: String;
  BAIRRO: String;
  PAIS: String;
  DATA_PAGAMENTO: String;
  FORMA_PAGAMENTO_PAGA: String;
  ENDERECO_COBRANCA: String;
  NUM_COBRANCA: String;
  ESTADO_COBRANCA: String;
  CEP_COBRANCA: String;
  COMPLEMENTO_COBRANCA: String;
  BAIRRO_COBRANCA: String;
  PAIS_COBRANCA: String;
  VENDEDOR_DO_MERCADOLIVRE: String;
  CIDADE_COBRANCA: String;
}

const ELEMENT_DATA: RequestList[] = [];

const fullList = [{
  ACRESCIMO_FORMA: "0"
  APELIDO: "PEREZREPAROSAUTOMOTIVOS"
  BAIRRO: "Vila nova"
  BAIRRO_COBRANCA: "Vila nova"
  CEP: "13960-000"
  CEP_COBRANCA: "13960-000"
  CIDADE: "Socorro"
  CIDADE_COBRANCA: "Socorro"
  CLIENTE: "ramon perez"
  CNPJ: ""
  COD_ENVIO: "MEL00000095627769"
  COMPLEMENTO: ""
  COMPLEMENTO_COBRANCA: ""
  CPF: "36189132812"
  CUPOM_DESCONTO: ""
  DATA_ENVIOS: "01/10/2020"
  DATA_PAGAMENTO: "30/09/2020"
  DATA_PEDIDOS: "2020-09-30T00:00:00"
  DESCONTO: "0"
  DESTINATARIO: "ramon perez"
  EMAIL: "rperez.pcv8ht+2-ogi2toobtha4dembt@mail.mercadolivre.com"
  ENDERECO: "Rua Estevan Bozola 172"
  ENDERECO_COBRANCA: "Rua Estevan Bozola 172"
  ESTADO: "SP"
  ESTADO_COBRANCA: "SP"
  FORMA_PAGAMENTO_ESCOLHIDA: "Mercado Pago"
  FORMA_PAGAMENTO_PAGA: "Mercado Pago"
  FRETE: "Prioritario"
  HORA: "18:12:18"
  ID_CLIENTE: "4071"
  IE: ""
  IMPOSTOS: "0"
  LOCAL_VENDA: "MERCADO LIVRE"
  NUM: "172"
  NUM_COBRANCA: "172"
  OBS_CLIENTE: "o.s 109391 m envios"
  OBS_LOJA: ""
  PAGAMENTO1: ""
  PAIS: "Brasil"
  PAIS_COBRANCA: "Brasil"
  PARCEIRO: ""
  PEDIDO: "7825"
  RAZAO: ""
  RG: ""
  STATUS: "ENVIADO EXPEDIçãO"
  SUBTOTAL_DE_PRODUTOS: "560"
  TELEFONE: ""
  TELEFONE2: ""
  VALOR_COMISSAO: "195,20"
  VALOR_FRETE: "0"
  VALOR_PAGTO: "560,00"
  VENDEDOR_DO_MERCADOLIVRE: "ARENAVIDROS"}]