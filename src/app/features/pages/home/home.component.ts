import { Component } from '@angular/core';
import { VideoComponent } from "../../../shared/components/video/video.component";
import { TopicsComponent } from "../../../shared/components/topics/topics.component";
import { HeaderIconComponent } from "../../components/header-icon/header-icon.component";
import { MaterialsComponent } from "../../../shared/components/materials/materials.component";
import { CommentsComponent } from "../../components/comments/comments.component";

@Component({
  selector: 'app-home',
  imports: [VideoComponent, TopicsComponent, HeaderIconComponent, MaterialsComponent, CommentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
