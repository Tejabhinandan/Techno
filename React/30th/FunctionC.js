function Header({brand,price}){
    console.log("props of header",brand,price)
    return <h1>Im Header {brand} {price}</h1>
}

function Content(props){
    return <h2>Im content {props.fName} {props.lName}</h2>
}

function Footer({person:{uId,uName}}){
    return <h1>Im footer {uId} {uName}</h1>
}

ReactDOM.render(<div>
    <Header brand="jeep" price="1234567"/>
    <Content fName="TEJA" lName="a"/>
    <Content fName="dhanush"/>
    <Content/>
    <Footer person={{uId:"TYC323", uName:"teja"}}/>
</div>,document.getElementById("container"))