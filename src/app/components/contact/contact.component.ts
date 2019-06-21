import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  route = 'success';
  loading = false;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
   
  }
  
  onSubmit(){
      this.myForm.reset();
  }
  
  submit(){
    this.loading = true
    this.http.post('https://dna-email-sender.herokuapp.com/postData',{
      "name": this.myForm.get('name').value,
      "email": this.myForm.get('email').value,
      "message": this.myForm.get('message').value,
      "phone": this.myForm.get('phone').value
    }).subscribe( data => {
      console.log('Data successfully sent ', data)
      this.route = 'success'
      setTimeout(() => {
        this.loading = false;
        this.router.navigate([this.route]);
      }
      , 1000);
      
    }, error => {
      console.log('Error ', error)
      this.route = 'error'
      setTimeout(() => {
        this.loading = false;
        this.router.navigate([this.route])
      }
      , 1200);
    });

  }

}


