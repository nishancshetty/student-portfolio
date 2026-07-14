const { useState } = React;

function Field({ label, name, type = 'text', value, onChange, placeholder, options, checked }) {
  const commonProps = {
    id: name,
    name,
    onChange,
    value,
    checked,
    placeholder,
  };

  return React.createElement(
    'label',
    { className: 'field-group' },
    React.createElement('span', { className: 'field-label' }, label),
    type === 'select'
      ? React.createElement(
          'select',
          { id: name, name, value, onChange },
          options.map((option) =>
            React.createElement(
              'option',
              { key: option.value, value: option.value },
              option.label
            )
          )
        )
      : type === 'checkbox'
        ? React.createElement('input', { ...commonProps, type: 'checkbox' })
        : type === 'radio'
          ? React.createElement('input', { ...commonProps, type: 'radio' })
          : React.createElement('input', { ...commonProps, type })
  );
}

function SettingsForm() {
  const [settings, setSettings] = useState({
    name: 'Nishan Shetty',
    email: 'nishan@example.com',
    username: 'nishan.dev',
    theme: 'dark',
    notifications: true,
    visibility: 'private',
    language: 'en',
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return React.createElement(
    'div',
    { className: 'settings-shell' },
    React.createElement(
      'div',
      { className: 'settings-card' },
      React.createElement(
        'div',
        { className: 'card-header' },
        React.createElement('p', { className: 'eyebrow' }, 'Portfolio preferences'),
        React.createElement('h1', null, 'Account settings'),
        React.createElement(
          'p',
          { className: 'card-text' },
          'Customize how your profile appears and how you receive updates.'
        )
      ),
      React.createElement(
        'form',
        { className: 'settings-form', onSubmit: handleSubmit },
        React.createElement(
          'div',
          { className: 'form-grid' },
          React.createElement(Field, {
            label: 'Full name',
            name: 'name',
            placeholder: 'Your name',
            value: settings.name,
            onChange: handleChange,
          }),
          React.createElement(Field, {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'you@example.com',
            value: settings.email,
            onChange: handleChange,
          }),
          React.createElement(Field, {
            label: 'Username',
            name: 'username',
            placeholder: 'username',
            value: settings.username,
            onChange: handleChange,
          }),
          React.createElement(Field, {
            label: 'Theme',
            name: 'theme',
            type: 'select',
            value: settings.theme,
            onChange: handleChange,
            options: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System default' },
            ],
          }),
          React.createElement(Field, {
            label: 'Notifications',
            name: 'notifications',
            type: 'checkbox',
            checked: settings.notifications,
            onChange: handleChange,
          }),
          React.createElement('div', { className: 'field-group' },
            React.createElement('span', { className: 'field-label' }, 'Profile visibility'),
            React.createElement('div', { className: 'radio-group' },
              React.createElement('label', { className: 'radio-option' },
                React.createElement('input', {
                  type: 'radio',
                  name: 'visibility',
                  value: 'public',
                  checked: settings.visibility === 'public',
                  onChange: handleChange,
                }),
                React.createElement('span', null, 'Public')
              ),
              React.createElement('label', { className: 'radio-option' },
                React.createElement('input', {
                  type: 'radio',
                  name: 'visibility',
                  value: 'private',
                  checked: settings.visibility === 'private',
                  onChange: handleChange,
                }),
                React.createElement('span', null, 'Private')
              )
            )
          ),
          React.createElement(Field, {
            label: 'Preferred language',
            name: 'language',
            type: 'select',
            value: settings.language,
            onChange: handleChange,
            options: [
              { value: 'en', label: 'English' },
              { value: 'hi', label: 'Hindi' },
              { value: 'kn', label: 'Kannada' },
            ],
          })
        ),
        React.createElement(
          'div',
          { className: 'actions' },
          React.createElement('button', { type: 'submit', className: 'primary-btn' }, 'Save changes'),
          saved ? React.createElement('p', { className: 'status' }, 'Settings saved successfully.') : null
        )
      ),
      React.createElement(
        'div',
        { className: 'summary-card' },
        React.createElement('h2', null, 'Preview'),
        React.createElement('p', null, `Name: ${settings.name}`),
        React.createElement('p', null, `Theme: ${settings.theme}`),
        React.createElement('p', null, `Notifications: ${settings.notifications ? 'Enabled' : 'Disabled'}`),
        React.createElement('p', null, `Visibility: ${settings.visibility}`)
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(SettingsForm));
