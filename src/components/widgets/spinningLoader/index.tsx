import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

const DEFAULT_COLOR = "#4fa94d";

const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  "aria-busy": true,
  role: "progressbar",
};

type Style = {
  [key: string]: string;
};

interface PrimaryProps {
  height?: string | number;
  width?: string | number;
  ariaLabel?: string;
  wrapperStyle?: Style;
  wrapperClass?: string;
  visible?: boolean;
}
interface BaseProps extends PrimaryProps {
  color?: string;
}

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const SvgWrapper = styled.div<{ $visible: boolean }>`
  display: ${(props: any) => (props.$visible ? "flex" : "none")};
`;

type TriangleProps = BaseProps;

const VIEW_BOX_VALUES = "-3 -4 39 39";
const POLYGON_POINTS = "16,0 32,32 0,32";

const dash = keyframes`
to {
   stroke-dashoffset: 136;
 }
`;
const Polygon = styled.polygon`
  stroke-dasharray: 17;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
const SVG = styled.svg`
  transform-origin: 50% 65%;
`;

const Triangle: FunctionComponent<TriangleProps> = ({
  height = 80,
  width = 80,
  color = DEFAULT_COLOR,
  ariaLabel = "triangle-loading",
  wrapperStyle,
  wrapperClass,
  visible = true,
}: TriangleProps): React.ReactElement => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center ">
      <SvgWrapper
        style={wrapperStyle}
        $visible={visible}
        className={`${wrapperClass}`}
        data-testid="triangle-loading"
        aria-label={ariaLabel}
        {...DEFAULT_WAI_ARIA_ATTRIBUTE}
      >
        <SVG
          id="triangle"
          width={width}
          height={height}
          xmlns={SVG_NAMESPACE}
          viewBox={VIEW_BOX_VALUES}
          data-testid="triangle-svg"
        >
          <Polygon
            fill="transparent"
            stroke={color}
            strokeWidth="1"
            points={POLYGON_POINTS}
          />
        </SVG>
      </SvgWrapper>
    </div>
  );
};
export default Triangle;
