import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { catchError, map, Observable, throwError } from 'rxjs';
import { getJob, getJobDetail } from './job.query';
import {
  Job,
  JobCollectionResponse,
  JobDetail,
  JobDetailCollectionResponse,
} from './job.interface';
import { extractNodesOperator } from '../graphql/graphql-utils';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apollo = inject(Apollo);

  constructor() {}

  getJob(): Observable<Job> {
    return this.apollo
      .query<JobCollectionResponse>({
        query: getJob,
      })
      .pipe(
        extractNodesOperator<Job>(),
        map((j) => j[0]),
        catchError((error) => throwError(() => new Error(error)))
      );
  }

  getJobDetail(): Observable<JobDetail> {
    return this.apollo
      .query<JobDetailCollectionResponse>({
        query: getJobDetail,
      })
      .pipe(
        extractNodesOperator<JobDetail>(),
        map((j) => j[0]),
        catchError((error) => throwError(() => new Error(error)))
      );
  }
}
