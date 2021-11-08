import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Characters from "./Characters";
import PlayDetails from "./PlayDetails";

const DisplayPosts = (props) => {

    if (props.fileExists) {
        return (
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab>Details</Tab>
                    <Tab>Characters</Tab>
                </TabList>
                <TabList>
                    <TabPanel> <PlayDetails play={props.play} /></TabPanel>
                    <TabPanel> <Characters chars={props.chars} /></TabPanel>
                </TabList>
            </Tabs>
        );
    } else {
        return (
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab>Details</Tab>
                </TabList>
                <TabList>
                    <TabPanel> <PlayDetails play={props.play} /></TabPanel>
                </TabList>
            </Tabs>
        )
    }

}

export default DisplayPosts;