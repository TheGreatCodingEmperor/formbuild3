import { Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuild4Service } from '../../services/form-build4.service';

@Component({
  selector: 'app-formly-field-group',
  templateUrl: './formly-field-group.component.html',
  styleUrls: ['./formly-field-group.component.css']
})
export class FormlyFieldGroupComponent extends FieldType implements OnInit, OnDestroy {
  /** 廣播監聽器 */
  notifySelectGroupRef: Subscription;
  /** 是否選擇此group */
  select = false;
  constructor(
    private formBuild4Service: FormBuild4Service
  ) {
    super();
  }

  ngOnInit() {
    this.notifyInit();
  }

  ngOnDestroy() {
    if (this.notifySelectGroupRef)
      this.notifySelectGroupRef.unsubscribe();
  }

  /** 初始化 監聽廣播 */
  notifyInit() {
    this.notifySelectGroupRef = this.formBuild4Service.notifySelectGroup.subscribe(
      res => {
        if (!res) return;
        if (res === this.field.key) {
          console.log("select")
          this.select = true;
        }
        else {
          this.select = false;
        }
      }
    );
  }

  /** 對外廣播 選擇此group */
  selectGroup(e:any) {
    e.stopPropagation();
    console.log(this.field.key);
    this.formBuild4Service.notifySelectGroup.next(this.field.key);
  }
}
