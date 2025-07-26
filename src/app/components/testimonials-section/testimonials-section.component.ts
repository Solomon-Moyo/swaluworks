import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-testimonials-section',
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css',
})
export class TestimonialsSectionComponent {
  @ViewChild('testimonialSlider', { static: false }) sliderRef!: ElementRef;

  testimonials = [
    {
      name: 'Thabiso M., Welkom',
      date: 'June 3, 2025',
      image: 'https://image.pngaaa.com/325/9195325-middle.png',
      message:
        '“Sfyso Works replaced all my old steel windows with sleek aluminium frames — the house looks modern and feels brand new. Top-notch service!”',
    },
    {
      name: 'Mampho K., Johannesburg',
      date: 'May 21, 2025',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.DGrZMPxcoFPsj9ZunvCGgwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3',
      message:
        '“The team installed a beautiful pivot door and folding doors on our patio. They arrived on time, cleaned up after, and delivered exactly what they promised.”',
    },
    {
      name: 'Johan B., Welkom',
      date: 'April 30, 2025',
      image: 'https://image.pngaaa.com/325/9195325-middle.png',
      message:
        '“Professional and affordable. I loved how they explained each step. The garage door they installed works like a dream.”',
    },
    {
      name: 'Keletso N., Hennenman',
      date: 'March 18, 2025',
      image: 'https://image.pngaaa.com/325/9195325-middle.png',
      message:
        '“I wasn’t sure what kind of shopfront I needed, but they came, measured, designed, and installed — all within a week. Highly impressed.”',
    },
    {
      name: 'Dewald F, Kroonstad',
      date: 'February 9, 2025',
      image: 'https://image.pngaaa.com/325/9195325-middle.png',
      message:
        '“They built aluminium sliding doors for our church hall. Excellent craftsmanship and even better customer service.”',
    },
    {
      name: 'Zanele D., Pretoria',
      date: 'January 24, 2025',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.DGrZMPxcoFPsj9ZunvCGgwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3',
      message:
        '“Sfyso Welding turned our renovation around with beautiful new windows and doors. The quote was free and very fair.”',
    },
    {
      name: 'Daniel T., Welkom',
      date: 'December 11, 2024',
      image: 'https://image.pngaaa.com/325/9195325-middle.png',
      message:
        '“Reliable, fast, and friendly. I’ve used them three times now — they never disappoint.”',
    },
  ];

  scrollTestimonials(direction: number) {
    const container = this.sliderRef.nativeElement;
    const scrollAmount = container.offsetWidth * 0.6;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
}
