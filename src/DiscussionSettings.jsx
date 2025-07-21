import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import g from './assets/g.jpg'
import indenticon from './assets/identicon.png'
import wavater from './assets/wavater.png';
import monstar from './assets/monstar.png';
import restro from './assets/restro.png';
import robo from './assets/robo.png';

export default function DiscussionSettings() {
  return (
    <div>
      <Header />
      <main className="flex flex-col lg:ms-42 bg-gray-100 min-h-screen p-0">
        <div className='flex flex-row'>

          <Sidebar />

          <div className="flex-1 mt-10 bg-gray-100 border border-[#e5e7eb] rounded shadow-sm ps-5">
            <h1 className="!text-2xl mt-2 !font-normal mb-6">Discussion Settings</h1>

            <form className="space-y-8">
              {/* Default post settings */}
              <div className="mb-6 mt-6  ">
                <div className='flex gap-16'>
                  <div className="font-semibold mb-2">Default post settings</div>
                  <div className=" flex flex-col text-gray-500 ml-2 gap-2  mt-1">
                    <Checkbox label="Attempt to notify any blogs linked to from the post" checked />
                    <Checkbox label="Allow link notifications from other blogs (pingbacks and trackbacks) on new posts" checked />
                    <Checkbox label="Allow people to submit comments on new posts" checked />
                    <div className=" text-gray-500 mt-1">
                      Individual posts may override these settings. Changes here will only be applied to new posts.
                    </div>
                  </div>
                </div>

              </div>

              {/* Other comment settings */}
              <div className="mb-6">
                <div className='flex  gap-10'>
                  <div className="font-semibold mb-2 text-base mt-6">Other comment settings</div>
                  <div classname="flex-col flex">
                    <div className="text-gray-500 flex flex-col ml-2 gap-2 mt-8">
                      <Checkbox label="Comment author must fill out name and email" checked />
                      <Checkbox label="Users must be registered and logged in to comment" />
                      <Checkbox label="Automatically close comments on old posts" />
                    </div>
                    <div className="ml-6 flex text-gray-500  items-center gap-3 mt-2">
                      <Label text="Close comments when post is how many days old" />
                      <Input type="number" value="14" className="bg-white !w-20" />
                    </div>
                    <div className="text-gray-500 flex flex-col ml-2 gap-2 mt-2">
                      <Checkbox label="Show comments cookies opt-in checkbox, allowing comment author cookies to be set" checked />
                      <Checkbox label="Enable threaded (nested) comments" checked />
                    </div>
                    <div className="ml-6 text-gray-500 flex items-center gap-3 mt-1">
                      <Label text="Number of levels for threaded (nested) comments" />
                      <Select className="bg-white" options={Array.from({ length: 9 }, (_, i) => `${i + 2}`)} selected="5" />

                    </div>
                  </div>
                </div>
              </div>


              {/* Comment Pagination */}
              <div class="mb-8 gap-15   flex">
                <div class=" font-medium mb-4">Comment Pagination</div>
                <div className='pl-2'>
                  <div class="flex items-center gap-2 space-x-2 mb-4">
                    <input type="checkbox" className="form-checkbox" id="break-pages" />
                    <label for="break-pages" className='text-gray-500'>Break comments into pages</label>
                  </div>

                  <div class="ml-6 mb-4">
                    <label class="block text-sm text-gray-500 font-normal mb-1">Top level comments per page</label>
                    <input type="number" value="50" class="border rounded px-3 py-1 w-24" />
                  </div>

                  <div class="ml-6 mb-4">
                    <label class="block text-sm text-gray-500 font-normal mb-1">Comments page to display by default</label>
                    <select class="border rounded px-3 py-1">
                      <option selected>last page</option>
                      <option>first page</option>
                    </select>
                  </div>

                  <div class="ml-6">
                    <label class="blocktext-sm text-gray-500 font-normal mb-1">Comments to display at the top of each page</label>
                    <select class="border rounded px-3 py-1">
                      <option selected>older</option>
                      <option>newer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Email me whenever */}
              <div class="mb-8 flex gap-16">
                <div class=" font-medium mb-4">Email me whenever</div>
                <div>
                  <div className='pl-6'>
                    <div class="flex items-center text-gray-500 gap-3 space-x-2  mb-2">
                      <input type="checkbox" checked class="form-checkbox" id="email-posts" />
                      <label for="email-posts">Anyone posts a comment</label>
                    </div>
                    <div class="flex gap-3 text-gray-500 items-center space-x-2">
                      <input type="checkbox" checked class="form-checkbox" id="email-held" />
                      <label for="email-held">A comment is held for moderation</label>
                    </div>
                  </div>
                </div>

              </div>


              {/* Before a comment appears */}
              <div className='flex gap-9'>
                <div class=" font-medium mb-4">Before a comment appears</div>
                <div className=''>
                  <div class="flex items-center text-gray-500 space-x-2 mb-2">
                    <input type="checkbox" class="form-checkbox" id="manual-approve" />
                    <label for="manual-approve">Comment must be manually approved</label>
                  </div>
                  <div class="flex items-center text-gray-500 space-x-2">
                    <input type="checkbox" checked class="form-checkbox" id="previous-author" />
                    <label for="previous-author">Comment author must have a previously approved comment</label>
                  </div>
                </div>
              </div>

              {/* Comment Moderation */}
              <div class="mb-6 gap-17 flex pr-">
                <div class="font-medium mb-4">Comment Moderation</div>
                <div className="w-260">
                  <div class="flex items-center space-x-2 mb-2">
                    <label class="font-normal">Hold a comment in the queue if it contains</label>
                    <input type="number" value="2" class="border rounded flex ps-2 py-1 w-15" />
                    <span>or more links. <span class="text-sm text-gray-600">(A common characteristic of comment spam is a large number of hyperlinks.)</span></span>
                  </div>

                  <p class="text-sm text-gray-600 mb-2">
                    When a comment contains any of these words in its content, author name, URL, email, IP address, or browser’s user agent string, it will be held in the
                    <a href="#" class="text-blue-600 underline">moderation queue</a>. One word or IP address per line. It will match inside words, so “press” will match “WordPress”.
                  </p>

                  <textarea rows="5" class="w-full h-60 border rounded p-2 bg-white"></textarea>
                </div>
              </div>
              {/* Disallowed Comment Keys */}
             <div class="mb-6 gap-10 flex">
      <div class=" font-medium mb-4">Disallowed Comment Keys</div>
      <div className='w-262'>
      <p class="text-sm text-gray-600 mb-2">
        When a comment contains any of these words in its content, author name, URL, email, IP address, or browser’s user agent string, it will be put in the Trash.
        One word or IP address per line. It will match inside words, so “press” will match “WordPress”.
      </p>
      <textarea rows="5" class="w-full border h-60 rounded p-2 bg-white"></textarea>
    </div>
    </div>

              {/* Avatars */}
    <div class="mb-6">
      <h5 class=" font-semibold mb-2">Avatars</h5>
      <p class="text-sm text-gray-600 mb-4">
        An avatar is an image that can be associated with a user across multiple websites.
        In this area, you can choose to display avatars of users who interact with the site.
      </p>
      <div class="flex gap-20 mb-4">
        <div className='font-medium mb-2'>Avatar Display</div>
      <div class="flex items-center ml-10  text-gray-500  mb-6">
        <input type="checkbox" checked class="form-checkbox" id="show-avatars" />
        <label for="show-avatars" class="font-normal">Show Avatars</label>
      </div>
      </div>

      <div class="mt-4 flex gap-20">
        <label class="font-medium block mb-2">Maximum Rating</label>
        <div class="ml-4 space-y-2">
          <div class="flex items-center space-x-2">
            <input type="radio" name="avatar_rating" class="form-radio" id="rating-g" />
            <label for="rating-g">G - Suitable for all</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" name="avatar_rating" class="form-radio" id="rating-pg" />
            <label for="rating-pg">PG - Possibly offensive</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" name="avatar_rating" class="form-radio" id="rating-r" />
            <label for="rating-r">R - Adult audiences</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="radio" name="avatar_rating" class="form-radio" id="rating-x" />
            <label for="rating-x">X - Very mature</label>
          </div>
        </div>
      </div>

    </div>

                <div className="bg-gray-100 gap-20  flex  mt-6">
                  <div className=" font-medium mb-2">Default Avatar</div>
                  <div>               
                      <p className="text-gray-600 ps-10 mb-4">
                    For users without a custom avatar of their own, you can either display a generic logo or a generated one based on their email address.
                  </p>

                  <div className="flex flex-col ps-10 gap-4">
                    {avatarOptions.map(({ label, value, src }) => (
                      <label key={value} className="!flex gap-2 flex-row items-center ">
                        <input
                          type="radio"
                          name="avatar_default"
                          value={value}
                          defaultChecked={value === 'mystery'}
                          className="#2271b1"
                        />
                        <img src={src} alt={label} className="w-10 h-10 border" />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                  </div>
                  </div>

                  <div className="mt-6 mb-3">
                    <button className="!bg-[#2271b1] rounded text-white px-3 py-2  hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                
             
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
  { label: 'Gravatar Logo', value: 'gravatar_default', src: g },
  { label: 'Identicon (Generated)', value: 'identicon', src: indenticon },
  { label: 'Wavatar (Generated)', value: 'wavatar', src: wavater },
  { label: 'MonsterID (Generated)', value: 'monsterid', src: monstar },
  { label: 'Retro (Generated)', value: 'retro', src: restro },
  { label: 'RoboHash (Generated)', value: 'robohash', src: robo  },
];