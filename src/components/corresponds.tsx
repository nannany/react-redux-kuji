import { Correspond } from "../reducers/types";
import { FunctionComponent } from "react";
import React from "react";

interface CorrespondsProps {
  corresponds: Correspond[];
}

export const Corresponds: FunctionComponent<CorrespondsProps> = ({
  corresponds
}) => {
  return (
    <div>
      <table>
        <tr>
          <th>名前</th>
          <th>ロール</th>
        </tr>
        {corresponds.map(correspond => (
          <tr>
            <td>{correspond.member}</td>
            <td>{correspond.role}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
