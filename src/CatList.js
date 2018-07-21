import React, { Component } from "react";

export default class CatList extends Component {
  render() {
    const list = this.props.catPics.map((idx, catPic) => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img
              role="presentation"
              key={idx}
              src={catPic.url}
              className="thumbnail responsive"
              style={{ height: "220px", width: "221px", margin: "auto" }}
            />
          </div>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}
