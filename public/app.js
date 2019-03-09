var projectsContainer = document.getElementById('projectsContainer');

class CardProfolioItem extends React.Component {
  render(){
    return(
      <div className="card border-light">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img src={this.props.srcimg} alt=""/>
            </div>
            <div className="col">
              <div className="row mb-3">
                <div className="col">
                  <img className="rounded-circle" src={this.props.srclogo} alt=""/>
                </div>
                <div className="col pt-3">

                  <a className="align-middle" href={this.props.pslink}>
                    <img src="images/playstore.png" alt=""/>
                  </a>
                </div>
              </div>
              <h5 className="card-title mt-2 text-orange">{this.props.title}</h5>
              <p className="card-text text-secondary">{this.props.des}</p>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

ReactDOM.render(
  <div className="card-deck">
    <CardProfolioItem
    srcimg={"images/foodhub.png"}
    srclogo={"images/fhlogo.png"}
    title={"Foodhub"}
    pslink={"https://play.google.com/store/apps/details?id=com.hungrypanda.hungrypanda"}
    des={"Decision Support Mobile Application for finding nearby Restaurant"} />

    <CardProfolioItem
    srcimg={"images/foodhubmanager.png"}
    srclogo={"images/foodhubmanagerlogo.png"}
    title={"FoodHub Manager"}
    pslink={"https://play.google.com/store/apps/details?id=com.pointofsalesandroid.androidbasedpos_inventory"}
    des={"Content Management for Foodhub"} />

    <CardProfolioItem
    srcimg={"images/wordgameshelper.png"}
    srclogo={"images/wg.png"}
    title={"Word Games Helper"}
    pslink={"https://play.google.com/store/apps/details?id=com.solver.wordscape.wordscapesolver"}
    des={"Word Game solver for scrabble , wordSccapes, word Connect , Words with Friend and etc."} />

    <CardProfolioItem
    srcimg={"images/so.png"}
    srclogo={"images/sologo.png"}
    title={"ShoutOut"}
    pslink={"https://play.google.com/store/apps/details?id=com.announcement.schol.infoboard"}
    des={"Announcement Application for St. Anthony's College"} />
  </div>
  ,projectsContainer
);
