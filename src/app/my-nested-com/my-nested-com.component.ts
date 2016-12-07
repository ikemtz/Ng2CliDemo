import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { IBlog } from '../IBlog';

@Component({
  selector: 'app-my-nested-com',
  templateUrl: './my-nested-com.component.html',
  styleUrls: ['./my-nested-com.component.less'],
  providers: [BlogsService]
})
export class MyNestedComComponent implements OnInit {
  private highlightedBlogs: IBlog[];
  private regularBlogs: IBlog[];
  constructor(private blogService: BlogsService) {
    this.highlightedBlogs = [];
    this.regularBlogs = [];
  }

  ngOnInit() {
    this.blogService
      .GetBlogsResponse()
      .then(resp => {
        console.log(JSON.stringify(resp));
        resp.forEach((val: IBlog, index: number, array: IBlog[]): void => {
          if (val.isHighlighted)
            this.highlightedBlogs.push(val);
          else
            this.regularBlogs.push(val);
        });
      });
  }

}
