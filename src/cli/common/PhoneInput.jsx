import React, { useState } from "react";
import { Input, Space, Select } from "antd";

function PhoneInput({
  id,
  value = {},
  onChange,
  placeholder = null,
  size = "auto",
}) {
  const [prefix, setPrefix] = useState("86");
  const [phone, setPhone] = useState("");
  const triggerChange = (changedValue) => {
    onChange?.({ ...value, ...changedValue });
  };
  const onPrefixChange = (newPrefix) => {
    if (!("prefix" in value)) {
      setPrefix(newPrefix);
    }
    triggerChange({ prefix: newPrefix });
  };
  const onPhoneChange = (e) => {
    const newPhone = e.target.value;
    if (!("phone" in value)) {
      setPhone(newPhone);
    }
    triggerChange({ phone: newPhone });
  };

  return (
    <span id={id}>
      <Space.Compact block>
        <Select
          size={size}
          value={value.prefix || prefix}
          onChange={onPrefixChange}
          style={{ width: 100 }}
          options={[
            { label: "+86", value: "86" },
            { label: "+351", value: "351" },
          ]}
        />
        <Input
          size={size}
          placeholder={placeholder}
          value={value.phone || phone}
          onChange={onPhoneChange}
          style={{ width: "100%" }}
        />
      </Space.Compact>
    </span>
  );
}

export default PhoneInput;
