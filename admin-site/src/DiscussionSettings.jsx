import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DiscussionSettings() {
  return (
    <div>
      <Header />
      <main className="flex flex-col mx-auto bg-gray-100 min-h-screen p-0">
        <div className='flex flex-row'>
          <div className="w-46">
            <Sidebar />
          </div>
          <div className="flex-1 mt-10 bg-gray-100 border border-[#e5e7eb] rounded shadow-sm p-8">
            <h1 className="!text-3xl !font-semibold mb-6">Discussion Settings</h1>

            <form className="space-y-8">
              {/* Default post settings */}
              <div className="mb-6">
                <div className="font-semibold mb-2 text-base">Default post settings</div>
                <Checkbox label="Attempt to notify any blogs linked to from the post" checked />
                <Checkbox label="Allow link notifications from other blogs (pingbacks and trackbacks) on new posts" checked />
                <Checkbox label="Allow people to submit comments on new posts" checked />
                <div className="text-xs text-gray-500 mt-1">
                  Individual posts may override these settings. Changes here will only be applied to new posts.
                </div>
              </div>

              {/* Other comment settings */}
              <div className="mb-6">
                <div className="font-semibold mb-2 text-base mt-6">Other comment settings</div>
                <Checkbox label="Comment author must fill out name and email" checked />
                <Checkbox label="Users must be registered and logged in to comment" />
                <Checkbox label="Automatically close comments on old posts" />
                <div className="ml-6 flex items-center gap-3 mt-1">
                  <Label text="Close comments when post is how many days old" />
                  <Input type="number" value="14" className="bg-white" />
                </div>
                <Checkbox label="Show comments cookies opt-in checkbox, allowing comment author cookies to be set" checked />
                <Checkbox label="Enable threaded (nested) comments" checked />
                <div className="ml-6 flex items-center gap-3 mt-1">
                  <Label text="Number of levels for threaded (nested) comments" />
                  <Select className="bg-white" options={Array.from({ length: 9 }, (_, i) => `${i + 2}`)} selected="5" />
                </div>
              </div>


              {/* Comment Pagination */}
              <Section title="Comment Pagination">
                <Checkbox label="Break comments into pages" />
                <div className="ml-6">
                  <Label text="Top level comments per page" />
                  <Input type="number" min={1} />
                </div>
                <div className="ml-6">
                  <Label text="Comments page to display by default" />
                  <Select options={['Last page', 'First page']} />
                </div>
                <div className="ml-6">
                  <Label text="Comments to display at the top of each page" />
                  <Select options={['Older', 'Newer']} />
                </div>
              </Section>

              {/* Email me whenever */}
              <Section title="Email me whenever">
                <Checkbox label="Anyone posts a comment" />
                <Checkbox label="A comment is held for moderation" />
              </Section>

              {/* Before a comment appears */}
              <Section title="Before a comment appears">
                <Checkbox label="Comment must be manually approved" />
                <Checkbox label="Comment author must have a previously approved comment" />
              </Section>

              {/* Comment Moderation */}
              <Section title="Comment Moderation">
                <Label text="Hold a comment if it contains this many links:" />
                <Input type="number" />
                <Label text="Words to hold for moderation (one per line):" />
                <textarea rows="5" className="w-full bg-white border rounded p-2"></textarea>
              </Section>

              {/* Disallowed Comment Keys */}
              <Section title="Disallowed Comment Keys">
                <Label text="Words/IPs to trash comment (one per line):" />
                <textarea rows="5" className="w-full bg-white border rounded p-2"></textarea>
              </Section>

              {/* Avatars */}
              <Section title="Avatars">
                <Checkbox label="Show Avatars" checked />
                <div className="mt-4">
                  <Label text="Maximum Rating" />
                  <div className="space-y-2 ml-4">
                    <Radio label="G - Suitable for all" name="avatar_rating" />
                    <Radio label="PG - Possibly offensive" name="avatar_rating" />
                    <Radio label="R - Adult audiences" name="avatar_rating" />
                    <Radio label="X - Very mature" name="avatar_rating" />
                  </div>
                </div>

                <div className="bg-gray-100 p-6 max-w-2xl mt-6">
                  <h2 className="text-lg font-semibold mb-2">Default Avatar</h2>
                  <p className="text-gray-600 mb-4">
                    For users without a custom avatar of their own, you can either display a generic logo or a generated one based on their email address.
                  </p>

                  <div className="space-y-4">
                    {avatarOptions.map(({ label, value, src }) => (
                      <label key={value} className="flex items-center space-x-4">
                        <input
                          type="radio"
                          name="avatar_default"
                          value={value}
                          defaultChecked={value === 'mystery'}
                          className="accent-blue-600"
                        />
                        <img src={src} alt={label} className="w-8 h-8 rounded-full border" />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-6">
                    <button className="!bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              </Section>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable components
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="space-y-2 ml-4">{children}</div>
  </div>
);

const Label = ({ text }) => <label className="block text-sm font-medium mb-1">{text}</label>;

const Input = ({ type = 'text', min, value }) => (
  <input type={type} min={min} defaultValue={value} className="w-24 border bg-white rounded px-2 py-1" />
);

const Checkbox = ({ label, checked = false }) => (
  <label className="flex items-start gap-2">
    <input type="checkbox" defaultChecked={checked} className="mt-1 accent-blue-600" />
    <span>{label}</span>
  </label>
);

const Radio = ({ label, name }) => (
  <label className="flex items-center gap-2">
    <input type="radio" name={name} className="accent-blue-600" />
    <span>{label}</span>
  </label>
);

const Select = ({ options, selected }) => (
  <select className="border rounded bg-white px-2 py-1" defaultValue={selected}>
    {options.map(opt => (
      <option key={opt} value={opt}>{opt}</option>
    ))}
  </select>
);

const avatarOptions = [
  { label: 'Mystery Person', value: 'mystery', src: 'https://secure.gravatar.com/avatar/?d=mm&s=48' },
  { label: 'Blank', value: 'blank', src: 'https://secure.gravatar.com/avatar/?d=blank&s=48' },
  { label: 'Gravatar Logo', value: 'gravatar_default', src: 'https://secure.gravatar.com/avatar/?d=gravatar&s=48' },
  { label: 'Identicon (Generated)', value: 'identicon', src: 'https://secure.gravatar.com/avatar/?d=identicon&s=48' },
  { label: 'Wavatar (Generated)', value: 'wavatar', src: 'https://secure.gravatar.com/avatar/?d=wavatar&s=48' },
  { label: 'MonsterID (Generated)', value: 'monsterid', src: 'https://secure.gravatar.com/avatar/?d=monsterid&s=48' },
  { label: 'Retro (Generated)', value: 'retro', src: 'https://secure.gravatar.com/avatar/?d=retro&s=48' },
  { label: 'RoboHash (Generated)', value: 'robohash', src: 'https://secure.gravatar.com/avatar/?d=robohash&s=48' },
];