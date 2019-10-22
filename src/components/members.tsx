import React, { FunctionComponent } from "react";
import { Member } from "../reducers/types";

interface MembersProps {
  members: Member[];
}

export const Members: FunctionComponent<MembersProps> = ({ members }) => {
  return (
    <div>
      {members.map(member => (
        <div key={member.id}>
          <input key={member.id} type="checkbox" checked={member.isEffective} />
          <input type={"text"} value={member.name} />
        </div>
      ))}
    </div>
  );
};
