const bigCats = [{
  name: 'Jaguar',
  continent: 'America',
  populationSize: 15000
},
{
  name: 'Tiger',
  live: 'Asia',
  populationSize: 50000
},
{
  name: 'Leopárd',
  live: 'Africa',
  populationSize: 63000
},
{
  name: 'Puma',
  live: 'Africa',
  populationSize: 63000
}

];

const macOsVersions = [
  {name: 'Puma',
    version: '10.1',
    users: {
      name: 'Anonymus',
      email: 'a@noni.com'
    }
  },
  {name: 'Jaguar',
    version: '10.2',
    users: {
      name: 'noOne',
      email: 'noOne@kingsLand.com'
    }
  },
  {name: 'Panther',
    version: '10.3',
    users: {
      name: 'Voldemort',
      email: 'youKnowWho@snake.com'
    }
  }
];

const allUsers = [];
allUsers.push(macOsVersions[0].users, macOsVersions[1].users, macOsVersions[2].users);
console.log(allUsers);

let properties = Object.keys(Object.assign({}, ...allUsers));
console.log(properties);

for (let i = 0; i < macOsVersions.length; i++) {
  for (let j = 0; j < bigCats.length; j++) {
    if (macOsVersions[i].name === bigCats[j].name) {
      macOsVersions[i]['aboutname'] = bigCats[j];
    }
  }
}

console.log(macOsVersions);
