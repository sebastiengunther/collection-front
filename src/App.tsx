import { Anchor, Button, Container, Grid, Select, Text, Textarea, TextInput, Title } from '@mantine/core';
import InputGroup from './components/InputGroup';
import LabelTooltip from './components/LabelTooltip';
import Const from './Const';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import DropzoneInput from './components/DropzoneInput';
import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useCallback, useEffect, useState } from 'react';
import useAppForm from './App.form';

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
  const form = useAppForm();
  const [address, setAddress] = useState('');

  const getMetamaskAddress = () => {
    if(window.ethereum) {
      window.ethereum.request<string[]>({method: Const.ETH_REQUEST_ACCOUNT })
        .then((accounts) => {
          if(accounts && accounts[0]) {
            setAddress(accounts[0]);
            form.setFieldValue('owner', accounts[0]);
          }
      }).catch(console.error);
    }
  };

  useCallback(getMetamaskAddress, [address]);
  useEffect(getMetamaskAddress, []);

  const sendForm = (values: unknown) => {
    window.localStorage.removeItem('form');
    form.reset();
    // Todo : Send to back
  };

  useEffect(() => {
    const storedValue = window.localStorage.getItem('form');
    if(storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);
        Object.entries(parsedValue).filter(([_prop, value]) => value).forEach((args) => {
          form.setFieldValue(...args);
        });
      } catch(e) {
        console.warn(e);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('form', JSON.stringify(form.values));
  }, [form.values]);
  
  return (
    <Container id="app" px="lg" size="lg">
      <form onSubmit={form.onSubmit(sendForm)}>
        <Title order={1}> Complete informations </Title>

        <Grid columns={3} gutter="xl" mt={0} mb="md">
          <Grid.Col md={2} sm={3}>
            <Text className="text-steel">
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
              classNames={{button: 'button-small button-white', preview: 'background-grey border-grey'}}
              label={(<Text> Collection Picture <Text className="asterisk-6"> * </Text> </Text>)}
              maxFiles={Const.MAX_FILES}
              maxSize={Const.FILE_MAX_SIZE}
              size="md"
              {...form.getInputProps('file')}
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
                <LabelTooltip 
                  label={(<Text> Blockchain <Text className="asterisk-5"> * </Text> </Text>)}
                  tooltip={(<Text className="text-white font-weight-normal">Lorem ipsum</Text>)}
                  size="md"
                  withArrow
                >
                  <AiOutlineInfoCircle size={Const.ICON_INFO_SIZE} />
                </LabelTooltip>
              )}
              size="md"
              {...form.getInputProps('blockchain')}
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <Select
              id="protocol"
              classNames={{label: 'width-100'}}
              data={toSelectData(protocolData)}
              defaultValue=""
              label={(
                <LabelTooltip
                  label={(<Text> Save my data on <Text className="asterisk-5"> * </Text> </Text>)}
                  tooltip={(<Text className="text-white font-weight-normal">Lorem ipsum</Text>)}
                  size="md"
                  withArrow
                >
                  <AiOutlineInfoCircle size={Const.ICON_INFO_SIZE} />
                </LabelTooltip>
              )}
              size="md"
              {...form.getInputProps('protocol')}
            />
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              id="name"
              classNames={{label:'autour-one'}}
              label={(<Text className="autour-one"> Name of the collection <Text className="asterisk-5"> * </Text> </Text>)}
              placeholder="Enter a name"
              radius="md"
              size="md"
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              id="symbol"
              label={(<Text> Symbol of the collection <Text className="asterisk-5"> * </Text> </Text>)}
              placeholder="Enter a name"
              radius="md"
              size="md"
              {...form.getInputProps('symbol')}
            />
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <InputGroup
              id="amount"
              classNames={{text: 'background-grey border-grey'}}
              label={(<Text> Amount of NFTs in the collection <Text className="asterisk-5"> * </Text> </Text>)}
              max={Const.AMOUNT_MAX}
              min={Const.AMOUNT_MIN}
              placeholder="Enter an amount"
              radius="md"
              size="md"
              {...form.getInputProps('amount')}
            >
              Max : 10 000
            </InputGroup>
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              classNames={{label: 'width-100'}}
              disabled
              label={(
                <LabelTooltip
                  label={(<Text className="autour-one"> Owner <Text className="asterisk-5"> * </Text> </Text>)}
                  tooltip={(<Text className="text-white font-weight-normal">Lorem ipsum</Text>)}
                  size="md"
                  withArrow
                >
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
              {...form.getInputProps('owner')}
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
              label={(<Text> Description <Text className="asterisk-6"> * </Text> </Text>)}
              minRows={4}
              placeholder="Enter a description"
              radius="md"
              size="md"
              {...form.getInputProps('description')}
            />
          </Grid.Col>
        </Grid>

        <Grid columns={1} gutter="xl" mt="lg">
          <Grid.Col span={1}>
            <Button size="md" className="button-tall button-black" type="submit"> Continue </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}

export default App;
