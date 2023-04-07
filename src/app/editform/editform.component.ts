import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit  {

  editform: any = new FormGroup({
    'name': new FormControl(''),
    'age': new FormControl('')
  })

  constructor(private api :ApiService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   // console.log(this.router.snapshot.params['id'])
        this.api.getCurrentdata(this.router.snapshot.params['id']).subscribe((result=>{
          this.editform = new FormGroup({
            'name': new FormControl((result as any).name),
            'age': new FormControl((result as any).age)
          })
        }))
  }

 
  onupdate(){
   // console.log(this.router.snapshot.params['id'],"success")
    this.api.updateStudent(this.editform.value,this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result)
    })
  }
}
