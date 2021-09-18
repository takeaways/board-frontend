import { Container, Typography, Box, Button } from "@material-ui/core";
import Link from "next/link";
function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next Example
        </Typography>
        <Link href="/">
          <a>Go to the index page</a>
        </Link>
      </Box>
    </Container>
  );
}

export default About;
