import React, {useState, useCallback} from "react";
import ChildUseCallback from "./ChildUseCallback";

export default function DemoHookUseCallBack() {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bãn đã thả ${like} ♥ !`;
  };

  const callBackRenderNotify = useCallback(renderNotify, [like]);
  return (
    <div>
      Like : {like}♥{/* <p>{renderNotify()}</p> */}
      <button
        className="btn btn-success"
        onClick={() => {
          setLike(like + 1);
        }}></button>
      <ChildUseCallback renderNotify={callBackRenderNotify} />
    </div>
  );
}
