import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  septemberTotal: number = 0;
  octoberTotal: number = 0;
  novemberTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
this.newChart1();
this.newChart2();
this.setMonths();
  }

newChart1(){
  let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['setembro', 'Outubro', 'Novembro'],
        datasets: [{
          label: 'Dados apenas ilustrativos',
            data: [202050, 231319, 194123],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

newChart2(){
  let ctx2 = document.getElementById('myChart2');
  var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['setembro', 'Outubro', 'Novembro'],
      datasets: [{
        label: 'Dados apenas ilustrativos',
          data: [159, 288, 243],
      }],
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}})
}


setMonths(){
  let septemberAmount: number = 0;
  requestList.forEach(data => {
    if(data.DATA_PEDIDOS.startsWith('2020-09')){
    this.septemberTotal = Number(this.septemberTotal + data.VALOR_PAGTO)
    console.log(this.septemberTotal)
    }
   
})


}

}


const requestList = [{"PEDIDO":"7825","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"18:12:18","SUBTOTAL_DE_PRODUTOS":"560","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Prioritario","VALOR_FRETE":"0","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"01/10/2020","COD_ENVIO":"MEL00000095627769","OBS_CLIENTE":"o.s 109391 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"195,20","CUPOM_DESCONTO":"","DESCONTO":"0","ACRESCIMO_FORMA":"0","ID_CLIENTE":"4071","CLIENTE":"ramon perez","APELIDO":"PEREZREPAROSAUTOMOTIVOS","RG":"","CPF":"36189132812","EMAIL":"rperez.pcv8ht+2-ogi2toobtha4dembt@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"ramon perez","ENDERECO":"Rua Estevan Bozola 172","NUM":"172","CIDADE":"Socorro","ESTADO":"SP","CEP":"13960-000","COMPLEMENTO":"","BAIRRO":"Vila nova","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"560,00","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Rua Estevan Bozola 172","NUM_COBRANCA":"172","CIDADE_COBRANCA":"Socorro","ESTADO_COBRANCA":"SP","CEP_COBRANCA":"13960-000","COMPLEMENTO_COBRANCA":"","BAIRRO_COBRANCA":"Vila nova","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"ARENAVIDROS"},{"PEDIDO":"7827","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"19:02:18","SUBTOTAL_DE_PRODUTOS":"105,6","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Prioritario","VALOR_FRETE":"38,34","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"02/10/2020","COD_ENVIO":"MEL00000095604336","OBS_CLIENTE":"o.s 109389 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"12,67","CUPOM_DESCONTO":"","DESCONTO":"38,34","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7239","CLIENTE":"Dilmo amorim","APELIDO":"DILMOAMORIM","RG":"","CPF":"92216102504","EMAIL":"damorim.yy0h56+2-ogqydmobwgyztqmjx@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Dilmo Amorim","ENDERECO":"Jose Cezario Mendes","NUM":"122","CIDADE":"Maua","ESTADO":"SP","CEP":"09370-600","COMPLEMENTO":"Apartamento 1201","BAIRRO":"Vila noemia","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"105,60","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Jose Cezario Mendes","NUM_COBRANCA":"122","CIDADE_COBRANCA":"Maua","ESTADO_COBRANCA":"SP","CEP_COBRANCA":"09370-600","COMPLEMENTO_COBRANCA":"Apartamento 1201","BAIRRO_COBRANCA":"Vila noemia","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7829","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"19:58:14","SUBTOTAL_DE_PRODUTOS":"347,1","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Encomenda Normal","VALOR_FRETE":"59,94","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"02/10/2020","COD_ENVIO":"MEL00000095858569","OBS_CLIENTE":"o.s 109388 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"59,01","CUPOM_DESCONTO":"","DESCONTO":"59,94","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7241","CLIENTE":"Leicival Santos","APELIDO":"SYSTEM LPS","RG":"","CPF":"3307288571","EMAIL":"lsantos.jp3hds+2-ogqydmobxgi4tcnbs@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Leicival P Santos,  Bruna S .Serra,  Selma P. Santos,  Lazaro P. Santos.","ENDERECO":"R. Manaus","NUM":"96","CIDADE":"Simoes Filho","ESTADO":"BA","CEP":"43700-000","COMPLEMENTO":"Lot: Jardim Sao Joao de Deus - Casa de Cima (1andar)","BAIRRO":"Quilometro 25","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"347,10","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"R. Manaus","NUM_COBRANCA":"96","CIDADE_COBRANCA":"Simoes Filho","ESTADO_COBRANCA":"BA","CEP_COBRANCA":"43700-000","COMPLEMENTO_COBRANCA":"Lot: Jardim Sao Joao de Deus - Casa de Cima (1andar)","BAIRRO_COBRANCA":"Quilometro 25","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7831","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"22:10:48","SUBTOTAL_DE_PRODUTOS":"316","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"","VALOR_FRETE":"70","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"","COD_ENVIO":"","OBS_CLIENTE":"o.s 109434  nao embalar/ enviar nosso carro - OS 109434 / 109474 / 7831 / 7927 - ENTREGUE DIA 05/10 - MOT. FRANCISCO.","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"37,92","CUPOM_DESCONTO":"","DESCONTO":"0","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7243","CLIENTE":"jose braga","APELIDO":"PAPONTA","RG":"","CPF":"1029173885","EMAIL":"jbraga.pzph9f+2-ogqydmojzgu4dcobz@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"11962946095","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"","ENDERECO":"Rua Verissimo","NUM":"230","CIDADE":"Sao Paulo","ESTADO":"SP","CEP":"03817-180","COMPLEMENTO":"oficina","BAIRRO":"Parque Cisper","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"316,00","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Rua Verissimo","NUM_COBRANCA":"230","CIDADE_COBRANCA":"Sao Paulo","ESTADO_COBRANCA":"SP","CEP_COBRANCA":"03817-180","COMPLEMENTO_COBRANCA":"oficina","BAIRRO_COBRANCA":"Parque Cisper","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7833","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"22:17:21","SUBTOTAL_DE_PRODUTOS":"513,36","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"AM / RO","VALOR_FRETE":"300","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"02/10/2020","COD_ENVIO":"PACIFICO LOG - (11) 4240-3100 / (11) 2303 - 4022 NF 5363","OBS_CLIENTE":"o.s 109400 transportadora","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"87,27","CUPOM_DESCONTO":"","DESCONTO":"0","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7245","CLIENTE":"Lisandro Bueno","APELIDO":"BULI1879530","RG":"","CPF":"93227108020","EMAIL":"lbueno.rgcy92k+2-ogqydmobzge4tqmzu@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"92994605392","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Lisandro Bueno","ENDERECO":"Bairro - Galo Da Serra 2 Av - Onça Pintada","NUM":"23","CIDADE":"Presidente Figueiredo","ESTADO":"AM","CEP":"69735-000","COMPLEMENTO":"Em Frente Ao Cemiterio Municipal ( Casa De Esquina)","BAIRRO":"Centro","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"813,36","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Bairro - Galo Da Serra 2 Av - Onça Pintada","NUM_COBRANCA":"23","CIDADE_COBRANCA":"Presidente Figueiredo","ESTADO_COBRANCA":"AM","CEP_COBRANCA":"69735-000","COMPLEMENTO_COBRANCA":"Em Frente Ao Cemiterio Municipal ( Casa De Esquina)","BAIRRO_COBRANCA":"Centro","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"ARENAVIDROS"},{"PEDIDO":"7835","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"22:46:28","SUBTOTAL_DE_PRODUTOS":"93,9","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Encomenda Normal","VALOR_FRETE":"43,9","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"01/10/2020","COD_ENVIO":"MEL00000095602483","OBS_CLIENTE":"o.s 109387 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"16,27","CUPOM_DESCONTO":"","DESCONTO":"43,9","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7247","CLIENTE":"manoel g fernandes fernandes","APELIDO":"FEMA5733537","RG":"","CPF":"5679567920","EMAIL":"mfernan.y4mntq+2-ogqydmobzgu4tonbw@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Manoel Fernandes","ENDERECO":"Eugenio volpine","NUM":"45","CIDADE":"Belo Horizonte","ESTADO":"MG","CEP":"31515-212","COMPLEMENTO":"","BAIRRO":"Sao Joao Batista (Venda Nova)","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"93,90","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Eugenio volpine","NUM_COBRANCA":"45","CIDADE_COBRANCA":"Belo Horizonte","ESTADO_COBRANCA":"MG","CEP_COBRANCA":"31515-212","COMPLEMENTO_COBRANCA":"","BAIRRO_COBRANCA":"Sao Joao Batista (Venda Nova)","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7837","DATA_PEDIDOS":"2020-09-30T00:00:00","HORA":"23:59:22","SUBTOTAL_DE_PRODUTOS":"192,09","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Encomenda Normal","VALOR_FRETE":"20,34","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"02/10/2020","COD_ENVIO":"351293498","OBS_CLIENTE":"o.s 109386 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"23,05","CUPOM_DESCONTO":"","DESCONTO":"20,34","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7249","CLIENTE":"Gabriela Fernandes","APELIDO":"FEGA3776330","RG":"","CPF":"98202332400","EMAIL":"gfernan.8hczfj+2-ogqydombrhaztinzt@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Gabriela Felipe Fernandes","ENDERECO":"Avenida Zumbi Dos Palmares","NUM":"11","CIDADE":"Marica","ESTADO":"RJ","CEP":"24936-530","COMPLEMENTO":"Qudra 69 Lote 11","BAIRRO":"Barroco (Itaipuaçu)","PAIS":"Brasil","DATA_PAGAMENTO":"30/09/2020","VALOR_PAGTO":"192,09","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Avenida Zumbi Dos Palmares","NUM_COBRANCA":"11","CIDADE_COBRANCA":"Marica","ESTADO_COBRANCA":"RJ","CEP_COBRANCA":"24936-530","COMPLEMENTO_COBRANCA":"Qudra 69 Lote 11","BAIRRO_COBRANCA":"Barroco (Itaipuaçu)","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7591","DATA_PEDIDOS":"2020-09-26T00:00:00","HORA":"08:43:06","SUBTOTAL_DE_PRODUTOS":"192,19","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Encomenda Normal","VALOR_FRETE":"48,84","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"29/09/2020","COD_ENVIO":"7,143E+12","OBS_CLIENTE":"o.s 109256 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"32,67","CUPOM_DESCONTO":"","DESCONTO":"20,94","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7029","CLIENTE":"Mauricio Gois","APELIDO":"GOMA1061415","RG":"","CPF":"6518733390","EMAIL":"mgois.ry1cqm+2-ogqydmmbxgm4domrr@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Francisco Mauricio Teixeira Go","ENDERECO":"RUA ANTONIO PEREIRA DA SILVA","NUM":"455","CIDADE":"Jucas","ESTADO":"CE","CEP":"63580-000","COMPLEMENTO":"SALAO DE CABELEREIRO","BAIRRO":"VILA SAO PEDRO DO NORTE","PAIS":"Brasil","DATA_PAGAMENTO":"26/09/2020","VALOR_PAGTO":"220,09","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"RUA ANTONIO PEREIRA DA SILVA","NUM_COBRANCA":"455","CIDADE_COBRANCA":"Jucas","ESTADO_COBRANCA":"CE","CEP_COBRANCA":"63580-000","COMPLEMENTO_COBRANCA":"SALAO DE CABELEREIRO","BAIRRO_COBRANCA":"VILA SAO PEDRO DO NORTE","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"ARENAVIDROS"},{"PEDIDO":"7593","DATA_PEDIDOS":"2020-09-26T00:00:00","HORA":"08:48:22","SUBTOTAL_DE_PRODUTOS":"467,14","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"RN, CE, PI, MA, PA, AP","VALOR_FRETE":"280","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"30/09/2020","COD_ENVIO":"PACIFICO LOG - (11) 4240-3100 / (11) 2303 - 4022 NF 5336","OBS_CLIENTE":"o.s 109259 transportadora","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"56,06","CUPOM_DESCONTO":"","DESCONTO":"0","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7031","CLIENTE":"Mira Regis","APELIDO":"REGISMIRA","RG":"","CPF":"27478815200","EMAIL":"mregis.xwzr2k+2-ogqydkojzgu4domjz@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"miracy Pereira","ENDERECO":"travessa joao gato","NUM":"520","CIDADE":"Oriximina","ESTADO":"PA","CEP":"68270-000","COMPLEMENTO":"","BAIRRO":"sao jose operario","PAIS":"Brasil","DATA_PAGAMENTO":"26/09/2020","VALOR_PAGTO":"747,14","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"travessa joao gato","NUM_COBRANCA":"520","CIDADE_COBRANCA":"Oriximina","ESTADO_COBRANCA":"PA","CEP_COBRANCA":"68270-000","COMPLEMENTO_COBRANCA":"","BAIRRO_COBRANCA":"sao jose operario","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"ARENAVIDROS"},{"PEDIDO":"7595","DATA_PEDIDOS":"2020-09-26T00:00:00","HORA":"09:55:24","SUBTOTAL_DE_PRODUTOS":"281,99","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"","VALOR_FRETE":"0","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"","COD_ENVIO":"","OBS_CLIENTE":"o.s 109264 nao embalar / instalaçao na loja 28/09\r\nfavor enviar hoje 26/09","OBS_LOJA":"","STATUS":"INSTALADO LOJA","PARCEIRO":"","VALOR_COMISSAO":"33,84","CUPOM_DESCONTO":"","DESCONTO":"0","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7033","CLIENTE":"danrley rocha","APELIDO":"RODA1919703","RG":"","CPF":"","EMAIL":"drocha.gwv7qz+2-ogqydmmbxhaztqmzr@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"11979519590","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"","ENDERECO":"","NUM":"-","CIDADE":"","ESTADO":"","CEP":"","COMPLEMENTO":"","BAIRRO":"Centro","PAIS":"","DATA_PAGAMENTO":"26/09/2020","VALOR_PAGTO":"281,99","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"","NUM_COBRANCA":"","CIDADE_COBRANCA":"","ESTADO_COBRANCA":"","CEP_COBRANCA":"","COMPLEMENTO_COBRANCA":"","BAIRRO_COBRANCA":"","PAIS_COBRANCA":"","VENDEDOR_DO_MERCADOLIVRE":"GENIOS.SHOP"},{"PEDIDO":"7597","DATA_PEDIDOS":"2020-09-26T00:00:00","HORA":"10:22:19","SUBTOTAL_DE_PRODUTOS":"167,58","IMPOSTOS":"0","LOCAL_VENDA":"MERCADO LIVRE","FRETE":"Encomenda Normal","VALOR_FRETE":"94,84","PAGAMENTO1":"","FORMA_PAGAMENTO_ESCOLHIDA":"Mercado Pago","DATA_ENVIOS":"29/09/2020","COD_ENVIO":"350739185","OBS_CLIENTE":"o.s 109265 m envios","OBS_LOJA":"","STATUS":"ENVIADO EXPEDIçãO","PARCEIRO":"","VALOR_COMISSAO":"28,49","CUPOM_DESCONTO":"","DESCONTO":"59,94","ACRESCIMO_FORMA":"0","ID_CLIENTE":"7035","CLIENTE":"Luiz Sergio Rocha","APELIDO":"LUIZSERGIO_ROC","RG":"","CPF":"72352132720","EMAIL":"lrocha.7bpkc6+2-ogqydmmbygi3dmnjv@mail.mercadolivre.com","TELEFONE":"","TELEFONE2":"","RAZAO":"","CNPJ":"","IE":"","DESTINATARIO":"Luiz Sergio","ENDERECO":"Rua Emilia De A Braga","NUM":"211","CIDADE":"Ipiabas","ESTADO":"RJ","CEP":"27170-000","COMPLEMENTO":"Cidade De Barra Do Pirai","BAIRRO":"Distrito de Ipiabas","PAIS":"Brasil","DATA_PAGAMENTO":"26/09/2020","VALOR_PAGTO":"202,48","FORMA_PAGAMENTO_PAGA":"Mercado Pago","ENDERECO_COBRANCA":"Rua Emilia De A Braga","NUM_COBRANCA":"211","CIDADE_COBRANCA":"Ipiabas","ESTADO_COBRANCA":"RJ","CEP_COBRANCA":"27170-000","COMPLEMENTO_COBRANCA":"Cidade De Barra Do Pirai","BAIRRO_COBRANCA":"Distrito de Ipiabas","PAIS_COBRANCA":"Brasil","VENDEDOR_DO_MERCADOLIVRE":"ARENAVIDROS"}]