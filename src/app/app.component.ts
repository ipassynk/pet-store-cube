import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cubes: Array<{ color: string }>;
  bag: Array<{ color: string }> = [
    {color: 'blue'},
    {color: 'blue'},
    {color: 'yellow'},
    {color: 'yellow'},
    {color: 'red'},
    {color: 'red'},
    {color: 'red'}
  ];
  result: { blue: number; yellow: number; red: number };

  ngOnInit(): void {
    this.cubes = [];
  }

  pick() {
    const random = this.getRandomInt(0, this.bag.length - 1);
    const cube = this.bag[random];
    this.cubes.push(cube);
    if (this.cubes.length === 20) {
      this.calculateResult();
    }
  }

  startOver() {
    this.cubes = [];
    this.result = null;
  }

  private calculateResult() {
    this.result = this.cubes.reduce((acc, cube) => {
      acc[cube.color]++;
      return acc;
    }, {blue: 0, yellow: 0, red: 0});
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
