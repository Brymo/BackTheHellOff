import createPastorQueues from "./CreatePastorQueues";
import { IPastor } from "./buildAPastor";

const allPotentialPastors = createPastorQueues();

let currentWeek = 0;
let currentWeeksLineUp = allPotentialPastors[currentWeek];

let rejectedGood = [] as IPastor[];
let acceptedBad = [] as IPastor[];

let currentPastorIndex = 0;
let currentPastor = currentWeeksLineUp[currentPastorIndex];

showPastor(currentPastor);

const acceptButton = (document.getElementById("accept").onclick = () =>
  choose(true));
const declineButton = (document.getElementById("decline").onclick = () =>
  choose(false));

function choose(hasBeenAccepted: boolean) {

  if(currentPastor.acceptable && !hasBeenAccepted) {
    rejectedGood.push(currentPastor);
  }

  if(!currentPastor.acceptable && hasBeenAccepted) {
    acceptedBad.push(currentPastor);
  }

  cycle();
}

function cycle() {
  currentPastorIndex++;
  if (currentPastorIndex >= currentWeeksLineUp.length) {
    currentWeek++;
    currentWeeksLineUp = allPotentialPastors[currentWeek];
    currentPastorIndex = 0;
    currentPastor = currentWeeksLineUp[currentPastorIndex];
  } else {
    currentPastor = currentWeeksLineUp[currentPastorIndex];
    showPastor(currentPastor);
  }
}

function showPastor(pastor) {
  const chatBox = document.getElementById("chatBox");
  const beliefs = pastor.beliefs.map((belief) => belief.belief).join("\n");
  chatBox.innerText = beliefs;
}
