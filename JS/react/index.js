

const Header = function (props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}
const Main = function (props){
  return(
    <React.Fragment>
      <img 
      src="./assets/grapes-and-wine-barrel.jpeg"
      height="200"
      alt="wine and grapes barrel"
      />
      <ul>
        {props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const Footer = function(props){
  return(
    <footer>
      Copyright {props.year}
    </footer>
  )
}
const dishes = [
  'Black Bean Soup',
  'Spanakopita', 
  'Salmon and Potatoes',
  'Pizza'
]
// Data transformation: transforming dishes array into dishes object with dish id and title properties avaliable to render.
const dishesOb = dishes.map((dish,id) => ({
  id,
  title: dish
}))

const App = function (){
  return(
    <div>
      <Header name="Cindy"/>
      <Main dishes={dishesOb}/>
      <Footer year={2023}/>
    </div>
  )
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);