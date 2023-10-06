
class Person {
  constructor(name){
    this.name = name;
    this.friends = [];
    this.movies = new Set();
  }
  addFriend(friend){
    this.friends.push(friend);
  }
  addMovie(movie){
    this.movies.add(movie);
  }
}

function findMostPopularMovie(person){
  const visited = new Set();

  const popularMovies = {};
  for(const movie of person.movies){
    popularMovies[movie] = 0;
  }
  function dfs(node){
    visited.add(node);
    for(const movie of node.movies){
      if(popularMovies[movie] !== undefined){
        popularMovies[movie] += 1;
      }
    }
    for(const friend of node.friends){
      if(!visited.has(friend)){
        dfs(friend);
      }
    }
  }
  
  dfs(person);

  let maxValue = -Infinity;
  let mostPopularMovie = null;

  for(const movie in popularMovies){
    if(popularMovies[movie] > maxValue){
      mostPopularMovie = movie;
      maxValue = popularMovies[movie];
    }
  }
  return mostPopularMovie;
}

// Test case
function testFindMostPopularMovie(){
  // create people
  const person1 = new Person("Adam");
  const person2 = new Person("Kim");
  const person3 = new Person("James");
  const person4 = new Person("Jane");

  // add frinedships
  person1.addFriend(person2);
  person2.addFriend(person1);
  person2.addFriend(person3);
  person3.addFriend(person2);
  person2.addFriend(person4);
  person4.addFriend(person2);
  person3.addFriend(person4);
  person4.addFriend(person3);

  // add movies
  person1.addMovie("The Notebook");
  person1.addMovie("Avatar");
  person2.addMovie("The Notebook");
  person2.addMovie("Avatar");
  person3.addMovie("Avatar");
  person3.addMovie("The Notebook");
  person3.addMovie("Aviator");
  person4.addMovie("Avatar");
  person4.addMovie("Titanic");
 

  const result = findMostPopularMovie(person1);
  console.log(result); // result = "Avatar"
}

testFindMostPopularMovie();