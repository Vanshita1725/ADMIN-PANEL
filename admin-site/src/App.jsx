import { Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './Dashboard'
import DiscussionSettings from './DiscussionSettings'
import GeneralSettings from './GeneralSetting'
import PermalinkSettings from './PermalinkSettings'
import PrivacySettings from './PrivacySettings'
import MediaSettings from './MediaSettings'
import ReadingSettings from './ReadingSettings'
import WritingSettings from './WritingSettings'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/WritingSettings" element={<WritingSettings />} /> 
        <Route path="/ReadingSettings" element={<ReadingSettings />} />
        <Route path="/DiscussionSettings" element={<DiscussionSettings />} />
         <Route path="/MediaSettings" element={<MediaSettings />} /> 
         <Route path="/PermalinkSettings" element={<PermalinkSettings />} /> 
         <Route path="/PrivacySettings" element={<PrivacySettings />} /> 
      </Routes>
    </div>
  )
}

export default App