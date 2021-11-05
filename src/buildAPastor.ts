import { beliefsWithCategories, ICategoryBeliefPair } from "./doctrine";
import { Gender, IBuildPastorProfile } from "./globals";

export interface IPastor {
  beliefs: ICategoryBeliefPair[];
  gender: Gender;
  acceptable: boolean;
}

export function buildPastor(profile: IBuildPastorProfile): IPastor {
  const { beliefTypes, gender, keyPoints } = profile;
  const validBeliefs = beliefTypes
    .map((type) => beliefsWithCategories[type])
    .reduce((acc, current) => acc.concat(current), []);

  let unchosenBeliefs = [...validBeliefs];
  const chosenBeliefs = [];
  for (let i = 0; i < keyPoints; i++) {
    const choice = Math.floor(Math.random() * unchosenBeliefs.length);
    chosenBeliefs.push(unchosenBeliefs[choice]);
    unchosenBeliefs = unchosenBeliefs.filter((_, index) => index != choice);
  }

  return {
    beliefs: chosenBeliefs,
    gender: gender,
    acceptable:
      chosenBeliefs.filter(belief => belief.category != "doctrine").length ==
      0, 
  };
}
