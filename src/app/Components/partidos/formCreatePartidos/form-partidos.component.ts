import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Resultado } from 'src/app/Models/resultado/resultado';
import { ResultadoService } from 'src/app/Services/resultado/resultado.service';

@Component({
  selector: 'app-form-partidos',
  templateUrl: './form-partidos.component.html',
  styleUrls: ['./form-partidos.component.css']
})
export class FormPartidosComponent implements OnInit{
  form: FormGroup;

  constructor(private formbuilder:FormBuilder, private resultado:ResultadoService){
    this.form = this.formbuilder.group({
      id:0,
      gc:0,
      gf:0,
      numeroPartido:0,
      equipoId:0,
      nombreEquipo:""
    })
  }
  
  ngOnInit():void{

  }

  guardar():void{
    const resul: Resultado = {
      id:this.form.get('id')?.value,
      gf : this.form.get('gf')?.value,
      gc : this.form.get('gc')?.value,
      numeroPartido : this.form.get('numeroPartido')?.value,
      equipoId : this.form.get('equipoId')?.value,
      nombreEquipo:this.form.get('nombreEquipo')?.value,
    }
    this.resultado.guardarResultado(resul).subscribe(data => {
      console.log('Guardado')
      this.form.reset();
    })
  }
}
