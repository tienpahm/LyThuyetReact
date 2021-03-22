import React, {useState} from "react";
import {animated, useTransition} from "react-spring";

export default function Ex5UseTransition() {
  let [arrItem, setArrayItem] = useState([
    {id: 1, title: "FrontEndOnline", content: "cyberlearn"},
    {id: 2, title: "FrontStartOnline", content: "cybersoft"},
    {id: 3, title: "BackEndOnline", content: "cyber"},
  ]);

  const [article, setarticle] = useState({
    id: "",
    title: "",
    content: "",
  });
  const propsUseTransition = useTransition(arrItem, (item) => item.id, {
    from: {transform: "translate3d(0,-40px , 0)"}, //component tu vi tri bat dau
    enter: {transform: "translate3d(0,0px , 0)"}, //conponent khi da xuat hine
    leave: {transform: "translate3d(0,-40px , 0)"}, //component ket thuc
    config: {
      duration: 500,
    },
  });
  console.log(article);
  let handleChange = (e) => {
    let {value, name} = e.target;
    setarticle({
      ...article,
      [name]: value,
    });
  };

  let renderItem = () => {
    return propsUseTransition.map(({props, item, key}, index) => {
      return (
        <animated.div style={props} className="bg-dark text-white p-3 mt-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(item.id);
            }}>
            XX
          </button>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };

  const deleteItem = (id) => {
    setArrayItem([...arrItem.filter((item) => item.id !== id)]);
  };
  const handleSubmit = () => {
    let item = {...article, id: Date.now()};
    console.log(item);

    setArrayItem([...arrItem, item]);
  };
  return (
    <div className="container">
      {renderItem()}
      <div className="form-group">
        <h3>Title</h3>
        <input className="form-control" name="title" onChange={handleChange} />
      </div>
      <div className="form-group">
        <h3>Content</h3>
        <input
          className="form-control"
          name="content"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button onClick={handleSubmit}>Add article</button>
      </div>
    </div>
  );
}
