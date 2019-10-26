import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormControl, ReactiveFormModule } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.sass']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
