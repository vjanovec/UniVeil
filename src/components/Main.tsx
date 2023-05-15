import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Post } from './Post';

export function Main() {
    const tabStyle = {
        margin: 'auto',
        width: '50%',
        padding: '10px'
    }
    const filterOptionBarStyle = {
        display: 'flex',
        justifyContent: 'center',
    };
    return (
        <div style={tabStyle}>
            <div style={filterOptionBarStyle}>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                      <Tab style={{margin: '20px'}}>All</Tab>
                      <Tab style={{margin: '20px'}}>Hot🔥</Tab>
                      <Tab style={{margin: '20px'}}>New</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        Here comes post feed for 'All'
                        <Post />
                        {/*<Post /> */}
                        {/*<Post /> */}
                      </TabPanel>
                      <TabPanel>
                        Here comes post feed for 'Hot🔥'
                        <Post />
                        {/*<Post /> */}
                        {/*<Post /> */}
                      </TabPanel>
                      <TabPanel>
                        Here comes post feed for 'New'
                        <Post />
                        {/*<Post /> */}
                        {/*<Post /> */}
                      </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}