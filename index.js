function theBeatlesPlay(musicians, instruments) {
  let musicianInstrumentPairing = [];
  for (let i = 0; i<musicians.length; i++) {
<<<<<<< HEAD
    musicianInstrumentPairing.push(`${musicians[i]} plays ${instruments[i]}`);
=======
    musicianIntrumentPairing.push(`${musicians[i]} plays ${instruments[i]}`);
>>>>>>> b4aa185d37fd498a8acfd77a513585de008c7e92
  }
  return musicianInstrumentPairing;
}
function johnLennonFacts(facts) {
  let excitedFacts = [];
  let i = 0;
  while (facts[i]) {
    excitedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return excitedFacts;
}
function iLoveTheBeatles(number) {
  let beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return beatleLove;
}