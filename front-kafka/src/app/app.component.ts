import { Component } from '@angular/core';
import { Vehiculo } from './models/vehiculo';
import { VehiculoService } from './services/vehiculo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'front-kafka';
  vehiculo: Vehiculo = new Vehiculo;
  vehiculos: Vehiculo[] = [];// La lista de vehiculos 
  



  constructor(private vehiculoServices: VehiculoService) { }


  ngOnInit() {
    this.get();
    this.vehiculo.totalPagar="0";
  }


  get(){
    this.vehiculoServices.get().subscribe(result => {
      this.vehiculos = result;
    });
  }

  postVehiculo() {  
    this.vehiculoServices.post(this.vehiculo).subscribe(data => {
      console.log('vehiculo creado:', data);
    alert("Vehiculo Registrado con exito !");
    this.clear();
    this.get();
    
    });
  }


  clear(){
    this.vehiculo= new Vehiculo;
  } 

  precios(){


      if (this.vehiculo.tipoVehiculo === "carro") 
      {
        this.vehiculo.totalPagar="2000";

      } 
      else
      {
        this.vehiculo.totalPagar="1000";
      }

    
  }


}
