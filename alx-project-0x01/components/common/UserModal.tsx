import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const initialForm: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested keys
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (keys.length === 2) {
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...(prev as any)[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (keys.length === 3) {
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...(prev as any)[keys[0]],
          [keys[1]]: {
            ...(prev as any)[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="fixed inset-0 max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">User Form</h2>

      {/* Basic Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="name" label="Name" value={formData.name} onChange={handleChange} />
        <Input name="username" label="Username" value={formData.username} onChange={handleChange} />
        <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
        <Input name="phone" label="Phone" value={formData.phone} onChange={handleChange} />
        <Input name="website" label="Website" value={formData.website} onChange={handleChange} />
      </div>

      {/* Address */}
      <fieldset className="border rounded-lg p-4">
        <legend className="text-lg font-medium text-gray-800 dark:text-white">Address</legend>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <Input name="address.street" label="Street" value={formData.address.street} onChange={handleChange} />
          <Input name="address.suite" label="Suite" value={formData.address.suite} onChange={handleChange} />
          <Input name="address.city" label="City" value={formData.address.city} onChange={handleChange} />
          <Input name="address.zipcode" label="Zip Code" value={formData.address.zipcode} onChange={handleChange} />
          <Input name="address.geo.lat" label="Latitude" value={formData.address.geo.lat} onChange={handleChange} />
          <Input name="address.geo.lng" label="Longitude" value={formData.address.geo.lng} onChange={handleChange} />
        </div>
      </fieldset>

      {/* Company */}
      <fieldset className="border rounded-lg p-4">
        <legend className="text-lg font-medium text-gray-800 dark:text-white">Company</legend>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <Input name="company.name" label="Company Name" value={formData.company.name} onChange={handleChange} />
          <Input name="company.catchPhrase" label="Catch Phrase" value={formData.company.catchPhrase} onChange={handleChange} />
          <Input name="company.bs" label="Business Strategy" value={formData.company.bs} onChange={handleChange} />
        </div>
      </fieldset>

      <div className="flex justify-between items-center">
        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Add Post
        </button>
      </div>
    </form>
  );
};

export default UserModal;

// Reusable Input Component
type InputProps = {
  name: string;
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ name, label, value, onChange, type = "text" }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} className="mt-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
    </div>
  );
}
