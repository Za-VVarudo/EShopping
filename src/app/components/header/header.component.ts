import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sliderImgUrls: string[] = [
    "/assets/Abigail_Williams.jpg",
    "/assets/1054828.png",
    "/assets/shaddoll.jpg"
  ]

  activeIndex: number = 0;

  onSliderPrevClick() : void {
    if (this.activeIndex > 0) this.activeIndex--;

    else this.activeIndex = this.sliderImgUrls.length - 1;
  }

  onSliderNextClick() : void {
    if (this.activeIndex < this.sliderImgUrls.length - 1) this.activeIndex++;

    else this.activeIndex = 0;
  }
}
