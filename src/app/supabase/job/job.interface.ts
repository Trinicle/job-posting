export interface JobDetail {
  id: string;
  company: string;
  jobTitle: string;
  jobPostingDate: string;
  role: string;
  salaryRange: string;
  workType: string;
  qualifications: string;
  country: string;
  location: string;
  experience: string;
  skills: string;
  jobDescription: string;
  responsibilities: string;
}

export interface Job {
  id: string;
  company: string;
  jobTitle: string;
  jobPostingDate: string;
  role: string;
  salaryRange: string;
  workType: string;
  country: string;
  location: string;
  experience: string;
}

export interface JobEdge {
  node: Job;
}

export interface JobDetailEdge {
  node: JobDetail;
}

export interface JobConnection {
  edges: JobEdge[];
}

export interface JobDetailConnection {
  edges: JobDetailEdge[];
}

export interface JobCollectionResponse {
  jobCollection: JobConnection;
}

export interface JobDetailCollectionResponse {
  jobCollection: JobDetailConnection;
}
