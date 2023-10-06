class Person {
  constructor(name){
    this.name = name;
    this.movies = new Set();
  }
  addMovie(movie){
    this.movies.add(movie);
  }
}

class Facebook{
  constructor(){
    this.adjList = new Map();
  }
  addPerson(person){
    this.adjList.set(person, []);
  }
  addFriendship(person1, person2){
    this.adjList.get(person1).push(person2);
    this.adjList.get(person2).push(person1);
  }
  findMostPopularMovie(person){
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
      const friends = this.adjList.get(node);
      for(const friend of friends){
        if(!visited.has(friend)){
          dfs.call(this, friend);
        }
      }
    }
    
    dfs.call(this, person);

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
  
}

// Test case
function testFindMostPopularMovie(){
  // create people
  const person1 = new Person("Adam");
  const person2 = new Person("Kim");
  const person3 = new Person("James");
  const person4 = new Person("Jane");

  // add movies
  person1.addMovie("The Notebook");
  person1.addMovie("Avatar");

  person2.addMovie("The Notebook");
  person2.addMovie("Avatar");
  person2.addMovie("Friends");

  person3.addMovie("Avatar");
  person3.addMovie("The Notebook");
  person3.addMovie("Top Gun");

  person4.addMovie("Avatar");
  person4.addMovie("Titanic");
  person4.addMovie("Friends");

  // Simulate Facebook as a graph
  const fb = new Facebook();

  // Add people to Facebook
  fb.addPerson(person1);
  fb.addPerson(person2);
  fb.addPerson(person3);
  fb.addPerson(person4);

  // Create friendships
  fb.addFriendship(person1, person2);

  fb.addFriendship(person2, person3);

  fb.addFriendship(person2, person4);

  fb.addFriendship(person3, person4);

  const result = fb.findMostPopularMovie(person4);
  console.log(result); // result = "Avatar"
}

testFindMostPopularMovie();