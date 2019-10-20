export interface Member {
  isEffective: boolean;
  name: string;
}

export interface MemberState {
  members: Member[];
}

export interface Role {
  isEffective: boolean;
  role: string;
}

export interface RoleState {
  roles: Role[];
}

export const PLUS_MEMBER = "PLUS_MEMBER";
export const PLUS_ROLE = "PLUS_ROLE";

interface PlusMemberAction {
  type: typeof PLUS_MEMBER;
}

interface PlusRoleAction {
  type: typeof PLUS_ROLE;
}

export type ActionTypes = PlusMemberAction | PlusRoleAction;
