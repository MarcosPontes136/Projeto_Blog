import { Component,OnInit,} from '@angular/core';
import { ArquivoPDFService } from '../service/arquivoPDF.service';
import { MudaClasseService } from '../service/mudaClasse.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private acaoSubscription!: Subscription;
  isActive!: boolean;
  isHome: boolean = true;

  caminhoDoPDF!: string;

  constructor(
    private arquivoService: ArquivoPDFService,
    private mudaClasseService: MudaClasseService
  ) {
  }

  ngOnInit(): void {
    this.acaoSubscription = this.mudaClasseService.acao$.subscribe((estado: boolean) => {
      this.isActive = estado;
    });
  }

  mostraPDF(): void{
    this.arquivoService.obterPDF().subscribe(pdf => {
      this.pegaPDF(pdf);
    })
  }

  private pegaPDF(pdfBlob: Blob): void{
    const file = new Blob([pdfBlob], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  }

  scrollDown(): void {
    const banner = document.querySelector('.banner');
    document.body.scrollTop = 1000; // Safari
    document.documentElement.scrollTop = 1000; // Chrome, Firefox, IE e Opera
  }

}
