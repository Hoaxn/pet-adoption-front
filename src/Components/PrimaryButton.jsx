/** @format */

import { Button } from "antd";
import BeatLoader from "react-spinners/BeatLoader";

const PrimaryButton = ({
  onClick,
  loading,
  htmlType,
  text,
  width = "27%",
  ...props
}) => {
  return (
    <Button
      //   loading={loading}
      className={"primary-button align-items-center"}
      htmlType={htmlType}
      type="primary"
      disabled={loading}
      onClick={!loading ? onClick : () => {}}
      {...props}
      style={
        loading
          ? { width: width, color: "white", height: "40px" }
          : { width: width }
      }
    >
      {loading ? <BeatLoader size={8} className="me-2" color="#fff" /> : null}

      {text}
    </Button>
  );
};

export default PrimaryButton;
