import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SettingsForm from './SettingsForm';

describe('SettingsForm', () => {
  it('shows validation errors for an empty form', () => {
    render(<SettingsForm />);

    expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
    expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number must contain exactly 10 digits/i)).toBeInTheDocument();
  });

  it('shows an error for invalid email', async () => {
    render(<SettingsForm />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/full name/i), 'Ava Stone');
    await user.type(screen.getByLabelText(/email/i), 'not-an-email');
    await user.type(screen.getByLabelText(/phone number/i), '1234567890');

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });

  it('shows an error for invalid phone', async () => {
    render(<SettingsForm />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/full name/i), 'Ava Stone');
    await user.type(screen.getByLabelText(/email/i), 'ava@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '12abc34567');

    expect(screen.getByText(/phone number must contain only digits/i)).toBeInTheDocument();
  });

  it('submits successfully when the form is valid', async () => {
    render(<SettingsForm />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/full name/i), 'Ava Stone');
    await user.type(screen.getByLabelText(/email/i), 'ava@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '1234567890');

    const saveButton = screen.getByRole('button', { name: /save/i });
    expect(saveButton).toBeEnabled();

    await user.click(saveButton);

    expect(screen.getByText(/settings saved successfully/i)).toBeInTheDocument();
  });
});
