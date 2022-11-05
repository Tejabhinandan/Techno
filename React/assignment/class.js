// class Motors extends React.Component {

//     state={
//         Hero:"Xpluse",
//         Bajaj:"Dominor400",
//         KTM:"Duke",
//         Triump:"Tiger",
//     }
//     render() {
//         return (
//             <div>
//                 <h1>ThrottleStore :{this.props.Greet}, </h1>
//                 <Bikes 
//                 Greet={this.props.Greet}
//                 brand1={this.state.Hero}
//                 brand2={this.state.Bajaj}
//                 brand3={this.state.KTM}
//                 brand4={this.state.Triump}/>
//             </div>
//         )
//     }
// }

// class Bikes extends React.Component{
//     render(){
//        return <div><h1>Bike 1:{this.props.brand1}</h1>
//        <h1>Bike 2: {this.props.brand2}</h1>
//        <h1>Bike 3: {this.props.brand3}</h1>
//        <h1>Bike 4: {this.props.brand4}</h1></div>   
//     }
// }

// ReactDOM.render(<div><Motors Greet="Welcome" /></div>,document.getElementById("container"))

//Parent to child using function component

function Motors (props){

    let data=["Xpluse","Dominor400","Duke","Tiger"]
     
         return (
             <div>
                 <h1>ThrottleStore :{props.Greet}</h1>
                 <Bikes Bike={data} />
             </div>
         )
 }
 
 function Bikes(props){
 
     return(
         <div>
             <h1>We have below Bikes :</h1>
             {props.Bike.map((val,idx)=>{
                 return <li key={idx}>{val}</li>
             })}
         </div>
     )      
      
 }
  
 ReactDOM.render(<Motors Greet="Welcome" />,document.getElementById("container"))