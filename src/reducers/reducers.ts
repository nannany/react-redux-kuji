import {
  ActionTypes,
  Member,
  MemberState,
  PLUS_MEMBER,
  PLUS_ROLE,
  Role,
  RoleState
} from "./types";
import _ from "lodash";

const initialMembersState: MemberState = {
  members: []
};

export function memberReducer(
  state = initialMembersState,
  action: ActionTypes
): MemberState {
  switch (action.type) {
    case PLUS_MEMBER:
      const newMember: Member = {
        id: _.uniqueId(),
        isEffective: true,
        name: ""
      };
      return {
        members: [...state.members].concat(newMember)
      };
    default:
      return state;
  }
}

const initialRoleState: RoleState = {
  roles: []
};

export function roleReducer(
  state = initialRoleState,
  action: ActionTypes
): RoleState {
  switch (action.type) {
    case PLUS_ROLE:
      const newRole: Role = {
        id: _.uniqueId(),
        isEffective: true,
        role: ""
      };
      return {
        roles: [...state.roles].concat(newRole)
      };
    default:
      return state;
  }
}
