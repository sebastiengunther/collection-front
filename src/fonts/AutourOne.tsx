import { Global } from '@mantine/core';
import autourOneWoff from './Autour-One.ttf.woff';
import autourOneEot from './Autour-One.ttf.eot';
import autourOneSvg from './Autour-One.ttf.svg';

export function AutourOneFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Autour-One',
            src: `url('${autourOneWoff}') format('woff'),
              url('${autourOneSvg}#Autour-One') format('svg'),
              url('${autourOneEot}'),
              url('${autourOneEot}?#iefix') format('embedded-opentype')`,
            fontWeight: 100,
            fontStyle: 'normal'
          },
        }
      ]}
    />
  );
}
