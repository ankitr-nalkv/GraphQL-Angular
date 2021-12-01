import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class FetchListService {

  constructor(private apollo: Apollo) { }

  getAllIncidents(): any {
    return this.apollo.watchQuery({
      query: gql`{
        incidents {
          id
          subject
          owner
          description
          keywords
          link
        }
      }`
    }).valueChanges;
  }

  getIncidentById(id: string): any {
    return this.apollo.watchQuery({
      query: gql`
        query getSingleIncident($incidentID: Int!) {
          incident(id: $incidentID) {
            id
            subject
            owner
            description
            keywords
            link
          }
        }
      `,
      variables: {
        "incidentID": parseInt(id)
      }
    }).valueChanges;
  }
}
