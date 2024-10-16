import "./add.scss";
import PropTypes from "prop-types";
const Add = (Props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //add new Item
    //axiospost{`api/${slug}`}
  };

  return (
    <div className="add">
      <div className="modal">
        <span
          className="close
        "
          onClick={() => Props.setOpen(false)}
        >
          X
        </span>
        <h1>Add new {Props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {Props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

Add.prototype = {
  slug: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      headerName: PropTypes.string,
      width: PropTypes.number,
      type: PropTypes.string,
      renderCell: PropTypes.string,
    })
  ),
  setOpen: PropTypes.bool,
};

export default Add;
