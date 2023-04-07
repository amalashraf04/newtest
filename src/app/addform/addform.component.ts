import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent  implements OnInit {

  studentform: any = new FormGroup({
    'name': new FormControl(''),
    'age': new FormControl('')
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.api.addStudent(this.studentform.value).subscribe(res=>{
      console.log(res)
      alert('Data saved ')
    })
   // console.log(this.studentform.value)

  }

}
