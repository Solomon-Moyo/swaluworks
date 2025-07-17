import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  maxThumbnails: number = 5;
  selectedServiceImages: string[] = [];
  selectedImageIndex: number = 0;
  currentYear: number = new Date().getFullYear();

  services = [
    {
      title: 'Windows & Doors',
      description: 'Aluminium windows, sliding doors, pivot doors and more.',
      images: this.generateImages(1, 15),
    },
    {
      title: 'Gates & Fencing',
      description: 'Strong, stylish gates, fences, and palisade work.',
      images: this.generateImages(16, 30),
    },
    {
      title: 'Shopfronts & Custom Work',
      description:
        'Aluminium shopfronts, stacked doors, and custom aluminium projects.',
      images: this.generateImages(31, 44),
    },
  ];

  mobileBreakpoint = 768; // px
  screenWidth = window.innerWidth;

  @HostListener('window:resize', [])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  isMobileView(): boolean {
    return this.screenWidth <= this.mobileBreakpoint;
  }
  // Helper method
  generateImages(start: number, end: number): string[] {
    const images = [];
    for (let i = start; i <= end; i++) {
      images.push(`assets/gallery/swalu (${i}).jpg`);
    }
    return images;
  }
  description: any =
    'Established in 2018, Sfyso Welding and Aluminium Works is a privately owned South African company that is based in Welkom, Freestate.We are dedicated in making or manufacturing quality aluminium products like windows, doors, and all related products in the industry. We do home improvements in changing the old windows and doors putting in the new aluminium products to make an old house as good as new. All our customers are satisfied with our job. We use quality material on all our products and our pricing is also affordable to all classes of the community. We serve in and around South Africa, mostly in the Freestate. Our products are made from the high quality materials making our finished products high quality also. We make windows, garage doors, pivot doors, kitchen stable doors,normal sized doors, sliding doors and windows, folding or stacked doors, shopfronts, palise doors and all related products. If our customers need quotations they can visit us or call us to come to their homes and do measurements first and then give them quotation at free of charge';

  showWhatsApp = false;
  contactSectionTop = 0;
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollY = window.scrollY || document.documentElement.scrollTop;
  //   this.showWhatsApp = scrollY > 300;
  // }
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    const contactSection = this.elRef.nativeElement.querySelector('#contact');
    if (contactSection) {
      this.contactSectionTop = contactSection.offsetTop;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const buffer = 100; // optional: hide slightly before exact match

    this.showWhatsApp =
      scrollY > 300 && scrollY < this.contactSectionTop - buffer;
  }

  openImage(images: string[], index: number): void {
    this.selectedServiceImages = images;
    this.selectedImageIndex = index;
    this.preloadImages(images);
  }
  preloadImages(images: string[]) {
    images.forEach((imgUrl) => {
      const img = new Image();
      img.src = imgUrl;
    });
  }

  closeImage(): void {
    this.selectedServiceImages = [];
    this.selectedImageIndex = 0;
  }

  prevImage(): void {
    if (this.selectedServiceImages.length > 0) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.selectedServiceImages.length) %
        this.selectedServiceImages.length;
    }
  }

  nextImage(): void {
    if (this.selectedServiceImages.length > 0) {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.selectedServiceImages.length;
    }
  }
}
