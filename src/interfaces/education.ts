export interface Qualification {
  id: string;
  name: string;
}

export interface ClassOfDegree {
  id: string;
  name: string;
}

export interface Faculty {
  id: string;
  name: string;
}

export interface EducationBackground {
  id: string;
  classOfDegree: ClassOfDegree;
  qualification: Qualification;
  faculty: Faculty;
  graduationYear: string;
  createdAt: string;
}

export interface EducationGoal {
  id: string;
  qualification: Qualification;
  preferredDestinations: string[];
  interests: string[];
  faculty: Faculty;
}
