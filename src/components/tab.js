import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HtmlTemplateOne from'./htmltemplateone';
import HtmlTemplateTwo from './htmltemplatetwo';
import HtmlTempalteThree from './htmltemplatethree';




const Tabnav = () => {
    return (
        <div>
         
  <Tabs>
    <TabList>
      <Tab>Latest</Tab>
      <Tab>Pinned</Tab>
      <Tab>Browse</Tab>
    </TabList>

    <TabPanel>
      <HtmlTemplateOne />  
    </TabPanel>

    <TabPanel>
      < HtmlTemplateTwo />
    </TabPanel>
    <TabPanel>
      <HtmlTempalteThree />
    </TabPanel>
  </Tabs>

        </div>
    )
}
export default Tabnav;