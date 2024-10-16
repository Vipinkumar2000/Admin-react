import "./user.scss";
import { Single } from "../../components";
import { singleUser } from "../../data";
const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
