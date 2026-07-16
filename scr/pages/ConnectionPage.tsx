import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function ConnectionPage() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login - just show alert
    alert('Demo mode: Login functionality would be implemented with backend');
  };

  const handleDemo = () => {
    alert('Demo mode: This would bypass login for demonstration');
  };

  return (
    <main>
      {/* Header */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('nav.connection')}
            </p>
            <h1
              className="font-display font-semibold"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                letterSpacing: '-0.01em',
              }}
            >
              {t('connection.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Login Form */}
      <section
        className="section-light"
        style={{ padding: 'clamp(4rem, 8vw, 8rem) 0' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[480px] mx-auto px-4 sm:px-6"
        >
          <div className="card-light">
            {/* Logo */}
            <div className="text-center mb-6">
              <img
                src="/logo.jpg"
                alt="FN Formation"
                className="h-16 w-auto rounded-md mx-auto mb-4"
              />
              <h2
                className="font-display font-semibold"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#1A1A1A' }}
              >
                {t('connection.welcome')}
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                  style={{ color: '#1A1A1A' }}
                >
                  {t('connection.email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none"
                  style={{
                    border: '1px solid rgba(27,67,50,0.15)',
                    backgroundColor: 'white',
                    color: '#1A1A1A',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#2D6A4F';
                    e.target.style.boxShadow = '0 0 0 3px rgba(45,106,79,0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(27,67,50,0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                  style={{ color: '#1A1A1A' }}
                >
                  {t('connection.password')}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-lg text-sm transition-all duration-300 focus:outline-none"
                    style={{
                      border: '1px solid rgba(27,67,50,0.15)',
                      backgroundColor: 'white',
                      color: '#1A1A1A',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2D6A4F';
                      e.target.style.boxShadow = '0 0 0 3px rgba(45,106,79,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(27,67,50,0.15)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    style={{ color: '#6B5B4F' }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full mt-2">
                {t('connection.login')}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(27,67,50,0.12)' }} />
              <span className="text-xs font-medium" style={{ color: '#6B5B4F' }}>
                {t('connection.or')}
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(27,67,50,0.12)' }} />
            </div>

            {/* Demo Button */}
            <button onClick={handleDemo} className="btn-secondary w-full mb-5" style={{ borderColor: '#1B4332', color: '#1B4332' }}>
              {t('connection.demo')}
            </button>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
              <button
                className="transition-colors hover:opacity-80"
                style={{ color: '#6B5B4F' }}
                onClick={() => alert('Forgot password feature coming soon')}
              >
                {t('connection.forgot')}
              </button>
              <button
                className="transition-colors hover:opacity-80"
                style={{ color: '#2D6A4F' }}
                onClick={() => alert('Registration feature coming soon')}
              >
                {t('connection.new')}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
