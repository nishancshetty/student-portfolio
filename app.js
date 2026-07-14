const { useState } = React;

function SettingsForm() {
  const [formData, setFormData] = useState({
    name: "Aisha Khan",
    email: "aisha@example.com",
    theme: "dark",
    language: "en",
    timezone: "UTC",
    marketing: true,
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="card">
      <p className="eyebrow">Preferences</p>
      <h1>Account settings</h1>
      <p className="subtitle">
        Update your profile details and choose how you want to receive updates.
      </p>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inline-grid">
          <div className="field-group">
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme" value={formData.theme} onChange={handleChange}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="language">Language</label>
            <select id="language" name="language" value={formData.language} onChange={handleChange}>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="timezone">Timezone</label>
          <select id="timezone" name="timezone" value={formData.timezone} onChange={handleChange}>
            <option value="UTC">UTC</option>
            <option value="EST">EST</option>
            <option value="IST">IST</option>
            <option value="CET">CET</option>
          </select>
        </div>

        <label className="checkbox-row" htmlFor="marketing">
          <input
            id="marketing"
            name="marketing"
            type="checkbox"
            checked={formData.marketing}
            onChange={handleChange}
          />
          <span>Send me product updates and announcements</span>
        </label>

        <div className="actions">
          <button type="submit">Save changes</button>
        </div>

        {saved && (
          <p className="success" role="status">
            Settings saved successfully.
          </p>
        )}
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsForm />
  </React.StrictMode>
);
