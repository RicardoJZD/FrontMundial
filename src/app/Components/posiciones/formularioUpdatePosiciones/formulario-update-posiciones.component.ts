import { Component } from '@angular/core'
import { TablaPosiciones } from 'src/app/Models/TablaPosiciones/tabla-posiciones'
import { TablaPosicionesService } from 'src/app/Services/tablaPosiciones/tabla-posiciones.service'

@Component({
  selector: 'app-formulario-update-posiciones',
  templateUrl: './formulario-update-posiciones.component.html',
  styleUrls: ['./formulario-update-posiciones.component.css'],
})
export class FormularioUpdatePosicionesComponent {
  opcionSeleccionado: string = '0' // Iniciamos
  opcion: string = ''
  posiciones: any = []


  nombreEquipo : string  = ''
  infoSeleccionada:any
  pj:string = ''
  pg:string = ''
  pe:string = ''
  pp:string = ''
  gf:string = ''
  gc:string = ''
  pts:string = ''
  id:string=''
  equipoId:string = ''



  constructor(public tablaPosicionesServices: TablaPosicionesService) {}

  ngOnInit() {
    this.tablaPosicionesServices.obtenerPosiciones()
  }

  capturar() {
    this.opcion = this.opcionSeleccionado
  }

  
  editar(posicion:any){
    const info = posicion
    this.infoSeleccionada = (info[parseInt(this.opcion)-1])
    console.log(this.infoSeleccionada)

    
    this.nombreEquipo = this.infoSeleccionada.nombreEquipo
    this.id = this.infoSeleccionada.id
    this.pj = this.infoSeleccionada.pj
    this.pg = this.infoSeleccionada.pg
    this.pe = this.infoSeleccionada.pe
    this.pp = this.infoSeleccionada.pp
    this.gf =this.infoSeleccionada.gf
    this.gc= this.infoSeleccionada.gc
    this.pts =this.infoSeleccionada.puntos
    this.equipoId = this.infoSeleccionada.equipoId

  }

  enviarInfo(){
    let obj:TablaPosiciones = {
      id:parseInt(this.id),
      pj:parseInt(this.pj),
      pg:parseInt(this.pg),
      pe:parseInt(this.pe), 
      pp:parseInt(this.pp),
      gf:parseInt(this.gf),
      gc:parseInt(this.gc),
      puntos:parseInt(this.pts),
      equipoId:parseInt(this.equipoId)
    }
    console.log(obj)
    this.tablaPosicionesServices.actualizarPosciones(parseInt(this.id), obj).subscribe((data) => {
      this.tablaPosicionesServices.obtenerPosiciones()
      console.log("Se actualizo")
    })
  }
}
