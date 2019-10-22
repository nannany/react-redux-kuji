import React, { Component } from "react";
import { ResultState } from "../reducers/types";
import { ParsedUrlQuery } from "querystring";

interface ResultProps {
  resultState: ResultState | null;
  qs: ParsedUrlQuery;
}

class Result extends Component<ResultProps> {
  constructor(props: Readonly<ResultProps>) {
    super(props);
  }
  componentDidMount(): void {
    console.log(this.props.qs.members);
    console.log(this.props.qs.roles);
  }

  render() {
    return <h1>結果</h1>;
  }
}

export default Result;
