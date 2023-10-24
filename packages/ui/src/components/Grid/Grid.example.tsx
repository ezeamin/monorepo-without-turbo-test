import Grid from './Grid';

const GridExample = (): JSX.Element => {
  return (
    <Grid className="bg-violet-400" cols={6} container>
      <Grid
        className="bg-cyan-200"
        colSpan={2}
        item
        justifyContent="center"
        rowSpan={6}
      >
        <Grid
          alignContent="end"
          className="bg-violet-400"
          cols={4}
          container
          justifyContent="center"
        >
          <Grid colSpan={4} item>
            Align Content End
            <br />
            Justify Content Center
          </Grid>
          <Grid className="bg-cyan-200" item>
            1
          </Grid>
          <Grid className="bg-cyan-200" item>
            2
          </Grid>
          <Grid className="bg-cyan-200" item>
            3
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bg-cyan-200" item justifyContent="end">
        Justify Content End
      </Grid>
      <Grid
        className="bg-cyan-200"
        item
        justifyContent="center"
        verticalAlign="center"
      >
        Vertical Align Center
      </Grid>
      <Grid className="bg-cyan-200" item>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Grid>
    </Grid>
  );
};

export default GridExample;
