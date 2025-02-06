export type User = {
  id: string;
  email: string;
  name: string;
  position: string;
  //posts: FormattedPost[];
};

export type Officer = {
  name: string;
  image?: string;
  positions?: string;
  section: string;
  year?: string;
  major?: string;
  email?: string;
  linkedin?: string | null;
  yearsOnTeam?: string;
};

export type OfficerData = {
  Admin: {
    data: Officer[];
  };
  Business: {
    data: Officer[];
  };
  IC: {
    data: Officer[];
  };
  EV: {
    data: Officer[];
  };
  F1Tenth: {
    data: Officer[];
  };
};

export type FormattedPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  category: string;
  content: string;
  author: string;
  image: string;
  snippet: string;
};

export type Sponsor = {
  name: string;
  logo: string;
  link: string;
};
