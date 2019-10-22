import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import { plusMember, plusRole } from "../reducers/actions";
import { MemberState, RoleState } from "../reducers/types";
import { Members } from "./members";
import { Roles } from "./roles";

interface AppProps {
  plusMember: typeof plusMember;
  plusRole: typeof plusRole;
  member: MemberState;
  role: RoleState;
  history: any;
}

class Index extends Component<AppProps> {
  constructor(props: Readonly<AppProps>) {
    super(props);
    this.onResultClick = this.onResultClick.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <h1>おみくじ</h1>
        <Members members={this.props.member.members} />
        <button onClick={this.props.plusMember}>メンバー追加</button>
        <Roles roles={this.props.role.roles} />
        <button onClick={this.props.plusRole}>ロール追加</button>
        <br />
        <button onClick={this.onResultClick}>結果</button>
      </React.Fragment>
    );
  }

  private onResultClick() {
    console.log(this.props.member.members);
    this.props.history.push("/result/?members=aaa,bbb,ccc&roles=S,P,D");
  }
}

const mapStateToProps = (state: AppState) => ({
  member: state.member,
  role: state.role
});

export default connect(
  mapStateToProps,
  { plusMember, plusRole }
)(Index);
