import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuild4Service } from '../../services/form-build4.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Guid } from 'guid-typescript';
import { ItemPoolService } from '../../services/item-pool.service';
import { MatDrawer } from '@angular/material';


@Component({
  selector: 'app-form-build4',
  templateUrl: './form-build4.component.html',
  styleUrls: ['./form-build4.component.css']
})
export class FormBuild4Component implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild("controlPanel",{static:true})controlPanel:MatDrawer;

  //#region 【notify】
  /** @summary 監聽器 有group 被選取/取消選取 */
  notifySelectGroupRef: Subscription;
  /** @summary 監聽器 有物件被 drop */
  notifyDropRef: Subscription;
  /** @summary 監聽器 控制元件屬性 */
  notifyItemControlRef: Subscription;
  /** @summary 過濾初始化廣播回音 */
  blockNotify = true;
  /** @summary 是否有group被選取  */
  select = false;
  //#endregion

  //#region 【item pool】
  /** @summary 可被拖曳進表單的元件庫 */
  itemPool = this.deepClone(this.itemPoolService.itemPool);
  //#endregion

  /** @summary 拖曳時連接的array */
  dropList = [
    'field2'
  ];

  //#region 【ngx-formly2】
  /** @summary 表單欄位控制器 */
  form2 = new FormGroup({});
  /** @summary ngx formly 表單結果 */
  model2 = {};
  /** @summary  */
  options2 = {};
  /** @summary formly 表單格子 */
  fields2: FormlyFieldConfig[] = [{
    key: 'email2',
    type: 'input',
    templateOptions: {
      label: 'Email address2',
      placeholder: 'Enter email',
      required: true,
    }
  },
  {
    key: 'email5',
    type: 'select',
    templateOptions: {
      label: 'Email address5',
      required: true,
      options: [
        { label: 123, value: 4 },
        { label: 1234, value: 5 }
      ]
    },

  },
  {
    key: 'group',
    type: 'group',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    },
    fieldGroup: [
      {
        key: 'email3',
        type: 'input',
        templateOptions: {
          label: 'Email address3',
          placeholder: 'Enter email',
          required: true,
        }
      }
    ]
  }];
  //#endregion


  //#region 【main】
  constructor(
    /** @summary formBuild4 廣播服務 */
    private formBuild4Service: FormBuild4Service,
    /** @summary formbuild4 元件庫服務 */
    private itemPoolService: ItemPoolService,
    /** @summary ngx-formly 動態產生表格元件 */
    private formlyFormBuilder: FormlyFormBuilder
    /** @summary 偵測頁面元件變動器 */,
    private cdref: ChangeDetectorRef
  ) {
  }

  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.notifyInit();
  }

  ngOnDestroy() {
    if (this.notifyDropRef)
      this.notifyDropRef.unsubscribe();
    if (this.notifySelectGroupRef)
      this.notifySelectGroupRef.unsubscribe();
  }
  //#endregion

  /** @summary 初始化 監聽廣播 */
  notifyInit() {
    /** 初始化屏蔽回音 */
    setTimeout(() => {
      this.blockNotify = false;
    }, 500);

    /** 監聽 drop */
    this.notifyDropRef = this.formBuild4Service.notifyDrop.subscribe(
      res => {
        if (!res || this.blockNotify) return;
        this.drop(res);
      }
    );

    /** @summary 監聽 選擇 group */
    this.notifySelectGroupRef = this.formBuild4Service.notifySelectGroup.subscribe(
      res => {
        if (!res || this.blockNotify) return;
        if (res === 'unselectAll') {
          this.dropList = ['field2'];
          this.select = false;
        }
        else {
          this.dropList = ['formlyform'];
          this.select = true;
        }
      }
    );

    this.notifyItemControlRef = this.formBuild4Service.notifyItemControl.subscribe(
      res=>{
        if(!res || this.blockNotify)return;
        this.controlPanel.open();
      }
    );
  }

  /** @summary 取消選取所有group */
  unselectAllGroup(event) {
    event.stopPropagation();
    console.log("unselect");
    this.formBuild4Service.notifySelectGroup.next('unselectAll');
  }

  /** @summary  */
  submit(model) {
    console.log(model);
  }

  /** @summary 拖曳時 build 物件 填入key、id */
  async setKeys(item: FormlyFieldConfig) {
    item.id = Guid.create().toString();
    item.key = Guid.create().toString();
    if (item.type == 'group') {
      this.dropList.push(item.key as string);
      this.formBuild4Service.notifyDropConnectionList.next(this.dropList);
    }
    if (item.fieldGroup) {
      for (let child of item.fieldGroup) {
        await this.setKeys(child);
      }
    }
  }

  /** @summary 拖曳 drop */
  async drop(event: CdkDragDrop<FormlyFieldConfig[]>) {
    let item = event.previousContainer.data[event.previousIndex];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else if (event.previousContainer.data === this.itemPool) {
      let newItem = this.deepClone(item);
      await this.setKeys(newItem);
      let build = [newItem];
      this.formlyFormBuilder.buildForm(this.form2, build, this.model2, this.options2);
      event.container.data.splice(event.currentIndex, 0, build[0]);
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  /** @summary 物件 deepClone */
  deepClone(item: object) {
    return JSON.parse(JSON.stringify(item));
  }

  get disableDrag(){
    return this.select;
  }
}
