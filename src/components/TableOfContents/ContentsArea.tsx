import React from "react";
import { Element } from "react-scroll";

export type ContentsAreaProps = {
  prefix: string;
  contentsList: string[];
};

function ContentsArea(props: ContentsAreaProps) {
  return (
    <div className="contents-area">
      {props.contentsList.map((contents, i) => (
        <Element
          key={props.prefix + i}
          name={props.prefix + i}
          className="contents-section"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      ))}
    </div>
  );
}

export default ContentsArea;
