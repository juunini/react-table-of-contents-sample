import React, { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import AnchorArea from "./AnchorArea";
import ContentsArea from "./ContentsArea";
import "./TableOfContents.sass";

export type TableOfContentsProps = {
  prefix: string;
  titleList: string[];
  contentsList: string[];
  anchorPositionRight?: boolean;
};

function TableOfContents(props: TableOfContentsProps) {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {});
    Events.scrollEvent.register("end", (to, element) => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  if (props.anchorPositionRight) {
    return (
      <div className="table-of-contents">
        <ContentsArea prefix={props.prefix} contentsList={props.contentsList} />
        <AnchorArea prefix={props.prefix} titleList={props.titleList} />
      </div>
    );
  } else {
    return (
      <div className="table-of-contents">
        <AnchorArea prefix={props.prefix} titleList={props.titleList} />
        <ContentsArea prefix={props.prefix} contentsList={props.contentsList} />
      </div>
    );
  }
}

export default TableOfContents;
