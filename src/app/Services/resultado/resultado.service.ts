import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from 'src/app/Models/resultado/resultado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  myAppurl = 'https://localhost:44352';
  myApiurl = '/api/resultados/';

  listaResultados!: Resultado[];

  constructor(private http: HttpClient){}

  obtenerResultado(){
    this.http.get(this.myAppurl+this.myApiurl).toPromise()
    .then(data => {
      this.listaResultados = data as Resultado[];
      console.log(data);
    })
  }
  
  guardarResultado(resultado:Resultado):Observable<Resultado>{
    return this.http.post<Resultado>(this.myAppurl+this.myApiurl,resultado)
  }

  actualizarResultados(id:number,resultado:Resultado):Observable<Resultado>{
    return this.http.put<Resultado>(this.myAppurl + this.myApiurl + id, resultado)
  }
  
  /*guardarResultado(resultado: Resultado): Observable<Resultado>{
    return this.httpClient.post<Resultado>(this.myAppurl+this.myApiurl, resultado);
  }

  obtenerResultados(){
    this.httpClient
    .get(this.myAppurl+this.myApiurl).toPromise().then(data)=>
    this.listaResultados = data as ResultadoList[];
    console.log(data);
  }

  constructor(private httpClient:HttpClient) {}

  //GetAll
  getResultado():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/resultados');
  }

  //GetResultadoById
  getResultadoById(id:number):Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/resultados/'+id);
  }

  //CrearResultado
  addResultado(data:any){
    return this.httpClient.post(this.url+'/resultados',data);
  }

  //updateResultados
  updateResultado(id:number|string,data:any){
    return this.httpClient.put(this.url+`/resultados/${id}`,data);
  }

  //deleteResultados
  deleteResultado(id:number){
    return this.httpClient.delete(this.url+`/resultados/${id}`);
  }*/
}
