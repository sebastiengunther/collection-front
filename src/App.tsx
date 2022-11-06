import { Anchor, Container, Grid, Select, Text, Textarea, TextInput, Title } from '@mantine/core';
import InputGroup from './components/InputGroup';
import LabelTooltip from './components/LabelTooltip';
import Const from './Const';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import DropzoneInput from './components/DropzoneInput';
import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useCallback, useEffect, useState } from 'react';

const blockchainData = new Array<string>('ETH', 'Polygon');
const protocolData = new Array<string>('IPFS', 'Arweave');

const toSelectData = (data: Array<string>) => {
  const res = data.map((value) => ({ value: value, label: value, disabled: false }));
  res.unshift({ value: '', label: '--Select--', disabled: true });
  return res;
};

const dotAddress = (address: string) => {
  const ratio = address.length / Const.ADDRESS_LENGTH;
  const begin = ratio * Const.ADDRESS_BEGIN_DOT;
  const end = ratio * Const.ADDRESS_END_DOT;
  return `${address.substring(0, begin).replace('x', '×')}...${address.substring(end)}`;
};

function App() {
  const [address, setAddress] = useState('');

  const getMetamaskAddress = () => {
    if(window.ethereum) {
      window.ethereum.request({method: Const.ETH_REQUEST_ACCOUNT})
        .then(([account]: [string]) => {
          setAddress(account);
      }).catch(console.error);
    }
  };

  useCallback(getMetamaskAddress, [address]);
  useEffect(getMetamaskAddress, []);

  return (
    <Container id="app" px="lg" size="lg">
      <form>
        <Title order={1}> Complete informations </Title>

        <Grid columns={3} gutter="xl" mt="1px">
          <Grid.Col md={2} sm={3}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Text>
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="xl">
          <Grid.Col md={2} sm={3} xs={6}>
            <DropzoneInput
              id="file"
              accept={IMAGE_MIME_TYPE}
              label="Collection Picture *"
              maxFiles={Const.MAX_FILES}
              maxSize={Const.FILE_MAX_SIZE}
              size="md"
            >
              Upload
            </DropzoneInput>
          </Grid.Col>
        </Grid>
        
        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <Select
              id="blockchain"
              classNames={{label: 'width-100'}}
              data={toSelectData(blockchainData)}
              defaultValue=""
              label={(
                <LabelTooltip label="Blockchain *" tooltip="Lorem ipsum" size="md" withArrow>
                  <AiOutlineInfoCircle size={Const.ICON_INFO_SIZE} />
                </LabelTooltip>
              )}
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <Select
              id="protocol"
              classNames={{label: 'width-100'}}
              data={toSelectData(protocolData)}
              defaultValue=""
              label={(
                <LabelTooltip label="Save my data on *" tooltip="Lorem ipsum" size="md" withArrow>
                  <AiOutlineInfoCircle size={Const.ICON_INFO_SIZE} />
                </LabelTooltip>
              )}
              size="md"
            />
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              id="name"
              label="Name of the collection *"
              placeholder="Enter a name"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              id="symbol"
              label="Symbol of the collection *"
              placeholder="Enter a name"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <InputGroup
              id="amount"
              label="Amount of NFTs in the collection *"
              max={Const.AMOUNT_MAX}
              min={Const.AMOUNT_MIN}
              placeholder="Enter an amount"
              radius="md"
              size="md"
            >
              Max : 10 000
            </InputGroup>
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              id="owner"
              classNames={{label: 'width-100'}}
              disabled
              label={(
                <LabelTooltip label="Owner *" tooltip="Lorem ipsum" size="md" withArrow>
                  <AiOutlineInfoCircle size={Const.ICON_INFO_SIZE} />
                </LabelTooltip>
              )}
              radius="md"
              size="md"
              variant="filled"
              value={dotAddress(address)}
            />
            <TextInput
              id="owner"
              radius="md"
              size="md"
              type="hidden"
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6} mb="xs" mt="auto">
            <Anchor className="anchor" href="#"> More options </Anchor>
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3}>
            <Textarea
              id="description"
              label="Description *"
              minRows={4}
              placeholder="Enter a description"
              radius="md"
              size="md"
            />
          </Grid.Col>
        </Grid>

        <Grid columns={1} gutter="xl" mt="lg">
          <Grid.Col span={1}>
            Continue {/* Todo : Add button */}
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}

export default App;
