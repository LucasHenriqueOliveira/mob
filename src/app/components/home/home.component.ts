import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { RecuperaCadunicoService } from 'src/app/services/recupera-cadunico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: any;
  loading = false;

  constructor(private CadUnico: RecuperaCadunicoService, private notify: SnotifyService) {
    this.form = new FormGroup({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.compose([ Validators.required, Validators.pattern('^[0-9]*$')])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.CadUnico.post(this.form.value).subscribe(
      result => {
        this.loading = false;

        if (!result['status']) {
          this.notify.error(result['msg'], {timeout: 3000, showProgressBar: false });
        } else {
          // quando o status é TRUE, colocar a mensagem de sucesso
          // this.notify.success(result['message'], {timeout: 2000, showProgressBar: false });
        }
      },
      err => {
        this.loading = false;
        this.notify.error(err.error.error, {timeout: 3000, showProgressBar: false });
      }
    );
  }

}
