import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../Auth/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../iuser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogInvitationComponent } from '../dialog-invitation/dialog-invitation.component';
import { DialogAdminComponent } from '../dialog-admin/dialog-admin.component';
import { ApibieroService } from '../Serv/apibiero.service';


@Component({
    selector: 'app-dialog-login',
    templateUrl: './dialog-login.component.html',
    styleUrls: ['./dialog-login.component.scss']
})
    
export class DialogLoginComponent implements OnInit {
    @Input() user!:IUser;
    loginForm!:FormGroup;
    loggedUser: any;
    estConnecte!:boolean;
    sTitre!: string;
   

    constructor(
        private formBuilder: FormBuilder,
        private http : HttpClient,
        private route : Router,
        private authServ : AuthService,
        public dialogRef: MatDialogRef<DialogLoginComponent>,
        public dialog: MatDialog,
        private bieroServ: ApibieroService,
    ) { }
    
    /** Modèles d'expression régulière */
    courrielRegex = /^\S+$/;
    // passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   

    ngOnInit(): void {
        /** Forme et validation des données saisies */
        this.loginForm = this.formBuilder.group({
            courriel : ['', [Validators.required, Validators.pattern(this.courrielRegex)]],
            mot_passe : ['', []]
        })
        this.authServ.getTitre().subscribe(leTitre =>{
            this.sTitre = leTitre;
        })
    }

    /** Login */
    login():void{
        if (this.loginForm.valid && this.loginForm != null) {
            let data = this.loginForm.value;
            this.bieroServ.login(data).subscribe(res => {
                const user = res.data[0];
               
                let conn = false;
                if(this.loginForm.value.courriel==='admin' && this.loginForm.value.mot_passe === 'admin'){
                    sessionStorage.setItem("connecte","admin");
                    conn = true;
                    
                } else if (user) {
                    sessionStorage.setItem("connecte","true");
                    conn = user.courriel === this.loginForm.value.courriel && user.mot_passe === this.loginForm.value.mot_passe;
                    
                } else {
                    alert("Utilisateur non trouvé");
                    sessionStorage.setItem("connecte","false");
                    this.loginForm.reset();
                    this.route.navigateByUrl("/");
                }
        
                if (sessionStorage.getItem("connecte") === "true") {
                    //changer l'etat de la connexion dans le service
                    this.authServ.setConnexion(!this.estConnecte);
                             
                    this.loginForm.reset();
                    sessionStorage.setItem("id_usager", user.id_usager);
                    this.authServ.setTitre('Mon cellier');
                    this.route.navigateByUrl("/usager");
                    this.onNoClick();
                    
                } else if (sessionStorage.getItem("connecte") === "admin") {
                    //changer l'etat de la connexion dans le service
                    this.authServ.setConnexion(!this.estConnecte);
                    this.loginForm.reset();
                    this.authServ.setTitre('Admin');
                    this.route.navigateByUrl("/admin");
                    this.onNoClick();
                } 
            });
        } else {
            alert("Utilisateur non trouvé")
        }
    }

    openAdmin(): void {
        this.dialog.open(DialogAdminComponent, {
            width: '100%',
            maxWidth: '370px',
            maxHeight: '540px'
        }).afterClosed().subscribe(res=>{});
    }

    connect():boolean{
        return this.authServ.getConnexion();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
