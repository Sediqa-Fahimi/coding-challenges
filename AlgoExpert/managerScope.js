// const employeeHierarchy = {
//  q: ['s', 't'],
//  r: ['u'],
//  s: ['r'],
//  t: [],
//  u: [],
// };

// managerScope(employeeHierarchy, ‘r’) // => 2  count = 1 + 1  => 2
// managerScope(employeeHierarchy, ‘q’) // => 5 count = 4 + 1 => 5
								
									
			

// managerScope(employeeHierarchy, ‘t’) // => 1

function managerScope(employees, person, memo = {}){
	if(memo[person]) return memo[person];
	if(employees[person].length === 0) return 1;
	let count = 1;
	for(let employee of employees[person]){
		count += managerScope(employees, employee, memo);
	}
	memo[person] = count;
	return memo[person];
}

// O(E) time , E is the number of edges.
// O(N) space , N is the number of recursive function calls.