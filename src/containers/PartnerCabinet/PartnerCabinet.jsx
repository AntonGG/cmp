import React, { Component } from "react";
import { connect } from "react-redux";
import CashOut from "../../components/CashOut";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import Balance from "../../components/PartnerCabinet/Balance";
import ListedUsers from "../../components/PartnerCabinet/ListedUsers";
import PartnerUrl from "../../components/PartnerCabinet/PartnerUrl";
import PayoutHistory from "../../components/PayoutHistory";
import "../../sass/partnerCabinet/partnerCabinet.sass";
export class PartnerCabinet extends Component {
 
  render() {
    return (
      <div className="partner-cabinet-area">
        <p className="partner-cabinet__title">Партнерский кабинет</p>
        <MenuPersonalArea type={false} />
        <div className="partner-cabinet-area__body">
          <div className="partner-cabinet__left-block">
            <PartnerUrl partnerUrl={this.props.partnerUrl} />
            <ListedUsers />
          </div>
          <div className="partner-cabinet__right-block">
            {/* <Balance /> */}
            <CashOut />
            <PayoutHistory />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  partnerUrl: state.User.partnerUrl,
});


export default connect(mapStateToProps, null)(PartnerCabinet);
