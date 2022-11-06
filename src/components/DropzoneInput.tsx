import { Button, DefaultProps, FileButton, Grid, Input, MantineSize, Selectors } from "@mantine/core";
import { memo, ReactNode, useState } from "react";
import useStyles from './DropzoneInput.styles';
import { Dropzone, DropzoneProps, FileWithPath } from '@mantine/dropzone';
import { AiOutlineClose, AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai';
import { FileRejection } from 'react-dropzone';

type DropzoneInputStylesNames = Selectors<typeof useStyles>;

interface DropzoneInputProps extends
  Omit<DropzoneProps, 'classNames' | 'styles' | 'onDrop'>,
  DefaultProps<DropzoneInputStylesNames>
{
  label: ReactNode;
  gutter?: MantineSize;
  mt?: MantineSize;
  iconSize?: string | number;
  labelElement?: 'label' | 'div';
  required?: boolean;
  size?: MantineSize;
  error?: string;
  onDrop?: (files: Array<FileWithPath>) => void;
  onReject?: (files: Array<FileRejection>) => void;
  onLoadFile?: (file: File) => void;
}

interface DefaultDropzoneInputProps {
  iconSize: number;
}

const defaultProps: DefaultDropzoneInputProps = {
  iconSize: 25
};

function DropzoneInput({
  // styles
  classNames,
  styles,
  unstyled,
  className,
  // root
  id,
  accept,
  gutter,
  mt,
  size,
  // preview
  // image
  // dropzone
  children,
  onDrop,
  onReject,
  onLoadFile,
  // icon
  iconSize,
  // label
  label,
  labelElement,
  required,
  // button
  // error
  error,
  // dropzone others props
  ...others
}: DropzoneInputProps) {
  const { classes, cx } = useStyles(undefined as void, { name: 'DropzoneInput', classNames, styles, unstyled });
  
  const [source, setSource] = useState('');

  const setFile = (payload: File | null): void => {
    if(payload) {
      loadFile(payload);
    }
  }

  const dropFile = (files: Array<File>): void => {
    if(files[0]) {
      loadFile(files[0]);
    }

    if(onDrop) {
      onDrop(files);
    }
  }

  const rejectFile = (files: Array<FileRejection>): void => {
    if(onReject) {
      onReject(files);
    }
    else {
      alert(`Error: can not upload :\n${files.map((file) => (`- "${file.file.name}" : ${file.errors[0].message}`)).join('\n')}`);
    }
  }

  const loadFile = (file: File): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      setSource(reader.result as string);
      
      if(onLoadFile) {
        onLoadFile(file);
      }
    });
  }

  return (
    <Grid columns={11} gutter={gutter} mt={mt} className={cx(classes.root, classNames?.root, className)}>
      <Grid.Col span={4}>
        <div className={cx(classes.preview, classNames?.preview)}>
          {source !== '' && (<img src={source} className={cx(classes.image, classNames?.image)} />)}
          <Dropzone
            accept={accept}
            onDrop={dropFile}
            onReject={rejectFile}
            className={cx(classes.dropzone, classNames?.dropzone)}
            {...others}
          >
            <div className={cx(classes.icon, classNames?.icon)}>
              <Dropzone.Accept>
                <AiOutlineUpload size={iconSize || defaultProps.iconSize} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <AiOutlineClose size={iconSize || defaultProps.iconSize} />
              </Dropzone.Reject>
              <Dropzone.Idle>
              {source === '' && (<AiOutlineCloudUpload size={iconSize || defaultProps.iconSize} />)}
              </Dropzone.Idle>
            </div>
          </Dropzone>
        </div>
      </Grid.Col>

      <Grid.Col span={7} m="auto">
        <Grid columns={1}>
          <Grid.Col span={1}>
            <Input.Label
              htmlFor={id}
              className={cx(classes.label, classNames?.label)}
              labelElement={labelElement}
              required={required}
              size={size}
            >
              {label}
            </Input.Label>
          </Grid.Col>
          <Grid.Col span={1}>
            <FileButton onChange={setFile} accept={accept && (new Array(accept)).join(',')}>
              {(props) => <Button id={id} className={cx(classes.button, classNames?.button)} size={size} {...props}> {children} </Button>}
            </FileButton>
            {error && (<Input.Error className={cx(classes.error, classNames?.error)} size={size} mt="5px"> {error} </Input.Error>)}
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
}

export default memo(DropzoneInput);
