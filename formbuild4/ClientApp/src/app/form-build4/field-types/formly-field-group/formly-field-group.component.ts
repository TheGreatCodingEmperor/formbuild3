import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuild4Service } from '../../services/form-build4.service';
export interface GroupAttributes {
  orientation: string
}
export class DefaultGroupAttributes implements GroupAttributes {
  orientation = 'horizontal';
}

@Component({
  selector: 'app-formly-field-group',
  templateUrl: './formly-field-group.component.html',
  styleUrls: ['./formly-field-group.component.css']
})
export class FormlyFieldGroupComponent extends FieldType implements OnInit, OnDestroy {
  /** @summary 廣播監聽器 選擇group */
  notifySelectGroupRef: Subscription;
  /** @summary 是否選擇此group */
  select = false;
  class = "";
  constructor(
    private formBuild4Service: FormBuild4Service
  ) {
    super();
  }

  ngOnInit() {
    this.notifyInit();
    if (!this.to.attributes) {
      this.to.attributes = new DefaultGroupAttributes as any;
    }
  }

  ngOnDestroy() {
    if (this.notifySelectGroupRef)
      this.notifySelectGroupRef.unsubscribe();
  }

  /** @summary 初始化 監聽廣播 */
  notifyInit() {
    /** @summary 監聽是否選擇此group */
    this.notifySelectGroupRef = this.formBuild4Service.notifySelectGroup.subscribe(
      res => {
        if (!res) return;
        if (res === this.field.key) {
          this.select = true;
        }
        else {
          this.select = false;
        }
      }
    );
  }

  /** @summary 對外廣播 選擇此group */
  selectGroup(e: any) {
    e.stopPropagation();
    console.log('select');
    this.formBuild4Service.notifySelectGroup.next(this.field.key);
  }

  /** 
   * @summary 此group內部元件群，是否可拖曳
   * @todo select = true 才能拖曳
   */
  get disableDrag() {
    return !this.select;
  }

  hover(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.class = "enter";

  }

  leave(event: any) {
    event.stopPropagation();
    event.preventDefault();
    this.class = "";
  }
}
