import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApibieroService } from '../Serv/apibiero.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduit } from '../iproduit';



@Component({
    selector: 'app-dialog-modif-note',
    templateUrl: './dialog-modif-note.component.html',
    styleUrls: ['./dialog-modif-note.component.scss']
})
    
export class DialogModifNoteComponent implements OnInit {
    @Input() bouteille!: IProduit;
   
    modifierBouteilleNote!: any;
    
    rating: any = 0;
    starCount = 5;
    ratingArr: boolean[] = []; // true = solid star; false = empty star

    snackBarDuration = 1000;
 
    constructor(
        private bieroServ: ApibieroService,
        public dialogRef: MatDialogRef<DialogModifNoteComponent>,
        @Inject(MAT_DIALOG_DATA) public editData: IProduit,
        
    ) {

        // default to no rating, i.e. all empty stars
        this.ratingArr = Array(this.starCount).fill(false);
    }

    ngOnInit(): void {
    }

    onClick(i: number) {
        this.rating = i + 1;
        if (this.rating && this.editData) {
            const bouteilleAvecNote: any = {}; 
                
            bouteilleAvecNote.id_cellier = this.editData.id_cellier;
            bouteilleAvecNote.id_bouteille = this.editData.id_bouteille;
            bouteilleAvecNote.id_usager = this.editData.id_usager;
            bouteilleAvecNote.id_achats = this.editData.id_achats;
            bouteilleAvecNote.note = String(this.rating);
                
            this.bieroServ.ajouterNoteBouteille(bouteilleAvecNote).subscribe({
                next: (reponse) => {
                    this.dialogRef.close('mod');
                },
                error: (reponse) => {
                    this.dialogRef.close('mod');
                }
            });
        }
    }

    returnStar(i: number) {
        if (this.rating >= i + 1) {
            return 'star';
        } else {
            return 'star_border';
        }
    }

}
