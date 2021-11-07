import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Characters from "./Characters";
import PlayDetails from "./PlayDetails";

const DisplayPosts = (props) => {



    return (
        <Tabs defaultIndex={0}>
            <TabList>
                <Tab>Details</Tab>
                <Tab>Characters</Tab>
            </TabList>
            <TabList>
                {/* <TabPanel>details details</TabPanel> */}
               <TabPanel> <PlayDetails play={props.play} /></TabPanel>

                {/* <TabPanel>characters details</TabPanel> */}
                <TabPanel> <Characters chars={props.chars} /></TabPanel>
                {/* <TabPanel> <Characters chars={props.chars} /></TabPanel>  */}
            </TabList>
        </Tabs>
    );
}

export default DisplayPosts;