import { gql } from 'apollo-angular';

export const getJob = gql`
  query {
    jobCollection(first: 1) {
      edges {
        node {
          id
          company
          jobTitle
          jobPostingDate
          role
          salaryRange
          workType
          country
          location
          experience
        }
      }
    }
  }
`;

export const getJobDetail = gql`
  query {
    jobCollection {
      edges {
        node {
          id
          company
          jobTitle
          jobPostingDate
          role
          salaryRange
          workType
          qualifications
          country
          location
          experience
          skills
          jobDescription
          responsibilities
        }
      }
    }
  }
`;
