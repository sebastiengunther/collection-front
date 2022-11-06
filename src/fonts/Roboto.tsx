import { Global } from '@mantine/core';
import robotoRegularTtf from './Roboto-Regular.ttf';
import robotoMediumTtf from './Roboto-Medium.ttf';

export function RobotoFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Roboto',
            src: `url('${robotoRegularTtf}') format('truetype')`,
            fontWeight: 400,
            fontStyle: 'normal'
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto',
            src: `url('${robotoMediumTtf}') format('truetype')`,
            fontWeight: 500,
            fontStyle: 'normal'
          },
        }
      ]}
    />
  );
}
