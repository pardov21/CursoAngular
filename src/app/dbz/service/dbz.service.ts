import { character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {


    public characters: character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];


    addCharacter(character: character): void {

        const newCharacter: character = {id: uuid(), ...character}

        this.characters.push(character);
    }

    // onDeleteCharacter(index: number): void {
    // this.characters.splice(index, 1);}
   deleteCharacterById(id:string){ 
    this.characters = this.characters.filter(character => character.id !== id)
   }


}