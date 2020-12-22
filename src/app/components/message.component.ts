import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  form:FormGroup

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: this.fb.control('')
    })
  }

  makeGreetings() {
    const message = this.form.get('message').value
    console.info(message)
    this.router.navigate(['/card'], { queryParams: {message:message}})
  }
}
