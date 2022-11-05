class Condition extends React.Component {
  state = {
    userName: "Tej",
    adminName: "dan",
    isAdmin: true,
  };
  changeView() {
    if (this.state.isAdmin) {
      this.setState({
        isAdmin: false
      });
    } else {
      this.setState({
        isAdmin: true
      });
    }
  }
  render() {
    let { userName, adminName, isAdmin } = this.state;
    let renderData = null;
    if (isAdmin) {
      renderData = (
        <div>
          <h1>Admin name:{adminName}</h1>
          <h1>Home</h1>
          <h1>Products</h1>
          <h2>Add Products</h2>
        </div>
      );
    } else {
      renderData = (
        <div>
          <h1>Admin name:{userName}</h1>
          <h1>Home</h1>
          <h1>Products</h1>
        </div>
      );
     
    }
    return (
        <div>
          {renderData}
          <button onClick={() => {this.changeView()}}>
            {isAdmin ? "change to user" : "change to Admin"}
          </button>
        </div>
      );
  }
}
ReactDOM.render(<Condition />, document.getElementById("container"));
