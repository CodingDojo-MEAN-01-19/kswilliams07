// 30 minutes max
//Challenge 1:
console.log('**** Challenge 1 ****');
let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function printStudentInfo(students){
  for(var index=0; index<students.length;index++){
    console.log('Name:', students[index].name + ', ' + 'Cohort:', students[index].cohort);
  }
}

printStudentInfo(students);

//Challenge 2
console.log('**** Challenge 2 ****');
let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};

function printUserInfo(users){
  for(var key in users){
    console.log(key.toUpperCase());
    for(var index=0; index<users[key].length; index++){
      var fullName = users[key][index].first_name + users[key][index].last_name;
      console.log(index + ' - ' + users[key][index].last_name.toUpperCase() + ', ' + users[key][index].first_name.toUpperCase() + ' - ' + fullName.length);
    }
  }
}

printUserInfo(users);

