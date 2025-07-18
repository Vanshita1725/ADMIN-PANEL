import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const colorSchemes = [
  { value: "default", label: "Default", colors: ["#1d2327", "#2c3338", "#2271b1", "#72aee6"] },
  { value: "light", label: "Light", colors: ["#f6f7f7", "#c3c4c7", "#d54e21", "#00a0d2"] },
  { value: "modern", label: "Modern", colors: ["#1d2327", "#3858e9", "#6c8cff"] },
  { value: "blue", label: "Blue", colors: ["#096484", "#4796b3", "#52b3d9", "#c6e2ee"] },
  { value: "coffee", label: "Coffee", colors: ["#46403c", "#59524c", "#c7a589", "#b4ab9a"] },
  { value: "ectoplasm", label: "Ectoplasm", colors: ["#523f6d", "#a3b745", "#e14d43", "#f6e497"] },
  { value: "midnight", label: "Midnight", colors: ["#363b3f", "#26292c", "#7e8993", "#b43c38"] },
  { value: "ocean", label: "Ocean", colors: ["#627c83", "#738e96", "#9ebaa0", "#aa9d88"] },
  { value: "sunrise", label: "Sunrise", colors: ["#b43c38", "#dd823b", "#f6e497", "#ffe399"] },
];

const languages = [
  { value: "site-default", label: "Site Default" },
  { value: "en_US", label: "English (United States)" },
  { value: "es_ES", label: "Español" },
];

