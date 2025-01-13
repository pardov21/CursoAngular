import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './counter.component.css'
})
export class CounterComponent{
    public counter: number =10;


    increaseBy(value: number):void {
      this.counter+=value
    }
    decreaseBy(value: number):void{
      this.counter-=value;
    }
    resertCounter(){
      this.counter = 10;
    }


}