import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;

  constructor(private route: ActivatedRoute, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res));
    //weiter machen hier
    // for (let i = 0; this.goals.lenght; i++) {
    //   window.alert(i);
    // }
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res );
  }

}
