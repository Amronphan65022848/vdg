import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-current-activities-carousal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-activities-carousal.component.html',
  styleUrl: './current-activities-carousal.component.css'
})
export class CurrentActivitiesCarousalComponent implements AfterViewInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef;

  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    const sliderElement = this.slider.nativeElement;

    sliderElement.addEventListener('mousedown', (e: MouseEvent) => {
      e.preventDefault();
      this.startX = e.pageX - sliderElement.offsetLeft;
      this.scrollLeft = sliderElement.scrollLeft;
      sliderElement.classList.add('active');
    });

    sliderElement.addEventListener('mouseleave', () => {
      sliderElement.classList.remove('active');
    });

    sliderElement.addEventListener('mouseup', () => {
      sliderElement.classList.remove('active');
    });

    sliderElement.addEventListener('mousemove', (e: MouseEvent) => {
      if (!sliderElement.classList.contains('active')) return;
      const x = e.pageX - sliderElement.offsetLeft;
      const walk = (x - this.startX) * 2; // ความเร็วในการเลื่อน
      sliderElement.scrollLeft = this.scrollLeft - walk;
    });

    sliderElement.addEventListener('touchstart', (e: TouchEvent) => {
      this.startX = e.touches[0].pageX - sliderElement.offsetLeft;
      this.scrollLeft = sliderElement.scrollLeft;
    });

    sliderElement.addEventListener('touchmove', (e: TouchEvent) => {
      const x = e.touches[0].pageX - sliderElement.offsetLeft;
      const walk = (x - this.startX) * 2; // ความเร็วในการเลื่อน
      sliderElement.scrollLeft = this.scrollLeft - walk;
    });
  }
}
