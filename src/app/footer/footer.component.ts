import { Component, HostListener, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faGithub = faGithub

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.funcaoRolagem();
  }

  funcaoRolagem() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      document.getElementById('back-to-top')!.style.display = 'block';
    } else {
        document.getElementById('back-to-top')!.style.display = 'none';
    }
  }

  voltarTopo() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
