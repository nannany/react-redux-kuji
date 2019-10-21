import React, { FunctionComponent, ReactElement } from "react";
import { Role } from "../reducers/types";

interface RolesProps {
  roles: Role[];
}

export const Roles: FunctionComponent<RolesProps> = ({roles}): ReactElement => {
  return (
    <div>
      {roles.map(role => (
        <div>
          <input type="checkbox" checked={role.isEffective} />
          <input type={"text"} value={role.role} />
        </div>
      ))}
    </div>
  );
};
