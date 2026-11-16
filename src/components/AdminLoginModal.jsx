import React, { useState } from 'react';
import {
  Lock,
  KeyRound,
  ShieldCheck,
  AlertCircle,
  Eye,
  EyeOff,
  User,
  X,
  ArrowRight
} from 'lucide-react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validUsernames = ['itsvikash143@gmail.com', 'itsvikash143', 'admin', 'admin@lvboard.edu'];
  const validPasswords = ['LvBoard@@2026', 'lvboard@@2026'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim();

    if (!trimmedUser) {
      setError('Please enter your administrator username or email.');
      return;
    }

    if (!trimmedPass) {
      setError('Please enter your administrator passcode.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const isPassValid = trimmedPass === 'LvBoard@@2026' || validPasswords.includes(trimmedPass.toLowerCase());
      const isUserValid = validUsernames.includes(trimmedUser);

      if (isUserValid && isPassValid) {
        setIsLoading(false);
        const adminSession = {
          username: trimmedUser === 'itsvikash143@gmail.com' ? 'itsvikash143@gmail.com' : username.trim(),
          role: 'Chief Administrator & Directorate',
          loginTime: new Date().toISOString()
        };
        onLoginSuccess(adminSession, rememberMe);
        onClose();
      } else {
        setIsLoading(false);
        setError('Invalid administrator credentials. Access denied.');
      }
    }, 400);
  };

  return (
    <div className="admin-login-backdrop" onClick={onClose}>
      <div className="admin-login-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="admin-login-header">
          <div className="admin-login-title-group">
            <div className="admin-login-icon-badge">
              <Lock size={22} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="admin-login-title">LV Board Directorate Portal</h3>
              <p className="admin-login-subtitle">Faculty & Chief Academic Officer Authentication</p>
            </div>
          </div>
          <button className="admin-login-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="admin-login-body">
          {error && (
            <div className="admin-login-error">
              <AlertCircle size={16} className="shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="admin-username">Administrator ID / Username</label>
              <div className="input-wrap">
                <User size={16} className="input-icon" />
                <input
                  id="admin-username"
                  type="text"
                  placeholder="Enter administrator email or ID..."
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (error) setError('');
                  }}
                  autoFocus
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="admin-password">Administrator Passcode</label>
              <div className="input-wrap">
                <KeyRound size={16} className="input-icon" />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter administrator passcode..."
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-options-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Administrator Session</span>
              </label>
            </div>

            <button type="submit" className="btn-admin-submit" disabled={isLoading}>
              {isLoading ? (
                <span>Authenticating Directorate Credentials...</span>
              ) : (
                <>
                  <span>Sign In as Administrator</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Privileges Overview */}
          <div className="admin-privileges-box">
            <div className="privilege-title">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Administrator Privileges Granted:</span>
            </div>
            <ul className="privilege-list">
              <li>Full access to Question Bank Audit & Syllabus Conformance Dashboard</li>
              <li>AI Exam Probability Engine & 10-Year Historical Concept Registry</li>
              <li>Automated 10-Point Platform Quality Verification Test Runner</li>
              <li>Question Priority Inspector & Live Faculty Verification Overrides</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
