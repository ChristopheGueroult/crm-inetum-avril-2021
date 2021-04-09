import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/**
 * ce service est utilisé pour incrémenter le numéro de version
 */
@Injectable({
  providedIn: 'root',
})
export class VersionService {
  /**
   * un Behavior qui sert pour initialiser le numéro de version et incrémenter
   */
  private version$ = new BehaviorSubject<number>(1);
  constructor() {}

  /**
   * getter qui retourne mon BehaviorSubject
   */
  get version(): BehaviorSubject<number> {
    return this.version$;
  }

  /**
   * cette méthode est appelée dans nav component pour incrémenter le numéro de version
   * @example
   * <button (click)="increment()">increment</button>
   */
  public increment(): void {
    this.version$.next(this.version$.value + 1);
  }
}
