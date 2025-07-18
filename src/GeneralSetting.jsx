import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    siteTitle: 'geekyscript',
    tagline: '',
    wpUrl: 'http://localhost/wordpress',
    siteUrl: 'http://localhost/wordpress',
    adminEmail: 'harshkothari2909@gmail.com',
    membership: false,
    defaultRole: 'Subscriber',
    siteLanguage: 'en',
    timezone: 'UTC',
    dateFormat: 'F j, Y',
    timeFormat: 'g:i a',
    weekStartsOn: 'Sunday',
    customDateFormat: '',
    customTimeFormat: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
     <div>
      <Header />     
      <main className="flex flex-col lg:ms-46 bg-gray-100 min-h-screen p-0">
        <div className='flex flex-row'>
       
            <Sidebar />
        
          <div className="flex-1 mt-10 bg-gray-100 border border-[#e5e7eb] rounded shadow-sm p-8">
            <h1 className="!text-3xl !font-semibold text-[#1d2327] mb-8">General Settings</h1>
            <form onSubmit={handleSubmit}>
              {/* Site Title */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="site-title">Site Title</label>
                <div className="flex-1">
                  <input
                    id="site-title"
                    name="siteTitle"
                    type="text"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.siteTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Tagline */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="tagline">Tagline</label>
                <div className="flex-1">
                  <input
                    id="tagline"
                    name="tagline"
                    type="text"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.tagline}
                    onChange={handleChange}
                  />
                  <p className="text-[#646970] text-xs mt-1">
                    In a few words, explain what this site is about. Example: "Just another WordPress site."
                  </p>
                </div>
              </div>

              {/* Site Icon */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2">Site Icon</label>
                <div className="flex-1">
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      className="border border-dashed border-[#8c8f94] bg-gray-100 px-4 py-2 rounded"
                      onChange={e => {
                        // Simple preview logic (optional)
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = function(ev) {
                            const img = document.getElementById('site-icon-preview');
                            if (img) img.src = ev.target.result;
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  <img id="site-icon-preview" alt="Site Icon Preview" className="mt-2 rounded border w-16 h-16 object-cover" style={{ display: 'none' }} onLoad={e => e.target.style.display = 'block'} />
                  <p className="text-[#646970] text-xs mt-1">
                    The Site Icon is what you see in browser tabs, bookmark bars, and within the WordPress mobile apps. It should be square and at least
                    <span className="border px-1">512</span> by <span className="border px-1">512</span> pixels.
                  </p>
                </div>
              </div>

              {/* WordPress Address (URL) */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="wp-url">WordPress Address (URL)</label>
                <div className="flex-1">
                  <input
                    id="wp-url"
                    name="wpUrl"
                    type="url"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.wpUrl}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Site Address (URL) */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="site-url">Site Address (URL)</label>
                <div className="flex-1">
                  <input
                    id="site-url"
                    name="siteUrl"
                    type="url"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.siteUrl}
                    onChange={handleChange}
                  />
                  <p className="text-[#646970] text-xs mt-1">
                    Enter the same address here unless you
                    <a href="#" className="text-[#0073aa] hover:underline"> want your site home page to be different from your WordPress installation directory</a>.
                  </p>
                </div>
              </div>

              {/* Administration Email Address */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="admin-email">Administration Email Address</label>
                <div className="flex-1">
                  <input
                    id="admin-email"
                    name="adminEmail"
                    type="email"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.adminEmail}
                    onChange={handleChange}
                  />
                  <p className="text-[#646970] text-xs mt-1">
                    This address is used for admin purposes. If you change this, an email will be sent to your new address to confirm it.
                    <b> The new address will not become active until confirmed.</b>
                  </p>
                </div>
              </div>

              {/* Membership */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2">Membership</label>
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="membership"
                    name="membership"
                    checked={formData.membership}
                    onChange={handleChange}
                  />
                  <label htmlFor="membership" className="text-lg">Anyone can register</label>
                </div>
              </div>

              {/* New User Default Role */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="default-role">New User Default Role</label>
                <div className="flex-1">
                  <select
                    id="default-role"
                    name="defaultRole"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.defaultRole}
                    onChange={handleChange}
                  >
                    <option>Subscriber</option>
                    <option>Contributor</option>
                    <option>Author</option>
                    <option>Editor</option>
                    <option>Administrator</option>
                  </select>
                </div>
              </div>

              {/* Site Language */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="site-language">Site Language</label>
                <div className="flex-1">
                  <select
                    id="site-language"
                    name="siteLanguage"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.siteLanguage}
                    onChange={handleChange}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="gu">Gujarati</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                    <option value="ar">Arabic</option>
                    <option value="ru">Russian</option>
                    <option value="ja">Japanese</option>
                  </select>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="timezone">Timezone</label>
                <div className="flex-1">
                  <select
                    id="timezone"
                    name="timezone"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.timezone}
                    onChange={handleChange}
                  >
                    <option value="UTC">UTC</option>
                    <option value="Asia/Kolkata">Kolkata</option>
                    <option value="Asia/Dubai">Dubai</option>
                    <option value="America/New_York">New York</option>
                    <option value="America/Chicago">Chicago</option>
                    <option value="America/Denver">Denver</option>
                    <option value="America/Los_Angeles">Los Angeles</option>
                    <option value="Europe/London">London</option>
                    <option value="Europe/Berlin">Berlin</option>
                    <option value="Europe/Paris">Paris</option>
                    <option value="Europe/Moscow">Moscow</option>
                    <option value="Asia/Tokyo">Tokyo</option>
                    <option value="Asia/Shanghai">Shanghai</option>
                    <option value="Australia/Sydney">Sydney</option>
                    <option value="Africa/Johannesburg">Johannesburg</option>
                    <option value="America/Sao_Paulo">Sao Paulo</option>
                    <option value="Pacific/Auckland">Auckland</option>
                  </select>
                  <p className="text-[#646970] text-xs mt-1">
                    Choose either a city in the same timezone as you or a <abbr title="Coordinated Universal Time">UTC</abbr> time offset.
                  </p>
                </div>
              </div>

              {/* Date Format */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2">Date Format</label>
                <div className="flex-1">
                  <fieldset>
                    <legend className="sr-only">Date Format</legend>
                    {[
                      { value: 'F j, Y', label: 'June 8, 2024' },
                      { value: 'Y-m-d', label: '2024-06-08' },
                      { value: 'm/d/Y', label: '06/08/2024' },
                      { value: 'd/m/Y', label: '08/06/2024' },
                      { value: 'd.m.Y', label: '08.06.2024' }
                    ].map((format) => (
                      <label key={format.value} className="block mb-1">
                        <input
                          type="radio"
                          name="dateFormat"
                          value={format.value}
                          checked={formData.dateFormat === format.value}
                          onChange={handleChange}
                        />
                        <span className="ml-2">{format.label}</span> <code className="ml-2">{format.value}</code>
                      </label>
                    ))}
                    <label className="block mb-1">
                      <input
                        type="radio"
                        name="dateFormat"
                        value="custom"
                        checked={!['F j, Y', 'Y-m-d', 'm/d/Y', 'd/m/Y', 'd.m.Y'].includes(formData.dateFormat)}
                        onChange={() => setFormData(prev => ({ ...prev, dateFormat: prev.customDateFormat }))}
                      />
                      <span className="ml-2">Custom:</span>
                      <input
                        type="text"
                        name="customDateFormat"
                        className="ml-2 p-1 border rounded w-32"
                        placeholder="Custom format"
                        value={formData.customDateFormat}
                        onChange={handleChange}
                      />
                    </label>
                    <p className="mt-2"><strong>Preview:</strong> <span className="example">
                      {formData.dateFormat === 'F j, Y' ? 'June 8, 2024' :
                       formData.dateFormat === 'Y-m-d' ? '2024-06-08' :
                       formData.dateFormat === 'm/d/Y' ? '06/08/2024' :
                       formData.dateFormat === 'd/m/Y' ? '08/06/2024' :
                       formData.dateFormat === 'd.m.Y' ? '08.06.2024' : formData.customDateFormat}
                    </span></p>
                  </fieldset>
                </div>
              </div>

              {/* Time Format */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2">Time Format</label>
                <div className="flex-1">
                  <fieldset>
                    <legend className="sr-only">Time Format</legend>
                    {[
                      { value: 'g:i a', label: '8:30 am' },
                      { value: 'g:i A', label: '8:30 AM' },
                      { value: 'H:i', label: '08:30' }
                    ].map((format) => (
                      <label key={format.value} className="block mb-1">
                        <input
                          type="radio"
                          name="timeFormat"
                          value={format.value}
                          checked={formData.timeFormat === format.value}
                          onChange={handleChange}
                        />
                        <span className="ml-2">{format.label}</span> <code className="ml-2">{format.value}</code>
                      </label>
                    ))}
                    <label className="block mb-1">
                      <input
                        type="radio"
                        name="timeFormat"
                        value="custom"
                        checked={!['g:i a', 'g:i A', 'H:i'].includes(formData.timeFormat)}
                        onChange={() => setFormData(prev => ({ ...prev, timeFormat: prev.customTimeFormat }))}
                      />
                      <span className="ml-2">Custom:</span>
                      <input
                        type="text"
                        name="customTimeFormat"
                        className="ml-2 p-1 border rounded w-32"
                        placeholder="Custom format"
                        value={formData.customTimeFormat}
                        onChange={handleChange}
                      />
                    </label>
                    <p className="mt-2"><strong>Preview:</strong> <span className="example">
                      {formData.timeFormat === 'g:i a' ? '8:30 am' :
                       formData.timeFormat === 'g:i A' ? '8:30 AM' :
                       formData.timeFormat === 'H:i' ? '08:30' : formData.customTimeFormat}
                    </span></p>
                    <p className="text-xs mt-1">
                      <a href="https://wordpress.org/documentation/article/customize-date-and-time-format/" className="text-[#0073aa] hover:underline">
                        Documentation on date and time formatting
                      </a>.
                    </p>
                  </fieldset>
                </div>
              </div>

              {/* Week Starts On */}
              <div className="flex items-start mb-6">
                <label className="w-56 font-semibold pr-5 pt-2" htmlFor="week-starts">Week Starts On</label>
                <div className="flex-1">
                  <select
                    id="week-starts"
                    name="weekStartsOn"
                    className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                    value={formData.weekStartsOn}
                    onChange={handleChange}
                  >
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex items-start">
                <div className="w-56"></div>
                <div className="flex-1">
                  <button
                    type="submit"
                    className="!bg-blue-500 hover:bg-[#005a87] text-white px-6 py-2 rounded font-semibold text-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  
  );  
};

export default GeneralSettings;