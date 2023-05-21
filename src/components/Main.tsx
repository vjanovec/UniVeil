import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Post } from './Post';
import { useSelector } from 'react-redux';
import { PostType } from '../types/PostType';

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
    const feed = useSelector((state: {feed: PostType[]}) => state.feed)
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

                        {/* Pull all the objects in the posts(list of objects), then wrap each and every object inside Post component using map function. */}
                        {feed.map(x => 
                        <Post id={x.id} title={x.title} text={x.text} voteCount={x.voteCount}/>)}
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