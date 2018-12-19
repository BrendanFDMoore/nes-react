import * as React from "react";
import classNames from "classnames";

export interface TableProps {
  bordered: boolean;
  centered: boolean;
  style: any;
}

export default class Table extends React.Component<TableProps, any> {
  public render() {
    const { bordered, centered, style, children } = this.props;
    return (
      <table
        className={classNames("nes-table", {
          "is-bordered": bordered,
          "is-centered": centered
        })}
        style={style}
      >
        {children}
      </table>
    );
  }
}
