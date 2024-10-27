import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[appIfExists]'
})
export class IfExistsDirective implements OnInit {

  constructor(private templateRef: TemplateRef<{ isLoggedIn: boolean }>, private viewConatinerRef: ViewContainerRef, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn() {
    this.authService.loggedIn$.subscribe((data) => {
      if (data) {
        console.log(data = false);
        this.viewConatinerRef.createEmbeddedView(this.templateRef, { isLoggedIn: data });
      }
      else {
        this.viewConatinerRef.clear();
      }

    })

  }
}
