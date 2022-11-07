/// <reference types="@types/google.maps" />

import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { Company } from './Company';

const user = new User();
console.log(user);
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
// customMap.addCompanyMarker(company);

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);
