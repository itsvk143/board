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
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('itsvikash143@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validUsernames = ['itsvikash143@gmail.com', 'itsvikash143', 'admin', 'admin@lvboard.edu'];
  const validPasswords = ['LvBoard@@2026', 'lvboard@@2026', 'admin2026', 'admin'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim();

    if (!trimmedUser) {
      setError('Please enter your administrator email (itsvikash143@gmail.com).');
      return;
    }

    if (!trimmedPass) {
      setError('Please enter your administrator passcode.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const isPassValid = trimmedPass === 'LvBoard@@2026' || validPasswords.includes(trimmedPass.toLowerCase());
      const isUserValid = validUsernames.includes(trimmedUser) || trimmedUser.length >= 3;

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
        setError('Invalid administrator credentials. (Hint: Try username "itsvikash143@gmail.com" and password "LvBoard@@2026")');
      }
    }, 400);
  };

  const handleQuickDemo = () => {
    setUsername('itsvikash143@gmail.com');
    setPassword('LvBoard@@2026');
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const adminSession = {
        username: 'itsvikash143@gmail.com',
        role: 'Chief Administrator & Directorate',
        loginTime: new Date().toISOString()
      };
      onLoginSuccess(adminSession, true);
      onClose();
    }, 300);
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
                  placeholder="e.g. itsvikash143@gmail.com"
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
                  placeholder="Enter administrator passcode (LvBoard@@2026)..."
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
              <span className="passcode-hint-tag">Default: LvBoard@@2026</span>
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

          {/* Quick Demo Login Option */}
          <div className="admin-demo-box">
            <div className="demo-box-text">
              <Sparkles size={14} className="text-amber-400" />
              <span>Instant Access for Evaluators & Directorate:</span>
            </div>
            <button
              type="button"
              className="btn-demo-login"
              onClick={handleQuickDemo}
              disabled={isLoading}
            >
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>One-Click Sign In (itsvikash143@gmail.com)</span>
            </button>
          </div>

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
