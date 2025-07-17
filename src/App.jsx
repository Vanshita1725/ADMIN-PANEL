import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import DiscussionSettings from './DiscussionSettings'
import GeneralSettings from './GeneralSetting'
import PermalinkSettings from './PermalinkSettings'
import PrivacySettings from './PrivacySettings'
import MediaSettings from './MediaSettings'
import ReadingSettings from './ReadingSettings'
import WritingSettings from './WritingSettings'
import AddPage from './Addpage'
import AllPage from './AllPage'
import Themes from './Themes'
import Alluser from './Alluser'
import Adduser from './Adduser'
import Allpost from './Allpost'
import Profile from './Profile'
import Comment from './Comment'
// import Medianew from './MediaNew'
import Browsermediafile from './Browsermediafile'
import Addpost from './Addpost'
import Categories from './Categories'
import Posttage from './Posttage'
import Dashbordupdated from './Dashbordupdeted'
import Library from './Library'
import Medianew from './MediaNew'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Home" element={< Dashboard />} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/WritingSettings" element={<WritingSettings />} /> 
        <Route path="/ReadingSettings" element={<ReadingSettings />} />
        <Route path="/DiscussionSettings" element={<DiscussionSettings />} />
         <Route path="/MediaSettings" element={<MediaSettings />} /> 
         <Route path="/PermalinkSettings" element={<PermalinkSettings />} /> 
         <Route path="/PrivacySettings" element={<PrivacySettings />} /> 
         <Route path='/Allpage' element={< AllPage/>} />
        <Route path="/Addpage" element={<AddPage/>} />
        <Route path="/Themes" element={<Themes />} />
        <Route path="/Alluser" element={<Alluser />} />
        <Route path="/Adduser" element={<Adduser />} />
        <Route path="/Profile" element={< Profile/>} />
        <Route path="/Allpost" element={<Allpost />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Comments" element={<Comment />} />
        <Route path="/Medianew" element={<Medianew />} />
        {/* <Route path="/Medianew" element={<Medianew />} /> */}
        <Route path="/Browsermediafile" element={<Browsermediafile />} />
        <Route path="/Addpost" element={<Addpost />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Posttage" element={<Posttage />} />
        <Route path="/Dashbordupdated" element={<Dashbordupdated />} />
        </Routes>
    </div>
  )
}

export default App