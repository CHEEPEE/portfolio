class ItemPost extends React.Component {
  render(){
    return(
      <div className = "m-1">
        <img className="rounded-0 card-img-top" src={this.props.imagePath} alt="Card image cap"/>
        {/* <div className="col-6">
          <img className="card-img-top" src={this.props.imagePath} alt="Card image cap"/>
        </div>
        <div className="col-6">
            <h3 className="font-weight-bold">{this.props.postCaption}</h3>
            <p className="mt-3 text-secondary">{this.props.postContent}</p>
        </div> */}
      </div>
    );
  }
}



function getPosts(){
  var postArray = [];
  var db = firebase.firestore(app);
  db.collection("blogPost").orderBy("createdDate","desc")
    .onSnapshot(function(querySnapshot) {
      postArray.length = 0;
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
            postArray.push(doc);
        });
    var postItems = postArray.map((data) =>
      <ItemPost key={data.id} id ={data.id} postCaption = {data.data().postCaption} imagePath = {data.data().imageUrl} postContent = {data.data().content}/>
    );

    ReactDOM.render(
      <div className="card-columns">
        {postItems}
      </div>,document.getElementById("postContainer")
    );
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}



function getPortfolio(){
  RenderDOM.render(
    <div>
      Under Construction
    </div>,document.getElementById("postContainer")
  );
}

getPortfolio();
