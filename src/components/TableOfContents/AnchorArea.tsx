import React from "react";
import { Link } from "react-scroll";

export type AnchorAreaProps = {
  prefix: string;
  titleList: string[];
};

function AnchorArea(props: AnchorAreaProps) {
  return (
    <div className="scroll-anchor-area">
      <ul>
        {props.titleList.map((title, i) => (
          <li key={props.prefix + i}>
            <Link
              activeClass="active"
              to={props.prefix + i}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              containerId="root"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnchorArea;
