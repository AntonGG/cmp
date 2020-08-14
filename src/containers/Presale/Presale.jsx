import React, { Component } from "react";
import { connect } from "react-redux";
import { setPreloader, getIcoInfo } from "../../actions/User";
import PresaleTitle from "../../components/Presale/PresaleTitle";

export class Presale extends Component {
  componentDidMount() {
    this.props.onSetPreloader(true);
    this.props.onGetIcoInfo();
  }
  render() {
    const { ico_info } = this.props;
    return (
      <div>
        <PresaleTitle ico_info={ico_info} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ico_info: state.User.ico_info,
});
const mapDispatchToProps = (dispatch) => {
  return {
    onGetIcoInfo: () => {
      dispatch(getIcoInfo());
    },
    onSetPreloader: (isPreloader) => {
      dispatch(setPreloader(isPreloader));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Presale);
