// state - grocery item bolds when mouse hover
class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      bold: false
  	};
  } 
  onListItemMouseEnter() {
    this.setState({
      bold: true
    });
  }
  onListItemMouseLeave() {
    this.setState({
      bold: false
    });
  }
  onListItemClick(event) {
    console.log('I got clicked');
  }
  render() {
  	var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
  	};
  	return (
      <li style={style} onClick={this.onListItemClick} onMouseEnter={this.onListItemMouseEnter.bind(this)} onMouseLeave={this.onListItemMouseLeave.bind(this)}>{this.props.item}</li>
  	);
  }
}
var groceryItems = ['apple', 'orange', 'cucumber'];
var GroceryList = (props) => (
  <ul>
    <h2>My Grocery List</h2>
    {props.groceryItems.map(element => <GroceryListItem item={element} />)}
  </ul>
);
ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById("app"));


// // making application interactive with state
// class GroceryListItem extends React.Component {
//   constructor(props) {
//   	super(props);
//   }
  
//   onListItemClick(event) {
//     console.log('I got clicked');
//   }
//   render() {
//   	return (
//       <li onClick={this.onListItemClick}>{this.props.item}</li>
//   	);
//   }
// }
// var groceryItems = ['apple', 'orange', 'cucumber'];
// var GroceryList = (props) => (
//   <ul>
//     <h2>My Grocery List</h2>
//     {props.groceryItems.map(element => <GroceryListItem item={element} />)}
//   </ul>
// );
// ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById("app"));

// // handling user events
// var groceryItems = ['apple', 'orange', 'cucumber'];
// var GroceryList = (props) => (
//   <ul>
//     <h2>My Grocery List</h2>
//     {props.groceryItems.map(element => <GroceryListItem item={element} />)}
//   </ul>
// );
// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
//   return (
//     <li onClick={onListItemClick}>{props.item}</li>
//   );
// };
// ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById("app"));

// // component properties aka props
// var groceryItems = ['apple', 'orange', 'cucumber'];
// var GroceryList = (props) => (
//   <ul>
//     <h2>My Grocery List</h2>
//     {props.groceryItems.map(element => <GroceryListItem item={element} />)}
//   </ul>
// );
// var GroceryListItem = (props) => (
//   <li>{props.item}</li> 
// );
// ReactDOM.render(<GroceryList groceryItems={groceryItems}/>, document.getElementById("app"));

// // render nested React components
// var GroceryList = () => (
//   <ul>
//     <h2>My Grocery List</h2>
//     <Apple />
//     <Orange />
//   </ul>
// );
// var Apple = () => (
//   <li>apple</li>
// );
// var Orange = () => (
//   <li>orange</li>
// );
// ReactDOM.render(<GroceryList />, document.getElementById("app"));