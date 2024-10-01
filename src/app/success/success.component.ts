import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
  standalone: true,
})
export class SuccessComponent {
  gifImage: string = '../../assets/images/1.gif';

  getGif() {
    const match = this.gifImage.match(/\d+/);
    const excludeNum = match ? parseInt(match[0], 10) : 0;

    let num;
    do {
      num = Math.floor(Math.random() * 3) + 1;
    } while (num === excludeNum);

    const newGif: string = `../../assets/images/${num}.gif`;
    this.gifImage = newGif;
  }

}
