import { buildPastor, IPastor } from "./buildAPastor";
import { DoctrineType } from "./globals";
import { shuffle } from "lodash";

export default function createPastorQueues(): IPastor[][] {
  const falseDoctrines = [
    "asceticism",
    "unbridledLicence",
    "essenes",
    "powerOfSelfCare",
    "secularHumanism",
    "theSecret",
    "progressiveChristianity",
  ] as DoctrineType[];

  let queue = [];

  let week = 1;
  let weekLimit = 7;

  let unseenFalseDoctrines = shuffle(falseDoctrines);
  let circulatingDoctrines = ["doctrine" as DoctrineType];

  while (week < weekLimit) {
    circulatingDoctrines.push(unseenFalseDoctrines.pop());

    const challengeQuota = Math.floor(Math.log(week) + 4);
    const acceptablePastorQuota = Math.ceil(challengeQuota / 2);
    const unacceptablePastorQuota = Math.ceil(
      challengeQuota - acceptablePastorQuota
    );

    let acceptablePastors = [];
    for (let i = 0; i < acceptablePastorQuota; i++) {
      const newPastor = buildPastor({
        beliefTypes: ["doctrine" as DoctrineType],
        gender: "male",
        keyPoints: 3,
      });
      acceptablePastors.push(newPastor);
    }

    let unacceptablePastors = [];
    for (let i = 0; i < unacceptablePastorQuota; i++) {
      const newPastor = buildPastor({
        beliefTypes: circulatingDoctrines,
        gender: "male",
        keyPoints: 3,
      });
      unacceptablePastors.push(newPastor);
    }

    queue.push(shuffle([...acceptablePastors, ...unacceptablePastors]));

    week++;
  }

  return queue;
}
