import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import { TextField } from "@mui/material";
import "./SearchBox.scss";

const SearchBox = ({
  attrName,
  updateMastertState,
  value,
  onFocus,
}: {
  value?: string;
  attrName?: any;
  updateMastertState?: Function;
  onFocus?: Function;
}) => {
  return (
    <div className="searchBox">
      <ManageSearchRoundedIcon />
      <TextField
        value={value}
        fullWidth
        variant="outlined"
        type="text"
        placeholder="Search..."
        onFocus={() => {
          if (onFocus) onFocus();
        }}
        onMouseEnter={() => {
          if (onFocus) onFocus();
        }}
        onChange={(e) => {
          if (updateMastertState) {
            updateMastertState(attrName, e.target.value);
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
