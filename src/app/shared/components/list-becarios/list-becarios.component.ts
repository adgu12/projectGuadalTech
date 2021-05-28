import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BecariosService } from '../../services/becarios.service';
import { Becario } from './becario'

@Component({
  selector: 'app-list-becarios',
  templateUrl: './list-becarios.component.html',
  styleUrls: ['./list-becarios.component.css']
})
export class ListBecariosComponent implements OnInit {

  public listBecarios = new Array<Becario>();
  showFormEdit: boolean = false;
  becarioSelected: Becario = new Becario('', '', '', '', '', '', []);

  constructor(private http: HttpClient, private becariosService: BecariosService) { }

  ngOnInit(): void {
    this.getBecarios();
  }

  // Obtenemos los becarios mediante el servicio GET creando un modelo
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
    }, (error) => {
      'Ha ocurrido un error al obtener el listado de becarios'
    });
  }

  // Eliminamos becario mediante el servicio por ID
  deleteBecario(id: string): void {
    this.becariosService.deleteBecarios(id).subscribe((res) => {
      if (res) {
        alert(`Becario con id '${id}' ha sido eliminado correctamente.`);
        this.getBecarios();
      }
    }, (error) => {
      alert(`Ha ocurrido un error al eliminar Becario con id '${id}'`);
    })
  }

  // Abrimos modal de edición y seteamos el becario seleccionado para enviarlo al componente de edición
  editBecario(becario: Becario) {
    this.becarioSelected = becario;
    this.showFormEdit = true;
  }

  // Cerramos el modal y le añadimos un parámetro opcional para saber si debemos de refrescar el listado
  closeModal(refreshList?: boolean) {
    this.showFormEdit = false;
    if (refreshList) {
      this.getBecarios();
    }
  }

}
