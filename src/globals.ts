export type DoctrineType =
  | "doctrine"
  | "asceticism"
  | "unbridledLicence"
  | "essenes"
  | "powerOfSelfCare"
  | "secularHumanism"
  | "theSecret"
  | "progressiveChristianity";

export type Gender = "male" | "female";

export interface IBuildPastorProfile{
  beliefTypes: DoctrineType[];
  gender: Gender; 
  keyPoints: number;
}



