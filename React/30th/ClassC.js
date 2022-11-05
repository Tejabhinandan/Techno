class Header extends React.Component{
    render(){
        return <h1>I m Header {this.props.uname}</h1>
    }
}

class Content extends React.Component{
    render(){
        return <h2>I m Content {this.props.firstname} {this.props.lastname}</h2>
    }
}

class Footer extends React.Component{
    render(){
        return <h1>Im footer</h1>
    }
}

ReactDOM.render(<div>
    <Header uname="Raju"/>
    <Content firstname="uma" lastname="j"/>
    <Content firstname="Teja" lastname="a"/>
    <Content firstname="Danush" lastname="r"/>
    <Footer/>
</div>,document.getElementById("container"))