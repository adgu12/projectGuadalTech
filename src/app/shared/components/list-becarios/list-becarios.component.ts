import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BecariosService } from '../../services/becarios.service';
import { Becario } from './becario'

@Component({
  selector: 'app-list-becarios',
  templateUrl: './list-becarios.component.html',
  styleUrls: ['./list-becarios.component.css']
})
export class ListBecariosComponent implements OnInit {

  public listBecarios = new Array<Becario>();

  constructor(private http: HttpClient, private becariosService: BecariosService) { }

  ngOnInit(): void {
    this.getBecarios();
  }

  getBecarios(): void {
    this.becariosService.getBecarios().subscribe(res => {
      this.listBecarios = res.map(item => {
        return new Becario(
          item.id,
          item.nombre,
          item.apellidos,
          item.puesto,
          item.horario,
          item.fechaalta,
          item.responsables
        );
      });
    });
  }

  deleteBecario(id: string): void {
    this.becariosService.deleteBecarios(id).subscribe(res => {
      if(res){
        alert(`Becario con id '${id}' ha sido eliminado correctamente.`);
        this.getBecarios();
      }
    })
  }

}
