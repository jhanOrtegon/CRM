import { useScreenSize } from "@/hooks";
import { breakPoints } from "@/utils";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

export default function ResizableBox({
  children,
  width = 680,
  height = 210,
  resizable = true,
  style = {},
  className = "",
}) {

  const { width: newWidth, height:newHeight } = useScreenSize()

  return (
    <div>
      <div
        style={{
          display: "inline-block",
          width: "auto",
          background: "white",
          borderRadius: "0.5rem",
          ...style,
        }}
      >
        {resizable ? (
          <ReactResizableBox
            width={newWidth >= breakPoints.lg ? 800 : width}
            height={newHeight >= 700 ? 300 : height}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
              className={className}
            >
              {children}
            </div>
          </ReactResizableBox>
        ) : (
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={'w-full'}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
