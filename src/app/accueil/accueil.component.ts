import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { DialogInvitationComponent } from '../dialog-invitation/dialog-invitation.component';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
    loggedUser!:IUser;
    estConnecte!:boolean;
    sTitre!: string;
    

    constructor(
        private authServ: AuthService,
        public dialog: MatDialog,
        private router: Router,
        ) {
    }

    ngOnInit(): void {
            this.authServ.setTitre("Vino");
            this.authServ.statut().subscribe(bLogin=>{
            this.estConnecte = bLogin;
        })
        
        this.authServ.getTitre().subscribe(leTitre =>{
        this.sTitre = leTitre;
        })
    }


    /** Enregistrement */
    openRegister(): void {
        this.dialog.open(DialogRegisterComponent, {
            width: '90%',
            data: this.loggedUser
        })
        .afterClosed()
        .subscribe(res => {
        });
    }

    
    connect():boolean{
        return this.authServ.getConnexion();
    }

}

