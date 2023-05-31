import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Feed } from './Feed';
import React from 'react';

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

    // Fetch data of posts(list of objects), so that I can pull the object in the return method below.
    return (
        <div style={tabStyle}>
            <div style={filterOptionBarStyle}>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                      <Tab style={{margin: '40px'}}>All</Tab>
                      <Tab style={{margin: '40px'}}>Hot🔥</Tab>
                      <Tab style={{margin: '40px'}}>New</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        Here comes post feed for 'All' 

                        {/* Pull all the objects in the posts(list of objects), then wrap each and every object inside Post component using map function. */}
                        {<Feed />}
                      </TabPanel>
                      <TabPanel>
                        Here comes post feed for 'Hot🔥'
                        {/*<Post /> */}
                        {/*<Post /> */}
                      </TabPanel>
                      <TabPanel>
                        Here comes post feed for 'New'
                        {/*<Post /> */}
                        {/*<Post /> */}
                      </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}