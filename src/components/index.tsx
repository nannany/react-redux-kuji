import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import { plusMember, plusRole } from "../reducers/actions";
import { MemberState, RoleState } from "../reducers/types";
import { Members } from "./members";
import {Roles} from "./roles";

interface AppProps {
  plusMember: typeof plusMember;
  plusRole: typeof plusRole;
  member: MemberState;
  role: RoleState;
}

class Index extends Component<AppProps> {
  render() {
    return (
      <React.Fragment>
        <h1>おみくじ</h1>
        <Members members={this.props.member.members} />
        <button onClick={this.props.plusMember}>メンバー追加</button>
        <Roles roles={this.props.role.roles} />
        <button onClick={this.props.plusRole}>ロール追加</button>
      </React.Fragment>
    );
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
