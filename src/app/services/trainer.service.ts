import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  //Get method for trainer
  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  //Set trainer
  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }
}
