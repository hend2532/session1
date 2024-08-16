import Car from "./Car";

function App() {
  const cars=[
    {id : 1,brand:"bmw",},
    {id : 2,brand:"ford",},
    {id : 3,brand:"audi",},
  ]
  return (
    <div className="App">
     { cars.map((car)=>{
       <Car brand={car.brand} key={car.id} />

      })}
      
    </div>
  );
}
  // document.createElement("div",null,"hallo hend")


export default App;
