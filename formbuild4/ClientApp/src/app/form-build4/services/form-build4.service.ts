import { Injectable } from '@angular/core';
import { Behavior } from 'popper.js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormBuild4Service {
  /** 廣播Drop */
  notifyDrop = new  BehaviorSubject<any>(null);
  /** 廣播更新拖曳連結清單 */
  notifyDropConnectionList = new BehaviorSubject<any>(null);
  /** 廣播通知 控制此物件 */
  notifyItemControl = new BehaviorSubject<any>(null);
  /** 廣播通知 選取Group */
  notifySelectGroup = new BehaviorSubject<any>(null);
  constructor() { 

  }
}
