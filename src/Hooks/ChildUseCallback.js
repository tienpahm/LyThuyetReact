import React, {memo} from "react";

function ChildUseCallback(props) {
  let title = "cyber";
  let object = {name: "chi", id: "map u"};

  console.log("title", title);
  console.log("object", object);
  console.log("re-render");
  return (
    <div>
      {props.renderNotify()}
      123
    </div>
  );
}
export default memo(ChildUseCallback);
