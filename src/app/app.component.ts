import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  listItem:any=[]
  
  onClick(index:any){
    if(index.value.length>0){
      this.listItem.push(index.value);
      index.value='';
    }
    
  }
  onDelete(deleteNote:any){
    if(confirm('Are you sure you want to delete the note')){
      this.listItem.splice(deleteNote,1)

    }
  }
}
