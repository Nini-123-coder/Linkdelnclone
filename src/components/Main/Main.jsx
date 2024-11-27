import React, { useState } from "react";
import "./Main.css";
import Left from "../Left/Left";
import Center from "../Center/Center";
import Right from "../Right/Right";
import PostBox from "../PostBox/PostBox";

const Main = () => {
    const [edit, setedit] = useState(false)
    const [datas, setdatas] = useState(
        [

        ]
    )
  return (
    <div className="MainHolder">
        {
            edit ? 
                <PostBox 
                setedit={setedit}
                 setdatas={setdatas}
                 datas={datas}
                 />
            : null
        }
      <div className="MainIt">
        <Left />
        <Center setedit={setedit} datas={datas}/>
        <Right />
      </div>
    </div>
  );
};

export default Main;
