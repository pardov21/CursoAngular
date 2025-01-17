import { character } from './../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter : EventEmitter <character> = new EventEmitter();

  public character: character = {
    name:'',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0}
  }

}
