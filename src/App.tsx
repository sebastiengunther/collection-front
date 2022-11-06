import { Anchor, Container, Grid, Text, Title } from '@mantine/core';

function App() {
  return (
    <Container id="app" px="lg" size="lg">
      <form>
        <Title order={1}> Complete informations </Title>

        <Grid columns={3} gutter="xl" mt="1px">
          <Grid.Col span={2}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Text>
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="xl">
          <Grid.Col span={1}>
            Upload
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="sm">
          <Grid.Col span={1}>
            Blockchain
          </Grid.Col>
          <Grid.Col span={1}>
            Protocol
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="sm">
          <Grid.Col span={1}>
            Name
          </Grid.Col>
          <Grid.Col span={1}>
            Symbol
          </Grid.Col>
          <Grid.Col span={1}>
            Amount
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="sm">
          <Grid.Col span={1}>
            Owner
          </Grid.Col>
          <Grid.Col span={1}>
            <Anchor href="#"> More options </Anchor>
          </Grid.Col>
        </Grid>

        <Grid columns={3} gutter="xl" mt="sm">
          <Grid.Col span={2}>
            Description
          </Grid.Col>
        </Grid>

        <Grid columns={1} gutter="xl" mt="lg">
          <Grid.Col span={1}>
            Continue
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}

export default App;
