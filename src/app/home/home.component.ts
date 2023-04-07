import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService :ApiService) { }

students:any =[]

  ngOnInit(): void {

    this.getData();

  }
   getData(){
    // this.apiService.getStudentList().subscribe( (res:any) =>{
    //   this.students = res
    // })
    this.apiService.getStudentList().subscribe(res=>{
      this.students =res
    })
  }
  editStudent(data:any){
    // this.apiService.updateStudent(data:any, id:any).subscribe(res=>{
    //   this.students =res
    // })
     
  }
  deleteStudent(id:any){
    this.apiService.deleteStudent(id).subscribe(res=>{
      this.students = res
      alert('Deleted Successfully!!!')
    })
  }
}