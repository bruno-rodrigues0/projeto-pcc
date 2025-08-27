import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FormLayoutProps {
  title: string;
  description: string;
  backUrl: string;
  backText: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  title,
  description,
  backUrl,
  backText,
  icon,
  children
}) => {
  const navigate = useNavigate();

  return (
    <div className="form-page">
      {/* Header */}
      <div className="form-header">
        <div className="form-header-content">
          <div>
            <button
              onClick={() => navigate(backUrl)}
              className="back-button"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backText}
            </button>
            <h1 className="text-3xl font-bold text-gray-900 text-gradient">{title}</h1>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
          <div className="form-header-icon">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="form-container">
        {children}
      </div>
    </div>
  );
};

interface FormCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  icon,
  children,
  className = ''
}) => {
  return (
    <div className={`admin-card ${className}`}>
      <div className="form-section-header">
        <h2 className="form-section-title">
          {icon}
          {title}
        </h2>
        <p className="form-section-description">{description}</p>
      </div>
      {children}
    </div>
  );
};

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error,
  hint,
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className={`form-label ${required ? 'field-required' : ''}`}>
        {label}
      </label>
      {children}
      {error && <p className="form-error">{error}</p>}
      {hint && !error && <p className="form-hint">{hint}</p>}
    </div>
  );
};

interface FormActionsProps {
  onCancel: () => void;
  onSubmit: () => void;
  cancelText?: string;
  submitText?: string;
  isLoading?: boolean;
  loadingText?: string;
}

export const FormActions: React.FC<FormActionsProps> = ({
  onCancel,
  onSubmit,
  cancelText = 'Cancelar',
  submitText = 'Salvar',
  isLoading = false,
  loadingText = 'Salvando...'
}) => {
  return (
    <div className="form-actions">
      <button
        type="button"
        onClick={onCancel}
        className="btn-secondary"
      >
        {cancelText}
      </button>
      <button
        type="submit"
        onClick={onSubmit}
        disabled={isLoading}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="loading-spinner sm mr-2"></div>
            {loadingText}
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {submitText}
          </>
        )}
      </button>
    </div>
  );
};

export default FormLayout;
