import { Component, OnInit, Input, Output, EventEmitter, createPlatform } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Becario } from '../list-becarios/becario';
import { BecariosService } from '../../services/becarios.service';
declare var $: any;

@Component({
  selector: 'app-edit-becarios',
  templateUrl: './edit-becarios.component.html',
  styleUrls: ['./edit-becarios.component.css']
})
export class EditBecariosComponent implements OnInit {

  @Input() showForm: boolean = false;
  @Input() data: Becario = new Becario('', '', '', '', '', '', []);
  @Output() closeFormEmmitter = new EventEmitter<boolean>();
  @Output() closeFormEmmitterUpdate = new EventEmitter<boolean>();

  becarioForm: FormGroup = new FormGroup({});

  constructor(private becariosService: BecariosService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.becarioForm = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      puesto: new FormControl(''),
    })
  }

  closeModal() {
    this.showForm = false;
    this.closeFormEmmitter.emit();
  }

  // Actualianos el becario con los valores de nombre, apellidos y puesto y devolvemos un output 
  // diferente al de cierre de modal para indicar que debemos actualizar la vista
  update() {
    const id = $('#id').val();
    const nombre = $('#nombre').val();
    const apellidos = $('#apellidos').val();
    const puesto = $('#puesto').val();
    const data = {
      id: id,
      nombre: nombre,
      apellidos: apellidos,
      puesto: puesto
    }

    this.becariosService.replaceOrCreate(data).subscribe((res) => {
      if (res) {
        this.closeFormEmmitterUpdate.emit();
        alert(`Becario con id '${id}' ha sido actualizado correctamente.`);
      }
    }, (error) => {
      alert(`Ha ocurrido un error al intentar actualizar el becario con id '${id}'`)
    })
  }

}
