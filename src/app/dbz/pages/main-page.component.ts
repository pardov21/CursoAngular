import { character } from './../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/form/addCharacter.component';
import { DbzService } from '../service/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    standalone: true,
    imports: [CommonModule, ListComponent, AddCharacterComponent]
})

export class MainDbzComponent {

    constructor ( private dbzService : DbzService) {}

        get characters():character[] {
            return [...this.dbzService.characters];
        }
       
    onDeleteCharacter(id:string):void {
        this.dbzService.deleteCharacterById(id);
    }
    onNewCharacter(character: character):void{
        this.dbzService.addCharacter(character);
    }

}