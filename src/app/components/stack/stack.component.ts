import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  skills: any =  [
    { name: "C++"     , url: "assets/imgs/stack/c++.png" },
    { name: "Spring"  , url: "assets/imgs/stack/spring.png" },
    { name: ".NET"    , url: "assets/imgs/stack/dotnet.png" },
    { name: "Angular" , url: "assets/imgs/stack/angular.png" },
    { name: "Flutter" , url: "assets/imgs/stack/flutter.png" },
    { name: "SQL"     , url: "assets/imgs/stack/sql.jpg" },
    { name: "Nginx"   , url: "assets/imgs/stack/nginx.png" },
    { name: "HTML/CSS", url: "assets/imgs/stack/html.png" },
    { name: "Node"    , url: "assets/imgs/stack/node.png" },
    { name: "Firebase", url: "assets/imgs/stack/firebase.png" },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
