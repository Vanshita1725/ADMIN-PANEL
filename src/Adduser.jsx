import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const roles = [
  { value: "subscriber", label: "Subscriber" },
  { value: "contributor", label: "Contributor" },
  { value: "author", label: "Author" },
  { value: "editor", label: "Editor" },
  { value: "administrator", label: "Administrator" },
];

function generatePassword(length = 16) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

export default function Adduser() {
  const [form, setForm] = useState({
    user_login: "",
    email: "",
    first_name: "",
    last_name: "",
    url: "",
    password: "",
    showPassword: false,
    send_user_notification: true,
    role: roles[0].value,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleGeneratePassword = () => {
    setForm((prev) => ({ ...prev, password: generatePassword(), showPassword: true }));
  };

  const handleToggleShowPassword = () => {
    setForm((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 mt-8 overflow-y-auto p-0">
          <div className="max-w-3xl ms-46 py-8 px-4">
            <h1 className="!text-2xl !text-gray-700 !font-normal mb-3">Add User</h1>
            <p className="mb-8 text-gray-700">Create a brand new user and add them to this site.</p>
            <form className="space-y-6">
        {/* Username */}
        <div className="flex items-center">
          <label htmlFor="user_login" className="w-56  pr-6 font-medium">
            Username <span className="text-gray-500">(required)</span>
          </label>
          <input
            id="user_login"
            name="user_login"
            type="text"
            className="w-[400px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.user_login}
            onChange={handleChange}
            autoComplete="off"
            maxLength={60}
          />
        </div>
        {/* Email */}
        <div className="flex ">
          <label htmlFor="email" className="w-56  pr-6 font-medium">
            Email <span className="text-gray-500">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-[400px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        {/* First Name */}
        <div className="flex items-center">
          <label htmlFor="first_name" className="w-56  pr-6 font-medium">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            className="w-[400px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="flex items-center">
          <label htmlFor="last_name" className="w-56  pr-6 font-medium">
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            className="w-[400px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>
        {/* Website */}
        <div className="flex items-center">
          <label htmlFor="url" className="w-56  pr-6 font-medium">
            Website
          </label>
          <input
            id="url"
            name="url"
            type="url"
            className="w-[400px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.url}
            onChange={handleChange}
          />
        </div>
        {/* Password */}
        <div className="flex items-start">
          <label htmlFor="password" className="w-56  pr-6 font-medium pt-2">
            Password
          </label>
          <div className="w-[400px]">
            <button
              type="button"
              className="border border-blue-400 text-blue-700 bg-white px-3 py-1 rounded hover:bg-blue-50 text-sm mb-2"
              onClick={handleGeneratePassword}
            >
              Generate password
            </button>
            <div className="flex space-x-2">
              <input
                id="password"
                name="password"
                type={form.showPassword ? "text" : "password"}
                className="flex-1 border bg-white border-gray-300 rounded px-3 py-2"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                spellCheck={false}
              />
              <button
                type="button"
                className="border border-blue-400 text-blue-700 bg-white px-3 py-2 rounded flex items-center text-sm"
                onClick={handleToggleShowPassword}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                {form.showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>
        {/* Send User Notification */}
        <div className="flex items-center">
          <label className="w-56  pr-6 font-medium">
            Send User Notification
          </label>
          <div className="flex items-center">
            <input
              id="send_user_notification"
              name="send_user_notification"
              type="checkbox"
              className="mr-2"
              checked={form.send_user_notification}
              onChange={handleChange}
            />
            <label htmlFor="send_user_notification" className="text-gray-700">
              Send the new user an email about their account
            </label>
          </div>
        </div>
        {/* Role */}
        <div className="flex items-center">
          <label htmlFor="role" className="w-56  pr-6 font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            className="w-[160px] border bg-white border-gray-300 rounded px-3 py-2"
            value={form.role}
            onChange={handleChange}
          >
            {roles.map((role) => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </select>
        </div>
        {/* Add User Button */}
        <div className="flex items-center">
          <div className="w-56"></div>
          <button
            type="button"
            className=" bg-white px-5 py-2 rounded font-semibold border border-gray-200 cursor-not-allowed mt-2"
            disabled
          >
            Add User
          </button>
        </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}