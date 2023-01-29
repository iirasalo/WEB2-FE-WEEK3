const getLifePhase = function (age) {
    if (age < 4) return 'Toddler';
    if (age < 13) return 'Kid';
    if (age < 18) return 'Teenager';
    if (age < 65) return 'Adult';
    // if no other condition is met
    return 'Elder';
  };

  const ages = [2, 7, 15, 29, 45, 44, 59, 65, 88];
  const phases = ages.map(getLifePhase);
  
  //console.log(phases);

  /**/

  let users = [
    { firstName: 'Susan', lastName: 'Steward' },
    { firstName: 'Daniel', lastName: 'Longbottom' },
    { firstName: 'Jacob', lastName: 'Black' },
  ];

  let names = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(names);