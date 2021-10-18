import beliefs from "./doctrine";
import {IBuildPastorProfile} from "./globals";

export function buildPastor(profile: IBuildPastorProfile){
    const {beliefTypes, gender} = profile;
    console.log(beliefTypes, gender);
}

