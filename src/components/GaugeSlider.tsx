import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import type { SliderValueLabelProps } from "@mui/material/Slider/SliderValueLabel.types";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { FunctionComponent, useState } from "react";

const ValueLabelComponent: FunctionComponent<SliderValueLabelProps> = (props: SliderValueLabelProps) => {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children ? children : <></>}
    </Tooltip>
  );
}

interface GaugeSliderProps {
  color?: string;
  tooltip?: string;
  title: string;
}

const GaugeSlider: FunctionComponent<GaugeSliderProps> = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box>
      <Typography gutterBottom>{props.title}</Typography>
      <Slider
        valueLabelDisplay="auto"
        slots={{
          valueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={20}
        onChange={handleChange}
      />
    </Box>
  );
};

export default GaugeSlider;
