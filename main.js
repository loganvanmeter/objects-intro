"use strict";
const wardrobe = {
	height: 80,
	manufacturer: "Killibrew & Sons",
	contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
	depth: 38,
	width: 50,
};

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);

wardrobe.material = "Cedar";
console.log(wardrobe.material);

const empireStateBuilding = {
	stories: 103,
	height: 1453,
	address: "350 Fifth Avenue, Manhattan, New York 10118",
	squareFeet: 2768591,
	constructionDate: 1931,
	cost: 40948900,
	owner: "Empire State Realty Trust",
	eastWestLength: 424,
	northSouthLength: 187,
	architect: "Shreve, Lamb & Harmon",
};

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

const empireAddress = empireStateBuilding["address"];
const empireDate = empireStateBuilding["constructionDate"];
const empireCost = empireStateBuilding["cost"];
const empireOwner = empireStateBuilding["owner"];
const empireArchitect = empireStateBuilding["architect"];

console.log(empireAddress);
console.log(empireDate);
console.log(empireOwner);
console.log(empireCost);
console.log(empireArchitect);

const nashvilleSoftwareSchool = {
	founded: 2012,
	director: "John Wark",
	instructors: {
		fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
		partTime: ["Zoe", "Nathan"],
	},
	address: "500 Interstate Blvd. S",
};

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++) {
	console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}

for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
	console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);

console.log(nashvilleSoftwareSchool.instructors.partTime[0]);
