import { Component } from '@angular/core';
import { Resultado } from 'src/app/Models/resultado/resultado';
import { ResultadoService } from 'src/app/Services/resultado/resultado.service';


@Component({
  selector: 'app-form-update-partidos',
  templateUrl: './form-update-partidos.component.html',
  styleUrls: ['./form-update-partidos.component.css']
})
export class FormUpdatePartidosComponent {
  opcionSeleccionado: string = '0' // Iniciamos
  opcion: string = ''
  resultados: any = []

  infoSeleccionada:any
  id:number = 0
  gf:number = 0
  gc:number = 0
  numeroPartido:number = 0
  equipoId:number = 0
  nombreEquipo:string = ''

  constructor(public resultadoService: ResultadoService){
  }

  ngOnInit() {
    this.resultadoService.obtenerResultado()
  }

  capturar() {
    this.opcion = this.opcionSeleccionado
  }

  editar(resultado:any){
    const resu = resultado
    this.infoSeleccionada = (resu[parseInt(this.opcion)-1])
    console.log(this.infoSeleccionada)

    this.nombreEquipo = this.infoSeleccionada.nombreEquipo
    this.id = this.infoSeleccionada.id
    this.gf = this.infoSeleccionada.gf
    this.gc = this.infoSeleccionada.gc
    this.numeroPartido = this.infoSeleccionada.numeroPartido
    this.equipoId = this.infoSeleccionada.equipoId
  }

  enviarInfo(){
    let obj:Resultado = {
      id:this.id,
      gf:this.gf,
      gc:this.gc,
      numeroPartido:this.numeroPartido, 
      equipoId:this.equipoId,
      nombreEquipo: this.nombreEquipo
    }
    console.log(obj)
    this.resultadoService.actualizarResultados(this.id, obj).subscribe((data) => {
      this.resultadoService.obtenerResultado()
      console.log("Se actualizo")
    })
  }

}
