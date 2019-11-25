import { Component } from "@angular/core";
import { RESUME } from "../services/resume.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.animation.css"]
})
export class AppComponent {
  title = "resume";
  resume = RESUME;
  sections;
  sectionElements;
  currentSection = 0;
  constructor() {
    this.sections = Object.keys(this.resume);
    document.onkeydown = (e) => {
      e = e || window.event;

      if (e.keyCode == 38) {
        this.previousPage();
      } else if (e.keyCode == 40) {
        this.nextPage();
      } else if (e.keyCode == 37) {
        this.showSection(3);
      } else if (e.keyCode == 39) {
        this.showSection(4);
      }
    };
  }
  ngAfterViewInit() {
    this.sectionElements = document.getElementsByTagName("section");

    this.showSection(0);
  }
  nextPage() {
    this.showSection(
      (this.currentSection==this.sectionElements.length-1) ? this.currentSection : this.currentSection+1
    )
  }
  previousPage() {
    this.showSection(
      (this.currentSection==0) ? 0 : this.currentSection-1
    )
  }
  showSection(number) {
    this.sectionElements[this.currentSection].style.opacity = "0";
    this.currentSection = number;
    this.sectionElements[this.currentSection].style.opacity = "1";
  }
}
