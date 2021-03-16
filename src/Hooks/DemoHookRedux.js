import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {commentAction} from "../redux/action/FakeBook";

export default function DemoHookRedux(props) {
  //useSelector thay cho mapstatetoProps
  let comment = useSelector((state) => state.FakeBookReducer.comment);
  //lấy hàm dispatch từ useDispatch = > để gửi giá trị lên reducer
  let dispatch = useDispatch();

  //lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  const handleChange = (e) => {
    let {value, name} = e.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };
  //submit thong tin nguoi dung len
  const handleComment = (e) => {
    e.preventDefault(); //chặn browser reload
    let newUserComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };

    // let action = {
    //   type: "add_comment",
    //   userComment: newUserComment,
    // };
    dispatch(commentAction(newUserComment));
  };
  return (
    <div className="container">
      <h3>FakeBook App !</h3>
      <div className="card">
        <div className="card-header">
          {comment.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-1">
                  <img src={item.avatar} style={{height: 50}} alt="" />
                </div>
                <div className="col-11">
                  <h6 className="text-danger">{item.name}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form className="card-body" onSubmit={handleComment}>
        <div className="form-group">
          <h4 className="card-title">Name</h4>
          <input
            className="form-control"
            name="name"
            onChange={handleChange}></input>
        </div>
        <div className="form-group">
          <h4 className="card-title">Content</h4>
          <input
            className="form-control"
            name="content"
            onChange={handleChange}></input>
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     comment: state.FakeBookReducer.comment,
//   };
// };
// export default connect(mapStateToProps)(DemoHookRedux);
