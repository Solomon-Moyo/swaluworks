import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from "../components/services/services";
import { TestimonialsSectionComponent } from "../components/testimonials-section/testimonials-section.component";
@Component({
  selector: 'app-home',
  imports: [CommonModule, Services, TestimonialsSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  selectedServiceImages: string[] = [];
  selectedImageIndex: number = 0;
  currentYear: number = new Date().getFullYear();
  // services = [
  //   {
  //     title: 'Aluminium Fabrication',
  //     description:
  //       'Doors, windows, balustrades, and shopfronts — built to endure and impress.',
  //     images: [
  //       'https://5.imimg.com/data5/SELLER/Default/2021/12/OP/OF/QR/49521759/aluminium-door-fabrication-works-500x500-500x500.jpg',
  //       'https://tse2.mm.bing.net/th/id/OIP.u4DPLI7ZmnYwX_R_rjXaMgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
  //       'https://3.imimg.com/data3/IR/KH/MY-3018077/aluminum-door-500x500.jpg',
  //       'https://tse1.mm.bing.net/th/id/OIP.kJqqySO2pv8L_9FvJoInBwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
  //       'https://s3.ap-northeast-2.wasabisys.com/canterburybalustrade/2022/09/Canterbury-Balustrade-Aluminium-Framed-Windsor-with-motif-773x1030.jpg',
  //       'https://prestigealuminium.co.uk/wp-content/uploads/2021/12/Aluminium-Shopfronts-Nottingham.jpg',
  //     ],
  //   },
  //   {
  //     title: 'Welding Solutions',
  //     description:
  //       'From gate work to custom frames — we weld strength into every structure.',
  //     images: [
  //       'https://i.ytimg.com/vi/HHQ47gHIsdc/maxresdefault.jpg',
  //       'https://www.yogiemachinery.com/Content/uploads/2023205814/20230505114255f6fb1e392f314cdf96d0c88593538d5e.jpg',
  //       'https://tse1.explicit.bing.net/th/id/OIP.yG_VPrhpp-yMHlw6mfsLRgHaMn?rs=1&pid=ImgDetMain&o=7&rm=3',
  //     ],
  //   },
  //   {
  //     title: 'Repairs & Installations',
  //     description:
  //       'Onsite mobile repairs and seamless installations for home or business projects.',
  //     images: [
  //       'https://as1.ftcdn.net/v2/jpg/00/04/04/14/1000_F_4041414_TSuYJMSPFXdHc8ADwOQYOjdmxsAarFXA.jpg',
  //       'https://tse1.mm.bing.net/th/id/OIP.5XqW29fAUc6-j6h8qNu80wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
  //       'https://tse4.mm.bing.net/th/id/OIP.kJKd1WYwS_r7H03ruxwesAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  //     ],
  //   },
  // ];

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
      images: this.generateImages(31, 45),
    },
  ];

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
