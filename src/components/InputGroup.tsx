import { DefaultProps, Input, InputProps, Selectors } from '@mantine/core';
import { InputHTMLAttributes, memo, ReactNode } from 'react';
import useStyles from './InputGroup.styles';

type InputGroupStylesNames = Selectors<typeof useStyles>;

interface InputGroupProps extends
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
  Omit<InputProps, 'classNames' | 'styles'>,
  DefaultProps<InputGroupStylesNames>
{
  children: ReactNode;
  label?: ReactNode;
  labelElement?: 'label' | 'div';
  error?: string;
}

function InputGroup({
  // styles
  classNames,
  styles,
  unstyled,
  className,
  // root
  id,
  required,
  size,
  // label
  label,
  labelElement,
  // text
  children,
  // error
  error,
  // others input props
  ...others
}: InputGroupProps) {
  const { classes, cx } = useStyles(void 0, { name: 'InputGroup', classNames, styles, unstyled });

  return (
    <div className={cx(classes.root, classNames?.root, className)}>
      {label && (<Input.Label className={cx(classes.label, classNames?.label)} htmlFor={id} labelElement={labelElement} size={size}> {label} </Input.Label>)}
      <div className={cx(classes.group, classNames?.group)}>
        <Input className={cx(classes.input, classNames?.input)} size={size} invalid={(!!error)} {...others}/>
        <div className={cx(classes.text, classNames?.text)}> {children} </div>
      </div>
      {error && (<Input.Error className={cx(classes.error, classNames?.error)} size={size} mt="5px"> {error} </Input.Error>)}
    </div>
  );
}

export default memo(InputGroup); {/* Component is pure (so use of memo) */}
