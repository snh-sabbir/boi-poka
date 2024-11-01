import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  return (
    <div>
      <h3 className="my-6 text-2xl">Listed Books: </h3>
      
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl">Books I read</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
      
    </div>
  )

};

export default ListedBooks;
