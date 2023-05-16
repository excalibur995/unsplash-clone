import { PropsWithChildren } from "react";

const Grid = (props: PropsWithChildren) => {
  return (
    <div className="md:columns-2 lg:columns-3 md:space-y-6">
      {props.children}
    </div>
  );
};

export default Grid;
