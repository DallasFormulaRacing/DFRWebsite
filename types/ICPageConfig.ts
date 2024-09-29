export interface Config {
  title: string;
  meetingTime: string;
  description: string;
  header: Header;
  projects: Project[];
  gallery: Gallery[];
  skills: Skills;
  newMembers: NewMembers;
}

export interface Header {
  image: string;
  lead: Lead;
}

export interface Lead {
  image: string;
  name: string;
  email: string;
  title: string;
  quote: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Gallery {
  source: string;
  alt: string;
}

export interface Skills {
  title: string;
  description: string;
  image: string;
}

export interface NewMembers {
  title: string;
  description: string;
  image: string;
  video?: string;
}
