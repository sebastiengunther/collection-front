import { Button, DefaultProps, MantineSize, Selectors, Text, Tooltip, TooltipProps } from "@mantine/core";
import { memo, ReactNode } from "react";
import useStyles from './LabelTooltip.styles';

type LabelTooltipStylesNames = Selectors<typeof useStyles>;

interface LabelTooltipProps extends
  Omit<TooltipProps, 'classNames' | 'styles'>,
  DefaultProps<LabelTooltipStylesNames>
{
  tooltip: ReactNode;
  size?: MantineSize;
}

function LabelTooltip({
  // styles
  classNames,
  styles,
  unstyled,
  className,
  // root
  size,
  // label
  label,
  // tooltip
  tooltip,
  // button
  children,
  // tooltip others props
  ...others
}: LabelTooltipProps) {
  const { classes, cx } = useStyles(undefined as void, { name: 'LabelTooltip', classNames, styles, unstyled });

  return (
    <div className={cx(classes.root, classNames?.root, className)}>
      <Text className={cx(classes.label, classNames?.label)} size={size}> {label} </Text>
      <Tooltip label={tooltip} className={cx(classes.tooltip, classNames?.tooltip)} {...others}>
        <Button className={cx(classes.button, classNames?.button)} size={size}> 
          {children}
        </Button>
      </Tooltip>
    </div>
  );
}

export default memo(LabelTooltip); {/* Component is pure (so use of memo) */}
