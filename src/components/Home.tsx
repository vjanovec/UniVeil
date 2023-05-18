import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from "./Header";
import { Main } from "./Main";
import { Navigation } from './Navigation';

export function Home() {
    return (
        <Grid
          templateAreas={`"header header"
                          "nav main"`}
          gridTemplateRows={'100px 1fr'}
          gridTemplateColumns={'25% 2fr'}
          h='100vh'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' area={'header'}>
            <Header />
          </GridItem>
          <GridItem pl='2' bg="gray.100" area={'nav'} px={4} py={4}>
            <Navigation />
          </GridItem>
          <GridItem pl='2' area={'main'}>
            <Main />
          </GridItem>
        </Grid>
    )
}