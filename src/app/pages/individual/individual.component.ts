import { WebSocketService } from './../../services/web-socket.service';
import { ItensService } from './../../services/itens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  mostraInfo = true;
  obj:any = null;
  objId: string = "";
  variavel: any;
  constructor(private webSocketService: WebSocketService, private route: ActivatedRoute, private router: Router) { }
  msg:any = [];
  ngOnInit(): void {
    
    
    // this.webSocketService.listen().subscribe((data)=>{
    //   const temporario: any = data;
    //   this.variavel = temporario.result;
    //   console.log("teste",data)
    // })
   
    this.route.params.subscribe(params =>{
      this.objId = params['id'];
      
      this.webSocketService.emit('idPedido', this.objId ).then(res =>{
        this.webSocketService.listen(this.objId).subscribe((data)=>{
          const temporario: any = data;
          this.msg = temporario.result.rows;
          console.log("datona", this.msg)
        });
      }
        
      )
      
    } );
    
  
  }
  tiraEspaco(palavra: string){
    const result = palavra.split(" ").join("-");
    console.log(result)
    return result;
  }
  pedir(comida: string){
    this.webSocketService.emit('idPedido', this.objId )

    this.webSocketService.emit('msgReceived', {Mensagem: "Usuário fez pedido", Id_Produto: comida, Quem:"estabelecimento", Icone: 1, Id_Compra: this.objId});
    this.webSocketService.emit('msgReceived', {Mensagem: "Esperando estabelecimento confirmar pedido", Quem:"usuario",Icone:1, Id_Compra: this.objId});
    
  }
  cancelar(){
    this.webSocketService.emit('idPedido', this.objId )

    this.webSocketService.emit('msgReceived', {Mensagem: "Usuário deseja cancelar pedido", Quem:"estabelecimento",Icone:1, Cancelar: 'user', Id_Compra: this.objId})
    this.webSocketService.emit('msgReceived', {Mensagem: "Esperando estabelecimento cancelar", Quem:"usuario",Icone:1, Cancelar: 'user', Id_Compra: this.objId})
  }
}
