import { PLUS_MEMBER, PLUS_ROLE } from "./types";

export function plusMember() {
  console.log("plusMember");
  return {
    type: PLUS_MEMBER
  };
}

export function plusRole() {
  console.log("plusRole");
  return {
    type: PLUS_ROLE
  };
}