export default function Profile() {
  const [syntaxHighlight, setSyntaxHighlight] = useState(false);
  const [colorScheme, setColorScheme] = useState("default");
  const [keyboardShortcuts, setKeyboardShortcuts] = useState(false);
  const [toolbar, setToolbar] = useState(true);
  const [language, setLanguage] = useState("site-default");
  const [username] = useState("root");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("root");
  const [displayName, setDisplayName] = useState("root");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicPreview, setProfilePicPreview] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-0">
          <div className="max-w-7xl mt-8 lg:ms-46 py-10 px-4">
            <h1 className="!text-2xl !font-normal mb-8">Profile</h1>
            <div className=" rounded-xl mt-6">
              <h2 className="!text-lg !font-normal mb-6">Personal Options</h2>
              <div className="space-y-8">
                {/* Syntax Highlighting */}
                <div className="flex">
                  <div className="w-45 !text-sm font-medium text-gray-700">Syntax Highlighting</div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="syntaxHighlight"
                      type="checkbox"
                      checked={syntaxHighlight}
                      onChange={e => setSyntaxHighlight(e.target.checked)}
                      className="mr-2 p-6"
                    />
                    <label htmlFor="syntaxHighlight" className="text-gray-700 !text-sm">Disable syntax highlighting when editing code</label>
                  </div>
                </div>
                {/* Admin Color Scheme */}
                <div className="flex items-start">
                  <div className="w-64 pr-6 font-medium text-gray-700 pt-2">Admin Color Scheme</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                    {colorSchemes.map((scheme) => (
                      <label
                        key={scheme.value}
                        className={`flex flex-col items-start cursor-pointer  transition  px-4 py-3 min-w-[250px]  ${colorScheme === scheme.value ? "border-gray-300 bg-gray-200" : " hover:border-gray-300"}`}
                        style={{ boxShadow: colorScheme === scheme.value ? "0 2px 8px 0 rgba(0,0,0,0.04)" : undefined }}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            name="colorScheme"
                            value={scheme.value}
                            checked={colorScheme === scheme.value}
                            onChange={() => setColorScheme(scheme.value)}
                            className="mr-2 accent-blue-600"
                          />
                          <span className="font-medium text-lg">{scheme.label}</span>
                        </div>
                        <div className="flex flex-row  mt-1">
                          {scheme.colors.map((color, i) => (
                            <span
                              key={i}
                              className="h-5 w-20 "
                              style={{ background: color,  }}
                            />
                          ))}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Keyboard Shortcuts */}
                <div className="flex items-center">
                  <div className="w-45  pr-6 font-medium text-gray-700">Keyboard Shortcuts</div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="keyboardShortcuts"
                      type="checkbox"
                      checked={keyboardShortcuts}
                      onChange={e => setKeyboardShortcuts(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="keyboardShortcuts" className="text-gray-700 mr-2">Enable keyboard shortcuts for comment moderation.</label>
                    <a href="#" className="text-blue-600 hover:underline text-sm">Documentation on Keyboard Shortcuts</a>
                  </div>
                </div>
                {/* Toolbar */}
                <div className="flex items-center">
                  <div className="w-45 pr-6 font-medium text-gray-700">Toolbar</div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="toolbar"
                      type="checkbox"
                      checked={toolbar}
                      onChange={e => setToolbar(e.target.checked)}
                      className="mr-2 accent-blue-600"
                    />
                    <label htmlFor="toolbar" className="!text-sm text-gray-700">Show Toolbar when viewing site</label>
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="flex items-center mt-12 mb-8">
                <div className="w-45  pr-6 font-medium text-gray-700 flex items-center">
                  Language
                  
                </div>
                <select
                  className="w-70 border border-gray-300 rounded px-2 py-1"
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                >
                  {languages.map(lang => (
                    <option key={lang.value} value={lang.value}>{lang.label}</option>
                  ))}
                </select>
              </div>

              {/* Name Section */}
              <h1 className="!text-xl font-medium mt-10 mb-4">Name</h1>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-45 pr-6 font-medium !text-sm text-gray-700">Username</div>
                  <input
                    type="text"
                    className="w-70 border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-700"
                    value={username}
                    disabled
                  />
                  <span className="ml-4 text-gray-500">Usernames cannot be changed.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-45 pr-6 font-medium !text-sm text-gray-700">First Name</div>
                  <input
                    type="text"
                    className="w-70 border border-gray-300 rounded px-2 py-1"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <div className="w-45 pr-6 font-medium !text-sm text-gray-700">Last Name</div>
                  <input
                    type="text"
                    className="w-70 border border-gray-300 rounded px-2 py-1"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <div className="w-45 pr-6 font-medium !text-sm text-gray-700">Nickname (required)</div>
                  <input
                    type="text"
                    className="w-70 border border-gray-300 rounded px-2 py-1"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <div className="w-46 pr-6 font-medium !text-sm text-gray-700">Display name publicly as</div>
                  <select
                    className="w-[320px] border border-gray-300 rounded px-2 py-1"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                  >
                    <option value="root">root</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              {/* Contact Info Section */}
              <h1 className="!text-xl font-medium mt-10 mb-4">Contact Info</h1>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-45 pr-6 font-medium !text-sm text-gray-700 pt-2">Email (required)</div>
                  <div className="flex-1">
                    <input
                      type="email"
                      className="w-70 border border-gray-300 rounded px-2 py-1"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <div className="text-gray-500 text-sm mt-1">
                      If you change this, an email will be sent at your new address to confirm it. <span className="font-semibold">The new address will not become active until confirmed.</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-45 !text-sm pr-6 font-medium text-gray-700">Website</div>
                  <input
                    type="url"
                    className="w-70 border border-gray-300 rounded px-2 py-1"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                  />
                </div>
              </div>

              {/* About Yourself Section */}
              <h1 className="!text-xl font-medium mt-10 mb-4">About Yourself</h1>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-45 !text-sm pr-6 font-medium text-gray-700 pt-2">Biographical Info</div>
                  <div className="flex-1">
                    <textarea
                      className="w-[600px] border border-gray-300 rounded px-3 py-2 min-h-[120px]"
                      value={bio}
                      onChange={e => setBio(e.target.value)}
                    />
                    <div className="text-gray-500 text-sm mt-1">
                      Share a little biographical information to fill out your profile. This may be shown publicly.
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-45 !text-sm pr-6 font-medium text-gray-700 pt-2">Profile Picture</div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="profile-picture-upload" className="block cursor-pointer">
                      <div className="w-[110px] h-[110px] bg-gray-400 mb-2 flex items-end justify-center" style={{borderRadius:0}}>
                        {profilePicPreview ? (
                          <img src={profilePicPreview} alt="Profile Preview" className="object-contain w-[80px] h-[80px]" />
                        ) : (
                          <i className="fa-solid fa-user text-white text-[80px]" style={{lineHeight:'1'}}></i>
                        )}
                        <input
                          id="profile-picture-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={e => {
                            const file = e.target.files && e.target.files[0];
                            if (file) {
                              const reader = new window.FileReader();
                              reader.onload = ev => setProfilePicPreview(ev.target.result);
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline text-sm">You can change your profile picture on Gravatar.</a>
                  </div>
                </div>
              </div>

              {/* Account Management Section */}
              <h2 className="!text-xl font-semibold mt-10 mb-4">Account Management</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-45 !text-sm pr-6 font-medium text-gray-700">New Password</div>
                  <button
                    type="button"
                    className="border-1 bg-white  border-blue-500 text-blue-700 px-2 py-1 !text-xs rounded font-medium text-base hover:bg-blue-50 transition"
                  >
                    Set New Password
                  </button>
                </div>
                <div className="flex items-start">
                  <div className="w-45 !text-sm pr-6 font-medium text-gray-700 pt-2">Sessions</div>
                  <div className="flex flex-col">
                    <button type="button" className="border-1 border-gray-500 w-45 !text-xs text-gray-400 bg-gray-50 px-2 py-2 rounded hover:bg-blue-50 font-medium mb-1">Log Out Everywhere Else</button>
                    <span className="text-gray-600 !text-sm mt-1 block">
                      Did you lose your phone or leave your account logged in at a public computer? You can log out everywhere else, and stay logged in here.
                    </span>
                  </div>
                </div>
              </div>

              {/* Application Passwords Section */}
              <h2 className="!text-xl font-mideum mt-10 mb-4">Application Passwords</h2>
              <div className="mb-8 space-y-4">
                <p className="text-gray-700 !text-sx">Application passwords allow authentication via non-interactive systems, such as XML-RPC or the REST API, without providing your actual password. Application passwords can be easily revoked. They cannot be used for traditional logins to your website.</p>
                <p className="text-gray-700 !text-sx">The application password feature requires HTTPS, which is not enabled on this site.</p>
                <p className="text-gray-700 !text-sx">If this is a development website, you can <a href="#" className="text-blue-600 underline hover:text-blue-800">set the environment type accordingly</a> to enable application passwords.</p>
              </div>

              {/* Update Profile Button */}
              <div className="mt-8">
                <button type="button" className="bg-blue-500 text-white px-3 py-2 !text-sm  font-normal hover:bg-blue-700">Update Profile</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}