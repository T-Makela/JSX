import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        alt="imagefile"
        src="https://im.mtv.fi/image/6710358/landscape16_9/1024/576/c79a893bde3f5f14c27a166a53271c89/fl/pizza-basilika.jpg"
      />
      <img
        className="food-img"
        alt="imagefile"
        src="https://www.kinuskikissa.fi/wp-content/uploads/sini/perunasalaatti.jpg"
      />
      <img
        className="food-img"
        alt="imagefile"
        src="https://i.pinimg.com/280x280_RS/5a/5a/fa/5a5afa252e31dbc5c27cde24848f4e22.jpg"
      />
      <img alt="imagefile" src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
