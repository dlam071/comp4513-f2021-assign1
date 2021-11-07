import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Characters from "./Characters";

const DisplayPosts = (props) => {

    

    return (
        <Tabs defaultIndex={1}>
            <TabList>
                <Tab>Details</Tab>
                <Tab>Characters</Tab>
            </TabList>
            <TabList>
                <TabPanel>details details</TabPanel>
                <TabPanel>characters details</TabPanel>
                {/* <TabPanel> <Characters chars={props.chars} /></TabPanel> */}
            </TabList>
        </Tabs>
    );
}

export default DisplayPosts;