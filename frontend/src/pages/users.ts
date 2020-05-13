export const userNameArray = [
  'Hisham English',
  'Antony Little',
  "Justin O'Reilly",
  'Kyron Redfern',
  'Bridget Mcdaniel',
  'Azra Lawrence',
  'Kenya Park',
  'Sahara Scott',
  'Evie-May Petersen',
  'Daisy-Mae Joseph',
  'Kaiser Hobbs',
  'Kyal Reader',
  'Grover Whitehouse',
  'Rosalind Buck',
  'Darcie-Mae Carpenter',
  'Matei Hopkins',
  'Isaiah Cartwright',
  'Dottie Underwood',
  'Darnell Cox',
  'Harlan Rollins',
  'Aedan Powers',
  'Safah Gibson',
  'Leroy Stone',
  'Maiya Sinclair',
  'Diya Hills',
  'Dilan Knight',
  'Taya Martins'
];

function numberOfVisits(): number {
  return Math.floor(Math.random() * Math.floor(20));
}

function randomDate(): string {
  const start = new Date(2012, 0, 1);
  const end = new Date(2020, 1, 20);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toDateString();
}

interface User {
  name: string;
  lastVisit: string;
  visits: number;
}

const userArray: User[] = [];

for (let i = 0; i < userNameArray.length; i++) {
  userArray[i] = {
    name: userNameArray[i],
    lastVisit: randomDate(),
    visits: numberOfVisits()
  };
}

export default userArray;
