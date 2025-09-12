type DocumentLink = {
  name: string;
  link: string;
};

export interface Experience {
  company: string;
  logo: string;
  period: string;
  title: string;
  points: string[];
  photos: string[];
  documents?: DocumentLink[];
  address: string;
  companyLink: string;
}
