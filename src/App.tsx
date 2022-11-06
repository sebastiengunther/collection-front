import { Anchor, Container, Grid, Select, Text, Textarea, TextInput, Title } from '@mantine/core';
import InputGroup from './components/InputGroup';

const blockchainData = new Array<string>('ETH', 'Polygon');
const protocolData = new Array<string>('IPFS', 'Arweave');

const toSelectData = (data: Array<string>) => {
  const res = data.map((value) => ({ value: value, label: value, disabled: false }));
  res.unshift({ value: '', label: '--Select--', disabled: true });
  return res;
};

function App() {
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
            Upload {/* Todo : Add component for dropzone and button */}
          </Grid.Col>
        </Grid>
        
        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <Select
              id="blockchain"
              defaultValue=""
              data={toSelectData(blockchainData)}
              label="Save my data on *"
              size="md"
            /> {/* Todo : Add component for tooltip on label */}
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <Select
              id="protocol"
              defaultValue=""
              data={toSelectData(protocolData)}
              label="Save my data on *"
              size="md"
            /> {/* Todo : Add component for tooltip on label */}
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
              max={10_000}
              min={1}
              placeholder="Enter an amount"
              radius="md"
              size="md"
            > Max : 10 000 </InputGroup>
          </Grid.Col>
        </Grid>

        <Grid columns={6} gutter="xl" mt="sm">
          <Grid.Col md={2} sm={3} xs={6}>
            <TextInput
              disabled
              label="Owner *"
              radius="md"
              size="md"
              variant="filled"
              value=""
            /> {/* Todo : Add dotted value */} {/* Todo : Add component for tooltip on label */}
          </Grid.Col>
          <Grid.Col md={2} sm={3} xs={6}>
            <Anchor href="#"> More options </Anchor> {/* Todo : Add style */}
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
