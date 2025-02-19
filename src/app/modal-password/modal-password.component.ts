import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  verificarCredenciales() {
    const usuarioCorrecto = 'usuario123';
    const passwordCorrecta = '12345';

    if (this.usuario === usuarioCorrecto && this.password === passwordCorrecta) {
      this.modalCtrl.dismiss(true); 
    } else {
      alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
  }
}
