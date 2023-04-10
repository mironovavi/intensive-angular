import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  priceForm = this.fb.group({
    name: ["", Validators.required],
    phone: ["", Validators.required],
    car: ["", Validators.required],
  })

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      gear: "Полный",
      engine: 5.2,
      years: 2019
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      gear: "Полный",
      engine: 6.2,
      years: 2017
    },
    {
      image: "3.png",
      name: "Ferrari California",
      gear: "Полный",
      engine: 3.9,
      years: 2010
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      gear: "Полный",
      engine: 4.0,
      years: 2010
    },
    {
      image: "5.png",
      name: "Audi R8",
      gear: "Полный",
      engine: 5.2,
      years: 2018
    },
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      gear: "Полный",
      engine: 2.0,
      years: 2019
    },
    {
      image: "7.png",
      name: "Maserati Quattroporte",
      gear: "Полный",
      engine: 3.0,
      years: 2018
    },
    {
      image: "8.png",
      name: "Dodge Challanger",
      gear: "Полный",
      engine: 6.4,
      years: 2019
    },
    {
      image: "9.png",
      name: "Nissan GT-R",
      gear: "Полный",
      engine: 3.8,
      years: 2019
    },
  ];



  constructor(private fb: FormBuilder){

  }

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({//при нажатии  на кнопку забронировать, в поле ввода автоматически добавлется название авто
        car: car.name});
    }
  }

    trans: any;
    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
      this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
    }

    bgPos: any;
    @HostListener('document:scroll', ['$event'])
    onScroll() {
      this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
    }
  
  onSubmit(){
    if(this.priceForm.valid){
      alert("Спасибо за заявку, мы свяжемся с Вами в ближайшее время");
      this.priceForm.reset();
    }
  }
}; 