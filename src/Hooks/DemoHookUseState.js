import React, {useState} from "react";

export default function DemoHookUseState() {
  let [state, setState] = useState({like: 1});

  const handleLike = () => {
    setState({
      like: state.like + 1,
    });
  };
  return (
    <div className="container">
      <div
        className="card text-white m-5 "
        style={{width: "300px", height: "300px"}}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_22M-5ZawSqvux2D26RCTPK8jgBuHKAI4w&usqp=CAU"
          alt="narutp"
        />
        <div className="card-body">
          <p className="text-danger">{state.like} ♥</p>
        </div>
        <button className="btn btn-danger" onClick={handleLike}>
          Like
        </button>
      </div>
    </div>
  );
}
