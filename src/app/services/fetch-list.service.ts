import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { IncidentType } from '../interfaces/incident.interface';

const UPVOTE_POST = gql`
  mutation UpvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;
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

  updateIncident(id: string, incident: IncidentType) {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateincidentTopic($id: Int!, $incid: incidentInput) {
          updateIncident(id: $id, incid: $incid) {
            ...courseFields
          }
        }
        fragment courseFields on incident {
          id
          subject
          description
          keywords
          link
          owner
        }
      `,
      variables: {
        "id": id,
        "incid": incident
      }
    })
  }
}
