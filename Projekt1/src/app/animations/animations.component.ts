import { Component } from '@angular/core';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']

})
export class AnimationsComponent implements AfterViewInit{

  @ViewChild("myCanvas")
  canvasRef: ElementRef<HTMLCanvasElement> = null as any;
  private ctx: CanvasRenderingContext2D = null as any;

  ngAfterViewInit(){
    this.ctx = this.canvasRef.nativeElement.getContext('2d') as any;
    var x = 0;
    setInterval(() => {
      this.ctx.clearRect(0, 0, 200, 200);
      this.drawCircle(x % 200);
      this.drawBorder(x % 200);
      x++;
    }, 25);
  }

  drawCircle(x:any) {
    this.ctx.beginPath();
    this.ctx.arc(x, 100, 10, 0, 2 * Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
  }

  drawBorder(x:any) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(200, 0);
    this.ctx.lineTo(200, 200);
    this.ctx.lineTo(0, 200);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  }

  toggelFunMode(){
    let funmode = document.getElementById("funmode");

    if(funmode){
      if(funmode.style.visibility == "visible"){
        funmode.style.visibility = "hidden";
      }
      else{
        funmode.style.visibility = "visible";
      }
    }

    let aidsbutton = document.getElementById("aidsbutton");
    let normalbutton = document.getElementById("normalbutton");

    console.log(aidsbutton, normalbutton);

    if(aidsbutton && normalbutton){
      if(aidsbutton.style.visibility == "visible"){
        normalbutton.style.visibility = "visible";
        aidsbutton.style.visibility = "hidden";
      }
      else{
        normalbutton.style.visibility = "hidden";
        aidsbutton.style.visibility = "visible";
      }
    }

  }
}

