import beliefs from "./doctrine";
import {IBuildPastorProfile} from "./globals";

export function buildPastor(profile: IBuildPastorProfile){
    const {beliefTypes, gender, keyPoints} = profile;
    const validBeliefs = beliefTypes.map(type => beliefs[type]).reduce((acc, current) => acc.concat(current),[]);

    let unchosenBeliefs = [...validBeliefs];
    const chosenBeliefs = [];
    for(let i = 0; i < keyPoints; i++){
        const choice = Math.floor(Math.random() * keyPoints - i);
        chosenBeliefs.push(unchosenBeliefs[choice]);
        unchosenBeliefs = unchosenBeliefs.filter((belief,index) => index != choice);
    }

    console.log(chosenBeliefs)
}

