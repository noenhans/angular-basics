import {defer, Observable} from 'rxjs';

export function asyncData(data: any): Observable<any> {
  return defer(() => Promise.resolve(data));
}
