import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() maRoute!: string;
  @Input() label!: string;
  constructor() {}

  ngOnInit(): void {}
}
