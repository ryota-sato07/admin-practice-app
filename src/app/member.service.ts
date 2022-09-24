import { Injectable }              from '@angular/core';
import { Observable, of }          from 'rxjs';
import { Member }                  from './member';
import { MessageService }          from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEMBERS }                 from './mock-members';
import { catchError, tap }         from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http:           HttpClient,
    private messageService: MessageService
  ) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MessageService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }

  deleteMember(member: Member | number): Observable<Member> {
    const id  = typeof member === 'number' ? member : member.id;
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`社員データ(id=${id})を削除しました`)),
        catchError(this.handleError<Member>('deleteMember'))
      );
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} 失敗: ${error.message}`);

      return of(result as T);
    }
  }
}
